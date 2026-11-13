import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Scale, Cookie, ShieldAlert } from "lucide-react";

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
    description: "Spifex privacy policy, terms of service, cookie notice and acceptable use information.",
    path: "/legal",
  });
}

const primary = [
  { slug: "privacy", title: "Privacy Policy", description: "How Spifex handles personal data, account information and service data.", icon: FileText },
  { slug: "user_terms", title: "Terms of Service", description: "Rules for using the Spifex website, platform and related services.", icon: Scale },
  { slug: "cookie_notice", title: "Cookie Notice", description: "Cookies, local storage and similar technologies used by this website.", icon: Cookie },
  { slug: "prohibited_and_restricted_activities", title: "Acceptable Use", description: "Activities that are prohibited or restricted when using Spifex.", icon: ShieldAlert },
] as const;

export default async function LegalHubPage() {
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);
  const docs = await listMdxMeta("legal", contentLocale);

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
              Policies and terms
            </h1>
            <p className="mt-5 text-lg leading-8 text-(--muted)">
              These documents explain how Spifex handles data, cookies and use of the website and services. They are
              provided for general information and should be reviewed by qualified legal counsel for your organization.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {primary.map((item) => {
              const Icon = item.icon;
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
                    <span className="mt-2 block text-sm leading-6 text-(--muted)">{item.description}</span>
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
