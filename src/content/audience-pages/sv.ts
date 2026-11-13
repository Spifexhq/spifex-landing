import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const sv: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Privatekonomiprogram för planering och kontroll",
    metaDescription:
      "Spifex Privat kopplar samman transaktioner, bankkonton, budgetar, mål och rapportering i en arbetsyta för privatekonomi. Starta gratis.",
    eyebrow: "Spifex Privat",
    title: "Privatekonomi med samma tydlighet som ett affärssystem",
    description:
      "Planera det som kommer, följ det som har hänt och förstå din samlade position över konton, kategorier, budgetar och mål – utan att lappa ihop kalkylark.",
    primaryLabel: "Starta Privat gratis",
    proof: "Free-plan finns. Inget kreditkort krävs.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Se alla konton på ett ställe",
        description:
          "Lägg till privata bankkonton, följ saldon och håll överföringar åtskilda från intäkts- och utgiftstotaler.",
      },
      {
        title: "Planera med budgetar och mål",
        description:
          "Skapa budgetar och mål, följ utvecklingen och justera planen när vardagen förändras.",
      },
      {
        title: "Förstå transaktionshistoriken",
        description:
          "Filtrera transaktioner på datum, kategori, konto, riktning och avräkningsstatus.",
      },
      {
        title: "Stäm av delbetalningar",
        description:
          "Registrera hela eller delvisa avräkningar mot konton och håll det utestående beloppet korrekt.",
      },
      {
        title: "Rapportera utan att bygga om data",
        description:
          "Granska utestående och avräknade positioner, kategorier och finansiella indikatorer från samma arbetsyta.",
      },
      {
        title: "Fråga en AI-assistent",
        description:
          "Anslut ChatGPT eller Claude med skrivskyddad åtkomst för att sammanfatta transaktioner och kategorier.",
      },
    ],
    workflow: [
      {
        title: "Skapa din privata arbetsyta",
        description: "Välj land och valuta och börja på planen Personal Free.",
      },
      {
        title: "Lägg till konton och kategorier",
        description:
          "Ta in de konton och kategorier du redan använder och justera dem över tid.",
      },
      {
        title: "Planera, avräkna och granska",
        description:
          "Använd budgetar, mål, avräkningar och rapporter för att hålla hela bilden aktuell.",
      },
    ],
    faq: [
      {
        question: "Vad ingår i Personal Free?",
        answer:
          "Personal Free omfattar en privat arbetsyta, 250 transaktioner per månad, två bankkonton, 25 kategorier, tre budgetar, tre mål och två sparade vyer.",
      },
      {
        question: "När bör jag byta till Personal Starter eller Pro?",
        answer:
          "Byt upp när du behöver fler transaktioner per månad, fler bankkonton, större kategori- och budgetbibliotek eller fler sparade vyer och bilagor.",
      },
      {
        question: "Kan jag använda både privata och företagsarbetsytor?",
        answer:
          "Ja. Ett Spifex-konto kan äga flera arbetsytor inom båda produktkategorierna och växla mellan dem.",
      },
      {
        question: "Ändrar AI-assistenten mina data?",
        answer:
          "Nej. AI-anslutningarna är skrivskyddade och begär endast omfånget spifex:access.",
      },
    ],
    otherLabel: "Utforska Spifex Företag",
    labels: {
      comparePlans: "Jämför planer",
      outcomesEyebrow: "Det här kan du göra",
      outcomesTitle: "En tydlig operativ modell för hur du hanterar pengar",
      outcomesDescription:
        "Varje resultat nedan bygger på ett färdigt Spifex-arbetsflöde, inte på en framtida roadmap-post.",
      howEyebrow: "Så fungerar det",
      howTitle: "Börja litet. Lägg till struktur efter hand.",
      questionsEyebrow: "Frågor",
      questionsTitle: "Innan du väljer plan",
      finalTitle: "Starta gratis. Uppgradera först när verksamheten behöver mer utrymme.",
    },
  },

  business: {
    metaTitle: "Programvara för företagets finansiella drift",
    metaDescription:
      "Spifex Företag kopplar samman kassaflöde, bank, avräkningar, huvudboksstruktur, projekt, avdelningar och rapportering med rollbaserade kontroller. Starta gratis.",
    eyebrow: "Spifex Företag",
    title: "Ett gemensamt driftlager för företagets finansiella verksamhet",
    description:
      "Planera kassaflödet, koppla banken, stäm av avräkningar, strukturera huvudboken och rapportera per projekt eller avdelning – med de roller och kontroller ett finansteam behöver.",
    primaryLabel: "Starta Företag gratis",
    proof: "Free-plan finns. Inget kreditkort krävs.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planera och genomför kassaflödet",
        description:
          "Skapa planerade poster, avräkna mot bankkonton och håll utestående saldon aktuella.",
      },
      {
        title: "Koppla bank och kontoutdrag",
        description:
          "Lägg till bankkonton, importera kontoutdrag och stäm av förflyttningar med verkligt underlag.",
      },
      {
        title: "Fördela kostnad och ansvar",
        description:
          "Använd projekt, avdelningar och bolag för att förklara var pengar planeras och spenderas.",
      },
      {
        title: "Strukturera huvudboken",
        description:
          "Underhåll huvudbokskonton och bokföringsstruktur så att rapporteringen förblir konsekvent.",
      },
      {
        title: "Styr åtkomst med roller",
        description:
          "Använd rollerna ägare, administratör och medlem med behörigheter avgränsade till arbetsytan och livscykelkontroller.",
      },
      {
        title: "Rapportera med KPI-insyn",
        description:
          "Granska kassaflödes-, avräknings- och driftsindikatorer från samma filtrerade data.",
      },
    ],
    workflow: [
      {
        title: "Skapa din företagsarbetsyta",
        description: "Ange arbetsytans land och valuta och börja på planen Business Free.",
      },
      {
        title: "Lägg till din operativa struktur",
        description:
          "Lägg till konton, kategorier, projekt, avdelningar, medlemmar och huvudbokskonton.",
      },
      {
        title: "Driv verksamheten med kontroller",
        description:
          "Planera, avräkna, stäm av och rapportera med rollbaserade åtkomstkontroller.",
      },
    ],
    faq: [
      {
        question: "Vad ingår i Business Free?",
        answer:
          "Business Free omfattar en arbetsyta, 1 000 kassaflödesposter per månad, två bankkonton, en medlem, två projekt, tio huvudbokskonton och två kontoutdragsimport per månad.",
      },
      {
        question: "Vad förändras i Starter och Pro?",
        answer:
          "Starter höjer gränserna för poster, bankkonton, medlemmar, projekt, huvudbok och kontoutdrag. Pro tar bort gränserna för kärnarbetsflödena och tillåter upp till sex egna arbetsytor.",
      },
      {
        question: "Ersätter Spifex mitt bokföringsprogram?",
        answer:
          "Spifex är driftlagret för kassaflöde, banköverblick, avräkningar, styrning och rapportering. Det kompletterar den lagstadgade bokföringen i stället för att ersätta den.",
      },
      {
        question: "Kan jag ansluta ChatGPT eller Claude?",
        answer:
          "Ja. Företagsarbetsytor stöder skrivskyddade AI-anslutningar med OAuth och omfånget spifex:access.",
      },
    ],
    otherLabel: "Utforska Spifex Privat",
    labels: {
      comparePlans: "Jämför planer",
      outcomesEyebrow: "Det här kan du göra",
      outcomesTitle: "En tydlig operativ modell för hur du hanterar pengar",
      outcomesDescription:
        "Varje resultat nedan bygger på ett färdigt Spifex-arbetsflöde, inte på en framtida roadmap-post.",
      howEyebrow: "Så fungerar det",
      howTitle: "Börja litet. Lägg till struktur efter hand.",
      questionsEyebrow: "Frågor",
      questionsTitle: "Innan du väljer plan",
      finalTitle: "Starta gratis. Uppgradera först när verksamheten behöver mer utrymme.",
    },
  },
};

export default sv;
