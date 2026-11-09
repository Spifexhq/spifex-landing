export const DASHBOARD_URLS = {
  signin: "https://dashboard.spifex.com/signin",
  signup: "/signup",
} as const;

export const NAV_ITEMS = [
  { i18nKey: "nav.personal", href: "/personal" },
  { i18nKey: "nav.business", href: "/business" },
  { i18nKey: "nav.pricing", href: "/pricing" },
  { i18nKey: "nav.docs", href: "/docs" },
] as const;
