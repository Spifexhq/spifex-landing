import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { DOCS, getDoc } from "@/content/docs";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import { getServerI18n } from "@/i18n/server";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DOCS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return pageMetadata({ title: "Documentation", description: "", path: `/docs/${slug}`, noIndex: true });
  return pageMetadata({
    title: doc.title,
    description: doc.summary,
    path: `/docs/${doc.slug}`,
  });
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  const { t } = await getServerI18n();
  const related = doc.related.map(getDoc).filter(Boolean);

  return (
    <main className="bg-white py-12 sm:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Documentation", path: "/docs" },
          { name: doc.title, path: `/docs/${doc.slug}` },
        ])}
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Link href="/docs" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]">
              <ArrowLeft size={13} aria-hidden="true" /> {t("docsPage.back")}
            </Link>
            <nav aria-label="Documentation" className="mt-6 space-y-1 border-l border-[var(--line)] pl-4">
              {DOCS.map((item) => (
                <Link
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  className={`block rounded-md px-2 py-1.5 text-xs leading-5 ${
                    item.slug === doc.slug
                      ? "bg-[var(--brand-soft)] font-semibold text-[var(--ink)]"
                      : "text-[var(--muted)] hover:bg-[var(--canvas)] hover:text-[var(--ink)]"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
              {t(`docsPage.categories.${doc.category}`)}
            </p>
            <h1 className="text-balance mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
              {doc.title}
            </h1>
            <p className="text-pretty mt-4 text-lg leading-7 text-[var(--muted)]">{doc.summary}</p>
            <p className="mt-3 text-xs text-[#8b95a3]">
              {t("docsPage.updated")}: {doc.updated}
            </p>

            <div className="mt-10 space-y-10">
              {doc.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">{section.heading}</h2>
                  {section.body.length ? (
                    <div className="mt-3 space-y-3 text-[15px] leading-7 text-[var(--ink-soft)]">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.bullets?.length ? (
                    <ul className="mt-4 space-y-2 text-[15px] leading-7 text-[var(--ink-soft)]">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            {related.length ? (
              <section className="mt-12 border-t border-[var(--line)] pt-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {t("docsPage.related")}
                </h2>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {related.map((item) =>
                    item ? (
                      <Link
                        key={item.slug}
                        href={`/docs/${item.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--canvas)]"
                      >
                        {item.title}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    ) : null,
                  )}
                </div>
              </section>
            ) : null}
          </article>
        </div>
      </Container>
    </main>
  );
}
