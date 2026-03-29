// src\proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "spifex_locale";
const SUPPORTED = new Set(["en", "pt", "pt-BR", "fr", "de"]);

function detectLocale(req: NextRequest): "en" | "pt" | "pt-BR" | "fr" | "de" {
  const langParam = req.nextUrl.searchParams.get("lang");
  if (langParam && SUPPORTED.has(langParam)) {
    return langParam as "en" | "pt" | "pt-BR" | "fr" | "de";
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie && SUPPORTED.has(cookie)) {
    return cookie as "en" | "pt" | "pt-BR" | "fr" | "de";
  }

  const header = req.headers.get("accept-language") || "";
  const lowered = header.toLowerCase();

  if (lowered.startsWith("pt-br") || lowered.includes("pt-br")) return "pt-BR";
  if (lowered.startsWith("pt") || lowered.includes("pt-")) return "pt";
  if (lowered.startsWith("fr") || lowered.includes("fr-")) return "fr";
  if (lowered.startsWith("de") || lowered.includes("de-")) return "de";

  return "en";
}

export function proxy(req: NextRequest) {
  const locale = detectLocale(req);

  const res = NextResponse.next();
  res.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
  });

  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};