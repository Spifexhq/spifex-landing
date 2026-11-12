export type IconName =
  | "CreditCard"
  | "Landmark"
  | "ArrowLeftRight"
  | "BookOpen"
  | "BriefcaseBusiness"
  | "Building2"
  | "Users"
  | "Boxes"
  | "FileText"
  | "Plug"
  | "Sparkles"
  | "ShieldCheck"
  | "Globe";

export type ProductKey =
  | "cashflow"
  | "banking"
  | "spend"
  | "ledger"
  | "projects"
  | "departments"
  | "crm"
  | "inventory";

export type ProductLink = {
  key: ProductKey;
  href: string;
  icon: IconName;
  name: string;
  summary: string;
};

export const PRODUCT_LINKS: ProductLink[] = [
  {
    key: "cashflow",
    href: "/products/cashflow",
    icon: "ArrowLeftRight",
    name: "Cashflow",
    summary: "Plan, settle and report cash movements.",
  },
  {
    key: "banking",
    href: "/products/banking-payments",
    icon: "Landmark",
    name: "Banking & Payments",
    summary: "Accounts, statements and matching in one workspace.",
  },
  {
    key: "spend",
    href: "/products/spend-settlements",
    icon: "CreditCard",
    name: "Spend & Settlements",
    summary: "Outgoing spend and partial settlements.",
  },
  {
    key: "ledger",
    href: "/products/ledger",
    icon: "BookOpen",
    name: "Ledger",
    summary: "Chart of accounts, journals and fiscal periods.",
  },
  {
    key: "projects",
    href: "/products/projects",
    icon: "BriefcaseBusiness",
    name: "Projects",
    summary: "Cost and revenue by project.",
  },
  {
    key: "departments",
    href: "/products/departments",
    icon: "Building2",
    name: "Departments",
    summary: "Department allocation and reporting.",
  },
  {
    key: "crm",
    href: "/products/crm",
    icon: "Users",
    name: "CRM",
    summary: "A directory for every counterparty.",
  },
  {
    key: "inventory",
    href: "/products/inventory",
    icon: "Boxes",
    name: "Inventory",
    summary: "Item master data and quantities on hand.",
  },
];

export type PlatformLink = {
  key: "solutions" | "pricing" | "ai" | "security";
  href: string;
  icon: IconName;
  titleKey: string;
  descKey: string;
};

export const PLATFORM_LINKS: PlatformLink[] = [
  {
    key: "solutions",
    href: "/solutions",
    icon: "Globe",
    titleKey: "nav.solutions",
    descKey: "megaMenu.solutions",
  },
  {
    key: "pricing",
    href: "/pricing",
    icon: "FileText",
    titleKey: "nav.pricing",
    descKey: "megaMenu.pricing",
  },
  {
    key: "ai",
    href: "/docs/ai-connections",
    icon: "Sparkles",
    titleKey: "megaMenu.aiTitle",
    descKey: "megaMenu.ai",
  },
  {
    key: "security",
    href: "/docs/roles-and-audit",
    icon: "ShieldCheck",
    titleKey: "megaMenu.securityTitle",
    descKey: "megaMenu.security",
  },
];

export function getProductLink(key: ProductKey): ProductLink {
  return PRODUCT_LINKS.find((product) => product.key === key) ?? PRODUCT_LINKS[0];
}
