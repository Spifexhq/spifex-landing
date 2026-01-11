import Container from "@/components/ui/Container";
import { getServerI18n } from "@/i18n/server";
import CustomersLearnMoreForm from "@/components/customers/CustomersLearnMoreForm";

export default async function CustomersLearnMorePage() {
  const { t } = await getServerI18n();

  return (
    <main className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {t("customersLearnMore.title")}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t("customersLearnMore.intro")}
            </p>

            <ul className="mt-7 space-y-4 text-sm leading-relaxed text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
                <span>
                  <span className="font-semibold text-slate-900">
                    {t("customersLearnMore.bullets.productDesign.title")}
                  </span>
                  {" "}
                  {t("customersLearnMore.bullets.productDesign.desc")}
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
                <span>
                  <span className="font-semibold text-slate-900">
                    {t("customersLearnMore.bullets.localGroups.title")}
                  </span>
                  {" "}
                  {t("customersLearnMore.bullets.localGroups.desc")}
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
                <span>
                  <span className="font-semibold text-slate-900">
                    {t("customersLearnMore.bullets.advocate.title")}
                  </span>
                  {" "}
                  {t("customersLearnMore.bullets.advocate.desc")}
                </span>
              </li>
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-slate-600">
              {t("customersLearnMore.note")}
            </p>
          </div>

          {/* Right form */}
          <CustomersLearnMoreForm />
        </div>
      </Container>
    </main>
  );
}
