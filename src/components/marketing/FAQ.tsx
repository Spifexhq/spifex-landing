import type { ReactNode } from "react";

export function FAQ({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return (
    <div className="divide-y divide-(--line) rounded-2xl border border-(--line) bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-semibold text-(--ink)">
            {item.question}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-(--line) text-lg leading-none text-(--muted) transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 max-w-3xl text-sm leading-6 text-(--muted)">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
