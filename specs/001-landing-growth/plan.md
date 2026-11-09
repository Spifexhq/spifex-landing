# Implementation Plan: Landing growth and acquisition readiness

**Branch**: `001-landing-growth` | **Date**: 2026-11-09 | **Spec**: `specs/001-landing-growth/spec.md`

## Summary

Refactor the existing Next.js landing into a conversion-focused, indexable SaaS site. Preserve the existing signup/checkout API flow and legal content, add a shared marketing design layer, rewrite the homepage around outcomes and real product scope, add searchable product documentation, and introduce consent-aware Meta attribution with deduplicated pixel/CAPI events.

## Technical Context

**Language/Version**: TypeScript 5, React 19, Next.js 16 App Router
**Primary Dependencies**: Tailwind CSS 4, `lucide-react`, `next/font`, `next-mdx-remote`, `gray-matter`, `remark-gfm`
**Storage**: Browser `localStorage`/`sessionStorage`/cookies for consent and attribution; no new database
**Testing**: `npm run build`, `npx tsc -b`, `npm run lint`; manual route/CTA/metadata checks
**Target Platform**: Static/server-rendered Next.js deployment behind HTTPS
**Performance Goals**: LCP hero image prioritized; no blocking third-party scripts before consent; minimal client JS
**Constraints**: No invented claims or prices; preserve existing signup API contract; legal content requires review
**Scale/Scope**: Homepage, pricing, solutions, docs, legal, blog, product pages, signup funnel, analytics infrastructure

## Constitution Check

- **Conversion first**: Every section ends in a clear primary or secondary action; no decorative-only blocks.
- **Truthful positioning**: Copy uses only shipped capabilities and existing plan data.
- **Privacy**: Meta scripts are consent-gated; no PII in client events; CAPI hashes email when supplied.
- **Accessibility**: Semantic landmarks, keyboard focus, reduced-motion-safe CSS, labeled controls.
- **Maintainability**: Shared tokens/primitives; content separated from presentation; no duplicate tracking logic.
- **Performance**: No new runtime dependency; server components by default; analytics loaded conditionally.

## Project Structure

```text
spifex-landing/
├── specs/001-landing-growth/
├── src/app/
│   ├── api/meta/conversions/route.ts
│   ├── docs/page.tsx
│   ├── docs/[slug]/page.tsx
│   ├── opengraph-image.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── pricing/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── src/components/
│   ├── analytics/AnalyticsProvider.tsx
│   ├── analytics/CookieConsent.tsx
│   ├── marketing/*.tsx
│   └── seo/JsonLd.tsx
├── src/content/docs.ts
├── src/lib/analytics/*.ts
├── src/lib/seo/*.ts
└── src/i18n/...
```

**Structure Decision**: Extend the existing App Router structure with two audience routes (`/personal`, `/business`) and one shared catalog in `src/content/plans.ts`. Marketing sections are server components; only consent, analytics, documentation search, pricing currency and the category toggle remain client components.

## Implementation Phases

1. **Foundations** — design tokens, shared CTA/section primitives, SEO metadata helpers, JSON-LD.
2. **Conversion** — homepage rewrite including the Personal section, Personal/Business pricing architecture, signup funnel tracking and success page.
3. **Discoverability** — per-page metadata, OG image, sitemap/robots, docs hub and articles.
4. **Measurement** — consent banner, UTM attribution, Meta pixel/CAPI integration, event taxonomy.
5. **Validation** — TypeScript, ESLint, build, route/link checks, metadata inspection.

## Dependencies and Sequencing

1. Foundations before page rewrites.
2. Analytics provider before signup tracking.
3. Docs content before docs routes/sitemap.
4. SEO helpers before page metadata.
5. Validate after all edits.

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Missing translations for new copy | English fallback merge; keep existing localized keys. |
| Meta script degrades CWV | Load only after consent; small inline loader; no blocking script. |
| Duplicate conversion events | Shared `event_id` for pixel and CAPI; route de-duplicates by event ID. |
| Invented claims | Copy limited to shipped modules, pricing data and security facts. |
| Legal content mistaken for approved | Flag in docs and tracker; recommend counsel review. |
| Sitemap misses dynamic docs | Build docs list from the shared content source. |
