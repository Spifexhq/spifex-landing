"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Home, Layers3, Users, BadgeDollarSign, Menu, X } from "lucide-react";

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

type MobileItem = {
  href: string;
  ariaLabel: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function MobileNavButton({
  href,
  ariaLabel,
  Icon,
  active,
}: MobileItem & { active: boolean }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={[
        "inline-flex h-11 w-11 items-center justify-center rounded-xl",
        "transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
        active
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
      ].join(" ")}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

export default function Navbar() {
  const t = useT();
  const pathname = usePathname();

  // Mobile sidebar state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Freeze background when sidebar is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Right-to-left drawer: close on RIGHT swipe (user drags drawer towards right)
  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;

    const distance = touchEnd - touchStart; // positive = swipe right
    const isRightSwipe = distance > minSwipeDistance;

    if (isRightSwipe) setMobileOpen(false);
  };

  // Bottom mobile nav items
  const mobileItems: MobileItem[] = [
    { href: "/", ariaLabel: "Home", Icon: Home },
    { href: "/solutions", ariaLabel: "Solutions", Icon: Layers3 },
    { href: "/customers", ariaLabel: "Clients", Icon: Users },
    { href: "/pricing", ariaLabel: "Pricing", Icon: BadgeDollarSign },
  ];

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <header className="hidden nav:block sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
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

          <div className="hidden items-center gap-2 nav:flex">
            <Button href={DASHBOARD_URLS.signin} variant="ghost" size="sm">
              {t("nav.signin")}
            </Button>
            <Button href={DASHBOARD_URLS.signup} variant="primary" size="sm">
              {t("nav.signup")}
            </Button>
          </div>
        </Container>
      </header>

      {/* Mobile floating logo (top-left) */}
      <Link
        href="/"
        aria-label="Spifex home"
        onClick={() => setMobileOpen(false)}
        className={[
          "nav:hidden",
          "fixed z-50",
          "left-[max(1rem,env(safe-area-inset-left))]",
          "top-[max(1rem,env(safe-area-inset-top))]",
          "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
          "border border-slate-200 bg-white/90 shadow-lg backdrop-blur",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
        ].join(" ")}
      >
        <Image src="/icon/logo.svg" alt="" aria-hidden="true" width={22} height={22} />
      </Link>

      {/* Mobile floating menu button (top-right) */}
      <button
        type="button"
        aria-label={t("nav.toggleMenu")}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className={[
          "nav:hidden",
          "fixed z-50",
          "right-[max(1rem,env(safe-area-inset-right))]",
          "top-[max(1rem,env(safe-area-inset-top))]",
          "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
          "border border-slate-200 bg-white/90 shadow-lg backdrop-blur",
          "text-slate-700 hover:bg-slate-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
        ].join(" ")}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      <div
        className={[
          "nav:hidden",
          "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar (opens from right to left) */}
      <aside
        className={[
          "nav:hidden",
          "fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl",
          "transform transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <Link
              href="/"
              className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              onClick={() => setMobileOpen(false)}
            >
              <Wordmark />
            </Link>

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
            <div className="flex flex-col gap-2" onClick={() => setMobileOpen(false)}>
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

      {/* Mobile Floating Bottom Navbar */}
      <nav
        className={[
          "nav:hidden",
          "fixed left-1/2 z-40 -translate-x-1/2",
          "bottom-[calc(1rem+env(safe-area-inset-bottom))]",
        ].join(" ")}
        aria-label="Mobile"
      >
        <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white/90 px-2 py-2 shadow-lg backdrop-blur">
          {mobileItems.map((it) => {
            const active =
              it.href === "/"
                ? pathname === "/"
                : pathname === it.href || pathname.startsWith(`${it.href}/`);

            return (
              <MobileNavButton
                key={it.href}
                href={it.href}
                ariaLabel={it.ariaLabel}
                Icon={it.Icon}
                active={active}
              />
            );
          })}
        </div>
      </nav>
    </>
  );
}
