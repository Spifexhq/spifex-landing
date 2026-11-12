"use client";

import React, { createContext, useContext, useMemo } from "react";
import { createT, type Messages } from "@/i18n/translator";
import type { Locale, TextDirection, SupportedCurrency } from "@/lib/location/markets";

type I18nContextValue = {
  locale: Locale;
  direction: TextDirection;
  currency: SupportedCurrency;
  country: string | null;
  messages: Messages;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  direction = "ltr",
  currency = "USD",
  country = null,
  messages,
  children,
}: {
  locale: Locale;
  direction?: TextDirection;
  currency?: SupportedCurrency;
  country?: string | null;
  messages: Messages;
  children: React.ReactNode;
}) {
  const t = useMemo(() => createT(messages), [messages]);
  const value = useMemo(
    () => ({ locale, direction, currency, country, messages, t }),
    [locale, direction, currency, country, messages, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export function useLocale(): Locale {
  return useI18n().locale;
}

export function useCurrency(): SupportedCurrency {
  return useI18n().currency;
}
