"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

import { CONSENT_EVENT, getConsent, setConsent, type ConsentValue } from "@/lib/analytics/consent";
import { useT } from "@/components/i18n/I18nProvider";

export default function CookieConsent() {
  const t = useT();
  const [consent, setConsentState] = useState<ConsentValue | null>(null);
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setMounted(true);
      setConsentState(getConsent());
    }, 0);
    const onChange = (event: Event) => {
      setConsentState((event as CustomEvent<ConsentValue>).detail);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(CONSENT_EVENT, onChange);
    };
  }, []);

  if (!mounted || consent || dismissed) return null;

  const decide = (value: ConsentValue) => {
    setConsent(value);
    setConsentState(value);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[80] rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_20px_60px_-20px_rgba(32,32,32,.35)] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[380px] sm:p-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand)]">
          <Cookie size={16} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[var(--ink)]">{t("cookiesBanner.title")}</p>
          <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{t("cookiesBanner.body")}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-lg bg-[var(--brand-strong)] px-3 py-2 text-xs font-semibold text-white hover:bg-[var(--brand-strong-hover)]"
            >
              {t("cookiesBanner.accept")}
            </button>
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-xs font-semibold text-[var(--ink)] hover:bg-[#faf9f7]"
            >
              {t("cookiesBanner.reject")}
            </button>
            <Link
              href="/legal/cookie_notice"
              className="inline-flex items-center px-1 py-2 text-xs font-medium text-[var(--muted)] underline underline-offset-4"
            >
              {t("cookiesBanner.policy")}
            </Link>
          </div>
        </div>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="rounded-md p-1 text-[var(--muted)] hover:bg-black/5"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
