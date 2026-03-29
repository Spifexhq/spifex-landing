import { cookies, headers } from "next/headers";
import { createT, type Messages } from "./translator";

const LOCALE_COOKIE_NAME = "spifex_locale";
const COUNTRY_COOKIE_NAME = "spifex_country";

export type Locale = "en" | "pt" | "pt-BR" | "fr" | "de";

export async function getMessages(locale: Locale): Promise<Messages> {
  if (locale === "pt") return (await import("./dict/pt")).default;
  if (locale === "pt-BR") return (await import("./dict/pt-BR")).default;
  if (locale === "fr") return (await import("./dict/fr")).default;
  if (locale === "de") return (await import("./dict/de")).default;
  return (await import("./dict/en")).default;
}

function normalizeLocale(value?: string | null): Locale | null {
  if (!value) return null;
  const v = value.trim();

  if (v === "en" || v === "pt" || v === "pt-BR" || v === "fr" || v === "de") {
    return v;
  }

  return null;
}

function detectLocaleFromAcceptLanguage(acceptLanguage: string): Locale {
  const value = acceptLanguage.toLowerCase();

  if (value.startsWith("pt-br") || value.includes("pt-br")) return "pt-BR";
  if (value.startsWith("pt") || value.includes("pt-")) return "pt";
  if (value.startsWith("fr") || value.includes("fr-")) return "fr";
  if (value.startsWith("de") || value.includes("de-")) return "de";

  return "en";
}

function normalizeCountry(value?: string | null): string | null {
  if (!value) return null;
  const country = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(country) ? country : null;
}

function detectCountryFromHeaders(headerStore: Headers): string | null {
  const candidates = [
    headerStore.get("x-vercel-ip-country"),
    headerStore.get("cf-ipcountry"),
    headerStore.get("x-country-code"),
    headerStore.get("cloudfront-viewer-country"),
    headerStore.get("x-app-country"),
  ];

  for (const value of candidates) {
    const normalized = normalizeCountry(value);
    if (normalized) return normalized;
  }

  return null;
}

export async function getServerI18n() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLocale = normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value);
  const acceptLanguage = headerStore.get("accept-language") || "";

  const locale = cookieLocale ?? detectLocaleFromAcceptLanguage(acceptLanguage);

  const cookieCountry = normalizeCountry(cookieStore.get(COUNTRY_COOKIE_NAME)?.value);
  const headerCountry = detectCountryFromHeaders(headerStore);
  const country = cookieCountry ?? headerCountry ?? null;

  const messages = await getMessages(locale);
  const t = createT(messages);

  return {
    locale,
    country,
    messages,
    t,
    debugGeoHeaders: {
      cookieCountry,
      xVercelIpCountry: headerStore.get("x-vercel-ip-country"),
      cfIpCountry: headerStore.get("cf-ipcountry"),
      cloudfrontViewerCountry: headerStore.get("cloudfront-viewer-country"),
      xCountryCode: headerStore.get("x-country-code"),
      xAppCountry: headerStore.get("x-app-country"),
    },
  };
}