import type { Locale } from "@/lib/location/markets";

/**
 * Small per-locale labels for chrome that is not part of the main message
 * dictionaries. Keeping them here avoids duplicating large objects for a
 * handful of decorative strings.
 */
export const UI_LABELS: Record<Locale, { finalCtaEyebrow: string }> = {
  en: { finalCtaEyebrow: "Start with clarity" },
  pt: { finalCtaEyebrow: "Comece com clareza" },
  "pt-BR": { finalCtaEyebrow: "Comece com clareza" },
  es: { finalCtaEyebrow: "Empieza con claridad" },
  fr: { finalCtaEyebrow: "Commencez avec clarté" },
  de: { finalCtaEyebrow: "Mit Klarheit starten" },
  nl: { finalCtaEyebrow: "Begin met helderheid" },
  it: { finalCtaEyebrow: "Inizia con chiarezza" },
  pl: { finalCtaEyebrow: "Zacznij od jasności" },
  sv: { finalCtaEyebrow: "Börja med klarhet" },
  da: { finalCtaEyebrow: "Start med klarhed" },
  no: { finalCtaEyebrow: "Start med klarhet" },
  ca: { finalCtaEyebrow: "Comença amb claredat" },
  ar: { finalCtaEyebrow: "ابدأ بوضوح" },
  lb: { finalCtaEyebrow: "Mat Kloerheet ufänken" },
};
