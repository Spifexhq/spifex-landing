"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  COUNTRY_COOKIE,
  COUNTRY_COOKIE_MAX_AGE,
  GEO_CHECKED_STORAGE_KEY,
} from "@/i18n/constants";
import { detectCountry } from "@/lib/location/getCountryFromLocale";

function persistCountry(country: string) {
  const secure = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${COUNTRY_COOKIE}=${encodeURIComponent(country)}; path=/; max-age=${COUNTRY_COOKIE_MAX_AGE}; samesite=lax${secure}`;
}

/**
 * Server rendering resolves the country from hosting geo headers. When those
 * are unavailable (local dev, self-hosting), detect once on the client, store
 * the country and refresh so language/currency defaults apply everywhere.
 */
export default function GeoDefaults({ country }: { country: string | null }) {
  const router = useRouter();

  useEffect(() => {
    if (country) return;

    let alive = true;

    try {
      if (window.sessionStorage.getItem(GEO_CHECKED_STORAGE_KEY)) return;
    } catch {
      // ignore
    }

    (async () => {
      try {
        let detected: string | null = null;

        try {
          const response = await fetch("/api/geo", { cache: "no-store" });
          if (response.ok) {
            const data = (await response.json()) as { country?: string | null };
            detected = data.country ?? null;
          }
        } catch {
          // fall through to IP lookup
        }

        if (!detected) {
          detected = await detectCountry();
        }

        if (!alive) return;

        if (detected) {
          persistCountry(detected);
          router.refresh();
          return;
        }

        try {
          window.sessionStorage.setItem(GEO_CHECKED_STORAGE_KEY, "1");
        } catch {
          // ignore
        }
      } catch {
        // Geo detection is best-effort; English + USD remain the defaults.
      }
    })();

    return () => {
      alive = false;
    };
  }, [country, router]);

  return null;
}
