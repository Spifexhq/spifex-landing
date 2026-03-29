// src\lib\location\billing-currency.ts
export type SupportedCurrency = "BRL" | "EUR" | "USD";

export type BillingCurrencyConfig = {
  supportedCurrencies: ReadonlySet<SupportedCurrency>;
  countryToCurrency: Record<string, SupportedCurrency>;
  defaultCurrency: SupportedCurrency;
};

const EU_ISO2 = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
]);

const countryToCurrency: Record<string, SupportedCurrency> = {
  BR: "BRL",
};

for (const code of EU_ISO2) {
  countryToCurrency[code] = "EUR";
}

export const BILLING_CURRENCY: BillingCurrencyConfig = {
  supportedCurrencies: new Set(["BRL", "EUR", "USD"]),
  countryToCurrency,
  defaultCurrency: "USD",
};

export function normalizeCountry(countryCode?: string | null): string | null {
  if (!countryCode) return null;
  const c = String(countryCode).trim().toUpperCase();
  return c.length === 2 && /^[A-Z]{2}$/.test(c) ? c : null;
}

export function currencyForCountry(countryCode?: string | null): SupportedCurrency {
  const c = normalizeCountry(countryCode);
  const cur = (c ? BILLING_CURRENCY.countryToCurrency[c] : undefined) ?? BILLING_CURRENCY.defaultCurrency;
  return BILLING_CURRENCY.supportedCurrencies.has(cur) ? cur : BILLING_CURRENCY.defaultCurrency;
}