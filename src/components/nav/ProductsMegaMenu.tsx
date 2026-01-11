"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import { PRODUCTS_MENU } from "@/content/products";
import { Icon } from "@/components/ui/Icon";
import { useT } from "@/components/i18n/I18nProvider";

export default function ProductsMegaMenu() {
  const t = useT();

  const [open, setOpen] = useState(false);
  const [hoverTrigger, setHoverTrigger] = useState(false);
  const [hoverPanel, setHoverPanel] = useState(false);

  const closeTimer = useRef<number | null>(null);

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
    closeTimer.current = window.setTimeout(() => {
      // close only if we're not hovering trigger nor panel
      if (!hoverTrigger && !hoverPanel) setOpen(false);
    }, 80);
  }

  // Keep it responsive to state changes
  useEffect(() => {
    if (!open) return;
    // if both are false while open, close quickly
    if (!hoverTrigger && !hoverPanel) scheduleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverTrigger, hoverPanel, open]);

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
        aria-haspopup="menu"
        aria-expanded={open}
        onMouseEnter={() => {
          setHoverTrigger(true);
          openNow();
        }}
        onMouseLeave={() => {
          setHoverTrigger(false);
          scheduleClose();
        }}
        onFocus={() => {
          setHoverTrigger(true);
          openNow();
        }}
        onBlur={() => {
          setHoverTrigger(false);
          scheduleClose();
        }}
        onClick={() => setOpen((v) => !v)} // keeps keyboard usable
      >
        {t("nav.products")}
        <ChevronDown className="h-4 w-4" />
      </button>

      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-120"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        {/* Full-width positioning layer ignores pointer so "outside panel" counts as outside */}
        <div className="fixed inset-x-0 top-16 z-50 pointer-events-none" role="menu">
          <Container>
            {/* The actual panel receives pointer events */}
            <div
              className="
                pointer-events-auto
                w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl
                max-h-[calc(100dvh-4rem)]
                flex flex-col
              "
              onMouseEnter={() => {
                setHoverPanel(true);
                openNow();
              }}
              onMouseLeave={() => {
                setHoverPanel(false);
                scheduleClose();
              }}
            >
              {/* Scroll ONLY this area; footer stays visible */}
              <div className="flex-1 overflow-auto overscroll-contain">
                <div className="grid gap-0 md:grid-cols-3">
                  {PRODUCTS_MENU.map((group) => (
                    <div key={group.groupKey} className="p-5">
                      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {t(`products.groups.${group.groupKey}`)}
                      </div>

                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.key}
                            href={item.href}
                            className="flex gap-3 rounded-xl p-3 hover:bg-slate-50"
                            onClick={() => setOpen(false)}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                              <Icon name={item.icon} className="h-5 w-5 shrink-0 text-slate-900" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-slate-900">
                                {t(`products.items.${item.key}.title`)}
                              </div>
                              <div className="mt-0.5 text-sm text-slate-600">
                                {t(`products.items.${item.key}.desc`)}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4">
                <div className="text-sm text-slate-600">{t("products.footer")}</div>
                <Link href="/#platform" className="text-sm font-semibold text-slate-900 hover:underline">
                  {t("products.explore")}
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </Transition>
    </div>
  );
}
