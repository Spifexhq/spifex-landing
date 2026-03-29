// src/app/blog/page.tsx
import Container from "@/components/ui/Container";
import { getServerI18n, toContentLocale } from "@/i18n/server";
import { listMdxMeta } from "@/lib/content/mdx";
import BlogIndexClient from "@/components/blog/BlogIndexClient";

export default async function BlogPage() {
  const { locale } = await getServerI18n();
  const contentLocale = toContentLocale(locale);
  const posts = await listMdxMeta("blog", contentLocale);

  return (
    <div className="py-14 sm:py-16">
      <Container>
        <BlogIndexClient posts={posts} />
      </Container>
    </div>
  );
}
