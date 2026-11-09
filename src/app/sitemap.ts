import type { MetadataRoute } from "next";
import { listMdxMeta } from "@/lib/content/mdx";
import { DOCS } from "@/content/docs";
import { PRODUCT_LINKS } from "@/content/products";

export const runtime = "nodejs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.SITE_URL || "https://www.spifex.com").replace(/\/+$/, "");

  const blog = await listMdxMeta("blog", "en");
  const legal = await listMdxMeta("legal", "en");
  const products = PRODUCT_LINKS;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/solutions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/personal`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/business`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/customers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/docs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/blog/rss.xml`, changeFrequency: "weekly", priority: 0.3 },
    { url: `${siteUrl}/legal`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}${product.href}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const docRoutes: MetadataRoute.Sitemap = DOCS.map((doc) => ({
    url: `${siteUrl}/docs/${doc.slug}`,
    lastModified: new Date(doc.updated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blog.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legal.map((doc) => ({
    url: `${siteUrl}/legal/${doc.slug}`,
    lastModified: doc.updatedAt ? new Date(doc.updatedAt) : undefined,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...productRoutes, ...docRoutes, ...blogRoutes, ...legalRoutes];
}
