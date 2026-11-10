import { listMdxMeta } from "@/lib/content/mdx";
import { SITE_URL } from "@/lib/seo/metadata";

export const runtime = "nodejs";
export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc2822(iso?: string) {
  if (!iso) return new Date().toUTCString();
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

export async function GET() {
  const posts = await listMdxMeta("blog", "en");

  const items = posts
    .map((p) => {
      const link = `${SITE_URL}/blog/${p.slug}`;
      const pubDate = toRfc2822(p.publishedAt || p.updatedAt);
      const description = p.description ? `<![CDATA[${p.description}]]>` : "";
      const title = escapeXml(p.title);
      const author = p.author ? `<author>${escapeXml(p.author)}</author>` : "";

      return `<item>
  <title>${title}</title>
  <link>${link}</link>
  <guid isPermaLink="true">${link}</guid>
  <pubDate>${pubDate}</pubDate>
  ${description ? `<description>${description}</description>` : ""}
  ${author}
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Spifex Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Insights on financial operations, cash flow, banking, settlements and AI connections from Spifex.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
