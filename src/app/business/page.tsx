import type { Metadata } from "next";

import { AudienceLanding } from "@/components/marketing/AudienceLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";

const FAQ_ITEMS = [
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
      "Yes. Business workspaces support read-only AI connections with OAuth and a cashflow:read scope.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: "Business financial operations software",
    description:
      "Spifex Business connects cash flow, banking, settlements, ledger structure, projects, departments and reporting with role-based controls. Start free.",
    path: "/business",
  });
}

export default function BusinessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Business", path: "/business" },
          ]),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <AudienceLanding
        eyebrow="Spifex Business"
        title="One operating layer for business financial operations"
        description="Plan cash flow, connect banking, reconcile settlements, structure your ledger and report by project or department — with the roles and controls a finance team needs."
        primaryHref="/signup?intent=signup&product=business&plan=free"
        primaryLabel="Start Business free"
        pricingHref="/pricing?product=business"
        proof="Free plan available. No credit card required."
        plans={["Business Free", "Business Starter", "Business Pro"]}
        outcomes={[
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
        ]}
        workflow={[
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
        ]}
        faq={FAQ_ITEMS}
        otherHref="/personal"
        otherLabel="Explore Spifex Personal"
      />
    </>
  );
}
