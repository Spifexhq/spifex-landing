import type { Metadata } from "next";

import { AudienceLanding } from "@/components/marketing/AudienceLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";

const FAQ_ITEMS = [
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
      "No. AI connections are read-only and request only the cashflow:read scope.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: "Personal finance software for planning and control",
    description:
      "Spifex Personal connects transactions, bank accounts, budgets, goals and reporting in one personal finance workspace. Start free.",
    path: "/personal",
  });
}

export default function PersonalPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Personal", path: "/personal" },
          ]),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <AudienceLanding
        eyebrow="Spifex Personal"
        title="Personal finances with the clarity of an operating system"
        description="Plan what is coming, track what happened and understand your complete position across accounts, categories, budgets and goals — without stitching together spreadsheets."
        primaryHref="/signup?intent=signup&product=personal&plan=free"
        primaryLabel="Start Personal free"
        pricingHref="/pricing?product=personal"
        proof="Free plan available. No credit card required."
        plans={["Personal Free", "Personal Starter", "Personal Pro"]}
        outcomes={[
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
        ]}
        workflow={[
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
        ]}
        faq={FAQ_ITEMS}
        otherHref="/business"
        otherLabel="Explore Spifex Business"
      />
    </>
  );
}
