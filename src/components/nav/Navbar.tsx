"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import ProductsMegaMenu from "@/components/nav/ProductsMegaMenu";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { DASHBOARD_URLS, NAV_ITEMS } from "@/content/navigation";
import { PRODUCT_LINKS } from "@/content/products";
import { useT } from "@/components/i18n/I18nProvider";
import { cn } from "@/lib/cn";

const DRAWER_ID = "mobile-nav-drawer";
const SIGNUP_HREF = "/signup?intent=signup&plan=free";

function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <Image src="/icon/logo.svg" alt="" aria-hidden="true" width={22} height={22} />
      <span className="text-[17px] font-semibold tracking-[-0.02em] text-[var(--ink)]">Spifex</span>
    </span>
  );
}

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const t = useT();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);

  const minSwipeDistance = 50;

  const closeDrawer = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen, closeDrawer]);

  const onTouchStart = (event: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event: React.TouchEvent) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    if (touchEnd - touchStart > minSwipeDistance) closeDrawer();
  };

  const explore = [
    { href: "/solutions", key: "nav.solutions" },
    { href: "/pricing", key: "nav.pricing" },
    { href: "/docs", key: "nav.docs" },
    { href: "/docs/connect-chatgpt-claude", key: "megaMenu.aiTitle" },
    { href: "/customers", key: "nav.customers" },
    { href: "/blog", key: "nav.blog" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 hidden border-b border-[var(--line)] bg-white/85 backdrop-blur-xl nav:block">
        <Container className="flex h-16 items-center gap-8">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-1">
            <ProductsMegaMenu />
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30",
                    active ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]",
                  )}
                >
                  {t(item.i18nKey)}
                  {active ? (
                    <span
                      className="absolute inset-x-3 -bottom-[18px] h-[2px] rounded-full bg-[var(--brand)]"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <Button href={DASHBOARD_URLS.signin} variant="ghost" size="sm">
              {t("nav.signin")}
            </Button>
            <Button href={SIGNUP_HREF} variant="primary" size="sm" dataCta="nav-start-free">
              {t("nav.startFree")}
            </Button>
          </div>
        </Container>
      </header>

      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-[var(--line)] bg-white/90 px-4 backdrop-blur-xl nav:hidden">
        <Link
          href="/"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
        >
          <Wordmark />
        </Link>

        <div className="flex items-center gap-2">
          <Button href={SIGNUP_HREF} size="sm" dataCta="mobile-bar-start-free">
            {t("nav.startFree")}
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={t("nav.toggleMenu")}
            aria-expanded={mobileOpen}
            aria-controls={DRAWER_ID}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-[var(--ink)] transition-colors hover:bg-[var(--canvas)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
          >
            <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-[var(--ink)]/40 backdrop-blur-[2px] transition-opacity duration-300 nav:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        id={DRAWER_ID}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.menu")}
        inert={!mobileOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col bg-white shadow-[-24px_0_60px_-24px_rgba(32,32,32,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] nav:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--line)] px-4">
          <span className="text-sm font-semibold text-[var(--ink)]">{t("nav.menu")}</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeDrawer}
            aria-label={t("nav.closeMenu")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-[var(--canvas)] hover:text-[var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
          >
            <X className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6 pt-5">
          <div className="grid gap-2">
            <Button
              href={SIGNUP_HREF}
              size="lg"
              className="w-full"
              dataCta="mobile-nav-start-free"
            >
              {t("nav.startFree")}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href={DASHBOARD_URLS.signin} variant="secondary" className="w-full">
              {t("nav.signin")}
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {[
              { href: "/personal", title: t("nav.personal"), desc: t("megaMenu.personalDesc") },
              { href: "/business", title: t("nav.business"), desc: t("megaMenu.businessDesc") },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-[var(--line)] bg-[var(--canvas)] p-3.5 transition-colors hover:border-[#d7d1c8] hover:bg-white"
              >
                <span className="block text-sm font-semibold text-[var(--ink)]">{item.title}</span>
                <span className="mt-1 block text-[11px] leading-4 text-[var(--muted)]">{item.desc}</span>
              </Link>
            ))}
          </div>

          <section className="mt-7" aria-labelledby="mobile-products-heading">
            <p
              id="mobile-products-heading"
              className="px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
            >
              {t("megaMenu.products")}
            </p>
            <ul className="mt-2">
              {PRODUCT_LINKS.map((product) => (
                <li key={product.key}>
                  <Link
                    href={product.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-[var(--canvas)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--canvas)] text-[var(--ink)] ring-1 ring-[var(--line)] group-hover:bg-white">
                      <Icon name={product.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium text-[var(--ink-soft)] group-hover:text-[var(--ink)]">
                      {product.name}
                    </span>
                    <ChevronRight size={14} className="text-[var(--muted)]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-7 border-t border-[var(--line)] pt-5" aria-labelledby="mobile-explore-heading">
            <p
              id="mobile-explore-heading"
              className="px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
            >
              {t("megaMenu.platform")}
            </p>
            <ul className="mt-2">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-2 py-2.5 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--canvas)] hover:text-[var(--ink)]"
                  >
                    {t(item.key)}
                    <ChevronRight size={14} className="text-[var(--muted)]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex shrink-0 items-center gap-4 border-t border-[var(--line)] px-6 py-4 text-xs text-[var(--muted)]">
          <Link href="/legal" className="hover:text-[var(--ink)]" onClick={() => setMobileOpen(false)}>
            {t("nav.legal")}
          </Link>
          <Link
            href="/legal/cookie_notice"
            className="hover:text-[var(--ink)]"
            onClick={() => setMobileOpen(false)}
          >
            {t("cookiesBanner.policy")}
          </Link>
        </div>
      </aside>
    </>
  );
}
