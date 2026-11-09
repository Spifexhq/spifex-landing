import { CheckCircle2, KeyRound, LockKeyhole, Sparkles } from "lucide-react";

const FACTS = [
  { icon: CheckCircle2, label: "Free plan, no card required" },
  { icon: LockKeyhole, label: "Tenant-isolated workspaces" },
  { icon: KeyRound, label: "OAuth 2.1, read-only AI access" },
  { icon: Sparkles, label: "Built for multi-stream operations" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-[var(--line)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 sm:px-6 lg:px-8">
        {FACTS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--muted)]"
          >
            <Icon size={14} className="text-[var(--brand)]" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
