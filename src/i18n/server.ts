import { cookies, headers } from "next/headers";
import { createT, type Messages } from "./translator";
import { mergeMessages } from "./merge";
import {
  COUNTRY_COOKIE,
  LEGACY_LOCALE_COOKIE,
  LOCALE_COOKIE,
  LOCALE_OVERRIDE_HEADER,
} from "./constants";
import {
  DEFAULT_LOCALE,
  directionForLocale,
  isSupportedLocale,
  localeForCountry,
  normalizeCountryCode,
  type Locale,
  type TextDirection,
} from "@/lib/location/markets";
import { currencyForCountry, type SupportedCurrency } from "@/lib/location/billing-currency";

export type { Locale };

export type ContentLocale = "en" | "pt";

export function toContentLocale(locale: Locale): ContentLocale {
  return locale === "pt" || locale === "pt-BR" ? "pt" : "en";
}

export async function getMessages(locale: Locale): Promise<Messages> {
  const base = (await import("./dict/en")).default;
  if (locale === "en") return base;

  switch (locale) {
    case "pt":
      return mergeMessages(base, (await import("./dict/pt")).default);
    case "pt-BR":
      return mergeMessages(base, (await import("./dict/pt-BR")).default);
    case "es":
      return mergeMessages(base, (await import("./dict/es")).default);
    case "fr":
      return mergeMessages(base, (await import("./dict/fr")).default);
    case "de":
      return mergeMessages(base, (await import("./dict/de")).default);
    case "nl":
      return mergeMessages(base, (await import("./dict/nl")).default);
    case "it":
      return mergeMessages(base, (await import("./dict/it")).default);
    case "pl":
      return mergeMessages(base, (await import("./dict/pl")).default);
    case "sv":
      return mergeMessages(base, (await import("./dict/sv")).default);
    case "da":
      return mergeMessages(base, (await import("./dict/da")).default);
    case "no":
      return mergeMessages(base, (await import("./dict/no")).default);
    case "ca":
      return mergeMessages(base, (await import("./dict/ca")).default);
    case "ar":
      return mergeMessages(base, (await import("./dict/ar")).default);
    case "lb":
      return mergeMessages(base, (await import("./dict/lb")).default);
  }
}

const GEO_HEADERS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "x-country-code",
  "cloudfront-viewer-country",
  "x-app-country",
] as const;

/**
 * Resolve the visitor's country from hosting-provider geo headers.
 * Country is only used to pick defaults; it never changes billing after that.
 */
export function getCountryFromHeaders(headerStore: Headers): string | null {
  for (const name of GEO_HEADERS) {
    const country = normalizeCountryCode(headerStore.get(name));
    // Some CDNs use "XX" for unknown.
    if (country && country !== "XX" && country !== "T1") return country;
  }
  return null;
}

function readCookieCountry(cookieStore: Awaited<ReturnType<typeof cookies>>): string | null {
  return normalizeCountryCode(cookieStore.get(COUNTRY_COOKIE)?.value);
}

/**
 * Locale precedence:
 *   1. explicit visitor choice (language picker cookie)
 *   2. country → language from the supported-market table
 *   3. English (also used for countries outside the table)
 */
function resolveLocale(
  cookieStore: Awaited<ReturnType<typeof cookies>>,
  headerStore: Headers,
  country: string | null,
): { locale: Locale; explicit: boolean } {
  const override = headerStore.get(LOCALE_OVERRIDE_HEADER);
  if (isSupportedLocale(override)) {
    return { locale: override, explicit: true };
  }
  if (override === "auto") {
    return {
      locale: country ? localeForCountry(country) : DEFAULT_LOCALE,
      explicit: false,
    };
  }

  const explicit = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isSupportedLocale(explicit)) {
    return { locale: explicit, explicit: true };
  }

  return {
    locale: country ? localeForCountry(country) : DEFAULT_LOCALE,
    explicit: false,
  };
}

export type ServerI18n = {
  locale: Locale;
  direction: TextDirection;
  country: string | null;
  currency: SupportedCurrency;
  messages: Messages;
  t: ReturnType<typeof createT>;
  hasExplicitLocale: boolean;
};

export async function getServerI18n(): Promise<ServerI18n> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const country = readCookieCountry(cookieStore) ?? getCountryFromHeaders(headerStore);
  const resolved = resolveLocale(cookieStore, headerStore, country);
  const locale = resolved.locale;
  const hasExplicitLocale = resolved.explicit;

  const messages = await getMessages(locale);
  const t = createT(messages);

  return {
    locale,
    direction: directionForLocale(locale),
    country,
    currency: currencyForCountry(country),
    messages,
    t,
    hasExplicitLocale,
  };
}

export const I18N_COOKIES = {
  locale: LOCALE_COOKIE,
  legacyLocale: LEGACY_LOCALE_COOKIE,
  country: COUNTRY_COOKIE,
} as const;
