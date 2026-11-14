"use client";

import { useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

import { useI18n } from "@/components/i18n/I18nProvider";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "@/i18n/constants";
import { LOCALE_META, SUPPORTED_LOCALES, type Locale } from "@/lib/location/markets";
import { cn } from "@/lib/cn";

const LOCALE_STORAGE_KEY = "spifex_locale";

/**
 * Persist the visitor's explicit language choice.
 * The country-derived default stays untouched so "reset to region" works.
 */
export function setUserLocale(locale: Locale, onDone?: () => void) {
  if (typeof document === "undefined") return;

  const secure = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(locale)}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax${secure}`;

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Storage can be unavailable in private mode; the cookie still applies.
  }

  document.documentElement.lang = locale;
  document.documentElement.dir = LOCALE_META[locale]?.dir ?? "ltr";
  onDone?.();
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const router = useRouter();

  useEffect(() => {
    // Keep local storage aligned with the cookie. `?lang=auto` clears the cookie
    // and should not leave a stale saved language behind.
    const hasChoice = document.cookie
      .split("; ")
      .some((entry) => entry.startsWith(`${LOCALE_COOKIE}=`));
    if (hasChoice) return;
    try {
      window.localStorage.removeItem(LOCALE_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  function choose(next: Locale) {
    if (next === locale) return;

    // An explicit picker choice should win over a `?lang=` override.
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.delete("lang");
        window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
      }
    }

    setUserLocale(next, () => router.refresh());
  }

  return (
    <Menu as="div" className={cn("relative", className)}>
      <MenuButton
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-(--muted) transition-colors hover:text-(--ink) focus:outline-none"
        aria-label={`${t("languageSwitcher.label")}: ${LOCALE_META[locale].nativeName}`}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="max-w-36 truncate">{LOCALE_META[locale].nativeName}</span>
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="z-60 w-64 origin-top-right rounded-xl border border-(--line) bg-white p-1.5 shadow-[0_24px_60px_-24px_rgba(32,32,32,0.4)] transition duration-150 ease-out [--anchor-gap:0.5rem] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <p className="px-2.5 pb-1.5 pt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-(--muted)">
          {t("languageSwitcher.label")}
        </p>

        <div className="max-h-76 overflow-y-auto overscroll-contain">
          {SUPPORTED_LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const active = code === locale;
            return (
              <MenuItem key={code}>
                <button
                  type="button"
                  onClick={() => choose(code)}
                  lang={code}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-start text-sm transition-colors",
                    active
                      ? "bg-(--canvas) font-semibold text-(--ink)"
                      : "text-(--ink-soft) hover:bg-(--canvas) hover:text-(--ink)",
                  )}
                >
                  <span className="min-w-0">
                    <span className="block truncate">{meta.nativeName}</span>
                    {meta.name !== meta.nativeName ? (
                      <span className="block truncate text-[11px] font-normal text-(--muted)">
                        {meta.name}
                      </span>
                    ) : null}
                  </span>
                  {active ? <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> : null}
                </button>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}
