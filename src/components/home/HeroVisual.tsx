"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import {
  Bot,
  ChartNoAxesCombined,
  Check,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  RefreshCw,
  Search,
  Sparkles,
  UsersRound,
  Wallet,
} from "lucide-react";

const RAIL_ICONS = [LayoutDashboard, ChartNoAxesCombined, Landmark, RefreshCw, UsersRound] as const;

const UPCOMING = [
  { label: "Vendor payout", amount: "€12,400", dot: "bg-[#d97706]" },
  { label: "Payroll", amount: "€28,900", dot: "bg-[#f46a35]" },
  { label: "Card settlement", amount: "€6,120", dot: "bg-[#16a34a]" },
] as const;

export default function HeroVisual({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const px = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const py = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--px", px.toFixed(3));
        element.style.setProperty("--py", py.toFixed(3));
      });
    };

    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      element.style.setProperty("--px", "0");
      element.style.setProperty("--py", "0");
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", reset);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-visual relative mx-auto w-full max-w-[1280px] px-3 pb-6 sm:px-6 sm:pb-8 lg:px-8"
      style={{ "--px": "0", "--py": "0" } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-[300px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[var(--brand)]/15 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-6 left-[14%] h-24 w-52 rounded-[50%] bg-[var(--teal)]/10 blur-[70px]"
        aria-hidden="true"
      />

      <div
        role="img"
        aria-label={label}
        className="hero-tilt relative mx-auto w-full max-w-[960px]"
      >
        <div className="hero-dash-entrance relative">
          <div className="hero-dash relative overflow-hidden rounded-[12px] border border-black/[0.08] bg-[#fbfaf8] text-[#202020] shadow-[0_60px_150px_-40px_rgba(0,0,0,0.95)] sm:rounded-[16px]">
            {/* App chrome */}
            <div className="flex h-9 items-center gap-2 border-b border-black/[0.06] px-3 sm:h-10 sm:px-4">
              <div className="flex items-center gap-[3px]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#e7a48b]" />
                <span className="h-[6px] w-[6px] rounded-full bg-[#e8cf9a]" />
                <span className="h-[6px] w-[6px] rounded-full bg-[#a9d8c8]" />
              </div>
              <div className="ml-1.5 flex min-w-0 items-center gap-1.5 text-[9px] text-[#5f6b7d] sm:text-[10px]">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] bg-[#202020] text-[7px] font-bold text-white">
                  S
                </span>
                <span className="hidden font-medium text-[#202020] sm:inline">Spifex</span>
                <span className="text-black/25">/</span>
                <span className="truncate font-medium text-[#202020]">Cash flow</span>
                <span className="hidden rounded-full bg-[var(--brand-soft)] px-1.5 py-[2px] text-[7px] font-semibold text-[var(--brand-strong)] sm:inline">
                  Business
                </span>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-1.5">
                <span className="hidden items-center gap-1 rounded-md border border-black/[0.07] bg-white px-1.5 py-1 text-[8px] text-[#5f6b7d] sm:flex">
                  <Search size={9} aria-hidden="true" />
                  Search
                  <span className="ml-1 rounded bg-[#f3f0ea] px-1 text-[7px]">⌘K</span>
                </span>
                <span className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e8e5df] to-[#d6d0c8]" />
              </div>
            </div>

            <div className="flex">
              {/* Icon rail */}
              <div className="hidden w-9 shrink-0 flex-col items-center gap-0.5 border-r border-black/[0.06] py-2.5 sm:flex">
                {RAIL_ICONS.map((Icon, index) => (
                  <span
                    key={index}
                    className={[
                      "flex h-6 w-6 items-center justify-center rounded-md",
                      index === 0 ? "bg-[#202020] text-white" : "text-[#5f6b7d]",
                    ].join(" ")}
                  >
                    <Icon size={11} aria-hidden="true" />
                  </span>
                ))}
                <span className="mt-auto flex h-6 w-6 items-center justify-center rounded-md text-[#5f6b7d]">
                  <Bot size={11} aria-hidden="true" />
                </span>
              </div>

              <div className="min-w-0 flex-1 p-2.5 sm:p-3.5 lg:p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold tracking-[-0.01em] sm:text-[13px]">
                        Cash flow
                      </span>
                      <span className="flex items-center gap-1 rounded-full border border-[#cbe9d8] bg-[#effaf3] px-1.5 py-[2px] text-[7px] font-semibold uppercase tracking-[0.1em] text-[#15803d]">
                        <span className="hero-live-dot h-[3px] w-[3px] rounded-full bg-[#16a34a]" />
                        Live
                      </span>
                    </div>
                    <p className="mt-0.5 text-[8px] text-[#5f6b7d] sm:text-[9px]">
                      January · All accounts · EUR
                    </p>
                  </div>

                  <div className="flex shrink-0 rounded-md border border-black/[0.08] bg-white p-[2px] text-[7px] font-semibold text-[#6b7280] sm:text-[8px]">
                    <span className="rounded-[4px] px-1.5 py-1">Personal</span>
                    <span className="rounded-[4px] bg-[#202020] px-1.5 py-1 text-white">Business</span>
                  </div>
                </div>

                {/* KPIs */}
                <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                  <div className="col-span-2 rounded-md border border-black/[0.06] bg-white px-2 py-1.5 sm:col-span-1 sm:px-2.5 sm:py-2">
                    <p className="text-[7px] uppercase tracking-[0.1em] text-[#5f6b7d] sm:text-[8px]">
                      Cash position
                    </p>
                    <p className="mt-0.5 text-[14px] font-semibold tabular-nums tracking-[-0.02em] sm:text-[17px]">
                      €482.9k
                    </p>
                    <p className="text-[7px] font-medium text-[#15803d] sm:text-[8px]">+8.2% vs plan</p>
                  </div>
                  <div className="rounded-md border border-black/[0.06] bg-white px-2 py-1.5 sm:px-2.5 sm:py-2">
                    <p className="text-[7px] uppercase tracking-[0.1em] text-[#5f6b7d] sm:text-[8px]">
                      Planned
                    </p>
                    <p className="mt-0.5 text-[12px] font-semibold tabular-nums tracking-[-0.02em] sm:text-[15px]">
                      €164.2k
                    </p>
                  </div>
                  <div className="rounded-md border border-black/[0.06] bg-white px-2 py-1.5 sm:px-2.5 sm:py-2">
                    <p className="text-[7px] uppercase tracking-[0.1em] text-[#5f6b7d] sm:text-[8px]">
                      Settled
                    </p>
                    <p className="mt-0.5 text-[12px] font-semibold tabular-nums tracking-[-0.02em] sm:text-[15px]">
                      €138.7k
                    </p>
                  </div>
                </div>

                <div className="mt-2 grid gap-1.5 sm:grid-cols-[1.55fr_.9fr]">
                  {/* Chart */}
                  <div className="rounded-md border border-black/[0.06] bg-white p-2 sm:p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-semibold sm:text-[10px]">Plan vs settled</span>
                      <div className="flex items-center gap-2 text-[7px] text-[#5f6b7d] sm:text-[8px]">
                        <span className="flex items-center gap-1">
                          <span className="h-1 w-3 rounded-full bg-[var(--brand)]" />
                          Settled
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1 w-3 rounded-full bg-[#d8d3cb]" />
                          Planned
                        </span>
                      </div>
                    </div>

                    <svg
                      viewBox="0 0 560 150"
                      className="mt-1.5 h-[88px] w-full sm:h-[120px]"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="hero-chart-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f46a35" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#f46a35" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {[24, 60, 96, 132].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="560"
                          y2={y}
                          stroke="#eeeae4"
                          strokeWidth="1"
                        />
                      ))}

                      <path
                        d="M0,124 C48,120 74,112 118,104 C170,94 196,100 246,86 C296,72 326,76 372,62 C418,48 456,56 498,44 C520,38 540,36 552,34 L552,150 L0,150 Z"
                        fill="url(#hero-chart-area)"
                        className="hero-chart-area"
                      />
                      <path
                        d="M0,108 C60,102 92,94 140,96 C196,98 220,84 280,78 C340,72 372,64 420,58 C468,52 512,48 552,42"
                        fill="none"
                        stroke="#d8d3cb"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M0,124 C48,120 74,112 118,104 C170,94 196,100 246,86 C296,72 326,76 372,62 C418,48 456,56 498,44 C520,38 540,36 552,34"
                        fill="none"
                        stroke="#f46a35"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        pathLength={1}
                        className="hero-chart-line"
                      />
                      <line
                        x1="372"
                        y1="16"
                        x2="372"
                        y2="150"
                        stroke="#f46a35"
                        strokeOpacity="0.2"
                        strokeDasharray="3 4"
                      />
                      <circle cx="372" cy="62" r="9" fill="#f46a35" opacity="0.12" className="hero-chart-ping" />
                      <circle cx="372" cy="62" r="3" fill="#f46a35" />
                    </svg>

                    <div className="mt-1 flex justify-between px-0.5 text-[7px] text-[#6b7280] sm:text-[8px]">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>

                  {/* Side panel */}
                  <div className="hidden rounded-md border border-black/[0.06] bg-white p-2.5 sm:block">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-semibold">Settlement health</span>
                      <span className="text-[7px] text-[#5f6b7d]">This month</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2.5">
                      <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90" aria-hidden="true">
                        <circle cx="22" cy="22" r="17" fill="none" stroke="#eeeae4" strokeWidth="4" />
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#f46a35"
                          strokeWidth="4"
                          strokeLinecap="round"
                          pathLength={100}
                          strokeDasharray="100"
                          strokeDashoffset="100"
                          className="hero-ring"
                        />
                      </svg>
                      <div>
                        <p className="text-[15px] font-semibold tabular-nums tracking-[-0.02em]">82%</p>
                        <p className="text-[7px] text-[#5f6b7d]">Matched to bank</p>
                      </div>
                    </div>

                    <div className="mt-2 space-y-1">
                      {UPCOMING.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-1 text-[7.5px]"
                        >
                          <span className="flex min-w-0 items-center gap-1 text-[#4b5563]">
                            <span className={`h-1 w-1 shrink-0 rounded-full ${item.dot}`} />
                            <span className="truncate">{item.label}</span>
                          </span>
                          <span className="font-medium tabular-nums text-[#202020]">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal workspace card */}
        <div className="hero-float-left absolute -left-[140px] top-[150px] hidden w-[160px] min-[1280px]:block">
          <div className="hero-float-in" style={{ animationDelay: "1.05s" }}>
            <div className="hero-idle rounded-xl border border-white/10 bg-[#151515]/95 p-3 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,.9)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] font-semibold">
                  <Wallet size={12} className="text-[var(--brand)]" aria-hidden="true" />
                  Personal
                </span>
                <span className="rounded-full bg-white/10 px-1.5 py-[2px] text-[7px] uppercase tracking-[0.1em] text-white/70">
                  Live
                </span>
              </div>

              <p className="mt-2.5 text-[7px] uppercase tracking-[0.12em] text-white/65">
                Monthly budget
              </p>
              <p className="text-[19px] font-semibold tabular-nums tracking-[-0.03em]">68%</p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="hero-bar h-full w-[68%] rounded-full bg-[var(--brand)]" />
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[7.5px] text-white/70">
                <span>Goals</span>
                <span>3 of 4 on track</span>
              </div>
              <div className="mt-1 flex gap-1">
                <span className="h-1 flex-1 rounded-full bg-[var(--teal)]" />
                <span className="h-1 flex-1 rounded-full bg-[var(--teal)]" />
                <span className="h-1 flex-1 rounded-full bg-[var(--teal)]" />
                <span className="h-1 flex-1 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>

        {/* AI summary card */}
        <div className="hero-float-right absolute -right-[176px] top-[190px] hidden w-[182px] min-[1360px]:block">
          <div className="hero-float-in" style={{ animationDelay: "1.2s" }}>
            <div className="hero-idle rounded-xl border border-white/10 bg-[#141414]/95 p-3 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,.9)] backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--brand)]/15 text-[var(--brand)]">
                  <Sparkles size={12} aria-hidden="true" />
                </span>
                <span className="text-[10px] font-semibold">AI cash-flow summary</span>
              </div>

              <p className="mt-2 text-[8.5px] leading-4 text-white/75">
                “Settlements are 82% matched. Three payouts remain outstanding this week.”
              </p>

              <div className="mt-2 flex items-center gap-1 text-[7px] uppercase tracking-[0.1em] text-[var(--teal)]">
                <LockKeyhole size={9} aria-hidden="true" />
                Read-only · cashflow:read
              </div>
            </div>
          </div>
        </div>

        {/* Settlement confirmation chip */}
        <div className="absolute -bottom-3 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="hero-float-in" style={{ animationDelay: "1.4s" }}>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white px-3 py-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,.8)]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#eef9f2] text-[#16a34a]">
                <Check size={10} aria-hidden="true" />
              </span>
              <span className="text-[8px] font-semibold text-[#202020]">Settlement matched</span>
              <span className="text-[8px] tabular-nums text-[#6b7280]">€18,420.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
