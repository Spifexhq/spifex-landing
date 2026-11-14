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

  const [localizedDocs, englishDocs] = await Promise.all([
    listMdxMeta("legal", contentLocale),
    listMdxMeta("legal", "en"),
  ]);
  const docsBySlug = new Map(englishDocs.map((item) => [item.slug, item]));
  for (const item of localizedDocs) docsBySlug.set(item.slug, item);
  const legalDocs = Array.from(docsBySlug.values());

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
        <Container className="py-10 sm:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-(--muted)">
            <Link href="/" className="hover:text-(--ink)">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/legal" className="hover:text-(--ink)">Legal</Link>
            <span aria-hidden="true">/</span>
            <span className="text-(--ink)">{doc.meta.title}</span>
          </nav>

          <header className="mt-6 max-w-3xl">
            {doc.meta.category ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--brand-strong)">
                {doc.meta.category}
              </p>
            ) : null}
            <h1 className="mt-3 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-(--ink) sm:text-4xl">
              {doc.meta.title}
            </h1>
            {doc.meta.description ? (
              <p className="mt-4 max-w-2xl text-base leading-7 text-(--muted)">{doc.meta.description}</p>
            ) : null}
            {updated ? (
              <p className="mt-4 border-t border-(--line) pt-4 text-sm text-(--muted)">
                Last updated: <time dateTime={doc.meta.updatedAt}>{updated}</time>
              </p>
            ) : null}
          </header>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
            <div className="min-w-0 rounded-3xl border border-(--line) bg-white p-6 shadow-(--shadow-soft) sm:p-8">
              <div className="prose prose-slate max-w-none text-[15px] [&>*:first-child]:mt-0 prose-headings:tracking-[-0.03em] prose-headings:text-(--ink) prose-h2:mt-8 prose-h2:text-xl prose-h3:mt-6 prose-h3:text-lg prose-p:text-(--muted) prose-p:leading-6 prose-li:text-(--muted) prose-li:leading-6 prose-strong:text-(--ink) prose-a:font-medium prose-a:text-(--brand-strong) prose-a:no-underline hover:prose-a:underline prose-hr:border-(--line)">
                {doc.content}
              </div>
            </div>

            <aside className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] flex-col lg:flex">
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-2xl border border-(--line) bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--muted)">Legal</p>
                <nav className="mt-3 flex flex-col divide-y divide-(--line) text-sm" aria-label="Legal documents">
                  {legalDocs.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/legal/${item.slug}`}
                      aria-current={item.slug === slug ? "page" : undefined}
                      className={
                        item.slug === slug
                          ? "py-2 font-semibold text-(--ink)"
                          : "py-2 text-(--ink-soft) hover:text-(--ink)"
                      }
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
              <Link href="/legal" className="mt-4 inline-flex shrink-0 text-sm font-medium text-(--muted) hover:text-(--ink)">
                ← All legal documents
              </Link>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}
