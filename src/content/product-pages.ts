import type { ProductKey } from "@/content/products";
import { LOCALIZED_PRODUCT_PAGES } from "@/content/product-page-locales";
import type { Locale } from "@/lib/location/markets";

export type PreviewStatus = "positive" | "warning" | "neutral";

export type ProductPreviewContent = {
  label: string;
  metric: { label: string; value: string; note: string };
  secondary: { label: string; value: string };
  chartLabel: string;
  rows: { label: string; value: string; status: PreviewStatus }[];
};

export type ProductCopy = {
  title: string;
  subtitle: string;
  bullets: string[];
  outcomes: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: { title: string; desc: string }[];
  finalTitle: string;
  finalSubtitle: string;
};

export type ProductPageContent = {
  key: ProductKey;
  href: string;
  name: string;
  related: readonly ProductKey[];
  preview: ProductPreviewContent;
  copy: ProductCopy;
};

export const PRODUCT_PAGE_CONTENT: Record<ProductKey, ProductPageContent> = {
  cashflow: {
    key: "cashflow",
    href: "/products/cashflow",
    name: "Cashflow",
    related: ["banking", "spend", "projects"],
    preview: {
      label: "Cash flow",
      metric: { label: "Cash position", value: "€482.9k", note: "+8.2% vs plan" },
      secondary: { label: "Planned", value: "€164.2k" },
      chartLabel: "Plan vs settled",
      rows: [
        { label: "Payroll", value: "€28,900", status: "positive" },
        { label: "Vendor payout", value: "€12,400", status: "warning" },
        { label: "Card settlement", value: "€6,120", status: "positive" },
      ],
    },
    copy: {
      title: "Know what is coming, going and still outstanding",
      subtitle:
        "Plan entries, settle them against bank accounts and keep every movement linked to the category, project or department that owns it.",
      bullets: [
        "Planned and settled entries in one view",
        "Partial settlements and internal transfers",
        "Categories, projects and departments",
        "Filters, saved views and attachments",
      ],
      outcomes: [
        {
          title: "See the cash plan",
          desc: "Create planned entries with dates, categories and owners so the month starts from a baseline.",
        },
        {
          title: "Settle against real accounts",
          desc: "Record full or partial settlements against bank accounts and keep the open balance current.",
        },
        {
          title: "Keep transfers separate",
          desc: "Move money between accounts without inflating income or expense totals.",
        },
        {
          title: "Report from the same data",
          desc: "Filter outstanding and settled positions by category, project or department.",
        },
      ],
      steps: [
        {
          title: "Create the workspace",
          desc: "Choose country, currency and workspace type. Start on the Free plan.",
        },
        {
          title: "Add accounts and categories",
          desc: "Add the bank accounts and categories your team already uses.",
        },
        {
          title: "Plan, settle and review",
          desc: "Plan entries, settle them and review the position without rebuilding a spreadsheet.",
        },
      ],
      capabilitiesTitle: "The building blocks of a cash plan",
      capabilitiesSubtitle:
        "Each entry keeps its amount, dates, ownership and settlement history in one place.",
      capabilities: [
        {
          title: "Planned entries",
          desc: "Capture amount, due date, category, project and counterparty.",
        },
        {
          title: "Settlements",
          desc: "Settle in full or in parts against a bank account, with a running open balance.",
        },
        {
          title: "Internal transfers",
          desc: "Move funds between accounts without changing income or expense totals.",
        },
        {
          title: "Allocations",
          desc: "Split entries across departments and attach them to projects.",
        },
        {
          title: "Filters and saved views",
          desc: "Save the filters and columns your team uses most.",
        },
        {
          title: "Attachments",
          desc: "Keep supporting documents with the entry they belong to.",
        },
      ],
      finalTitle: "Start with a clear cash plan",
      finalSubtitle:
        "Create a free workspace and add the accounts and categories you already use.",
    },
  },
  banking: {
    key: "banking",
    href: "/products/banking-payments",
    name: "Banking & Payments",
    related: ["cashflow", "spend", "ledger"],
    preview: {
      label: "Banking",
      metric: { label: "Accounts", value: "4", note: "2 currencies" },
      secondary: { label: "Statement rows", value: "186" },
      chartLabel: "Matched vs pending",
      rows: [
        { label: "Operating account", value: "Matched", status: "positive" },
        { label: "Tax account", value: "12 pending", status: "warning" },
        { label: "Reserve account", value: "Matched", status: "positive" },
      ],
    },
    copy: {
      title: "Bank accounts and statements in the same workspace",
      subtitle:
        "Keep account details, imported statements and matching decisions together so reconciliation does not live in a separate spreadsheet.",
      bullets: [
        "Bank accounts and balances",
        "Statement imports and parsing",
        "Suggested matching",
        "Reconciliation review",
      ],
      outcomes: [
        {
          title: "One account list",
          desc: "Keep bank name, account type, currency and balance in the workspace.",
        },
        {
          title: "Import statements",
          desc: "Upload a statement and review the parsed rows before committing them.",
        },
        {
          title: "Match movements",
          desc: "Use suggested matches between statement rows and cashflow entries, then confirm.",
        },
        {
          title: "Review exceptions",
          desc: "See unmatched and pending rows instead of hunting through files.",
        },
      ],
      steps: [
        {
          title: "Add a bank account",
          desc: "Set the institution, account type, currency and opening details.",
        },
        {
          title: "Import a statement",
          desc: "Upload the file and review the parsed rows before importing.",
        },
        {
          title: "Match and reconcile",
          desc: "Confirm suggested matches and keep exceptions visible.",
        },
      ],
      capabilitiesTitle: "Banking data, without the side spreadsheet",
      capabilitiesSubtitle:
        "Accounts, statement rows and matching decisions stay connected to the cashflow they explain.",
      capabilities: [
        {
          title: "Bank accounts",
          desc: "Institution, type, currency and account details per workspace.",
        },
        {
          title: "Statement imports",
          desc: "Upload and parse statements with a review step before commit.",
        },
        {
          title: "Suggested matching",
          desc: "Classify statement rows against entries and reusable patterns.",
        },
        {
          title: "Reconciliation review",
          desc: "Keep pending, matched and unmatched rows visible.",
        },
        {
          title: "Settlement links",
          desc: "Connect settled movements to the bank account that received them.",
        },
        {
          title: "Workspace roles",
          desc: "Keep account data scoped to the workspace and its members.",
        },
      ],
      finalTitle: "Bring banking into the same workspace",
      finalSubtitle: "Start free and add your first bank account.",
    },
  },
  spend: {
    key: "spend",
    href: "/products/spend-settlements",
    name: "Spend & Settlements",
    related: ["banking", "departments", "projects"],
    preview: {
      label: "Spend",
      metric: { label: "Open outflow", value: "€38.4k", note: "14 entries" },
      secondary: { label: "Settled this month", value: "€96.2k" },
      chartLabel: "Settled vs outstanding",
      rows: [
        { label: "Travel", value: "€2,840", status: "positive" },
        { label: "Software", value: "€1,290", status: "warning" },
        { label: "Office", value: "€640", status: "positive" },
      ],
    },
    copy: {
      title: "Track outgoing spend and settle it against the plan",
      subtitle:
        "Record outgoing entries, allocate them to categories, projects or departments and settle them in full or in parts.",
      bullets: [
        "Outgoing entries with due dates",
        "Partial settlements",
        "Project and department allocation",
        "Outstanding balance views",
      ],
      outcomes: [
        {
          title: "See committed spend",
          desc: "Record outgoing entries with due dates, categories and owners.",
        },
        {
          title: "Settle in parts",
          desc: "Apply one or more settlements to an entry and track the remaining amount.",
        },
        {
          title: "Allocate the cost",
          desc: "Split spend across departments and link it to projects.",
        },
        {
          title: "Review what is open",
          desc: "Filter outstanding and settled spend without exporting data.",
        },
      ],
      steps: [
        {
          title: "Record the outflow",
          desc: "Capture amount, due date, category, project and counterparty.",
        },
        {
          title: "Settle against the account",
          desc: "Apply one or more settlements and keep the open balance current.",
        },
        {
          title: "Review the balance",
          desc: "Filter settled and outstanding spend by category, project or department.",
        },
      ],
      capabilitiesTitle: "Spend that stays connected to settlement",
      capabilitiesSubtitle:
        "Outgoing entries keep their allocation and settlement history instead of ending in a separate sheet.",
      capabilities: [
        {
          title: "Outgoing entries",
          desc: "Amount, due date, category, project and counterparty.",
        },
        {
          title: "Partial settlements",
          desc: "Settle an entry across multiple payments.",
        },
        {
          title: "Allocations",
          desc: "Assign percentages to departments and link projects.",
        },
        {
          title: "Outstanding views",
          desc: "See open and settled spend with saved filters.",
        },
      ],
      finalTitle: "Keep spend and settlement connected",
      finalSubtitle: "Start free and record your first outgoing entry.",
    },
  },
  ledger: {
    key: "ledger",
    href: "/products/ledger",
    name: "Ledger",
    related: ["cashflow", "banking", "departments"],
    preview: {
      label: "Ledger",
      metric: { label: "Posting accounts", value: "128", note: "6 headers" },
      secondary: { label: "Journal entries", value: "1,842" },
      chartLabel: "Posting activity",
      rows: [
        { label: "Revenue · 4010", value: "Balanced", status: "positive" },
        { label: "Payroll · 6200", value: "Posted", status: "positive" },
        { label: "Suspense · 9999", value: "Review", status: "warning" },
      ],
    },
    copy: {
      title: "A chart of accounts built for consistent reporting",
      subtitle:
        "Structure header and posting accounts, record journal entries and keep periods and dimensions under control.",
      bullets: [
        "Header and posting accounts",
        "Journal entries and books",
        "Fiscal periods",
        "Dimensions and posting policies",
      ],
      outcomes: [
        {
          title: "Structure the chart",
          desc: "Create header and posting accounts with codes and normal balances.",
        },
        {
          title: "Record journals",
          desc: "Post journal entries with lines, books and fiscal periods.",
        },
        {
          title: "Keep dimensions",
          desc: "Define dimensions and allowed values for reporting structure.",
        },
        {
          title: "Control posting",
          desc: "Use posting policies and manual-posting controls where needed.",
        },
      ],
      steps: [
        {
          title: "Design the chart",
          desc: "Create the header and posting accounts your reporting needs.",
        },
        {
          title: "Record entries",
          desc: "Post journal entries with the right book, period and dimensions.",
        },
        {
          title: "Review periods",
          desc: "Keep fiscal periods and posting status under control.",
        },
      ],
      capabilitiesTitle: "Accounting structure that holds",
      capabilitiesSubtitle:
        "The chart, journals, periods and dimensions share one workspace instead of drifting apart.",
      capabilities: [
        {
          title: "Chart of accounts",
          desc: "Header and posting accounts with codes, types and normal balances.",
        },
        {
          title: "Journal entries",
          desc: "Multi-line entries with books, periods and status.",
        },
        {
          title: "Fiscal periods",
          desc: "Open and close periods for each accounting book.",
        },
        {
          title: "Dimensions",
          desc: "Define dimensions, values and account-level rules.",
        },
        {
          title: "Posting policies",
          desc: "Control how entries are posted and which accounts allow manual posting.",
        },
        {
          title: "Account controls",
          desc: "Bank control accounts and classification protections.",
        },
      ],
      finalTitle: "Build a ledger you can defend",
      finalSubtitle: "Start free and shape the chart around your reporting.",
    },
  },
  projects: {
    key: "projects",
    href: "/products/projects",
    name: "Projects",
    related: ["departments", "cashflow", "ledger"],
    preview: {
      label: "Projects",
      metric: { label: "Active projects", value: "24", note: "6 types" },
      secondary: { label: "Linked entries", value: "312" },
      chartLabel: "Planned vs settled by project",
      rows: [
        { label: "Implementation", value: "€420k", status: "positive" },
        { label: "Migration", value: "€186k", status: "warning" },
        { label: "Support", value: "€96k", status: "positive" },
      ],
    },
    copy: {
      title: "See cost and revenue by project",
      subtitle:
        "Create projects, attach cashflow entries to them and compare planned, settled and outstanding amounts in one filter.",
      bullets: [
        "Project records with codes and types",
        "Entry-level project links",
        "Department allocations",
        "Project-specific views",
      ],
      outcomes: [
        {
          title: "Create a project record",
          desc: "Name, code, type and description with active status.",
        },
        {
          title: "Attach entries",
          desc: "Link planned and settled cashflow entries to the project.",
        },
        {
          title: "Allocate departments",
          desc: "Split an entry's cost across departments.",
        },
        {
          title: "Review the project",
          desc: "Filter entries and outstanding amounts by project.",
        },
      ],
      steps: [
        {
          title: "Create the project",
          desc: "Add a name, code and type so the project is easy to identify.",
        },
        {
          title: "Attach entries",
          desc: "Link the cashflow entries that belong to the project.",
        },
        {
          title: "Review the position",
          desc: "Filter planned, settled and outstanding amounts by project.",
        },
      ],
      capabilitiesTitle: "Project context on every movement",
      capabilitiesSubtitle:
        "Entries, department splits and settlement status stay attached to the project that owns them.",
      capabilities: [
        {
          title: "Project records",
          desc: "Name, code, type, description and status.",
        },
        {
          title: "Entry links",
          desc: "Attach cashflow entries directly to a project.",
        },
        {
          title: "Department split",
          desc: "Allocate entry percentages across departments.",
        },
        {
          title: "Project filters",
          desc: "Review entries, settlements and open amounts by project.",
        },
      ],
      finalTitle: "Make project performance visible",
      finalSubtitle: "Start free and create your first project.",
    },
  },
  departments: {
    key: "departments",
    href: "/products/departments",
    name: "Departments",
    related: ["projects", "spend", "ledger"],
    preview: {
      label: "Departments",
      metric: { label: "Departments", value: "8", note: "3 cost centres" },
      secondary: { label: "Allocated entries", value: "246" },
      chartLabel: "Entries by department",
      rows: [
        { label: "Operations", value: "42%", status: "positive" },
        { label: "Sales", value: "31%", status: "warning" },
        { label: "Engineering", value: "27%", status: "positive" },
      ],
    },
    copy: {
      title: "Attribute every movement to the team that owns it",
      subtitle:
        "Create departments, allocate entry percentages and review the numbers by team without rebuilding the report.",
      bullets: [
        "Department records",
        "Percentage allocations",
        "Entry filters by department",
        "Saved views",
      ],
      outcomes: [
        {
          title: "Create the department",
          desc: "Name, code and active status for each cost centre.",
        },
        {
          title: "Allocate entries",
          desc: "Assign one or more departments to an entry with percentages.",
        },
        {
          title: "Filter by team",
          desc: "Review entries and settlements for one department at a time.",
        },
        {
          title: "Keep ownership visible",
          desc: "See which team owns the spend in the same workspace.",
        },
      ],
      steps: [
        {
          title: "Define departments",
          desc: "Add the names and codes your teams already use.",
        },
        {
          title: "Allocate entries",
          desc: "Split an entry across departments with percentages.",
        },
        {
          title: "Review the numbers",
          desc: "Filter cashflow entries by department and review the position.",
        },
      ],
      capabilitiesTitle: "A cost centre view you can trust",
      capabilitiesSubtitle:
        "Department splits stay attached to the entry instead of being reconstructed at reporting time.",
      capabilities: [
        {
          title: "Department records",
          desc: "Name, code and status for each cost centre.",
        },
        {
          title: "Percentage allocation",
          desc: "Split an entry across departments with defined percentages.",
        },
        {
          title: "Entry filters",
          desc: "Filter cashflow entries by department.",
        },
        {
          title: "Saved views",
          desc: "Keep the columns and filters your team uses.",
        },
      ],
      finalTitle: "Give every movement an owner",
      finalSubtitle: "Start free and define your first department.",
    },
  },
  crm: {
    key: "crm",
    href: "/products/crm",
    name: "CRM",
    related: ["projects", "cashflow", "departments"],
    preview: {
      label: "Entities",
      metric: { label: "Entities", value: "186", note: "7 types" },
      secondary: { label: "Active", value: "164" },
      chartLabel: "Entities by type",
      rows: [
        { label: "Clients", value: "82", status: "positive" },
        { label: "Suppliers", value: "46", status: "positive" },
        { label: "Contractors", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "A single directory for every counterparty",
      subtitle:
        "Keep clients, suppliers, employees, contractors and partners in one workspace and link them to the cashflow entries they relate to.",
      bullets: [
        "Clients, suppliers and partners",
        "Contact and tax details",
        "Entity types and status",
        "Links to cashflow entries",
      ],
      outcomes: [
        {
          title: "One directory",
          desc: "Store each counterparty once with a clear entity type.",
        },
        {
          title: "Contact details",
          desc: "Keep email, phone and address information with the record.",
        },
        {
          title: "Tax and bank details",
          desc: "Store tax IDs and bank details where relevant.",
        },
        {
          title: "Connect the ledger",
          desc: "Reference the entity on the cashflow entries it paid or received.",
        },
      ],
      steps: [
        {
          title: "Add the entity",
          desc: "Choose the entity type and add the name and contact details.",
        },
        {
          title: "Classify the relationship",
          desc: "Mark it as a client, supplier, employee, contractor, partner or other type.",
        },
        {
          title: "Link entries",
          desc: "Reference the entity on the cashflow entries it relates to.",
        },
      ],
      capabilitiesTitle: "Counterparty data that stays useful",
      capabilitiesSubtitle:
        "One record for the people and organisations behind your cashflow, instead of a contact list in a separate tool.",
      capabilities: [
        {
          title: "Entity records",
          desc: "Clients, suppliers, employees, contractors, partners and more.",
        },
        {
          title: "Contact details",
          desc: "Email, phone and address in one record.",
        },
        {
          title: "Tax and bank fields",
          desc: "Optional tax IDs and bank details.",
        },
        {
          title: "Entry links",
          desc: "Reference the counterparty on cashflow entries.",
        },
      ],
      finalTitle: "Keep counterparties in one place",
      finalSubtitle: "Start free and add your first entity.",
    },
  },
  inventory: {
    key: "inventory",
    href: "/products/inventory",
    name: "Inventory",
    related: ["projects", "ledger", "cashflow"],
    preview: {
      label: "Inventory",
      metric: { label: "Items", value: "1,284", note: "42 categories" },
      secondary: { label: "Units on hand", value: "8,960" },
      chartLabel: "Items by unit type",
      rows: [
        { label: "SKU-1042", value: "240 units", status: "positive" },
        { label: "SKU-2210", value: "18 units", status: "warning" },
        { label: "SKU-3180", value: "96 units", status: "positive" },
      ],
    },
    copy: {
      title: "Item master data for stock and services",
      subtitle:
        "Keep SKUs, units of measure and quantity on hand in one list, then attach items to the cashflow entries that move them.",
      bullets: [
        "SKU and item name",
        "Unit of measure",
        "Quantity on hand",
        "Links to cashflow entries",
      ],
      outcomes: [
        {
          title: "One item list",
          desc: "Store each SKU once with a name and description.",
        },
        {
          title: "Units and quantities",
          desc: "Track the unit of measure and quantity on hand.",
        },
        {
          title: "Status control",
          desc: "Deactivate items without deleting their history.",
        },
        {
          title: "Connect to cashflow",
          desc: "Attach inventory lines to the entries that move stock.",
        },
      ],
      steps: [
        {
          title: "Create the item",
          desc: "Add the SKU, name and description.",
        },
        {
          title: "Set the unit and quantity",
          desc: "Choose the unit of measure and record quantity on hand.",
        },
        {
          title: "Attach it to entries",
          desc: "Reference the item on the cashflow entries that move it.",
        },
      ],
      capabilitiesTitle: "Clean item data, connected to finance",
      capabilitiesSubtitle:
        "A simple item master that stays linked to the cashflow it affects.",
      capabilities: [
        {
          title: "Item records",
          desc: "SKU, name, description and active status.",
        },
        {
          title: "Units of measure",
          desc: "Free-text units such as pieces, kilograms or hours.",
        },
        {
          title: "Quantity on hand",
          desc: "Keep the current quantity with each item.",
        },
        {
          title: "Entry links",
          desc: "Reference items on cashflow entries.",
        },
      ],
      finalTitle: "Keep item data clean",
      finalSubtitle: "Start free and add your first SKU.",
    },
  },
};

export type LocalizedProductPage = {
  name: string;
  preview: ProductPreviewContent;
  copy: ProductCopy;
};

export function getProductPageContent(
  key: ProductKey,
  locale: Locale = "en",
): ProductPageContent {
  const base = PRODUCT_PAGE_CONTENT[key];
  const localized = LOCALIZED_PRODUCT_PAGES[locale]?.[key];
  if (!localized) return base;

  return {
    ...base,
    name: localized.name || base.name,
    preview: localized.preview || base.preview,
    copy: localized.copy || base.copy,
  };
}
