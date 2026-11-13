import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const de: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software für persönliche Finanzen zum Planen und Steuern",
    metaDescription:
      "Spifex Personal verbindet Transaktionen, Bankkonten, Budgets, Ziele und Reporting in einem Workspace für Ihre persönlichen Finanzen. Kostenlos starten.",
    eyebrow: "Spifex Personal",
    title: "Persönliche Finanzen mit der Klarheit eines Betriebssystems",
    description:
      "Planen Sie, was kommt, verfolgen Sie, was geschehen ist, und behalten Sie Ihre vollständige Position über Konten, Kategorien, Budgets und Ziele im Blick – ohne dass Sie Tabellen mühsam zusammenführen müssen.",
    primaryLabel: "Personal kostenlos starten",
    proof: "Kostenloser Plan verfügbar. Keine Kreditkarte erforderlich.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Alle Konten an einem Ort",
        description:
          "Fügen Sie private Bankkonten hinzu, verfolgen Sie Salden und halten Sie Überweisungen von den Summen für Einnahmen und Ausgaben getrennt.",
      },
      {
        title: "Mit Budgets und Zielen planen",
        description:
          "Erstellen Sie Budgets und Ziele, prüfen Sie den Fortschritt und passen Sie den Plan an, wenn sich Ihr Alltag ändert.",
      },
      {
        title: "Transaktionshistorie verstehen",
        description:
          "Filtern Sie Transaktionen nach Datum, Kategorie, Konto, Richtung und Abrechnungsstatus.",
      },
      {
        title: "Teilzahlungen abstimmen",
        description:
          "Erfassen Sie vollständige oder teilweise Abrechnungen gegen Konten und halten Sie den offenen Betrag korrekt.",
      },
      {
        title: "Berichten, ohne Daten neu aufzubauen",
        description:
          "Prüfen Sie offene und abgerechnete Positionen, Kategorien und Finanzkennzahlen aus demselben Workspace.",
      },
      {
        title: "Einen KI-Assistenten fragen",
        description:
          "Verbinden Sie ChatGPT oder Claude mit schreibgeschütztem Zugriff, um Transaktionen und Kategorien zusammenzufassen.",
      },
    ],
    workflow: [
      {
        title: "Persönlichen Workspace erstellen",
        description: "Wählen Sie Land und Währung und starten Sie mit dem Plan Personal Free.",
      },
      {
        title: "Konten und Kategorien hinzufügen",
        description:
          "Übernehmen Sie die Konten und Kategorien, die Sie bereits nutzen, und passen Sie sie mit der Zeit an.",
      },
      {
        title: "Planen, abrechnen und prüfen",
        description:
          "Nutzen Sie Budgets, Ziele, Abrechnungen und Berichte, um das Gesamtbild aktuell zu halten.",
      },
    ],
    faq: [
      {
        question: "Was ist in Personal Free enthalten?",
        answer:
          "Personal Free umfasst einen persönlichen Workspace, 250 Transaktionen pro Monat, zwei Bankkonten, 25 Kategorien, drei Budgets, drei Ziele und zwei gespeicherte Ansichten.",
      },
      {
        question: "Wann sollte ich zu Personal Starter oder Pro wechseln?",
        answer:
          "Wechseln Sie, wenn Sie mehr monatliche Transaktionen, mehr Bankkonten, größere Kategorie- und Budget-Bibliotheken oder mehr gespeicherte Ansichten und Anhänge benötigen.",
      },
      {
        question: "Kann ich Personal- und Business-Workspaces parallel nutzen?",
        answer:
          "Ja. Ein Spifex-Konto kann mehrere Workspaces in beiden Produktkategorien besitzen und zwischen ihnen wechseln.",
      },
      {
        question: "Verändert der KI-Assistent meine Daten?",
        answer:
          "Nein. KI-Verbindungen sind schreibgeschützt und fordern ausschließlich den Scope spifex:access an.",
      },
    ],
    otherLabel: "Spifex Business entdecken",
    labels: {
      comparePlans: "Pläne vergleichen",
      outcomesEyebrow: "Was Sie tun können",
      outcomesTitle: "Ein klares Betriebsmodell für Ihren Umgang mit Geld",
      outcomesDescription:
        "Jedes der folgenden Ergebnisse basiert auf einem bereits umgesetzten Spifex-Workflow – nicht auf einer künftigen Roadmap-Funktion.",
      howEyebrow: "So funktioniert es",
      howTitle: "Klein anfangen. Struktur nach Bedarf ergänzen.",
      questionsEyebrow: "Fragen",
      questionsTitle: "Bevor Sie einen Plan wählen",
      finalTitle: "Kostenlos starten. Upgraden, wenn der Betrieb mehr Raum braucht.",
    },
  },

  business: {
    metaTitle: "Software für geschäftliche Finanzprozesse",
    metaDescription:
      "Spifex Business verbindet Cashflow, Banking, Abrechnungen, Hauptbuchstruktur, Projekte, Abteilungen und Reporting mit rollenbasierten Kontrollen. Kostenlos starten.",
    eyebrow: "Spifex Business",
    title: "Eine operative Schicht für geschäftliche Finanzprozesse",
    description:
      "Planen Sie Cashflow, binden Sie Banking an, stimmen Sie Abrechnungen ab, strukturieren Sie Ihr Hauptbuch und berichten Sie nach Projekt oder Abteilung – mit den Rollen und Kontrollen, die ein Finanzteam braucht.",
    primaryLabel: "Business kostenlos starten",
    proof: "Kostenloser Plan verfügbar. Keine Kreditkarte erforderlich.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Cashflow planen und umsetzen",
        description:
          "Erstellen Sie geplante Einträge, rechnen Sie gegen Bankkonten ab und halten Sie offene Salden aktuell.",
      },
      {
        title: "Banking und Kontoauszüge anbinden",
        description:
          "Fügen Sie Bankkonten hinzu, importieren Sie Kontoauszüge und gleichen Sie Bewegungen mit echten Belegen ab.",
      },
      {
        title: "Kosten und Verantwortung zuordnen",
        description:
          "Nutzen Sie Projekte, Abteilungen und Gesellschaften, um zu zeigen, wo Geld geplant und ausgegeben wird.",
      },
      {
        title: "Das Hauptbuch strukturieren",
        description:
          "Pflegen Sie Hauptbuchkonten und Buchungsstruktur, damit das Reporting konsistent bleibt.",
      },
      {
        title: "Zugriff nach Rolle steuern",
        description:
          "Nutzen Sie die Rollen Eigentümer, Administrator und Mitglied mit workspace-bezogenen Berechtigungen und Lifecycle-Kontrollen.",
      },
      {
        title: "Mit KPI-Transparenz berichten",
        description:
          "Prüfen Sie Cashflow-, Abrechnungs- und Betriebskennzahlen aus denselben gefilterten Daten.",
      },
    ],
    workflow: [
      {
        title: "Business-Workspace erstellen",
        description:
          "Legen Sie Land und Währung des Workspace fest und starten Sie mit dem Plan Business Free.",
      },
      {
        title: "Betriebsstruktur hinzufügen",
        description:
          "Fügen Sie Konten, Kategorien, Projekte, Abteilungen, Mitglieder und Hauptbuchkonten hinzu.",
      },
      {
        title: "Mit Kontrollen arbeiten",
        description:
          "Planen, abrechnen, abstimmen und berichten Sie mit rollenbasierten Zugriffskontrollen.",
      },
    ],
    faq: [
      {
        question: "Was ist in Business Free enthalten?",
        answer:
          "Business Free umfasst einen Workspace, 1.000 Cashflow-Einträge pro Monat, zwei Bankkonten, ein Mitglied, zwei Projekte, zehn Hauptbuchkonten und zwei Kontoauszugsimporte pro Monat.",
      },
      {
        question: "Was ändert sich bei Starter und Pro?",
        answer:
          "Starter erhöht die Limits für Einträge, Bankkonten, Mitglieder, Projekte, Hauptbuch und Kontoauszüge. Pro hebt die Limits der zentralen Workflows auf und erlaubt bis zu sechs eigene Workspaces.",
      },
      {
        question: "Ersetzt Spifex meine Buchhaltungssoftware?",
        answer:
          "Spifex ist die operative Schicht für Cashflow, Banking-Transparenz, Abrechnungen, Governance und Reporting. Es ergänzt die gesetzliche Buchhaltung, statt sie zu ersetzen.",
      },
      {
        question: "Kann ich ChatGPT oder Claude verbinden?",
        answer:
          "Ja. Business-Workspaces unterstützen schreibgeschützte KI-Verbindungen mit OAuth und dem Scope spifex:access.",
      },
    ],
    otherLabel: "Spifex Personal entdecken",
    labels: {
      comparePlans: "Pläne vergleichen",
      outcomesEyebrow: "Was Sie tun können",
      outcomesTitle: "Ein klares Betriebsmodell für Ihren Umgang mit Geld",
      outcomesDescription:
        "Jedes der folgenden Ergebnisse basiert auf einem bereits umgesetzten Spifex-Workflow – nicht auf einer künftigen Roadmap-Funktion.",
      howEyebrow: "So funktioniert es",
      howTitle: "Klein anfangen. Struktur nach Bedarf ergänzen.",
      questionsEyebrow: "Fragen",
      questionsTitle: "Bevor Sie einen Plan wählen",
      finalTitle: "Kostenlos starten. Upgraden, wenn der Betrieb mehr Raum braucht.",
    },
  },
};

export default de;
