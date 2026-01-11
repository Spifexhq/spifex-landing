import Container from "@/components/ui/Container";
import { getServerI18n } from "@/i18n/server";

const CHIP_KEYS = ["multiStreamRevenue", "vendorHeavyOps", "projectCostAttribution"] as const;

export default async function Customers() {
  const { t } = await getServerI18n();

  return (
    <section id="customers" className="py-14 sm:py-16">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
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
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900"
              >
                {t(`home.customers.chips.${k}`)}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
