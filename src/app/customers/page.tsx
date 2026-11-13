import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getServerI18n } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo/metadata";

const STORY_KEYS = ["limits", "spend", "budget", "ap"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();
  return pageMetadata({
    title: t("customersPage.hero.title"),
    description: t("customersPage.hero.subtitle"),
    path: "/customers",
  });
}

export default async function CustomersPage() {
  const { t } = await getServerI18n();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-(--canvas) py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-(--ink) sm:text-6xl">
              {t("customersPage.hero.title")}
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--muted)">
              {t("customersPage.hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/signup?intent=signup&plan=free"
                size="lg"
                dataCta="customers-start-free"
              >
                {t("productPages.startFree")}
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                {t("productPages.seePricing")}
              </Button>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-(--muted)">
              {t("customersPage.hero.disclaimer")}
            </p>
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-(--ink) sm:text-4xl">
              {t("customersPage.stories.title")}
            </h2>
            <p className="mt-4 text-base leading-7 text-(--muted)">
              {t("customersPage.stories.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {STORY_KEYS.map((key, index) => (
              <Card key={key} className="p-6">
                <span className="text-[11px] font-semibold tabular-nums text-(--brand-strong)">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold text-(--ink)">
                  {t(`customersPage.stories.cards.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">
                  {t(`customersPage.stories.cards.${key}.desc`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="bg-(--canvas) py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-(--ink) sm:text-4xl">
                {t("customersPage.already.title")}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-(--muted)">
                {t("customersPage.already.subtitle")}
              </p>
              <Link
                href="/customers/learn-more"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-(--ink) underline-offset-4 hover:underline"
              >
                {t("customersPage.already.learnMore")}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <Card className="bg-white p-6 sm:p-7">
              <ul className="space-y-3">
                {(["productDesign", "localGroups", "advocate"] as const).map((key) => (
                  <li key={key} className="text-sm leading-6 text-(--muted)">
                    <span className="font-semibold text-(--ink)">
                      {t(`customersLearnMore.bullets.${key}.title`)}
                    </span>{" "}
                    {t(`customersLearnMore.bullets.${key}.desc`)}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-(--ink) px-6 py-12 text-center sm:px-12">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white">
              {t("customersPage.bottom.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65">
              {t("customersPage.bottom.subtitle")}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/signup?intent=signup&plan=free"
                size="lg"
                dataCta="customers-final-start"
              >
                {t("productPages.startFree")}
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                {t("productPages.seePricing")}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
