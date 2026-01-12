import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DASHBOARD_URLS } from "@/content/navigation";
import { getServerI18n } from "@/i18n/server";

const EMAIL_PARAM = "email";

const HERO_BULLET_KEYS = ["b1", "b2", "b3", "b4"] as const;

const OUTCOME_KEYS = ["forecast", "execution", "reconciliation", "governance"] as const;
const FEATURE_KEYS = ["planning", "settlements", "allocations", "reporting"] as const;
const STEP_KEYS = ["plan", "execute", "reconcile"] as const;
const KPI_KEYS = ["accuracy", "unplanned", "approvalTime", "closeLag"] as const;

export default async function CashflowProductPage() {
  const { t } = await getServerI18n();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/cashflow-hero.png"
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
                {t("cashflowPage.hero.badge")}
              </div>

              <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {t("cashflowPage.hero.title")}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {t("cashflowPage.hero.subtitle")}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {HERO_BULLET_KEYS.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 hidden nav:block"
                  >
                    {t(`cashflowPage.hero.bullets.${k}`)}
                  </span>
                ))}
              </div>

              {/* Email capture + Pricing CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <form action={DASHBOARD_URLS.signup} method="GET" className="w-full sm:max-w-md">
                  <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <input
                      type="email"
                      name={EMAIL_PARAM}
                      required
                      inputMode="email"
                      autoComplete="email"
                      placeholder={t("cashflowPage.hero.emailPlaceholder")}
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
                      {t("cashflowPage.hero.ctaEmail")}
                    </button>
                  </div>
                </form>

                <Button href="/pricing" variant="secondary" className="h-14 sm:h-auto">
                  {t("cashflowPage.hero.ctaPricing")}
                </Button>
              </div>

              <p className="mt-6 max-w-2xl text-xs leading-relaxed text-slate-500">
                {t("cashflowPage.hero.disclaimer")}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("cashflowPage.outcomes.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("cashflowPage.outcomes.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {OUTCOME_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">
                  {t(`cashflowPage.outcomes.items.${k}.title`)}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`cashflowPage.outcomes.items.${k}.desc`)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works + Image */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("cashflowPage.howItWorks.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("cashflowPage.howItWorks.subtitle")}</p>

              <div className="mt-8 space-y-4">
                {STEP_KEYS.map((k) => (
                  <div key={k} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">
                      {t(`cashflowPage.howItWorks.steps.${k}.title`)}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t(`cashflowPage.howItWorks.steps.${k}.desc`)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Button href="/pricing" variant="primary">
                  {t("cashflowPage.howItWorks.ctaPrimary")}
                </Button>
                <Button href={DASHBOARD_URLS.signup} variant="secondary">
                  {t("cashflowPage.howItWorks.ctaSecondary")}
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4">
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/products/cashflow/cashflow-ui.png"
                  alt={t("cashflowPage.howItWorks.imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 px-2 text-xs text-slate-500">{t("cashflowPage.howItWorks.imageCaption")}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("cashflowPage.features.title")}
            </h2>
            <p className="mt-3 text-slate-600">{t("cashflowPage.features.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {FEATURE_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-7">
                <div className="text-xl font-semibold tracking-tight text-slate-900">
                  {t(`cashflowPage.features.items.${k}.title`)}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t(`cashflowPage.features.items.${k}.desc`)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* KPIs */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t("cashflowPage.kpis.title")}
              </h2>
              <p className="mt-3 text-slate-600">{t("cashflowPage.kpis.subtitle")}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {KPI_KEYS.map((k) => (
                <div key={k} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">
                    {t(`cashflowPage.kpis.items.${k}.title`)}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">
                    {t(`cashflowPage.kpis.items.${k}.desc`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 py-14 sm:py-18">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center sm:px-12 sm:py-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("cashflowPage.bottom.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("cashflowPage.bottom.subtitle")}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/pricing" variant="primary">
                {t("cashflowPage.bottom.ctaPricing")}
              </Button>

              <Link href={DASHBOARD_URLS.signup} className="text-sm font-semibold text-orange-700 hover:text-orange-800">
                {t("cashflowPage.bottom.ctaSignup")}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
