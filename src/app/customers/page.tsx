import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { DASHBOARD_URLS } from "@/content/navigation";
import { getServerI18n } from "@/i18n/server";

const EMAIL_PARAM = "email";

const STORY_KEYS = ["limits", "spend", "budget", "ap"] as const;

export default async function CustomersPage() {
  const { t } = await getServerI18n();

  return (
    <main className="bg-slate-50">
      {/* 1) Email-first hero */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {t("customersPage.hero.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("customersPage.hero.subtitle")}
            </p>

            <form
              action={DASHBOARD_URLS.signup}
              method="GET"
              className="mx-auto mt-8 w-full max-w-xl"
            >
              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
                <input
                  type="email"
                  name={EMAIL_PARAM}
                  required
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t("customersPage.hero.emailPlaceholder")}
                  className={[
                    "h-14 w-full rounded-2xl bg-transparent px-5 pr-36 text-sm text-slate-900 outline-none",
                    "placeholder:text-slate-400",
                    // thinner focus feel: no ring, subtle border only
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
                  {t("customersPage.hero.cta")}
                </button>
              </div>
            </form>

            <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-slate-500">
              {t("customersPage.hero.disclaimer")}
            </p>
          </div>
        </Container>
      </section>

      {/* 2) Success stories grid */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              {t("customersPage.stories.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              {t("customersPage.stories.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STORY_KEYS.map((k) => (
              <div
                key={k}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                {/* Image block */}
                <div className="relative aspect-4/3 bg-slate-100">
                  <Image
                    src={t(`customersPage.stories.cards.${k}.imageSrc`)}
                    alt={t(`customersPage.stories.cards.${k}.imageAlt`)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-6">
                  <div className="text-xl font-semibold tracking-tight text-slate-900">
                    {t(`customersPage.stories.cards.${k}.title`)}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {t(`customersPage.stories.cards.${k}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3) Already a customer section */}
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {t("customersPage.already.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {t("customersPage.already.subtitle")}
              </p>

              <Link
                href="/customers/learn-more"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
              >
                {t("customersPage.already.learnMore")}
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Collage */}
            <div className="relative mx-auto h-90 w-full max-w-xl">
              <div className="absolute left-0 top-0 h-50 w-[72%] overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
                <Image
                  src={t("customersPage.already.images.a.src")}
                  alt={t("customersPage.already.images.a.alt")}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 top-10 h-65 w-[44%] overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
                <Image
                  src={t("customersPage.already.images.b.src")}
                  alt={t("customersPage.already.images.b.alt")}
                  fill
                  sizes="(min-width: 1024px) 320px, 60vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-[22%] h-47.5 w-[62%] overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
                <Image
                  src={t("customersPage.already.images.c.src")}
                  alt={t("customersPage.already.images.c.alt")}
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4) Bottom email CTA */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="py-8 text-center sm:py-12">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              {t("customersPage.bottom.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              {t("customersPage.bottom.subtitle")}
            </p>

            <form
              action={DASHBOARD_URLS.signup}
              method="GET"
              className="mx-auto mt-8 w-full max-w-xl"
            >
              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm">
                <input
                  type="email"
                  name={EMAIL_PARAM}
                  required
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t("customersPage.bottom.emailPlaceholder")}
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
                  {t("customersPage.bottom.cta")}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
