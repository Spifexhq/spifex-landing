import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Create your Spifex account",
  description: "Create a Spifex workspace and start with the Free plan.",
  path: "/signup",
  noIndex: true,
});

export default function SignupLayout({ children }: { children: ReactNode }) {
  return children;
}
