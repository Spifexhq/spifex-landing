import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav/Navbar";
import Container from "@/components/ui/Container";
import Link from "next/link";

import { getServerI18n } from "@/i18n/server";
import { I18nProvider } from "@/components/i18n/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerI18n();

  return {
    title: t("meta.siteTitle"),
    description: t("meta.siteDescription"),
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, messages, t } = await getServerI18n();

  return (
    <html lang={locale} className="h-full">
      <body className={`${inter.className} min-h-screen`}>
        <I18nProvider locale={locale} messages={messages}>
          {/* Page shell */}
          <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Grow to fill remaining height */}
            <main className="flex-1">{children}</main>

            <footer className="border-t border-slate-200 bg-white">
              <Container className="py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-slate-600">
                    © {new Date().getFullYear()} Spifex. {t("footer.rights")}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm font-medium">
                    <Link href="/pricing" className="text-slate-700 hover:text-slate-900">
                      {t("nav.pricing")}
                    </Link>
                    <Link href="/legal" className="text-slate-700 hover:text-slate-900">
                      {t("nav.legal")}
                    </Link>
                    <Link href="/blog" className="text-slate-700 hover:text-slate-900">
                      {t("nav.blog")}
                    </Link>
                  </div>
                </div>
              </Container>
            </footer>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
