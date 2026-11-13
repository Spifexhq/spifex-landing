import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
};

export function Input({
  label,
  hint,
  error,
  className,
  containerClassName,
  ...props
}: InputProps) {
  return (
    <label className={cn("block", containerClassName)}>
      {label ? (
        <span className="mb-2 block text-sm font-semibold text-(--ink)">{label}</span>
      ) : null}
      <input
        className={cn(
          "h-12 w-full rounded-xl border border-(--line) bg-white px-4 text-sm text-(--ink) shadow-[0_1px_2px_rgba(32,32,32,0.03)]",
          "placeholder:text-[#7d8796]",
          "transition-[border-color,box-shadow] duration-150",
          "focus:border-(--brand-strong) focus:outline-none focus:ring-2 focus:ring-(--brand)/15",
          "disabled:cursor-not-allowed disabled:bg-(--canvas) disabled:opacity-60",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
          className,
        )}
        {...props}
      />
      {error ? (
        <span className="mt-1.5 block text-xs text-red-600">{error}</span>
      ) : hint ? (
        <span className="mt-1.5 block text-xs leading-5 text-(--muted)">{hint}</span>
      ) : null}
    </label>
  );
}

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
};

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={cn("flex cursor-pointer items-start gap-3", className)}>
      <input
        type="checkbox"
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-(--line) accent-(--brand-strong) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand)/30"
        {...props}
      />
      {label ? (
        <span className="text-sm leading-6 text-(--ink-soft)">{label}</span>
      ) : null}
    </label>
  );
}
