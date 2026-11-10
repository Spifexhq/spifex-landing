// src/lib/content/mdx.ts
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx/MDXComponents";

export type DocMeta = {
  slug: string;
  title: string;
  description?: string;
  seoTitle?: string;
  updatedAt?: string; // YYYY-MM-DD
  publishedAt?: string; // YYYY-MM-DD
  category?: string;
  tags?: string[];
  author?: string;
  readingTime?: string;
};

async function dirExists(p: string) {
  try {
    const stat = await fs.stat(p);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

function contentRoot() {
  return path.join(process.cwd(), "src", "content");
}

async function resolveLocaleDir(kind: "legal" | "blog", locale: "en" | "pt") {
  const root = contentRoot();
  const preferred = path.join(root, kind, locale);
  if (await dirExists(preferred)) return preferred;
  return path.join(root, kind, "en"); // fallback
}

function estimateReadingTime(markdown: string) {
  const words = markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/[#>*_\-\[\]\(\)!]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function normalizeTags(value: unknown): string[] | undefined {
  if (!value) return undefined;
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return undefined;
}

function normalizeCategory(value: unknown): string | undefined {
  if (!value) return undefined;
  if (Array.isArray(value)) {
    const first = value.map(String).map((s) => s.trim()).filter(Boolean)[0];
    return first || undefined;
  }
  if (typeof value === "string") {
    const v = value.trim();
    return v ? v : undefined;
  }
  return undefined;
}

export async function listMdxMeta(
  kind: "legal" | "blog",
  locale: "en" | "pt"
): Promise<DocMeta[]> {
  const baseDir = await resolveLocaleDir(kind, locale);
  const files = (await fs.readdir(baseDir)).filter((f) => f.endsWith(".mdx"));

  const metas: DocMeta[] = [];
  for (const file of files) {
    const full = path.join(baseDir, file);
    const raw = await fs.readFile(full, "utf8");
    const { data, content } = matter(raw);

    const slug = file.replace(/\.mdx$/, "");
    const tags = normalizeTags((data as any).tags);
    const author = (data as any).author ? String((data as any).author) : undefined;
    const category = normalizeCategory((data as any).category);

    metas.push({
      slug,
      title: String((data as any).title ?? slug),
      description: (data as any).description ? String((data as any).description) : undefined,
      seoTitle: (data as any).seoTitle ? String((data as any).seoTitle) : undefined,
      updatedAt: (data as any).updatedAt ? String((data as any).updatedAt) : undefined,
      publishedAt: (data as any).publishedAt ? String((data as any).publishedAt) : undefined,
      category,
      tags,
      author,
      readingTime: kind === "blog" ? estimateReadingTime(content) : undefined,
    });
  }

  metas.sort((a, b) => {
    if (a.updatedAt && b.updatedAt) return b.updatedAt.localeCompare(a.updatedAt);
    if (a.updatedAt) return -1;
    if (b.updatedAt) return 1;
    return a.title.localeCompare(b.title);
  });

  metas.sort((a, b) => {
    const ad = a.publishedAt ?? a.updatedAt ?? "";
    const bd = b.publishedAt ?? b.updatedAt ?? "";
    return bd.localeCompare(ad) || a.title.localeCompare(b.title);
  });
  return metas;
}

export async function renderMdxBySlug(
  kind: "legal" | "blog",
  locale: "en" | "pt",
  slug: string
) {
  const baseDir = await resolveLocaleDir(kind, locale);
  const full = path.join(baseDir, `${slug}.mdx`);

  let raw: string;
  try {
    raw = await fs.readFile(full, "utf8");
  } catch {
    const fallback = path.join(contentRoot(), kind, "en", `${slug}.mdx`);
    raw = await fs.readFile(fallback, "utf8");
  }

  const parsed = matter(raw);
  const readingTime = kind === "blog" ? estimateReadingTime(parsed.content) : undefined;

  const { content, frontmatter } = await compileMDX<{
    title?: string;
    description?: string;
    seoTitle?: string;
    updatedAt?: string;
    publishedAt?: string;
    category?: string | string[];
    tags?: string[] | string;
    author?: string;
  }>({
    source: raw,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  const tags = normalizeTags(frontmatter.tags);
  const category = normalizeCategory(frontmatter.category);

  return {
    content,
    meta: {
      slug,
      title: String(frontmatter.title ?? slug),
      description: frontmatter.description ? String(frontmatter.description) : undefined,
      seoTitle: frontmatter.seoTitle ? String(frontmatter.seoTitle) : undefined,
      updatedAt: frontmatter.updatedAt ? String(frontmatter.updatedAt) : undefined,
      publishedAt: frontmatter.publishedAt ? String(frontmatter.publishedAt) : undefined,
      category,
      tags,
      author: frontmatter.author ? String(frontmatter.author) : undefined,
      readingTime,
    } satisfies DocMeta,
  };
}
