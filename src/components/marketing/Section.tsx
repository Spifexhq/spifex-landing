import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "canvas" | "ink" | "brand";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    canvas: "bg-[var(--canvas)]",
    ink: "bg-[var(--ink)] text-white",
    brand: "bg-[var(--brand-soft)]",
  };
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.16em]",
            dark ? "text-[var(--teal)]" : "text-[var(--brand-strong)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]",
          dark ? "text-white" : "text-[var(--ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty mt-4 text-base leading-7 sm:text-lg",
            dark ? "text-white/65" : "text-[var(--muted)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MarketingContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <Container className={cn("px-5 sm:px-6 lg:px-8", className)}>{children}</Container>;
}
