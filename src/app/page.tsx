import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  Bot,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  Landmark,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Wallet,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/marketing/FAQ";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import { DASHBOARD_URLS } from "@/content/navigation";
import { PRODUCT_LINKS } from "@/content/products";
import { getServerI18n } from "@/i18n/server";
import { UI_LABELS } from "@/i18n/ui-labels";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  faqSchema,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return pageMetadata({
    title: t("meta.siteTitle"),
    description: t("meta.siteDescription"),
    path: "/",
  });
}

const OUTCOME_KEYS = ["visibility", "control", "traceability", "decisions"] as const;
const AUDIENCE_KEYS = ["multiEntity", "financeOps", "projectLed", "vendorHeavy"] as const;
const WORKFLOW_KEYS = ["create", "structure", "operate"] as const;
const FAQ_KEYS = ["free", "replace", "ai", "security", "migrate"] as const;

const PRODUCT_ICONS = {
  cashflow: ChartNoAxesCombined,
  banking: Landmark,
  spend: CircleDollarSign,
  ledger: BookOpenCheck,
  projects: BadgeCheck,
  departments: UsersRound,
  crm: UsersRound,
  inventory: Banknote,
} as const;

export default async function HomePage() {
  const { t, locale } = await getServerI18n();
  const products = PRODUCT_LINKS;
  const faqItems = FAQ_KEYS.map((key) => ({
    question: t(`homeV2.faq.items.${key}.q`),
    answer: t(`homeV2.faq.items.${key}.a`),
  }));

  return (
    <main className="bg-white">
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          softwareApplicationSchema(),
          faqSchema(faqItems),
        ]}
      />

      {/* Hero */}
      <Hero />

      <TrustStrip />

      {/* Audiences */}
      <Section tone="white" className="py-10 sm:py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-[var(--ink)]">{t("homeV2.audiences.title")}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
              {AUDIENCE_KEYS.map((key) => (
                <span key={key}>{t(`homeV2.audiences.items.${key}`)}</span>
              ))}
              <span className="hidden h-3 w-px bg-[var(--line)] sm:block" aria-hidden="true" />
              <Link
                href="/personal"
                className="inline-flex items-center gap-1 font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
              >
                {t("nav.personal")}
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
              <Link
                href="/business"
                className="inline-flex items-center gap-1 font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
              >
                {t("nav.business")}
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section tone="canvas" id="solutions">
        <Container>
          <SectionHeading
            eyebrow={t("homeV2.outcomes.eyebrow")}
            title={t("homeV2.outcomes.title")}
            description={t("homeV2.outcomes.subtitle")}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOME_KEYS.map((key, index) => {
              const icons = [ChartNoAxesCombined, ShieldCheck, RefreshCw, Sparkles];
              const IconComponent = icons[index];
              return (
                <FeatureCard
                  key={key}
                  icon={IconComponent}
                  title={t(`homeV2.outcomes.items.${key}.title`)}
                  description={t(`homeV2.outcomes.items.${key}.desc`)}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Personal */}
      <Section tone="white" id="personal">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <SectionHeading
                eyebrow={t("homeV2.personal.eyebrow")}
                title={t("homeV2.personal.title")}
                description={t("homeV2.personal.subtitle")}
              />
              <ul className="mt-8 grid gap-3.5">
                {(["accounts", "budgets", "reporting", "ai"] as const).map((key, index) => {
                  const icons = [Wallet, Target, ChartNoAxesCombined, Bot];
                  const IconComponent = icons[index];
                  return (
                    <li key={key} className="flex gap-3 text-sm leading-6 text-[var(--ink-soft)]">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                        <IconComponent size={13} aria-hidden="true" />
                      </span>
                      <span>{t(`homeV2.personal.bullets.${key}`)}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/signup?intent=signup&product=personal&plan=free"
                  dataCta="home-personal-start"
                >
                  {t("homeV2.personal.start")}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button href="/personal" variant="secondary" dataCta="home-personal-explore">
                  {t("homeV2.personal.cta")}
                </Button>
              </div>
              <p className="mt-4 text-xs font-medium text-[var(--muted)]">{t("homeV2.personal.note")}</p>
            </div>

            <div className="rounded-3xl border border-[var(--line)] bg-[#fbfaf7] p-4 shadow-card sm:p-6">
              <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[var(--ink)]">Personal workspace</p>
                    <p className="mt-0.5 text-[11px] text-[var(--muted)]">This month · all accounts</p>
                  </div>
                  <span className="rounded-full border border-[var(--line)] bg-[var(--canvas)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                    Personal
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { label: "Planned budget", value: "68%", width: "68%" },
                    { label: "Settled", value: "42%", width: "42%" },
                    { label: "Goals on track", value: "3 of 4", width: "75%" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-[11px] font-medium text-[var(--ink-soft)]">
                        <span>{row.label}</span>
                        <span className="text-[var(--muted)]">{row.value}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#eeeae4]">
                        <div
                          className="h-full rounded-full bg-[var(--brand)]"
                          style={{ width: row.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[#fbfaf7] p-3 text-[11px] text-[var(--muted)]">
                  <Check size={13} className="text-[var(--success)]" aria-hidden="true" />
                  Accounts, categories and goals share one currency and workspace.
                </div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {["Free", "Starter", "Pro"].map((tier) => (
                  <div
                    key={tier}
                    className="rounded-xl border border-[var(--line)] bg-white px-3 py-2.5 text-center text-xs font-semibold text-[var(--ink-soft)]"
                  >
                    Personal {tier}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section tone="canvas" id="platform">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow={t("homeV2.modules.eyebrow")}
              title={t("homeV2.modules.title")}
              description={t("homeV2.modules.subtitle")}
            />
            <Button href="/solutions" variant="outline" dataCta="modules-explore">
              {t("homeV2.modules.cta")}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const IconComponent = PRODUCT_ICONS[product.key as keyof typeof PRODUCT_ICONS];
              return (
                <FeatureCard
                  key={product.key}
                  icon={IconComponent}
                  title={t(`products.items.${product.key}.title`)}
                  description={t(`products.items.${product.key}.desc`)}
                  href={product.href}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* AI connections */}
      <Section tone="ink" id="ai-connections" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[var(--brand)]/20 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={t("homeV2.ai.eyebrow")}
                title={t("homeV2.ai.title")}
                description={t("homeV2.ai.subtitle")}
                dark
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {(["readOnly", "oauth", "revoke", "privacy"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm leading-6 text-white/75">
                    <Check size={15} className="mt-1 shrink-0 text-[var(--teal)]" aria-hidden="true" />
                    {t(`homeV2.ai.bullets.${key}`)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/docs/ai-connections" variant="primary" dataCta="ai-docs">
                  {t("homeV2.ai.cta")}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <span className="text-xs text-white/50">{t("homeV2.ai.note")}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[var(--teal)]">
                    <Bot size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Spifex connector</p>
                    <p className="text-[11px] text-white/50">Streamable HTTP · MCP</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--teal)]">
                  <LockKeyhole size={11} aria-hidden="true" />
                  Read only
                </span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-[12px] text-white/70">
                <p><span className="text-white/60">scope</span> cashflow:read</p>
                <p><span className="text-white/60">tools</span> list_workspaces, list_cashflow_rows</p>
                <p><span className="text-white/60">summary</span> summarize_cashflow</p>
                <p><span className="text-white/60">categories</span> list_cashflow_categories</p>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-black/15 p-3 text-xs text-white/60">
                <LockKeyhole size={14} className="text-[var(--teal)]" aria-hidden="true" />
                Cannot create, edit, settle or transfer.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Workflow */}
      <Section tone="canvas" id="how-it-works">
        <Container>
          <SectionHeading
            eyebrow={t("homeV2.workflow.eyebrow")}
            title={t("homeV2.workflow.title")}
            description={t("homeV2.workflow.subtitle")}
          />
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {WORKFLOW_KEYS.map((key, index) => (
              <div key={key} className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-[15px] font-semibold text-[var(--ink)]">
                  {t(`homeV2.workflow.steps.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {t(`homeV2.workflow.steps.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing preview */}
      <Section tone="white" id="pricing-preview">
        <Container>
          <div className="rounded-3xl border border-[var(--line)] bg-[#fbfaf7] p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={t("homeV2.pricing.eyebrow")}
                  title={t("homeV2.pricing.title")}
                  description={t("homeV2.pricing.subtitle")}
                />
                <p className="mt-4 text-xs leading-5 text-[var(--muted)]">{t("homeV2.pricing.note")}</p>
                <Button href="/pricing" variant="dark" className="mt-6" dataCta="home-compare-plans">
                  {t("homeV2.pricing.cta")}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {(["personal", "business"] as const).map((category) => (
                  <div key={category} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      {t(`pricingV2.${category}`)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                      {t(`pricingV2.${category}Desc`)}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-[var(--ink-soft)]">
                      Free · Starter · Pro
                    </p>
                    <Link
                      href={`/pricing?product=${category}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
                      data-cta={`home-plans-${category}`}
                    >
                      {t("homeV2.pricing.cta")} <ArrowUpRight size={12} aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="canvas" id="faq">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow={t("homeV2.faq.eyebrow")}
              title={t("homeV2.faq.title")}
            />
            <FAQ items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section tone="white" className="pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] px-6 py-12 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand)]/25 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">
                  {UI_LABELS[locale].finalCtaEyebrow}
                </p>
                <h2 className="text-balance mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  {t("homeV2.finalCta.title")}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">{t("homeV2.finalCta.subtitle")}</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                <Button href={`${DASHBOARD_URLS.signup}?intent=signup&plan=free`} size="lg" dataCta="final-start-free">
                  {t("homeV2.finalCta.primary")}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button href="/customers/learn-more" variant="outline" size="lg" className="border-white/20 text-white hover:border-white/50 hover:bg-white/10" dataCta="final-contact">
                  {t("homeV2.finalCta.secondary")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
