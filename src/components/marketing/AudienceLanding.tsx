import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/marketing/FAQ";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import type { AudiencePageContent, AudiencePageKind } from "@/content/audience-pages";

export function AudienceLanding({
  content,
  kind,
  primaryHref,
  pricingHref,
  otherHref,
}: {
  content: AudiencePageContent;
  kind: AudiencePageKind;
  primaryHref: string;
  pricingHref: string;
  otherHref: string;
}) {
  const {
    eyebrow,
    title,
    description,
    primaryLabel,
    proof,
    plans,
    outcomes,
    workflow,
    faq,
    otherLabel,
    labels,
  } = content;

  return (
    <main className="bg-white">
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-(--brand-strong)">{eyebrow}</p>
            <h1 className="text-balance mt-4 text-4xl font-semibold tracking-[-0.03em] text-(--ink) sm:text-5xl">
              {title}
            </h1>
            <p className="text-pretty mt-5 max-w-2xl text-lg leading-7 text-(--muted)">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg" dataCta={`audience-${kind}-start`}>
                {primaryLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href={pricingHref} variant="secondary" size="lg">
                {labels.comparePlans}
              </Button>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-(--muted)">
              <Check size={14} className="text-(--success)" aria-hidden="true" />
              {proof}
            </p>
            <p className="mt-2 text-xs text-(--muted)">{plans.join(" · ")}</p>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <Section tone="canvas">
        <Container>
          <SectionHeading
            eyebrow={labels.outcomesEyebrow}
            title={labels.outcomesTitle}
            description={labels.outcomesDescription}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="rounded-2xl border border-(--line) bg-white p-6">
                <h3 className="text-[15px] font-semibold text-(--ink)">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">{outcome.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeading eyebrow={labels.howEyebrow} title={labels.howTitle} />
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {workflow.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-(--line) bg-white p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--ink) text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-[15px] font-semibold text-(--ink)">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <SectionHeading eyebrow={labels.questionsEyebrow} title={labels.questionsTitle} />
            <FAQ items={faq} />
          </div>
        </Container>
      </Section>

      <Section tone="white" className="pb-20">
        <Container>
          <div className="rounded-3xl bg-(--ink) px-6 py-12 text-center sm:px-12">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white">
              {labels.finalTitle}
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg" dataCta={`audience-${kind}-bottom`}>
                {primaryLabel}
              </Button>
              <Link href={otherHref} className="inline-flex items-center gap-1 text-sm font-semibold text-white/75 hover:text-white">
                {otherLabel} <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
