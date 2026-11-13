import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, LayoutDashboard } from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo/metadata";
import { getServerI18n } from "@/i18n/server";

export const metadata: Metadata = pageMetadata({
  title: "Account created",
  description: "Your Spifex workspace is ready.",
  path: "/signup/success",
  noIndex: true,
});

export default async function SignupSuccessPage() {
  const { t } = await getServerI18n();
  const nextItems = ["workspace", "banks", "categories", "ai"] as const;

  return (
    <main className="bg-(--canvas) py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-(--line) bg-white p-8 shadow-card sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf7ef] text-(--success)">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-(--ink)">{t("signupSuccess.title")}</h1>
          <p className="mt-3 text-sm leading-6 text-(--muted)">{t("signupSuccess.subtitle")}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://dashboard.spifex.com/overview" size="lg">
              <LayoutDashboard size={16} aria-hidden="true" />
              {t("signupSuccess.dashboard")}
            </Button>
            <Button href="/docs/workspace-setup" variant="secondary" size="lg">
              {t("signupSuccess.docs")}
            </Button>
          </div>

          <section className="mt-10 border-t border-(--line) pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-(--muted)">
              {t("signupSuccess.nextTitle")}
            </h2>
            <ul className="mt-4 space-y-3">
              {nextItems.map((key) => (
                <li key={key} className="flex items-start gap-2.5 text-sm leading-6 text-(--ink-soft)">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand)" aria-hidden="true" />
                  {t(`signupSuccess.nextItems.${key}`)}
                </li>
              ))}
            </ul>
            <Link href="/docs" className="mt-5 inline-flex text-sm font-semibold text-(--ink) underline underline-offset-4">
              {t("docsPage.title")}
            </Link>
          </section>
        </div>
      </Container>
    </main>
  );
}
