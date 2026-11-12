import { CheckCircle2, KeyRound, LockKeyhole, Sparkles } from "lucide-react";

import { getServerI18n } from "@/i18n/server";

const FACTS = [
  { icon: CheckCircle2, key: "trust.noCard" },
  { icon: LockKeyhole, key: "trust.isolation" },
  { icon: KeyRound, key: "trust.ai" },
  { icon: Sparkles, key: "trust.multiStream" },
] as const;

export async function TrustStrip() {
  const { t } = await getServerI18n();

  return (
    <div className="border-y border-[var(--line)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 sm:px-6 lg:px-8">
        {FACTS.map(({ icon: Icon, key }) => {
          const label = t(key);
          return (
            <span
              key={key}
              className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--muted)]"
            >
              <Icon size={14} className="text-[var(--brand)]" aria-hidden="true" />
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
