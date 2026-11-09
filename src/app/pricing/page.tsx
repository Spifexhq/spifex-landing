import type { Metadata } from "next";

import PricingClient from "./PricingClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import { currencyForCountry } from "@/lib/location/billing-currency";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return pageMetadata({
    title: t("pricingV2.title"),
    description: t("pricingV2.subtitle"),
    path: "/pricing",
  });
}

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { t, locale, country } = await getServerI18n();
  const { product } = await searchParams;
  const initialCategory = product === "personal" ? "personal" : "business";
  const initialCurrency = currencyForCountry(country);
  const faq = (["card", "change", "currency", "taxes"] as const).map((key) => ({
    question: t(`pricingV2.faq.${key}.q`),
    answer: t(`pricingV2.faq.${key}.a`),
  }));

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
          softwareApplicationSchema(),
          faqSchema(faq),
        ]}
      />
      <PricingClient
        initialCategory={initialCategory}
        initialLocale={locale}
        initialCurrency={initialCurrency}
      />
    </main>
  );
}
