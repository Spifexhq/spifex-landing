import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DASHBOARD_URLS } from "@/content/navigation";
import { getServerI18n } from "@/i18n/server";

import {
  ArrowRightLeft,
  Banknote,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CreditCard,
  Layers,
  Package,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const EMAIL_PARAM = "email";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return {
    title: t("solutionsPage.meta.title"),
    description: t("solutionsPage.meta.description"),
  };
}

const HERO_CARD_KEYS = ["lifecycle", "complexity", "governance", "kpis"] as const;

const PRODUCTS = [
  { key: "cashflow", href: "/products/cashflow", Icon: ArrowRightLeft },
  { key: "bankingPayments", href: "/products/banking-payments", Icon: Building2 },
  { key: "spendSettlements", href: "/products/spend-settlements", Icon: CreditCard },
  { key: "ledger", href: "/products/ledger", Icon: BookOpen },
  { key: "projects", href: "/products/projects", Icon: Briefcase },
  { key: "departments", href: "/products/departments", Icon: Users },
  { key: "crm", href: "/products/crm", Icon: Layers },
  { key: "inventory", href: "/products/inventory", Icon: Package },
] as const;

const WORKFLOWS = [
  { key: "reconciliation", href: "#workflow-reconciliation", Icon: RefreshCw },
  { key: "accountingAutomation", href: "#workflow-accounting-automation", Icon: Sparkles },
  { key: "reportingKpis", href: "#workflow-reporting-kpis", Icon: BarChart3 },
] as const;

const OPERATING_MODEL_KEYS = ["plan", "execute", "reconcile"] as const;

const TEAM_KEYS = ["cfo", "financeOps", "operators"] as const;

const SOLUTION_KEYS = ["cashVisibility", "spendGovernance", "bankingPayments", "closeAudit", "profitability", "connectedOps"] as const;
const SOLUTION_BULLETS = ["b1", "b2", "b3", "b4", "b5"] as const;
const SOLUTION_KPIS = ["k1", "k2", "k3"] as const;

const ROLLOUT_KEYS = ["connect", "structure", "operate", "optimize"] as const;

function ChipLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
    >
      {label}
    </Link>
  );
}

export default async function SolutionsPage() {
  const { t } = await getServerI18n();

  return (
    <main className="bg-white">
      {/* HERO (matches screenshot structure) */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {t("solutionsPage.hero.title")}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {t("solutionsPage.hero.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {HERO_CARD_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="text-sm font-semibold text-slate-900">
                  {t(`solutionsPage.hero.cards.${k}.title`)}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`solutionsPage.hero.cards.${k}.desc`)}
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA line (email + pricing) */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <form action={DASHBOARD_URLS.signup} method="GET" className="w-full sm:max-w-md">
              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
                <input
                  type="email"
                  name={EMAIL_PARAM}
                  required
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t("solutionsPage.hero.emailPlaceholder")}
                  className={[
                    "h-14 w-full rounded-2xl bg-transparent px-5 pr-36 text-sm text-slate-900 outline-none",
                    "placeholder:text-slate-400",
                    "focus:border-slate-300 focus:ring-0",
                  ].join(" ")}
                />
                <button
                  type="submit"
                  className={[
                    "absolute right-2 top-1/2 h-10 -translate-y-1/2 rounded-xl bg-orange-600 px-5",
                    "text-sm font-semibold text-white hover:bg-orange-700",
                    "focus:outline-none focus:ring-0",
                  ].join(" ")}
                >
                  {t("solutionsPage.hero.ctaEmail")}
                </button>
              </div>
            </form>

            <Button href="/pricing" variant="secondary" className="h-14 sm:h-auto">
              {t("solutionsPage.hero.ctaPricing")}
            </Button>
          </div>

          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-500">
            {t("solutionsPage.hero.disclaimer")}
          </p>
        </Container>
      </section>

      {/* PRODUCTS + WORKFLOWS (matches screenshot layout) */}
      <section className="border-t border-slate-200 bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("solutionsPage.map.productsTitle")}
              </div>

              <div className="mt-4 space-y-3">
                {PRODUCTS.map(({ key, href, Icon }) => (
                  <Link
                    key={key}
                    href={href}
                    className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                      <Icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-hover:underline">
                        {t(`solutionsPage.map.products.${key}.title`)}
                      </div>
                      <div className="mt-0.5 text-sm text-slate-600">
                        {t(`solutionsPage.map.products.${key}.desc`)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("solutionsPage.map.workflowsTitle")}
              </div>

              <div className="mt-4 space-y-3">
                {WORKFLOWS.map(({ key, href, Icon }) => (
                  <Link
                    key={key}
                    href={href}
                    className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                      <Icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-hover:underline">
                        {t(`solutionsPage.map.workflows.${key}.title`)}
                      </div>
                      <div className="mt-0.5 text-sm text-slate-600">
                        {t(`solutionsPage.map.workflows.${key}.desc`)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                    <ShieldCheck className="h-5 w-5 text-slate-900" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">
                      {t("solutionsPage.map.governanceCard.title")}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-600">
                      {t("solutionsPage.map.governanceCard.desc")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OPERATING MODEL (deep system framing) */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("solutionsPage.operatingModel.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("solutionsPage.operatingModel.subtitle")}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <ChipLink href="/products/cashflow" label={t("solutionsPage.operatingModel.chips.cashflow")} />
                <ChipLink href="/products/spend-settlements" label={t("solutionsPage.operatingModel.chips.spend")} />
                <ChipLink href="/products/banking-payments" label={t("solutionsPage.operatingModel.chips.banking")} />
                <ChipLink href="/products/ledger" label={t("solutionsPage.operatingModel.chips.ledger")} />
                <ChipLink href="/products/projects" label={t("solutionsPage.operatingModel.chips.projects")} />
                <ChipLink href="/products/departments" label={t("solutionsPage.operatingModel.chips.departments")} />
              </div>
            </div>

            <div className="space-y-4">
              {OPERATING_MODEL_KEYS.map((k, idx) => (
                <div key={k} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">
                      {t(`solutionsPage.operatingModel.steps.${k}.title`)}
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      {t("solutionsPage.operatingModel.stepPrefix")} {idx + 1}
                    </div>
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">
                    {t(`solutionsPage.operatingModel.steps.${k}.desc`)}
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {t("solutionsPage.operatingModel.outputsTitle")}
                      </div>
                      <div className="mt-2 text-sm text-slate-700">
                        {t(`solutionsPage.operatingModel.steps.${k}.outputs`)}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {t("solutionsPage.operatingModel.controlsTitle")}
                      </div>
                      <div className="mt-2 text-sm text-slate-700">
                        {t(`solutionsPage.operatingModel.steps.${k}.controls`)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("solutionsPage.teams.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("solutionsPage.teams.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {TEAM_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="text-sm font-semibold text-slate-900">
                  {t(`solutionsPage.teams.items.${k}.title`)}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`solutionsPage.teams.items.${k}.desc`)}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    {t(`solutionsPage.teams.items.${k}.point1`)}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    {t(`solutionsPage.teams.items.${k}.point2`)}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    {t(`solutionsPage.teams.items.${k}.point3`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SOLUTIONS (deep detail) */}
      <section className="border-t border-slate-200 bg-white py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("solutionsPage.solutions.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("solutionsPage.solutions.subtitle")}</p>
          </div>

          <div className="mt-10 space-y-6">
            {SOLUTION_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-8">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {t("solutionsPage.solutions.sectionLabel")}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                      {t(`solutionsPage.solutions.items.${k}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {t(`solutionsPage.solutions.items.${k}.desc`)}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <ChipLink href={t(`solutionsPage.solutions.items.${k}.chip1Href`)} label={t(`solutionsPage.solutions.items.${k}.chip1`)} />
                      <ChipLink href={t(`solutionsPage.solutions.items.${k}.chip2Href`)} label={t(`solutionsPage.solutions.items.${k}.chip2`)} />
                      <ChipLink href={t(`solutionsPage.solutions.items.${k}.chip3Href`)} label={t(`solutionsPage.solutions.items.${k}.chip3`)} />
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        <div className="flex items-center gap-2">
                          <Banknote className="h-4 w-4 text-slate-900" />
                          <div className="text-sm font-semibold text-slate-900">
                            {t("solutionsPage.solutions.whatYouGetTitle")}
                          </div>
                        </div>

                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                          {SOLUTION_BULLETS.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                              <span>{t(`solutionsPage.solutions.items.${k}.bullets.${b}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-slate-900" />
                          <div className="text-sm font-semibold text-slate-900">
                            {t("solutionsPage.solutions.kpisTitle")}
                          </div>
                        </div>

                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                          {SOLUTION_KPIS.map((kk) => (
                            <li key={kk} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                              <span>{t(`solutionsPage.solutions.items.${k}.kpis.${kk}`)}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {t("solutionsPage.solutions.controlTitle")}
                          </div>
                          <div className="mt-2">
                            {t(`solutionsPage.solutions.items.${k}.controlNote`)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WORKFLOWS DETAILS (anchors for the right column) */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("solutionsPage.workflowsDeep.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("solutionsPage.workflowsDeep.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div id="workflow-reconciliation" className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-slate-900" />
                <div className="text-sm font-semibold text-slate-900">
                  {t("solutionsPage.workflowsDeep.items.reconciliation.title")}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t("solutionsPage.workflowsDeep.items.reconciliation.desc")}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.reconciliation.point1")}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.reconciliation.point2")}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.reconciliation.point3")}
                </div>
              </div>
            </div>

            <div id="workflow-accounting-automation" className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-slate-900" />
                <div className="text-sm font-semibold text-slate-900">
                  {t("solutionsPage.workflowsDeep.items.accountingAutomation.title")}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t("solutionsPage.workflowsDeep.items.accountingAutomation.desc")}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.accountingAutomation.point1")}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.accountingAutomation.point2")}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.accountingAutomation.point3")}
                </div>
              </div>
            </div>

            <div id="workflow-reporting-kpis" className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-slate-900" />
                <div className="text-sm font-semibold text-slate-900">
                  {t("solutionsPage.workflowsDeep.items.reportingKpis.title")}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t("solutionsPage.workflowsDeep.items.reportingKpis.desc")}
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.reportingKpis.point1")}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.reportingKpis.point2")}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  {t("solutionsPage.workflowsDeep.items.reportingKpis.point3")}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ROLLOUT */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("solutionsPage.rollout.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("solutionsPage.rollout.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {ROLLOUT_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="text-sm font-semibold text-slate-900">
                  {t(`solutionsPage.rollout.steps.${k}.title`)}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`solutionsPage.rollout.steps.${k}.desc`)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Button href="/pricing" variant="primary">
              {t("solutionsPage.rollout.ctaPrimary")}
            </Button>
            <Button href={DASHBOARD_URLS.signup} variant="secondary">
              {t("solutionsPage.rollout.ctaSecondary")}
            </Button>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center sm:px-12 sm:py-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("solutionsPage.bottom.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("solutionsPage.bottom.subtitle")}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/pricing" variant="primary">
                {t("solutionsPage.bottom.ctaPricing")}
              </Button>
              <Link
                href={DASHBOARD_URLS.signup}
                className="text-sm font-semibold text-orange-700 hover:text-orange-800"
              >
                {t("solutionsPage.bottom.ctaSignup")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
