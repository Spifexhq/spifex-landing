import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const lb: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software fir perséinlech Finanzen zum Plangen a Kontrolléieren",
    metaDescription:
      "Spifex Privat verbënnt Transaktiounen, Bankkonten, Budgeten, Ziler a Reporting an engem eenzegen Arbeitsberäich fir Är perséinlech Finanzen. Gratis ufänken.",
    eyebrow: "Spifex Privat",
    title: "Perséinlech Finanzen mat der Kloerheet vun engem Betribssystem",
    description:
      "Plangt wat kënnt, verfollegt wat geschitt ass a behält Är komplett Positioun iwwer Konten, Kategorien, Budgeten an Ziler am Bléck — ouni datt Dir Tabelle musst zesummenzestellen.",
    primaryLabel: "Gratis mat Privat ufänken",
    proof: "Gratis Plang verfügbar. Keng Kreditkaart néideg.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "All Konten op enger Plaz",
        description:
          "Füügt perséinlech Bankkonten dobäi, verfollegt d'Solden a halt d'Iwwerweisungen getrennt vun den Totalen fir Akommes an Ausgaben.",
      },
      {
        title: "Mat Budgeten an Ziler plangen",
        description:
          "Erstellt Budgeten an Ziler, iwwerpréift de Fortschrëtt a passt de Plang un, wann sech den Alldag ännert.",
      },
      {
        title: "D'Transaktiounshistoire verstoen",
        description:
          "Filtert Transaktiounen no Datum, Kategorie, Konto, Richtung a Status vun der Ofwécklung.",
      },
      {
        title: "Deelzahlungen ofwéckelen",
        description:
          "Erfaasst vollstänneg oder deelweis Ofwécklungen géint Konten a halt den oppene Betrag korrekt.",
      },
      {
        title: "Berichten ouni Daten nei opzebauen",
        description:
          "Iwwerpréift oppen an ofgewéckelt Positiounen, Kategorien a Finanzkennzuelen aus demselben Arbeitsberäich.",
      },
      {
        title: "E KI-Assistent froen",
        description:
          "Verbënnt ChatGPT oder Claude mat nëmme liesen Zougrëff, fir Transaktiounen a Kategorien zesummenzefassen.",
      },
    ],
    workflow: [
      {
        title: "Erstellt Ären perséinlechen Arbeitsberäich",
        description: "Wielt Äert Land an Är Währung a fänkt mam Plang Personal Free un.",
      },
      {
        title: "Füügt Konten a Kategorien dobäi",
        description:
          "Iwwerhëlt d'Konten an d'Kategorien, déi Dir schonn notzt, a passt se mat der Zäit un.",
      },
      {
        title: "Plangen, ofwéckelen an iwwerpréiwen",
        description:
          "Notzt Budgeten, Ziler, Ofwécklungen a Berichter, fir d'Gesamtbild aktuell ze halen.",
      },
    ],
    faq: [
      {
        question: "Wat ass am Personal Free enthalen?",
        answer:
          "Personal Free enthält en perséinlechen Arbeitsberäich, 250 Transaktiounen pro Mount, zwee Bankkonten, 25 Kategorien, dräi Budgeten, dräi Ziler an zwou gespäichert Usiichten.",
      },
      {
        question: "Wéini soll ech op Personal Starter oder Pro wiesselen?",
        answer:
          "Wiesselt, wann Dir méi monatlech Transaktiounen, méi Bankkonten, gréisser Kategorie- a Budgetbibliothéiken oder méi gespäichert Usiichten an Unhäng braucht.",
      },
      {
        question: "Kann ech souwuel Privat- wéi Business-Arbeitsberäicher notzen?",
        answer:
          "Jo. Ee Spifex-Konto kann méi Arbeitsberäicher an deenen zwou Produktkategorien besëtzen an tëschent hinne wiesselen.",
      },
      {
        question: "Ännert den KI-Assistent Är Daten?",
        answer:
          "Nee. KI-Verbindungen sinn nëmme liesen a froen ausschliisslech de Scope cashflow:read un.",
      },
    ],
    otherLabel: "Spifex Business entdecken",
    labels: {
      comparePlans: "Pläng vergläichen",
      outcomesEyebrow: "Wat Dir maache kënnt",
      outcomesTitle: "E klore Betribsmodell fir Ären Ëmgang mat Geld",
      outcomesDescription:
        "Jiddwer Resultat hei drënner baséiert op engem ëmgesate Spifex-Workflow, net op enger zukünfteger Roadmap-Funktioun.",
      howEyebrow: "Wéi et funktionéiert",
      howTitle: "Kleng ufänken. Struktur no Bedarf ergänzen.",
      questionsEyebrow: "Froen",
      questionsTitle: "Ier Dir e Plang wielt",
      finalTitle: "Gratis ufänken. Nëmmen upgraden, wann de Betrib méi Plaz brauch.",
    },
  },

  business: {
    metaTitle: "Software fir geschäftlech Finanzprozesser",
    metaDescription:
      "Spifex Business verbënnt Cashflow, Banking, Ofwécklungen, Haaptbuchstruktur, Projeten, Ofdeelungen a Reporting mat rollenbaséierte Kontrollen. Gratis ufänken.",
    eyebrow: "Spifex Business",
    title: "Eng operativ Schicht fir geschäftlech Finanzprozesser",
    description:
      "Plangt Cashflow, verbënnt Banking, wéckelt Ofwécklungen of, strukturéiert Äert Haaptbuch a bericht no Projet oder Ofdeelung — mat de Rollen a Kontrollen, déi e Finanzteam brauch.",
    primaryLabel: "Gratis mat Business ufänken",
    proof: "Gratis Plang verfügbar. Keng Kreditkaart néideg.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Cashflow plangen an ëmsetzen",
        description:
          "Erstellt geplangte Posten, wéckelt se géint Bankkonten of a halt d'oppe Solde aktuell.",
      },
      {
        title: "Banking a Kontoauszich verbannen",
        description:
          "Füügt Bankkonten dobäi, importéiert Kontoauszich a gläicht Beweegungen mat echte Beleger of.",
      },
      {
        title: "Käschten a Verantwortung zouordnen",
        description:
          "Notzt Projeten, Ofdeelungen a Gesellschaften, fir ze weisen, wou Geld geplangt a ausgëtt.",
      },
      {
        title: "D'Haaptbuch strukturéieren",
        description:
          "Pflegt Haaptbuchkonten an d'Buchungsstruktur, fir datt d'Reporting konsistent bleift.",
      },
      {
        title: "Zougrëff no Roll steieren",
        description:
          "Notzt d'Rollen Eegentümer, Administrator a Member mat Berechtegungen am Arbeitsberäich a Kontrollen iwwer de Liewenszyklus.",
      },
      {
        title: "Mat KPI-Transparenz berichten",
        description:
          "Iwwerpréift Kennzuelen fir Cashflow, Ofwécklung a Betrib aus deene selwechte gefilterten Daten.",
      },
    ],
    workflow: [
      {
        title: "Erstellt Ären Business-Arbeitsberäich",
        description:
          "Luegt Land a Währung vum Arbeitsberäich fest a fänkt mam Plang Business Free un.",
      },
      {
        title: "Füügt Är Betribsstruktur dobäi",
        description:
          "Füügt Konten, Kategorien, Projeten, Ofdeelungen, Memberen an Haaptbuchkonten dobäi.",
      },
      {
        title: "Mat Kontrollen schaffen",
        description:
          "Plangt, wéckelt of, gläicht of a bericht mat rollenbaséierte Zougrëffskontrollen.",
      },
    ],
    faq: [
      {
        question: "Wat ass am Business Free enthalen?",
        answer:
          "Business Free enthält een Arbeitsberäich, 1.000 Cashflow-Posten pro Mount, zwee Bankkonten, ee Member, zwee Projeten, zéng Haaptbuchkonten an zwee Kontoauszich-Importen pro Mount.",
      },
      {
        question: "Wat ännert sech bei Starter a Pro?",
        answer:
          "Starter erhéicht d'Limiten fir Posten, Bankkonten, Memberen, Projeten, Haaptbuch a Kontoauszich. Pro hieft d'Limiten vun de Kär-Workflows op a erlaabt bis zu sechs eegen Arbeitsberäicher.",
      },
      {
        question: "Ersetzt Spifex Är Buchhaltungssoftware?",
        answer:
          "Spifex ass déi operativ Schicht fir Cashflow, Banking-Transparenz, Ofwécklungen, Governance a Reporting. Et ergänzt d'gesetzlech Buchhaltung, amplaz se z'ersetzen.",
      },
      {
        question: "Kann ech ChatGPT oder Claude verbannen?",
        answer:
          "Jo. Business-Arbeitsberäicher ënnerstëtzen nëmme liesen KI-Verbindungen mat OAuth an dem Scope cashflow:read.",
      },
    ],
    otherLabel: "Spifex Privat entdecken",
    labels: {
      comparePlans: "Pläng vergläichen",
      outcomesEyebrow: "Wat Dir maache kënnt",
      outcomesTitle: "E klore Betribsmodell fir Ären Ëmgang mat Geld",
      outcomesDescription:
        "Jiddwer Resultat hei drënner baséiert op engem ëmgesate Spifex-Workflow, net op enger zukünfteger Roadmap-Funktioun.",
      howEyebrow: "Wéi et funktionéiert",
      howTitle: "Kleng ufänken. Struktur no Bedarf ergänzen.",
      questionsEyebrow: "Froen",
      questionsTitle: "Ier Dir e Plang wielt",
      finalTitle: "Gratis ufänken. Nëmmen upgraden, wann de Betrib méi Plaz brauch.",
    },
  },
};

export default lb;
