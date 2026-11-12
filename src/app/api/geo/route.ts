import { NextResponse } from "next/server";

import { getServerI18n } from "@/i18n/server";

export const dynamic = "force-dynamic";

/**
 * Lightweight geo bootstrap used when the hosting platform does not expose
 * country headers (e.g. local development). The client falls back to an IP
 * lookup when this returns `country: null`.
 */
export async function GET() {
  const { country, currency, locale, direction, hasExplicitLocale } = await getServerI18n();

  return NextResponse.json(
    { country, currency, locale, direction, hasExplicitLocale },
    { headers: { "cache-control": "no-store" } },
  );
}
