import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--canvas)] text-[var(--ink)]">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--ink)]">
          Learn more <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6 transition-colors hover:border-[#d7d1c8] hover:bg-[#fffdfa]",
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <div className={classes}>{content}</div>
  );
}
