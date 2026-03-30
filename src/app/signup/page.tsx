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
import { getCurrencies, type CurrencyOption } from "@/lib/currency/currencies";
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

type Step = 1 | 2 | 3 | 4 | 5;
type AppLanguage = "en" | "pt" | "fr" | "de";

type LanguageOption = {
  value: AppLanguage;
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

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
];

function normalizeCountry(value?: string | null): string {
  const v = (value || "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(v) ? v : "";
}

function isPlanCode(value: string | null): value is PlanCode {
  return value === "starter" || value === "pro";
}

function normalizeLanguageFromLocale(localeValue: string): AppLanguage {
  const raw = (localeValue || "en").toLowerCase();
  if (raw.startsWith("pt")) return "pt";
  if (raw.startsWith("fr")) return "fr";
  if (raw.startsWith("de")) return "de";
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

  const { country: autoCountryRaw } = useAutoCountry();
  const autoCountry = normalizeCountry(autoCountryRaw);

  const intent = searchParams.get("intent") === "subscribe" ? "subscribe" : "signup";
  const emailFromQuery = searchParams.get("email")?.trim() || "";
  const planFromQuery = searchParams.get("plan");
  const planCode = isPlanCode(planFromQuery) ? planFromQuery : null;

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
    language: AppLanguage | "";
    country: string;
    currency: string;
  }>({
    language: normalizeLanguageFromLocale(browserLanguage || locale),
    country: "",
    currency: "EUR",
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

  const currencies = useMemo<CurrencyOption[]>(
    () => getCurrencies(prefs.language || "en"),
    [prefs.language]
  );

  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption[]>([]);

  useEffect(() => {
    if (!emailFromQuery) return;

    setForm((prev) => ({
      ...prev,
      email: prev.email || emailFromQuery.toLowerCase(),
    }));
  }, [emailFromQuery]);

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
    if (!prefs.currency) {
      setSelectedCurrency([]);
      return;
    }

    const found = currencies.find((item: CurrencyOption) => item.value === prefs.currency);
    setSelectedCurrency(found ? [found] : []);
  }, [prefs.currency, currencies]);

  useEffect(() => {
    if (!autoCountry) return;

    setPrefs((prev) => {
      const nextCountry = prev.country || autoCountry;
      return {
        ...prev,
        country: nextCountry,
        currency: prev.currency || currencyForCountry(nextCountry),
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
    if (step === 4) return "Verify your account";
    if (step === 5) return "Redirecting to secure checkout";
    return intent === "subscribe"
      ? "Create your account to continue"
      : "Create your account";
  }, [step, intent]);

  const subheading = useMemo(() => {
    if (step === 4) {
      return `We sent a 6-digit code to ${form.email}`;
    }
    if (step === 5) {
      return "Preparing your secure checkout...";
    }
    if (intent === "subscribe" && planCode) {
      return `Plan selected: ${planCode}`;
    }
    return "Finish your signup below.";
  }, [step, intent, planCode, form.email]);

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
      showSnack("Fill all fields.", "warning");
      return;
    }

    const emailCheck = validateEmailFormat(form.email);
    if (!emailCheck.isValid) {
      showSnack("Invalid email.", "warning");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showSnack("Passwords do not match.", "warning");
      return;
    }

    const passwordCheck = validatePassword(form.password);
    if (!passwordCheck.isValid) {
      showSnack(passwordCheck.message, "warning");
      return;
    }

    try {
      setIsLoading(true);

      const res = await api.checkEmailAvailability(emailCheck.normalized);
      const available = Boolean(res.data?.available);

      if (!available) {
        showSnack("This email is already in use.", "warning");
        return;
      }

      setForm((prev) => ({
        ...prev,
        email: emailCheck.normalized,
      }));

      setStep(2);
    } catch (err) {
      showSnack(getApiMessage(err, "Could not validate email."), "error");
    } finally {
      setIsLoading(false);
    }
  };

  const submitStep2 = async () => {
    if (isStep2Incomplete) {
      showSnack("Fill all fields.", "warning");
      return;
    }

    setStep(3);
  };

  const submitStep3 = async () => {
    if (isStep3Incomplete) {
      showSnack("You must accept the required consents.", "warning");
      return;
    }

    try {
      setIsLoading(true);

      const res = await api.signUpStart({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        timezone,
        country: prefs.country,
        language: prefs.language || undefined,
        currency: prefs.currency,
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
      showSnack("Verification code sent.", "success");
    } catch (err) {
      showSnack(getApiMessage(err, "Could not start signup."), "error");
    } finally {
      setIsLoading(false);
    }
  };

  const submitVerification = async () => {
    const code = verificationCode.trim();

    if (!/^\d{6}$/.test(code)) {
      showSnack("Enter a valid 6-digit code.", "warning");
      return;
    }
    
    if (!challengeId) {
      showSnack("Verification challenge is missing.", "error");
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
        showSnack("Missing access token after verification.", "error");
        return;
      }

      setAccessToken(access);
      if (orgExternalId) setOrgExternalId(orgExternalId);
      if (userId) setUserId(userId);

      if (intent === "subscribe" && planCode) {
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

        showSnack("Could not redirect to checkout.", "error");
        return;
      }

      router.push("/signup/success");
    } catch (err) {
      showSnack(getApiMessage(err, "Invalid or expired verification code."), "error");
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
      showSnack("Code sent again.", "success");
    } catch (err) {
      showSnack(getApiMessage(err, "Could not resend code."), "error");
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
                  <Input
                    kind="text"
                    label="Full name"
                    placeholder="Full name"
                    type="text"
                    value={form.name}
                    onChange={handleInputChange("name")}
                    disabled={isLoading}
                    autoComplete="name"
                    size="xl"
                  />

                  <Input
                    kind="text"
                    label="Email"
                    placeholder="Email"
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
                      label="Password"
                      placeholder="Password"
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
                      label="Confirm password"
                      placeholder="Confirm password"
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
                    label="Language"
                    items={LANGUAGE_OPTIONS}
                    selected={selectedLanguage}
                    onChange={(items: LanguageOption[]) => {
                      const next = (items[0]?.value ?? "") as AppLanguage | "";
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
                    buttonLabel={selectedLanguage[0]?.label || "Language"}
                    customStyles={{ maxHeight: "260px" }}
                    disabled={isLoading}
                    hideFilter
                    size="xl"
                  />

                  <SelectDropdown<CountryOption>
                    label="Country"
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
                    buttonLabel={selectedCountry[0]?.label || "Country"}
                    customStyles={{ maxHeight: "260px" }}
                    disabled={isLoading}
                    size="xl"
                  />

                  <SelectDropdown<CurrencyOption>
                    label="Currency"
                    items={currencies}
                    selected={selectedCurrency}
                    onChange={(items: CurrencyOption[]) => {
                      const value = items[0]?.value ?? "";
                      setSelectedCurrency(items);
                      setPrefs((prev) => ({
                        ...prev,
                        currency: value || prev.currency,
                      }));
                    }}
                    getItemKey={(item: CurrencyOption) => item.value}
                    getItemLabel={(item: CurrencyOption) => item.label}
                    singleSelect
                    hideCheckboxes
                    clearOnClickOutside={false}
                    buttonLabel={selectedCurrency[0]?.label || "Currency"}
                    customStyles={{ maxHeight: "220px" }}
                    disabled={isLoading}
                    size="xl"
                  />
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
                    <span>I accept the privacy policy.</span>
                  </label>

                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={consents.tos}
                      onChange={handleConsentChange("tos")}
                      disabled={isLoading}
                      required
                    />
                    <span>I accept the terms of service.</span>
                  </label>

                  <label className="flex items-start gap-3">
                    <Checkbox
                      checked={consents.marketing}
                      onChange={handleConsentChange("marketing")}
                      disabled={isLoading}
                    />
                    <span>I agree to receive marketing communications.</span>
                  </label>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    We sent a 6-digit code to{" "}
                    <span className="font-medium text-slate-900">
                      {form.email}
                    </span>
                  </div>

                  <Input
                    kind="text"
                    label="Verification code"
                    placeholder="Enter 6-digit code"
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
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-slate-600 hover:text-slate-900 disabled:opacity-50"
                      disabled={isLoading || !canResend}
                    >
                      {resendCountdown > 0
                        ? `Resend (${resendCountdown}s)`
                        : resendAttempts >= MAX_RESEND_ATTEMPTS
                        ? "Resend unavailable"
                        : "Resend code"}
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
                    Back
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
                    ? "Verify code"
                    : step === 3
                    ? "Send verification code"
                    : "Continue"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-700">
              Preparing your secure checkout…
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