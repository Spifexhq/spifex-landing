import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Accessibility,
  Bot,
  BookOpen,
  Building2,
  Clock,
  Cookie,
  FileLock2,
  FileText,
  ReceiptText,
  Scale,
  Server,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServerI18n, toContentLocale } from "@/i18n/server";
import { listMdxMeta } from "@/lib/content/mdx";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import LegalToc from "./LegalToc";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: "Legal",
    description:
      "Spifex legal information: privacy, terms, DPA, subprocessors, security, data retention, refunds, accessibility and AI transparency.",
    path: "/legal",
  });
}

const featuredSlugs = [
  "privacy",
  "user_terms",
  "legal_notice",
  "cookie_notice",
  "data_processing_agreement",
  "subprocessors",
  "security_measures",
  "data_retention",
  "refund_and_cancellation",
  "accessibility_statement",
  "ai_transparency",
  "data_portability_and_switching",
  "prohibited_and_restricted_activities",
  "gdpr_compliance_guide",
] as const;

const cardIcons: Record<string, typeof FileText> = {
  privacy: FileText,
  user_terms: Scale,
  legal_notice: Building2,
  cookie_notice: Cookie,
  data_processing_agreement: FileLock2,
  subprocessors: Server,
  security_measures: ShieldCheck,
  data_retention: Clock,
  refund_and_cancellation: ReceiptText,
  accessibility_statement: Accessibility,
  ai_transparency: Bot,
  data_portability_and_switching: ArrowRight,
  prohibited_and_restricted_activities: ShieldAlert,
  gdpr_compliance_guide: BookOpen,
};

async function getLegalDocs(contentLocale: "en" | "pt") {
  const [localized, english] = await Promise.all([
    listMdxMeta("legal", contentLocale),
    listMdxMeta("legal", "en"),
  ]);
  const bySlug = new Map(english.map((doc) => [doc.slug, doc]));
  for (const doc of localized) bySlug.set(doc.slug, doc);
  return Array.from(bySlug.values());
}

export default async function LegalHubPage() {
  const { locale, t } = await getServerI18n();
  const contentLocale = toContentLocale(locale);
  const docs = await getLegalDocs(contentLocale);
  const docsBySlug = new Map(docs.map((doc) => [doc.slug, doc]));
  const featured = featuredSlugs.flatMap((slug) => {
    const doc = docsBySlug.get(slug);
    return doc ? [doc] : [];
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Spifex Legal",
            description: "Privacy policy, terms of service, cookie notice and acceptable use information for Spifex.",
            path: "/legal",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
          ]),
        ]}
      />

      <div className="bg-(--canvas) py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--brand-strong)">Legal</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-(--ink) sm:text-5xl">
              {t("legal.hubTitle")}
            </h1>
            <p className="mt-5 text-lg leading-8 text-(--muted)">{t("legal.hubIntro")}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => {
              const Icon = cardIcons[item.slug] ?? FileText;
              return (
                <Link
                  key={item.slug}
                  href={`/legal/${item.slug}`}
                  className="group flex gap-4 rounded-2xl border border-(--line) bg-white p-6 shadow-(--shadow-soft) transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--canvas) text-(--ink) ring-1 ring-(--line)">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-lg font-semibold tracking-[-0.02em] text-(--ink) group-hover:text-(--brand-strong)">
                        {item.title}
                      </span>
                      <ArrowRight size={16} className="shrink-0 text-(--muted)" aria-hidden="true" />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-(--muted)">
                      {item.description ?? "Spifex legal information and policies."}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-(--ink)">All documents</h2>
            <div className="mt-4 rounded-2xl border border-(--line) bg-white p-5 shadow-(--shadow-soft)">
              <LegalToc docs={docs.map((d) => ({ slug: d.slug, title: d.title, category: d.category }))} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
