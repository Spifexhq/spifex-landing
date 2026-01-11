import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DASHBOARD_URLS } from "@/content/navigation";
import { getServerI18n } from "@/i18n/server";

export default async function CTA() {
  const { t } = await getServerI18n();

  return (
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
  );
}
