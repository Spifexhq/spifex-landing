# Tasks: Landing growth and acquisition readiness

**Input**: `specs/001-landing-growth/spec.md` · `plan.md`
**Status**: Implemented in the working tree; validation recorded below.

## Phase 1 — Foundations

- [x] T001 Add Spifex brand tokens, typography, focus states and motion-safe utilities in `src/app/globals.css`.
- [x] T002 Refactor `src/components/ui/Button.tsx` for orange primary, dark, outline, ghost and large CTA variants.
- [x] T003 Add shared marketing primitives (`Section`, `SectionHeading`, `FeatureCard`, `FAQ`, `TrustStrip`).
- [x] T004 Add SEO helpers and `JsonLd` component.
- [x] T005 Deep-merge locale dictionaries with English fallback for new copy.

## Phase 2 — Conversion

- [x] T006 Rewrite homepage hero, outcomes, module grid, AI connections, workflow, pricing preview, FAQ and final CTA.
- [x] T007 Add trust strip using only shipped facts (read-only AI access, tenant isolation, OAuth, free start).
- [x] T008 Upgrade pricing cards, comparison, guarantee-free note and FAQ without inventing prices/limits.
- [x] T008a Add Personal/Business segmented pricing with real Free/Starter/Pro catalog and quotas from `seed_plans.py` and entitlement seeds.
- [x] T008b Add dedicated `/personal` and `/business` landing pages with differentiated copy and CTAs.
- [x] T008c Add the homepage Personal section, Personal/Business navigation and footer links.
- [x] T008d Add category-aware pricing with server-rendered prices, URL-synced toggle, comparison rows and FAQ.
- [x] T008e Preserve `product_category` and `plan_code` through registration and paid checkout; start on each category’s Free plan and expose a free-signup category selector.
- [x] T009 Preserve signup API flow; add attribution and conversion events.
- [x] T010 Add `/signup/success` page and CompleteRegistration/InitiateCheckout tracking.
- [x] T011 Add responsive navigation/footer links to docs and AI connections.

## Phase 3 — Discoverability

- [x] T012 Add root metadata: metadataBase, title template, canonical, Open Graph, Twitter, robots.
- [x] T013 Add 1200×630 dynamic Open Graph image.
- [x] T014 Add Organization, WebSite, SoftwareApplication, FAQ and breadcrumb JSON-LD.
- [x] T015 Expand `sitemap.ts` to all public static, product, docs, blog and legal routes.
- [x] T016 Expand `robots.ts` with private-route disallow rules.
- [x] T017 Add searchable `/docs` hub and `/docs/[slug]` articles.
- [x] T018 Add docs content for onboarding, account setup, cashflow, banking, settlements, reporting, AI connections, security and billing.
- [x] T019 Keep legal hub and flag professional-review requirement.

## Phase 4 — Measurement

- [x] T020 Add consent state store and cookie banner.
- [x] T021 Add UTM/fbclid/gclid first-touch and session attribution.
- [x] T022 Add consent-gated Meta Pixel loader and event helpers.
- [x] T023 Add server CAPI route with event allowlist, hashed email and event-ID de-duplication.
- [x] T024 Emit PageView, Lead, CompleteRegistration and InitiateCheckout; expose Purchase for checkout webhooks.
- [x] T025 Add `.env.example` for pixel/CAPI/analytics configuration.

## Phase 5 — Validation

- [x] T026 TypeScript build.
- [x] T027 ESLint.
- [x] T028 Next production build.
- [ ] T029 Manual Lighthouse/mobile CWV run in deployment environment.
- [ ] T030 Professional legal review of privacy, terms and cookie notice.
- [ ] T031 Configure real Meta pixel/CAPI credentials and test events.
- [ ] T032 Verify Google indexing, canonical URLs and sitemap submission after deploy.

## Notes

- No testimonials, customer logos or performance metrics are invented.
- Purchase events must be sent from the Stripe checkout completion path (server), not fabricated on the landing page.
- Legal content is operational draft and requires professional review.
