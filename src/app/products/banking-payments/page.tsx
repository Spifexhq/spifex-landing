import type { Metadata } from "next";

import { ProductPage } from "@/components/products/ProductPage";
import { PRODUCT_PAGE_CONTENT, getProductPageContent } from "@/content/product-pages";
import { pageMetadata } from "@/lib/seo/metadata";
import { getServerI18n } from "@/i18n/server";

const content = PRODUCT_PAGE_CONTENT.banking;

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerI18n();
  const localized = getProductPageContent("banking", locale);

  return pageMetadata({
    title: localized.copy.title,
    description: localized.copy.subtitle,
    path: content.href,
  });
}

export default function ProductLandingPage() {
  return <ProductPage content={content} />;
}
