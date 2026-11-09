import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav/Navbar";
import Container from "@/components/ui/Container";
import Link from "next/link";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";

import { getServerI18n } from "@/i18n/server";
import { I18nProvider } from "@/components/i18n/I18nProvider";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const OG_IMAGE_PATH = "/opengraph-image";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();

  const siteUrl = process.env.SITE_URL ?? "https://www.spifex.com";
  const base = new URL(siteUrl);

  const title = t("meta.siteTitle");
  const description = t("meta.siteDescription");

  return {
    metadataBase: base,
    title: {
      default: title,
      template: "%s · Spifex",
    },
    description,
    applicationName: "Spifex",
    category: "business software",
    keywords: [
      "financial operations software",
      "cash flow management",
      "banking visibility",
      "settlements",
      "financial reporting",
      "AI cash flow connector",
      "MCP",
    ],
    openGraph: {
      type: "website",
      url: "/",
      title,
      description,
      siteName: "Spifex",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "Spifex financial operations",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      other: process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : undefined,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/logo192.png",
    },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, messages, t } = await getServerI18n();

  return (
    <html lang={locale} className="h-full">
      <body
        className={`${inter.className} min-h-screen overflow-y-auto no-scrollbar nav:overflow-y-visible nav:[scrollbar-width:auto]`}
      >
        <I18nProvider locale={locale} messages={messages}>
          <AnalyticsProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />

              <main className="flex-1">{children}</main>

              <footer className="border-t border-[var(--line)] bg-[#fbfaf7] pb-[env(safe-area-inset-bottom)]">
                <Container className="py-12">
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
                    <div>
                      <div className="text-lg font-semibold tracking-tight text-[var(--ink)]">Spifex</div>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
                        Financial operations for cash flow, banking, settlements, reporting and
                        governance.
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Product</p>
                      <div className="mt-3 flex flex-col gap-2 text-sm">
                        <Link href="/personal" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.personal")}</Link>
                        <Link href="/business" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.business")}</Link>
                        <Link href="/solutions" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.solutions")}</Link>
                        <Link href="/pricing" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.pricing")}</Link>
                        <Link href="/docs/connect-chatgpt-claude" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">AI connections</Link>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Resources</p>
                      <div className="mt-3 flex flex-col gap-2 text-sm">
                        <Link href="/docs" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.docs")}</Link>
                        <Link href="/blog" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.blog")}</Link>
                        <Link href="/customers" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.customers")}</Link>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Company</p>
                      <div className="mt-3 flex flex-col gap-2 text-sm">
                        <Link href="/legal" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">{t("nav.legal")}</Link>
                        <Link href="/legal/privacy" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">Privacy</Link>
                        <Link href="/legal/user_terms" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">Terms</Link>
                        <Link href="/legal/cookie_notice" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">Cookies</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Spifex. {t("footer.rights")}</span>
                    <span>Spifex is financial operations software, not a bank.</span>
                  </div>
                </Container>
              </footer>
            </div>
          </AnalyticsProvider>
        </I18nProvider>
      </body>
    </html>
  );
}