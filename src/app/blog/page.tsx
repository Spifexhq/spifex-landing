import type { Metadata } from "next";

import BlogIndexClient from "@/components/blog/BlogIndexClient";
import Container from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServerI18n, toContentLocale } from "@/i18n/server";
import { listMdxMeta } from "@/lib/content/mdx";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return pageMetadata({
    title: t("blog.indexTitle"),
    description: t("blog.indexSubtitle"),
    path: "/blog",
  });
}

export default async function BlogPage() {
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);
  const posts = await listMdxMeta("blog", contentLocale);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "Spifex Blog",
            description: "Insights on financial operations, cash flow, banking, settlements and AI connections.",
            path: "/blog",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <div className="bg-(--canvas) py-14 sm:py-16 lg:py-20">
        <Container>
          <BlogIndexClient posts={posts} />
        </Container>
      </div>
    </>
  );
}
