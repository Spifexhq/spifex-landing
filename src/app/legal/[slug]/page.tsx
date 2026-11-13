import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServerI18n, toContentLocale } from "@/i18n/server";
import { listMdxMeta, renderMdxBySlug } from "@/lib/content/mdx";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export async function generateStaticParams() {
  const en = await listMdxMeta("legal", "en");
  const pt = await listMdxMeta("legal", "pt");
  const merged = new Set([...en, ...pt].map((d) => d.slug));
  return Array.from(merged).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(d);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);
  try {
    const doc = await renderMdxBySlug("legal", contentLocale, slug);
    return pageMetadata({
      title: doc.meta.title,
      description: doc.meta.description ?? "Spifex legal information and policies.",
      path: `/legal/${slug}`,
      modifiedTime: doc.meta.updatedAt,
    });
  } catch {
    try {
      const doc = await renderMdxBySlug("legal", "en", slug);
      return pageMetadata({
        title: doc.meta.title,
        description: doc.meta.description ?? "Spifex legal information and policies.",
        path: `/legal/${slug}`,
        modifiedTime: doc.meta.updatedAt,
      });
    } catch {
      return pageMetadata({
        title: "Legal",
        description: "Spifex legal information and policies.",
        path: `/legal/${slug}`,
        noIndex: true,
      });
    }
  }
}

export default async function LegalDocPage({ params }: PageProps) {
  const { slug } = await params;
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);

  let doc;
  try {
    doc = await renderMdxBySlug("legal", contentLocale, slug);
  } catch {
    try {
      doc = await renderMdxBySlug("legal", "en", slug);
    } catch {
      notFound();
    }
  }

  const path = `/legal/${slug}`;
  const updated = formatDate(doc.meta.updatedAt);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: doc.meta.title,
            description: doc.meta.description ?? "Spifex legal information and policies.",
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            { name: doc.meta.title, path },
          ]),
        ]}
      />

      <article className="bg-(--canvas)">
        <Container className="py-14 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-(--muted)">
            <Link href="/" className="hover:text-(--ink)">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/legal" className="hover:text-(--ink)">Legal</Link>
            <span aria-hidden="true">/</span>
            <span className="text-(--ink)">{doc.meta.title}</span>
          </nav>

          <header className="mt-8 max-w-3xl">
            {doc.meta.category ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--brand-strong)">
                {doc.meta.category}
              </p>
            ) : null}
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-(--ink) sm:text-5xl">
              {doc.meta.title}
            </h1>
            {doc.meta.description ? (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-(--muted)">{doc.meta.description}</p>
            ) : null}
            {updated ? (
              <p className="mt-5 border-t border-(--line) pt-5 text-sm text-(--muted)">
                Last updated: <time dateTime={doc.meta.updatedAt}>{updated}</time>
              </p>
            ) : null}
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
            <div className="min-w-0 rounded-[1.5rem] border border-(--line) bg-white p-6 shadow-(--shadow-soft) sm:p-8 lg:p-10">
              <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
                These materials are provided for general information. They do not constitute legal advice and should be
                reviewed by qualified counsel for your organization and jurisdictions.
              </div>
              <div className="prose prose-slate max-w-none prose-headings:tracking-[-0.03em] prose-headings:text-(--ink) prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:text-(--muted) prose-p:leading-7 prose-li:text-(--muted) prose-strong:text-(--ink) prose-a:font-medium prose-a:text-(--brand-strong) prose-a:no-underline hover:prose-a:underline prose-hr:border-(--line)">
                {doc.content}
              </div>
            </div>

            <aside className="sticky top-24 hidden lg:block">
              <div className="rounded-2xl border border-(--line) bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--muted)">Legal</p>
                <nav className="mt-3 flex flex-col gap-2 text-sm" aria-label="Legal documents">
                  <Link href="/legal/privacy" className="text-(--ink-soft) hover:text-(--ink)">Privacy Policy</Link>
                  <Link href="/legal/user_terms" className="text-(--ink-soft) hover:text-(--ink)">Terms of Service</Link>
                  <Link href="/legal/cookie_notice" className="text-(--ink-soft) hover:text-(--ink)">Cookie Notice</Link>
                  <Link href="/legal/prohibited_and_restricted_activities" className="text-(--ink-soft) hover:text-(--ink)">Acceptable Use</Link>
                </nav>
              </div>
              <Link href="/legal" className="mt-4 inline-flex text-sm font-medium text-(--muted) hover:text-(--ink)">
                ← All legal documents
              </Link>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}
