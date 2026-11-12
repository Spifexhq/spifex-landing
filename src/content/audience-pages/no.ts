import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const no: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Programvare for privatøkonomi med planlegging og kontroll",
    metaDescription:
      "Spifex Privat kobler transaksjoner, bankkontoer, budsjetter, mål og rapportering i ett arbeidsområde for privatøkonomi. Start gratis.",
    eyebrow: "Spifex Privat",
    title: "Privatøkonomi med klarheten til et driftssystem",
    description:
      "Planlegg det som kommer, følg det som har skjedd, og forstå den samlede posisjonen din på tvers av kontoer, kategorier, budsjetter og mål – uten å sy sammen regneark.",
    primaryLabel: "Start Privat gratis",
    proof: "Gratisplan tilgjengelig. Ingen kredittkort nødvendig.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Se alle kontoer på ett sted",
        description:
          "Legg til personlige bankkontoer, følg saldoer og hold overføringer adskilt fra inntekts- og utgiftstotaler.",
      },
      {
        title: "Planlegg med budsjetter og mål",
        description:
          "Opprett budsjetter og mål, følg fremdriften og juster planen når hverdagen endrer seg.",
      },
      {
        title: "Forstå transaksjonshistorikken",
        description:
          "Filtrer transaksjoner på dato, kategori, konto, retning og oppgjørsstatus.",
      },
      {
        title: "Avstem delbetalinger",
        description:
          "Registrer hele eller delvise oppgjør mot kontoer og hold det utestående beløpet korrekt.",
      },
      {
        title: "Rapporter uten å bygge opp data på nytt",
        description:
          "Gå gjennom utestående og oppgjorte posisjoner, kategorier og økonomiske indikatorer fra samme arbeidsområde.",
      },
      {
        title: "Spør en AI-assistent",
        description:
          "Koble til ChatGPT eller Claude med lesetilgang for å oppsummere transaksjoner og kategorier.",
      },
    ],
    workflow: [
      {
        title: "Opprett ditt private arbeidsområde",
        description: "Velg land og valuta, og start på planen Personal Free.",
      },
      {
        title: "Legg til kontoer og kategorier",
        description:
          "Ta med kontoene og kategoriene du allerede bruker, og juster dem over tid.",
      },
      {
        title: "Planlegg, gjør opp og gå gjennom",
        description:
          "Bruk budsjetter, mål, oppgjør og rapporter for å holde det samlede bildet oppdatert.",
      },
    ],
    faq: [
      {
        question: "Hva inkluderer Personal Free?",
        answer:
          "Personal Free inkluderer ett privat arbeidsområde, 250 transaksjoner per måned, to bankkontoer, 25 kategorier, tre budsjetter, tre mål og to lagrede visninger.",
      },
      {
        question: "Når bør jeg gå over til Personal Starter eller Pro?",
        answer:
          "Gå opp når du trenger flere transaksjoner per måned, flere bankkontoer, større kategori- og budsjettbiblioteker eller flere lagrede visninger og vedlegg.",
      },
      {
        question: "Kan jeg bruke både private og bedriftsmessige arbeidsområder?",
        answer:
          "Ja. Én Spifex-konto kan eie flere arbeidsområder på tvers av begge produktkategoriene og bytte mellom dem.",
      },
      {
        question: "Endrer AI-assistenten dataene mine?",
        answer:
          "Nei. AI-tilkoblingene er kun for lesing og ber bare om omfanget cashflow:read.",
      },
    ],
    otherLabel: "Utforsk Spifex Bedrift",
    labels: {
      comparePlans: "Sammenlign planer",
      outcomesEyebrow: "Dette kan du gjøre",
      outcomesTitle: "En tydelig driftsmodell for måten du håndterer penger på",
      outcomesDescription:
        "Hvert resultat nedenfor bygger på en implementert Spifex-arbeidsflyt, ikke på en fremtidig roadmap-post.",
      howEyebrow: "Slik fungerer det",
      howTitle: "Start smått. Legg til struktur etter hvert.",
      questionsEyebrow: "Spørsmål",
      questionsTitle: "Før du velger en plan",
      finalTitle: "Start gratis. Oppgrader først når driften trenger mer plass.",
    },
  },

  business: {
    metaTitle: "Programvare for bedriftens økonomidrift",
    metaDescription:
      "Spifex Bedrift kobler kontantstrøm, bank, oppgjør, hovedboksstruktur, prosjekter, avdelinger og rapportering med rollebaserte kontroller. Start gratis.",
    eyebrow: "Spifex Bedrift",
    title: "Ett driftslag for bedriftens økonomiske drift",
    description:
      "Planlegg kontantstrøm, koble til banken, avstem oppgjør, strukturer hovedboken og rapporter per prosjekt eller avdeling – med rollene og kontrollene et økonomiteam trenger.",
    primaryLabel: "Start Bedrift gratis",
    proof: "Gratisplan tilgjengelig. Ingen kredittkort nødvendig.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planlegg og gjennomfør kontantstrøm",
        description:
          "Opprett planlagte poster, gjør opp mot bankkontoer og hold utestående saldoer oppdatert.",
      },
      {
        title: "Koble til bank og kontoutskrifter",
        description:
          "Legg til bankkontoer, importer kontoutskrifter og avstem bevegelser med reell dokumentasjon.",
      },
      {
        title: "Fordel kostnad og eierskap",
        description:
          "Bruk prosjekter, avdelinger og enheter til å forklare hvor penger planlegges og brukes.",
      },
      {
        title: "Strukturer hovedboken",
        description:
          "Vedlikehold hovedbokskontoer og posteringsstruktur slik at rapporteringen forblir konsistent.",
      },
      {
        title: "Styr tilgang etter rolle",
        description:
          "Bruk rollene eier, admin og medlem med tillatelser avgrenset til arbeidsområdet og livssykluskontroller.",
      },
      {
        title: "Rapporter med KPI-innsikt",
        description:
          "Gå gjennom kontantstrøm-, oppgjørs- og driftsindikatorer fra de samme filtrerte dataene.",
      },
    ],
    workflow: [
      {
        title: "Opprett bedriftsarbeidsområdet ditt",
        description: "Angi arbeidsområdets land og valuta, og start på planen Business Free.",
      },
      {
        title: "Legg til driftsstrukturen",
        description:
          "Legg til kontoer, kategorier, prosjekter, avdelinger, medlemmer og hovedbokskontoer.",
      },
      {
        title: "Driv med kontroller",
        description:
          "Planlegg, gjør opp, avstem og rapporter med rollebaserte tilgangskontroller.",
      },
    ],
    faq: [
      {
        question: "Hva inkluderer Business Free?",
        answer:
          "Business Free inkluderer ett arbeidsområde, 1 000 kontantstrømsposter per måned, to bankkontoer, ett medlem, to prosjekter, ti hovedbokskontoer og to importer av kontoutskrifter per måned.",
      },
      {
        question: "Hva endres på Starter og Pro?",
        answer:
          "Starter hever grensene for poster, bank, medlemmer, prosjekter, hovedbok og kontoutskrifter. Pro fjerner grensene for kjerne-arbeidsflytene og gir opptil seks eide arbeidsområder.",
      },
      {
        question: "Erstatter Spifex regnskapsprogrammet mitt?",
        answer:
          "Spifex er driftslaget for kontantstrøm, bankoversikt, oppgjør, styring og rapportering. Det utfyller lovpålagt regnskap i stedet for å erstatte det.",
      },
      {
        question: "Kan jeg koble til ChatGPT eller Claude?",
        answer:
          "Ja. Bedriftsarbeidsområder støtter skrivebeskyttede AI-tilkoblinger med OAuth og omfanget cashflow:read.",
      },
    ],
    otherLabel: "Utforsk Spifex Privat",
    labels: {
      comparePlans: "Sammenlign planer",
      outcomesEyebrow: "Dette kan du gjøre",
      outcomesTitle: "En tydelig driftsmodell for måten du håndterer penger på",
      outcomesDescription:
        "Hvert resultat nedenfor bygger på en implementert Spifex-arbeidsflyt, ikke på en fremtidig roadmap-post.",
      howEyebrow: "Slik fungerer det",
      howTitle: "Start smått. Legg til struktur etter hvert.",
      questionsEyebrow: "Spørsmål",
      questionsTitle: "Før du velger en plan",
      finalTitle: "Start gratis. Oppgrader først når driften trenger mer plass.",
    },
  },
};

export default no;
