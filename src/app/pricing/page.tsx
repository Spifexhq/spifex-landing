// src\app\pricing\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { currencyForCountry } from "@/lib/location/billing-currency";
import { getPricingTiers, type PricingTier } from "@/content/pricing";
import { createT, type Messages } from "@/i18n/translator";
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

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
}

function detectLocaleFromBrowser(): Locale {
  const candidates: string[] = [];

  if (typeof navigator !== "undefined") {
    if (Array.isArray(navigator.languages)) {
      candidates.push(...navigator.languages);
    }
    if (navigator.language) {
      candidates.push(navigator.language);
    }
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
  if (locale === "pt") return pt;
  if (locale === "pt-BR") return ptBR;
  if (locale === "fr") return fr;
  if (locale === "de") return de;
  return en;
}

export default function PricingPage() {
  const [locale, setLocale] = useState<Locale>("en");

  const { country: detectedCountryRaw, isLoading } = useAutoCountry();
  const detectedCountry = normalizeCountry(detectedCountryRaw);

  const effectiveCountry = detectedCountry;
  const currency = currencyForCountry(effectiveCountry);

  const messages = useMemo<Messages>(() => getMessages(locale), [locale]);
  const t = useMemo(() => createT(messages), [messages]);

  const tiers = useMemo<PricingTier[]>(
    () => getPricingTiers(t, locale, currency),
    [t, locale, currency]
  );

  useEffect(() => {
    const id = window.setTimeout(() => {
      const resolvedLocale = detectLocaleFromBrowser();
      setLocale((prev) => (prev === resolvedLocale ? prev : resolvedLocale));
      setCookie(LOCALE_COOKIE_NAME, resolvedLocale, 60 * 60 * 24 * 365);
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (!detectedCountry) return;

    const id = window.setTimeout(() => {
      setCookie(COUNTRY_COOKIE_NAME, detectedCountry, 60 * 60 * 24 * 30);
    }, 0);

    return () => window.clearTimeout(id);
  }, [isLoading, detectedCountry]);

  return (
    <div className="py-14 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t("pricing.title")}
          </h1>

          <p className="mt-3 text-slate-600">{t("pricing.subtitle")}</p>
          <p className="mt-2 text-xs text-slate-500">{t("pricing.note")}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className={cn(
                "rounded-3xl border bg-white p-6",
                tier.featured ? "border-slate-900 shadow-sm" : "border-slate-200"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {tier.name}
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                    {tier.priceLabel}
                  </div>
                </div>

                {tier.featured && (
                  <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    {t("pricing.mostPopular")}
                  </div>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"
                      aria-hidden
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={tier.ctaHref}
                  variant={tier.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}