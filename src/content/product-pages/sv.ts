import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const sv: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Kassaflöde",
    preview: {
      label: "Kassaflöde",
      metric: {
        label: "Kassaposition",
        value: "€482,9k",
        note: "+8,2 % mot plan",
      },
      secondary: {
        label: "Planerat",
        value: "€164,2k",
      },
      chartLabel: "Planerat mot avräknat",
      rows: [
        {
          label: "Löner",
          value: "€28 900",
          status: "positive",
        },
        {
          label: "Leverantörsbetalning",
          value: "€12 400",
          status: "warning",
        },
        {
          label: "Kortavräkning",
          value: "€6 120",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Vet vad som kommer in, går ut och fortfarande är utestående",
      subtitle:
        "Planera poster, avräkna dem mot bankkonton och håll varje förflyttning kopplad till den kategori, projekt eller avdelning som äger den.",
      bullets: [
        "Planerade och avräknade poster i en vy",
        "Delavräkningar och interna överföringar",
        "Kategorier, projekt och avdelningar",
        "Filter, sparade vyer och bilagor",
      ],
      outcomes: [
        {
          title: "Se kassaplanen",
          desc: "Skapa planerade poster med datum, kategorier och ägare så att månaden börjar från en baslinje.",
        },
        {
          title: "Avräkna mot verkliga konton",
          desc: "Registrera hela eller delvisa avräkningar mot bankkonton och håll det öppna saldot aktuellt.",
        },
        {
          title: "Håll överföringar separata",
          desc: "Flytta pengar mellan konton utan att blåsa upp intäkts- eller kostnadssummor.",
        },
        {
          title: "Rapportera från samma data",
          desc: "Filtrera utestående och avräknade positioner per kategori, projekt eller avdelning.",
        },
      ],
      steps: [
        {
          title: "Skapa arbetsytan",
          desc: "Välj land, valuta och typ av arbetsyta. Börja på Free-planen.",
        },
        {
          title: "Lägg till konton och kategorier",
          desc: "Lägg till de bankkonton och kategorier som teamet redan använder.",
        },
        {
          title: "Planera, avräkna och granska",
          desc: "Planera poster, avräkna dem och granska positionen utan att bygga om ett kalkylark.",
        },
      ],
      capabilitiesTitle: "Byggstenarna i en kassaplan",
      capabilitiesSubtitle:
        "Varje post behåller belopp, datum, ansvar och avräkningshistorik på ett ställe.",
      capabilities: [
        {
          title: "Planerade poster",
          desc: "Fånga belopp, förfallodatum, kategori, projekt och motpart.",
        },
        {
          title: "Avräkningar",
          desc: "Avräkna i sin helhet eller i delar mot ett bankkonto, med ett löpande öppet saldo.",
        },
        {
          title: "Interna överföringar",
          desc: "Flytta medel mellan konton utan att ändra intäkts- eller kostnadssummor.",
        },
        {
          title: "Fördelningar",
          desc: "Dela poster mellan avdelningar och koppla dem till projekt.",
        },
        {
          title: "Filter och sparade vyer",
          desc: "Spara de filter och kolumner som teamet använder mest.",
        },
        {
          title: "Bilagor",
          desc: "Behåll underlag tillsammans med posten de hör till.",
        },
      ],
      finalTitle: "Börja med en tydlig kassaplan",
      finalSubtitle:
        "Skapa en gratis arbetsyta och lägg till de konton och kategorier du redan använder.",
    },
  },
  banking: {
    name: "Bank och betalningar",
    preview: {
      label: "Bank",
      metric: {
        label: "Konton",
        value: "4",
        note: "2 valutor",
      },
      secondary: {
        label: "Utdragsrader",
        value: "186",
      },
      chartLabel: "Matchat mot väntande",
      rows: [
        {
          label: "Driftkonto",
          value: "Matchat",
          status: "positive",
        },
        {
          label: "Skattekonto",
          value: "12 väntande",
          status: "warning",
        },
        {
          label: "Reservkonto",
          value: "Matchat",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Bankkonton och kontoutdrag i samma arbetsyta",
      subtitle:
        "Håll kontouppgifter, importerade kontoutdrag och matchningsbeslut tillsammans så att avstämningen inte hamnar i ett separat kalkylark.",
      bullets: [
        "Bankkonton och saldon",
        "Import och tolkning av kontoutdrag",
        "Föreslagen matchning",
        "Granskning av avstämning",
      ],
      outcomes: [
        {
          title: "En kontolista",
          desc: "Behåll banknamn, kontotyp, valuta och saldo i arbetsytan.",
        },
        {
          title: "Importera kontoutdrag",
          desc: "Ladda upp ett kontoutdrag och granska de tolkade raderna innan de bekräftas.",
        },
        {
          title: "Matcha förflyttningar",
          desc: "Använd föreslagna matchningar mellan utdragsrader och kassaflödesposter och bekräfta sedan.",
        },
        {
          title: "Granska avvikelser",
          desc: "Se omatchade och väntande rader i stället för att leta i filer.",
        },
      ],
      steps: [
        {
          title: "Lägg till ett bankkonto",
          desc: "Ange bank, kontotyp, valuta och uppgifter för ingående saldo.",
        },
        {
          title: "Importera ett kontoutdrag",
          desc: "Ladda upp filen och granska de tolkade raderna före import.",
        },
        {
          title: "Matcha och stäm av",
          desc: "Bekräfta föreslagna matchningar och håll avvikelserna synliga.",
        },
      ],
      capabilitiesTitle: "Bankdata utan sidokalkylarket",
      capabilitiesSubtitle:
        "Konton, utdragsrader och matchningsbeslut förblir kopplade till det kassaflöde de förklarar.",
      capabilities: [
        {
          title: "Bankkonton",
          desc: "Bank, typ, valuta och kontouppgifter per arbetsyta.",
        },
        {
          title: "Import av kontoutdrag",
          desc: "Ladda upp och tolka kontoutdrag med ett granskningssteg före bekräftelse.",
        },
        {
          title: "Föreslagen matchning",
          desc: "Klassificera utdragsrader mot poster och återanvändbara mönster.",
        },
        {
          title: "Granskning av avstämning",
          desc: "Håll väntande, matchade och omatchade rader synliga.",
        },
        {
          title: "Koppling till avräkningar",
          desc: "Koppla avräknade förflyttningar till bankkontot som tog emot dem.",
        },
        {
          title: "Roller i arbetsytan",
          desc: "Håll kontodata avgränsad till arbetsytan och dess medlemmar.",
        },
      ],
      finalTitle: "Ta in banken i samma arbetsyta",
      finalSubtitle: "Starta gratis och lägg till ditt första bankkonto.",
    },
  },
  spend: {
    name: "Utgifter och avräkningar",
    preview: {
      label: "Utgifter",
      metric: {
        label: "Öppet utflöde",
        value: "€38,4k",
        note: "14 poster",
      },
      secondary: {
        label: "Avräknat denna månad",
        value: "€96,2k",
      },
      chartLabel: "Avräknat mot utestående",
      rows: [
        {
          label: "Resor",
          value: "€2 840",
          status: "positive",
        },
        {
          label: "Programvara",
          value: "€1 290",
          status: "warning",
        },
        {
          label: "Kontor",
          value: "€640",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Följ utgående kostnader och avräkna dem mot planen",
      subtitle:
        "Registrera utposter, fördela dem på kategorier, projekt eller avdelningar och avräkna dem i sin helhet eller i delar.",
      bullets: [
        "Utposter med förfallodatum",
        "Delavräkningar",
        "Fördelning på projekt och avdelning",
        "Vyer för utestående saldo",
      ],
      outcomes: [
        {
          title: "Se bundna utgifter",
          desc: "Registrera utposter med förfallodatum, kategorier och ägare.",
        },
        {
          title: "Avräkna i delar",
          desc: "Tillämpa en eller flera avräkningar på en post och följ återstående belopp.",
        },
        {
          title: "Fördela kostnaden",
          desc: "Dela utgifter mellan avdelningar och koppla dem till projekt.",
        },
        {
          title: "Granska det som är öppet",
          desc: "Filtrera utestående och avräknade utgifter utan att exportera data.",
        },
      ],
      steps: [
        {
          title: "Registrera utflödet",
          desc: "Fånga belopp, förfallodatum, kategori, projekt och motpart.",
        },
        {
          title: "Avräkna mot kontot",
          desc: "Tillämpa en eller flera avräkningar och håll det öppna saldot aktuellt.",
        },
        {
          title: "Granska saldot",
          desc: "Filtrera avräknade och utestående utgifter per kategori, projekt eller avdelning.",
        },
      ],
      capabilitiesTitle: "Utgifter som håller sig kopplade till avräkningen",
      capabilitiesSubtitle:
        "Utposter behåller sin fördelning och avräkningshistorik i stället för att sluta i ett separat blad.",
      capabilities: [
        {
          title: "Utposter",
          desc: "Belopp, förfallodatum, kategori, projekt och motpart.",
        },
        {
          title: "Delavräkningar",
          desc: "Avräkna en post över flera betalningar.",
        },
        {
          title: "Fördelningar",
          desc: "Tilldela procentsatser till avdelningar och koppla projekt.",
        },
        {
          title: "Utestående vyer",
          desc: "Se öppna och avräknade utgifter med sparade filter.",
        },
      ],
      finalTitle: "Håll utgifter och avräkning sammankopplade",
      finalSubtitle: "Starta gratis och registrera din första utpost.",
    },
  },
  ledger: {
    name: "Huvudbok",
    preview: {
      label: "Huvudbok",
      metric: {
        label: "Bokföringskonton",
        value: "128",
        note: "6 rubriker",
      },
      secondary: {
        label: "Verifikationer",
        value: "1 842",
      },
      chartLabel: "Bokföringsaktivitet",
      rows: [
        {
          label: "Intäkter · 4010",
          value: "Balanserad",
          status: "positive",
        },
        {
          label: "Löner · 6200",
          value: "Bokförd",
          status: "positive",
        },
        {
          label: "Mellankonto · 9999",
          value: "Granska",
          status: "warning",
        },
      ],
    },
    copy: {
      title: "En kontoplan byggd för konsekvent rapportering",
      subtitle:
        "Strukturera samlings- och bokföringskonton, registrera verifikationer och håll perioder och dimensioner under kontroll.",
      bullets: [
        "Samlings- och bokföringskonton",
        "Verifikationer och böcker",
        "Räkenskapsperioder",
        "Dimensioner och bokföringsregler",
      ],
      outcomes: [
        {
          title: "Strukturera kontoplanen",
          desc: "Skapa samlings- och bokföringskonton med koder och normalbalanser.",
        },
        {
          title: "Registrera verifikationer",
          desc: "Bokför verifikationer med rader, böcker och räkenskapsperioder.",
        },
        {
          title: "Behåll dimensioner",
          desc: "Definiera dimensioner och tillåtna värden för rapportstrukturen.",
        },
        {
          title: "Styr bokföringen",
          desc: "Använd bokföringsregler och kontroller för manuell bokföring där det behövs.",
        },
      ],
      steps: [
        {
          title: "Designa kontoplanen",
          desc: "Skapa de samlings- och bokföringskonton som rapporteringen kräver.",
        },
        {
          title: "Registrera poster",
          desc: "Bokför verifikationer med rätt bok, period och dimensioner.",
        },
        {
          title: "Granska perioder",
          desc: "Håll räkenskapsperioder och bokföringsstatus under kontroll.",
        },
      ],
      capabilitiesTitle: "Bokföringsstruktur som håller",
      capabilitiesSubtitle:
        "Kontoplan, verifikationer, perioder och dimensioner delar en arbetsyta i stället för att glida isär.",
      capabilities: [
        {
          title: "Kontoplan",
          desc: "Samlings- och bokföringskonton med koder, typer och normalbalanser.",
        },
        {
          title: "Verifikationer",
          desc: "Poster med flera rader, böcker, perioder och status.",
        },
        {
          title: "Räkenskapsperioder",
          desc: "Öppna och stäng perioder för varje bokföringsbok.",
        },
        {
          title: "Dimensioner",
          desc: "Definiera dimensioner, värden och regler på kontonivå.",
        },
        {
          title: "Bokföringsregler",
          desc: "Styr hur poster bokförs och vilka konton som tillåter manuell bokföring.",
        },
        {
          title: "Kontokontroller",
          desc: "Bankkontroller och skydd för klassificering.",
        },
      ],
      finalTitle: "Bygg en huvudbok du kan försvara",
      finalSubtitle: "Starta gratis och forma kontoplanen efter din rapportering.",
    },
  },
  projects: {
    name: "Projekt",
    preview: {
      label: "Projekt",
      metric: {
        label: "Aktiva projekt",
        value: "24",
        note: "6 typer",
      },
      secondary: {
        label: "Kopplade poster",
        value: "312",
      },
      chartLabel: "Planerat mot avräknat per projekt",
      rows: [
        {
          label: "Implementation",
          value: "€420k",
          status: "positive",
        },
        {
          label: "Migrering",
          value: "€186k",
          status: "warning",
        },
        {
          label: "Support",
          value: "€96k",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Se kostnader och intäkter per projekt",
      subtitle:
        "Skapa projekt, koppla kassaflödesposter till dem och jämför planerade, avräknade och utestående belopp i ett filter.",
      bullets: [
        "Projektposter med koder och typer",
        "Projektkoppling på postnivå",
        "Fördelning på avdelningar",
        "Projektspecifika vyer",
      ],
      outcomes: [
        {
          title: "Skapa en projektpost",
          desc: "Namn, kod, typ och beskrivning med aktiv status.",
        },
        {
          title: "Koppla poster",
          desc: "Koppla planerade och avräknade kassaflödesposter till projektet.",
        },
        {
          title: "Fördela avdelningar",
          desc: "Dela en posts kostnad mellan avdelningar.",
        },
        {
          title: "Granska projektet",
          desc: "Filtrera poster och utestående belopp per projekt.",
        },
      ],
      steps: [
        {
          title: "Skapa projektet",
          desc: "Lägg till namn, kod och typ så att projektet är lätt att identifiera.",
        },
        {
          title: "Koppla poster",
          desc: "Koppla de kassaflödesposter som hör till projektet.",
        },
        {
          title: "Granska positionen",
          desc: "Filtrera planerade, avräknade och utestående belopp per projekt.",
        },
      ],
      capabilitiesTitle: "Projektkontext på varje förflyttning",
      capabilitiesSubtitle:
        "Poster, avdelningsfördelning och avräkningsstatus förblir kopplade till projektet som äger dem.",
      capabilities: [
        {
          title: "Projektposter",
          desc: "Namn, kod, typ, beskrivning och status.",
        },
        {
          title: "Postkopplingar",
          desc: "Koppla kassaflödesposter direkt till ett projekt.",
        },
        {
          title: "Avdelningsfördelning",
          desc: "Fördela postens procentsatser mellan avdelningar.",
        },
        {
          title: "Projektfilter",
          desc: "Granska poster, avräkningar och öppna belopp per projekt.",
        },
      ],
      finalTitle: "Gör projektens resultat synliga",
      finalSubtitle: "Starta gratis och skapa ditt första projekt.",
    },
  },
  departments: {
    name: "Avdelningar",
    preview: {
      label: "Avdelningar",
      metric: {
        label: "Avdelningar",
        value: "8",
        note: "3 kostnadsställen",
      },
      secondary: {
        label: "Fördelade poster",
        value: "246",
      },
      chartLabel: "Poster per avdelning",
      rows: [
        {
          label: "Drift",
          value: "42 %",
          status: "positive",
        },
        {
          label: "Försäljning",
          value: "31 %",
          status: "warning",
        },
        {
          label: "Utveckling",
          value: "27 %",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Koppla varje förflyttning till teamet som äger den",
      subtitle:
        "Skapa avdelningar, fördela procentsatser på poster och granska siffrorna per team utan att bygga om rapporten.",
      bullets: [
        "Avdelningsposter",
        "Procentuella fördelningar",
        "Postfilter per avdelning",
        "Sparade vyer",
      ],
      outcomes: [
        {
          title: "Skapa avdelningen",
          desc: "Namn, kod och aktiv status för varje kostnadsställe.",
        },
        {
          title: "Fördela poster",
          desc: "Tilldela en eller flera avdelningar till en post med procentsatser.",
        },
        {
          title: "Filtrera per team",
          desc: "Granska poster och avräkningar för en avdelning i taget.",
        },
        {
          title: "Håll ansvaret synligt",
          desc: "Se vilket team som äger utgiften i samma arbetsyta.",
        },
      ],
      steps: [
        {
          title: "Definiera avdelningar",
          desc: "Lägg till de namn och koder som teamen redan använder.",
        },
        {
          title: "Fördela poster",
          desc: "Dela en post mellan avdelningar med procentsatser.",
        },
        {
          title: "Granska siffrorna",
          desc: "Filtrera kassaflödesposter per avdelning och granska positionen.",
        },
      ],
      capabilitiesTitle: "En kostnadsställevy du kan lita på",
      capabilitiesSubtitle:
        "Avdelningsfördelningar förblir kopplade till posten i stället för att rekonstrueras vid rapportering.",
      capabilities: [
        {
          title: "Avdelningsposter",
          desc: "Namn, kod och status för varje kostnadsställe.",
        },
        {
          title: "Procentuell fördelning",
          desc: "Dela en post mellan avdelningar med definierade procentsatser.",
        },
        {
          title: "Postfilter",
          desc: "Filtrera kassaflödesposter per avdelning.",
        },
        {
          title: "Sparade vyer",
          desc: "Behåll de kolumner och filter som teamet använder.",
        },
      ],
      finalTitle: "Ge varje förflyttning en ägare",
      finalSubtitle: "Starta gratis och definiera din första avdelning.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Entiteter",
      metric: {
        label: "Entiteter",
        value: "186",
        note: "7 typer",
      },
      secondary: {
        label: "Aktiva",
        value: "164",
      },
      chartLabel: "Entiteter per typ",
      rows: [
        {
          label: "Kunder",
          value: "82",
          status: "positive",
        },
        {
          label: "Leverantörer",
          value: "46",
          status: "positive",
        },
        {
          label: "Underleverantörer",
          value: "18",
          status: "neutral",
        },
      ],
    },
    copy: {
      title: "Ett gemensamt register för alla motparter",
      subtitle:
        "Håll kunder, leverantörer, anställda, underleverantörer och partner i en arbetsyta och koppla dem till de kassaflödesposter de hör till.",
      bullets: [
        "Kunder, leverantörer och partner",
        "Kontakt- och skatteuppgifter",
        "Entitetstyper och status",
        "Kopplingar till kassaflödesposter",
      ],
      outcomes: [
        {
          title: "Ett register",
          desc: "Spara varje motpart en gång med en tydlig entitetstyp.",
        },
        {
          title: "Kontaktuppgifter",
          desc: "Behåll e-post, telefon och adress tillsammans med posten.",
        },
        {
          title: "Skatte- och bankuppgifter",
          desc: "Spara skattenummer och bankuppgifter där det är relevant.",
        },
        {
          title: "Koppla huvudboken",
          desc: "Referera entiteten på de kassaflödesposter den betalat eller tagit emot.",
        },
      ],
      steps: [
        {
          title: "Lägg till entiteten",
          desc: "Välj entitetstyp och lägg till namn och kontaktuppgifter.",
        },
        {
          title: "Klassificera relationen",
          desc: "Markera den som kund, leverantör, anställd, underleverantör, partner eller annan typ.",
        },
        {
          title: "Koppla poster",
          desc: "Referera entiteten på de kassaflödesposter den hör till.",
        },
      ],
      capabilitiesTitle: "Motpartsdata som förblir användbar",
      capabilitiesSubtitle:
        "En post för personerna och organisationerna bakom ditt kassaflöde, i stället för en kontaktlista i ett separat verktyg.",
      capabilities: [
        {
          title: "Entitetsposter",
          desc: "Kunder, leverantörer, anställda, underleverantörer, partner med flera.",
        },
        {
          title: "Kontaktuppgifter",
          desc: "E-post, telefon och adress i en post.",
        },
        {
          title: "Skatte- och bankfält",
          desc: "Valfria skattenummer och bankuppgifter.",
        },
        {
          title: "Postkopplingar",
          desc: "Referera motparten på kassaflödesposter.",
        },
      ],
      finalTitle: "Håll motparterna på ett ställe",
      finalSubtitle: "Starta gratis och lägg till din första entitet.",
    },
  },
  inventory: {
    name: "Lager",
    preview: {
      label: "Lager",
      metric: {
        label: "Artiklar",
        value: "1 284",
        note: "42 kategorier",
      },
      secondary: {
        label: "Antal i lager",
        value: "8 960",
      },
      chartLabel: "Artiklar per enhetstyp",
      rows: [
        {
          label: "SKU-1042",
          value: "240 enheter",
          status: "positive",
        },
        {
          label: "SKU-2210",
          value: "18 enheter",
          status: "warning",
        },
        {
          label: "SKU-3180",
          value: "96 enheter",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Artikeldata för lager och tjänster",
      subtitle:
        "Håll SKU:er, måttenheter och antal i lager i en lista och koppla sedan artiklarna till de kassaflödesposter som flyttar dem.",
      bullets: [
        "SKU och artikelnamn",
        "Måttenhet",
        "Antal i lager",
        "Kopplingar till kassaflödesposter",
      ],
      outcomes: [
        {
          title: "En artikellista",
          desc: "Spara varje SKU en gång med namn och beskrivning.",
        },
        {
          title: "Enheter och antal",
          desc: "Följ måttenhet och antal i lager.",
        },
        {
          title: "Statuskontroll",
          desc: "Inaktivera artiklar utan att radera deras historik.",
        },
        {
          title: "Koppla till kassaflödet",
          desc: "Koppla lagerrader till de poster som flyttar lagret.",
        },
      ],
      steps: [
        {
          title: "Skapa artikeln",
          desc: "Lägg till SKU, namn och beskrivning.",
        },
        {
          title: "Ange enhet och antal",
          desc: "Välj måttenhet och registrera antal i lager.",
        },
        {
          title: "Koppla den till poster",
          desc: "Referera artikeln på de kassaflödesposter som flyttar den.",
        },
      ],
      capabilitiesTitle: "Ren artikeldata, kopplad till finans",
      capabilitiesSubtitle:
        "Ett enkelt artikelregister som förblir kopplat till det kassaflöde det påverkar.",
      capabilities: [
        {
          title: "Artikelposter",
          desc: "SKU, namn, beskrivning och aktiv status.",
        },
        {
          title: "Måttenheter",
          desc: "Fritextenheter som styck, kilogram eller timmar.",
        },
        {
          title: "Antal i lager",
          desc: "Behåll aktuellt antal för varje artikel.",
        },
        {
          title: "Postkopplingar",
          desc: "Referera artiklar på kassaflödesposter.",
        },
      ],
      finalTitle: "Håll artikeldata ren",
      finalSubtitle: "Starta gratis och lägg till din första SKU.",
    },
  },
};

export default sv;
