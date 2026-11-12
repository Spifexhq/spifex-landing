// src/lib/location/billing-currency.ts
//
// Billing currency is derived server-side from the visitor's country. It is
// never user-selectable: the client only ever displays what the server resolved.

import {
  COUNTRY_MARKETS,
  DEFAULT_CURRENCY,
  currencyForCountry as currencyForMarketCountry,
  type SupportedCurrency,
} from "./markets";

export type { SupportedCurrency };

export type BillingCurrencyConfig = {
  supportedCurrencies: ReadonlySet<SupportedCurrency>;
  countryToCurrency: Record<string, SupportedCurrency>;
  defaultCurrency: SupportedCurrency;
};

const countryToCurrency: Record<string, SupportedCurrency> = Object.fromEntries(
  Object.entries(COUNTRY_MARKETS).map(([country, market]) => [country, market.currency]),
);

export const BILLING_CURRENCY: BillingCurrencyConfig = {
  supportedCurrencies: new Set<SupportedCurrency>(["BRL", "EUR", "USD"]),
  countryToCurrency,
  defaultCurrency: DEFAULT_CURRENCY,
};

export function normalizeCountry(countryCode?: string | null): string | null {
  if (!countryCode) return null;
  const c = String(countryCode).trim().toUpperCase();
  return c.length === 2 && /^[A-Z]{2}$/.test(c) ? c : null;
}

export function currencyForCountry(countryCode?: string | null): SupportedCurrency {
  const cur = currencyForMarketCountry(countryCode);
  return BILLING_CURRENCY.supportedCurrencies.has(cur) ? cur : BILLING_CURRENCY.defaultCurrency;
}
