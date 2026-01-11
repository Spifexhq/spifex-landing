"use client";

import Link from "next/link";
import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { Check, ChevronDown, Search, X } from "lucide-react";

import { useT } from "@/components/i18n/I18nProvider";
import type { DocMeta } from "@/lib/content/mdx";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* Utils: height-measured collapse (smooth content push-down)                  */
/* -------------------------------------------------------------------------- */

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useMeasureHeight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const raf =
      typeof window !== "undefined"
        ? window.requestAnimationFrame(() => setHeight(el.scrollHeight))
        : 0;

    const ro = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      if (typeof window !== "undefined") window.cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, height };
}

function Collapse({
  open,
  children,
  className,
}: {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, height } = useMeasureHeight<HTMLDivElement>();

  return (
    <div
      className={cn(
        "will-change-[height] overflow-hidden",
        "transition-[height,opacity,transform] duration-300 ease-out",
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        className
      )}
      style={{ height: open ? height : 0 }}
      aria-hidden={!open}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* UI: Personalized SearchBox (expands + animated placeholder)                 */
/* -------------------------------------------------------------------------- */

function SearchBox({
  value,
  onChange,
  placeholder,
  clearLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  clearLabel: string;
}) {
  const [focused, setFocused] = useState(false);
  const expanded = focused || value.trim().length > 0;

  return (
    <div
      className={cn(
        "relative w-full lg:w-auto",
        "transition-[width] duration-300 ease-out",
        expanded ? "lg:w-120" : "lg:w-80"
      )}
    >
      <div
        className={cn(
          "relative flex items-center rounded-xl border bg-white",
          "border-slate-200",
          "transition-[box-shadow,border-color] duration-200",
          // thinner focus highlight (inset 1px ring)
          focused ? "border-slate-300 ring-1 ring-inset ring-slate-300/60" : "ring-0"
        )}
      >
        <Search className="ml-3 h-4 w-4 text-slate-400" />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "h-11 w-full bg-transparent px-3 pr-11 text-sm text-slate-900 outline-none",
            "placeholder:opacity-0"
          )}
        />

        {/* Animated placeholder */}
        <div
          className={cn(
            "pointer-events-none absolute left-10 top-1/2 -translate-y-1/2",
            "text-sm text-slate-400",
            "transition-all duration-200",
            expanded ? "opacity-0 translate-x-1" : "opacity-100 translate-x-0"
          )}
        >
          {placeholder}
        </div>

        {value.trim().length > 0 ? (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()} // keep focus
            onClick={() => onChange("")}
            className="absolute right-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label={clearLabel}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dropdown portal renderer                                                    */
/* -------------------------------------------------------------------------- */

type DropdownPos = { left: number; top: number; width: number };

function TopicOptionsPortal({
  open,
  pos,
  options,
  allLabel,
}: {
  open: boolean;
  pos: DropdownPos | null;
  options: Array<{ value: string; label: string }>;
  allLabel: string;
}) {
  if (typeof document === "undefined") return null;
  if (!pos) return null;

  return createPortal(
    <Transition
      as={Fragment}
      show={open}
      enter="transition ease-out duration-150"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-120"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <ListboxOptions
        static
        style={{
          position: "fixed",
          left: pos.left,
          top: pos.top,
          width: pos.width,
        }}
        className={cn(
          "z-9999 overflow-auto rounded-2xl border border-slate-200 bg-white shadow-xl",
          "max-h-72 focus:outline-none"
        )}
      >
        {options.map((opt) => (
          <ListboxOption
            key={opt.value}
            value={opt.value}
            className={({ active }) =>
              cn(
                "relative cursor-pointer select-none px-4 py-3 text-sm",
                active ? "bg-slate-50 text-slate-900" : "text-slate-700"
              )
            }
          >
            {({ selected }) => (
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "truncate",
                    selected ? "font-semibold text-slate-900" : "font-medium"
                  )}
                >
                  {opt.value === "__all__" ? allLabel : opt.label}
                </span>

                {selected ? (
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white">
                    <Check className="h-4 w-4 text-slate-900" />
                  </span>
                ) : null}
              </div>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Transition>,
    document.body
  );
}

/* -------------------------------------------------------------------------- */
/* UI: Topic dropdown (portaled options)                                       */
/* -------------------------------------------------------------------------- */

function TopicDropdown({
  label,
  value,
  onChange,
  options,
  allLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  allLabel: string;
}) {
  const ALL = "__all__";
  const items = useMemo(() => [ALL, ...options], [options]);

  const displayValue = value === ALL ? allLabel : value;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = useState<DropdownPos | null>(null);

  const updatePos = useCallback(() => {
    const el = buttonRef.current;
    if (!el || typeof window === "undefined") return;

    const r = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const margin = 12;

    const width = Math.round(Math.min(r.width, vw - margin * 2));
    const left = Math.round(Math.min(Math.max(r.left, margin), vw - margin - width));

    // glued under the button (no extra gap) + rounded to avoid subpixel seam
    const top = Math.round(r.bottom);

    setPos({ left, top, width });
  }, []);

  useEffect(() => {
    const onWin = () => {
      if (typeof window === "undefined") return;
      window.requestAnimationFrame(updatePos);
    };

    window.addEventListener("resize", onWin);
    window.addEventListener("scroll", onWin, true);

    return () => {
      window.removeEventListener("resize", onWin);
      window.removeEventListener("scroll", onWin, true);
    };
  }, [updatePos]);

  const portalOptions = useMemo(
    () => items.map((v) => ({ value: v, label: v })),
    [items]
  );

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative mt-2">
            <ListboxButton
              ref={buttonRef}
              onClick={() => {
                requestAnimationFrame(updatePos);
              }}
              onKeyDown={() => {
                requestAnimationFrame(updatePos);
              }}
              className={cn(
                "relative w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-left",
                "text-sm text-slate-900",
                // thinner focus highlight
                "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-slate-300/60 focus:border-slate-300"
              )}
            >
              <span className="block truncate">{displayValue}</span>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </span>
            </ListboxButton>

            <TopicOptionsPortal
              open={open}
              pos={pos}
              options={portalOptions}
              allLabel={allLabel}
            />
          </div>
        )}
      </Listbox>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main                                                                        */
/* -------------------------------------------------------------------------- */

export default function BlogIndexClient({ posts }: { posts: DocMeta[] }) {
  const t = useT();

  const [query, setQuery] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);
  const [topicDraft, setTopicDraft] = useState<string>("__all__");
  const [topicApplied, setTopicApplied] = useState<string>("__all__");

  const allTopics = useMemo(() => {
    const s = new Set<string>();
    for (const p of posts) for (const tg of p.tags ?? []) s.add(tg);
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return posts.filter((p) => {
      if (topicApplied !== "__all__" && !(p.tags ?? []).includes(topicApplied)) return false;
      if (!q) return true;

      const hay = `${p.title} ${p.description ?? ""} ${(p.tags ?? []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [posts, query, topicApplied]);

  const filterButtonClass = cn(
    "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium",
    "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-slate-300/60 focus:border-slate-300",
    filterOpen
      ? "border-slate-300 bg-slate-50 text-slate-900"
      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
  );

  return (
    <div>
      {/* Header row */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-6xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
            {t("blog.indexTitle")}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">{t("blog.indexSubtitle")}</p>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
          <div className="flex w-full items-center gap-3 lg:w-auto">
            <SearchBox
              value={query}
              onChange={setQuery}
              placeholder={t("blog.searchPlaceholder")}
              clearLabel={t("blog.clearSearch")}
            />

            <button
              type="button"
              onClick={() => setFilterOpen((v) => !v)}
              className={filterButtonClass}
              aria-expanded={filterOpen}
              aria-controls="blog-filter-bar"
            >
              {t("blog.filter")}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  filterOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible filter bar */}
      <Collapse open={filterOpen} className="mt-8">
        <div id="blog-filter-bar" className="rounded-2xl bg-slate-50 p-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_160px] lg:items-end">
              <TopicDropdown
                label={t("blog.topic")}
                value={topicDraft}
                onChange={setTopicDraft}
                options={allTopics}
                allLabel={t("blog.filterAll")}
              />

              <button
                type="button"
                onClick={() => {
                  setTopicApplied(topicDraft);
                  setFilterOpen(false);
                }}
                className={cn(
                  "h-11.5 rounded-xl bg-orange-600 px-4 text-sm font-semibold text-white",
                  "hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200"
                )}
              >
                {t("blog.applyFilter")}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <div>
                {topicApplied !== "__all__" ? (
                  <span>
                    {t("blog.activeFilter")}:{" "}
                    <span className="font-semibold text-slate-700">{topicApplied}</span>
                  </span>
                ) : (
                  <span>{t("blog.noActiveFilter")}</span>
                )}
              </div>

              {topicApplied !== "__all__" ? (
                <button
                  type="button"
                  onClick={() => {
                    setTopicDraft("__all__");
                    setTopicApplied("__all__");
                  }}
                  className="rounded-lg px-2 py-1 font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                >
                  {t("blog.clearFilter")}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </Collapse>

      {/* Posts */}
      <div className="mt-10">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600">
            {t("blog.noResults")}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-3xl border border-slate-200 bg-white p-7 hover:bg-slate-50"
              >
                {p.tags?.length ? (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((tg) => (
                      <span
                        key={tg}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="text-xl font-semibold tracking-tight text-slate-900 group-hover:underline">
                  {p.title}
                </div>

                {p.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                ) : null}

                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                  {p.updatedAt ? <span>{p.updatedAt}</span> : null}
                  {p.readingTime ? <span>•</span> : null}
                  {p.readingTime ? <span>{p.readingTime}</span> : null}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
