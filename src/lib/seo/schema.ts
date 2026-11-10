import { SITE_NAME, SITE_URL } from "./metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/logo512.png`,
    description:
      "Spifex is a financial operations platform for cash flow, banking, settlements, reporting and governance.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/docs?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema(description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      description ||
      "Financial operations software for cash-flow planning, banking visibility, settlements, ledger structure and KPI reporting.",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Starter", price: "15", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Pro", price: "27", priceCurrency: "EUR" },
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  author = SITE_NAME,
  keywords = [],
  section,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  section?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const published = datePublished || dateModified;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [`${SITE_URL}/opengraph-image`],
    author: { "@type": "Organization", name: author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/logo512.png` },
    },
    ...(published ? { datePublished: published } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(keywords.length ? { keywords: keywords.join(", ") } : {}),
    ...(section ? { articleSection: section } : {}),
    inLanguage: "en",
  };
}
