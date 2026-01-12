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
      <span className="text-2xl font-semibold tracking-tight text-slate-900">
        Spifex
      </span>
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
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

            <nav className="hidden items-center gap-10 nav:flex" aria-label="Primary">
              <ProductsMegaMenu />

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

          <div className="hidden items-center gap-2 nav:flex">
            <Button href={DASHBOARD_URLS.signin} variant="ghost" size="sm">
              {t("nav.signin")}
            </Button>
            <Button href={DASHBOARD_URLS.signup} variant="primary" size="sm">
              {t("nav.signup")}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 nav:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("nav.toggleMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 nav:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out nav:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <Wordmark />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileOpen(false)}
              aria-label={t("nav.toggleMenu")}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.home")}
              </Link>

              {NAV_ITEMS.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(it.i18nKey)}
                </Link>
              ))}

              <Link
                href="/legal"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.legal")}
              </Link>

              <Link
                href="/blog"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.blog")}
              </Link>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t border-slate-200 p-4">
            <div className="flex flex-col gap-2">
              <Button
                href={DASHBOARD_URLS.signin}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                {t("nav.signin")}
              </Button>
              <Button
                href={DASHBOARD_URLS.signup}
                variant="primary"
                size="sm"
                className="w-full"
              >
                {t("nav.signup")}
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}