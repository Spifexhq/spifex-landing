import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const nl: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software voor persoonlijke financiën om te plannen en te beheren",
    metaDescription:
      "Spifex Privé verbindt transacties, bankrekeningen, budgetten, doelen en rapportage in één werkruimte voor uw persoonlijke financiën. Gratis starten.",
    eyebrow: "Spifex Privé",
    title: "Uw persoonlijke financiën met de helderheid van een besturingssysteem",
    description:
      "Plan wat eraan komt, volg wat er is gebeurd en zie uw volledige positie over rekeningen, categorieën, budgetten en doelen — zonder spreadsheets aan elkaar te hoeven knopen.",
    primaryLabel: "Start gratis met Privé",
    proof: "Gratis abonnement beschikbaar. Geen creditcard nodig.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Alle rekeningen op één plek",
        description:
          "Voeg persoonlijke bankrekeningen toe, volg saldi en houd overboekingen gescheiden van de totalen voor inkomsten en uitgaven.",
      },
      {
        title: "Plannen met budgetten en doelen",
        description:
          "Maak budgetten en doelen, bekijk de voortgang en pas het plan aan wanneer het echte leven verandert.",
      },
      {
        title: "Transactiehistorie begrijpen",
        description:
          "Filter transacties op datum, categorie, rekening, richting en afwikkelingsstatus.",
      },
      {
        title: "Deelbetalingen afstemmen",
        description:
          "Leg volledige of gedeeltelijke afwikkelingen vast tegen rekeningen en houd het openstaande bedrag accuraat.",
      },
      {
        title: "Rapporteren zonder data opnieuw op te bouwen",
        description:
          "Bekijk openstaande en afgewikkelde posities, categorieën en financiële indicatoren vanuit dezelfde werkruimte.",
      },
      {
        title: "Een AI-assistent vragen stellen",
        description:
          "Koppel ChatGPT of Claude met alleen-lezen toegang om transacties en categorieën samen te vatten.",
      },
    ],
    workflow: [
      {
        title: "Maak uw persoonlijke werkruimte",
        description: "Kies uw land en valuta en start met het abonnement Personal Free.",
      },
      {
        title: "Voeg rekeningen en categorieën toe",
        description:
          "Neem de rekeningen en categorieën over die u al gebruikt en pas ze in de loop van de tijd aan.",
      },
      {
        title: "Plannen, afwikkelen en beoordelen",
        description:
          "Gebruik budgetten, doelen, afwikkelingen en rapportages om het volledige beeld actueel te houden.",
      },
    ],
    faq: [
      {
        question: "Wat is inbegrepen in Personal Free?",
        answer:
          "Personal Free omvat een persoonlijke werkruimte, 250 transacties per maand, twee bankrekeningen, 25 categorieën, drie budgetten, drie doelen en twee opgeslagen weergaven.",
      },
      {
        question: "Wanneer moet ik overstappen naar Personal Starter of Pro?",
        answer:
          "Stap over wanneer u meer maandelijkse transacties, meer bankrekeningen, grotere bibliotheken voor categorieën en budgetten of meer opgeslagen weergaven en bijlagen nodig hebt.",
      },
      {
        question: "Kan ik zowel Privé- als Zakelijke werkruimten gebruiken?",
        answer:
          "Ja. Eén Spifex-account kan meerdere werkruimten in beide productcategorieën bezitten en daartussen wisselen.",
      },
      {
        question: "Wijzigt de AI-assistent mijn gegevens?",
        answer:
          "Nee. AI-koppelingen zijn alleen-lezen en vragen uitsluitend de scope cashflow:read aan.",
      },
    ],
    otherLabel: "Ontdek Spifex Zakelijk",
    labels: {
      comparePlans: "Abonnementen vergelijken",
      outcomesEyebrow: "Wat u kunt doen",
      outcomesTitle: "Een helder bedieningsmodel voor de manier waarop u geld beheert",
      outcomesDescription:
        "Elk resultaat hieronder is gebaseerd op een geïmplementeerde Spifex-workflow, niet op een toekomstige roadmapfunctie.",
      howEyebrow: "Hoe het werkt",
      howTitle: "Klein beginnen. Voeg structuur toe terwijl u groeit.",
      questionsEyebrow: "Vragen",
      questionsTitle: "Voordat u een abonnement kiest",
      finalTitle:
        "Gratis starten. Upgraden alleen wanneer uw operatie meer ruimte nodig heeft.",
    },
  },

  business: {
    metaTitle: "Software voor zakelijke financiële operaties",
    metaDescription:
      "Spifex Zakelijk verbindt cashflow, bankieren, afwikkelingen, grootboekstructuur, projecten, afdelingen en rapportage met controles op basis van rollen. Gratis starten.",
    eyebrow: "Spifex Zakelijk",
    title: "Eén operationele laag voor zakelijke financiële operaties",
    description:
      "Plan cashflow, koppel bankieren, stem afwikkelingen af, structureer uw grootboek en rapporteer per project of afdeling — met de rollen en controles die een financieel team nodig heeft.",
    primaryLabel: "Start gratis met Zakelijk",
    proof: "Gratis abonnement beschikbaar. Geen creditcard nodig.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Cashflow plannen en uitvoeren",
        description:
          "Maak geplande posten, wikkel ze af tegen bankrekeningen en houd openstaande saldi actueel.",
      },
      {
        title: "Bankieren en afschriften koppelen",
        description:
          "Voeg bankrekeningen toe, importeer afschriften en stem bewegingen af met echt bewijs.",
      },
      {
        title: "Kosten en eigenaarschap toewijzen",
        description:
          "Gebruik projecten, afdelingen en entiteiten om te laten zien waar geld wordt gepland en besteed.",
      },
      {
        title: "Het grootboek structureren",
        description:
          "Onderhoud grootboekrekeningen en de boekingsstructuur zodat rapportage consistent blijft.",
      },
      {
        title: "Toegang per rol beheren",
        description:
          "Gebruik de rollen eigenaar, beheerder en lid met machtigingen binnen de werkruimte en levenscycluscontroles.",
      },
      {
        title: "Rapporteren met KPI-zichtbaarheid",
        description:
          "Bekijk indicatoren voor cashflow, afwikkeling en operatie op basis van dezelfde gefilterde data.",
      },
    ],
    workflow: [
      {
        title: "Maak uw zakelijke werkruimte",
        description:
          "Stel het land en de valuta van de werkruimte in en start met het abonnement Business Free.",
      },
      {
        title: "Voeg uw operationele structuur toe",
        description:
          "Voeg rekeningen, categorieën, projecten, afdelingen, leden en grootboekrekeningen toe.",
      },
      {
        title: "Werken met controles",
        description:
          "Plan, wikkel af, stem af en rapporteer met toegangscontroles op basis van rollen.",
      },
    ],
    faq: [
      {
        question: "Wat is inbegrepen in Business Free?",
        answer:
          "Business Free omvat één werkruimte, 1.000 cashflowposten per maand, twee bankrekeningen, één lid, twee projecten, tien grootboekrekeningen en twee afschriftimporten per maand.",
      },
      {
        question: "Wat verandert er bij Starter en Pro?",
        answer:
          "Starter verhoogt de limieten voor posten, bankrekeningen, leden, projecten, grootboek en afschriften. Pro heft de limieten van de kernworkflows op en staat tot zes werkruimten in eigendom toe.",
      },
      {
        question: "Vervangt Spifex mijn boekhoudsoftware?",
        answer:
          "Spifex is de operationele laag voor cashflow, zicht op bankieren, afwikkelingen, governance en rapportage. Het sluit aan op de wettelijke boekhouding in plaats van die te vervangen.",
      },
      {
        question: "Kan ik ChatGPT of Claude koppelen?",
        answer:
          "Ja. Zakelijke werkruimten ondersteunen alleen-lezen AI-koppelingen met OAuth en de scope cashflow:read.",
      },
    ],
    otherLabel: "Ontdek Spifex Privé",
    labels: {
      comparePlans: "Abonnementen vergelijken",
      outcomesEyebrow: "Wat u kunt doen",
      outcomesTitle: "Een helder bedieningsmodel voor de manier waarop u geld beheert",
      outcomesDescription:
        "Elk resultaat hieronder is gebaseerd op een geïmplementeerde Spifex-workflow, niet op een toekomstige roadmapfunctie.",
      howEyebrow: "Hoe het werkt",
      howTitle: "Klein beginnen. Voeg structuur toe terwijl u groeit.",
      questionsEyebrow: "Vragen",
      questionsTitle: "Voordat u een abonnement kiest",
      finalTitle:
        "Gratis starten. Upgraden alleen wanneer uw operatie meer ruimte nodig heeft.",
    },
  },
};

export default nl;
