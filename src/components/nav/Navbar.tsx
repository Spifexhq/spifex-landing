"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import ProductsMegaMenu from "@/components/nav/ProductsMegaMenu";
import { Button } from "@/components/ui/Button";
import { DASHBOARD_URLS, NAV_ITEMS } from "@/content/navigation";
import { useT } from "@/components/i18n/I18nProvider";

function Wordmark() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/icon/logo.svg" alt="Spifex logo" width={24} height={24} />
      <span className="text-2xl font-semibold tracking-tight text-slate-900">Spifex</span>
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-15">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            onClick={() => setMobileOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            <ProductsMegaMenu />

            <Link href="/#solutions" className="text-sm px-2 py-1 font-medium text-slate-700 hover:text-slate-900">
              {t("nav.solutions")}
            </Link>

            <Link href="/#customers" className="text-sm px-2 py-1 font-medium text-slate-700 hover:text-slate-900">
              {t("nav.customers")}
            </Link>

            {/* Option A (recommended): NAV_ITEMS uses i18n keys */}
            {NAV_ITEMS.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="text-sm px-2 py-1 font-medium text-slate-700 hover:text-slate-900"
              >
                {t(it.i18nKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={DASHBOARD_URLS.signin} variant="ghost" size="sm">
            {t("nav.signin")}
          </Button>
          <Button href={DASHBOARD_URLS.signup} variant="primary" size="sm">
            {t("nav.signup")}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={t("nav.toggleMenu")}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.home")}
              </Link>

              <Link
                href="/pricing"
                className="text-sm font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.pricing")}
              </Link>

              <Link
                href="/legal"
                className="text-sm font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.legal")}
              </Link>

              <Link
                href="/blog"
                className="text-sm font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.blog")}
              </Link>

              <div className="flex gap-2 pt-2">
                <Button href={DASHBOARD_URLS.signin} variant="secondary" size="sm" className="w-full">
                  {t("nav.signin")}
                </Button>
                <Button href={DASHBOARD_URLS.signup} variant="primary" size="sm" className="w-full">
                  {t("nav.signup")}
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
