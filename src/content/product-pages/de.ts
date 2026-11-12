import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const de: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Cashflow",
    preview: {
      label: "Cashflow",
      metric: { label: "Liquiditätsposition", value: "482,9 Tsd. €", note: "+8,2 % vs. Plan" },
      secondary: { label: "Geplant", value: "164,2 Tsd. €" },
      chartLabel: "Plan vs. abgerechnet",
      rows: [
        { label: "Personal", value: "28.900 €", status: "positive" },
        { label: "Lieferantenzahlung", value: "12.400 €", status: "warning" },
        { label: "Kartenabrechnung", value: "6.120 €", status: "positive" },
      ],
    },
    copy: {
      title: "Wissen, was kommt, was geht und was noch offen ist",
      subtitle:
        "Planen Sie Einträge, rechnen Sie sie gegen Bankkonten ab und halten Sie jede Bewegung mit der Kategorie, dem Projekt oder der Abteilung verknüpft, die sie verantwortet.",
      bullets: [
        "Geplante und abgerechnete Einträge in einer Ansicht",
        "Teilabrechnungen und interne Umbuchungen",
        "Kategorien, Projekte und Abteilungen",
        "Filter, gespeicherte Ansichten und Anhänge",
      ],
      outcomes: [
        {
          title: "Den Cashplan sehen",
          desc: "Erstellen Sie geplante Einträge mit Terminen, Kategorien und Verantwortlichen, damit der Monat mit einer klaren Basis startet.",
        },
        {
          title: "Gegen echte Konten abrechnen",
          desc: "Erfassen Sie vollständige oder teilweise Abrechnungen gegen Bankkonten und halten Sie den offenen Saldo aktuell.",
        },
        {
          title: "Umbuchungen getrennt halten",
          desc: "Bewegen Sie Mittel zwischen Konten, ohne Einnahmen oder Ausgaben aufzublähen.",
        },
        {
          title: "Aus denselben Daten berichten",
          desc: "Filtern Sie offene und abgerechnete Positionen nach Kategorie, Projekt oder Abteilung.",
        },
      ],
      steps: [
        {
          title: "Workspace erstellen",
          desc: "Wählen Sie Land, Währung und Workspace-Typ. Starten Sie im kostenlosen Plan.",
        },
        {
          title: "Konten und Kategorien hinzufügen",
          desc: "Fügen Sie die Bankkonten und Kategorien hinzu, die Ihr Team bereits nutzt.",
        },
        {
          title: "Planen, abrechnen und prüfen",
          desc: "Planen Sie Einträge, rechnen Sie sie ab und prüfen Sie die Position, ohne eine Tabelle neu aufzubauen.",
        },
      ],
      capabilitiesTitle: "Die Bausteine eines Cashplans",
      capabilitiesSubtitle:
        "Jeder Eintrag behält Betrag, Termine, Verantwortung und Abrechnungshistorie an einem Ort.",
      capabilities: [
        {
          title: "Geplante Einträge",
          desc: "Erfassen Sie Betrag, Fälligkeit, Kategorie, Projekt und Gegenpartei.",
        },
        {
          title: "Abrechnungen",
          desc: "Rechnen Sie vollständig oder in Teilen gegen ein Bankkonto ab – mit laufendem offenem Saldo.",
        },
        {
          title: "Interne Umbuchungen",
          desc: "Bewegen Sie Mittel zwischen Konten, ohne Einnahmen oder Ausgaben zu verändern.",
        },
        {
          title: "Zuordnungen",
          desc: "Teilen Sie Einträge auf Abteilungen auf und verknüpfen Sie sie mit Projekten.",
        },
        {
          title: "Filter und gespeicherte Ansichten",
          desc: "Speichern Sie die Filter und Spalten, die Ihr Team am häufigsten nutzt.",
        },
        {
          title: "Anhänge",
          desc: "Bewahren Sie Belege beim jeweiligen Eintrag auf.",
        },
      ],
      finalTitle: "Starten Sie mit einem klaren Cashplan",
      finalSubtitle:
        "Erstellen Sie einen kostenlosen Workspace und fügen Sie die Konten und Kategorien hinzu, die Sie bereits nutzen.",
    },
  },

  banking: {
    name: "Banking und Zahlungen",
    preview: {
      label: "Banking",
      metric: { label: "Konten", value: "4", note: "2 Währungen" },
      secondary: { label: "Kontoauszugszeilen", value: "186" },
      chartLabel: "Abgeglichen vs. offen",
      rows: [
        { label: "Geschäftskonto", value: "Abgeglichen", status: "positive" },
        { label: "Steuerkonto", value: "12 offen", status: "warning" },
        { label: "Rücklagenkonto", value: "Abgeglichen", status: "positive" },
      ],
    },
    copy: {
      title: "Bankkonten und Kontoauszüge im selben Workspace",
      subtitle:
        "Halten Sie Kontodetails, importierte Kontoauszüge und Abgleichentscheidungen zusammen, damit die Abstimmung nicht in einer separaten Tabelle stattfindet.",
      bullets: [
        "Bankkonten und Salden",
        "Kontoauszugsimporte und Einlesen",
        "Vorgeschlagener Abgleich",
        "Prüfung der Abstimmung",
      ],
      outcomes: [
        {
          title: "Eine Kontenliste",
          desc: "Halten Sie Bankname, Kontotyp, Währung und Saldo im Workspace.",
        },
        {
          title: "Kontoauszüge importieren",
          desc: "Laden Sie einen Kontoauszug hoch und prüfen Sie die eingelesenen Zeilen, bevor Sie sie übernehmen.",
        },
        {
          title: "Bewegungen abgleichen",
          desc: "Nutzen Sie vorgeschlagene Übereinstimmungen zwischen Kontoauszugszeilen und Cashflow-Einträgen und bestätigen Sie diese.",
        },
        {
          title: "Ausnahmen prüfen",
          desc: "Sehen Sie nicht zugeordnete und offene Zeilen, statt in Dateien zu suchen.",
        },
      ],
      steps: [
        {
          title: "Bankkonto hinzufügen",
          desc: "Legen Sie Institut, Kontotyp, Währung und Eröffnungsdaten fest.",
        },
        {
          title: "Kontoauszug importieren",
          desc: "Laden Sie die Datei hoch und prüfen Sie die eingelesenen Zeilen vor dem Import.",
        },
        {
          title: "Abgleichen und abstimmen",
          desc: "Bestätigen Sie vorgeschlagene Übereinstimmungen und halten Sie Ausnahmen sichtbar.",
        },
      ],
      capabilitiesTitle: "Banking-Daten ohne Nebentabelle",
      capabilitiesSubtitle:
        "Konten, Kontoauszugszeilen und Abgleichentscheidungen bleiben mit dem Cashflow verbunden, den sie erklären.",
      capabilities: [
        {
          title: "Bankkonten",
          desc: "Institut, Typ, Währung und Kontodetails pro Workspace.",
        },
        {
          title: "Kontoauszugsimporte",
          desc: "Kontoauszüge hochladen und einlesen – mit Prüfschritt vor der Übernahme.",
        },
        {
          title: "Vorgeschlagener Abgleich",
          desc: "Klassifizieren Sie Kontoauszugszeilen anhand von Einträgen und wiederverwendbaren Mustern.",
        },
        {
          title: "Prüfung der Abstimmung",
          desc: "Halten Sie offene, abgeglichene und nicht zugeordnete Zeilen sichtbar.",
        },
        {
          title: "Verknüpfung zu Abrechnungen",
          desc: "Verbinden Sie abgerechnete Bewegungen mit dem Bankkonto, das sie empfangen hat.",
        },
        {
          title: "Workspace-Rollen",
          desc: "Halten Sie Kontodaten auf den Workspace und seine Mitglieder begrenzt.",
        },
      ],
      finalTitle: "Bündeln Sie Banking im selben Workspace",
      finalSubtitle: "Starten Sie kostenlos und fügen Sie Ihr erstes Bankkonto hinzu.",
    },
  },

  spend: {
    name: "Ausgaben und Abrechnungen",
    preview: {
      label: "Ausgaben",
      metric: { label: "Offener Abfluss", value: "38,4 Tsd. €", note: "14 Einträge" },
      secondary: { label: "Diesen Monat abgerechnet", value: "96,2 Tsd. €" },
      chartLabel: "Abgerechnet vs. offen",
      rows: [
        { label: "Reisen", value: "2.840 €", status: "positive" },
        { label: "Software", value: "1.290 €", status: "warning" },
        { label: "Büro", value: "640 €", status: "positive" },
      ],
    },
    copy: {
      title: "Ausgehende Ausgaben verfolgen und gegen den Plan abrechnen",
      subtitle:
        "Erfassen Sie Ausgänge, ordnen Sie sie Kategorien, Projekten oder Abteilungen zu und rechnen Sie sie vollständig oder in Teilen ab.",
      bullets: [
        "Ausgänge mit Fälligkeitsterminen",
        "Teilabrechnungen",
        "Zuordnung zu Projekten und Abteilungen",
        "Ansichten zum offenen Saldo",
      ],
      outcomes: [
        {
          title: "Gebundene Ausgaben sehen",
          desc: "Erfassen Sie Ausgänge mit Fälligkeitsterminen, Kategorien und Verantwortlichen.",
        },
        {
          title: "In Teilen abrechnen",
          desc: "Wenden Sie eine oder mehrere Abrechnungen auf einen Eintrag an und verfolgen Sie den Restbetrag.",
        },
        {
          title: "Kosten zuordnen",
          desc: "Teilen Sie Ausgaben auf Abteilungen auf und verknüpfen Sie sie mit Projekten.",
        },
        {
          title: "Offene Posten prüfen",
          desc: "Filtern Sie offene und abgerechnete Ausgaben, ohne Daten zu exportieren.",
        },
      ],
      steps: [
        {
          title: "Abfluss erfassen",
          desc: "Erfassen Sie Betrag, Fälligkeit, Kategorie, Projekt und Gegenpartei.",
        },
        {
          title: "Gegen das Konto abrechnen",
          desc: "Wenden Sie eine oder mehrere Abrechnungen an und halten Sie den offenen Saldo aktuell.",
        },
        {
          title: "Saldo prüfen",
          desc: "Filtern Sie abgerechnete und offene Ausgaben nach Kategorie, Projekt oder Abteilung.",
        },
      ],
      capabilitiesTitle: "Ausgaben, die mit der Abrechnung verbunden bleiben",
      capabilitiesSubtitle:
        "Ausgänge behalten ihre Zuordnung und Abrechnungshistorie, statt in einer separaten Tabelle zu enden.",
      capabilities: [
        {
          title: "Ausgänge",
          desc: "Betrag, Fälligkeit, Kategorie, Projekt und Gegenpartei.",
        },
        {
          title: "Teilabrechnungen",
          desc: "Rechnen Sie einen Eintrag über mehrere Zahlungen ab.",
        },
        {
          title: "Zuordnungen",
          desc: "Verteilen Sie Prozentsätze auf Abteilungen und verknüpfen Sie Projekte.",
        },
        {
          title: "Ansichten zu offenen Posten",
          desc: "Sehen Sie offene und abgerechnete Ausgaben mit gespeicherten Filtern.",
        },
      ],
      finalTitle: "Halten Sie Ausgaben und Abrechnung verbunden",
      finalSubtitle: "Starten Sie kostenlos und erfassen Sie Ihren ersten Ausgang.",
    },
  },

  ledger: {
    name: "Hauptbuch",
    preview: {
      label: "Hauptbuch",
      metric: { label: "Buchungskonten", value: "128", note: "6 Kopfkonten" },
      secondary: { label: "Journaleinträge", value: "1.842" },
      chartLabel: "Buchungsaktivität",
      rows: [
        { label: "Erlöse · 4010", value: "Ausgeglichen", status: "positive" },
        { label: "Personal · 6200", value: "Gebucht", status: "positive" },
        { label: "Zwischenkonto · 9999", value: "Prüfen", status: "warning" },
      ],
    },
    copy: {
      title: "Ein Kontenplan, der auf konsistentes Reporting ausgelegt ist",
      subtitle:
        "Strukturieren Sie Kopf- und Buchungskonten, erfassen Sie Journaleinträge und behalten Sie Perioden und Dimensionen im Griff.",
      bullets: [
        "Kopf- und Buchungskonten",
        "Journaleinträge und Bücher",
        "Geschäftsperioden",
        "Dimensionen und Buchungsrichtlinien",
      ],
      outcomes: [
        {
          title: "Kontenplan strukturieren",
          desc: "Erstellen Sie Kopf- und Buchungskonten mit Nummern und normalen Salden.",
        },
        {
          title: "Journale erfassen",
          desc: "Buchen Sie Journaleinträge mit Zeilen, Büchern und Geschäftsperioden.",
        },
        {
          title: "Dimensionen pflegen",
          desc: "Definieren Sie Dimensionen und zulässige Werte für die Reporting-Struktur.",
        },
        {
          title: "Buchung steuern",
          desc: "Nutzen Sie Buchungsrichtlinien und Kontrollen für manuelle Buchungen, wo sie nötig sind.",
        },
      ],
      steps: [
        {
          title: "Kontenplan gestalten",
          desc: "Erstellen Sie die Kopf- und Buchungskonten, die Ihr Reporting benötigt.",
        },
        {
          title: "Einträge erfassen",
          desc: "Buchen Sie Journaleinträge mit dem richtigen Buch, der Periode und den Dimensionen.",
        },
        {
          title: "Perioden prüfen",
          desc: "Behalten Sie Geschäftsperioden und Buchungsstatus im Griff.",
        },
      ],
      capabilitiesTitle: "Buchhaltungsstruktur, die trägt",
      capabilitiesSubtitle:
        "Kontenplan, Journale, Perioden und Dimensionen teilen einen Workspace, statt auseinanderzudriften.",
      capabilities: [
        {
          title: "Kontenplan",
          desc: "Kopf- und Buchungskonten mit Nummern, Typen und normalen Salden.",
        },
        {
          title: "Journaleinträge",
          desc: "Mehrzeilige Einträge mit Büchern, Perioden und Status.",
        },
        {
          title: "Geschäftsperioden",
          desc: "Öffnen und schließen Sie Perioden für jedes Buchhaltungsbuch.",
        },
        {
          title: "Dimensionen",
          desc: "Definieren Sie Dimensionen, Werte und Regeln auf Kontenebene.",
        },
        {
          title: "Buchungsrichtlinien",
          desc: "Steuern Sie, wie Einträge gebucht werden und welche Konten manuelle Buchungen erlauben.",
        },
        {
          title: "Kontenkontrollen",
          desc: "Bank-Kontrollkonten und Schutz vor Fehlklassifizierung.",
        },
      ],
      finalTitle: "Bauen Sie ein Hauptbuch, das Bestand hat",
      finalSubtitle:
        "Starten Sie kostenlos und gestalten Sie den Kontenplan passend zu Ihrem Reporting.",
    },
  },

  projects: {
    name: "Projekte",
    preview: {
      label: "Projekte",
      metric: { label: "Aktive Projekte", value: "24", note: "6 Typen" },
      secondary: { label: "Verknüpfte Einträge", value: "312" },
      chartLabel: "Plan vs. abgerechnet nach Projekt",
      rows: [
        { label: "Implementierung", value: "420 Tsd. €", status: "positive" },
        { label: "Migration", value: "186 Tsd. €", status: "warning" },
        { label: "Support", value: "96 Tsd. €", status: "positive" },
      ],
    },
    copy: {
      title: "Kosten und Erlöse nach Projekt sehen",
      subtitle:
        "Erstellen Sie Projekte, verknüpfen Sie Cashflow-Einträge damit und vergleichen Sie geplante, abgerechnete und offene Beträge in einem Filter.",
      bullets: [
        "Projektdatensätze mit Nummern und Typen",
        "Projektverknüpfung auf Eintragsebene",
        "Zuordnung zu Abteilungen",
        "Projektspezifische Ansichten",
      ],
      outcomes: [
        {
          title: "Projektdatensatz erstellen",
          desc: "Name, Nummer, Typ und Beschreibung mit aktivem Status.",
        },
        {
          title: "Einträge verknüpfen",
          desc: "Verbinden Sie geplante und abgerechnete Cashflow-Einträge mit dem Projekt.",
        },
        {
          title: "Abteilungen zuordnen",
          desc: "Teilen Sie die Kosten eines Eintrags auf Abteilungen auf.",
        },
        {
          title: "Projekt prüfen",
          desc: "Filtern Sie Einträge und offene Beträge nach Projekt.",
        },
      ],
      steps: [
        {
          title: "Projekt erstellen",
          desc: "Fügen Sie Name, Nummer und Typ hinzu, damit das Projekt leicht zu erkennen ist.",
        },
        {
          title: "Einträge verknüpfen",
          desc: "Verknüpfen Sie die Cashflow-Einträge, die zum Projekt gehören.",
        },
        {
          title: "Position prüfen",
          desc: "Filtern Sie geplante, abgerechnete und offene Beträge nach Projekt.",
        },
      ],
      capabilitiesTitle: "Projektkontext bei jeder Bewegung",
      capabilitiesSubtitle:
        "Einträge, Abteilungsaufteilungen und Abrechnungsstatus bleiben mit dem Projekt verbunden, das sie verantwortet.",
      capabilities: [
        {
          title: "Projektdatensätze",
          desc: "Name, Nummer, Typ, Beschreibung und Status.",
        },
        {
          title: "Eintragsverknüpfungen",
          desc: "Hängen Sie Cashflow-Einträge direkt an ein Projekt.",
        },
        {
          title: "Abteilungsaufteilung",
          desc: "Verteilen Sie Eintragsprozentsätze auf Abteilungen.",
        },
        {
          title: "Projektfilter",
          desc: "Prüfen Sie Einträge, Abrechnungen und offene Beträge nach Projekt.",
        },
      ],
      finalTitle: "Machen Sie Projektleistung sichtbar",
      finalSubtitle: "Starten Sie kostenlos und erstellen Sie Ihr erstes Projekt.",
    },
  },

  departments: {
    name: "Abteilungen",
    preview: {
      label: "Abteilungen",
      metric: { label: "Abteilungen", value: "8", note: "3 Kostenstellen" },
      secondary: { label: "Zugeordnete Einträge", value: "246" },
      chartLabel: "Einträge nach Abteilung",
      rows: [
        { label: "Betrieb", value: "42 %", status: "positive" },
        { label: "Vertrieb", value: "31 %", status: "warning" },
        { label: "Entwicklung", value: "27 %", status: "positive" },
      ],
    },
    copy: {
      title: "Ordnen Sie jede Bewegung dem Team zu, das sie verantwortet",
      subtitle:
        "Erstellen Sie Abteilungen, verteilen Sie Eintragsprozentsätze und prüfen Sie die Zahlen nach Team, ohne das Reporting neu aufzubauen.",
      bullets: [
        "Abteilungsdatensätze",
        "Prozentuale Zuordnungen",
        "Eintragsfilter nach Abteilung",
        "Gespeicherte Ansichten",
      ],
      outcomes: [
        {
          title: "Abteilung erstellen",
          desc: "Name, Nummer und aktiver Status für jede Kostenstelle.",
        },
        {
          title: "Einträge zuordnen",
          desc: "Weisen Sie einem Eintrag eine oder mehrere Abteilungen mit Prozentsätzen zu.",
        },
        {
          title: "Nach Team filtern",
          desc: "Prüfen Sie Einträge und Abrechnungen jeweils für eine Abteilung.",
        },
        {
          title: "Verantwortung sichtbar halten",
          desc: "Sehen Sie im selben Workspace, welches Team die Ausgaben verantwortet.",
        },
      ],
      steps: [
        {
          title: "Abteilungen definieren",
          desc: "Fügen Sie die Namen und Nummern hinzu, die Ihre Teams bereits nutzen.",
        },
        {
          title: "Einträge zuordnen",
          desc: "Teilen Sie einen Eintrag mit Prozentsätzen auf Abteilungen auf.",
        },
        {
          title: "Zahlen prüfen",
          desc: "Filtern Sie Cashflow-Einträge nach Abteilung und prüfen Sie die Position.",
        },
      ],
      capabilitiesTitle: "Eine Kostenstellensicht, auf die Sie sich verlassen können",
      capabilitiesSubtitle:
        "Abteilungsaufteilungen bleiben am Eintrag, statt im Reporting neu rekonstruiert zu werden.",
      capabilities: [
        {
          title: "Abteilungsdatensätze",
          desc: "Name, Nummer und Status für jede Kostenstelle.",
        },
        {
          title: "Prozentuale Zuordnung",
          desc: "Teilen Sie einen Eintrag mit definierten Prozentsätzen auf Abteilungen auf.",
        },
        {
          title: "Eintragsfilter",
          desc: "Filtern Sie Cashflow-Einträge nach Abteilung.",
        },
        {
          title: "Gespeicherte Ansichten",
          desc: "Behalten Sie die Spalten und Filter, die Ihr Team nutzt.",
        },
      ],
      finalTitle: "Geben Sie jeder Bewegung einen Verantwortlichen",
      finalSubtitle: "Starten Sie kostenlos und definieren Sie Ihre erste Abteilung.",
    },
  },

  crm: {
    name: "CRM",
    preview: {
      label: "Geschäftspartner",
      metric: { label: "Geschäftspartner", value: "186", note: "7 Typen" },
      secondary: { label: "Aktiv", value: "164" },
      chartLabel: "Geschäftspartner nach Typ",
      rows: [
        { label: "Kunden", value: "82", status: "positive" },
        { label: "Lieferanten", value: "46", status: "positive" },
        { label: "Auftragnehmer", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Ein zentrales Verzeichnis für jeden Geschäftspartner",
      subtitle:
        "Halten Sie Kunden, Lieferanten, Mitarbeitende, Auftragnehmer und Partner in einem Workspace und verknüpfen Sie sie mit den passenden Cashflow-Einträgen.",
      bullets: [
        "Kunden, Lieferanten und Partner",
        "Kontakt- und Steuerdaten",
        "Typen und Status von Geschäftspartnern",
        "Verknüpfungen zu Cashflow-Einträgen",
      ],
      outcomes: [
        {
          title: "Ein Verzeichnis",
          desc: "Speichern Sie jeden Geschäftspartner einmal – mit eindeutigem Typ.",
        },
        {
          title: "Kontaktdaten",
          desc: "Halten Sie E-Mail, Telefon und Adresse beim Datensatz.",
        },
        {
          title: "Steuer- und Bankdaten",
          desc: "Speichern Sie Steuernummern und Bankdaten, wo sie relevant sind.",
        },
        {
          title: "Hauptbuch anbinden",
          desc: "Referenzieren Sie den Geschäftspartner in den Cashflow-Einträgen, die er gezahlt oder empfangen hat.",
        },
      ],
      steps: [
        {
          title: "Geschäftspartner hinzufügen",
          desc: "Wählen Sie den Typ und erfassen Sie Name und Kontaktdaten.",
        },
        {
          title: "Beziehung klassifizieren",
          desc: "Kennzeichnen Sie ihn als Kunde, Lieferant, Mitarbeitenden, Auftragnehmer, Partner oder anderen Typ.",
        },
        {
          title: "Einträge verknüpfen",
          desc: "Referenzieren Sie den Geschäftspartner in den zugehörigen Cashflow-Einträgen.",
        },
      ],
      capabilitiesTitle: "Geschäftspartnerdaten, die nützlich bleiben",
      capabilitiesSubtitle:
        "Ein Datensatz für die Personen und Organisationen hinter Ihrem Cashflow – statt einer Kontaktliste in einem separaten Tool.",
      capabilities: [
        {
          title: "Geschäftspartnerdatensätze",
          desc: "Kunden, Lieferanten, Mitarbeitende, Auftragnehmer, Partner und mehr.",
        },
        {
          title: "Kontaktdaten",
          desc: "E-Mail, Telefon und Adresse in einem Datensatz.",
        },
        {
          title: "Steuer- und Bankfelder",
          desc: "Optionale Steuernummern und Bankdaten.",
        },
        {
          title: "Eintragsverknüpfungen",
          desc: "Referenzieren Sie den Geschäftspartner in Cashflow-Einträgen.",
        },
      ],
      finalTitle: "Halten Sie Geschäftspartner an einem Ort",
      finalSubtitle: "Starten Sie kostenlos und fügen Sie Ihren ersten Geschäftspartner hinzu.",
    },
  },

  inventory: {
    name: "Bestand",
    preview: {
      label: "Bestand",
      metric: { label: "Artikel", value: "1.284", note: "42 Kategorien" },
      secondary: { label: "Einheiten auf Lager", value: "8.960" },
      chartLabel: "Artikel nach Einheitentyp",
      rows: [
        { label: "SKU-1042", value: "240 Einheiten", status: "positive" },
        { label: "SKU-2210", value: "18 Einheiten", status: "warning" },
        { label: "SKU-3180", value: "96 Einheiten", status: "positive" },
      ],
    },
    copy: {
      title: "Artikelstammdaten für Lagerbestand und Leistungen",
      subtitle:
        "Halten Sie SKUs, Mengeneinheiten und Bestandsmengen in einer Liste und verknüpfen Sie Artikel mit den Cashflow-Einträgen, die sie bewegen.",
      bullets: [
        "SKU und Artikelname",
        "Mengeneinheit",
        "Bestandsmenge",
        "Verknüpfungen zu Cashflow-Einträgen",
      ],
      outcomes: [
        {
          title: "Eine Artikelliste",
          desc: "Speichern Sie jede SKU einmal – mit Name und Beschreibung.",
        },
        {
          title: "Einheiten und Mengen",
          desc: "Verfolgen Sie Mengeneinheit und Bestandsmenge.",
        },
        {
          title: "Statuskontrolle",
          desc: "Deaktivieren Sie Artikel, ohne ihre Historie zu löschen.",
        },
        {
          title: "Mit Cashflow verbinden",
          desc: "Verknüpfen Sie Bestandszeilen mit den Einträgen, die den Bestand bewegen.",
        },
      ],
      steps: [
        {
          title: "Artikel erstellen",
          desc: "Fügen Sie SKU, Name und Beschreibung hinzu.",
        },
        {
          title: "Einheit und Menge festlegen",
          desc: "Wählen Sie die Mengeneinheit und erfassen Sie die Bestandsmenge.",
        },
        {
          title: "Mit Einträgen verknüpfen",
          desc: "Referenzieren Sie den Artikel in den Cashflow-Einträgen, die ihn bewegen.",
        },
      ],
      capabilitiesTitle: "Saubere Artikeldaten, mit Finanzen verbunden",
      capabilitiesSubtitle:
        "Ein einfacher Artikelstamm, der mit dem Cashflow verbunden bleibt, den er beeinflusst.",
      capabilities: [
        {
          title: "Artikeldatensätze",
          desc: "SKU, Name, Beschreibung und aktiver Status.",
        },
        {
          title: "Mengeneinheiten",
          desc: "Freie Einheiten wie Stück, Kilogramm oder Stunden.",
        },
        {
          title: "Bestandsmenge",
          desc: "Führen Sie die aktuelle Menge bei jedem Artikel.",
        },
        {
          title: "Eintragsverknüpfungen",
          desc: "Referenzieren Sie Artikel in Cashflow-Einträgen.",
        },
      ],
      finalTitle: "Halten Sie Artikeldaten sauber",
      finalSubtitle: "Starten Sie kostenlos und fügen Sie Ihre erste SKU hinzu.",
    },
  },
};

export default de;
