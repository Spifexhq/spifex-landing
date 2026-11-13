# Spifex landing

Public marketing site for Spifex, built with Next.js App Router, React 19 and
Tailwind CSS 4.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Routes

- `/` — conversion homepage for Personal and Business
- `/personal` — Personal positioning, capabilities and plan CTAs
- `/business` — Business positioning, capabilities and plan CTAs
- `/pricing` — regional pricing with Personal/Business toggle, comparison and FAQ
- `/pricing?product=personal|business` — pricing deep link for each category
- `/solutions` — platform and operating-model overview
- `/products/*` — product detail pages
- `/docs` — searchable product documentation
- `/docs/[slug]` — onboarding, cashflow, banking, reporting, AI and security guides
- `/lp/[slug]` — noindex campaign landing pages
- `/legal/*` — privacy, terms and cookie notice
- `/blog` — MDX articles
- `/signup` — category-aware account creation and checkout handoff
- `/signup/success` — post-verification next steps

## Product categories and plans

`src/content/plans.ts` is the landing-page catalog for both product categories.
Prices and quotas mirror the backend `seed_plans.py` and entitlement seeds:

| Category | Plan | EUR | USD | BRL |
|---|---|---|---|---|
| Personal | Personal Free | 0 | 0 | 0 |
| Personal | Personal Starter | 9.99 | 7.99 | 39.99 |
| Personal | Personal Pro | 14.99 | 12.99 | 109.99 |
| Business | Business Free | 0 | 0 | 0 |
| Business | Business Starter | 15 | 12 | 50 |
| Business | Business Pro | 27 | 30 | 150 |

Signup always starts the new workspace on the category’s Free plan
(`free` or `personal-free`) because the API rejects paid plans at registration.
The selected paid code (`starter`, `pro`, `personal-starter`, `personal-pro`)
is preserved and used by the post-verification checkout call.

For free signup, `/signup` shows a Personal/Business workspace-type selector that
syncs `?product=` in the URL. Paid signup hides the selector and derives the
category from the plan code so the plan and category cannot diverge.

## Design system and product pages

- Shared UI lives in `src/components/ui`: `Button` (link or native button),
  `Input`, `Checkbox`, `Card`, `Container` and `Icon`.
- Navigation lives in `src/components/nav`: `Navbar` (desktop header + mobile
  drawer) and `ProductsMegaMenu`.
- Product pages share `src/components/products/ProductPage.tsx`,
  `ProductPreview.tsx` and the content in `src/content/product-pages.ts`.
  Adding a product page means adding one entry and a short route file.
- Product-page visuals are DOM/SVG compositions, not screenshots. The unused
  stock image sets were removed from `public/`.
- Product-page copy is currently English-first; the new keys and content still
  need pt/pt-BR/fr/de translation.

Agent skills are installed under `.agents/skills` by the `skills` CLI. They are
excluded from ESLint and are not part of the application bundle.

## Configuration

Copy `.env.example` and set:

| Variable | Purpose |
|---|---|
| `SITE_URL` | Canonical origin for metadata, sitemap and Open Graph |
| `NEXT_PUBLIC_META_PIXEL_ID` | Browser Meta Pixel (optional) |
| `META_PIXEL_ID` | Server CAPI pixel ID (optional) |
| `META_CAPI_ACCESS_TOKEN` | Server CAPI access token (optional) |
| `META_CAPI_TEST_EVENT_CODE` | Meta test event code (optional) |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification (optional) |
| `BING_SITE_VERIFICATION` | Bing verification (optional) |

Marketing analytics is consent-gated. With no credentials, tracking is a no-op.

## Documentation

- [Meta Ads readiness](docs/meta-ads.md)
- [Launch checklist](docs/launch-checklist.md)
- [Spec Kit feature](specs/001-landing-growth/spec.md)
- [Country language/currency defaults](specs/002-geo-language-currency/spec.md)

## Notes

- The homepage hero is a DOM/SVG Spifex workspace preview with staged CSS motion
  and pointer parallax; it does not use stock financial imagery.
- No testimonials, customer logos or performance metrics are invented.
- Pricing comes from the existing Personal/Business Free, Starter and Pro catalog.
- The Personal/Business toggle updates the URL (`?product=`) without a reload, and
  prices are server-rendered for the detected currency.
- The default language and currency come from the visitor's country; supported
  countries are listed in `src/lib/location/markets.ts`. Language can be changed
  in the picker (`spifex_locale_user` cookie plus local storage) while currency is
  server-resolved and never user-selectable. `?lang=<locale>` forces a language
  and `?lang=auto` returns to the country default.
- Legal content is an operational draft and requires professional review. The
  EU-oriented pack covers legal notice, privacy, cookies, terms, DPA,
  subprocessors, security measures, retention, refunds/withdrawal,
  accessibility, AI transparency and data portability. Complete the bracketed
  company details in the Legal Notice and Privacy Policy before publication.
- Purchase events belong in the server-side Stripe checkout completion path.
