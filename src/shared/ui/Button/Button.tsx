import * as React from "react";
import { Loader2 } from "lucide-react";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex select-none items-center justify-center gap-2 rounded-md font-medium " +
  "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<ButtonSize, string> = {
  xs: "h-7 px-2.5 text-[11px]",
  sm: "h-8 px-3 text-xs",
  md: "h-8 px-4 text-[13px]",
  lg: "h-10 px-6 text-base",
  xl: "h-11 px-7 text-[17px]",
  iconSm: "h-8 w-8 p-0",
  iconMd: "h-10 w-10 p-0",
  iconLg: "h-12 w-12 p-0",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent text-white " +
    "bg-[#F46A35] hover:bg-[#f4883a] active:bg-[#f15a1e] disabled:bg-[#eb9d7e]",

  secondary:
    "border border-transparent text-slate-900 " +
    "bg-[#9BE7E2] hover:bg-[#b2e7e3] active:bg-[#72e7dd] disabled:bg-[#cfe6e4]",

  common:
    "border border-[#d6d6d6] text-[#202020] " +
    "bg-[#e4e4e4] hover:bg-[#d9d9d9] active:bg-[#cacaca] disabled:bg-[#e9e9e9]",

  cancel:
    "border border-[#d6d6d6] text-[#202020] " +
    "bg-[#f5f5f5] hover:bg-[#f1f1f1] active:bg-[#f9f9f9] disabled:bg-white",

  danger:
    "border border-[#d6d6d6] text-white " +
    "bg-[#da2020] hover:bg-[#f42626] active:bg-[#c62020] disabled:bg-[#d03e3e]",

  outline:
    "border border-[#d6d6d6] bg-transparent text-[#202020] " +
    "hover:bg-[#f9f9f9] active:bg-[#f2f2f2] disabled:bg-[#fbfbfb]",

  outlineBlack:
    "border border-[#d6d6d6] bg-black text-white " +
    "hover:bg-[#1b1b1b] active:bg-[#242124] disabled:bg-[#fbfbfb] disabled:text-[#202020]",

  link:
    "h-auto border-0 bg-transparent px-0 text-[#F46A35] underline-offset-4 hover:underline",

  outlinePrimary:
    "border border-[#F46A35] bg-transparent text-[#F46A35] " +
    "hover:bg-[#fff4ef] active:bg-[#ffe8dd]",

  outlineDanger:
    "border border-[#da2020] bg-transparent text-[#da2020] " +
    "hover:bg-[#fff1f1] active:bg-[#ffe4e4]",

  ghost:
    "border border-transparent bg-transparent text-[#202020] " +
    "hover:bg-black/5 active:bg-black/10",

  softPrimary:
    "border border-[#d6d6d6] text-[#F46A35] " +
    "bg-[#fff4ef] hover:bg-[#ffe8dd] active:bg-[#ffdccc]",

  muted:
    "border border-[#d6d6d6] bg-gray-100 text-gray-700 " +
    "hover:bg-gray-200 active:bg-gray-300",

  success:
    "border border-[#d6d6d6] text-white " +
    "bg-[#16A34A] hover:bg-[#22C55E] active:bg-[#15803D] disabled:bg-[#86EFAC]",

  warning:
    "border border-[#d6d6d6] text-[#1d1d1f] " +
    "bg-[#F59E0B] hover:bg-[#FDBA28] active:bg-[#D97706] disabled:bg-[#FCD34D]",

  info:
    "border border-[#d6d6d6] text-white " +
    "bg-[#0EA5E9] hover:bg-[#38BDF8] active:bg-[#0284C7] disabled:bg-[#7DD3FC]",

  dashed:
    "border-2 border-dashed border-[#F46A35] bg-transparent text-[#F46A35] " +
    "hover:bg-[#fff8f5] active:bg-[#fff1eb]",

  gradient:
    "border border-transparent text-white " +
    "bg-[linear-gradient(135deg,#F46A35,#9BE7E2)] hover:opacity-90 active:opacity-80",
};

const spinnerSizes: Record<ButtonSize, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-4 w-4",
  xl: "h-5 w-5",
  iconSm: "h-4 w-4",
  iconMd: "h-4 w-4",
  iconLg: "h-5 w-5",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      type = "button",
      children,
      ...rest
    },
    ref
  ) => {
    const width = fullWidth ? "w-full" : "";
    const classes = cn(base, sizes[size], variants[variant], width, className);

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...rest}
      >
        {isLoading && <Loader2 className={cn("animate-spin", spinnerSizes[size])} />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;