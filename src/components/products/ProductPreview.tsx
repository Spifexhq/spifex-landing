import { Check } from "lucide-react";

import { Icon } from "@/components/ui/Icon";
import { getProductLink, type ProductKey } from "@/content/products";
import type { ProductPreviewContent, PreviewStatus } from "@/content/product-pages";
import { PREVIEW_LABELS } from "@/i18n/preview-labels";
import type { Locale } from "@/lib/location/markets";

const STATUS: Record<PreviewStatus, { dot: string }> = {
  positive: { dot: "bg-[#16a34a]" },
  warning: { dot: "bg-[#d97706]" },
  neutral: { dot: "bg-[#94a3b8]" },
};

export function ProductPreview({
  productKey,
  preview,
  tone = "light",
  locale = "en",
}: {
  productKey: ProductKey;
  preview: ProductPreviewContent;
  tone?: "light" | "dark";
  locale?: Locale;
}) {
  const product = getProductLink(productKey);
  const dark = tone === "dark";
  const labels = PREVIEW_LABELS[locale] ?? PREVIEW_LABELS.en;
  const months = Array.from({ length: 6 }, (_, index) =>
    new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(2026, index, 1)),
  );

  return (
    <figure className="relative mx-auto w-full max-w-[560px]">
      <div
        className={`pointer-events-none absolute -inset-6 rounded-[2.5rem] blur-3xl ${
          dark ? "bg-(--brand)/20" : "bg-(--brand)/[0.07]"
        }`}
        aria-hidden="true"
      />
      <div
        role="img"
        aria-label={`${preview.label} ${labels.illustrative}. ${preview.metric.label}, ${preview.secondary.label}.`}
        className="relative overflow-hidden rounded-2xl border border-(--line) bg-white shadow-[0_30px_80px_-35px_rgba(32,32,32,0.35)]"
      >
        <div className="flex items-center gap-3 border-b border-(--line) px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--ink) text-white">
            <Icon name={product.icon} className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-(--ink)">{preview.label}</p>
            <p className="text-[10px] text-(--muted)">{labels.businessWorkspace}</p>
          </div>
          <span className="ms-auto flex items-center gap-1.5 text-[10px] font-medium text-(--muted)">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" aria-hidden="true" />
            {labels.livePreview}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-(--line) bg-[#fbfaf7] p-3">
              <p className="text-[10px] uppercase tracking-widest text-(--muted)">
                {preview.metric.label}
              </p>
              <p className="mt-1 text-[22px] font-semibold tabular-nums tracking-[-0.03em] text-(--ink)">
                {preview.metric.value}
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-[#15803d]">{preview.metric.note}</p>
            </div>
            <div className="rounded-xl border border-(--line) bg-[#fbfaf7] p-3">
              <p className="text-[10px] uppercase tracking-widest text-(--muted)">
                {preview.secondary.label}
              </p>
              <p className="mt-1 text-[18px] font-semibold tabular-nums tracking-[-0.02em] text-(--ink)">
                {preview.secondary.value}
              </p>
              <p className="mt-0.5 text-[10px] text-(--muted)">{labels.thisMonth}</p>
            </div>
          </div>

          <div className="mt-2.5 rounded-xl border border-(--line) bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold text-(--ink)">{preview.chartLabel}</p>
              <span className="text-[9px] text-(--muted)">{labels.lastSixMonths}</span>
            </div>
            <svg
              viewBox="0 0 320 82"
              className="mt-2 h-[70px] w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="product-preview-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f46a35" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#f46a35" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[16, 40, 64].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#eeeae4" strokeWidth="1" />
              ))}
              <path
                d="M0,66 C30,62 46,58 72,54 C100,50 118,56 144,46 C170,36 188,40 212,32 C238,24 262,28 286,20 C300,16 312,14 320,12 L320,82 L0,82 Z"
                fill="url(#product-preview-area)"
              />
              <path
                d="M0,66 C30,62 46,58 72,54 C100,50 118,56 144,46 C170,36 188,40 212,32 C238,24 262,28 286,20 C300,16 312,14 320,12"
                fill="none"
                stroke="#f46a35"
                strokeWidth="2.25"
                strokeLinecap="round"
              />
              <circle cx="286" cy="20" r="3" fill="#f46a35" />
            </svg>
            <div className="mt-1 flex justify-between text-[8px] text-(--muted)">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>

          <div className="mt-2.5 overflow-hidden rounded-xl border border-(--line)">
            {preview.rows.map((row, index) => (
              <div
                key={row.label}
                className={[
                  "flex items-center gap-2 px-3 py-2",
                  index > 0 ? "border-t border-(--line)" : "",
                ].join(" ")}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${STATUS[row.status].dot}`} aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate text-[11px] text-(--ink-soft)">
                  {row.label}
                </span>
                <span className="text-[11px] font-medium tabular-nums text-(--ink)">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption
        className={`mt-3 flex items-center justify-center gap-1.5 text-[11px] ${
          dark ? "text-white/55" : "text-(--muted)"
        }`}
      >
        <Check size={11} className="text-(--success)" aria-hidden="true" />
        {labels.illustrative}
      </figcaption>
    </figure>
  );
}
