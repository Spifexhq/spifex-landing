export type DocCategory =
  | "gettingStarted"
  | "cashflow"
  | "banking"
  | "reporting"
  | "ai"
  | "security";

export type DocSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type DocArticle = {
  slug: string;
  title: string;
  summary: string;
  category: DocCategory;
  keywords: string[];
  updated: string;
  sections: DocSection[];
  related: string[];
};

export const DOCS: DocArticle[] = [
  {
    slug: "choose-personal-or-business",
    title: "Choose between Personal and Business",
    summary: "Understand which Spifex workspace type fits your finances and how the two can coexist.",
    category: "gettingStarted",
    keywords: ["personal", "business", "workspace", "plan", "product", "category", "switch"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "One account, two workspace categories",
        body: [
          "A Spifex account can own both Personal and Business workspaces. The product category is chosen when a workspace is created and determines which modules, permissions, plans and navigation are available.",
          "Use Personal for your own cash flow, accounts, categories, budgets and goals. Use Business for team cash flow, banking, settlements, ledger structure, projects, departments, CRM and inventory.",
        ],
      },
      {
        heading: "Choosing the first workspace",
        bullets: [
          "Choose Personal if you are organizing your own finances.",
          "Choose Business if you need team access, operational controls or business reporting.",
          "Both categories start with a Free plan and can move to Starter or Pro later.",
          "You can add the other category from the workspace switcher after signing up.",
        ],
        body: [],
      },
      {
        heading: "Plans are separate",
        body: [
          "Business and Personal have separate Starter and Pro plans with their own quotas. A subscription on one workspace does not upgrade the other category.",
        ],
      },
    ],
    related: ["workspace-setup", "plans-and-checkout"],
  },
  {
    slug: "workspace-setup",
    title: "Create and configure your workspace",
    summary: "Set the workspace type, country, currency and first accounts before you start entering data.",
    category: "gettingStarted",
    keywords: ["onboarding", "workspace", "currency", "country", "business", "personal", "setup"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Choose the right workspace type",
        body: [
          "A Spifex account can own more than one workspace. Business workspaces include the operating modules for cash flow, banking, ledger, projects, departments, CRM and inventory. Personal workspaces focus on personal cash flow, accounts, categories, budgets and goals.",
          "A workspace's product category is fixed when it is created. If you need both business and personal finances, create one workspace of each type and switch between them from the workspace selector.",
        ],
      },
      {
        heading: "Set the billing currency",
        body: [
          "The workspace currency controls how amounts are formatted and reported. It is not a conversion tool: changing the currency later does not relabel existing money.",
          "Set the correct currency before importing or entering historical data. If you operate in several currencies, use separate bank accounts or workspaces rather than mixing currency labels.",
        ],
      },
      {
        heading: "Add the first structure",
        bullets: [
          "Create or review cash-flow categories so reporting remains consistent.",
          "Add bank accounts if you want balances and settlements connected to real accounts.",
          "Create projects or departments if you need cost attribution and ownership.",
          "Invite team members after the owner account and workspace are configured.",
        ],
        body: [],
      },
    ],
    related: ["account-and-security", "plan-and-execute"],
  },
  {
    slug: "account-and-security",
    title: "Account access, verification and security",
    summary: "How sign-in, email verification, sessions, roles and account protection work.",
    category: "gettingStarted",
    keywords: ["login", "sign in", "password", "two-factor", "2fa", "session", "verification", "security"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Sign-in and verification",
        body: [
          "New accounts must verify their email before using the workspace. After verification, sign-in issues a short-lived access token and a session-bound refresh mechanism. The browser session is checked with the API session record, so a copied access token alone is not enough.",
          "If your account requires two-factor authentication, complete the second step before entering the workspace. The landing site never receives your Spifex password.",
        ],
      },
      {
        heading: "Roles and permissions",
        body: [
          "Workspace owners and admins can manage organization settings, members, billing and connector activity. Members only see the features and pages granted by their role and plan.",
          "Some permissions are enforced in the API rather than only hidden in the interface. Do not rely on a hidden button as a security boundary.",
        ],
      },
      {
        heading: "Protect your account",
        bullets: [
          "Use a unique password and enable two-factor authentication when available.",
          "Review active sessions and revoke devices you no longer use.",
          "Review Settings → AI connections to revoke unused assistant access.",
          "Report unexpected workspace access or billing changes to the workspace owner.",
        ],
        body: [],
      },
    ],
    related: ["workspace-setup", "roles-and-audit"],
  },
  {
    slug: "plan-and-execute",
    title: "Plan, execute and reconcile cash flow",
    summary: "Use planned entries, settlements and reconciliation to keep the cash-flow picture current.",
    category: "cashflow",
    keywords: ["cash flow", "cashflow", "entries", "planning", "settlements", "reconciliation", "due date", "open amount"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Planned versus settled",
        body: [
          "A cash-flow entry represents an expected inflow or outflow with a due date and an open amount. Settling an entry records the payment event and reduces the open amount. Partially settled entries keep a remaining balance.",
          "The outstanding view shows what is still expected. The settled view shows what has already happened. Use both views when comparing plan and execution.",
        ],
      },
      {
        heading: "Filter the view",
        bullets: [
          "Date ranges filter by due date and are inclusive.",
          "Direction separates income, expenses and, in Personal workspaces, transfers.",
          "Status separates open, partially settled and settled entries.",
          "Categories and bank accounts narrow the list without changing the underlying data.",
        ],
        body: [],
      },
      {
        heading: "Reconcile with evidence",
        body: [
          "Settlements carry a value date and a bank account. Use consistent value dates so cash-flow reports and bank balances tell the same story. Reverse a settlement when it was recorded incorrectly; do not delete the original entry to hide history.",
        ],
      },
    ],
    related: ["connect-bank-accounts", "kpis-and-filters"],
  },
  {
    slug: "connect-bank-accounts",
    title: "Connect bank accounts and import statements",
    summary: "Add accounts, import statements and keep balances aligned with settlements.",
    category: "banking",
    keywords: ["bank", "account", "statement", "import", "CSV", "OFX", "balance", "reconciliation"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Add bank accounts",
        body: [
          "Create a bank account with the institution, account type and currency. The account becomes available for settlements, transfers and balance views.",
          "Use the real account currency. A mismatch between the account currency and the transaction currency produces misleading consolidated balances.",
        ],
      },
      {
        heading: "Import statements",
        bullets: [
          "Upload a supported statement file and review the parsed rows before committing.",
          "Match imported rows to existing planned entries where possible.",
          "Create new entries only for genuine unmatched movements.",
          "Review confidence and duplicates before confirming an import.",
        ],
        body: [],
      },
      {
        heading: "Keep balances trustworthy",
        body: [
          "Balances are derived from account data and recorded movements. If a statement import is wrong, correct the import or the affected entries instead of editing a balance directly.",
        ],
      },
    ],
    related: ["settlements-and-transfers", "kpis-and-filters"],
  },
  {
    slug: "settlements-and-transfers",
    title: "Settlements, partial payments and transfers",
    summary: "Record payments, split settlements across banks and move money without double counting.",
    category: "banking",
    keywords: ["settlement", "partial", "payment", "transfer", "bank", "reverse", "value date"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Record a settlement",
        body: [
          "Settle an entry against a bank account with the amount and value date. The open amount decreases and the settled amount increases. A final settlement marks the entry as settled.",
          "Bulk settlement supports several entries and banks in one operation. Review the preview and expected versions before committing.",
        ],
      },
      {
        heading: "Partial payments",
        body: [
          "A partial settlement leaves a remaining open amount. Use it when a customer pays in installments or a vendor payment is split. The status becomes partial until the remaining balance reaches zero.",
        ],
      },
      {
        heading: "Transfers",
        body: [
          "A transfer moves money between two bank accounts and is managed as a complete transfer, not as two independent entries. Transfers are excluded from income and expense totals so the same money is not counted twice.",
        ],
      },
    ],
    related: ["connect-bank-accounts", "plan-and-execute"],
  },
  {
    slug: "kpis-and-filters",
    title: "Reporting, KPIs and operational filters",
    summary: "Read outstanding, settled and projected positions without rebuilding the data in a spreadsheet.",
    category: "reporting",
    keywords: ["report", "KPI", "dashboard", "outstanding", "settled", "projected", "filter", "summary"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Choose the reporting basis",
        body: [
          "Outstanding reporting focuses on what is still expected. Settled reporting focuses on what has happened. Use the same date range and filters when comparing the two.",
          "Projected balances combine current account balances with outstanding inflows and outflows. They are a planning view, not a bank guarantee.",
        ],
      },
      {
        heading: "Use filters consistently",
        bullets: [
          "Filter by due date for planning questions.",
          "Filter by value date for settled activity.",
          "Filter by category to explain a variance.",
          "Filter by bank account when reconciling a single account.",
        ],
        body: [],
      },
      {
        heading: "Share the numbers, not the raw files",
        body: [
          "Reports are generated from the workspace data and respect the viewer's permissions. Export only what the recipient is allowed to see.",
        ],
      },
    ],
    related: ["plan-and-execute", "roles-and-audit"],
  },
  {
    slug: "ai-connections",
    title: "Connect ChatGPT or Claude to Spifex",
    summary: "Set up the read-only MCP connector, approve consent and revoke access when needed.",
    category: "ai",
    keywords: ["AI", "ChatGPT", "Claude", "MCP", "connector", "OAuth", "read-only", "revoke"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "What the connector can do",
        body: [
          "The Spifex MCP connector is read-only. It exposes workspace listing, cash-flow rows, summaries and categories with the spifex:access scope. It cannot create, edit, delete, settle or transfer anything.",
          "The assistant never receives your Spifex password. Authorization happens on the Spifex consent page and can be revoked from Settings → AI connections.",
        ],
      },
      {
        heading: "Add the connector",
        bullets: [
          "Open the connector settings in ChatGPT or Claude.",
          "Add https://api.spifex.com/mcp as a custom MCP server.",
          "Sign in to Spifex and approve the read-only consent.",
          "Ask the assistant to list workspaces first, then use the returned workspace id.",
        ],
        body: [],
      },
      {
        heading: "Revoke or review access",
        body: [
          "Open Settings → AI connections in the relevant workspace. Each registration is listed separately; revoke any connection you no longer use. Revocation deletes the access and refresh tokens and takes effect on the next request.",
        ],
      },
    ],
    related: ["account-and-security", "roles-and-audit"],
  },
  {
    slug: "roles-and-audit",
    title: "Roles, governance and connector activity",
    summary: "Control who can view and change financial data, and review AI connector activity.",
    category: "security",
    keywords: ["roles", "owner", "admin", "member", "audit", "activity", "permissions", "governance"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Role boundaries",
        body: [
          "Owners control the workspace and billing. Admins can manage members and operational settings according to their permissions. Members see only the pages and actions granted to them.",
          "Workspace lifecycle states also matter: legacy and deletion-pending workspaces are read-only, while deleted workspaces are unavailable.",
        ],
      },
      {
        heading: "Connector activity",
        body: [
          "Owners and admins can review AI connector activity for a workspace. Activity records show the client, capability, outcome, row count and timestamp. They do not include row contents, search text, token values or IP addresses.",
        ],
      },
      {
        heading: "Review checklist",
        bullets: [
          "Remove members who no longer need access.",
          "Review admin and owner roles regularly.",
          "Revoke unused AI connections.",
          "Export or archive data before a scheduled workspace deletion.",
        ],
        body: [],
      },
    ],
    related: ["account-and-security", "ai-connections"],
  },
  {
    slug: "plans-and-checkout",
    title: "Plans, billing currency and checkout",
    summary: "Understand Free, Starter and Pro, regional pricing and what happens at checkout.",
    category: "security",
    keywords: ["pricing", "plan", "free", "starter", "pro", "billing", "currency", "checkout", "invoice"],
    updated: "2026-11-09",
    sections: [
      {
        heading: "Plan structure",
        body: [
          "The Free plan lets you start without a payment method. Starter and Pro add workspace capacity and more operating room as the team grows. Plan details are shown before checkout.",
          "Business and Personal workspaces have separate plan families. Check the workspace type before choosing a plan.",
        ],
      },
      {
        heading: "Regional currency",
        body: [
          "Pricing displays a supported regional currency based on the detected country. If the country cannot be determined, a default currency is used. Final billing currency and taxes are confirmed at secure checkout.",
        ],
      },
      {
        heading: "Changing plans",
        body: [
          "Use the workspace billing settings to review the current plan and available changes. Do not create a second subscription for the same workspace.",
        ],
      },
    ],
    related: ["workspace-setup", "account-and-security"],
  },
];

export function getDoc(slug: string): DocArticle | undefined {
  return DOCS.find((doc) => doc.slug === slug);
}

export function docSearchText(doc: DocArticle): string {
  return [
    doc.title,
    doc.summary,
    doc.keywords.join(" "),
    ...doc.sections.flatMap((section) => [section.heading, ...section.body, ...(section.bullets ?? [])]),
  ]
    .join(" ")
    .toLowerCase();
}
