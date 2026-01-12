import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DASHBOARD_URLS } from "@/content/navigation";
import { getServerI18n } from "@/i18n/server";

const EMAIL_PARAM = "email";

const HERO_BULLET_KEYS = ["b1", "b2", "b3", "b4"] as const;

const OUTCOME_KEYS = ["control", "speed", "visibility", "compliance"] as const;
const STEP_KEYS = ["connect", "operate", "reconcile"] as const;

// Variation sections
const CAPABILITY_KEYS = ["approvals", "batching", "accounts", "audit", "limits", "exceptions"] as const;
const CONTROL_CHIP_KEYS = ["rbac", "approvals", "auditTrail", "makerChecker", "templates", "exports"] as const;
const GOVERNANCE_CHECK_KEYS = ["ownership", "policies", "evidence", "segregation"] as const;

const KPI_KEYS = ["approvalTime", "paymentSuccess", "reworkRate", "closeLag"] as const;

export default async function BankingPaymentsProductPage() {
  const { t } = await getServerI18n();

  return (
    <main className="bg-white">
      {/* Hero (keep as is / same logic) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/banking-hero.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right hero-start:max-hero-sharp:blur-md"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/35 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/35" />
        </div>

        <div className="relative z-10">
          <Container className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                {t("bankingPaymentsPage.hero.badge")}
              </div>

              <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {t("bankingPaymentsPage.hero.title")}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {t("bankingPaymentsPage.hero.subtitle")}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {HERO_BULLET_KEYS.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 hidden nav:block"
                  >
                    {t(`bankingPaymentsPage.hero.bullets.${k}`)}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <form action={DASHBOARD_URLS.signup} method="GET" className="w-full sm:max-w-md">
                  <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <input
                      type="email"
                      name={EMAIL_PARAM}
                      required
                      inputMode="email"
                      autoComplete="email"
                      placeholder={t("bankingPaymentsPage.hero.emailPlaceholder")}
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
                      {t("bankingPaymentsPage.hero.ctaEmail")}
                    </button>
                  </div>
                </form>

                <Button href="/pricing" variant="secondary" className="h-14 sm:h-auto">
                  {t("bankingPaymentsPage.hero.ctaPricing")}
                </Button>
              </div>

              <p className="mt-6 max-w-2xl text-xs leading-relaxed text-slate-500">
                {t("bankingPaymentsPage.hero.disclaimer")}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Variation 1: Outcomes (2-column + snapshot) */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("bankingPaymentsPage.outcomes.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("bankingPaymentsPage.outcomes.subtitle")}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {OUTCOME_KEYS.map((k) => (
                  <div key={k} className="rounded-3xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-semibold text-slate-900">
                      {t(`bankingPaymentsPage.outcomes.items.${k}.title`)}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t(`bankingPaymentsPage.outcomes.items.${k}.desc`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t("bankingPaymentsPage.snapshot.eyebrow")}
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  {t("bankingPaymentsPage.snapshot.title")}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("bankingPaymentsPage.snapshot.subtitle")}
                </p>

                <div className="mt-5 space-y-3">
                  <SnapshotRow label={t("bankingPaymentsPage.snapshot.rows.pending")} value={t("bankingPaymentsPage.snapshot.values.pending")} />
                  <SnapshotRow label={t("bankingPaymentsPage.snapshot.rows.approved")} value={t("bankingPaymentsPage.snapshot.values.approved")} />
                  <SnapshotRow label={t("bankingPaymentsPage.snapshot.rows.executed")} value={t("bankingPaymentsPage.snapshot.values.executed")} />
                  <SnapshotRow label={t("bankingPaymentsPage.snapshot.rows.exceptions")} value={t("bankingPaymentsPage.snapshot.values.exceptions")} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button href="/pricing" variant="primary">
                    {t("bankingPaymentsPage.snapshot.ctaPrimary")}
                  </Button>
                  <Button href="/products/cashflow" variant="secondary">
                    {t("bankingPaymentsPage.snapshot.ctaSecondary")}
                  </Button>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  {t("bankingPaymentsPage.snapshot.note")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Variation 2: How it works (timeline + sticky image) */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("bankingPaymentsPage.howItWorks.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("bankingPaymentsPage.howItWorks.subtitle")}</p>

              <ol className="mt-8 space-y-4">
                {STEP_KEYS.map((k, idx) => (
                  <li key={k} className="relative rounded-3xl border border-slate-200 bg-white p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900">
                          {t(`bankingPaymentsPage.howItWorks.steps.${k}.title`)}
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-600">
                          {t(`bankingPaymentsPage.howItWorks.steps.${k}.desc`)}
                        </div>
                        <div className="mt-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                          {t(`bankingPaymentsPage.howItWorks.steps.${k}.tag`)}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-2">
                <Button href="/pricing" variant="primary">
                  {t("bankingPaymentsPage.howItWorks.ctaPrimary")}
                </Button>
                <Button href={DASHBOARD_URLS.signup} variant="secondary">
                  {t("bankingPaymentsPage.howItWorks.ctaSecondary")}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/products/banking-payments/banking-ui.png"
                      alt={t("bankingPaymentsPage.howItWorks.imageAlt")}
                      fill
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="text-sm font-semibold text-slate-900">
                    {t("bankingPaymentsPage.sideCard.title")}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {t("bankingPaymentsPage.sideCard.desc")}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/pricing"
                      className="text-sm font-semibold text-slate-900 hover:underline"
                    >
                      {t("bankingPaymentsPage.sideCard.linkPrimary")}
                    </Link>
                    <span className="text-slate-300">•</span>
                    <Link
                      href={DASHBOARD_URLS.signup}
                      className="text-sm font-semibold text-orange-700 hover:text-orange-800"
                    >
                      {t("bankingPaymentsPage.sideCard.linkSecondary")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Variation 3: Capabilities (highlight + grid) */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("bankingPaymentsPage.capabilities.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("bankingPaymentsPage.capabilities.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {/* Highlight card */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-7">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("bankingPaymentsPage.capabilities.highlight.eyebrow")}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                {t("bankingPaymentsPage.capabilities.highlight.title")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {t("bankingPaymentsPage.capabilities.highlight.desc")}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MiniPoint text={t("bankingPaymentsPage.capabilities.highlight.points.p1")} />
                <MiniPoint text={t("bankingPaymentsPage.capabilities.highlight.points.p2")} />
                <MiniPoint text={t("bankingPaymentsPage.capabilities.highlight.points.p3")} />
                <MiniPoint text={t("bankingPaymentsPage.capabilities.highlight.points.p4")} />
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Button href="/pricing" variant="primary">
                  {t("bankingPaymentsPage.capabilities.highlight.cta")}
                </Button>
                <Button href="/products/cashflow" variant="secondary">
                  {t("bankingPaymentsPage.capabilities.highlight.ctaSecondary")}
                </Button>
              </div>
            </div>

            {/* Smaller cards */}
            <div className="lg:col-span-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {CAPABILITY_KEYS.map((k) => (
                  <div key={k} className="rounded-3xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-semibold text-slate-900">
                      {t(`bankingPaymentsPage.capabilities.items.${k}.title`)}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t(`bankingPaymentsPage.capabilities.items.${k}.desc`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Variation 4: Controls (chips + governance checklist) */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("bankingPaymentsPage.controls.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("bankingPaymentsPage.controls.subtitle")}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {CONTROL_CHIP_KEYS.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t(`bankingPaymentsPage.controls.chips.${k}`)}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">
                  {t("bankingPaymentsPage.controls.noteTitle")}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("bankingPaymentsPage.controls.noteDesc")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t("bankingPaymentsPage.governance.eyebrow")}
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  {t("bankingPaymentsPage.governance.title")}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("bankingPaymentsPage.governance.subtitle")}
                </p>

                <ul className="mt-5 space-y-3">
                  {GOVERNANCE_CHECK_KEYS.map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="mt-1 h-4 w-4 shrink-0 rounded-sm border border-slate-300 bg-slate-50" />
                      <span className="text-sm leading-relaxed text-slate-700">
                        {t(`bankingPaymentsPage.governance.checks.${k}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  <Button href={DASHBOARD_URLS.signup} variant="primary">
                    {t("bankingPaymentsPage.governance.ctaPrimary")}
                  </Button>
                  <Link
                    href="/pricing"
                    className="inline-flex h-11 items-center rounded-xl px-4 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    {t("bankingPaymentsPage.governance.ctaSecondary")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Variation 5: KPIs (table-like layout) */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("bankingPaymentsPage.kpis.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("bankingPaymentsPage.kpis.subtitle")}</p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-1 divide-y divide-slate-200">
                {KPI_KEYS.map((k) => (
                  <div key={k} className="grid gap-2 p-5 sm:grid-cols-12 sm:items-center">
                    <div className="sm:col-span-4">
                      <div className="text-sm font-semibold text-slate-900">
                        {t(`bankingPaymentsPage.kpis.items.${k}.title`)}
                      </div>
                    </div>
                    <div className="sm:col-span-8">
                      <div className="text-sm leading-relaxed text-slate-600">
                        {t(`bankingPaymentsPage.kpis.items.${k}.desc`)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-600">{t("bankingPaymentsPage.kpis.footerNote")}</div>
              <div className="flex flex-wrap gap-2">
                <Button href="/pricing" variant="primary">
                  {t("bankingPaymentsPage.kpis.ctaPrimary")}
                </Button>
                <Button href="/products/cashflow" variant="secondary">
                  {t("bankingPaymentsPage.kpis.ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA (split layout) */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("bankingPaymentsPage.bottom.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                {t("bankingPaymentsPage.bottom.subtitle")}
              </p>
              <p className="mt-4 text-sm text-slate-500">
                {t("bankingPaymentsPage.bottom.trustLine")}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/pricing" variant="primary" className="w-full">
                  {t("bankingPaymentsPage.bottom.ctaPricing")}
                </Button>
                <Button href={DASHBOARD_URLS.signup} variant="secondary" className="w-full">
                  {t("bankingPaymentsPage.bottom.ctaSignup")}
                </Button>

                <div className="pt-2 text-center text-xs text-slate-500 lg:text-left">
                  {t("bankingPaymentsPage.bottom.smallPrint")}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function SnapshotRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function MiniPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
      <span className="text-sm leading-relaxed text-slate-700">{text}</span>
    </div>
  );
}
