import Container from "@/components/ui/Container";
import { getServerI18n } from "@/i18n/server";

const FEATURE_KEYS = ["moneyLifecycle", "complexity", "governance", "kpiExecution"] as const;

export default async function FeatureGrid() {
  const { t } = await getServerI18n();

  return (
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
  );
}
