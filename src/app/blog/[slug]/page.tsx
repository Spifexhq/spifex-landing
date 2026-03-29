import Container from "@/components/ui/Container";
import Link from "next/link";
import { getServerI18n, toContentLocale } from "@/i18n/server";
import { listMdxMeta, renderMdxBySlug } from "@/lib/content/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const en = await listMdxMeta("blog", "en");
  const pt = await listMdxMeta("blog", "pt");
  const merged = new Set([...en, ...pt].map((d) => d.slug));
  return Array.from(merged).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDateISO(iso?: string) {
  if (!iso) return null;
  return iso;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { locale, t } = await getServerI18n();
  const contentLocale = toContentLocale(locale);

  const post = await (async () => {
    try {
      return await renderMdxBySlug("blog", contentLocale, slug);
    } catch {
      return null;
    }
  })();

  if (!post) return notFound();

  const seriesLabel = post.meta.tags?.[0] ?? t("blog.seriesDefault");
  const author = post.meta.author ?? "Spifex";
  const updated = formatDateISO(post.meta.updatedAt);
  const readingTime = post.meta.readingTime;

  return (
    <>
      {/* Hero (Brex-like) */}
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-slate-950/70" />
        <div className="relative">
          <Container className="py-12 sm:py-16">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/70">
              <Link href="/blog" className="hover:text-white">
                {t("blog.breadcrumbBlog")}
              </Link>
              <span className="px-2">›</span>
              <span className="text-white/80">{t("blog.breadcrumbArticles")}</span>
              <span className="px-2">›</span>
              <span className="inline-block align-bottom min-w-0 max-w-70 truncate text-white/90 sm:max-w-75">
                {post.meta.title}
              </span>
            </nav>

            {/* Centered hero content */}
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <div className="text-sm font-semibold tracking-wide text-orange-400">
                {seriesLabel}
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                {post.meta.title}
              </h1>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/80">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                  {author.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-white/90">{author}</span>
                {updated ? <span>•</span> : null}
                {updated ? <span>{updated}</span> : null}
                {readingTime ? <span>•</span> : null}
                {readingTime ? <span>{readingTime}</span> : null}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Body (centered on the page) */}
      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            {post.meta.description ? (
              <p className="text-lg text-slate-600">{post.meta.description}</p>
            ) : null}

            <article className="prose prose-slate mt-8 max-w-none">
              {post.content}
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
