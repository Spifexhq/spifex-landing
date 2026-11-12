// src/lib/location/markets.ts
//
// Country → default language + billing currency.
//
// The table below is the source of truth for the landing site. Countries that
// are not listed fall back to English + USD (see DEFAULT_MARKET).

export type Locale =
  | "en"
  | "pt"
  | "pt-BR"
  | "es"
  | "fr"
  | "de"
  | "nl"
  | "it"
  | "pl"
  | "sv"
  | "da"
  | "no"
  | "ca"
  | "ar"
  | "lb";

export type SupportedCurrency = "EUR" | "USD" | "BRL";

export type TextDirection = "ltr" | "rtl";

export type Market = {
  language: Locale;
  currency: SupportedCurrency;
};

export type LocaleMeta = {
  /** Native language name, used in the language picker. */
  nativeName: string;
  /** English language name, used as a secondary label. */
  name: string;
  dir: TextDirection;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { nativeName: "English", name: "English", dir: "ltr" },
  pt: { nativeName: "Português (Portugal)", name: "Portuguese (Portugal)", dir: "ltr" },
  "pt-BR": { nativeName: "Português (Brasil)", name: "Portuguese (Brazil)", dir: "ltr" },
  es: { nativeName: "Español", name: "Spanish", dir: "ltr" },
  fr: { nativeName: "Français", name: "French", dir: "ltr" },
  de: { nativeName: "Deutsch", name: "German", dir: "ltr" },
  nl: { nativeName: "Nederlands", name: "Dutch", dir: "ltr" },
  it: { nativeName: "Italiano", name: "Italian", dir: "ltr" },
  pl: { nativeName: "Polski", name: "Polish", dir: "ltr" },
  sv: { nativeName: "Svenska", name: "Swedish", dir: "ltr" },
  da: { nativeName: "Dansk", name: "Danish", dir: "ltr" },
  no: { nativeName: "Norsk", name: "Norwegian", dir: "ltr" },
  ca: { nativeName: "Català", name: "Catalan", dir: "ltr" },
  ar: { nativeName: "العربية", name: "Arabic", dir: "rtl" },
  lb: { nativeName: "Lëtzebuergesch", name: "Luxembourgish", dir: "ltr" },
};

/** Open Graph locale identifiers used in page metadata. */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_PT",
  "pt-BR": "pt_BR",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  nl: "nl_NL",
  it: "it_IT",
  pl: "pl_PL",
  sv: "sv_SE",
  da: "da_DK",
  no: "nb_NO",
  ca: "ca_ES",
  ar: "ar_AR",
  lb: "lb_LU",
};

export const SUPPORTED_LOCALES = Object.keys(LOCALE_META) as Locale[];

export const DEFAULT_LOCALE: Locale = "en";
export const DEFAULT_CURRENCY: SupportedCurrency = "USD";
export const DEFAULT_MARKET: Market = {
  language: DEFAULT_LOCALE,
  currency: DEFAULT_CURRENCY,
};

/**
 * Countries from the supported-market table.
 *
 * Multilingual countries use the primary language listed in the table:
 * Belgium → Dutch, Luxembourg → French, Canada → English, Switzerland → German.
 */
export const COUNTRY_MARKETS: Record<string, Market> = {
  // Eurozone
  PT: { language: "pt", currency: "EUR" },
  ES: { language: "es", currency: "EUR" },
  FR: { language: "fr", currency: "EUR" },
  DE: { language: "de", currency: "EUR" },
  NL: { language: "nl", currency: "EUR" },
  BE: { language: "nl", currency: "EUR" },
  IT: { language: "it", currency: "EUR" },
  IE: { language: "en", currency: "EUR" },
  CH: { language: "de", currency: "EUR" },
  LU: { language: "fr", currency: "EUR" },
  AT: { language: "de", currency: "EUR" },
  MC: { language: "fr", currency: "EUR" },
  AD: { language: "ca", currency: "EUR" },
  LI: { language: "de", currency: "EUR" },

  // Brazil
  BR: { language: "pt-BR", currency: "BRL" },

  // USD markets
  GB: { language: "en", currency: "USD" },
  PL: { language: "pl", currency: "USD" },
  AO: { language: "pt", currency: "USD" },
  MZ: { language: "pt", currency: "USD" },
  US: { language: "en", currency: "USD" },
  SE: { language: "sv", currency: "USD" },
  DK: { language: "da", currency: "USD" },
  NO: { language: "no", currency: "USD" },
  CA: { language: "en", currency: "USD" },
  CV: { language: "pt", currency: "USD" },

  // Arabic-speaking markets
  AE: { language: "ar", currency: "USD" },
  SA: { language: "ar", currency: "USD" },
  QA: { language: "ar", currency: "USD" },
  KW: { language: "ar", currency: "USD" },
  BH: { language: "ar", currency: "USD" },
  OM: { language: "ar", currency: "USD" },
  EG: { language: "ar", currency: "USD" },
  MA: { language: "ar", currency: "USD" },
  DZ: { language: "ar", currency: "USD" },
  TN: { language: "ar", currency: "USD" },
  JO: { language: "ar", currency: "USD" },
  LB: { language: "ar", currency: "USD" },
  IQ: { language: "ar", currency: "USD" },
};

export function normalizeCountryCode(countryCode?: string | null): string | null {
  if (!countryCode) return null;
  const code = String(countryCode).trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

export function isSupportedLocale(value?: string | null): value is Locale {
  return !!value && Object.prototype.hasOwnProperty.call(LOCALE_META, value);
}

export function getMarketForCountry(countryCode?: string | null): Market {
  const code = normalizeCountryCode(countryCode);
  return (code ? COUNTRY_MARKETS[code] : undefined) ?? DEFAULT_MARKET;
}

export function localeForCountry(countryCode?: string | null): Locale {
  return getMarketForCountry(countryCode).language;
}

export function currencyForCountry(countryCode?: string | null): SupportedCurrency {
  return getMarketForCountry(countryCode).currency;
}

export function directionForLocale(locale: Locale): TextDirection {
  return LOCALE_META[locale]?.dir ?? "ltr";
}

export function isRtlLocale(locale: Locale): boolean {
  return directionForLocale(locale) === "rtl";
}
