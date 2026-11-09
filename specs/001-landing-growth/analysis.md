# Specification Analysis: Landing growth

**Date**: 2026-11-09

## Findings resolved during implementation

| ID | Severity | Finding | Resolution |
|---|---|---|---|
| A1 | HIGH | Existing homepage CTA was email-only and lacked a clear free/pricing choice. | Hero now has primary signup and secondary pricing CTAs plus email capture. |
| A2 | HIGH | Pricing page had no comparison or FAQ to reduce purchase anxiety. | Added factual comparison table and FAQ. |
| A3 | HIGH | No Meta readiness or consent gate existed. | Added consent store/banner, pixel loader, CAPI route, UTM attribution and deduplicated events. |
| A4 | MEDIUM | Root metadata had no canonical or title template. | Added metadataBase, canonical, title template and page-level metadata. |
| A5 | MEDIUM | Sitemap omitted product, solutions, customers and docs routes. | Expanded from shared route lists and docs content. |
| A6 | MEDIUM | No product documentation existed. | Added searchable `/docs` hub and article routes. |
| A7 | MEDIUM | New copy would break non-English locales if keys were missing. | Added English-fallback deep merge. |
| A8 | LOW | Legal content lacked a review warning. | Flagged in docs/tracker/tasks. |
| A9 | LOW | No OG image beyond 192px logo. | Added dynamic 1200×630 image route. |
| A10 | HIGH | Pricing only presented Business Free/Starter/Pro and ignored Personal plans. | Added Personal/Business segmented pricing backed by the real catalog, quotas and category-aware CTAs. |
| A11 | HIGH | Signup did not send the API’s required `product_category` and `plan_code`. | Signup now posts the category plus `free`/`personal-free`, shows a category selector for free signup, and pays with the matching paid code. |
| A12 | MEDIUM | Navigation and homepage presented Business as the default audience. | Added `/personal`, `/business`, a homepage Personal section and category links in desktop, drawer and mobile tab navigation. |
| A13 | MEDIUM | Client-only currency detection rendered placeholder prices. | Prices now render server-side from the detected country/currency, then refine on the client. |
| A14 | LOW | Pricing toggle changed UI without a shareable or canonical URL. | Toggle syncs `?product=` with `history.replaceState`; `/pricing` keeps one canonical. |
| A15 | HIGH | Hero followed a generic split layout and used an unrelated stock financial image. | Replaced with a dark product theatre, “Money, in focus.” copy, a DOM/SVG workspace preview, staged motion and a mobile-specific composition. |
| A16 | HIGH | Product pages duplicated eight near-identical layouts and used irrelevant stock imagery. | Replaced with one `ProductPage` template, a shared `ProductPreview` and a single content source. |
| A17 | HIGH | Product copy claimed approvals, batch payments, budgets, pipeline scenarios, inventory valuation and audit trails that do not exist in the backend. | Rewrote copy against the actual cashflow, banking, ledger, projects, departments, CRM and inventory models. |
| A18 | HIGH | The mega menu linked to seven non-existent homepage anchors. | Replaced with real product pages, Solutions, Pricing, AI connections and roles documentation. |
| A19 | MEDIUM | The mobile bottom tab bar obscured page content. | Removed it and rebuilt a focus-trapped mobile drawer with a primary CTA and full navigation. |
| A20 | MEDIUM | The product email-capture forms added friction and used one-off inputs/buttons. | Removed them; standardized `Button`, `Input`, `Checkbox` and `Card`, and migrated the customers form. |
| A21 | MEDIUM | The customers page used stock imagery and an unsupported “world’s best operators” claim. | Reframed as accurate use cases and a community invitation with no stock proof imagery. |
| A22 | LOW | Eight product pages loaded 30 MB of unused stock imagery. | Removed the unused `public/hero`, `public/products` and `public/customers` assets. |

## Coverage

- **P1 stories**: Conversion and pricing are implemented and independently reachable for Personal and Business.
- **P2 stories**: SEO, measurement and docs are implemented.
- **Edge cases**: Missing credentials, rejected consent, unsupported currency, missing translations and category-mismatched plan codes are handled or documented.
- **Remaining gates**: deployed backend signup/checkout contract verification, new locale copy, deployment Lighthouse, real Meta credentials, Google Search Console submission and legal review.
