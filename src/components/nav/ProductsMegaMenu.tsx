"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PLATFORM_LINKS, PRODUCT_LINKS } from "@/content/products";
import { useT } from "@/components/i18n/I18nProvider";
import { cn } from "@/lib/cn";

const PANEL_ID = "products-mega-menu";
const SIGNUP_HREF = "/signup?intent=signup&plan=free";

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
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
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
      enter="transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enterFrom="opacity-0 -translate-y-2 scale-[0.99]"
      enterTo="opacity-100 translate-y-0 scale-100"
      leave="transition duration-120 ease-out"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
    >
      <div
        id={PANEL_ID}
        ref={panelRef}
        className="fixed left-1/2 top-17 z-50 w-[min(66rem,calc(100vw-2rem))] -translate-x-1/2 origin-top"
        onMouseEnter={openNow}
        onMouseLeave={scheduleClose}
      >
        <div className="grid overflow-hidden rounded-2xl border border-(--line) bg-white shadow-[0_40px_90px_-30px_rgba(32,32,32,0.4)] lg:grid-cols-[1fr_19rem]">
          <div className="flex flex-col p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--muted)">
                {t("megaMenu.products")}
              </p>
              <Link
                href="/solutions"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-(--ink) underline-offset-4 hover:underline"
              >
                {t("megaMenu.allSolutions")}
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-4 grid gap-1 sm:grid-cols-2">
              {PRODUCT_LINKS.map((product) => (
                <Link
                  key={product.key}
                  href={product.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-(--canvas) focus-visible:bg-(--canvas) focus-visible:outline-none"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--canvas) text-(--ink) ring-1 ring-(--line) transition-colors group-hover:bg-white group-hover:text-(--brand-strong)">
                    <Icon name={product.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-sm font-semibold text-(--ink)">{t(`products.items.${product.key}.title`)}</span>
                    <span className="mt-0.5 block text-xs leading-5 text-(--muted)">
                      {t(`products.items.${product.key}.desc`)}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-(--line) pt-4">
              {PLATFORM_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--ink-soft) transition-colors hover:text-(--ink)"
                >
                  <Icon name={link.icon} className="h-3.5 w-3.5 text-(--muted)" />
                  {t(link.titleKey)}
                </Link>
              ))}
            </div>
          </div>

          <aside className="flex flex-col bg-(--ink) p-5 text-white sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
              {t("megaMenu.startTitle")}
            </p>

            <div className="mt-4 grid gap-2">
              {[
                { href: "/personal", title: t("nav.personal"), desc: t("megaMenu.personalDesc") },
                { href: "/business", title: t("nav.business"), desc: t("megaMenu.businessDesc") },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 p-3.5 transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{item.title}</span>
                    <span className="mt-0.5 block text-xs leading-5 text-white/55">{item.desc}</span>
                  </span>
                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                    className="shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Button href={SIGNUP_HREF} className="w-full" dataCta="mega-start-free">
                {t("megaMenu.startCta")}
                <ArrowRight size={15} aria-hidden="true" />
              </Button>
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-white/60 transition-colors hover:text-white"
              >
                {t("megaMenu.comparePlans")}
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </Transition>
  );

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none",
          open ? "text-(--ink)" : "text-(--muted) hover:text-(--ink)",
        )}
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
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}
