import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-(--line) bg-white p-6 shadow-[0_1px_2px_rgba(32,32,32,0.03)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
