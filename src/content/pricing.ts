export type PricingTier = {
  name: string;
  priceLabel: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    priceLabel: "From $0",
    description: "For small teams that need clarity and structure fast.",
    highlights: [
      "Cashflow planning + basic reporting",
      "Core banking visibility",
      "Role-based access (standard)",
      "CSV imports for quick onboarding",
    ],
    ctaLabel: "Get started",
    ctaHref: "https://dashboard.spifex.com/signup",
  },
  {
    name: "Growth",
    priceLabel: "Custom",
    description: "For operationally complex businesses scaling finance operations.",
    highlights: [
      "Cashflow + settlements + transfers",
      "Ledger structure + governance",
      "Projects and department accountability",
      "Automations and KPI dashboards",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "https://dashboard.spifex.com/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    priceLabel: "Custom",
    description: "For teams requiring advanced controls, compliance, and integrations.",
    highlights: [
      "Advanced RBAC + auditability",
      "Integration support and custom workflows",
      "Multi-org / multi-entity operations",
      "Priority onboarding and support",
    ],
    ctaLabel: "Contact us",
    ctaHref: "https://dashboard.spifex.com/signup",
  },
];
