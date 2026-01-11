"use client";

import React, { createContext, useContext, useMemo } from "react";
import { createT, type Messages } from "@/i18n/translator";

type I18nContextValue = {
  locale: "en" | "pt";
  messages: Messages;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: "en" | "pt";
  messages: Messages;
  children: React.ReactNode;
}) {
  const t = useMemo(() => createT(messages), [messages]);
  const value = useMemo(() => ({ locale, messages, t }), [locale, messages, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used inside I18nProvider");
  return ctx.t;
}
