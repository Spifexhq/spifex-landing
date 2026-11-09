"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import CookieConsent from "./CookieConsent";
import { CONSENT_EVENT, getConsent, type ConsentValue } from "@/lib/analytics/consent";
import { trackMeta, trackPageView } from "@/lib/analytics/meta";
import { captureAttribution } from "@/lib/analytics/utm";

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [consent, setConsentState] = useState<ConsentValue | null>(null);
  const lastPage = useRef<string | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setConsentState(getConsent()), 0);
    captureAttribution();
    const onChange = (event: Event) => {
      const value = (event as CustomEvent<ConsentValue>).detail;
      setConsentState(value);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(CONSENT_EVENT, onChange);
    };
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;
    captureAttribution({ persistFirstTouch: true });
    if (lastPage.current === pathname) return;
    lastPage.current = pathname;
    trackPageView();
  }, [consent, pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const cta = target?.closest<HTMLElement>("[data-cta]")?.dataset.cta;
      if (!cta || consent !== "accepted") return;
      trackMeta("CTAClick", { contentName: cta });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
