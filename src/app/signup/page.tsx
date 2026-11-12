"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Container from "@/components/ui/Container";
import { api, type PlanCode } from "@/lib/api/requests";
import type { ApiErrorBody } from "@/lib/api/types";
import { useAutoCountry } from "@/lib/location/getCountryFromLocale";
import { currencyForCountry } from "@/lib/location/billing-currency";
import { getCountries, type CountryOption } from "@/lib/location/countries";
import {
  LOCALE_META,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/location/markets";
import { useI18n, useLocale, useT } from "@/components/i18n/I18nProvider";
import { Lock } from "lucide-react";
import {
  setAccessToken,
  setOrgExternalId,
  setUserId,
} from "@/lib/api/auth-storage";

import Input from "@/shared/ui/Input";
import Snackbar from "@/shared/ui/Snackbar";
import Checkbox from "@/shared/ui/Checkbox";
import Button from "@/shared/ui/Button";
import SelectDropdown from "@/shared/ui/SelectDropdown/SelectDropdown";
import {
  trackCompleteRegistration,
  trackInitiateCheckout,
  trackLead,
  trackMeta,
} from "@/lib/analytics/meta";

type Step = 1 | 2 | 3 | 4 | 5;

type LanguageOption = {
  value: Locale;
  label: string;
};

type Snack =
  | {
      message: React.ReactNode;
      severity: "success" | "error" | "warning" | "info";
    }
  | null;

const MAX_RESEND_ATTEMPTS = 2;
const RESEND_COUNTDOWN_SECONDS = 30;

const LANGUAGE_OPTIONS: LanguageOption[] = SUPPORTED_LOCALES.map((code) => ({
  value: code,
  label: LOCALE_META[code].nativeName,
}));

function normalizeCountry(value?: string | null): string {
  const v = (value || "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(v) ? v : "";
}

function isPlanCode(value: string | null): value is PlanCode {
  return (
    value === "starter" ||
    value === "pro" ||
    value === "personal-starter" ||
    value === "personal-pro"
  );
}

/**
 * The signup API currently accepts en/pt/fr/de only. UI languages without a
 * backend counterpart fall back to English for account communications.
 */
function toBackendLanguage(locale: Locale): "en" | "pt" | "fr" | "de" {
  if (locale === "pt" || locale === "pt-BR") return "pt";
  if (locale === "fr" || locale === "lb") return "fr";
  if (locale === "de") return "de";
  return "en";
}

function validateEmailFormat(email: string) {
  const normalized = email.trim().toLowerCase();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  return { isValid: ok, normalized };
}

function validatePassword(password: string) {
  if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must have at least 8 characters.",
    };
  }
  return { isValid: true, message: "" };
}

function getApiMessage(err: unknown, fallback: string): string {
  const e = err as Partial<ApiErrorBody> | undefined;
  if (e?.message && typeof e.message === "string") return e.message;
  return fallback;
}

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const t = useT();

  const { country: siteCountry } = useI18n();

  const { country: autoCountryRaw } = useAutoCountry();
  const autoCountry = normalizeCountry(siteCountry) || normalizeCountry(autoCountryRaw);

  const intent = searchParams.get("intent") === "subscribe" ? "subscribe" : "signup";
  const emailFromQuery = searchParams.get("email")?.trim() || "";
  const planFromQuery = searchParams.get("plan");
  const paidPlan = isPlanCode(planFromQuery) ? planFromQuery : null;
  const productFromQuery = searchParams.get("product");
  const initialCategory: "business" | "personal" = paidPlan
    ? paidPlan.startsWith("personal-")
      ? "personal"
      : "business"
    : productFromQuery === "personal"
      ? "personal"
      : "business";
  const [productCategory, setProductCategory] = useState<"business" | "personal">(initialCategory);
  const planCode = paidPlan;
  const freePlanCode = productCategory === "personal" ? "personal-free" : "free";
  const isPaidIntent = intent === "subscribe" && !!planCode;

  function changeCategory(next: "business" | "personal") {
    if (paidPlan) return;
    setProductCategory(next);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("product", next);
    url.searchParams.set("plan", "free");
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }

  const browserLanguage =
    typeof navigator !== "undefined" ? navigator.language : "";

  const browserLanguages =
    typeof navigator !== "undefined" && Array.isArray(navigator.languages)
      ? [...navigator.languages]
      : [];

  const locale =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().locale
      : "en";

  const timezone =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "UTC";

  const [step, setStep] = useState<Step>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [snack, setSnack] = useState<Snack>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [prefs, setPrefs] = useState<{
    language: Locale | "";
    country: string;
    currency: string;
  }>({
    language: currentLocale,
    country: "",
    currency: "USD",
  });

  const [consents, setConsents] = useState({
    privacy: false,
    tos: false,
    marketing: false,
  });

  const [challengeId, setChallengeId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const [resendAttempts, setResendAttempts] = useState(0);

  const countries = useMemo<CountryOption[]>(
    () => getCountries(prefs.language || "en"),
    [prefs.language]
  );

  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption[]>([]);

  useEffect(() => {
    if (!emailFromQuery) return;

    setForm((prev) => ({
      ...prev,
      email: prev.email || emailFromQuery.toLowerCase(),
    }));
  }, [emailFromQuery]);

  useEffect(() => {
    trackMeta("ViewContent", { contentName: "Signup" });
  }, []);

  useEffect(() => {
    if (!prefs.language) return;
    const found = LANGUAGE_OPTIONS.find((item: LanguageOption) => item.value === prefs.language);
    setSelectedLanguage(found ? [found] : []);
  }, [prefs.language]);

  useEffect(() => {
    if (!prefs.country) {
      setSelectedCountry([]);
      return;
    }

    const found = countries.find((item: CountryOption) => item.value === prefs.country);
    setSelectedCountry(found ? [found] : []);
  }, [prefs.country, countries]);

  useEffect(() => {
    if (!autoCountry) return;

    setPrefs((prev) => {
      const nextCountry = prev.country || autoCountry;
      return {
        ...prev,
        country: nextCountry,
        currency: currencyForCountry(nextCountry),
      };
    });
  }, [autoCountry]);

  useEffect(() => {
    if (!prefs.country) return;

    setPrefs((prev) => ({
      ...prev,
      currency: currencyForCountry(prev.country),
    }));
  }, [prefs.country]);

  useEffect(() => {
    if (resendCountdown <= 0) return;

    const timer = window.setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [resendCountdown]);

  const isStep1Incomplete =
    !form.name.trim() ||
    !form.email.trim() ||
    !form.password ||
    !form.confirmPassword;

  const isStep2Incomplete = !prefs.language || !prefs.country || !prefs.currency;
  const isStep3Incomplete = !consents.privacy || !consents.tos;
  const canResend = resendCountdown === 0 && resendAttempts < MAX_RESEND_ATTEMPTS;

  const heading = useMemo(() => {
    if (step === 4) return t("signup.verifyTitle");
    if (step === 5) return t("signup.redirectingTitle");
    return isPaidIntent ? t("signup.createAccountPaid") : t("signup.createAccount");
  }, [step, isPaidIntent, t]);

  const subheading = useMemo(() => {
    if (step === 4) {
      return t("signup.codeSentTo", { email: form.email });
    }
    if (step === 5) {
      return t("signup.preparingCheckout");
    }
    if (isPaidIntent && planCode) {
      return t("signup.planSelected", {
        category: productCategory === "personal" ? t("signup.personal") : t("signup.business"),
        plan: planCode,
      });
    }
    return t("signup.startFree", {
      category: productCategory === "personal" ? t("signup.personal") : t("signup.business"),
    });
  }, [step, isPaidIntent, planCode, form.email, productCategory, t]);

  const handleInputChange =
    (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "email" ? e.target.value.replace(/\s/g, "") : e.target.value;

      setForm((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleVerificationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6));
  };

  const handleConsentChange =
    (field: keyof typeof consents) => (e: ChangeEvent<HTMLInputElement>) => {
      setConsents((prev) => ({
        ...prev,
        [field]: e.target.checked,
      }));
    };

  const showSnack = (
    message: React.ReactNode,
    severity: "success" | "error" | "warning" | "info"
  ) => {
    setSnack({ message, severity });
  };

  const submitStep1 = async () => {
    if (isStep1Incomplete) {
      showSnack(t("signup.fillAllFields"), "warning");
      return;
    }

    const emailCheck = validateEmailFormat(form.email);
    if (!emailCheck.isValid) {
      showSnack(t("signup.invalidEmail"), "warning");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showSnack(t("signup.passwordsMismatch"), "warning");
      return;
    }

    const passwordCheck = validatePassword(form.password);
    if (!passwordCheck.isValid) {
      showSnack(t("signup.passwordMin"), "warning");
      return;
    }

    try {
      setIsLoading(true);

      const res = await api.checkEmailAvailability(emailCheck.normalized);
      const available = Boolean(res.data?.available);

      if (!available) {
        showSnack(t("signup.emailInUse"), "warning");
        return;
      }

      setForm((prev) => ({
        ...prev,
        email: emailCheck.normalized,
      }));

      trackLead({ email: emailCheck.normalized, contentName: "Signup" });
      setStep(2);
    } catch (err) {
      showSnack(getApiMessage(err, t("signup.couldNotValidateEmail")), "error");
    } finally {
      setIsLoading(false);
    }
  };

  const submitStep2 = async () => {
    if (isStep2Incomplete) {
      showSnack(t("signup.fillAllFields"), "warning");
      return;
    }

    setStep(3);
  };

  const submitStep3 = async () => {
    if (isStep3Incomplete) {
      showSnack(t("signup.mustAccept"), "warning");
      return;
    }

    try {
      setIsLoading(true);

      const res = await api.signUpStart({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        product_category: productCategory,
        plan_code: freePlanCode,
        workspace_name: productCategory === "personal" ? "Personal workspace" : "Business workspace",
        timezone,
        country: prefs.country,
        language: toBackendLanguage(prefs.language || currentLocale),
        currency: currencyForCountry(prefs.country),
        browser_language: browserLanguage,
        browser_languages: browserLanguages,
        locale,
        consents: {
          privacy_policy: consents.privacy,
          terms_of_service: consents.tos,
          marketing: consents.marketing,
        },
      });

      setChallengeId(res.data.challenge_id);
      setVerificationCode("");
      setResendCountdown(RESEND_COUNTDOWN_SECONDS);
      setResendAttempts(0);
      setStep(4);
      showSnack(t("signup.verificationSent"), "success");
    } catch (err) {
      showSnack(getApiMessage(err, t("signup.couldNotStart")), "error");
    } finally {
      setIsLoading(false);
    }
  };

  const submitVerification = async () => {
    const code = verificationCode.trim();

    if (!/^\d{6}$/.test(code)) {
      showSnack(t("signup.enterValidCode"), "warning");
      return;
    }
    
    if (!challengeId) {
      showSnack(t("signup.missingChallenge"), "error");
      return;
    }

    try {
      setIsLoading(true);

      const verifyRes = await api.signUpVerifyCode({
        challenge_id: challengeId,
        code,
      });

      const access = verifyRes.data?.access || "";
      const orgExternalId =
        verifyRes.data?.organization?.organization?.id || "";
      const userId = verifyRes.data?.user?.id || "";

      if (!access) {
        showSnack(t("signup.missingAccess"), "error");
        return;
      }

      setAccessToken(access);
      if (orgExternalId) setOrgExternalId(orgExternalId);
      if (userId) setUserId(userId);

      trackCompleteRegistration({
        email: form.email.trim().toLowerCase(),
        plan: planCode ?? freePlanCode,
        contentName: "Signup complete",
      });

      if (isPaidIntent && planCode) {
        trackInitiateCheckout({ plan: planCode, contentName: `${planCode} checkout` });
        setStep(5);

        const checkout = await api.createCheckoutSession(
          planCode,
          prefs.country || undefined
        );

        const url = checkout.data?.url;
        if (url) {
          window.location.href = url;
          return;
        }

        showSnack(t("signup.couldNotRedirect"), "error");
        return;
      }

      router.push(`/signup/success?plan=${planCode ?? freePlanCode}`);
    } catch (err) {
      showSnack(getApiMessage(err, t("signup.invalidCode")), "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend || !challengeId) return;

    try {
      setIsLoading(true);
      await api.signUpResendCode({ challenge_id: challengeId });
      setResendAttempts((prev) => prev + 1);
      setResendCountdown(RESEND_COUNTDOWN_SECONDS);
      showSnack(t("signup.codeSentAgain"), "success");
    } catch (err) {
      showSnack(getApiMessage(err, t("signup.couldNotResendCode")), "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep((prev) => {
      if (prev <= 1) return 1;
      if (prev === 4) return 1;
      return (prev - 1) as Step;
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (step === 1) return submitStep1();
    if (step === 2) return submitStep2();
    if (step === 3) return submitStep3();
    if (step === 4) return submitVerification();
  };

  return (
    <main className="min-h-screen bg-slate-50 py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              {heading}
            </h1>

            <p className="mt-2 text-sm text-slate-500">{subheading}</p>

            {step <= 4 && (
              <div className="mt-4 flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      step >= s ? "bg-slate-900" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {step < 5 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  {!paidPlan && (
                    <div>
                      <p className="text-xs font-medium text-slate-600">{t("signup.workspaceType")}</p>
                      <div
                        className="mt-2 grid grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1"
                        role="group"
                        aria-label={t("signup.workspaceType")}
                      >
                        {(["business", "personal"] as const).map((key) => (
                          <button
                            key={key}
                            type="button"
                            aria-pressed={productCategory === key}
                            onClick={() => changeCategory(key)}
                            disabled={isLoading}
                            className={[
                              "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                              "focus:outline-none",
                              productCategory === key
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500 hover:text-slate-900",
                            ].join(" ")}
                          >
                            {key === "personal" ? t("signup.personal") : t("signup.business")}
                          </button>
                        ))}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {productCategory === "personal"
                          ? t("signup.personalDesc")
                          : t("signup.businessDesc")}
                      </p>
                    </div>
                  )}

                  <Input
                    kind="text"
                    label={t("signup.fullName")}
                    placeholder={t("signup.fullName")}
                    type="text"
                    value={form.name}
                    onChange={handleInputChange("name")}
                    disabled={isLoading}
                    autoComplete="name"
                    size="xl"
                  />

                  <Input
                    kind="text"
                    label={t("signup.email")}
                    placeholder={t("signup.email")}
                    type="email"
                    value={form.email}
                    onChange={handleInputChange("email")}
                    disabled={isLoading}
                    autoComplete="email"
                    autoCorrect="off"
                    size="xl"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      kind="text"
                      label={t("signup.password")}
                      placeholder={t("signup.password")}
                      type="password"
                      value={form.password}
                      onChange={handleInputChange("password")}
                      disabled={isLoading}
                      showTogglePassword
                      autoComplete="new-password"
                      size="xl"
                    />

                    <Input
                      kind="text"
                      label={t("signup.confirmPassword")}
                      placeholder={t("signup.confirmPassword")}
                      type="password"
                      value={form.confirmPassword}
                      onChange={handleInputChange("confirmPassword")}
                      disabled={isLoading}
                      showTogglePassword
                      autoComplete="new-password"
                      size="xl"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <SelectDropdown<LanguageOption>
                    label={t("signup.language")}
                    items={LANGUAGE_OPTIONS}
                    selected={selectedLanguage}
                    onChange={(items: LanguageOption[]) => {
                      const next = (items[0]?.value ?? "") as Locale | "";
                      setSelectedLanguage(items);
                      setPrefs((prev) => ({
                        ...prev,
                        language: next,
                      }));
                    }}
                    getItemKey={(item: LanguageOption) => item.value}
                    getItemLabel={(item: LanguageOption) => item.label}
                    singleSelect
                    hideCheckboxes
                    clearOnClickOutside={false}
                    buttonLabel={selectedLanguage[0]?.label || t("signup.language")}
                    customStyles={{ maxHeight: "260px" }}
                    disabled={isLoading}
                    hideFilter
                    size="xl"
                  />

                  <SelectDropdown<CountryOption>
                    label={t("signup.country")}
                    items={countries}
                    selected={selectedCountry}
                    onChange={(items: CountryOption[]) => {
                      const value = (items[0]?.value ?? "").toString().toUpperCase();
                      setSelectedCountry(items);
                      setPrefs((prev) => ({
                        ...prev,
                        country: value,
                      }));
                    }}
                    getItemKey={(item: CountryOption) => item.value}
                    getItemLabel={(item: CountryOption) => item.label}
                    singleSelect
                    hideCheckboxes
                    clearOnClickOutside={false}
                    buttonLabel={selectedCountry[0]?.label || t("signup.country")}
                    customStyles={{ maxHeight: "260px" }}
                    disabled={isLoading}
                    size="xl"
                  />

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                      {t("signup.currency")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {currencyForCountry(prefs.country)}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {t("signup.currencyFixed")}
                    </p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 text-sm text-slate-700">
                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={consents.privacy}
                      onChange={handleConsentChange("privacy")}
                      disabled={isLoading}
                      required
                    />
                    <span>{t("signup.acceptPrivacy")}</span>
                  </label>

                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={consents.tos}
                      onChange={handleConsentChange("tos")}
                      disabled={isLoading}
                      required
                    />
                    <span>{t("signup.acceptTerms")}</span>
                  </label>

                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={consents.marketing}
                      onChange={handleConsentChange("marketing")}
                      disabled={isLoading}
                    />
                    <span>{t("signup.acceptMarketing")}</span>
                  </label>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {t("signup.codeSentTo", { email: form.email })}
                  </div>

                  <Input
                    kind="text"
                    label={t("signup.verificationCode")}
                    placeholder={t("signup.codePlaceholder")}
                    type="text"
                    value={verificationCode}
                    onChange={handleVerificationChange}
                    disabled={isLoading}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    size="xl"
                  />

                  <div className="flex items-center justify-between gap-3 text-sm">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-slate-600 hover:text-slate-900"
                      disabled={isLoading}
                    >
                      {t("signup.back")}
                    </button>

                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-slate-600 hover:text-slate-900 disabled:opacity-50"
                      disabled={isLoading || !canResend}
                    >
                      {resendCountdown > 0
                        ? t("signup.resendIn", { seconds: resendCountdown })
                        : resendAttempts >= MAX_RESEND_ATTEMPTS
                        ? t("signup.resendUnavailable")
                        : t("signup.resendCode")}
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                {step > 1 && step < 4 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    disabled={isLoading}
                    className="w-full sm:w-auto"
                  >
                    {t("signup.back")}
                  </Button>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  disabled={
                    isLoading ||
                    (step === 1 && isStep1Incomplete) ||
                    (step === 2 && isStep2Incomplete) ||
                    (step === 3 && isStep3Incomplete)
                  }
                  onClick={handleSubmit}
                  className="w-full sm:w-auto"
                >
                  {step === 4
                    ? t("signup.verifyCode")
                    : step === 3
                    ? t("signup.sendCode")
                    : t("signup.continue")}
                </Button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-700">
              {t("signup.preparingCheckout")}
            </div>
          )}
        </div>
      </Container>

      <Snackbar
        open={!!snack}
        onClose={() => setSnack(null)}
        autoHideDuration={5000}
        message={snack?.message}
        severity={snack?.severity}
        anchor={{ vertical: "bottom", horizontal: "center" }}
        pauseOnHover
        showCloseButton
      />
    </main>
  );
}