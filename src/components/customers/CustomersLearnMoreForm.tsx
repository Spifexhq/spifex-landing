"use client";

import { useMemo, useState } from "react";
import { useT } from "@/components/i18n/I18nProvider";
import { cn } from "@/lib/cn";

type OptionKey =
  | "beta"
  | "coCreation"
  | "userGroup"
  | "speak"
  | "reference"
  | "networking"
  | "other";

const OPTION_KEYS: OptionKey[] = [
  "beta",
  "coCreation",
  "userGroup",
  "speak",
  "reference",
  "networking",
  "other",
];

export default function CustomersLearnMoreForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  const options = useMemo(
    () =>
      OPTION_KEYS.map((k) => ({
        key: k,
        label: t(`customersLearnMore.form.options.${k}`),
      })),
    [t]
  );

  if (submitted) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-lg font-semibold text-slate-900">
          {t("customersLearnMore.form.thanksTitle")}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {t("customersLearnMore.form.thanksSubtitle")}
        </p>
      </div>
    );
  }

  const inputClass = cn(
    "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none",
    "placeholder:text-slate-400",
    // thinner focus feel
    "focus:border-slate-300 focus:ring-0"
  );

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {t("customersLearnMore.form.title")}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-900">
            {t("customersLearnMore.form.firstName")}
          </label>
          <input className={cn("mt-2", inputClass)} />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-900">
            {t("customersLearnMore.form.lastName")}
          </label>
          <input className={cn("mt-2", inputClass)} />
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold text-slate-900">
            {t("customersLearnMore.form.workEmail")}
          </label>
          <input type="email" autoComplete="email" className={cn("mt-2", inputClass)} />
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold text-slate-900">
            {t("customersLearnMore.form.company")}
          </label>
          <input className={cn("mt-2", inputClass)} />
        </div>

        <div className="sm:col-span-2">
          <div className="text-sm font-semibold text-slate-900">
            {t("customersLearnMore.form.optionsLabel")}
          </div>

          <div className="mt-4 space-y-3">
            {options.map((o) => (
              <label key={o.key} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded-md border border-slate-300"
                />
                <span className="text-sm leading-relaxed text-slate-700">
                  {o.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2 pt-2">
          <button
            type="submit"
            className={cn(
              "h-12 w-full rounded-2xl bg-orange-600 px-5 text-sm font-semibold text-white",
              "hover:bg-orange-700 focus:outline-none focus:ring-0"
            )}
          >
            {t("customersLearnMore.form.submit")}
          </button>

          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            {t("customersLearnMore.form.disclaimer")}
          </p>
        </div>
      </div>
    </form>
  );
}
