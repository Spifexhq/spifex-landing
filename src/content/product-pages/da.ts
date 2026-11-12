import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const da: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Cashflow",
    preview: {
      label: "Cashflow",
      metric: {
        label: "Likviditetsposition",
        value: "€482,9k",
        note: "+8,2 % mod plan",
      },
      secondary: {
        label: "Planlagt",
        value: "€164,2k",
      },
      chartLabel: "Plan mod afregnet",
      rows: [
        { label: "Løn", value: "€28.900", status: "positive" },
        { label: "Leverandørbetaling", value: "€12.400", status: "warning" },
        { label: "Kortafregning", value: "€6.120", status: "positive" },
      ],
    },
    copy: {
      title: "Ved, hvad der kommer ind, går ud og stadig udestår",
      subtitle:
        "Planlæg posteringer, afregn dem mod bankkonti, og hold hver bevægelse knyttet til den kategori, det projekt eller den afdeling, der ejer den.",
      bullets: [
        "Planlagte og afregnede posteringer i ét overblik",
        "Delvise afregninger og interne overførsler",
        "Kategorier, projekter og afdelinger",
        "Filtre, gemte visninger og bilag",
      ],
      outcomes: [
        {
          title: "Se cashflowplanen",
          desc: "Opret planlagte posteringer med datoer, kategorier og ejere, så måneden starter fra et fast udgangspunkt.",
        },
        {
          title: "Afregn mod rigtige konti",
          desc: "Registrér hele eller delvise afregninger mod bankkonti, og hold den åbne saldo opdateret.",
        },
        {
          title: "Hold overførsler adskilt",
          desc: "Flyt penge mellem konti uden at oppuste indtægter eller udgifter.",
        },
        {
          title: "Rapportér på samme data",
          desc: "Filtrér udestående og afregnede positioner pr. kategori, projekt eller afdeling.",
        },
      ],
      steps: [
        {
          title: "Opret arbejdsområdet",
          desc: "Vælg land, valuta og type arbejdsområde. Start på den gratis plan.",
        },
        {
          title: "Tilføj konti og kategorier",
          desc: "Tilføj de bankkonti og kategorier, dit team allerede bruger.",
        },
        {
          title: "Planlæg, afregn og følg op",
          desc: "Planlæg posteringer, afregn dem, og følg positionen uden at genopbygge et regneark.",
        },
      ],
      capabilitiesTitle: "Byggeklodserne i en cashflowplan",
      capabilitiesSubtitle: "Hver postering bevarer beløb, datoer, ejerskab og afregningshistorik ét sted.",
      capabilities: [
        {
          title: "Planlagte posteringer",
          desc: "Registrér beløb, forfaldsdato, kategori, projekt og modpart.",
        },
        {
          title: "Afregninger",
          desc: "Afregn helt eller delvist mod en bankkonto med en løbende åben saldo.",
        },
        {
          title: "Interne overførsler",
          desc: "Flyt midler mellem konti uden at ændre indtægter eller udgifter.",
        },
        {
          title: "Fordelinger",
          desc: "Opdel posteringer på afdelinger, og knyt dem til projekter.",
        },
        {
          title: "Filtre og gemte visninger",
          desc: "Gem de filtre og kolonner, dit team bruger mest.",
        },
        {
          title: "Bilag",
          desc: "Opbevar understøttende dokumenter sammen med den postering, de hører til.",
        },
      ],
      finalTitle: "Start med en klar cashflowplan",
      finalSubtitle: "Opret et gratis arbejdsområde, og tilføj de konti og kategorier, du allerede bruger.",
    },
  },

  banking: {
    name: "Bank og betalinger",
    preview: {
      label: "Bank",
      metric: {
        label: "Konti",
        value: "4",
        note: "2 valutaer",
      },
      secondary: {
        label: "Kontoudtogslinjer",
        value: "186",
      },
      chartLabel: "Matchet mod afventende",
      rows: [
        { label: "Driftskonto", value: "Matchet", status: "positive" },
        { label: "Skattekonto", value: "12 afventer", status: "warning" },
        { label: "Reservekonto", value: "Matchet", status: "positive" },
      ],
    },
    copy: {
      title: "Bankkonti og kontoudtog i samme arbejdsområde",
      subtitle:
        "Hold kontooplysninger, importerede kontoudtog og matchningsbeslutninger samlet, så afstemningen ikke lever i et separat regneark.",
      bullets: [
        "Bankkonti og saldi",
        "Import og fortolkning af kontoudtog",
        "Foreslået matching",
        "Gennemgang af afstemning",
      ],
      outcomes: [
        {
          title: "Én kontoliste",
          desc: "Hold banknavn, kontotype, valuta og saldo i arbejdsområdet.",
        },
        {
          title: "Importér kontoudtog",
          desc: "Upload et kontoudtog, og gennemgå de fortolkede linjer, før de bogføres.",
        },
        {
          title: "Match bevægelser",
          desc: "Brug foreslåede match mellem kontoudtogslinjer og cashflowposteringer, og bekræft dem.",
        },
        {
          title: "Gennemgå afvigelser",
          desc: "Se umatchede og afventende linjer i stedet for at lede gennem filer.",
        },
      ],
      steps: [
        {
          title: "Tilføj en bankkonto",
          desc: "Angiv institut, kontotype, valuta og oplysninger ved opstart.",
        },
        {
          title: "Importér et kontoudtog",
          desc: "Upload filen, og gennemgå de fortolkede linjer før import.",
        },
        {
          title: "Match og afstem",
          desc: "Bekræft foreslåede match, og hold afvigelser synlige.",
        },
      ],
      capabilitiesTitle: "Bankdata uden regnearket ved siden af",
      capabilitiesSubtitle: "Konti, kontoudtogslinjer og matchningsbeslutninger forbliver forbundet med den cashflow, de forklarer.",
      capabilities: [
        {
          title: "Bankkonti",
          desc: "Institut, type, valuta og kontooplysninger pr. arbejdsområde.",
        },
        {
          title: "Import af kontoudtog",
          desc: "Upload og fortolk kontoudtog med et gennemgangstrin før bogføring.",
        },
        {
          title: "Foreslået matching",
          desc: "Klassificér kontoudtogslinjer mod posteringer og genbrugelige mønstre.",
        },
        {
          title: "Gennemgang af afstemning",
          desc: "Hold afventende, matchede og umatchede linjer synlige.",
        },
        {
          title: "Kobling til afregninger",
          desc: "Forbind afregnede bevægelser med den bankkonto, der modtog dem.",
        },
        {
          title: "Roller i arbejdsområdet",
          desc: "Hold kontooplysningerne afgrænset til arbejdsområdet og dets medlemmer.",
        },
      ],
      finalTitle: "Tag banken ind i samme arbejdsområde",
      finalSubtitle: "Start gratis, og tilføj din første bankkonto.",
    },
  },

  spend: {
    name: "Udgifter og afregninger",
    preview: {
      label: "Udgifter",
      metric: {
        label: "Åben udgående saldo",
        value: "€38,4k",
        note: "14 posteringer",
      },
      secondary: {
        label: "Afregnet denne måned",
        value: "€96,2k",
      },
      chartLabel: "Afregnet mod udestående",
      rows: [
        { label: "Rejser", value: "€2.840", status: "positive" },
        { label: "Software", value: "€1.290", status: "warning" },
        { label: "Kontor", value: "€640", status: "positive" },
      ],
    },
    copy: {
      title: "Følg udgående betalinger, og afregn dem mod planen",
      subtitle:
        "Registrér udgående posteringer, fordel dem på kategorier, projekter eller afdelinger, og afregn dem helt eller delvist.",
      bullets: [
        "Udgående posteringer med forfaldsdato",
        "Delvise afregninger",
        "Fordeling på projekt og afdeling",
        "Visninger af udestående saldo",
      ],
      outcomes: [
        {
          title: "Se de bundne udgifter",
          desc: "Registrér udgående posteringer med forfaldsdatoer, kategorier og ejere.",
        },
        {
          title: "Afregn i dele",
          desc: "Anvend en eller flere afregninger på en postering, og følg det resterende beløb.",
        },
        {
          title: "Fordel omkostningen",
          desc: "Opdel udgifter på afdelinger, og knyt dem til projekter.",
        },
        {
          title: "Gennemgå det åbne",
          desc: "Filtrér udestående og afregnede udgifter uden at eksportere data.",
        },
      ],
      steps: [
        {
          title: "Registrér udbetalingen",
          desc: "Registrér beløb, forfaldsdato, kategori, projekt og modpart.",
        },
        {
          title: "Afregn mod kontoen",
          desc: "Anvend en eller flere afregninger, og hold den åbne saldo opdateret.",
        },
        {
          title: "Gennemgå saldoen",
          desc: "Filtrér afregnede og udestående udgifter pr. kategori, projekt eller afdeling.",
        },
      ],
      capabilitiesTitle: "Udgifter, der forbliver forbundet med afregningen",
      capabilitiesSubtitle: "Udgående posteringer bevarer deres fordeling og afregningshistorik i stedet for at ende i et separat ark.",
      capabilities: [
        {
          title: "Udgående posteringer",
          desc: "Beløb, forfaldsdato, kategori, projekt og modpart.",
        },
        {
          title: "Delvise afregninger",
          desc: "Afregn en postering over flere betalinger.",
        },
        {
          title: "Fordelinger",
          desc: "Tildel procenter til afdelinger, og knyt projekter.",
        },
        {
          title: "Udestående visninger",
          desc: "Se åbne og afregnede udgifter med gemte filtre.",
        },
      ],
      finalTitle: "Hold udgifter og afregning forbundet",
      finalSubtitle: "Start gratis, og registrér din første udgående postering.",
    },
  },

  ledger: {
    name: "Hovedbog",
    preview: {
      label: "Hovedbog",
      metric: {
        label: "Bogføringskonti",
        value: "128",
        note: "6 hovedkonti",
      },
      secondary: {
        label: "Journalposteringer",
        value: "1.842",
      },
      chartLabel: "Bogføringsaktivitet",
      rows: [
        { label: "Omsætning · 4010", value: "Afstemt", status: "positive" },
        { label: "Løn · 6200", value: "Bogført", status: "positive" },
        { label: "Transit · 9999", value: "Gennemse", status: "warning" },
      ],
    },
    copy: {
      title: "En kontoplan bygget til konsistent rapportering",
      subtitle:
        "Strukturér hoved- og bogføringskonti, registrér journalposteringer, og hold styr på perioder og dimensioner.",
      bullets: [
        "Hovedkonti og bogføringskonti",
        "Journalposteringer og bøger",
        "Regnskabsperioder",
        "Dimensioner og bogføringspolitikker",
      ],
      outcomes: [
        {
          title: "Strukturér kontoplanen",
          desc: "Opret hoved- og bogføringskonti med koder og normale saldi.",
        },
        {
          title: "Registrér journaler",
          desc: "Bogfør journalposteringer med linjer, bøger og regnskabsperioder.",
        },
        {
          title: "Bevar dimensioner",
          desc: "Definér dimensioner og tilladte værdier for rapporteringsstrukturen.",
        },
        {
          title: "Styr bogføringen",
          desc: "Brug bogføringspolitikker og kontroller for manuel bogføring, hvor det er nødvendigt.",
        },
      ],
      steps: [
        {
          title: "Design kontoplanen",
          desc: "Opret de hoved- og bogføringskonti, din rapportering kræver.",
        },
        {
          title: "Registrér posteringer",
          desc: "Bogfør journalposteringer med den rigtige bog, periode og dimension.",
        },
        {
          title: "Gennemgå perioder",
          desc: "Hold regnskabsperioder og bogføringsstatus under kontrol.",
        },
      ],
      capabilitiesTitle: "Regnskabsstruktur, der holder",
      capabilitiesSubtitle: "Kontoplan, journaler, perioder og dimensioner deler ét arbejdsområde i stedet for at glide fra hinanden.",
      capabilities: [
        {
          title: "Kontoplan",
          desc: "Hoved- og bogføringskonti med koder, typer og normale saldi.",
        },
        {
          title: "Journalposteringer",
          desc: "Posteringer med flere linjer, bøger, perioder og status.",
        },
        {
          title: "Regnskabsperioder",
          desc: "Åbn og luk perioder for hver regnskabsbog.",
        },
        {
          title: "Dimensioner",
          desc: "Definér dimensioner, værdier og regler pr. konto.",
        },
        {
          title: "Bogføringspolitikker",
          desc: "Styr, hvordan posteringer bogføres, og hvilke konti der tillader manuel bogføring.",
        },
        {
          title: "Kontokontroller",
          desc: "Bankkonti til kontrol og beskyttelse af klassifikationen.",
        },
      ],
      finalTitle: "Byg en hovedbog, du kan stå inde for",
      finalSubtitle: "Start gratis, og form kontoplanen efter din rapportering.",
    },
  },

  projects: {
    name: "Projekter",
    preview: {
      label: "Projekter",
      metric: {
        label: "Aktive projekter",
        value: "24",
        note: "6 typer",
      },
      secondary: {
        label: "Knyttede posteringer",
        value: "312",
      },
      chartLabel: "Planlagt mod afregnet pr. projekt",
      rows: [
        { label: "Implementering", value: "€420k", status: "positive" },
        { label: "Migrering", value: "€186k", status: "warning" },
        { label: "Support", value: "€96k", status: "positive" },
      ],
    },
    copy: {
      title: "Se omkostninger og indtægter pr. projekt",
      subtitle:
        "Opret projekter, knyt cashflowposteringer til dem, og sammenlign planlagte, afregnede og udestående beløb i ét filter.",
      bullets: [
        "Projektregistreringer med koder og typer",
        "Projektkobling på posteringsniveau",
        "Fordeling på afdelinger",
        "Projektspecifikke visninger",
      ],
      outcomes: [
        {
          title: "Opret en projektregistrering",
          desc: "Navn, kode, type og beskrivelse med aktiv status.",
        },
        {
          title: "Knyt posteringer",
          desc: "Kobl planlagte og afregnede cashflowposteringer til projektet.",
        },
        {
          title: "Fordel afdelinger",
          desc: "Opdel en posterings omkostning på afdelinger.",
        },
        {
          title: "Gennemgå projektet",
          desc: "Filtrér posteringer og udestående beløb pr. projekt.",
        },
      ],
      steps: [
        {
          title: "Opret projektet",
          desc: "Tilføj navn, kode og type, så projektet er let at identificere.",
        },
        {
          title: "Knyt posteringer",
          desc: "Kobl de cashflowposteringer, der hører til projektet.",
        },
        {
          title: "Gennemgå positionen",
          desc: "Filtrér planlagte, afregnede og udestående beløb pr. projekt.",
        },
      ],
      capabilitiesTitle: "Projektkontekst på hver bevægelse",
      capabilitiesSubtitle: "Posteringer, afdelingsopdelinger og afregningsstatus forbliver knyttet til det projekt, der ejer dem.",
      capabilities: [
        {
          title: "Projektregistreringer",
          desc: "Navn, kode, type, beskrivelse og status.",
        },
        {
          title: "Kobling til posteringer",
          desc: "Knyt cashflowposteringer direkte til et projekt.",
        },
        {
          title: "Afdelingsopdeling",
          desc: "Fordel posteringsprocenter på afdelinger.",
        },
        {
          title: "Projektfiltre",
          desc: "Gennemgå posteringer, afregninger og åbne beløb pr. projekt.",
        },
      ],
      finalTitle: "Gør projektets resultater synlige",
      finalSubtitle: "Start gratis, og opret dit første projekt.",
    },
  },

  departments: {
    name: "Afdelinger",
    preview: {
      label: "Afdelinger",
      metric: {
        label: "Afdelinger",
        value: "8",
        note: "3 omkostningssteder",
      },
      secondary: {
        label: "Fordelte posteringer",
        value: "246",
      },
      chartLabel: "Posteringer pr. afdeling",
      rows: [
        { label: "Drift", value: "42 %", status: "positive" },
        { label: "Salg", value: "31 %", status: "warning" },
        { label: "Udvikling", value: "27 %", status: "positive" },
      ],
    },
    copy: {
      title: "Knyt hver bevægelse til det team, der ejer den",
      subtitle:
        "Opret afdelinger, fordel posteringsprocenter, og gennemgå tallene pr. team uden at genopbygge rapporten.",
      bullets: [
        "Afdelingsregistreringer",
        "Fordeling med procenter",
        "Posteringsfiltre pr. afdeling",
        "Gemte visninger",
      ],
      outcomes: [
        {
          title: "Opret afdelingen",
          desc: "Navn, kode og aktiv status for hvert omkostningssted.",
        },
        {
          title: "Fordel posteringer",
          desc: "Tildel en eller flere afdelinger til en postering med procenter.",
        },
        {
          title: "Filtrér pr. team",
          desc: "Gennemgå posteringer og afregninger for én afdeling ad gangen.",
        },
        {
          title: "Hold ejerskabet synligt",
          desc: "Se, hvilket team der ejer udgiften, i samme arbejdsområde.",
        },
      ],
      steps: [
        {
          title: "Definér afdelinger",
          desc: "Tilføj de navne og koder, dit team allerede bruger.",
        },
        {
          title: "Fordel posteringer",
          desc: "Opdel en postering på afdelinger med procenter.",
        },
        {
          title: "Gennemgå tallene",
          desc: "Filtrér cashflowposteringer pr. afdeling, og gennemgå positionen.",
        },
      ],
      capabilitiesTitle: "Et overblik over omkostningssteder, du kan stole på",
      capabilitiesSubtitle:
        "Afdelingsopdelinger forbliver knyttet til posteringen i stedet for at blive rekonstrueret ved rapportering.",
      capabilities: [
        {
          title: "Afdelingsregistreringer",
          desc: "Navn, kode og status for hvert omkostningssted.",
        },
        {
          title: "Fordeling med procenter",
          desc: "Opdel en postering på afdelinger med definerede procenter.",
        },
        {
          title: "Posteringsfiltre",
          desc: "Filtrér cashflowposteringer pr. afdeling.",
        },
        {
          title: "Gemte visninger",
          desc: "Bevar de kolonner og filtre, dit team bruger.",
        },
      ],
      finalTitle: "Giv hver bevægelse en ejer",
      finalSubtitle: "Start gratis, og definér din første afdeling.",
    },
  },

  crm: {
    name: "CRM",
    preview: {
      label: "Enheder",
      metric: {
        label: "Enheder",
        value: "186",
        note: "7 typer",
      },
      secondary: {
        label: "Aktive",
        value: "164",
      },
      chartLabel: "Enheder pr. type",
      rows: [
        { label: "Kunder", value: "82", status: "positive" },
        { label: "Leverandører", value: "46", status: "positive" },
        { label: "Freelancere", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Ét register for hver modpart",
      subtitle:
        "Saml kunder, leverandører, medarbejdere, freelancere og partnere i ét arbejdsområde, og knyt dem til de cashflowposteringer, de vedrører.",
      bullets: [
        "Kunder, leverandører og partnere",
        "Kontakt- og skatteoplysninger",
        "Enhedstyper og status",
        "Koblinger til cashflowposteringer",
      ],
      outcomes: [
        {
          title: "Ét register",
          desc: "Gem hver modpart én gang med en tydelig enhedstype.",
        },
        {
          title: "Kontaktoplysninger",
          desc: "Bevar mail, telefon og adresse sammen med registreringen.",
        },
        {
          title: "Skatte- og bankoplysninger",
          desc: "Gem skatte-ID'er og bankoplysninger, hvor det er relevant.",
        },
        {
          title: "Forbind hovedbogen",
          desc: "Referér til enheden på de cashflowposteringer, den har betalt eller modtaget.",
        },
      ],
      steps: [
        {
          title: "Tilføj enheden",
          desc: "Vælg enhedstype, og tilføj navn og kontaktoplysninger.",
        },
        {
          title: "Klassificér relationen",
          desc: "Markér den som kunde, leverandør, medarbejder, freelancer, partner eller en anden type.",
        },
        {
          title: "Knyt posteringer",
          desc: "Referér til enheden på de cashflowposteringer, den vedrører.",
        },
      ],
      capabilitiesTitle: "Modpartdata, der bliver ved med at være nyttige",
      capabilitiesSubtitle:
        "Én registrering for de personer og organisationer bag din cashflow i stedet for en kontaktliste i et separat værktøj.",
      capabilities: [
        {
          title: "Enhedsregistreringer",
          desc: "Kunder, leverandører, medarbejdere, freelancere, partnere med flere.",
        },
        {
          title: "Kontaktoplysninger",
          desc: "Mail, telefon og adresse i én registrering.",
        },
        {
          title: "Skatte- og bankfelter",
          desc: "Valgfrie skatte-ID'er og bankoplysninger.",
        },
        {
          title: "Kobling til posteringer",
          desc: "Referér til modparten på cashflowposteringer.",
        },
      ],
      finalTitle: "Hold modparterne samlet",
      finalSubtitle: "Start gratis, og tilføj din første enhed.",
    },
  },

  inventory: {
    name: "Lager",
    preview: {
      label: "Lager",
      metric: {
        label: "Varer",
        value: "1.284",
        note: "42 kategorier",
      },
      secondary: {
        label: "Antal på lager",
        value: "8.960",
      },
      chartLabel: "Varer pr. enhedstype",
      rows: [
        { label: "SKU-1042", value: "240 stk.", status: "positive" },
        { label: "SKU-2210", value: "18 stk.", status: "warning" },
        { label: "SKU-3180", value: "96 stk.", status: "positive" },
      ],
    },
    copy: {
      title: "Varedata til lager og ydelser",
      subtitle:
        "Hold SKU'er, måleenheder og beholdning i én liste, og knyt derefter varerne til de cashflowposteringer, der flytter dem.",
      bullets: [
        "SKU og varenavn",
        "Måleenhed",
        "Beholdning",
        "Koblinger til cashflowposteringer",
      ],
      outcomes: [
        {
          title: "Én vareliste",
          desc: "Gem hver SKU én gang med navn og beskrivelse.",
        },
        {
          title: "Enheder og mængder",
          desc: "Følg måleenhed og beholdning.",
        },
        {
          title: "Statuskontrol",
          desc: "Deaktivér varer uden at slette deres historik.",
        },
        {
          title: "Forbind til cashflow",
          desc: "Knyt lagervarelinjer til de posteringer, der flytter lageret.",
        },
      ],
      steps: [
        {
          title: "Opret varen",
          desc: "Tilføj SKU, navn og beskrivelse.",
        },
        {
          title: "Angiv enhed og mængde",
          desc: "Vælg måleenhed, og registrér beholdningen.",
        },
        {
          title: "Knyt den til posteringer",
          desc: "Referér til varen på de cashflowposteringer, der flytter den.",
        },
      ],
      capabilitiesTitle: "Rene varedata, forbundet med økonomien",
      capabilitiesSubtitle: "Et enkelt varekartotek, der forbliver knyttet til den cashflow, det påvirker.",
      capabilities: [
        {
          title: "Vareregistreringer",
          desc: "SKU, navn, beskrivelse og aktiv status.",
        },
        {
          title: "Måleenheder",
          desc: "Fritekst-enheder som styk, kilogram eller timer.",
        },
        {
          title: "Beholdning",
          desc: "Bevar den aktuelle mængde på hver vare.",
        },
        {
          title: "Kobling til posteringer",
          desc: "Referér til varer på cashflowposteringer.",
        },
      ],
      finalTitle: "Hold varedata rene",
      finalSubtitle: "Start gratis, og tilføj din første SKU.",
    },
  },
};

export default da;
