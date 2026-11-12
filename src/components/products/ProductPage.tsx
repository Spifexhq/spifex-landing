import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProductPreview } from "@/components/products/ProductPreview";
import { PLAN_CATALOG } from "@/content/plans";
import { getProductLink } from "@/content/products";
import { getProductPageContent, type ProductPageContent } from "@/content/product-pages";
import { getServerI18n } from "@/i18n/server";
import { currencyForCountry } from "@/lib/location/billing-currency";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/seo/schema";

export async function ProductPage({ content }: { content: ProductPageContent }) {
  const { t, locale, country } = await getServerI18n();
  const page = getProductPageContent(content.key, locale);
  const copy = page.copy;
  const badge = page.name;
  const plans = PLAN_CATALOG.business;
  const currency = currencyForCountry(country);
  const capabilityColumns = copy.capabilities.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <main className="bg-white">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: badge, path: content.href },
          ]),
          softwareApplicationSchema(),
        ]}
      />

      {/* Hero */}
      <section className="relative px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4 lg:pt-4">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0c0c0c] sm:rounded-[2rem]">
          <div className="hero-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

          <Container className="relative pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-medium text-white/55">
              <Link href="/" className="transition-colors hover:text-white">
                {t("nav.home")}
              </Link>
              <span aria-hidden="true" className="text-white/25">
                /
              </span>
              <span className="text-white/85">{badge}</span>
            </nav>

            <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                  {t("productPages.moduleLabel")}
                </p>

                <h1 className="text-balance mt-5 text-[clamp(2.5rem,5.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.045em] text-white">
                  {copy.title}
                </h1>

                <p className="text-pretty mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  {copy.subtitle}
                </p>

                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {copy.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[13px] leading-6 text-white/80">
                      <Check size={14} className="mt-1 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
                  <Button
                    href="/signup?intent=signup&product=business&plan=free"
                    size="lg"
                    dataCta={`${content.key}-hero-start`}
                  >
                    {t("productPages.startFree")}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>
                  <Button
                    href="/pricing?product=business"
                    variant="ghost"
                    size="lg"
                    className="border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.09] hover:text-white"
                    dataCta={`${content.key}-hero-pricing`}
                  >
                    {t("productPages.seePricing")}
                  </Button>
                </div>

                <p className="mt-4 text-[11px] font-medium text-white/50">{t("productPages.heroNote")}</p>
              </div>

              <ProductPreview productKey={content.key} preview={page.preview} tone="dark" locale={locale} />
            </div>
          </Container>
        </div>
      </section>

      <TrustStrip />

      {/* Outcomes */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={t("productPages.outcomesEyebrow")}
            title={t("productPages.outcomesTitle")}
            description={t("productPages.outcomesSubtitle")}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {copy.outcomes.map((outcome, index) => (
              <Card key={outcome.title} className="p-6">
                <span className="text-[11px] font-semibold tabular-nums text-[var(--brand-strong)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold text-[var(--ink)]">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{outcome.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Workflow */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow={t("productPages.howEyebrow")}
              title={t("productPages.howTitle")}
              description={t("productPages.howSubtitle")}
            />
            <ol className="grid gap-3">
              {copy.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-[var(--line)] bg-white p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ink)] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-[var(--ink)]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={t("productPages.capabilitiesEyebrow")}
            title={copy.capabilitiesTitle}
            description={copy.capabilitiesSubtitle}
          />
          <div className={`mt-10 grid gap-3 sm:grid-cols-2 ${capabilityColumns}`}>
            {copy.capabilities.map((capability) => (
              <Card key={capability.title} className="p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-soft)] text-[var(--brand-strong)]">
                  <Check size={15} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-[var(--ink)]">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Plans */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
            <SectionHeading
              eyebrow={t("productPages.plansEyebrow")}
              title={t("productPages.plansTitle")}
              description={t("productPages.plansSubtitle")}
            />
            <div>
              <div className="grid gap-2">
                {plans.map((plan) => {
                  const amount = plan.prices[currency];
                  return (
                    <div
                      key={plan.code}
                      className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-white px-4 py-3.5"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[var(--ink)]">{plan.name}</p>
                        <p className="mt-0.5 truncate text-xs text-[var(--muted)]">
                          {plan.comparison.entries} entries · {plan.comparison.banks} bank accounts
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-semibold tabular-nums text-[var(--ink)]">
                          {plan.tier === "free" || amount == null
                            ? t("pricingTiers.free.priceLabel")
                            : formatPrice(amount)}
                        </p>
                        <p className="text-[10px] text-[var(--muted)]">
                          {plan.tier === "free" ? t("productPages.noCard") : t("productPages.perMonth")}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  href="/signup?intent=signup&product=business&plan=free"
                  dataCta={`${content.key}-plans-start`}
                >
                  {t("productPages.startFree")}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button
                  href="/pricing?product=business"
                  variant="secondary"
                  dataCta={`${content.key}-plans-compare`}
                >
                  {t("productPages.comparePlans")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related products */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={t("productPages.relatedEyebrow")}
            title={t("productPages.relatedTitle")}
            description={t("productPages.relatedDesc")}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {content.related.map((key) => {
              const related = getProductLink(key);
              return (
                <Link
                  key={key}
                  href={related.href}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition-colors hover:border-[#d7d1c8] hover:bg-[#fffdfa]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--canvas)] text-[var(--ink)]">
                    <Icon name={related.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-[var(--ink)]">
                    {t(`products.items.${related.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{t(`products.items.${related.key}.desc`)}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)]">
                    {t("common.learnMore")}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section tone="white" className="pb-20 pt-4 sm:pt-6">
        <Container>
          <div className="rounded-3xl bg-[var(--ink)] px-6 py-12 text-center sm:px-12">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white">
              {copy.finalTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65">
              {copy.finalSubtitle}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/signup?intent=signup&product=business&plan=free"
                size="lg"
                dataCta={`${content.key}-final-start`}
              >
                {t("productPages.startFree")}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button
                href="/pricing?product=business"
                variant="ghost"
                size="lg"
                className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
                dataCta={`${content.key}-final-pricing`}
              >
                {t("productPages.seePricing")}
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/50">{t("productPages.heroNote")}</p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
