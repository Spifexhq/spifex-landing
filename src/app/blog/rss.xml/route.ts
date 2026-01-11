import { listMdxMeta } from "@/lib/content/mdx";

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

export async function GET() {
  const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
  const posts = await listMdxMeta("blog", "en"); // canonical feed in EN

  const items = posts
    .map((p) => {
      const link = `${siteUrl}/blog/${p.slug}`;
      const pubDate = p.updatedAt ? new Date(p.updatedAt).toUTCString() : new Date().toUTCString();
      const description = p.description ? escapeXml(p.description) : "";
      const title = escapeXml(p.title);

      return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${pubDate}</pubDate>
          ${description ? `<description>${description}</description>` : ""}
        </item>
      `.trim();
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Spifex Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Spifex insights on financial operations, cashflow, governance, and automation.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
