// src/content/pricing.ts

export type PricingTierKey = "starter" | "growth" | "enterprise";

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

type TFn = (key: string) => string;

function pickHighlights(t: TFn, baseKey: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => t(`${baseKey}.${i}`));
}

export function getPricingTiers(t: TFn): PricingTier[] {
  return [
    {
      key: "starter",
      name: t("pricingTiers.starter.name"),
      priceLabel: t("pricingTiers.starter.priceLabel"),
      description: t("pricingTiers.starter.description"),
      highlights: pickHighlights(t, "pricingTiers.starter.highlights", 4),
      ctaLabel: t("pricingTiers.starter.ctaLabel"),
      ctaHref: "https://dashboard.spifex.com/signup",
    },
    {
      key: "growth",
      name: t("pricingTiers.growth.name"),
      priceLabel: t("pricingTiers.growth.priceLabel"),
      description: t("pricingTiers.growth.description"),
      highlights: pickHighlights(t, "pricingTiers.growth.highlights", 4),
      ctaLabel: t("pricingTiers.growth.ctaLabel"),
      ctaHref: "https://dashboard.spifex.com/signup",
      featured: true,
    },
    {
      key: "enterprise",
      name: t("pricingTiers.enterprise.name"),
      priceLabel: t("pricingTiers.enterprise.priceLabel"),
      description: t("pricingTiers.enterprise.description"),
      highlights: pickHighlights(t, "pricingTiers.enterprise.highlights", 4),
      ctaLabel: t("pricingTiers.enterprise.ctaLabel"),
      ctaHref: "https://dashboard.spifex.com/signup",
    },
  ];
}
