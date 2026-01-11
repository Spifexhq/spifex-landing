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
  | "inventory"
  | "reconciliation"
  | "automation"
  | "kpis"
  | "integrations"
  | "intelligence"
  | "governance"
  | "global";

export type MegaMenuItem = {
  key: ProductKey;
  href: string;
  icon: IconName;
};

export type MegaMenuGroup = {
  groupKey: "products" | "workflows" | "platform";
  items: MegaMenuItem[];
};

export const PRODUCTS_MENU: MegaMenuGroup[] = [
  {
    groupKey: "products",
    items: [
      { key: "cashflow", href: "/products/cashflow", icon: "ArrowLeftRight" },
      { key: "banking", href: "/products/banking-payments", icon: "Landmark" },
      { key: "spend", href: "/products/spend-settlements", icon: "CreditCard" },
      { key: "ledger", href: "/products/ledger", icon: "BookOpen" },
      { key: "projects", href: "/products/projects", icon: "BriefcaseBusiness" },
      { key: "departments", href: "/products/departments", icon: "Building2" },
      { key: "crm", href: "/products/crm", icon: "Users" },
      { key: "inventory", href: "/products/inventory", icon: "Boxes" },
    ],
  },
  {
    groupKey: "workflows",
    items: [
      { key: "reconciliation", href: "/#reconciliation", icon: "FileText" },
      { key: "automation", href: "/#automation", icon: "BookOpen" },
      { key: "kpis", href: "/#kpis", icon: "FileText" },
    ],
  },
  {
    groupKey: "platform",
    items: [
      { key: "integrations", href: "/#integrations", icon: "Plug" },
      { key: "intelligence", href: "/#intelligence", icon: "Sparkles" },
      { key: "governance", href: "/#governance", icon: "ShieldCheck" },
      { key: "global", href: "/#global", icon: "Globe" },
    ],
  },
];
