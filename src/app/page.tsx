import Image from "next/image";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

import { DASHBOARD_URLS } from "@/content/navigation";
import { PRODUCTS_MENU } from "@/content/products";
import { getServerI18n } from "@/i18n/server";

const EMAIL_PARAM = "email";
const FEATURE_KEYS = ["moneyLifecycle", "complexity", "governance", "kpiExecution"] as const;
const CHIP_KEYS = ["multiStreamRevenue", "vendorHeavyOps", "projectCostAttribution"] as const;

function toSectionId(key: string) {
  return key.replaceAll("_", "-");
}

export default async function HomePage() {
  const { t } = await getServerI18n();

  const products = PRODUCTS_MENU.find((g) => g.groupKey === "products")?.items ?? [];

  return (
    <main className="bg-white">
      {/* Hero (same formatting as CashflowProductPage hero) */}
{/* Hero */}
<section className="relative overflow-hidden nav:min-h-[calc(100svh-4rem)]">
  {/* Background layer */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/hero/home-hero.png"
      alt=""
      aria-hidden="true"
      fill
      priority
      sizes="100vw"
      className="object-cover object-right hero-start:max-hero-sharp:blur-md"
    />
    <div className="absolute inset-0 bg-linear-to-r from-white via-white/30 to-transparent" />
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/40" />
  </div>

  {/* Content */}
  <div className="relative z-10 nav:min-h-[calc(100svh-4rem)] nav:flex nav:items-center">
    <Container className="py-16 sm:py-20 nav:py-0">
      <div className="max-w-3xl">
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {t("home.hero.title")}
        </h1>
      </div>

      <div className="mt-6 max-w-md">
        <p className="text-lg leading-relaxed text-slate-600">
          {t("home.hero.subtitle")}
        </p>

        <form action={DASHBOARD_URLS.signup} method="GET" className="mt-10">
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
            <input
              type="email"
              name={EMAIL_PARAM}
              required
              inputMode="email"
              autoComplete="email"
              placeholder={t("home.hero.emailPlaceholder")}
              className="h-14 w-full rounded-2xl bg-transparent px-5 pr-36 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 h-10 -translate-y-1/2 rounded-xl bg-orange-600 px-5 text-sm font-semibold text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              {t("home.hero.ctaPrimary")}
            </button>
          </div>
        </form>

        <p className="mt-10 text-xs leading-relaxed text-slate-500">
          {t("home.hero.disclaimer")}
        </p>
      </div>
    </Container>
  </div>
</section>


      {/* Feature Grid */}
      <section id="solutions" className="py-14 sm:py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {t("home.features.title")}
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                {t("home.features.subtitle")}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FEATURE_KEYS.map((k) => (
              <div key={k} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">
                  {t(`home.features.items.${k}.title`)}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`home.features.items.${k}.desc`)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Customers */}
      <section id="customers" className="bg-gray-100 py-14 sm:py-16">
        <Container>
          <div className="rounded-3xl border border-gray-300 bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {t("home.customers.title")}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              {t("home.customers.subtitle")}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {CHIP_KEYS.map((k) => (
                <div
                  key={k}
                  className="rounded-2xl border border-slate-200 bg-gray-100 px-4 py-4 text-sm font-semibold text-slate-900"
                >
                  {t(`home.customers.chips.${k}`)}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Modules */}
      <section id="platform" className="py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {t("home.modules.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            {t("home.modules.subtitle")}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.key}
                id={toSectionId(p.key)}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                    <Icon name={p.icon} className="h-5 w-5 text-slate-900" />
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {t(`products.items.${p.key}.title`)}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t(`products.items.${p.key}.desc`)}
                </p>

                <div className="mt-4 text-sm font-semibold text-slate-900">
                  {/* Keep <a> in case some items are external */}
                  <a className="hover:underline" href={p.href}>
                    {t("common.learnMore")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-10 sm:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {t("home.cta.title")}
                </h3>
                <p className="mt-2 text-slate-200">
                  {t("home.cta.subtitle")}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button href={DASHBOARD_URLS.signup} variant="secondary">
                  {t("home.cta.primary")}
                </Button>
                <Button
                  href="/pricing"
                  variant="ghost"
                  className="border border-white/15 text-white hover:bg-white/10"
                >
                  {t("home.cta.secondary")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
