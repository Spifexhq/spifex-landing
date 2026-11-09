"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import ProductsMegaMenu from "@/components/nav/ProductsMegaMenu";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { DASHBOARD_URLS, NAV_ITEMS } from "@/content/navigation";
import { PRODUCT_LINKS } from "@/content/products";
import { useT } from "@/components/i18n/I18nProvider";

const DRAWER_ID = "mobile-nav-drawer";

function Wordmark() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/icon/logo.svg" alt="" aria-hidden="true" width={24} height={24} />
      <span className="text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">Spifex</span>
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

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

  return (
    <>
      <header className="sticky top-0 z-40 hidden border-b border-[var(--line)] bg-white/90 backdrop-blur nav:block">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
          >
            <Wordmark />
          </Link>

          <nav className="flex items-center gap-6" aria-label="Primary">
            <ProductsMegaMenu />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={[
                  "rounded-lg px-1 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]",
                ].join(" ")}
              >
                {t(item.i18nKey)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={DASHBOARD_URLS.signin} variant="ghost" size="sm">
              {t("nav.signin")}
            </Button>
            <Button
              href="/signup?intent=signup&plan=free"
              variant="primary"
              size="sm"
              dataCta="nav-start-free"
            >
              {t("nav.startFree")}
            </Button>
          </div>
        </Container>
      </header>

      <Link
        href="/"
        aria-label={t("nav.home")}
        onClick={() => setMobileOpen(false)}
        className="fixed left-[max(1rem,env(safe-area-inset-left))] top-[max(1rem,env(safe-area-inset-top))] z-40 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-white/95 shadow-[0_8px_24px_-12px_rgba(32,32,32,0.35)] backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 nav:hidden"
      >
        <Image src="/icon/logo.svg" alt="" aria-hidden="true" width={22} height={22} />
      </Link>

      <button
        ref={menuButtonRef}
        type="button"
        aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.toggleMenu")}
        aria-expanded={mobileOpen}
        aria-controls={DRAWER_ID}
        onClick={() => setMobileOpen((value) => !value)}
        className="fixed right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-40 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-white/95 text-[var(--ink)] shadow-[0_8px_24px_-12px_rgba(32,32,32,0.35)] backdrop-blur transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30 nav:hidden"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={[
          "fixed inset-0 z-50 bg-[var(--ink)]/45 backdrop-blur-sm transition-opacity duration-300 nav:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
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
        className={[
          "fixed right-0 top-0 z-50 flex h-[100dvh] w-[min(92vw,380px)] flex-col bg-white shadow-[-24px_0_70px_-30px_rgba(32,32,32,0.45)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] nav:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-[var(--line)] px-4">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
            onClick={() => setMobileOpen(false)}
          >
            <Wordmark />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-[var(--canvas)] hover:text-[var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
            onClick={closeDrawer}
            aria-label={t("nav.closeMenu")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4">
          <div className="grid gap-2">
            <Button
              href="/signup?intent=signup&plan=free"
              className="w-full"
              dataCta="mobile-nav-start-free"
            >
              {t("nav.startFree")}
            </Button>
            <Button href={DASHBOARD_URLS.signin} variant="secondary" className="w-full">
              {t("nav.signin")}
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <Link
              href="/personal"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-[var(--line)] bg-[var(--canvas)] p-3 transition-colors hover:border-[#d7d1c8]"
            >
              <span className="block text-sm font-semibold text-[var(--ink)]">{t("nav.personal")}</span>
              <span className="mt-1 block text-[11px] leading-4 text-[var(--muted)]">
                {t("megaMenu.personalDesc")}
              </span>
            </Link>
            <Link
              href="/business"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-[var(--line)] bg-[var(--canvas)] p-3 transition-colors hover:border-[#d7d1c8]"
            >
              <span className="block text-sm font-semibold text-[var(--ink)]">{t("nav.business")}</span>
              <span className="mt-1 block text-[11px] leading-4 text-[var(--muted)]">
                {t("megaMenu.businessDesc")}
              </span>
            </Link>
          </div>

          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              {t("megaMenu.products")}
            </p>
            <div className="mt-2 flex flex-col">
              {PRODUCT_LINKS.map((product) => (
                <Link
                  key={product.key}
                  href={product.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--canvas)] hover:text-[var(--ink)]"
                >
                  <Icon name={product.icon} className="h-4 w-4 shrink-0 text-[var(--brand-strong)]" />
                  <span className="min-w-0">{t(`products.items.${product.key}.title`)}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-[var(--line)] pt-3">
            <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              {t("megaMenu.platform")}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-0.5">
              {[
                { href: "/solutions", key: "nav.solutions" },
                { href: "/pricing", key: "nav.pricing" },
                { href: "/docs", key: "nav.docs" },
                { href: "/docs/connect-chatgpt-claude", key: "megaMenu.aiTitle" },
                { href: "/customers", key: "nav.customers" },
                { href: "/blog", key: "nav.blog" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between gap-1 rounded-lg px-2 py-2.5 text-[13px] font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--canvas)] hover:text-[var(--ink)]"
                >
                  <span className="min-w-0 truncate">{t(item.key)}</span>
                  <ChevronRight size={13} className="shrink-0 text-[var(--muted)]" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-[var(--line)] px-2 pb-2 pt-4">
            <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
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
          </div>
        </div>
      </aside>
    </>
  );
}
