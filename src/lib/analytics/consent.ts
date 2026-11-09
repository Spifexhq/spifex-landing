export type ConsentValue = "accepted" | "rejected";

const COOKIE = "spx_cookie_consent";
const STORAGE = "spx_cookie_consent_v1";
export const CONSENT_EVENT = "spx:consent";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE);
    if (stored === "accepted" || stored === "rejected") return stored;
  } catch {
    // Storage can be blocked; fall back to the cookie.
  }
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=(accepted|rejected)`));
  return (match?.[1] as ConsentValue | undefined) ?? null;
}

export function setConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE, value);
  } catch {
    // Ignore storage failures.
  }
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE}=${value}; Path=/; Max-Age=${60 * 60 * 24 * 180}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function marketingAllowed(): boolean {
  return getConsent() === "accepted";
}
