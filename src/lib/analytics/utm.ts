export type Attribution = {
  first_touch: Record<string, string> & { landing_page: string; referrer: string; captured_at: string };
  session: Record<string, string> & { landing_page: string; referrer: string; captured_at: string };
};

const FIRST_KEY = "spx_attribution_first";
const SESSION_KEY = "spx_attribution_session";
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

type Touch = Attribution["first_touch"];

function readTouch(): Touch {
  const query = new URLSearchParams(window.location.search);
  const values: Record<string, string> = {};
  for (const key of PARAMS) {
    const value = query.get(key);
    if (value) values[key] = value.slice(0, 200);
  }
  return {
    ...values,
    landing_page: `${window.location.pathname}${window.location.search}`.slice(0, 500),
    referrer: (document.referrer || "").slice(0, 500),
    captured_at: new Date().toISOString(),
  };
}

function parse(value: string | null): Touch | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? (parsed as Touch) : null;
  } catch {
    return null;
  }
}

/**
 * Session attribution is kept for the current visit. First-touch attribution is
 * persisted only after marketing consent, so no long-lived measurement data is
 * written before the visitor decides.
 */
export function captureAttribution({ persistFirstTouch = false }: { persistFirstTouch?: boolean } = {}): void {
  if (typeof window === "undefined") return;
  const touch = readTouch();
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(touch));
    if (persistFirstTouch && !parse(window.localStorage.getItem(FIRST_KEY))) {
      window.localStorage.setItem(FIRST_KEY, JSON.stringify(touch));
    }
  } catch {
    // Attribution is best-effort; browsing must never fail.
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const first = parse(window.localStorage.getItem(FIRST_KEY));
    const session = parse(window.sessionStorage.getItem(SESSION_KEY));
    if (!first && !session) return null;
    const fallback = first ?? session!;
    return { first_touch: first ?? fallback, session: session ?? fallback };
  } catch {
    return null;
  }
}

export function attributionParams(): Record<string, string> {
  const attribution = getAttribution();
  if (!attribution) return {};
  return {
    utm_source: attribution.first_touch.utm_source ?? "",
    utm_medium: attribution.first_touch.utm_medium ?? "",
    utm_campaign: attribution.first_touch.utm_campaign ?? "",
    utm_content: attribution.first_touch.utm_content ?? "",
    utm_term: attribution.first_touch.utm_term ?? "",
    fbclid: attribution.first_touch.fbclid ?? "",
    gclid: attribution.first_touch.gclid ?? "",
  };
}
