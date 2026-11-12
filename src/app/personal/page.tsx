import type { Metadata } from "next";

import { AudienceLanding } from "@/components/marketing/AudienceLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import { getAudiencePageContent } from "@/content/audience-pages";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerI18n();
  const content = getAudiencePageContent("personal", locale);

  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/personal",
  });
}

export default async function PersonalPage() {
  const { locale, t } = await getServerI18n();
  const content = getAudiencePageContent("personal", locale);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.personal"), path: "/personal" },
          ]),
          faqSchema(content.faq),
        ]}
      />
      <AudienceLanding
        content={content}
        kind="personal"
        primaryHref="/signup?intent=signup&product=personal&plan=free"
        pricingHref="/pricing?product=personal"
        otherHref="/business"
      />
    </>
  );
}
