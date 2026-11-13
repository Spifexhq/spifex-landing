import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  dataCta?: string;
  ariaLabel?: string;
} & (
  | { href: string; type?: never; onClick?: never; disabled?: never }
  | {
      href?: undefined;
      type?: "button" | "submit" | "reset";
      onClick?: () => void;
      disabled?: boolean;
    }
);

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  dataCta,
  ariaLabel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-[background-color,border-color,color,transform,box-shadow] duration-150 focus:outline-none disabled:pointer-events-none disabled:opacity-50";

  const sizes = {
    sm: "h-9 px-3.5 text-[13px]",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-[15px]",
  }[size];

  const styles = {
    primary:
      "bg-(--brand-strong) text-white shadow-[0_10px_24px_-14px_rgba(0,0,0,.35)] hover:bg-(--brand-strong-hover) active:bg-(--brand-strong-pressed) active:scale-[0.98]",
    secondary:
      "border border-(--line) bg-white text-(--ink) hover:border-[#d9d4cc] hover:bg-[#faf9f7] active:scale-[0.99]",
    ghost: "bg-transparent text-(--ink) hover:bg-black/[0.05]",
    dark: "bg-(--ink) text-white hover:bg-[#343434] active:scale-[0.99]",
    outline:
      "border border-[#d6d0c8] bg-transparent text-(--ink) hover:border-(--ink) hover:bg-white",
  }[variant];

  const classes = cn(base, sizes, styles, className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} aria-label={ariaLabel} data-cta={dataCta} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={ariaLabel}
      data-cta={dataCta}
      className={classes}
    >
      {children}
    </button>
  );
}
