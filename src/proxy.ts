import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "spifex_locale";
const SUPPORTED = new Set(["en", "pt"]);

function detectLocale(req: NextRequest): "en" | "pt" {
  // Optional override: ?lang=pt or ?lang=en
  const langParam = req.nextUrl.searchParams.get("lang");
  if (langParam && SUPPORTED.has(langParam)) return langParam as "en" | "pt";

  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie && SUPPORTED.has(cookie)) return cookie as "en" | "pt";

  const header = req.headers.get("accept-language") || "";
  // Simple detection: if browser prefers Portuguese, use pt; else en
  const lowered = header.toLowerCase();
  if (lowered.startsWith("pt") || lowered.includes("pt-")) return "pt";
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
