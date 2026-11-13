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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useMeasureHeight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setHeight(el.scrollHeight);
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => ro.disconnect();
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
      aria-hidden={!open}
      className={cn(
        "overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out motion-reduce:transition-none",
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        className
      )}
      style={{ maxHeight: open ? height : 0 }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

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
    <div className={cn("relative transition-[width] duration-200 ease-out motion-reduce:transition-none", expanded ? "w-full lg:w-[460px]" : "w-full lg:w-[320px]")}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-(--muted)" />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={expanded ? placeholder : ""}
          className={cn(
            "w-full rounded-xl border border-(--line) bg-white py-3 pl-10 pr-10",
            "text-sm text-(--ink) placeholder:text-(--muted)",
            "focus:outline-none"
          )}
        />

        <div
          className={cn(
            "pointer-events-none absolute left-10 top-1/2 -translate-y-1/2",
            "text-sm text-(--muted) transition-all duration-200",
            expanded ? "opacity-0 translate-x-1" : "opacity-100 translate-x-0"
          )}
        >
          {placeholder}
        </div>

        {value.trim().length > 0 ? (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onChange("")}
            className="absolute right-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-(--muted) hover:bg-(--canvas) hover:text-(--ink)"
            aria-label={clearLabel}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

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
  if (typeof document === "undefined" || !pos) return null;

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
        style={{ position: "fixed", left: pos.left, top: pos.top, width: pos.width }}
        className="z-[9999] max-h-72 overflow-auto rounded-xl border border-(--line) bg-white shadow-xl focus:outline-none"
      >
        {options.map((opt) => (
          <ListboxOption
            key={opt.value}
            value={opt.value}
            className={({ active }) =>
              cn(
                "relative cursor-pointer select-none px-4 py-3 text-sm",
                active ? "bg-(--canvas) text-(--ink)" : "text-(--ink-soft)"
              )
            }
          >
            {({ selected }) => (
              <div className="flex items-center justify-between gap-3">
                <span className={cn("truncate", selected ? "font-semibold text-(--ink)" : "font-medium")}>
                  {opt.value === "__all__" ? allLabel : opt.label}
                </span>
                {selected ? (
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-(--line) bg-white">
                    <Check className="h-4 w-4 text-(--brand-strong)" />
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
    setPos({ left, top: Math.round(r.bottom), width });
  }, []);

  useEffect(() => {
    const onWin = () => window.requestAnimationFrame(updatePos);
    window.addEventListener("resize", onWin);
    window.addEventListener("scroll", onWin, true);
    return () => {
      window.removeEventListener("resize", onWin);
      window.removeEventListener("scroll", onWin, true);
    };
  }, [updatePos]);

  const portalOptions = useMemo(() => items.map((v) => ({ value: v, label: v })), [items]);

  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--muted)">{label}</div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative mt-2">
            <ListboxButton
              ref={buttonRef}
              onClick={() => requestAnimationFrame(updatePos)}
              onKeyDown={() => requestAnimationFrame(updatePos)}
              className="relative w-full rounded-xl border border-(--line) bg-white px-4 py-3 pr-10 text-left text-sm text-(--ink) focus:outline-none"
            >
              <span className="block truncate">{displayValue}</span>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown className="h-4 w-4 text-(--muted)" />
              </span>
            </ListboxButton>
            <TopicOptionsPortal open={open} pos={pos} options={portalOptions} allLabel={allLabel} />
          </div>
        )}
      </Listbox>
    </div>
  );
}

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(d);
}

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

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--brand-strong)">Insights</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-(--ink) sm:text-5xl">
            {t("blog.indexTitle")}
          </h1>
          <p className="mt-4 text-lg leading-8 text-(--muted)">{t("blog.indexSubtitle")}</p>
        </div>

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
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-colors focus:outline-none",
              filterOpen
                ? "border-(--ink)/15 bg-(--ink) text-white"
                : "border-(--line) bg-white text-(--ink-soft) hover:bg-(--canvas)"
            )}
            aria-expanded={filterOpen}
            aria-controls="blog-filter-bar"
          >
            {t("blog.filter")}
            <ChevronDown className={cn("h-4 w-4 transition-transform", filterOpen ? "rotate-180" : "rotate-0")} />
          </button>
        </div>
      </div>

      <Collapse open={filterOpen} className="mt-8">
        <div id="blog-filter-bar" className="rounded-2xl border border-(--line) bg-white p-5 shadow-(--shadow-soft)">
          <div className="grid gap-4 lg:grid-cols-[1fr_180px] lg:items-end">
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
              className="h-[46px] rounded-xl bg-(--ink) px-4 text-sm font-semibold text-white transition-colors hover:bg-(--ink-soft) focus:outline-none"
            >
              {t("blog.applyFilter")}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-(--muted)">
            <div>
              {topicApplied !== "__all__" ? (
                <span>
                  {t("blog.activeFilter")}: <span className="font-semibold text-(--ink)">{topicApplied}</span>
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
                className="rounded-lg px-2 py-1 font-medium text-(--ink-soft) hover:bg-(--canvas)"
              >
                {t("blog.clearFilter")}
              </button>
            ) : null}
          </div>
        </div>
      </Collapse>

      <div className="mt-10">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-(--line) bg-white p-8 text-sm text-(--muted)">
            {t("blog.noResults")}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.slug} className="group">
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-(--line) bg-white p-6 shadow-(--shadow-soft) transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  {p.category || p.tags?.length ? (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.category ? (
                        <span className="rounded-full bg-(--canvas) px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-(--brand-strong)">
                          {p.category}
                        </span>
                      ) : null}
                      {(p.tags ?? []).slice(0, 2).map((tg) => (
                        <span key={tg} className="rounded-full border border-(--line) px-2.5 py-1 text-[11px] font-medium text-(--muted)">
                          {tg}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <h2 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-(--ink) group-hover:text-(--brand-strong)">
                    {p.title}
                  </h2>
                  {p.description ? (
                    <p className="mt-3 flex-1 text-sm leading-6 text-(--muted)">{p.description}</p>
                  ) : (
                    <div className="flex-1" />
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-(--line) pt-4 text-xs text-(--muted)">
                    {formatDate(p.publishedAt || p.updatedAt) ? <time>{formatDate(p.publishedAt || p.updatedAt)}</time> : null}
                    {p.readingTime ? <span aria-hidden="true">·</span> : null}
                    {p.readingTime ? <span>{p.readingTime}</span> : null}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
