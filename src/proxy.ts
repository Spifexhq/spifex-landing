// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  COUNTRY_COOKIE,
  COUNTRY_COOKIE_MAX_AGE,
  LEGACY_LOCALE_COOKIE,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_OVERRIDE_HEADER,
} from "@/i18n/constants";
import { isSupportedLocale, normalizeCountryCode } from "@/lib/location/markets";

const GEO_HEADERS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "x-country-code",
  "cloudfront-viewer-country",
  "x-app-country",
] as const;

function countryFromHeaders(req: NextRequest): string | null {
  for (const name of GEO_HEADERS) {
    const country = normalizeCountryCode(req.headers.get(name));
    if (country && country !== "XX" && country !== "T1") return country;
  }
  return null;
}

export function proxy(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  // `?lang=xx` lets a visitor (or a campaign link) force a language.
  // `?lang=auto` clears the explicit choice so the country default applies again.
  const langParam = req.nextUrl.searchParams.get("lang");
  if (langParam === "auto" || langParam === "default") {
    requestHeaders.set(LOCALE_OVERRIDE_HEADER, "auto");
  } else if (isSupportedLocale(langParam)) {
    requestHeaders.set(LOCALE_OVERRIDE_HEADER, langParam);
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  const secure = req.nextUrl.protocol === "https:";

  if (langParam === "auto" || langParam === "default") {
    if (req.cookies.has(LOCALE_COOKIE)) {
      res.cookies.set(LOCALE_COOKIE, "", { path: "/", maxAge: 0 });
    }
  } else if (isSupportedLocale(langParam)) {
    res.cookies.set(LOCALE_COOKIE, langParam, {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      secure,
      maxAge: LOCALE_COOKIE_MAX_AGE,
    });
  }

  // Drop the old auto-detected locale cookie so geo defaults are not overridden.
  if (req.cookies.has(LEGACY_LOCALE_COOKIE)) {
    res.cookies.set(LEGACY_LOCALE_COOKIE, "", { path: "/", maxAge: 0 });
  }

  // Resolve the country once and keep it stable for subsequent visits.
  if (!req.cookies.get(COUNTRY_COOKIE)?.value) {
    const country = countryFromHeaders(req);
    if (country) {
      res.cookies.set(COUNTRY_COOKIE, country, {
        path: "/",
        sameSite: "lax",
        httpOnly: false,
        secure,
        maxAge: COUNTRY_COOKIE_MAX_AGE,
      });
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
