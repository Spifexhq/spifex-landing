import type { Locale } from "@/i18n/server";
import type { SupportedCurrency } from "@/lib/location/billing-currency";

export type PricingTierKey = "free" | "starter" | "pro";

export type PricingTier = {
  key: PricingTierKey;
  name: string;
  priceLabel: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type TFn = (key: string, vars?: Record<string, string | number>) => string;

const PRICE_TABLE: Record<
  Exclude<PricingTierKey, "free">,
  Record<SupportedCurrency, number>
> = {
  starter: {
    EUR: 15,
    USD: 12,
    BRL: 50,
  },
  pro: {
    EUR: 27,
    USD: 30,
    BRL: 150,
  },
};

function pickHighlights(t: TFn, baseKey: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => t(`${baseKey}.${i}`));
}

function formatMoney(locale: Locale, currency: SupportedCurrency, amount: number): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function buildPaidPriceLabel(
  t: TFn,
  locale: Locale,
  currency: SupportedCurrency,
  amount: number
): string {
  return t("pricing.perMonthFrom", {
    price: formatMoney(locale, currency, amount),
  });
}

function buildSignupHref(key: PricingTierKey): string {
  if (key === "free") {
    return "/signup?intent=signup&plan=free";
  }
  return `/signup?intent=subscribe&plan=${key}`;
}

export function getPricingTiers(
  t: TFn,
  locale: Locale,
  currency: SupportedCurrency
): PricingTier[] {
  return [
    {
      key: "free",
      name: t("pricingTiers.free.name"),
      priceLabel: t("pricingTiers.free.priceLabel"),
      description: t("pricingTiers.free.description"),
      highlights: pickHighlights(t, "pricingTiers.free.highlights", 4),
      ctaLabel: t("pricingTiers.free.ctaLabel"),
      ctaHref: buildSignupHref("free"),
    },
    {
      key: "starter",
      name: t("pricingTiers.starter.name"),
      priceLabel: buildPaidPriceLabel(t, locale, currency, PRICE_TABLE.starter[currency]),
      description: t("pricingTiers.starter.description"),
      highlights: pickHighlights(t, "pricingTiers.starter.highlights", 4),
      ctaLabel: t("pricingTiers.starter.ctaLabel"),
      ctaHref: buildSignupHref("starter"),
    },
    {
      key: "pro",
      name: t("pricingTiers.pro.name"),
      priceLabel: buildPaidPriceLabel(t, locale, currency, PRICE_TABLE.pro[currency]),
      description: t("pricingTiers.pro.description"),
      highlights: pickHighlights(t, "pricingTiers.pro.highlights", 4),
      ctaLabel: t("pricingTiers.pro.ctaLabel"),
      ctaHref: buildSignupHref("pro"),
      featured: true,
    },
  ];
}