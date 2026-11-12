export type Campaign = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  plan: "free" | "starter" | "pro";
  primaryLabel: string;
  proof: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export const CAMPAIGNS: Campaign[] = [
  {
    slug: "ai-connections",
    eyebrow: "AI connections for finance teams",
    title: "Ask ChatGPT or Claude about your Spifex cash flow",
    description:
      "Connect your workspace through a read-only MCP connection. Your assistant can list workspaces, read transactions, summarize totals and map categories — without the ability to change anything.",
    bullets: [
      "Read-only cashflow:read scope",
      "Per-user OAuth 2.1 with PKCE",
      "Revoke access instantly from Settings",
      "Notes, observations and attachments never leave Spifex",
    ],
    plan: "free",
    primaryLabel: "Start free",
    proof: "Works with ChatGPT and Claude through the same remote MCP server.",
    secondaryHref: "/docs/ai-connections",
    secondaryLabel: "Read the setup guide",
  },
  {
    slug: "cashflow",
    eyebrow: "Cash-flow operations",
    title: "Plan, execute and reconcile cash flow in one place",
    description:
      "Replace disconnected spreadsheets with a workspace that connects planned entries, settlements, bank accounts and reporting — with ownership and auditability built in.",
    bullets: [
      "Plan inflows and outflows with due dates",
      "Settle fully or partially against bank accounts",
      "Keep transfers out of income and expense totals",
      "Review outstanding, settled and projected positions",
    ],
    plan: "free",
    primaryLabel: "Start free",
    proof: "Free plan available. No credit card required.",
    secondaryHref: "/docs/plan-and-execute",
    secondaryLabel: "See how it works",
  },
  {
    slug: "finance-ops",
    eyebrow: "Financial operations platform",
    title: "Run finance operations from one operating layer",
    description:
      "Spifex connects cash flow, banking visibility, settlements, ledger structure, projects, departments and reporting so teams stop rebuilding the same data in separate tools.",
    bullets: [
      "One workspace for planning and execution",
      "Role-based access and workspace isolation",
      "Projects and departments for cost ownership",
      "KPIs and filters that match the underlying data",
    ],
    plan: "starter",
    primaryLabel: "Start free",
    proof: "Start on Free. Upgrade when the operation needs more capacity.",
    secondaryHref: "/pricing",
    secondaryLabel: "Compare plans",
  },
];

export function getCampaign(slug: string): Campaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.slug === slug);
}
