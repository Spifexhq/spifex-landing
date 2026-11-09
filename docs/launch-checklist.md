# Launch checklist

## Required configuration

- `SITE_URL` set to the canonical production origin.
- `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` if using verification.
- `NEXT_PUBLIC_META_PIXEL_ID` and the server CAPI variables before launching paid
  campaigns.
- Dashboard URLs in `src/content/navigation.ts` point to production.

## Pre-launch

- [ ] `npm run lint` passes.
- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run build` passes.
- [ ] `/`, `/personal`, `/business`, `/pricing`, `/solutions`, `/docs`, product
  pages and legal pages return 200.
- [ ] `/pricing?product=personal` and `/pricing?product=business` server-render
  the correct category, prices and currency.
- [ ] All eight `/products/*` pages return 200 and show the current English
  product copy and detected-currency plan prices.
- [ ] The desktop mega menu opens with pointer and keyboard, closes on Escape and
  outside click, and contains no dead anchors.
- [ ] The mobile drawer opens, traps focus, closes on Escape/swipe and lists all
  eight products; no bottom tab bar covers content.
- [ ] Confirm no stock product/hero/customer images remain in `public/` or in
  rendered pages.
- [ ] Pricing toggle updates `?product=` without a reload and keeps the URL
  shareable.
- [ ] `/signup?intent=signup&product=personal&plan=free` creates a Personal
  workspace and `/signup?intent=subscribe&product=personal&plan=personal-starter`
  reaches checkout with `personal-starter` after verification.
- [ ] On free signup, the workspace-type selector switches Personal/Business,
  updates `?product=` and changes the registration payload.
- [ ] Paid signup hides the workspace-type selector and uses the plan code’s
  category.
- [ ] Business signup still uses `free`, `starter` and `pro` codes.
- [ ] `/sitemap.xml` and `/robots.txt` are correct for the production origin.
- [ ] Homepage hero renders its final state with `prefers-reduced-motion`,
  no horizontal overflow at 390/768/1440 and no stock financial imagery.
- [ ] Canary share shows the 1200×630 Open Graph image.
- [ ] `/signup` completes against production or staging APIs.
- [ ] Marketing consent rejected: no Meta requests in the network panel.
- [ ] Marketing consent accepted: PageView appears in Meta Test Events.
- [ ] Campaign URLs `/lp/ai-connections`, `/lp/cashflow`, `/lp/finance-ops`
  render with noindex.
- [ ] AI connection docs link to the real consent flow.
- [ ] Purchase event is wired in the Stripe webhook with a stable Stripe event ID.

## Legal and content review

- Privacy Policy, Terms of Service and Cookie Notice are existing operational
  drafts and **require professional legal review** before launch.
- No testimonials, customer logos, performance metrics or compliance
  certifications were invented.
- Pricing displayed on the landing page is limited to the existing Personal and
  Business Free/Starter/Pro catalog; final currency and taxes are confirmed at
  checkout.
- Confirm that the deployed backend accepts `product_category` plus the category’s
  Free plan code at signup, and the matching paid code at checkout.

## Post-launch

- [ ] Submit `sitemap.xml` in Google Search Console.
- [ ] Confirm canonical URLs and index coverage.
- [ ] Verify Core Web Vitals on mobile after real traffic.
- [ ] Review Meta event match quality and deduplication.
- [ ] Monitor `/api/meta/conversions` error rate and 429s.
