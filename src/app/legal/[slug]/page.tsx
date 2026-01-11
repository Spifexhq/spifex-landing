import Container from "@/components/ui/Container";
import { getServerI18n } from "@/i18n/server";
import { listMdxMeta, renderMdxBySlug } from "@/lib/content/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const en = await listMdxMeta("legal", "en");
  const pt = await listMdxMeta("legal", "pt");
  const merged = new Set([...en, ...pt].map((d) => d.slug));
  return Array.from(merged).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegalDocPage({ params }: PageProps) {
  const { slug } = await params; // Next 16: params is async
  const { locale } = await getServerI18n();

  const doc = await (async () => {
    try {
      return await renderMdxBySlug("legal", locale, slug);
    } catch {
      return null;
    }
  })();

  if (!doc) return notFound();

  return (
    <div className="py-14 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {doc.meta.title}
          </h1>

          {doc.meta.description ? (
            <p className="mt-3 text-slate-600">{doc.meta.description}</p>
          ) : null}

          <article className="prose prose-slate mt-8 max-w-none">{doc.content}</article>
        </div>
      </Container>
    </div>
  );
}
