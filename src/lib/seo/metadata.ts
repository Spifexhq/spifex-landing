import type { Metadata } from "next";

export const SITE_URL = (process.env.SITE_URL || "https://www.spifex.com").replace(/\/+$/, "");
export const SITE_NAME = "Spifex";
export const DEFAULT_OG_IMAGE = "/opengraph-image";

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  section,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  section?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const openGraph =
    type === "article"
      ? {
          type: "article" as const,
          url,
          siteName: SITE_NAME,
          title,
          description,
          images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }],
          ...(publishedTime ? { publishedTime } : {}),
          ...(modifiedTime ? { modifiedTime } : {}),
          ...(authors?.length ? { authors } : {}),
          ...(tags?.length ? { tags } : {}),
          ...(section ? { section } : {}),
        }
      : {
          type: "website" as const,
          url,
          siteName: SITE_NAME,
          title,
          description,
          images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }],
        };

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
