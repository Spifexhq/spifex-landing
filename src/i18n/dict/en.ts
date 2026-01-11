const en = {
  common: {
    learnMore: "Learn more",
    viewPricing: "View pricing",
  },

  nav: {
    products: "Products",
    solutions: "Solutions",
    customers: "Customers",
    pricing: "Pricing",
    legal: "Legal",
    blog: "Blog",
    signin: "Sign in",
    signup: "Sign up",
    home: "Home",
    toggleMenu: "Toggle menu",
  },

  legal: {
    title: "Legal",
    toc: "Table of Contents",
    disclaimer: "Disclaimer: This page is a structural template and not legal advice.",
  },

  blog: {
    indexTitle: "Blog",
    indexSubtitle: "Insights on financial operations, cashflow, governance, and automation.",
    searchPlaceholder: "Search",
    clearSearch: "Clear search",
    filter: "Filter",
    topic: "Topic",
    filterAll: "All topics",
    applyFilter: "Filter",
    activeFilter: "Active filter",
    noActiveFilter: "No active filter",
    clearFilter: "Clear filter",
    noResults: "No posts found for the current search/filter.",
    breadcrumbBlog: "Blog",
    breadcrumbArticles: "Articles",
    seriesDefault: "Spifex Blog",
  },

  products: {
    groups: { products: "Products", workflows: "Workflows", platform: "Platform" },
    items: {
      cashflow: { title: "Cashflow", desc: "Plan inflows and outflows, forecast scenarios, and track execution in real time." },
      banking: { title: "Banking & Payments", desc: "Centralize bank accounts, pay vendors, and manage transfers with built-in controls." },
      spend: { title: "Spend & Settlements", desc: "Standardize approvals, settlements, and internal movement of funds." },
      ledger: { title: "Ledger", desc: "Chart of accounts, classification, and audit-ready financial structure." },
      projects: { title: "Projects", desc: "Attribute costs and revenues to initiatives with full traceability and KPIs." },
      departments: { title: "Departments", desc: "Budget ownership, accountability, and operational governance by team." },
      crm: { title: "CRM", desc: "Connect pipeline signals to cashflow visibility and planning." },
      inventory: { title: "Inventory", desc: "Link operational inputs to financial outcomes without disconnected silos." },
      reconciliation: { title: "Reconciliation", desc: "Close the loop from planned to actual with structured matching." },
      automation: { title: "Accounting automation", desc: "Reduce manual work and keep finance data consistent across modules." },
      kpis: { title: "Reporting & KPIs", desc: "Dashboards and indicators to keep teams aligned on what matters." },
      integrations: { title: "Integrations", desc: "Connect Spifex to your tools and standardize the data backbone." },
      intelligence: { title: "Intelligence", desc: "Actionable insights for operators to spot risks and opportunities early." },
      governance: { title: "Governance", desc: "Role-based access, audit trails, and organization-scoped structure." },
      global: { title: "Global-ready", desc: "Multi-stream operations designed for scale and complexity." },
    },
    footer: "One platform for cashflow, payments, governance, and performance.",
    explore: "Explore platform",
  },

  home: {
    hero: {
      title: "Complete control over cash flow, payments, and performance",
      subtitle:
        "Settlements, transfers, reconciliation, and KPI-driven reporting. Leaders make decisions with confidence.",
      emailPlaceholder: "Enter your work email",
      ctaPrimary: "Get started",
      disclaimer:
        "By continuing, you agree to receive emails related to onboarding and product updates. You can unsubscribe at any time.",
    },

    features: {
      title: "Finance that runs like operations",
      subtitle: "Spifex connects teams, workflows, and data so leaders can act with speed and certainty.",
      items: {
        moneyLifecycle: {
          title: "Full money lifecycle",
          desc: "From planned cash movements to settlements, transfers, and reconciliation. Unified end-to-end.",
        },
        complexity: {
          title: "Built for operational complexity",
          desc: "Manage multiple revenue and cost streams with standardization, automation, and traceability.",
        },
        governance: {
          title: "Governance by default",
          desc: "Role-based access, audit trails, and organization-scoped structures keep teams aligned and compliant.",
        },
        kpiExecution: {
          title: "KPI-driven execution",
          desc: "Dashboards and indicators keep everyone focused on the metrics that move the business.",
        },
      },
    },

    modules: {
      title: "Modular by design. Unified by data.",
      subtitle: "Cashflow, Banking, Ledger, Projects, Departments, CRM, and Inventory. Built to work together.",
    },

    customers: {
      title: "Built for operationally complex businesses",
      subtitle:
        "Especially teams managing multiple streams of revenue and costs, where automation, traceability, and real-time visibility are essential to scale efficiently.",
      chips: {
        multiStreamRevenue: "Multi-stream revenue",
        vendorHeavyOps: "Vendor-heavy operations",
        projectCostAttribution: "Project-based cost attribution",
      },
    },

    cta: {
      title: "Bring clarity, speed, and governance to your financial operations.",
      subtitle: "Consolidate planning, execution, reconciliation, and reporting in a single operating layer.",
      primary: "Sign up",
      secondary: "View pricing",
    },
  },
  meta: {
    siteTitle: "Spifex, financial operations unified",
    siteDescription:
      "A modern financial operations platform that gives businesses complete control of cash flow, payments, and operational performance in one place.",
  },
  footer: {
    rights: "All rights reserved.",
  },
} as const;

export default en;
