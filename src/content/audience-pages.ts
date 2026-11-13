import type { Locale } from "@/lib/location/markets";
import { LOCALIZED_AUDIENCE_PAGES } from "./audience-page-locales";

export type AudiencePageKind = "personal" | "business";

export type AudiencePageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  proof: string;
  plans: string[];
  outcomes: { title: string; description: string }[];
  workflow: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  otherLabel: string;
  labels: {
    comparePlans: string;
    outcomesEyebrow: string;
    outcomesTitle: string;
    outcomesDescription: string;
    howEyebrow: string;
    howTitle: string;
    questionsEyebrow: string;
    questionsTitle: string;
    finalTitle: string;
  };
};

const SHARED_LABELS = {
  comparePlans: "Compare plans",
  outcomesEyebrow: "What you can do",
  outcomesTitle: "A clear operating model for the way you manage money",
  outcomesDescription:
    "Every outcome below is backed by an implemented Spifex workflow, not a future roadmap item.",
  howEyebrow: "How it works",
  howTitle: "Start small. Add structure as you go.",
  questionsEyebrow: "Questions",
  questionsTitle: "Before you choose a plan",
  finalTitle: "Start free. Upgrade only when the operation needs more room.",
};

export const AUDIENCE_PAGE_CONTENT: Record<AudiencePageKind, AudiencePageContent> = {
  personal: {
    metaTitle: "Personal finance software for planning and control",
    metaDescription:
      "Spifex Personal connects transactions, bank accounts, budgets, goals and reporting in one personal finance workspace. Start free.",
    eyebrow: "Spifex Personal",
    title: "Personal finances with the clarity of an operating system",
    description:
      "Plan what is coming, track what happened and understand your complete position across accounts, categories, budgets and goals — without stitching together spreadsheets.",
    primaryLabel: "Start Personal free",
    proof: "Free plan available. No credit card required.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "See every account in one place",
        description:
          "Add personal bank accounts, track balances and keep transfers separated from income and expense totals.",
      },
      {
        title: "Plan with budgets and goals",
        description:
          "Create budgets and goals, review progress and adjust the plan as real life changes.",
      },
      {
        title: "Understand transaction history",
        description:
          "Filter transactions by date, category, account, direction and settlement status.",
      },
      {
        title: "Reconcile partial payments",
        description:
          "Record full or partial settlements against accounts and keep the outstanding amount accurate.",
      },
      {
        title: "Report without rebuilding data",
        description:
          "Review outstanding and settled positions, categories and financial indicators from the same workspace.",
      },
      {
        title: "Ask an AI assistant",
        description:
          "Connect ChatGPT or Claude with read-only access to summarize transactions and categories.",
      },
    ],
    workflow: [
      {
        title: "Create your personal workspace",
        description: "Choose your country and currency and start on the Personal Free plan.",
      },
      {
        title: "Add accounts and categories",
        description: "Bring in the accounts and categories you already use, then adjust over time.",
      },
      {
        title: "Plan, settle and review",
        description: "Use budgets, goals, settlements and reports to keep the full picture current.",
      },
    ],
    faq: [
      {
        question: "What is included in Personal Free?",
        answer:
          "Personal Free includes a personal workspace, 250 transactions per month, two bank accounts, 25 categories, three budgets, three goals and two saved views.",
      },
      {
        question: "When should I move to Personal Starter or Pro?",
        answer:
          "Move up when you need more monthly transactions, more bank accounts, larger category and budget libraries, or more saved views and attachments.",
      },
      {
        question: "Can I use both Personal and Business workspaces?",
        answer:
          "Yes. One Spifex account can own multiple workspaces across both product categories and switch between them.",
      },
      {
        question: "Does the AI assistant change my data?",
        answer:
          "No. AI connections are read-only and request only the spifex:access scope.",
      },
    ],
    otherLabel: "Explore Spifex Business",
    labels: SHARED_LABELS,
  }, 

  business: {
    metaTitle: "Business financial operations software",
    metaDescription:
      "Spifex Business connects cash flow, banking, settlements, ledger structure, projects, departments and reporting with role-based controls. Start free.",
    eyebrow: "Spifex Business",
    title: "One operating layer for business financial operations",
    description:
      "Plan cash flow, connect banking, reconcile settlements, structure your ledger and report by project or department — with the roles and controls a finance team needs.",
    primaryLabel: "Start Business free",
    proof: "Free plan available. No credit card required.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Plan and execute cash flow",
        description:
          "Create planned entries, settle against bank accounts and keep outstanding balances current.",
      },
      {
        title: "Connect banking and statements",
        description:
          "Add bank accounts, import statements and reconcile movements with real evidence.",
      },
      {
        title: "Attribute cost and ownership",
        description:
          "Use projects, departments and entities to explain where money is planned and spent.",
      },
      {
        title: "Structure the ledger",
        description:
          "Maintain ledger accounts and posting structure so reporting stays consistent.",
      },
      {
        title: "Control access by role",
        description:
          "Use owner, admin and member roles with workspace-scoped permissions and lifecycle controls.",
      },
      {
        title: "Report with KPI visibility",
        description:
          "Review cash-flow, settlement and operational indicators from the same filtered data.",
      },
    ],
    workflow: [
      {
        title: "Create your business workspace",
        description: "Set the workspace country and currency and start on the Business Free plan.",
      },
      {
        title: "Add your operating structure",
        description: "Add accounts, categories, projects, departments, members and ledger accounts.",
      },
      {
        title: "Operate with controls",
        description: "Plan, settle, reconcile and report with role-based access controls.",
      },
    ],
    faq: [
      {
        question: "What is included in Business Free?",
        answer:
          "Business Free includes one workspace, 1,000 cash-flow entries per month, two bank accounts, one member, two projects, ten ledger accounts and two statement imports per month.",
      },
      {
        question: "What changes on Starter and Pro?",
        answer:
          "Starter raises entry, bank, member, project, ledger and statement limits. Pro removes the core workflow limits and allows up to six owned workspaces.",
      },
      {
        question: "Does Spifex replace my accounting software?",
        answer:
          "Spifex is the operating layer for cash flow, banking visibility, settlements, governance and reporting. It complements statutory accounting rather than replacing it.",
      },
      {
        question: "Can I connect ChatGPT or Claude?",
        answer:
          "Yes. Business workspaces support read-only AI connections with OAuth and a spifex:access scope.",
      },
    ],
    otherLabel: "Explore Spifex Personal",
    labels: SHARED_LABELS,
  },
};

export function getAudiencePageContent(
  kind: AudiencePageKind,
  locale: Locale = "en",
): AudiencePageContent {
  const base = AUDIENCE_PAGE_CONTENT[kind];
  const localized = LOCALIZED_AUDIENCE_PAGES[locale]?.[kind];
  if (!localized) return base;

  return {
    ...base,
    ...localized,
    labels: { ...base.labels, ...localized.labels },
  };
}
