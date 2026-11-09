"use client";

import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/marketing/FAQ";
import { cn } from "@/lib/cn";
import { currencyForCountry } from "@/lib/location/billing-currency";
import {
  PLAN_CATALOG,
  PLAN_COMPARISON_ROWS,
  planHref,
  type PlanOffer,
  type ProductCategory,
  type SupportedCurrency,
} from "@/content/plans";
import { createT, type Messages } from "@/i18n/translator";
import { mergeMessages } from "@/i18n/merge";
import en from "@/i18n/dict/en";
import pt from "@/i18n/dict/pt";
import ptBR from "@/i18n/dict/pt-BR";
import fr from "@/i18n/dict/fr";
import de from "@/i18n/dict/de";
import { useAutoCountry } from "@/lib/location/getCountryFromLocale";

type Locale = "en" | "pt" | "pt-BR" | "fr" | "de";

const LOCALE_COOKIE_NAME = "spifex_locale";
const COUNTRY_COOKIE_NAME = "spifex_country";

function normalizeCountry(value?: string | null): string | null {
  if (!value) return null;
  const v = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(v) ? v : null;
}

function setCookie(name: string, value: string, maxAgeSeconds: number): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
}

function detectLocaleFromBrowser(): Locale {
  const candidates: string[] = [];
  if (typeof navigator !== "undefined") {
    if (Array.isArray(navigator.languages)) candidates.push(...navigator.languages);
    if (navigator.language) candidates.push(navigator.language);
  }
  try {
    const browserLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    if (browserLocale) candidates.push(browserLocale);
  } catch {}
  for (const raw of candidates) {
    const value = raw.toLowerCase();
    if (value.startsWith("pt-br") || value.includes("pt-br")) return "pt-BR";
    if (value === "pt" || value.startsWith("pt-")) return "pt";
    if (value.startsWith("fr") || value.includes("fr-")) return "fr";
    if (value.startsWith("de") || value.includes("de-")) return "de";
    if (value.startsWith("en") || value.includes("en-")) return "en";
  }
  return "en";
}

function getMessages(locale: Locale): Messages {
  if (locale === "pt") return mergeMessages(en, pt);
  if (locale === "pt-BR") return mergeMessages(en, ptBR);
  if (locale === "fr") return mergeMessages(en, fr);
  if (locale === "de") return mergeMessages(en, de);
  return en;
}

function formatMoney(locale: Locale, currency: SupportedCurrency, amount: number): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export default function PricingClient({
  initialCategory = "business",
  initialLocale = "en",
  initialCurrency = "USD",
}: {
  initialCategory?: ProductCategory;
  initialLocale?: Locale;
  initialCurrency?: SupportedCurrency;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [currency, setCurrency] = useState<SupportedCurrency>(initialCurrency);
  const [category, setCategory] = useState<ProductCategory>(initialCategory);
  const { country: detectedCountryRaw, isLoading } = useAutoCountry();
  const detectedCountry = normalizeCountry(detectedCountryRaw);

  const messages = useMemo<Messages>(() => getMessages(locale), [locale]);
  const t = useMemo(() => createT(messages), [messages]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const resolvedLocale = detectLocaleFromBrowser();
      setLocale(resolvedLocale);
      setCookie(LOCALE_COOKIE_NAME, resolvedLocale, 60 * 60 * 24 * 365);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (isLoading || !detectedCountry) return;
    const id = window.setTimeout(() => {
      setCurrency(currencyForCountry(detectedCountry) as SupportedCurrency);
      setCookie(COUNTRY_COOKIE_NAME, detectedCountry, 60 * 60 * 24 * 30);
    }, 0);
    return () => window.clearTimeout(id);
  }, [isLoading, detectedCountry]);

  const plans = PLAN_CATALOG[category];
  const rows = PLAN_COMPARISON_ROWS[category];
  const faqItems = useMemo(
    () =>
      (["card", "change", "currency", "taxes"] as const).map((key) => ({
        question: t(`pricingV2.faq.${key}.q`),
        answer: t(`pricingV2.faq.${key}.a`),
      })),
    [t],
  );

  const priceLabel = (plan: PlanOffer) => {
    if (plan.tier === "free") return t("pricingTiers.free.priceLabel");
    const amount = plan.prices[currency];
    return amount === null ? "—" : formatMoney(locale, currency, amount);
  };

  function changeCategory(next: ProductCategory) {
    setCategory(next);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("product", next);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  return (
    <div className="bg-white py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
            {t("pricingV2.eyebrow")}
          </p>
          <h1 className="text-balance mt-3 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
            {t("pricingV2.title")}
          </h1>
          <p className="text-pretty mt-5 max-w-2xl text-lg leading-7 text-[var(--muted)]">
            {t("pricingV2.subtitle")}
          </p>
          <p className="mt-3 text-xs text-[var(--muted)]">{t("pricing.note")}</p>
        </div>

        <div className="mt-8 inline-flex rounded-xl border border-[var(--line)] bg-[var(--canvas)] p-1" role="group" aria-label="Product category">
          {(["personal", "business"] as const).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={category === key}
              onClick={() => changeCategory(key)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/40",
                category === key ? "bg-white text-[var(--ink)] shadow-sm" : "text-[var(--muted)] hover:text-[var(--ink)]",
              )}
            >
              {t(`pricingV2.${key}`)}
            </button>
          ))}
        </div>

        <div className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          {category === "personal" ? t("pricingV2.personalDesc") : t("pricingV2.businessDesc")}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.code}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-white p-6",
                plan.featured ? "border-[var(--brand)] shadow-lift" : "border-[var(--line)] shadow-card",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[var(--ink)]">{plan.name}</div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {priceLabel(plan)}
                  </div>
                  <div className="mt-1 text-[11px] text-[var(--muted)]">
                    {plan.tier === "free" ? t("pricingV2.noCard") : t("pricingV2.billedMonthly")}
                  </div>
                </div>
                {plan.featured && (
                  <div className="rounded-full bg-[var(--brand-strong)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                    {t("pricingV2.recommended")}
                  </div>
                )}
              </div>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-[var(--ink-soft)]">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <Check size={14} className="mt-1 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={planHref(plan)}
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full"
                  dataCta={`pricing-${plan.category}-${plan.tier}`}
                >
                  {plan.tier === "free"
                    ? t("pricingV2.startFree")
                    : t("pricingV2.choosePlan", { plan: plan.name })}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[var(--muted)]">{t("pricingV2.trustNote")}</p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">{t("pricingV2.compareTitle")}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{t("pricingV2.compareSubtitle")}</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--line)]">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-[var(--canvas)] text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.code} className="px-4 py-3 font-semibold">
                      {plan.name.replace(`${category === "personal" ? "Personal" : "Business"} `, "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] bg-white text-[var(--ink-soft)]">
                {rows.map((row) => (
                  <tr key={row.key}>
                    <td className="px-4 py-3 font-medium text-[var(--ink)]">{row.label}</td>
                    {plans.map((plan) => (
                      <td key={plan.code} className="px-4 py-3">
                        {plan.comparison[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">{t("pricingV2.faqTitle")}</h2>
          <FAQ items={faqItems} />
        </section>
      </Container>
    </div>
  );
}
