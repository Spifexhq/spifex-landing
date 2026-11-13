import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServerI18n, toContentLocale } from "@/i18n/server";
import { listMdxMeta, renderMdxBySlug } from "@/lib/content/mdx";
import { pageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";

export async function generateStaticParams() {
  const en = await listMdxMeta("blog", "en");
  const pt = await listMdxMeta("blog", "pt");
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
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);

  let post;
  try {
    post = await renderMdxBySlug("blog", contentLocale, slug);
  } catch {
    try {
      post = await renderMdxBySlug("blog", "en", slug);
    } catch {
      return pageMetadata({
        title: "Article",
        description: "Spifex insights for financial operations and cash flow control.",
        path: `/blog/${slug}`,
        noIndex: true,
      });
    }
  }

  const published = post.meta.publishedAt || post.meta.updatedAt;
  return pageMetadata({
    // Use the article's actual title so the document title matches the H1 and
    // the phrase readers search for.
    title: post.meta.title,
    description: post.meta.description ?? "Spifex insights on financial operations, cash flow and governance.",
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: published,
    modifiedTime: post.meta.updatedAt,
    authors: [post.meta.author || "Spifex"],
    tags: post.meta.tags,
    section: post.meta.category || "Financial operations",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);

  let post;
  try {
    post = await renderMdxBySlug("blog", contentLocale, slug);
  } catch {
    try {
      post = await renderMdxBySlug("blog", "en", slug);
    } catch {
      notFound();
    }
  }

  const published = post.meta.publishedAt || post.meta.updatedAt;
  const displayDate = formatDate(published);
  const path = `/blog/${slug}`;

  const allPosts = await listMdxMeta("blog", "en");
  const related = allPosts
    .filter((candidate) => candidate.slug !== slug)
    .map((candidate) => {
      const sharedTags = (candidate.tags ?? []).filter((tag) => (post.meta.tags ?? []).includes(tag)).length;
      const sameCategory = candidate.category === post.meta.category ? 1 : 0;
      return { candidate, score: sharedTags * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.candidate);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.meta.title,
            description: post.meta.description ?? "",
            path,
            datePublished: published,
            dateModified: post.meta.updatedAt,
            author: post.meta.author || "Spifex",
            keywords: post.meta.tags || [],
            section: post.meta.category || "Financial operations",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.meta.title, path },
          ]),
        ]}
      />

      <article className="bg-(--canvas)">
        <Container className="py-14 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-(--muted)">
            <Link href="/" className="hover:text-(--ink)">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-(--ink)">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[28ch] truncate text-(--ink) sm:max-w-none">{post.meta.title}</span>
          </nav>

          <header className="mt-8 max-w-3xl">
            {post.meta.category ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--brand-strong)">
                {post.meta.category}
              </p>
            ) : null}
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-(--ink) sm:text-5xl lg:text-[3.25rem]">
              {post.meta.title}
            </h1>
            {post.meta.description ? (
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-(--muted)">
                {post.meta.description}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-(--line) pt-5 text-sm text-(--muted)">
              <span className="font-medium text-(--ink-soft)">{post.meta.author || "Spifex"}</span>
              {displayDate ? (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={published}>{displayDate}</time>
                </>
              ) : null}
              {post.meta.readingTime ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.meta.readingTime}</span>
                </>
              ) : null}
            </div>

            {post.meta.tags?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                {post.meta.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-(--line) bg-white px-3 py-1 text-xs font-medium text-(--ink-soft)"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
            <div className="min-w-0 rounded-[1.5rem] border border-(--line) bg-white p-6 shadow-(--shadow-soft) sm:p-8 lg:p-10">
              <div className="prose prose-slate max-w-none prose-headings:tracking-[-0.03em] prose-headings:text-(--ink) prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:text-(--muted) prose-p:leading-7 prose-li:text-(--muted) prose-strong:text-(--ink) prose-a:font-medium prose-a:text-(--brand-strong) prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-(--brand) prose-blockquote:text-(--ink-soft) prose-hr:border-(--line)">
                {post.content}
              </div>
            </div>

            <aside className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] flex-col lg:flex">
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-2xl border border-(--line) bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--muted)">About Spifex</p>
                <p className="mt-3 text-sm leading-6 text-(--muted)">
                  Spifex is financial operations software for cash flow, banking visibility, settlements, reporting and
                  AI connections. Not a bank.
                </p>
                <Link
                  href="/signup?intent=signup&plan=free"
                  className="mt-4 inline-flex text-sm font-semibold text-(--brand-strong) hover:underline"
                >
                  Start free →
                </Link>
              </div>
              <Link href="/blog" className="mt-4 inline-flex shrink-0 text-sm font-medium text-(--muted) hover:text-(--ink)">
                ← All articles
              </Link>
            </aside>
          </div>

          {related.length > 0 ? (
            <section className="mt-14 border-t border-(--line) pt-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-(--ink)">Related reading</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-2xl border border-(--line) bg-white p-5 transition-colors hover:border-(--ink)/20 hover:bg-(--canvas)"
                  >
                    {item.category ? (
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-(--brand-strong)">
                        {item.category}
                      </p>
                    ) : null}
                    <h3 className="mt-2 text-sm font-semibold leading-5 text-(--ink)">{item.title}</h3>
                    {item.description ? (
                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-(--muted)">{item.description}</p>
                    ) : null}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </Container>
      </article>
    </>
  );
}
