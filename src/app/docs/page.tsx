import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

import Container from "@/components/ui/Container";
import DocsSearch from "@/components/docs/DocsSearch";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return pageMetadata({
    title: t("docsPage.title"),
    description: t("docsPage.subtitle"),
    path: "/docs",
  });
}

export default async function DocsHubPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { t } = await getServerI18n();
  const { q } = await searchParams;

  return (
    <main className="bg-[var(--canvas)] py-14 sm:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Documentation", path: "/docs" },
        ])}
      />
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
            <BookOpen size={13} className="text-[var(--brand)]" aria-hidden="true" />
            {t("docsPage.eyebrow")}
          </span>
          <h1 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
            {t("docsPage.title")}
          </h1>
          <p className="text-pretty mt-4 text-lg leading-7 text-[var(--muted)]">{t("docsPage.subtitle")}</p>
        </div>

        <div className="mt-10 max-w-4xl">
          <DocsSearch initialQuery={q ?? ""} />
          <p className="mt-6 text-xs leading-5 text-[var(--muted)]">{t("docsPage.reviewNote")}</p>
        </div>
      </Container>
    </main>
  );
}
