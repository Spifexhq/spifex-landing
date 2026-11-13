"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

import { useT } from "@/components/i18n/I18nProvider";
import { DOCS, docSearchText, type DocArticle, type DocCategory } from "@/content/docs";
import { cn } from "@/lib/cn";

const CATEGORIES: DocCategory[] = [
  "gettingStarted",
  "cashflow",
  "banking",
  "reporting",
  "ai",
  "security",
];

export default function DocsSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const t = useT();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<DocCategory | "all">("all");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return DOCS.filter((doc) => {
      if (category !== "all" && doc.category !== category) return false;
      if (!needle) return true;
      return docSearchText(doc).includes(needle);
    });
  }, [category, query]);

  return (
    <div>
      <div className="rounded-2xl border border-(--line) bg-white p-3 shadow-card">
        <label htmlFor="docs-search" className="sr-only">
          {t("docsPage.searchLabel")}
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-transparent bg-(--canvas) px-3 focus-within:border-(--brand)">
          <Search size={16} className="shrink-0 text-(--muted)" aria-hidden="true" />
          <input
            id="docs-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("docsPage.searchPlaceholder")}
            className="h-11 w-full bg-transparent text-sm text-(--ink) outline-none placeholder:text-[#9aa1ad]"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
              category === "all"
                ? "bg-(--ink) text-white"
                : "bg-(--canvas) text-(--ink-soft) hover:bg-[#eeeae4]",
            )}
          >
            {t("docsPage.all")}
          </button>
          {CATEGORIES.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCategory(key)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                category === key
                  ? "bg-(--ink) text-white"
                  : "bg-(--canvas) text-(--ink-soft) hover:bg-[#eeeae4]",
              )}
            >
              {t(`docsPage.categories.${key}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {results.map((doc) => (
          <DocCard key={doc.slug} doc={doc} />
        ))}
      </div>
      {!results.length ? (
        <p className="mt-8 rounded-2xl border border-dashed border-(--line) bg-white p-8 text-center text-sm text-(--muted)">
          {t("docsPage.noResults")}
        </p>
      ) : null}
    </div>
  );
}

function DocCard({ doc }: { doc: DocArticle }) {
  const t = useT();
  return (
    <Link
      href={`/docs/${doc.slug}`}
      className="group flex flex-col rounded-2xl border border-(--line) bg-white p-5 transition-colors hover:border-[#d7d1c8] hover:bg-[#fffdfa]"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-(--brand-strong)">
        {t(`docsPage.categories.${doc.category}`)}
      </span>
      <span className="mt-2 text-[15px] font-semibold text-(--ink)">{doc.title}</span>
      <span className="mt-2 flex-1 text-xs leading-5 text-(--muted)">{doc.summary}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-(--ink)">
        {t("docsPage.readGuide")} <ArrowUpRight size={13} aria-hidden="true" />
      </span>
    </Link>
  );
}
