"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PLATFORM_LINKS, PRODUCT_LINKS } from "@/content/products";
import { useT } from "@/components/i18n/I18nProvider";

const PANEL_ID = "products-mega-menu";

export default function ProductsMegaMenu() {
  const t = useT();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function openNow() {
    cancelClose();
    setOpen(true);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      cancelClose();
    };
  }, [open]);

  const panel = (
    <Transition
      as={Fragment}
      show={open}
      enter="transition duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enterFrom="opacity-0 -translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition duration-100 ease-out"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
    >
      <div
        id={PANEL_ID}
        ref={panelRef}
        className="fixed left-1/2 top-16 z-50 w-[min(68rem,calc(100vw-2rem))] -translate-x-1/2"
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
      >
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--line)] bg-white shadow-[0_30px_80px_-25px_rgba(32,32,32,0.28)]">
          <div className="grid lg:grid-cols-[1fr_20rem]">
            <div className="flex flex-col p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {t("megaMenu.products")}
                </p>
                <Link
                  href="/solutions"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
                >
                  {t("megaMenu.allSolutions")}
                  <ArrowUpRight size={12} aria-hidden="true" />
                </Link>
              </div>

              <div className="my-auto grid gap-0.5 pt-3 sm:grid-cols-2">
                {PRODUCT_LINKS.map((product) => (
                  <Link
                    key={product.key}
                    href={product.href}
                    onClick={() => setOpen(false)}
                    className="group flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-[var(--canvas)] focus-visible:bg-[var(--canvas)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-[var(--ink)]">
                      <Icon name={product.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-[var(--ink)]">
                        {t(`products.items.${product.key}.title`)}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-[var(--muted)]">
                        {product.summary}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--line)] bg-[var(--canvas)] px-4 py-3">
                <p className="text-xs leading-5 text-[var(--muted)]">{t("products.footer")}</p>
                <Link
                  href="/solutions"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)] underline-offset-4 hover:underline"
                >
                  {t("products.explore")}
                  <ArrowUpRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="border-t border-[var(--line)] bg-[var(--canvas)] p-4 sm:p-5 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {t("megaMenu.platform")}
              </p>

              <div className="mt-2 space-y-0.5">
                {PLATFORM_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex gap-2.5 rounded-lg p-2 transition-colors hover:bg-white"
                  >
                    <Icon
                      name={link.icon}
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-strong)]"
                    />
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-[var(--ink)]">
                        {t(link.titleKey)}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-4 text-[var(--muted)]">
                        {t(link.descKey)}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[var(--line)] bg-white p-4">
                <p className="text-sm font-semibold text-[var(--ink)]">
                  {t("megaMenu.startTitle")}
                </p>

                <div className="mt-3 grid gap-2">
                  <Link
                    href="/personal"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-[var(--line)] p-2.5 transition-colors hover:border-[#d7d1c8] hover:bg-[var(--canvas)]"
                  >
                    <span className="block text-[13px] font-semibold text-[var(--ink)]">
                      {t("nav.personal")}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-[var(--muted)]">
                      {t("megaMenu.personalDesc")}
                    </span>
                  </Link>
                  <Link
                    href="/business"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-[var(--line)] p-2.5 transition-colors hover:border-[#d7d1c8] hover:bg-[var(--canvas)]"
                  >
                    <span className="block text-[13px] font-semibold text-[var(--ink)]">
                      {t("nav.business")}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-[var(--muted)]">
                      {t("megaMenu.businessDesc")}
                    </span>
                  </Link>
                </div>

                <Button
                  href="/signup?intent=signup&plan=free"
                  size="sm"
                  className="mt-3 w-full"
                  dataCta="mega-start-free"
                >
                  {t("megaMenu.startCta")}
                  <ArrowRight size={14} aria-hidden="true" />
                </Button>

                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="mt-2.5 flex items-center justify-center gap-1 text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
                >
                  {t("megaMenu.comparePlans")}
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/30"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
        onFocus={openNow}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown") return;
          event.preventDefault();
          openNow();
          window.requestAnimationFrame(() => {
            panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
          });
        }}
        onClick={() => setOpen((value) => !value)}
      >
        {t("nav.products")}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}
