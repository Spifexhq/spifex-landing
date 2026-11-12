import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const lb: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Cashflow",
    preview: {
      label: "Cashflow",
      metric: { label: "Cash-Positioun", value: "€482,9k", note: "+8,2 % vs. Plang" },
      secondary: { label: "Geplangt", value: "€164,2k" },
      chartLabel: "Plang vs. ofgerechent",
      rows: [
        { label: "Loun", value: "€28.900", status: "positive" },
        { label: "Fournisseurbezuelung", value: "€12.400", status: "warning" },
        { label: "Kaartenofrechnung", value: "€6.120", status: "positive" },
      ],
    },
    copy: {
      title: "Wësst, wat kënnt, wat geet a wat nach offen ass",
      subtitle:
        "Plangt Einträg, rechent se géint Bankkonten of a hält all Bewegung mat der Kategorie, dem Projet oder dem Departement verbonnen, deen se verantwortet.",
      bullets: [
        "Geplangt an ofgerechent Einträg an enger Vue",
        "Deelofrechnungen an intern Iwwerweisungen",
        "Kategorien, Projeten an Departementer",
        "Filter, gespäichert Vuen an Anhäng",
      ],
      outcomes: [
        {
          title: "Gesitt de Cashplang",
          desc: "Erstellt geplangt Einträg mat Daten, Kategorien a Verantwortlechen, sou datt de Mount mat enger kloerer Basis ufänkt.",
        },
        {
          title: "Rechent géint richteg Konten of",
          desc: "Erfaasst komplett oder deelweis Ofrechnungen géint Bankkonten a hält de offene Saldo aktuell.",
        },
        {
          title: "Hält Iwwerweisungen getrennt",
          desc: "Bewegt Suen tëschent Konten, ouni Recetten oder Ausgaben opzebläschen.",
        },
        {
          title: "Bericht aus deene selwechten Daten",
          desc: "Filtert offen an ofgerechent Positiounen pro Kategorie, Projet oder Departement.",
        },
      ],
      steps: [
        {
          title: "Erstellt de Workspace",
          desc: "Wielt Land, Währung an Workspace-Typ. Start am Gratisplan.",
        },
        {
          title: "Füügt Konten a Kategorien bäi",
          desc: "Füügt d'Bankkonten an d'Kategorien bäi, déi Äert Team schonn benotzt.",
        },
        {
          title: "Plangt, rechent of a kontrolléiert",
          desc: "Plangt Einträg, rechent se of a kontrolléiert d'Positioun, ouni eng Tabell nei opzebauen.",
        },
      ],
      capabilitiesTitle: "D'Bausteng vun engem Cashplang",
      capabilitiesSubtitle:
        "All Eintrag hält säin Betrag, seng Daten, seng Verantwortung a seng Settlement-Historie op enger Plaz.",
      capabilities: [
        {
          title: "Geplangt Einträg",
          desc: "Erfaasst Betrag, Fällegkeet, Kategorie, Projet a Géigepartei.",
        },
        {
          title: "Settlements",
          desc: "Rechent komplett oder deelweis géint e Bankkonto of, mat engem lidderegen offene Saldo.",
        },
        {
          title: "Intern Iwwerweisungen",
          desc: "Bewegt Fongen tëschent Konten, ouni Recetten oder Ausgaben ze änneren.",
        },
        {
          title: "Allocatiounen",
          desc: "Deelt Einträg op Departementer op a verbënnt se mat Projeten.",
        },
        {
          title: "Filter a gespäichert Vuen",
          desc: "Späichert d'Filter an d'Kolonnen, déi Äert Team am meeschten benotzt.",
        },
        {
          title: "Anhäng",
          desc: "Hält Ënnerstëtzungsdokumenter beim Eintrag, zu deem se gehéieren.",
        },
      ],
      finalTitle: "Start mat engem kloere Cashplang",
      finalSubtitle:
        "Erstellt e gratis Workspace a füügt d'Konten a Kategorien bäi, déi Dir schonn benotzt.",
    },
  },
  banking: {
    name: "Bank a Bezuelungen",
    preview: {
      label: "Banking",
      metric: { label: "Konten", value: "4", note: "2 Währungen" },
      secondary: { label: "Relevé-Zeilen", value: "186" },
      chartLabel: "Ofgeglach vs. ausstoend",
      rows: [
        { label: "Exploitatiounskonto", value: "Ofgeglach", status: "positive" },
        { label: "Steierkonto", value: "12 ausstoend", status: "warning" },
        { label: "Reservekonto", value: "Ofgeglach", status: "positive" },
      ],
    },
    copy: {
      title: "Bankkonten a Relevéen am selwechte Workspace",
      subtitle:
        "Hält Kontodetailer, importéiert Relevéen an Ofgläichsentscheedungen zesummen, sou datt d'Reconciliatioun net an enger separater Tabell lieft.",
      bullets: [
        "Bankkonten a Salden",
        "Relevé-Importen a Parsing",
        "Vorgeschloen Ofgläich",
        "Reconciliatiouns-Iwwerpréiwung",
      ],
      outcomes: [
        {
          title: "Eng Kontoelëscht",
          desc: "Hält Banknumm, Kontotyp, Währung a Saldo am Workspace.",
        },
        {
          title: "Importéiert Relevéen",
          desc: "Luet e Relevé erop a kontrolléiert déi geparste Zeilen, ier Dir se iwwerhëlt.",
        },
        {
          title: "Gläicht Bewegung of",
          desc: "Benotzt virgeschloe Matcher tëschent Relevé-Zeilen a Cashflow-Einträg a bestätegt se dann.",
        },
        {
          title: "Kontrolléiert Ausnamen",
          desc: "Gesitt net ofgeglach an ausstoend Zeilen, amplaz a Fichieren ze sichen.",
        },
      ],
      steps: [
        {
          title: "Füügt e Bankkonto bäi",
          desc: "Setzt d'Institutioun, den Kontotyp, d'Währung an d'Éischtdetailer.",
        },
        {
          title: "Importéiert e Relevé",
          desc: "Luet d'Fichier erop a kontrolléiert déi geparste Zeilen virum Import.",
        },
        {
          title: "Gläicht of a rekonziliéiert",
          desc: "Bestätegt virgeschloe Matcher a hält Ausname sichtbar.",
        },
      ],
      capabilitiesTitle: "Bankingdaten, ouni d'Tabell niewendrun",
      capabilitiesSubtitle:
        "Konten, Relevé-Zeilen an Ofgläichsentscheedungen bleiwen mam Cashflow verbonnen, deen se erklären.",
      capabilities: [
        {
          title: "Bankkonten",
          desc: "Institutioun, Typ, Währung a Kontodetailer pro Workspace.",
        },
        {
          title: "Relevé-Importen",
          desc: "Luet Relevéen erop a parst se mat enger Iwwerpréiwungsetapp virum Iwwerhuelen.",
        },
        {
          title: "Vorgeschloen Ofgläich",
          desc: "Klassifizéiert Relevé-Zeilen géint Einträg a widderverwendbar Mustere.",
        },
        {
          title: "Reconciliatiouns-Iwwerpréiwung",
          desc: "Hält ausstoend, ofgeglach an net ofgeglach Zeilen sichtbar.",
        },
        {
          title: "Settlement-Linken",
          desc: "Verbindt ofgerechent Bewegung mam Bankkonto, deen se kritt huet.",
        },
        {
          title: "Workspace-Rollen",
          desc: "Hält Kontodaten op de Workspace a seng Memberen limitéiert.",
        },
      ],
      finalTitle: "Brëngt Banking an dee selwechte Workspace",
      finalSubtitle: "Start gratis a füügt Ären éischte Bankkonto bäi.",
    },
  },
  spend: {
    name: "Ausgaben a Settlements",
    preview: {
      label: "Ausgaben",
      metric: { label: "Offen Sortie", value: "€38,4k", note: "14 Einträg" },
      secondary: { label: "Dëse Mount ofgerechent", value: "€96,2k" },
      chartLabel: "Ofgerechent vs. offen",
      rows: [
        { label: "Reesen", value: "€2.840", status: "positive" },
        { label: "Software", value: "€1.290", status: "warning" },
        { label: "Büro", value: "€640", status: "positive" },
      ],
    },
    copy: {
      title: "Verfollegt Ausgaben a rechent se géint de Plang of",
      subtitle:
        "Erfaasst Sortie-Einträg, allocéiert se Kategorien, Projeten oder Departementer a rechent se komplett oder deelweis of.",
      bullets: [
        "Sortie-Einträg mat Fällegkeeten",
        "Deelofrechnungen",
        "Projet- an Departementsallocatioun",
        "Vuen op offene Saldo",
      ],
      outcomes: [
        {
          title: "Gesitt engagéiert Ausgaben",
          desc: "Erfaasst Sortie-Einträg mat Fällegkeeten, Kategorien a Verantwortlechen.",
        },
        {
          title: "Rechent deelweis of",
          desc: "Wendt eng oder méi Ofrechnungen op en Eintrag un a verfollegt de Reschtbetrag.",
        },
        {
          title: "Allocéiert d'Käschten",
          desc: "Deelt Ausgaben op Departementer op a verbënnt se mat Projeten.",
        },
        {
          title: "Kontrolléiert, wat offen ass",
          desc: "Filtert offen an ofgerechent Ausgaben, ouni Daten z'exportéieren.",
        },
      ],
      steps: [
        {
          title: "Erfaasst d'Sortie",
          desc: "Erfaasst Betrag, Fällegkeet, Kategorie, Projet a Géigepartei.",
        },
        {
          title: "Rechent géint de Konto of",
          desc: "Wendt eng oder méi Ofrechnungen un a hält den offene Saldo aktuell.",
        },
        {
          title: "Kontrolléiert de Saldo",
          desc: "Filtert ofgerechent an offen Ausgaben pro Kategorie, Projet oder Departement.",
        },
      ],
      capabilitiesTitle: "Ausgaben, déi mam Settlement verbonne bleiwen",
      capabilitiesSubtitle:
        "Sortie-Einträg behalen hir Allocatioun a Settlement-Historie, amplaz an enger separater Tabell ze landen.",
      capabilities: [
        {
          title: "Sortie-Einträg",
          desc: "Betrag, Fällegkeet, Kategorie, Projet a Géigepartei.",
        },
        {
          title: "Deelofrechnungen",
          desc: "Rechent en Eintrag iwwer méi Bezuelungen of.",
        },
        {
          title: "Allocatiounen",
          desc: "Gitt Prozenter un Departementer a verbënnt Projeten.",
        },
        {
          title: "Vuen op offen Beträg",
          desc: "Gesitt offen an ofgerechent Ausgaben mat gespäicherte Filter.",
        },
      ],
      finalTitle: "Hält Ausgaben a Settlement verbonnen",
      finalSubtitle: "Start gratis a erfaasst Ären éischte Sortie-Eintrag.",
    },
  },
  ledger: {
    name: "Haaptbuch",
    preview: {
      label: "Haaptbuch",
      metric: { label: "Buchungskonten", value: "128", note: "6 Sammelkonten" },
      secondary: { label: "Journalentréen", value: "1.842" },
      chartLabel: "Buchungsaktivitéit",
      rows: [
        { label: "Recetten · 4010", value: "Ausgeglach", status: "positive" },
        { label: "Loun · 6200", value: "Gebucht", status: "positive" },
        { label: "Suspense · 9999", value: "Iwwerpréiwen", status: "warning" },
      ],
    },
    copy: {
      title: "E Kontenplang fir konsistent Reporting",
      subtitle:
        "Strukturéiert Sammel- a Buchungskonten, erfaasst Journalentréen a hält Exercicer an Dimensiounen ënner Kontroll.",
      bullets: [
        "Sammel- a Buchungskonten",
        "Journalentréen a Bicher",
        "Exercicer",
        "Dimensiounen a Buchungsrichtlinnen",
      ],
      outcomes: [
        {
          title: "Strukturéiert de Kontenplang",
          desc: "Erstellt Sammel- a Buchungskonten mat Coden an normale Salden.",
        },
        {
          title: "Erfaasst Journalen",
          desc: "Bucht Journalentréen mat Zeilen, Bicher an Exercicer.",
        },
        {
          title: "Hält Dimensiounen",
          desc: "Definéiert Dimensiounen an erlaabte Wäerter fir d'Reportingstruktur.",
        },
        {
          title: "Kontrolléiert d'Buchung",
          desc: "Benotzt Buchungsrichtlinnen a manuell Buchungskontrollen, wou néideg.",
        },
      ],
      steps: [
        {
          title: "Designt de Kontenplang",
          desc: "Erstellt d'Sammel- a Buchungskonten, déi Äert Reporting braucht.",
        },
        {
          title: "Erfaasst Entréen",
          desc: "Bucht Journalentréen mam richtegen Buch, Exercice an Dimensiounen.",
        },
        {
          title: "Kontrolléiert Exercicer",
          desc: "Hält Exercicer a Buchungsstatus ënner Kontroll.",
        },
      ],
      capabilitiesTitle: "Comptabilitéitsstruktur, déi hält",
      capabilitiesSubtitle:
        "Kontenplang, Journalen, Exercicer an Dimensiounen deelen ee Workspace, amplaz auserneen ze driften.",
      capabilities: [
        {
          title: "Kontenplang",
          desc: "Sammel- a Buchungskonten mat Coden, Typen an normale Salden.",
        },
        {
          title: "Journalentréen",
          desc: "Méizeileg Entréen mat Bicher, Exercicer a Status.",
        },
        {
          title: "Exercicer",
          desc: "Öffnet a schléisst Exercicer fir all Comptabilitéitsbuch.",
        },
        {
          title: "Dimensiounen",
          desc: "Definéiert Dimensiounen, Wäerter an Kontoniveau-Reegelen.",
        },
        {
          title: "Buchungsrichtlinnen",
          desc: "Kontrolléiert, wéi Entréen gebucht ginn a wéi eng Konten manuell Buchung erlaben.",
        },
        {
          title: "Kontokontrollen",
          desc: "Bankkontrollkonten a Klassifikatiounsschutz.",
        },
      ],
      finalTitle: "Baut en Haaptbuch, dat Dir verdeedegt kënnt",
      finalSubtitle: "Start gratis a formt de Kontenplang ronderëm Äert Reporting.",
    },
  },
  projects: {
    name: "Projeten",
    preview: {
      label: "Projeten",
      metric: { label: "Aktiv Projeten", value: "24", note: "6 Typen" },
      secondary: { label: "Verbonnen Einträg", value: "312" },
      chartLabel: "Geplangt vs. ofgerechent pro Projet",
      rows: [
        { label: "Implementatioun", value: "€420k", status: "positive" },
        { label: "Migratioun", value: "€186k", status: "warning" },
        { label: "Support", value: "€96k", status: "positive" },
      ],
    },
    copy: {
      title: "Gesitt Käschten a Recetten pro Projet",
      subtitle:
        "Erstellt Projeten, verbënnt Cashflow-Einträg mat hinnen a vergläicht geplangt, ofgerechent an offen Beträg an engem Filter.",
      bullets: [
        "Projetakten mat Coden an Typen",
        "Projetlinken um Eintrag",
        "Departementsallocatiounen",
        "Projetspezifesch Vuen",
      ],
      outcomes: [
        {
          title: "Erstellt eng Projetakt",
          desc: "Numm, Code, Typ a Beschreiwung mat aktivem Status.",
        },
        {
          title: "Verbindt Einträg",
          desc: "Verbindt geplangt an ofgerechent Cashflow-Einträg mam Projet.",
        },
        {
          title: "Allocéiert Departementer",
          desc: "Deelt d'Käschten vun engem Eintrag op Departementer op.",
        },
        {
          title: "Kontrolléiert de Projet",
          desc: "Filtert Einträg an offen Beträg pro Projet.",
        },
      ],
      steps: [
        {
          title: "Erstellt de Projet",
          desc: "Füügt Numm, Code an Typ bäi, sou datt de Projet einfach z'identifizéieren ass.",
        },
        {
          title: "Verbindt Einträg",
          desc: "Verbindt d'Cashflow-Einträg, déi zum Projet gehéieren.",
        },
        {
          title: "Kontrolléiert d'Positioun",
          desc: "Filtert geplangt, ofgerechent an offen Beträg pro Projet.",
        },
      ],
      capabilitiesTitle: "Projetkontext op all Bewegung",
      capabilitiesSubtitle:
        "Einträg, Departementsopdeelungen a Settlement-Status bleiwen mam Projet verbonnen, deen se verantwortet.",
      capabilities: [
        {
          title: "Projetakten",
          desc: "Numm, Code, Typ, Beschreiwung a Status.",
        },
        {
          title: "Eintragslinken",
          desc: "Verbindt Cashflow-Einträg direkt mat engem Projet.",
        },
        {
          title: "Departementsopdeelung",
          desc: "Allocéiert Eintragsprozenter op Departementer.",
        },
        {
          title: "Projetfilter",
          desc: "Kontrolléiert Einträg, Settlements an offen Beträg pro Projet.",
        },
      ],
      finalTitle: "Maacht d'Projetleeschtung sichtbar",
      finalSubtitle: "Start gratis a erstellt Ären éischte Projet.",
    },
  },
  departments: {
    name: "Departementer",
    preview: {
      label: "Departementer",
      metric: { label: "Departementer", value: "8", note: "3 Käschtecenter" },
      secondary: { label: "Allocéiert Einträg", value: "246" },
      chartLabel: "Einträg pro Departement",
      rows: [
        { label: "Operatiounen", value: "42%", status: "positive" },
        { label: "Verkaf", value: "31%", status: "warning" },
        { label: "Entwécklung", value: "27%", status: "positive" },
      ],
    },
    copy: {
      title: "Schreift all Bewegung dem Team zou, deen se verantwortet",
      subtitle:
        "Erstellt Departementer, allocéiert Eintragsprozenter a kontrolléiert d'Zuelen pro Team, ouni de Rapport nei opzebauen.",
      bullets: [
        "Departementsakten",
        "Prozentallocatiounen",
        "Eintragsfilter pro Departement",
        "Gespäichert Vuen",
      ],
      outcomes: [
        {
          title: "Erstellt d'Departement",
          desc: "Numm, Code an aktive Status fir all Käschtecenter.",
        },
        {
          title: "Allocéiert Einträg",
          desc: "Gitt engem Eintrag en oder méi Departementer mat Prozenter.",
        },
        {
          title: "Filtert pro Team",
          desc: "Kontrolléiert Einträg a Settlements fir een Departement zur Zäit.",
        },
        {
          title: "Hält d'Verantwortung sichtbar",
          desc: "Gesitt, wéi en Team d'Ausgaben am selwechte Workspace verantwortet.",
        },
      ],
      steps: [
        {
          title: "Definéiert Departementer",
          desc: "Füügt d'Nimm an Coden bäi, déi Är Team'en schonn benotzen.",
        },
        {
          title: "Allocéiert Einträg",
          desc: "Deelt en Eintrag mat Prozenter op Departementer op.",
        },
        {
          title: "Kontrolléiert d'Zuelen",
          desc: "Filtert Cashflow-Einträg pro Departement a kontrolléiert d'Positioun.",
        },
      ],
      capabilitiesTitle: "Eng Käschtecenter-Vue, déi Dir vertraue kënnt",
      capabilitiesSubtitle:
        "Departementsopdeelungen bleiwen um Eintrag, amplaz beim Reporting nei rekonstruéiert ze ginn.",
      capabilities: [
        {
          title: "Departementsakten",
          desc: "Numm, Code a Status fir all Käschtecenter.",
        },
        {
          title: "Prozentallocatioun",
          desc: "Deelt en Eintrag mat definéierte Prozenter op Departementer op.",
        },
        {
          title: "Eintragsfilter",
          desc: "Filtert Cashflow-Einträg pro Departement.",
        },
        {
          title: "Gespäichert Vuen",
          desc: "Hält d'Kolonnen an d'Filter, déi Äert Team benotzt.",
        },
      ],
      finalTitle: "Gitt all Bewegung en Owner",
      finalSubtitle: "Start gratis a definéiert Äert éischte Departement.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Entitéiten",
      metric: { label: "Entitéiten", value: "186", note: "7 Typen" },
      secondary: { label: "Aktiv", value: "164" },
      chartLabel: "Entitéiten pro Typ",
      rows: [
        { label: "Clienten", value: "82", status: "positive" },
        { label: "Fournisseuren", value: "46", status: "positive" },
        { label: "Sous-traitanten", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Ee Verzeechnes fir all Géigepartei",
      subtitle:
        "Hält Clienten, Fournisseuren, Mataarbechter, Sous-traitanten a Partner an engem Workspace a verbënnt se mat de Cashflow-Einträg, op déi se sech bezéien.",
      bullets: [
        "Clienten, Fournisseuren a Partner",
        "Kontakt- a Steierdetailer",
        "Entitéitstypen a Status",
        "Linken op Cashflow-Einträg",
      ],
      outcomes: [
        {
          title: "Ee Verzeechnes",
          desc: "Späichert all Géigepartei eng Kéier mat engem kloeren Entitéitstyp.",
        },
        {
          title: "Kontaktdetailer",
          desc: "Hält E-Mail, Telefon an Adressinformatioun bei der Akt.",
        },
        {
          title: "Steier- a Bankdetailer",
          desc: "Späichert Steieridentifikatiounen a Bankdetailer, wou relevant.",
        },
        {
          title: "Verbindt d'Haaptbuch",
          desc: "Referenzéiert d'Entitéit op de Cashflow-Einträg, déi se bezuelt oder kritt huet.",
        },
      ],
      steps: [
        {
          title: "Füügt d'Entitéit bäi",
          desc: "Wielt den Entitéitstyp a füügt Numm a Kontaktdetailer bäi.",
        },
        {
          title: "Klassifizéiert d'Relatioun",
          desc: "Markéiert se als Client, Fournisseur, Mataarbechter, Sous-traitant, Partner oder aneren Typ.",
        },
        {
          title: "Verbindt Einträg",
          desc: "Referenzéiert d'Entitéit op de Cashflow-Einträg, op déi se sech bezéien.",
        },
      ],
      capabilitiesTitle: "Géigeparteidaten, déi nëtzlech bleiwen",
      capabilitiesSubtitle:
        "Eng Akt fir d'Leit an Organisatiounen hannert Ärem Cashflow, amplaz enger Kontaktlëscht an engem separaten Tool.",
      capabilities: [
        {
          title: "Entitéitsakten",
          desc: "Clienten, Fournisseuren, Mataarbechter, Sous-traitanten, Partner a méi.",
        },
        {
          title: "Kontaktdetailer",
          desc: "E-Mail, Telefon an Adress an enger Akt.",
        },
        {
          title: "Steier- a Bankfelder",
          desc: "Optional Steieridentifikatiounen a Bankdetailer.",
        },
        {
          title: "Eintragslinken",
          desc: "Referenzéiert d'Géigepartei op Cashflow-Einträg.",
        },
      ],
      finalTitle: "Hält Géigeparteien op enger Plaz",
      finalSubtitle: "Start gratis a füügt Är éischt Entitéit bäi.",
    },
  },
  inventory: {
    name: "Inventar",
    preview: {
      label: "Inventar",
      metric: { label: "Artikelen", value: "1.284", note: "42 Kategorien" },
      secondary: { label: "Eenheeten um Lager", value: "8.960" },
      chartLabel: "Artikelen pro Eenheetstyp",
      rows: [
        { label: "SKU-1042", value: "240 Eenheeten", status: "positive" },
        { label: "SKU-2210", value: "18 Eenheeten", status: "warning" },
        { label: "SKU-3180", value: "96 Eenheeten", status: "positive" },
      ],
    },
    copy: {
      title: "Artikeldaten fir Lager a Servicer",
      subtitle:
        "Hält SKU, Moosseenheeten a Lagerbestand an enger Lëscht a verbënnt d'Artikelen dann mat de Cashflow-Einträg, déi se bewegen.",
      bullets: [
        "SKU an Artikelnumm",
        "Moosseenheet",
        "Lagerbestand",
        "Linken op Cashflow-Einträg",
      ],
      outcomes: [
        {
          title: "Eng Artikellëscht",
          desc: "Späichert all SKU eng Kéier mat Numm a Beschreiwung.",
        },
        {
          title: "Eenheeten a Quantitéiten",
          desc: "Verfollegt d'Moosseenheet an de Lagerbestand.",
        },
        {
          title: "Statuskontroll",
          desc: "Deaktivéiert Artikelen, ouni hir Historie ze läschen.",
        },
        {
          title: "Verbindt mat Cashflow",
          desc: "Verbindt Inventarzeilen mat den Einträg, déi de Bestand bewegen.",
        },
      ],
      steps: [
        {
          title: "Erstellt den Artikel",
          desc: "Füügt SKU, Numm a Beschreiwung bäi.",
        },
        {
          title: "Setzt Eenheet a Quantitéit",
          desc: "Wielt d'Moosseenheet a erfaasst de Lagerbestand.",
        },
        {
          title: "Verbindt en mat Einträg",
          desc: "Referenzéiert den Artikel op de Cashflow-Einträg, déi en bewegen.",
        },
      ],
      capabilitiesTitle: "Propper Artikeldaten, verbonne mat de Finanzen",
      capabilitiesSubtitle:
        "E einfachen Artikelstamm, dee mam Cashflow verbonnen bleift, deen en beaflosst.",
      capabilities: [
        {
          title: "Artikelakten",
          desc: "SKU, Numm, Beschreiwung an aktive Status.",
        },
        {
          title: "Moosseenheeten",
          desc: "Fräi Text-Eenheeten wéi Stéck, Kilogramm oder Stonnen.",
        },
        {
          title: "Lagerbestand",
          desc: "Hält déi aktuell Quantitéit bei all Artikel.",
        },
        {
          title: "Eintragslinken",
          desc: "Referenzéiert Artikelen op Cashflow-Einträg.",
        },
      ],
      finalTitle: "Hält Artikeldaten propper",
      finalSubtitle: "Start gratis a füügt Äre éischten SKU bäi.",
    },
  },
};

export default lb;
