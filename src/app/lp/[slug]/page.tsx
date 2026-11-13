import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { CAMPAIGNS, getCampaign } from "@/content/campaigns";
import { pageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CAMPAIGNS.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) {
    return pageMetadata({ title: "Campaign", description: "", path: `/lp/${slug}`, noIndex: true });
  }
  return pageMetadata({
    title: campaign.title,
    description: campaign.description,
    path: `/lp/${campaign.slug}`,
    noIndex: true,
  });
}

export default async function CampaignPage({ params }: Props) {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) notFound();

  const signupHref =
    campaign.plan === "free"
      ? "/signup?intent=signup&plan=free"
      : `/signup?intent=subscribe&plan=${campaign.plan}`;

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#fbfaf7]">
        <div className="pointer-events-none absolute inset-0 brand-gradient" aria-hidden="true" />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-(--brand-strong)">
              {campaign.eyebrow}
            </p>
            <h1 className="text-balance mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-(--ink) sm:text-6xl">
              {campaign.title}
            </h1>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
              {campaign.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg" dataCta={`campaign-${campaign.slug}`}>
                {campaign.primaryLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href={campaign.secondaryHref} variant="secondary" size="lg">
                {campaign.secondaryLabel}
              </Button>
            </div>
            <p className="mt-4 text-xs font-medium text-(--muted)">{campaign.proof}</p>
          </div>

          <ul className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {campaign.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 rounded-xl border border-(--line) bg-white p-4 text-sm leading-6 text-(--ink-soft)">
                <Check size={15} className="mt-1 shrink-0 text-(--brand)" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <TrustStrip />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl border border-(--line) bg-white p-8 text-center sm:p-12">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-(--ink)">
              Start with the Free plan. Add structure when you need it.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-(--muted)">
              No card required to start. Paid plans are available when your operation needs more workspace capacity.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg" dataCta={`campaign-${campaign.slug}-bottom`}>
                {campaign.primaryLabel}
              </Button>
              <Link href="/pricing" className="text-sm font-semibold text-(--ink) underline underline-offset-4">
                Compare plans
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
