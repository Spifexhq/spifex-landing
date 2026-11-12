import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const no: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Kontantstrøm",
    preview: {
      label: "Kontantstrøm",
      metric: { label: "Kontantposisjon", value: "€482,9k", note: "+8,2 % mot plan" },
      secondary: { label: "Planlagt", value: "€164,2k" },
      chartLabel: "Plan mot oppgjør",
      rows: [
        { label: "Lønn", value: "€28 900", status: "positive" },
        { label: "Leverandørutbetaling", value: "€12 400", status: "warning" },
        { label: "Kortoppgjør", value: "€6 120", status: "positive" },
      ],
    },
    copy: {
      title: "Vet hva som kommer, går og fortsatt står åpent",
      subtitle:
        "Planlegg poster, gjør dem opp mot bankkontoer og hold hver bevegelse knyttet til kategorien, prosjektet eller avdelingen som eier den.",
      bullets: [
        "Planlagte og oppgjorte poster i én visning",
        "Delvise oppgjør og interne overføringer",
        "Kategorier, prosjekter og avdelinger",
        "Filtre, lagrede visninger og vedlegg",
      ],
      outcomes: [
        {
          title: "Se kontantplanen",
          desc: "Opprett planlagte poster med datoer, kategorier og eiere, slik at måneden starter fra et utgangspunkt.",
        },
        {
          title: "Gjør opp mot reelle kontoer",
          desc: "Registrer hele eller delvise oppgjør mot bankkontoer og hold den åpne saldoen oppdatert.",
        },
        {
          title: "Hold overføringer adskilt",
          desc: "Flytt penger mellom kontoer uten å blåse opp inntekts- eller kostnadstotaler.",
        },
        {
          title: "Rapporter fra samme data",
          desc: "Filtrer utestående og oppgjorte posisjoner per kategori, prosjekt eller avdeling.",
        },
      ],
      steps: [
        {
          title: "Opprett arbeidsområdet",
          desc: "Velg land, valuta og type arbeidsområde. Start på gratisplanen.",
        },
        {
          title: "Legg til kontoer og kategorier",
          desc: "Legg til bankkontoene og kategoriene teamet ditt allerede bruker.",
        },
        {
          title: "Planlegg, gjør opp og gjennomgå",
          desc: "Planlegg poster, gjør dem opp og gjennomgå posisjonen uten å bygge regnearket på nytt.",
        },
      ],
      capabilitiesTitle: "Byggeklossene i en kontantplan",
      capabilitiesSubtitle:
        "Hver post beholder beløp, datoer, eierskap og oppgjørshistorikk på ett sted.",
      capabilities: [
        {
          title: "Planlagte poster",
          desc: "Registrer beløp, forfallsdato, kategori, prosjekt og motpart.",
        },
        {
          title: "Oppgjør",
          desc: "Gjør opp helt eller i deler mot en bankkonto, med løpende åpen saldo.",
        },
        {
          title: "Interne overføringer",
          desc: "Flytt midler mellom kontoer uten å endre inntekts- eller kostnadstotaler.",
        },
        {
          title: "Fordelinger",
          desc: "Del poster på tvers av avdelinger og knytt dem til prosjekter.",
        },
        {
          title: "Filtre og lagrede visninger",
          desc: "Lagre filtrene og kolonnene teamet bruker mest.",
        },
        {
          title: "Vedlegg",
          desc: "Hold støttedokumenter sammen med posten de hører til.",
        },
      ],
      finalTitle: "Start med en tydelig kontantplan",
      finalSubtitle:
        "Opprett et gratis arbeidsområde og legg til kontoene og kategoriene du allerede bruker.",
    },
  },
  banking: {
    name: "Bank og betalinger",
    preview: {
      label: "Bank",
      metric: { label: "Kontoer", value: "4", note: "2 valutaer" },
      secondary: { label: "Kontoutskriftsrader", value: "186" },
      chartLabel: "Matchet mot ventende",
      rows: [
        { label: "Driftskonto", value: "Matchet", status: "positive" },
        { label: "Skattekonto", value: "12 venter", status: "warning" },
        { label: "Reservekonto", value: "Matchet", status: "positive" },
      ],
    },
    copy: {
      title: "Bankkontoer og kontoutskrifter i samme arbeidsområde",
      subtitle:
        "Hold kontodetaljer, importerte kontoutskrifter og matchebeslutninger sammen, slik at avstemmingen ikke lever i et eget regneark.",
      bullets: [
        "Bankkontoer og saldoer",
        "Import og tolkning av kontoutskrifter",
        "Foreslått matching",
        "Avstemningsgjennomgang",
      ],
      outcomes: [
        {
          title: "Én kontoliste",
          desc: "Hold banknavn, kontotype, valuta og saldo i arbeidsområdet.",
        },
        {
          title: "Importer kontoutskrifter",
          desc: "Last opp et kontoutskrift og gjennomgå de tolkede radene før du bekrefter dem.",
        },
        {
          title: "Match bevegelser",
          desc: "Bruk foreslåtte match mellom kontoutskriftsrader og kontantstrømsposter, og bekreft.",
        },
        {
          title: "Gå gjennom avvik",
          desc: "Se umatchede og ventende rader i stedet for å lete gjennom filer.",
        },
      ],
      steps: [
        {
          title: "Legg til en bankkonto",
          desc: "Angi bank, kontotype, valuta og åpningsdetaljer.",
        },
        {
          title: "Importer et kontoutskrift",
          desc: "Last opp filen og gjennomgå de tolkede radene før import.",
        },
        {
          title: "Match og avstem",
          desc: "Bekreft foreslåtte match og hold avvik synlige.",
        },
      ],
      capabilitiesTitle: "Bankdata uten side-regnearket",
      capabilitiesSubtitle:
        "Kontoer, kontoutskriftsrader og matchebeslutninger forblir knyttet til kontantstrømmen de forklarer.",
      capabilities: [
        {
          title: "Bankkontoer",
          desc: "Bank, type, valuta og kontodetaljer per arbeidsområde.",
        },
        {
          title: "Import av kontoutskrifter",
          desc: "Last opp og tolk kontoutskrifter med et gjennomgangssteg før bekreftelse.",
        },
        {
          title: "Foreslått matching",
          desc: "Klassifiser kontoutskriftsrader mot poster og gjenbrukbare mønstre.",
        },
        {
          title: "Avstemningsgjennomgang",
          desc: "Hold ventende, matchede og umatchede rader synlige.",
        },
        {
          title: "Oppgjørslenker",
          desc: "Koble oppgjorte bevegelser til bankkontoen som mottok dem.",
        },
        {
          title: "Roller i arbeidsområdet",
          desc: "Hold kontodata avgrenset til arbeidsområdet og medlemmene.",
        },
      ],
      finalTitle: "Ta banken inn i samme arbeidsområde",
      finalSubtitle: "Start gratis og legg til din første bankkonto.",
    },
  },
  spend: {
    name: "Utgifter og oppgjør",
    preview: {
      label: "Utgifter",
      metric: { label: "Åpen utbetaling", value: "€38,4k", note: "14 poster" },
      secondary: { label: "Gjort opp denne måneden", value: "€96,2k" },
      chartLabel: "Oppgjort mot utestående",
      rows: [
        { label: "Reise", value: "€2 840", status: "positive" },
        { label: "Programvare", value: "€1 290", status: "warning" },
        { label: "Kontor", value: "€640", status: "positive" },
      ],
    },
    copy: {
      title: "Følg utgående forbruk og gjør det opp mot planen",
      subtitle:
        "Registrer utgående poster, fordel dem til kategorier, prosjekter eller avdelinger, og gjør dem opp helt eller i deler.",
      bullets: [
        "Utgående poster med forfallsdatoer",
        "Delvise oppgjør",
        "Fordeling på prosjekt og avdeling",
        "Visninger av utestående saldo",
      ],
      outcomes: [
        {
          title: "Se forpliktet forbruk",
          desc: "Registrer utgående poster med forfallsdatoer, kategorier og eiere.",
        },
        {
          title: "Gjør opp i deler",
          desc: "Bruk ett eller flere oppgjør på en post og følg gjenstående beløp.",
        },
        {
          title: "Fordel kostnaden",
          desc: "Del utgifter på tvers av avdelinger og knytt dem til prosjekter.",
        },
        {
          title: "Gå gjennom det som står åpent",
          desc: "Filtrer utestående og oppgjort forbruk uten å eksportere data.",
        },
      ],
      steps: [
        {
          title: "Registrer utbetalingen",
          desc: "Registrer beløp, forfallsdato, kategori, prosjekt og motpart.",
        },
        {
          title: "Gjør opp mot kontoen",
          desc: "Bruk ett eller flere oppgjør og hold den åpne saldoen oppdatert.",
        },
        {
          title: "Gå gjennom saldoen",
          desc: "Filtrer oppgjort og utestående forbruk per kategori, prosjekt eller avdeling.",
        },
      ],
      capabilitiesTitle: "Utgifter som forblir koblet til oppgjøret",
      capabilitiesSubtitle:
        "Utgående poster beholder fordelingen og oppgjørshistorikken i stedet for å ende i et eget ark.",
      capabilities: [
        {
          title: "Utgående poster",
          desc: "Beløp, forfallsdato, kategori, prosjekt og motpart.",
        },
        {
          title: "Delvise oppgjør",
          desc: "Gjør opp en post over flere betalinger.",
        },
        {
          title: "Fordelinger",
          desc: "Tilordne prosenter til avdelinger og knytte prosjekter.",
        },
        {
          title: "Visninger for utestående",
          desc: "Se åpent og oppgjort forbruk med lagrede filtre.",
        },
      ],
      finalTitle: "Hold utgifter og oppgjør sammenkoblet",
      finalSubtitle: "Start gratis og registrer din første utgående post.",
    },
  },
  ledger: {
    name: "Hovedbok",
    preview: {
      label: "Hovedbok",
      metric: { label: "Posteringskontoer", value: "128", note: "6 overskrifter" },
      secondary: { label: "Journalposter", value: "1 842" },
      chartLabel: "Posteringsaktivitet",
      rows: [
        { label: "Inntekt · 4010", value: "Avstemt", status: "positive" },
        { label: "Lønn · 6200", value: "Postert", status: "positive" },
        { label: "Mellomkonto · 9999", value: "Gjennomgå", status: "warning" },
      ],
    },
    copy: {
      title: "En kontoplan bygget for konsistent rapportering",
      subtitle:
        "Strukturer overskrifts- og posteringskontoer, registrer journalposter og hold perioder og dimensjoner under kontroll.",
      bullets: [
        "Overskrifts- og posteringskontoer",
        "Journalposter og bøker",
        "Regnskapsperioder",
        "Dimensjoner og posteringsprinsipper",
      ],
      outcomes: [
        {
          title: "Strukturer kontoplanen",
          desc: "Opprett overskrifts- og posteringskontoer med koder og normale saldoer.",
        },
        {
          title: "Registrer journaler",
          desc: "Poster journalposter med linjer, bøker og regnskapsperioder.",
        },
        {
          title: "Hold dimensjoner",
          desc: "Definer dimensjoner og tillatte verdier for rapporteringsstrukturen.",
        },
        {
          title: "Kontroller postering",
          desc: "Bruk posteringsprinsipper og kontroller for manuell postering der det trengs.",
        },
      ],
      steps: [
        {
          title: "Design kontoplanen",
          desc: "Opprett overskrifts- og posteringskontoene rapporteringen din trenger.",
        },
        {
          title: "Registrer poster",
          desc: "Poster journalposter med riktig bok, periode og dimensjoner.",
        },
        {
          title: "Gå gjennom perioder",
          desc: "Hold regnskapsperioder og posteringsstatus under kontroll.",
        },
      ],
      capabilitiesTitle: "Regnskapsstruktur som holder",
      capabilitiesSubtitle:
        "Kontoplanen, journalene, periodene og dimensjonene deler ett arbeidsområde i stedet for å drive fra hverandre.",
      capabilities: [
        {
          title: "Kontoplan",
          desc: "Overskrifts- og posteringskontoer med koder, typer og normale saldoer.",
        },
        {
          title: "Journalposter",
          desc: "Poster med flere linjer, bøker, perioder og status.",
        },
        {
          title: "Regnskapsperioder",
          desc: "Åpne og lukk perioder for hver regnskapsbok.",
        },
        {
          title: "Dimensjoner",
          desc: "Definer dimensjoner, verdier og regler per konto.",
        },
        {
          title: "Posteringsprinsipper",
          desc: "Kontroller hvordan poster posteres og hvilke kontoer som tillater manuell postering.",
        },
        {
          title: "Kontokontroller",
          desc: "Bankkontrollkontoer og beskyttelse av klassifisering.",
        },
      ],
      finalTitle: "Bygg en hovedbok du kan forsvare",
      finalSubtitle: "Start gratis og form kontoplanen etter rapporteringen din.",
    },
  },
  projects: {
    name: "Prosjekter",
    preview: {
      label: "Prosjekter",
      metric: { label: "Aktive prosjekter", value: "24", note: "6 typer" },
      secondary: { label: "Koblede poster", value: "312" },
      chartLabel: "Plan mot oppgjør per prosjekt",
      rows: [
        { label: "Implementering", value: "€420k", status: "positive" },
        { label: "Migrering", value: "€186k", status: "warning" },
        { label: "Support", value: "€96k", status: "positive" },
      ],
    },
    copy: {
      title: "Se kostnader og inntekter per prosjekt",
      subtitle:
        "Opprett prosjekter, knytt kontantstrømsposter til dem og sammenlign planlagte, oppgjorte og utestående beløp i ett filter.",
      bullets: [
        "Prosjektposter med koder og typer",
        "Prosjektkobling per post",
        "Avdelingsfordelinger",
        "Prosjektspesifikke visninger",
      ],
      outcomes: [
        {
          title: "Opprett en prosjektpost",
          desc: "Navn, kode, type og beskrivelse med aktiv status.",
        },
        {
          title: "Knytt poster",
          desc: "Koble planlagte og oppgjorte kontantstrømsposter til prosjektet.",
        },
        {
          title: "Fordel avdelinger",
          desc: "Del en posts kostnad på tvers av avdelinger.",
        },
        {
          title: "Gå gjennom prosjektet",
          desc: "Filtrer poster og utestående beløp per prosjekt.",
        },
      ],
      steps: [
        {
          title: "Opprett prosjektet",
          desc: "Legg til navn, kode og type slik at prosjektet er lett å identifisere.",
        },
        {
          title: "Knytt poster",
          desc: "Koble kontantstrømspostene som hører til prosjektet.",
        },
        {
          title: "Gå gjennom posisjonen",
          desc: "Filtrer planlagte, oppgjorte og utestående beløp per prosjekt.",
        },
      ],
      capabilitiesTitle: "Prosjektkontekst på hver bevegelse",
      capabilitiesSubtitle:
        "Poster, avdelingsfordelinger og oppgjørsstatus forblir knyttet til prosjektet som eier dem.",
      capabilities: [
        {
          title: "Prosjektposter",
          desc: "Navn, kode, type, beskrivelse og status.",
        },
        {
          title: "Postkoblinger",
          desc: "Knytt kontantstrømsposter direkte til et prosjekt.",
        },
        {
          title: "Avdelingsfordeling",
          desc: "Fordel poster med prosenter på tvers av avdelinger.",
        },
        {
          title: "Prosjektfiltre",
          desc: "Gå gjennom poster, oppgjør og åpne beløp per prosjekt.",
        },
      ],
      finalTitle: "Gjør prosjektresultater synlige",
      finalSubtitle: "Start gratis og opprett ditt første prosjekt.",
    },
  },
  departments: {
    name: "Avdelinger",
    preview: {
      label: "Avdelinger",
      metric: { label: "Avdelinger", value: "8", note: "3 kostnadssteder" },
      secondary: { label: "Fordelte poster", value: "246" },
      chartLabel: "Poster per avdeling",
      rows: [
        { label: "Drift", value: "42%", status: "positive" },
        { label: "Salg", value: "31%", status: "warning" },
        { label: "Utvikling", value: "27%", status: "positive" },
      ],
    },
    copy: {
      title: "Knytt hver bevegelse til teamet som eier den",
      subtitle:
        "Opprett avdelinger, fordel poster med prosenter og gå gjennom tallene per team uten å bygge rapporten på nytt.",
      bullets: [
        "Avdelingsposter",
        "Fordelinger med prosenter",
        "Postfiltre per avdeling",
        "Lagrede visninger",
      ],
      outcomes: [
        {
          title: "Opprett avdelingen",
          desc: "Navn, kode og aktiv status for hvert kostnadssted.",
        },
        {
          title: "Fordel poster",
          desc: "Tilordne én eller flere avdelinger til en post med prosenter.",
        },
        {
          title: "Filtrer per team",
          desc: "Gå gjennom poster og oppgjør for én avdeling om gangen.",
        },
        {
          title: "Hold eierskapet synlig",
          desc: "Se hvilket team som eier forbruket, i samme arbeidsområde.",
        },
      ],
      steps: [
        {
          title: "Definer avdelinger",
          desc: "Legg til navnene og kodene teamene dine allerede bruker.",
        },
        {
          title: "Fordel poster",
          desc: "Del en post på tvers av avdelinger med prosenter.",
        },
        {
          title: "Gå gjennom tallene",
          desc: "Filtrer kontantstrømsposter per avdeling og gå gjennom posisjonen.",
        },
      ],
      capabilitiesTitle: "En kostnadsstedvisning du kan stole på",
      capabilitiesSubtitle:
        "Avdelingsfordelinger forblir knyttet til posten i stedet for å rekonstrueres ved rapportering.",
      capabilities: [
        {
          title: "Avdelingsposter",
          desc: "Navn, kode og status for hvert kostnadssted.",
        },
        {
          title: "Fordeling med prosenter",
          desc: "Del en post på tvers av avdelinger med definerte prosenter.",
        },
        {
          title: "Postfiltre",
          desc: "Filtrer kontantstrømsposter per avdeling.",
        },
        {
          title: "Lagrede visninger",
          desc: "Behold kolonnene og filtrene teamet bruker.",
        },
      ],
      finalTitle: "Gi hver bevegelse en eier",
      finalSubtitle: "Start gratis og definer din første avdeling.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Enheter",
      metric: { label: "Enheter", value: "186", note: "7 typer" },
      secondary: { label: "Aktive", value: "164" },
      chartLabel: "Enheter per type",
      rows: [
        { label: "Kunder", value: "82", status: "positive" },
        { label: "Leverandører", value: "46", status: "positive" },
        { label: "Konsulenter", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Én katalog for hver motpart",
      subtitle:
        "Hold kunder, leverandører, ansatte, konsulenter og partnere i ett arbeidsområde, og knytt dem til kontantstrømspostene de gjelder.",
      bullets: [
        "Kunder, leverandører og partnere",
        "Kontakt- og skattedetaljer",
        "Enhetstyper og status",
        "Koblinger til kontantstrømsposter",
      ],
      outcomes: [
        {
          title: "Én katalog",
          desc: "Lagre hver motpart én gang med en tydelig enhetstype.",
        },
        {
          title: "Kontaktdetaljer",
          desc: "Hold e-post, telefon og adresse sammen med posten.",
        },
        {
          title: "Skatt- og bankdetaljer",
          desc: "Lagre skatte-ID-er og bankdetaljer der det er relevant.",
        },
        {
          title: "Koble hovedboken",
          desc: "Referer til enheten på kontantstrømspostene den betalte eller mottok.",
        },
      ],
      steps: [
        {
          title: "Legg til enheten",
          desc: "Velg enhetstype og legg til navn og kontaktdetaljer.",
        },
        {
          title: "Klassifiser relasjonen",
          desc: "Merk den som kunde, leverandør, ansatt, konsulent, partner eller annen type.",
        },
        {
          title: "Koble poster",
          desc: "Referer til enheten på kontantstrømspostene den gjelder.",
        },
      ],
      capabilitiesTitle: "Motpartsdata som forblir nyttige",
      capabilitiesSubtitle:
        "Én post for personene og organisasjonene bak kontantstrømmen, i stedet for en kontaktliste i et eget verktøy.",
      capabilities: [
        {
          title: "Enhetsposter",
          desc: "Kunder, leverandører, ansatte, konsulenter, partnere og mer.",
        },
        {
          title: "Kontaktdetaljer",
          desc: "E-post, telefon og adresse i én post.",
        },
        {
          title: "Skatt- og bankfelt",
          desc: "Valgfrie skatte-ID-er og bankdetaljer.",
        },
        {
          title: "Postkoblinger",
          desc: "Referer til motparten på kontantstrømsposter.",
        },
      ],
      finalTitle: "Hold motparter på ett sted",
      finalSubtitle: "Start gratis og legg til din første enhet.",
    },
  },
  inventory: {
    name: "Lager",
    preview: {
      label: "Lager",
      metric: { label: "Varer", value: "1 284", note: "42 kategorier" },
      secondary: { label: "Enheter på lager", value: "8 960" },
      chartLabel: "Varer per enhetstype",
      rows: [
        { label: "SKU-1042", value: "240 enheter", status: "positive" },
        { label: "SKU-2210", value: "18 enheter", status: "warning" },
        { label: "SKU-3180", value: "96 enheter", status: "positive" },
      ],
    },
    copy: {
      title: "Varedata for lager og tjenester",
      subtitle:
        "Hold SKU-er, måleenheter og beholdning i én liste, og knytt varene til kontantstrømspostene som flytter dem.",
      bullets: [
        "SKU og varenavn",
        "Måleenhet",
        "Beholdning",
        "Koblinger til kontantstrømsposter",
      ],
      outcomes: [
        {
          title: "Én vareliste",
          desc: "Lagre hver SKU én gang med navn og beskrivelse.",
        },
        {
          title: "Enheter og mengder",
          desc: "Følg måleenhet og beholdning.",
        },
        {
          title: "Statuskontroll",
          desc: "Deaktiver varer uten å slette historikken.",
        },
        {
          title: "Koble til kontantstrøm",
          desc: "Knytt lagerlinjer til postene som flytter lageret.",
        },
      ],
      steps: [
        {
          title: "Opprett varen",
          desc: "Legg til SKU, navn og beskrivelse.",
        },
        {
          title: "Angi enhet og mengde",
          desc: "Velg måleenhet og registrer beholdning.",
        },
        {
          title: "Knytt den til poster",
          desc: "Referer til varen på kontantstrømspostene som flytter den.",
        },
      ],
      capabilitiesTitle: "Rene varedata, koblet til økonomien",
      capabilitiesSubtitle:
        "En enkel varebase som forblir knyttet til kontantstrømmen den påvirker.",
      capabilities: [
        {
          title: "Vareposter",
          desc: "SKU, navn, beskrivelse og aktiv status.",
        },
        {
          title: "Måleenheter",
          desc: "Fritekstenheter som stykker, kilo eller timer.",
        },
        {
          title: "Beholdning",
          desc: "Hold gjeldende mengde på hver vare.",
        },
        {
          title: "Postkoblinger",
          desc: "Referer til varer på kontantstrømsposter.",
        },
      ],
      finalTitle: "Hold varedata rene",
      finalSubtitle: "Start gratis og legg til din første SKU.",
    },
  },
};

export default no;
