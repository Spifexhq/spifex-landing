import type { Locale } from "@/lib/location/markets";

export type PreviewLabels = {
  businessWorkspace: string;
  livePreview: string;
  thisMonth: string;
  lastSixMonths: string;
  illustrative: string;
  onTrack: string;
  needsAttention: string;
  inProgress: string;
};

/**
 * Chrome labels for the illustrative product preview. Kept in a small dedicated
 * map so the preview stays translated without duplicating the main dictionaries.
 */
export const PREVIEW_LABELS: Record<Locale, PreviewLabels> = {
  en: {
    businessWorkspace: "Business workspace",
    livePreview: "Live preview",
    thisMonth: "This month",
    lastSixMonths: "Last 6 months",
    illustrative: "Illustrative workspace preview",
    onTrack: "On track",
    needsAttention: "Needs attention",
    inProgress: "In progress",
  },
  pt: {
    businessWorkspace: "Espaço de trabalho empresarial",
    livePreview: "Pré-visualização em direto",
    thisMonth: "Este mês",
    lastSixMonths: "Últimos 6 meses",
    illustrative: "Pré-visualização ilustrativa do espaço de trabalho",
    onTrack: "Em curso",
    needsAttention: "Requer atenção",
    inProgress: "Em progresso",
  },
  "pt-BR": {
    businessWorkspace: "Espaço de trabalho empresarial",
    livePreview: "Prévia ao vivo",
    thisMonth: "Este mês",
    lastSixMonths: "Últimos 6 meses",
    illustrative: "Prévia ilustrativa do espaço de trabalho",
    onTrack: "No prazo",
    needsAttention: "Precisa de atenção",
    inProgress: "Em andamento",
  },
  es: {
    businessWorkspace: "Espacio de trabajo de empresa",
    livePreview: "Vista previa en vivo",
    thisMonth: "Este mes",
    lastSixMonths: "Últimos 6 meses",
    illustrative: "Vista previa ilustrativa del espacio de trabajo",
    onTrack: "En curso",
    needsAttention: "Requiere atención",
    inProgress: "En progreso",
  },
  fr: {
    businessWorkspace: "Espace de travail professionnel",
    livePreview: "Aperçu en direct",
    thisMonth: "Ce mois-ci",
    lastSixMonths: "6 derniers mois",
    illustrative: "Aperçu illustratif de l’espace de travail",
    onTrack: "Dans les temps",
    needsAttention: "Attention requise",
    inProgress: "En cours",
  },
  de: {
    businessWorkspace: "Business-Workspace",
    livePreview: "Live-Vorschau",
    thisMonth: "Dieser Monat",
    lastSixMonths: "Letzte 6 Monate",
    illustrative: "Illustrative Workspace-Vorschau",
    onTrack: "Im Plan",
    needsAttention: "Aufmerksamkeit nötig",
    inProgress: "In Bearbeitung",
  },
  nl: {
    businessWorkspace: "Bedrijfswerkruimte",
    livePreview: "Live voorbeeld",
    thisMonth: "Deze maand",
    lastSixMonths: "Afgelopen 6 maanden",
    illustrative: "Illustratief werkruimtevoorbeeld",
    onTrack: "Op schema",
    needsAttention: "Aandacht nodig",
    inProgress: "In uitvoering",
  },
  it: {
    businessWorkspace: "Workspace aziendale",
    livePreview: "Anteprima live",
    thisMonth: "Questo mese",
    lastSixMonths: "Ultimi 6 mesi",
    illustrative: "Anteprima illustrativa del workspace",
    onTrack: "In linea",
    needsAttention: "Richiede attenzione",
    inProgress: "In corso",
  },
  pl: {
    businessWorkspace: "Obszar roboczy firmy",
    livePreview: "Podgląd na żywo",
    thisMonth: "Ten miesiąc",
    lastSixMonths: "Ostatnie 6 miesięcy",
    illustrative: "Ilustracyjny podgląd obszaru roboczego",
    onTrack: "Zgodnie z planem",
    needsAttention: "Wymaga uwagi",
    inProgress: "W toku",
  },
  sv: {
    businessWorkspace: "Företagsarbetsyta",
    livePreview: "Liveförhandsvisning",
    thisMonth: "Den här månaden",
    lastSixMonths: "Senaste 6 månaderna",
    illustrative: "Illustrativ arbetsytaförhandsvisning",
    onTrack: "Enligt plan",
    needsAttention: "Kräver uppmärksamhet",
    inProgress: "Pågår",
  },
  da: {
    businessWorkspace: "Virksomhedsarbejdsområde",
    livePreview: "Liveforhåndsvisning",
    thisMonth: "Denne måned",
    lastSixMonths: "Seneste 6 måneder",
    illustrative: "Illustrativ arbejdsområdeforhåndsvisning",
    onTrack: "På sporet",
    needsAttention: "Kræver opmærksomhed",
    inProgress: "I gang",
  },
  no: {
    businessWorkspace: "Bedriftsarbeidsområde",
    livePreview: "Forhåndsvisning i sanntid",
    thisMonth: "Denne måneden",
    lastSixMonths: "Siste 6 måneder",
    illustrative: "Illustrativ arbeidsområdeforhåndsvisning",
    onTrack: "I rute",
    needsAttention: "Krever oppmerksomhet",
    inProgress: "Pågår",
  },
  ca: {
    businessWorkspace: "Espai de treball d’empresa",
    livePreview: "Previsualització en directe",
    thisMonth: "Aquest mes",
    lastSixMonths: "Últims 6 mesos",
    illustrative: "Previsualització il·lustrativa de l’espai de treball",
    onTrack: "Al dia",
    needsAttention: "Requereix atenció",
    inProgress: "En curs",
  },
  ar: {
    businessWorkspace: "مساحة عمل الأعمال",
    livePreview: "معاينة مباشرة",
    thisMonth: "هذا الشهر",
    lastSixMonths: "آخر 6 أشهر",
    illustrative: "معاينة توضيحية لمساحة العمل",
    onTrack: "على المسار",
    needsAttention: "تحتاج إلى انتباه",
    inProgress: "قيد التنفيذ",
  },
  lb: {
    businessWorkspace: "Business-Arbeitsberäich",
    livePreview: "Live-Virschau",
    thisMonth: "Dëse Mount",
    lastSixMonths: "Lescht 6 Méint",
    illustrative: "Illustrativ Virschau vum Arbeitsberäich",
    onTrack: "Am Plang",
    needsAttention: "Opmierksamkeet néideg",
    inProgress: "An Aarbecht",
  },
};
