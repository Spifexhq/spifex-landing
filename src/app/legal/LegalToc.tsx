"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/cn";

type TocDoc = {
  slug: string;
  title: string;
  category?: string | null;
};

type Group = {
  key: string;
  label: string;
  docs: TocDoc[];
};

function normalizeKey(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default function LegalToc({ docs }: { docs: TocDoc[] }) {
  const { ungrouped, groups } = useMemo(() => {
    const map = new Map<string, TocDoc[]>();
    for (const d of docs) {
      const key = normalizeKey(d.category);
      if (!key) continue;
      const arr = map.get(key) ?? [];
      arr.push(d);
      map.set(key, arr);
    }

    const groupsAll: Group[] = Array.from(map.entries()).map(([key, items]) => ({
      key,
      label: key,
      docs: items,
    }));

    const singleDocGroupKeys = new Set(groupsAll.filter((g) => g.docs.length === 1).map((g) => g.key));
    const ungroupedDocs = docs.filter((d) => {
      const key = normalizeKey(d.category);
      return !key || singleDocGroupKeys.has(key);
    });
    const grouped = groupsAll.filter((g) => g.docs.length > 1);
    return { ungrouped: ungroupedDocs, groups: grouped };
  }, [docs]);

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.map((g) => [g.key, false]))
  );

  return (
    <nav aria-label="Legal documents">
      <ul className="space-y-1">
        {ungrouped.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/legal/${d.slug}`}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-(--ink-soft) transition-colors hover:bg-(--canvas) hover:text-(--ink)"
            >
              {d.title}
            </Link>
          </li>
        ))}

        {groups.map((g) => {
          const isOpen = Boolean(open[g.key]);
          return (
            <li key={g.key} className="pt-1">
              <button
                type="button"
                onClick={() => setOpen((s) => ({ ...s, [g.key]: !s[g.key] }))}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-(--ink) transition-colors hover:bg-(--canvas)"
                aria-expanded={isOpen}
              >
                <span>{g.label}</span>
                <ChevronDown
                  className={cn("h-4 w-4 text-(--muted) transition-transform", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>

              <div
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="min-h-0">
                  <ul className="mt-1 space-y-0.5 border-l border-(--line) pl-3 ml-3">
                    {g.docs.map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={`/legal/${d.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-(--muted) transition-colors hover:bg-(--canvas) hover:text-(--ink)"
                        >
                          {d.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
