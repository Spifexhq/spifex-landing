import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const da: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software til privatøkonomi med planlægning og kontrol",
    metaDescription:
      "Spifex Privat forbinder posteringer, bankkonti, budgetter, mål og rapportering i ét arbejdsområde til din privatøkonomi. Start gratis.",
    eyebrow: "Spifex Privat",
    title: "Privatøkonomi med overblik som i et driftssystem",
    description:
      "Planlæg det, der kommer, følg det, der er sket, og forstå din samlede position på tværs af konti, kategorier, budgetter og mål – uden at lappe regneark sammen.",
    primaryLabel: "Start Privat gratis",
    proof: "Gratis plan tilgængelig. Intet kreditkort påkrævet.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Se alle konti ét sted",
        description:
          "Tilføj private bankkonti, følg saldi og hold overførsler adskilt fra indtægts- og udgiftstotaler.",
      },
      {
        title: "Planlæg med budgetter og mål",
        description:
          "Opret budgetter og mål, følg udviklingen, og juster planen, når hverdagen ændrer sig.",
      },
      {
        title: "Forstå posteringshistorikken",
        description:
          "Filtrér posteringer på dato, kategori, konto, retning og afregningsstatus.",
      },
      {
        title: "Afstem delbetalinger",
        description:
          "Registrér hele eller delvise afregninger mod konti, og hold det udestående beløb korrekt.",
      },
      {
        title: "Rapportér uden at genopbygge data",
        description:
          "Følg udestående og afregnede positioner, kategorier og økonomiske indikatorer i samme arbejdsområde.",
      },
      {
        title: "Spørg en AI-assistent",
        description:
          "Forbind ChatGPT eller Claude med skrivebeskyttet adgang for at opsummere posteringer og kategorier.",
      },
    ],
    workflow: [
      {
        title: "Opret dit private arbejdsområde",
        description: "Vælg land og valuta, og start på planen Personal Free.",
      },
      {
        title: "Tilføj konti og kategorier",
        description:
          "Tag de konti og kategorier med, som du allerede bruger, og justér dem over tid.",
      },
      {
        title: "Planlæg, afregn og følg op",
        description:
          "Brug budgetter, mål, afregninger og rapporter til at holde det samlede billede aktuelt.",
      },
    ],
    faq: [
      {
        question: "Hvad indeholder Personal Free?",
        answer:
          "Personal Free omfatter et privat arbejdsområde, 250 posteringer pr. måned, to bankkonti, 25 kategorier, tre budgetter, tre mål og to gemte visninger.",
      },
      {
        question: "Hvornår skal jeg skifte til Personal Starter eller Pro?",
        answer:
          "Skift op, når du har brug for flere posteringer pr. måned, flere bankkonti, større kategori- og budgetbiblioteker eller flere gemte visninger og bilag.",
      },
      {
        question: "Kan jeg bruge både private og erhvervsmæssige arbejdsområder?",
        answer:
          "Ja. Én Spifex-konto kan eje flere arbejdsområder på tværs af begge produktkategorier og skifte mellem dem.",
      },
      {
        question: "Ændrer AI-assistenten mine data?",
        answer:
          "Nej. AI-forbindelser er skrivebeskyttede og anmoder kun om omfanget cashflow:read.",
      },
    ],
    otherLabel: "Udforsk Spifex Erhverv",
    labels: {
      comparePlans: "Sammenlign planer",
      outcomesEyebrow: "Det kan du gøre",
      outcomesTitle: "En tydelig driftsmodel for den måde, du styrer økonomien på",
      outcomesDescription:
        "Hvert resultat nedenfor bygger på en implementeret Spifex-arbejdsgang, ikke på en fremtidig roadmap-post.",
      howEyebrow: "Sådan fungerer det",
      howTitle: "Start småt. Tilføj struktur, i takt med at du vokser.",
      questionsEyebrow: "Spørgsmål",
      questionsTitle: "Før du vælger en plan",
      finalTitle: "Start gratis. Opgrader først, når driften har brug for mere plads.",
    },
  },

  business: {
    metaTitle: "Software til erhvervsmæssig økonomidrift",
    metaDescription:
      "Spifex Erhverv forbinder cashflow, bank, afregninger, hovedbogsstruktur, projekter, afdelinger og rapportering med rollebaserede kontroller. Start gratis.",
    eyebrow: "Spifex Erhverv",
    title: "Ét driftslag for virksomhedens økonomiske drift",
    description:
      "Planlæg cashflow, forbind banken, afstem afregninger, strukturér hovedbogen og rapportér pr. projekt eller afdeling – med de roller og kontroller, et økonomiteam har brug for.",
    primaryLabel: "Start Erhverv gratis",
    proof: "Gratis plan tilgængelig. Intet kreditkort påkrævet.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planlæg og gennemfør cashflow",
        description:
          "Opret planlagte posteringer, afregn mod bankkonti, og hold udestående saldi aktuelle.",
      },
      {
        title: "Forbind bank og kontoudtog",
        description:
          "Tilføj bankkonti, importér kontoudtog, og afstem bevægelser med reel dokumentation.",
      },
      {
        title: "Fordel omkostninger og ejerskab",
        description:
          "Brug projekter, afdelinger og enheder til at forklare, hvor penge planlægges og bruges.",
      },
      {
        title: "Sæt struktur på hovedbogen",
        description:
          "Vedligehold hovedbokskonti og posteringsstruktur, så rapporteringen forbliver konsistent.",
      },
      {
        title: "Styr adgang efter rolle",
        description:
          "Brug rollerne ejer, admin og medlem med tilladelser afgrænset til arbejdsområdet og livscyklusstyring.",
      },
      {
        title: "Rapportér med KPI-overblik",
        description:
          "Følg cashflow-, afregnings- og driftsindikatorer i de samme filtrerede data.",
      },
    ],
    workflow: [
      {
        title: "Opret dit erhvervsarbejdsområde",
        description: "Angiv arbejdsområdets land og valuta, og start på planen Business Free.",
      },
      {
        title: "Tilføj din driftsstruktur",
        description:
          "Tilføj konti, kategorier, projekter, afdelinger, medlemmer og hovedbokskonti.",
      },
      {
        title: "Driv med kontroller",
        description:
          "Planlæg, afregn, afstem og rapportér med rollebaserede adgangskontroller.",
      },
    ],
    faq: [
      {
        question: "Hvad indeholder Business Free?",
        answer:
          "Business Free omfatter ét arbejdsområde, 1.000 cashflowposteringer pr. måned, to bankkonti, ét medlem, to projekter, ti hovedbokskonti og to imports af kontoudtog pr. måned.",
      },
      {
        question: "Hvad ændrer sig på Starter og Pro?",
        answer:
          "Starter hæver grænserne for posteringer, bank, medlemmer, projekter, hovedbog og kontoudtog. Pro fjerner grænserne for de centrale arbejdsgange og giver op til seks egne arbejdsområder.",
      },
      {
        question: "Erstatter Spifex mit regnskabsprogram?",
        answer:
          "Spifex er driftslaget for cashflow, bankoverblik, afregninger, styring og rapportering. Det supplerer det lovpligtige regnskab i stedet for at erstatte det.",
      },
      {
        question: "Kan jeg forbinde ChatGPT eller Claude?",
        answer:
          "Ja. Erhvervsarbejdsområder understøtter skrivebeskyttede AI-forbindelser med OAuth og omfanget cashflow:read.",
      },
    ],
    otherLabel: "Udforsk Spifex Privat",
    labels: {
      comparePlans: "Sammenlign planer",
      outcomesEyebrow: "Det kan du gøre",
      outcomesTitle: "En tydelig driftsmodel for den måde, du styrer økonomien på",
      outcomesDescription:
        "Hvert resultat nedenfor bygger på en implementeret Spifex-arbejdsgang, ikke på en fremtidig roadmap-post.",
      howEyebrow: "Sådan fungerer det",
      howTitle: "Start småt. Tilføj struktur, i takt med at du vokser.",
      questionsEyebrow: "Spørgsmål",
      questionsTitle: "Før du vælger en plan",
      finalTitle: "Start gratis. Opgrader først, når driften har brug for mere plads.",
    },
  },
};

export default da;
