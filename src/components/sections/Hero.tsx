import Image from "next/image";
import Container from "@/components/ui/Container";
import { DASHBOARD_URLS } from "@/content/navigation";
import { getServerI18n } from "@/i18n/server";

const EMAIL_PARAM = "email";
const NAV_H = "4rem"; // h-16

export default async function Hero() {
  const { t } = await getServerI18n();

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: `calc(100svh - ${NAV_H})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero-ops.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/40" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{
          minHeight: `calc(100svh - ${NAV_H})`,
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
      >
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl mt-20 font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
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
  );
}
