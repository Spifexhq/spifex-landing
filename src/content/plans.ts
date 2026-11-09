export type ProductCategory = "personal" | "business";
export type PlanTier = "free" | "starter" | "pro";
export type SupportedCurrency = "EUR" | "USD" | "BRL";

export type PlanOffer = {
  category: ProductCategory;
  tier: PlanTier;
  code: string;
  name: string;
  description: string;
  prices: Record<SupportedCurrency, number | null>;
  highlights: string[];
  comparison: Record<string, string>;
  featured?: boolean;
};

export const PLAN_CATALOG: Record<ProductCategory, PlanOffer[]> = {
  personal: [
    {
      category: "personal",
      tier: "free",
      code: "personal-free",
      name: "Personal Free",
      description: "Organize personal cash flow and accounts without a payment method.",
      prices: { EUR: 0, USD: 0, BRL: 0 },
      highlights: [
        "250 transactions per month",
        "2 bank accounts",
        "25 categories and 3 budgets",
        "3 goals and 2 saved views",
      ],
      comparison: {
        workspaces: "1",
        transactions: "250 / month",
        accounts: "2",
        categories: "25",
        budgets: "3",
        goals: "3",
        views: "2",
        attachments: "5 / month",
      },
    },
    {
      category: "personal",
      tier: "starter",
      code: "personal-starter",
      name: "Personal Starter",
      description: "More room for daily personal finance workflows and recurring planning.",
      prices: { EUR: 9.99, USD: 7.99, BRL: 39.99 },
      highlights: [
        "5,000 transactions per month",
        "10 bank accounts",
        "100 categories and 25 budgets",
        "25 goals and 25 saved views",
      ],
      comparison: {
        workspaces: "2",
        transactions: "5,000 / month",
        accounts: "10",
        categories: "100",
        budgets: "25",
        goals: "25",
        views: "25",
        attachments: "100 / month",
      },
    },
    {
      category: "personal",
      tier: "pro",
      code: "personal-pro",
      name: "Personal Pro",
      description: "High-volume personal planning for complex financial lives.",
      prices: { EUR: 14.99, USD: 12.99, BRL: 109.99 },
      highlights: [
        "50,000 transactions per month",
        "50 bank accounts",
        "500 categories and 250 budgets",
        "250 goals and 200 saved views",
      ],
      comparison: {
        workspaces: "6",
        transactions: "50,000 / month",
        accounts: "50",
        categories: "500",
        budgets: "250",
        goals: "250",
        views: "200",
        attachments: "500 / month",
      },
      featured: true,
    },
  ],
  business: [
    {
      category: "business",
      tier: "free",
      code: "free",
      name: "Business Free",
      description: "Start a structured business workspace without a payment method.",
      prices: { EUR: 0, USD: 0, BRL: 0 },
      highlights: [
        "1,000 entries per month",
        "2 bank accounts and 1 member",
        "2 projects and 10 ledger accounts",
        "2 statement imports per month",
      ],
      comparison: {
        workspaces: "1",
        entries: "1,000 / month",
        banks: "2",
        members: "1",
        projects: "2",
        ledger: "10",
        statements: "2 / month",
      },
    },
    {
      category: "business",
      tier: "starter",
      code: "starter",
      name: "Business Starter",
      description: "For growing teams adding structure, controls and recurring operations.",
      prices: { EUR: 15, USD: 12, BRL: 50 },
      highlights: [
        "10,000 entries per month",
        "10 bank accounts and 5 members",
        "50 projects and 100 ledger accounts",
        "20 statement imports per month",
      ],
      comparison: {
        workspaces: "2",
        entries: "10,000 / month",
        banks: "10",
        members: "5",
        projects: "50",
        ledger: "100",
        statements: "20 / month",
      },
    },
    {
      category: "business",
      tier: "pro",
      code: "pro",
      name: "Business Pro",
      description: "For finance teams operating at scale with unmetered core workflows.",
      prices: { EUR: 27, USD: 30, BRL: 150 },
      highlights: [
        "Unmetered cash-flow entries",
        "Unmetered bank accounts, up to 50 members",
        "Unmetered projects, ledger accounts and statements",
        "Up to 6 owned workspaces",
      ],
      comparison: {
        workspaces: "6",
        entries: "Unlimited",
        banks: "Unlimited",
        members: "50",
        projects: "Unlimited",
        ledger: "Unlimited",
        statements: "Unlimited",
      },
      featured: true,
    },
  ],
};

export const PLAN_COMPARISON_ROWS: Record<ProductCategory, { key: string; label: string }[]> = {
  personal: [
    { key: "workspaces", label: "Owned workspaces" },
    { key: "transactions", label: "Transactions" },
    { key: "accounts", label: "Bank accounts" },
    { key: "categories", label: "Categories" },
    { key: "budgets", label: "Budgets" },
    { key: "goals", label: "Goals" },
    { key: "views", label: "Saved views" },
    { key: "attachments", label: "Attachments" },
  ],
  business: [
    { key: "workspaces", label: "Owned workspaces" },
    { key: "entries", label: "Cash-flow entries" },
    { key: "banks", label: "Bank accounts" },
    { key: "members", label: "Team members" },
    { key: "projects", label: "Projects" },
    { key: "ledger", label: "Ledger accounts" },
    { key: "statements", label: "Statement imports" },
  ],
};

export function planHref(plan: PlanOffer): string {
  if (plan.tier === "free") {
    return `/signup?intent=signup&product=${plan.category}&plan=free`;
  }
  return `/signup?intent=subscribe&product=${plan.category}&plan=${plan.code}`;
}

export function getPlan(category: ProductCategory, tier: PlanTier): PlanOffer | undefined {
  return PLAN_CATALOG[category].find((plan) => plan.tier === tier);
}
