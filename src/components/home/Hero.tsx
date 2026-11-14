import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getServerI18n } from "@/i18n/server";

import HeroVisual from "./HeroVisual";

export default async function Hero() {
  const { t } = await getServerI18n();

  return (
    <section className="relative px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4 lg:pt-4">
      <div className="relative overflow-hidden rounded-3xl bg-[#0c0c0c] sm:rounded-4xl">
        <div className="hero-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

        <Container className="relative">
          <div className="pt-8 sm:pt-12 lg:pt-14">
            <div className="flex items-center justify-between gap-4">
              <p
                className="hero-reveal flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-[11px]"
                style={{ animationDelay: "0.05s" }}
              >
                <span className="hero-live-dot h-1.5 w-1.5 rounded-full bg-(--brand)" />
                {t("homeV2.hero.eyebrow")}
              </p>

              <div
                className="hero-reveal hidden items-center gap-4 text-[11px] font-medium text-white/55 lg:flex"
                style={{ animationDelay: "0.14s" }}
              >
                <Link
                  href="/personal"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  {t("nav.personal")}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <span className="h-3 w-px bg-white/15" aria-hidden="true" />
                <Link
                  href="/business"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  {t("nav.business")}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.02fr_.98fr] lg:items-end lg:gap-14">
              <h1
                aria-label={`${t("homeV2.hero.title")}.`}
                className="w-fit text-[clamp(3.25rem,10vw,6.3rem)] font-medium leading-[0.94] tracking-[-0.055em] text-white"
              >
                <span className="block overflow-hidden pb-[0.06em]">
                  <span className="hero-line block" style={{ animationDelay: "0.18s" }}>
                    {t("homeV2.hero.line1")}
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span className="hero-line block" style={{ animationDelay: "0.28s" }}>
                    {t("homeV2.hero.line2")}<span className="text-(--brand)">.</span>
                  </span>
                </span>
              </h1>

              <div
                className="hero-reveal max-w-115 lg:justify-self-end lg:pb-3"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-pretty text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  {t("homeV2.hero.subtitle")}
                </p>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <Button
                    href="/signup?intent=signup&plan=free"
                    size="lg"
                    className="w-full bg-(--brand) text-(--ink) shadow-[0_18px_44px_-18px_rgba(0,0,0,.55)] hover:bg-[#ff7a45] active:bg-[#e85f2b] sm:w-auto"
                    dataCta="hero-start-free"
                  >
                    {t("homeV2.hero.primary")}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>
                  <Button
                    href="/solutions"
                    variant="ghost"
                    size="lg"
                    className="w-full border border-white/15 bg-white/4 text-white hover:bg-white/9 hover:text-white sm:w-auto"
                    dataCta="hero-explore"
                  >
                    {t("homeV2.hero.secondary")}
                  </Button>
                </div>

                <p className="mt-4 text-[11px] font-medium tracking-[0.01em] text-white/50">
                  {t("homeV2.hero.disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="relative mt-8 sm:mt-9 lg:mt-4">
          <HeroVisual label={t("homeV2.hero.visualAlt")} />
        </div>
      </div>
    </section>
  );
}
