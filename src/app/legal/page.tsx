// src/app/legal/page.tsx
import Container from "@/components/ui/Container";
import Link from "next/link";
import { getServerI18n } from "@/i18n/server";
import { listMdxMeta } from "@/lib/content/mdx";
import LegalToc from "./LegalToc";

export default async function LegalHubPage() {
  const { locale, t } = await getServerI18n();
  const docs = await listMdxMeta("legal", locale);

  return (
    <div className="py-14 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t("legal.title")}
          </h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">
                {t("legal.toc")}
              </div>

              <nav className="mt-4">
                <LegalToc docs={docs} />
              </nav>
            </div>
          </aside>

          <div className="space-y-4">
            {docs.map((d) => (
              <Link
                key={d.slug}
                href={`/legal/${d.slug}`}
                className="block rounded-3xl border border-slate-200 bg-white p-6 hover:bg-slate-50"
              >
                <div className="text-lg font-semibold text-slate-900">{d.title}</div>
                {d.description && <p className="mt-2 text-sm text-slate-600">{d.description}</p>}
                <div className="mt-4 text-sm font-semibold text-slate-900 hover:underline">
                  Open
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
