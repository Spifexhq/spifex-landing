import type { Metadata } from "next";

import { ProductPage } from "@/components/products/ProductPage";
import { PRODUCT_PAGE_CONTENT } from "@/content/product-pages";
import { pageMetadata } from "@/lib/seo/metadata";

const content = PRODUCT_PAGE_CONTENT.crm;

export const metadata: Metadata = pageMetadata({
  title: content.copy.title,
  description: content.copy.subtitle,
  path: content.href,
});

export default function ProductLandingPage() {
  return <ProductPage content={content} />;
}
