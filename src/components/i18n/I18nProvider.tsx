"use client";

import { createContext, useContext, useMemo } from "react";
import { createT, type Messages } from "@/i18n/translator";
import type { Locale } from "@/i18n/server";

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
  t: ReturnType<typeof createT>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      locale,
      messages,
      t: createT(messages),
    }),
    [locale, messages]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}