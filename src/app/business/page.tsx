import type { Metadata } from "next";

import { AudienceLanding } from "@/components/marketing/AudienceLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import { getAudiencePageContent } from "@/content/audience-pages";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerI18n();
  const content = getAudiencePageContent("business", locale);

  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/business",
  });
}

export default async function BusinessPage() {
  const { locale, t } = await getServerI18n();
  const content = getAudiencePageContent("business", locale);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.business"), path: "/business" },
          ]),
          faqSchema(content.faq),
        ]}
      />
      <AudienceLanding
        content={content}
        kind="business"
        primaryHref="/signup?intent=signup&product=business&plan=free"
        pricingHref="/pricing?product=business"
        otherHref="/personal"
      />
    </>
  );
}
