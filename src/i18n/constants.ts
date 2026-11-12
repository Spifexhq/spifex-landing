// Shared cookie names/ages for locale and geo state.
// Kept free of server-only imports so middleware and client components can use it.

/** Explicit language chosen by the visitor in the language picker. */
export const LOCALE_COOKIE = "spifex_locale_user";

/** Legacy auto-detected locale cookie. Cleared on sight; never read. */
export const LEGACY_LOCALE_COOKIE = "spifex_locale";

/** Country resolved from geo headers or the client-side IP fallback. */
export const COUNTRY_COOKIE = "spifex_country";

/** Internal request header used to apply `?lang=` overrides for the current request. */
export const LOCALE_OVERRIDE_HEADER = "x-spifex-locale";

/** Prevents repeated IP lookups on the client when geo detection is unavailable. */
export const GEO_CHECKED_STORAGE_KEY = "spifex_geo_checked";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const COUNTRY_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
