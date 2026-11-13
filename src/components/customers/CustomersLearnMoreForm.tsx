"use client";

import { useMemo, useState } from "react";
import { useT } from "@/components/i18n/I18nProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox, Input } from "@/components/ui/Input";

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
    [t],
  );

  if (submitted) {
    return (
      <Card className="bg-(--canvas) p-8">
        <div className="text-lg font-semibold text-(--ink)">
          {t("customersLearnMore.form.thanksTitle")}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-(--muted)">
          {t("customersLearnMore.form.thanksSubtitle")}
        </p>
      </Card>
    );
  }

  return (
    <form
      className="rounded-2xl border border-(--line) bg-white p-6 shadow-[0_1px_2px_rgba(32,32,32,0.03)] sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="text-2xl font-semibold tracking-[-0.02em] text-(--ink)">
        {t("customersLearnMore.form.title")}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Input
          name="firstName"
          autoComplete="given-name"
          label={t("customersLearnMore.form.firstName")}
        />
        <Input
          name="lastName"
          autoComplete="family-name"
          label={t("customersLearnMore.form.lastName")}
        />
        <Input
          name="email"
          type="email"
          autoComplete="email"
          label={t("customersLearnMore.form.workEmail")}
          containerClassName="sm:col-span-2"
        />
        <Input
          name="company"
          autoComplete="organization"
          label={t("customersLearnMore.form.company")}
          containerClassName="sm:col-span-2"
        />

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold text-(--ink)">
            {t("customersLearnMore.form.optionsLabel")}
          </legend>
          <div className="mt-3 space-y-2.5">
            {options.map((option) => (
              <Checkbox key={option.key} name="interest" value={option.key} label={option.label} />
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <Button type="submit" className="w-full">
            {t("customersLearnMore.form.submit")}
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-(--muted)">
            {t("customersLearnMore.form.disclaimer")}
          </p>
        </div>
      </div>
    </form>
  );
}
