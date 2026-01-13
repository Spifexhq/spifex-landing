"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

type TocDoc = {
  slug: string;
  title: string;
  category?: string | null;
};

type Group = {
  key: string; // raw category
  label: string; // what we display
  docs: TocDoc[];
};

function normalizeKey(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
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
      label: key, // keep exactly as written (e.g., "privacy")
      docs: items,
    }));

    // Only group categories that appear more than once
    const multi = groupsAll.filter((g) => g.docs.length > 1);

    const groupedSlugs = new Set<string>();
    for (const g of multi) for (const d of g.docs) groupedSlugs.add(d.slug);

    // Everything else (no category, empty category, or category that appears only once) stays ungrouped
    const ungroupedDocs = docs.filter((d) => !groupedSlugs.has(d.slug));

    return { ungrouped: ungroupedDocs, groups: multi };
  }, [docs]);

  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-2">
      {ungrouped.map((d) => (
        <Link
          key={d.slug}
          href={`/legal/${d.slug}`}
          className="block rounded-xl px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
        >
          {d.title}
        </Link>
      ))}

      {groups.map((g) => {
        const isOpen = !!open[g.key];

        return (
          <div key={g.key} className="rounded-2xl">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
              aria-expanded={isOpen}
              onClick={() => setOpen((prev) => ({ ...prev, [g.key]: !isOpen }))}
            >
              <span>{g.label}</span>
              <ChevronDown
                className={[
                  "h-4 w-4 shrink-0 transition-transform duration-200",
                  isOpen ? "rotate-180" : "rotate-0",
                ].join(" ")}
              />
            </button>

            {/* Smooth open/close via grid row animation */}
            <div
              className={[
                "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              ].join(" ")}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={[
                    "mt-1 space-y-1 pl-3 transition-opacity duration-200",
                    isOpen ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {g.docs.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/legal/${d.slug}`}
                      className="block rounded-xl px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {d.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
