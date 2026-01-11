import Container from "@/components/ui/Container";
import { PRICING_TIERS } from "@/content/pricing";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function PricingPage() {
  return (
    <div className="py-14 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Pricing</h1>
          <p className="mt-3 text-slate-600">
            Choose a plan aligned to your operating complexity. Upgrade as governance, automation, and integrations
            become essential.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Note: This page is a marketing template. Final commercial terms should be reviewed with your team.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-3xl border bg-white p-6",
                tier.featured ? "border-slate-900" : "border-slate-200"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{tier.name}</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                    {tier.priceLabel}
                  </div>
                </div>
                {tier.featured && (
                  <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </div>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href={tier.ctaHref} variant={tier.featured ? "primary" : "secondary"} className="w-full">
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
