import type { MetadataRoute } from "next";
import { listMdxMeta } from "@/lib/content/mdx";

export const runtime = "nodejs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.SITE_URL || "https://www.spifex.com").replace(/\/+$/, "");

  const blog = await listMdxMeta("blog", "en");
  const legal = await listMdxMeta("legal", "en");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/legal`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/blog/rss.xml`, changeFrequency: "weekly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blog.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legal.map((d) => ({
    url: `${siteUrl}/legal/${d.slug}`,
    lastModified: d.updatedAt ? new Date(d.updatedAt) : undefined,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...blogRoutes, ...legalRoutes];
}
