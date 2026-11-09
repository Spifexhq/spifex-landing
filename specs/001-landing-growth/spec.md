# Feature Specification: Landing growth and acquisition readiness

**Feature**: `001-landing-growth`
**Created**: 2026-11-09
**Status**: Approved for implementation
**Input**: Refactor `spifex-landing` into a production-ready, conversion-focused SaaS website prepared for Google indexing and Meta advertising.

## User Scenarios & Testing

### User Story 1 — Understand and start (Priority: P1)

A first-time visitor lands on the homepage, understands what Spifex does, sees proof of the product’s operating scope and starts a free account or opens pricing.

**Why this priority**: This is the primary acquisition path and the only journey that directly produces signups.

**Independent Test**: Load `/` on desktop and mobile; every primary CTA reaches signup or pricing; the value proposition and product scope are visible without scrolling past the hero.

**Acceptance Scenarios**:

1. **Given** a cold visitor, **When** they read the hero, **Then** they can state the product category, audience and primary benefit.
2. **Given** a visitor who is not ready to sign up, **When** they scroll, **Then** they see features, workflow, AI connection scope, pricing preview and FAQ.
3. **Given** a mobile visitor, **When** they use the bottom navigation or CTA, **Then** the same primary actions remain reachable.

---

### User Story 2 — Choose a plan (Priority: P1)

A visitor compares Free, Starter and Pro using real pricing and feature differences, then continues to signup with the selected intent.

**Why this priority**: Pricing is the highest-intent page and must remain accurate and frictionless.

**Independent Test**: Load `/pricing`; plans render in the visitor’s billing currency; each CTA carries the correct plan and intent to `/signup`.

**Acceptance Scenarios**:

1. **Given** a supported country, **When** pricing loads, **Then** the correct regional currency is shown.
2. **Given** a plan card, **When** the visitor clicks its CTA, **Then** `/signup` receives `intent` and `plan`.
3. **Given** a visitor comparing plans, **When** they read the page, **Then** no invented limits, discounts or guarantees are shown.

---

### User Story 3 — Discover through search (Priority: P2)

A prospect finds Spifex through Google or social sharing and lands on an indexable page with accurate metadata and structured data.

**Why this priority**: Organic and paid acquisition depend on crawlable, canonical, well-described pages.

**Independent Test**: Inspect page source/metadata; confirm canonical, title, description, Open Graph, Twitter card, JSON-LD, sitemap and robots.

**Acceptance Scenarios**:

1. **Given** any public page, **When** fetched, **Then** it has a unique title, description and canonical URL.
2. **Given** the sitemap, **When** crawled, **Then** it contains every public marketing, product, docs, blog and legal route.
3. **Given** a social share, **When** unfurled, **Then** a 1200×630 brand image and correct title/description appear.

---

### User Story 4 — Measure campaigns (Priority: P2)

A growth operator launches Meta campaigns with UTMs and receives deduplicated PageView, Lead, CompleteRegistration and InitiateCheckout events only after marketing consent.

**Why this priority**: Paid acquisition must be measurable and legally consent-aware.

**Independent Test**: With marketing consent accepted, load a page with UTMs and complete signup; verify pixel events, event IDs and stored attribution. With consent rejected, verify no marketing pixel request is made.

**Acceptance Scenarios**:

1. **Given** a UTM-tagged visit, **When** the visitor signs up, **Then** first-touch and session attribution are stored and forwarded.
2. **Given** marketing consent, **When** a conversion occurs, **Then** a pixel event and optional CAPI event share the same event ID.
3. **Given** rejected consent, **When** the visitor browses, **Then** no Meta pixel or CAPI marketing event is sent.

---

### User Story 5 — Find help (Priority: P2)

A prospect or new customer searches product documentation for onboarding, account setup, cashflow, banking, reporting, AI connections and security.

**Why this priority**: Documentation reduces support load and improves activation and search coverage.

**Independent Test**: Load `/docs`, search for a term, open an article, and follow related links.

**Acceptance Scenarios**:

1. **Given** the docs hub, **When** a user types a query, **Then** matching articles filter immediately.
2. **Given** an article, **When** opened, **Then** it has a title, summary, body, related links and unique metadata.

---

### Edge Cases

- Marketing consent is not yet decided: no marketing scripts load; functional analytics are disabled.
- Meta pixel ID is absent: tracking calls are no-ops; no console errors.
- CAPI token is absent: the server route returns no-op success.
- A visitor changes locale: new copy falls back to English when a translation is missing.
- A visitor has an unsupported billing country: pricing uses the default supported currency.
- Signup verification succeeds but checkout fails: account remains valid; the user can continue from the dashboard.

## Requirements

### Functional Requirements

- **FR-001**: Homepage MUST present category, audience, benefit, primary CTA and secondary pricing CTA above the fold.
- **FR-002**: Homepage MUST describe real modules: cashflow, banking/payments, spend/settlements, ledger, projects, departments, CRM, inventory, reconciliation, reporting and AI connections.
- **FR-002a**: Dedicated Personal and Business pages MUST present differentiated positioning, real capabilities and category-specific pricing CTAs.
- **FR-003**: Pricing MUST present Personal and Business as separate product categories with accurate Free/Starter/Pro data and regional currency logic; no invented prices or limits.
- **FR-003a**: Signup and checkout MUST preserve the selected product category and paid tier, starting on the category's Free plan before secure checkout.
- **FR-004**: Signup MUST preserve existing API flow, consent and checkout behavior.
- **FR-005**: Every public page MUST expose canonical, title, description, Open Graph and Twitter metadata.
- **FR-006**: Public pages MUST expose Organization, WebSite, SoftwareApplication, FAQ and breadcrumb structured data where applicable.
- **FR-007**: `sitemap.xml` MUST include all public static, product, docs, blog and legal routes.
- **FR-008**: `robots.txt` MUST allow public pages and disallow signup/API routes.
- **FR-009**: Analytics MUST require marketing consent before loading Meta Pixel or sending CAPI events.
- **FR-010**: Tracking MUST capture UTM parameters, `fbclid` and `gclid`, preserve first-touch attribution and deduplicate events by event ID.
- **FR-011**: Tracking MUST emit PageView, Lead, CompleteRegistration and InitiateCheckout; Purchase MUST be available for server-side checkout webhooks.
- **FR-012**: Documentation MUST be searchable and cover onboarding, account setup, cashflow, banking, settlements, reporting, AI connections, security and billing.
- **FR-013**: Legal pages MUST remain available and linked; content requiring professional review MUST be flagged in the implementation notes.
- **FR-014**: Design MUST use Spifex orange, ink, neutral surfaces and Inter typography; all interactive elements MUST have visible focus states.
- **FR-015**: Build MUST pass TypeScript, ESLint and Next production build.

### Key Entities

- **Attribution**: first-touch and session UTM/referrer data.
- **Consent**: marketing/analytics decision and timestamp.
- **Conversion event**: name, event ID, value, currency, plan and attribution.
- **Documentation article**: slug, title, summary, category, body, related links.
- **Pricing tier**: key, regional price, highlights and signup intent.

## Success Criteria

- **SC-001**: A visitor can identify the product and reach signup in under 15 seconds.
- **SC-002**: All primary CTAs reach `/signup` or `/pricing` with no dead links.
- **SC-003**: Lighthouse/Next build shows no blocking errors; hero image is LCP-prioritized.
- **SC-004**: Every public route has unique metadata and appears in the sitemap.
- **SC-005**: Marketing scripts load only after explicit consent.
- **SC-006**: Signup conversion events carry the same event ID to pixel and CAPI.
- **SC-007**: Documentation search returns relevant articles for the core workflow terms.

## Assumptions

- Existing backend signup, checkout and legal content remain the source of truth.
- No testimonials, customer logos, performance metrics or compliance certifications are invented.
- Meta credentials are supplied by environment variables; absence disables tracking safely.
- Legal copy is operational draft content and requires professional review before launch.
- The landing is deployed as a Next.js app; no backend API changes are required for this iteration.
