import Container from "@/components/ui/Container";
import { PRODUCTS_MENU } from "@/content/products";
import { Icon } from "@/components/ui/Icon";
import { getServerI18n } from "@/i18n/server";

function toSectionId(key: string) {
  return key.replaceAll("_", "-");
}

export default async function Modules() {
  const { t } = await getServerI18n();

  const products = PRODUCTS_MENU.find((g) => g.groupKey === "products")?.items ?? [];

  return (
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
                <a className="hover:underline" href={p.href}>
                  {t("common.learnMore")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
