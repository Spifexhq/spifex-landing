# Feature specification — Country-based language and currency defaults

**Feature**: `002-geo-language-currency`
**Status**: Implemented
**Date**: 2026-11-12

## Problem

The landing site should present itself in the language and currency of the visitor's country, using the supported-market table. Visitors outside the table fall back to English + USD. Language must remain user-selectable and persist in the browser; currency must never be user-selectable.

## Supported markets (source of truth)

| Country | ISO | Default language | Currency |
| --- | --- | --- | --- |
| Portugal | PT | Portuguese (Portugal) | EUR |
| Spain | ES | Spanish | EUR |
| Brazil | BR | Portuguese (Brazil) | BRL |
| France | FR | French | EUR |
| Germany | DE | German | EUR |
| Netherlands | NL | Dutch | EUR |
| Belgium | BE | Dutch | EUR |
| Italy | IT | Italian | EUR |
| United Kingdom | GB | English | USD |
| Ireland | IE | English | EUR |
| Poland | PL | Polish | USD |
| Angola | AO | Portuguese (Portugal) | USD |
| Mozambique | MZ | Portuguese (Portugal) | USD |
| United States | US | English | USD |
| Switzerland | CH | German | EUR |
| Luxembourg | LU | French | EUR |
| Sweden | SE | Swedish | USD |
| Denmark | DK | Danish | USD |
| Norway | NO | Norwegian | USD |
| Canada | CA | English | USD |
| Cabo Verde | CV | Portuguese (Portugal) | USD |
| Austria | AT | German | EUR |
| Monaco | MC | French | EUR |
| Andorra | AD | Catalan | EUR |
| Liechtenstein | LI | German | EUR |
| United Arab Emirates | AE | Arabic | USD |
| Saudi Arabia | SA | Arabic | USD |
| Qatar | QA | Arabic | USD |
| Kuwait | KW | Arabic | USD |
| Bahrain | BH | Arabic | USD |
| Oman | OM | Arabic | USD |
| Egypt | EG | Arabic | USD |
| Morocco | MA | Arabic | USD |
| Algeria | DZ | Arabic | USD |
| Tunisia | TN | Arabic | USD |
| Jordan | JO | Arabic | USD |
| Lebanon | LB | Arabic | USD |
| Iraq | IQ | Arabic | USD |

Unlisted countries: English + USD.

### Decisions for multilingual countries

- Belgium → Dutch (French remains available in the picker).
- Luxembourg → French (Luxembourgish remains available in the picker).
- Canada → English (French remains available in the picker).
- Switzerland → German.

## Requirements

- **FR-001** Resolve the visitor country from hosting geo headers (`x-vercel-ip-country`, `cf-ipcountry`, `x-country-code`, `cloudfront-viewer-country`, `x-app-country`) and persist it in `spifex_country` for 30 days.
- **FR-002** When geo headers are unavailable, detect the country once on the client (IP, then locale, then timezone) and refresh.
- **FR-003** Default locale = country language from the table; fallback English.
- **FR-004** Default currency = country currency from the table; fallback USD. Currency is server-resolved and never editable in the UI.
- **FR-005** Language picker lists every supported locale with native names, persists the choice in `spifex_locale_user` (1 year) and `localStorage`, and applies it immediately.
- **FR-006** Arabic renders right-to-left (`dir="rtl"`).
- **FR-007** Legacy auto-detected `spifex_locale` cookies are cleared and ignored.
- **FR-008** Signup sends only backend-supported languages (en/pt/fr/de), mapping new locales sensibly; the signup currency field is read-only.
- **FR-009** All used UI dictionary keys, product-page copy and Personal/Business audience pages exist for every supported locale, with English deep-merge fallback.

## Edge cases

- Unsupported country (e.g. Japan) → English + USD.
- Explicit language choice survives country changes and reloads.
- `?lang=<locale>` forces a language for a request (campaign links); `?lang=auto` clears the choice and returns to the country default.
- Missing translation keys fall back to English.
- Country detection failure leaves English + USD.

## Out of scope

- Translating long-form MDX blog/legal articles and the docs knowledge base (content remains English/Portuguese; UI chrome is translated).
- Changing the backend signup language contract.
