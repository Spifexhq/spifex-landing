import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const nl: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Cashflow",
    preview: {
      label: "Cashflow",
      metric: {
        label: "Cashpositie",
        value: "€ 482,9k",
        note: "+8,2% t.o.v. plan",
      },
      secondary: {
        label: "Gepland",
        value: "€ 164,2k",
      },
      chartLabel: "Gepland versus afgewikkeld",
      rows: [
        {
          label: "Lonen",
          value: "€ 28.900",
          status: "positive",
        },
        {
          label: "Leveranciersbetaling",
          value: "€ 12.400",
          status: "warning",
        },
        {
          label: "Kaartafwikkeling",
          value: "€ 6.120",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Weet wat er binnenkomt, weggaat en nog openstaat",
      subtitle:
        "Plan posten, wikkel ze af tegen bankrekeningen en houd elke beweging gekoppeld aan de categorie, het project of de afdeling die eigenaar is.",
      bullets: [
        "Geplande en afgewikkelde posten in één overzicht",
        "Deelafwikkelingen en interne overboekingen",
        "Categorieën, projecten en afdelingen",
        "Filters, opgeslagen weergaven en bijlagen",
      ],
      outcomes: [
        {
          title: "Zie het cashplan",
          desc: "Maak geplande posten aan met datums, categorieën en eigenaren, zodat de maand begint met een basis.",
        },
        {
          title: "Wikkel af tegen echte rekeningen",
          desc: "Leg volledige of gedeeltelijke afwikkelingen vast tegen bankrekeningen en houd het openstaande saldo actueel.",
        },
        {
          title: "Houd overboekingen apart",
          desc: "Verplaats geld tussen rekeningen zonder de totalen van inkomsten of uitgaven op te blazen.",
        },
        {
          title: "Rapporteer vanuit dezelfde data",
          desc: "Filter openstaande en afgewikkelde posities op categorie, project of afdeling.",
        },
      ],
      steps: [
        {
          title: "Maak de werkruimte",
          desc: "Kies land, valuta en type werkruimte. Start met het Gratis abonnement.",
        },
        {
          title: "Voeg rekeningen en categorieën toe",
          desc: "Voeg de bankrekeningen en categorieën toe die uw team al gebruikt.",
        },
        {
          title: "Plan, wikkel af en evalueer",
          desc: "Plan posten, wikkel ze af en bekijk de positie zonder een spreadsheet opnieuw op te bouwen.",
        },
      ],
      capabilitiesTitle: "De bouwstenen van een cashplan",
      capabilitiesSubtitle:
        "Elke post bewaart het bedrag, de datums, het eigenaarschap en de afwikkelingshistorie op één plek.",
      capabilities: [
        {
          title: "Geplande posten",
          desc: "Leg bedrag, vervaldatum, categorie, project en tegenpartij vast.",
        },
        {
          title: "Afwikkelingen",
          desc: "Wikkel volledig of in delen af tegen een bankrekening, met een doorlopend openstaand saldo.",
        },
        {
          title: "Interne overboekingen",
          desc: "Verplaats geld tussen rekeningen zonder de totalen van inkomsten of uitgaven te wijzigen.",
        },
        {
          title: "Toewijzingen",
          desc: "Splits posten over afdelingen en koppel ze aan projecten.",
        },
        {
          title: "Filters en opgeslagen weergaven",
          desc: "Bewaar de filters en kolommen die uw team het meest gebruikt.",
        },
        {
          title: "Bijlagen",
          desc: "Bewaar ondersteunende documenten bij de post waar ze bij horen.",
        },
      ],
      finalTitle: "Begin met een helder cashplan",
      finalSubtitle:
        "Maak een gratis werkruimte aan en voeg de rekeningen en categorieën toe die u al gebruikt.",
    },
  },

  banking: {
    name: "Bankieren en betalingen",
    preview: {
      label: "Bankieren",
      metric: {
        label: "Rekeningen",
        value: "4",
        note: "2 valuta's",
      },
      secondary: {
        label: "Afschriftregels",
        value: "186",
      },
      chartLabel: "Gematcht versus in behandeling",
      rows: [
        {
          label: "Operationele rekening",
          value: "Gematcht",
          status: "positive",
        },
        {
          label: "Belastingrekening",
          value: "12 in behandeling",
          status: "warning",
        },
        {
          label: "Reserverekening",
          value: "Gematcht",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Bankrekeningen en afschriften in dezelfde werkruimte",
      subtitle:
        "Houd rekeninggegevens, geïmporteerde afschriften en matchingbeslissingen bij elkaar, zodat afstemming niet in een aparte spreadsheet leeft.",
      bullets: [
        "Bankrekeningen en saldi",
        "Afschriftimport en parsing",
        "Voorgestelde matching",
        "Beoordeling van de afstemming",
      ],
      outcomes: [
        {
          title: "Eén rekeningenlijst",
          desc: "Bewaar banknaam, rekeningtype, valuta en saldo in de werkruimte.",
        },
        {
          title: "Importeer afschriften",
          desc: "Upload een afschrift en controleer de geparseerde regels voordat u ze vastlegt.",
        },
        {
          title: "Match bewegingen",
          desc: "Gebruik voorgestelde matches tussen afschriftregels en cashflowposten en bevestig ze.",
        },
        {
          title: "Beoordeel uitzonderingen",
          desc: "Zie niet-gematchte en openstaande regels in plaats van door bestanden te zoeken.",
        },
      ],
      steps: [
        {
          title: "Voeg een bankrekening toe",
          desc: "Stel de instelling, het rekeningtype, de valuta en de beginwaarden in.",
        },
        {
          title: "Importeer een afschrift",
          desc: "Upload het bestand en controleer de geparseerde regels voordat u importeert.",
        },
        {
          title: "Match en stem af",
          desc: "Bevestig voorgestelde matches en houd uitzonderingen zichtbaar.",
        },
      ],
      capabilitiesTitle: "Bankdata, zonder de extra spreadsheet",
      capabilitiesSubtitle:
        "Rekeningen, afschriftregels en matchingbeslissingen blijven verbonden met de cashflow die ze verklaren.",
      capabilities: [
        {
          title: "Bankrekeningen",
          desc: "Instelling, type, valuta en rekeninggegevens per werkruimte.",
        },
        {
          title: "Afschriftimport",
          desc: "Upload en parse afschriften met een controle-stap vóór het vastleggen.",
        },
        {
          title: "Voorgestelde matching",
          desc: "Classificeer afschriftregels tegen posten en herbruikbare patronen.",
        },
        {
          title: "Beoordeling van de afstemming",
          desc: "Houd openstaande, gematchte en niet-gematchte regels zichtbaar.",
        },
        {
          title: "Koppelingen met afwikkelingen",
          desc: "Koppel afgewikkelde bewegingen aan de bankrekening die ze heeft ontvangen.",
        },
        {
          title: "Werkruimterollen",
          desc: "Houd rekeninggegevens beperkt tot de werkruimte en de leden ervan.",
        },
      ],
      finalTitle: "Breng bankieren naar dezelfde werkruimte",
      finalSubtitle: "Start gratis en voeg uw eerste bankrekening toe.",
    },
  },

  spend: {
    name: "Uitgaven en afwikkelingen",
    preview: {
      label: "Uitgaven",
      metric: {
        label: "Openstaande uitgaande stroom",
        value: "€ 38,4k",
        note: "14 posten",
      },
      secondary: {
        label: "Deze maand afgewikkeld",
        value: "€ 96,2k",
      },
      chartLabel: "Afgewikkeld versus openstaand",
      rows: [
        {
          label: "Reiskosten",
          value: "€ 2.840",
          status: "positive",
        },
        {
          label: "Software",
          value: "€ 1.290",
          status: "warning",
        },
        {
          label: "Kantoor",
          value: "€ 640",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Volg uitgaande uitgaven en wikkel ze af tegen het plan",
      subtitle:
        "Leg uitgaande posten vast, wijs ze toe aan categorieën, projecten of afdelingen en wikkel ze volledig of in delen af.",
      bullets: [
        "Uitgaande posten met vervaldatums",
        "Deelafwikkelingen",
        "Toewijzing aan projecten en afdelingen",
        "Overzichten van openstaande saldi",
      ],
      outcomes: [
        {
          title: "Zie vastgelegde uitgaven",
          desc: "Leg uitgaande posten vast met vervaldatums, categorieën en eigenaren.",
        },
        {
          title: "Wikkel in delen af",
          desc: "Pas één of meer afwikkelingen toe op een post en volg het resterende bedrag.",
        },
        {
          title: "Wijs de kosten toe",
          desc: "Splits uitgaven over afdelingen en koppel ze aan projecten.",
        },
        {
          title: "Beoordeel wat openstaat",
          desc: "Filter openstaande en afgewikkelde uitgaven zonder data te exporteren.",
        },
      ],
      steps: [
        {
          title: "Leg de uitgaande stroom vast",
          desc: "Leg bedrag, vervaldatum, categorie, project en tegenpartij vast.",
        },
        {
          title: "Wikkel af tegen de rekening",
          desc: "Pas één of meer afwikkelingen toe en houd het openstaande saldo actueel.",
        },
        {
          title: "Beoordeel het saldo",
          desc: "Filter afgewikkelde en openstaande uitgaven op categorie, project of afdeling.",
        },
      ],
      capabilitiesTitle: "Uitgaven die verbonden blijven met de afwikkeling",
      capabilitiesSubtitle:
        "Uitgaande posten behouden hun toewijzing en afwikkelingshistorie in plaats van te eindigen in een aparte sheet.",
      capabilities: [
        {
          title: "Uitgaande posten",
          desc: "Bedrag, vervaldatum, categorie, project en tegenpartij.",
        },
        {
          title: "Deelafwikkelingen",
          desc: "Wikkel een post af over meerdere betalingen.",
        },
        {
          title: "Toewijzingen",
          desc: "Wijs percentages toe aan afdelingen en koppel projecten.",
        },
        {
          title: "Overzichten van openstaande posten",
          desc: "Bekijk openstaande en afgewikkelde uitgaven met opgeslagen filters.",
        },
      ],
      finalTitle: "Houd uitgaven en afwikkeling verbonden",
      finalSubtitle: "Start gratis en leg uw eerste uitgaande post vast.",
    },
  },

  ledger: {
    name: "Grootboek",
    preview: {
      label: "Grootboek",
      metric: {
        label: "Boekingsrekeningen",
        value: "128",
        note: "6 hoofdrekeningen",
      },
      secondary: {
        label: "Journaalposten",
        value: "1.842",
      },
      chartLabel: "Boekingsactiviteit",
      rows: [
        {
          label: "Omzet · 4010",
          value: "In balans",
          status: "positive",
        },
        {
          label: "Lonen · 6200",
          value: "Geboekt",
          status: "positive",
        },
        {
          label: "Tussenrekening · 9999",
          value: "Controleren",
          status: "warning",
        },
      ],
    },
    copy: {
      title: "Een rekeningschema dat is gebouwd voor consistente rapportage",
      subtitle:
        "Structureer hoofd- en boekingsrekeningen, leg journaalposten vast en houd perioden en dimensies onder controle.",
      bullets: [
        "Hoofd- en boekingsrekeningen",
        "Journaalposten en boeken",
        "Boekperioden",
        "Dimensies en boekingsbeleid",
      ],
      outcomes: [
        {
          title: "Structureer het schema",
          desc: "Maak hoofd- en boekingsrekeningen aan met codes en normale saldi.",
        },
        {
          title: "Leg journaalposten vast",
          desc: "Boek journaalposten met regels, boeken en boekperioden.",
        },
        {
          title: "Behoud dimensies",
          desc: "Definieer dimensies en toegestane waarden voor de rapportagestructuur.",
        },
        {
          title: "Beheers het boeken",
          desc: "Gebruik boekingsbeleid en controles op handmatig boeken waar dat nodig is.",
        },
      ],
      steps: [
        {
          title: "Ontwerp het schema",
          desc: "Maak de hoofd- en boekingsrekeningen die uw rapportage nodig heeft.",
        },
        {
          title: "Leg posten vast",
          desc: "Boek journaalposten met het juiste boek, de juiste periode en de juiste dimensies.",
        },
        {
          title: "Beoordeel de perioden",
          desc: "Houd boekperioden en de boekingsstatus onder controle.",
        },
      ],
      capabilitiesTitle: "Een boekhoudstructuur die standhoudt",
      capabilitiesSubtitle:
        "Het schema, de journaalposten, de perioden en de dimensies delen één werkruimte in plaats van uit elkaar te lopen.",
      capabilities: [
        {
          title: "Rekeningschema",
          desc: "Hoofd- en boekingsrekeningen met codes, types en normale saldi.",
        },
        {
          title: "Journaalposten",
          desc: "Posten met meerdere regels, inclusief boeken, perioden en status.",
        },
        {
          title: "Boekperioden",
          desc: "Open en sluit perioden per boekhoudkundig boek.",
        },
        {
          title: "Dimensies",
          desc: "Definieer dimensies, waarden en regels op rekeningniveau.",
        },
        {
          title: "Boekingsbeleid",
          desc: "Beheer hoe posten worden geboekt en op welke rekeningen handmatig boeken is toegestaan.",
        },
        {
          title: "Rekeningcontroles",
          desc: "Bankcontroles en bescherming van de classificatie.",
        },
      ],
      finalTitle: "Bouw een grootboek dat u kunt verantwoorden",
      finalSubtitle: "Start gratis en vorm het schema rond uw rapportage.",
    },
  },

  projects: {
    name: "Projecten",
    preview: {
      label: "Projecten",
      metric: {
        label: "Actieve projecten",
        value: "24",
        note: "6 typen",
      },
      secondary: {
        label: "Gekoppelde posten",
        value: "312",
      },
      chartLabel: "Gepland versus afgewikkeld per project",
      rows: [
        {
          label: "Implementatie",
          value: "€ 420k",
          status: "positive",
        },
        {
          label: "Migratie",
          value: "€ 186k",
          status: "warning",
        },
        {
          label: "Ondersteuning",
          value: "€ 96k",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Zie kosten en opbrengsten per project",
      subtitle:
        "Maak projecten aan, koppel cashflowposten eraan en vergelijk geplande, afgewikkelde en openstaande bedragen in één filter.",
      bullets: [
        "Projectrecords met codes en typen",
        "Projectkoppelingen op postniveau",
        "Toewijzingen aan afdelingen",
        "Projectspecifieke weergaven",
      ],
      outcomes: [
        {
          title: "Maak een projectrecord",
          desc: "Naam, code, type en omschrijving met een actieve status.",
        },
        {
          title: "Koppel posten",
          desc: "Koppel geplande en afgewikkelde cashflowposten aan het project.",
        },
        {
          title: "Wijs afdelingen toe",
          desc: "Splits de kosten van een post over afdelingen.",
        },
        {
          title: "Beoordeel het project",
          desc: "Filter posten en openstaande bedragen per project.",
        },
      ],
      steps: [
        {
          title: "Maak het project aan",
          desc: "Voeg een naam, code en type toe, zodat het project eenvoudig te herkennen is.",
        },
        {
          title: "Koppel posten",
          desc: "Koppel de cashflowposten die bij het project horen.",
        },
        {
          title: "Beoordeel de positie",
          desc: "Filter geplande, afgewikkelde en openstaande bedragen per project.",
        },
      ],
      capabilitiesTitle: "Projectcontext bij elke beweging",
      capabilitiesSubtitle:
        "Posten, afdelingssplitsingen en afwikkelingsstatus blijven gekoppeld aan het project dat eigenaar is.",
      capabilities: [
        {
          title: "Projectrecords",
          desc: "Naam, code, type, omschrijving en status.",
        },
        {
          title: "Koppelingen met posten",
          desc: "Koppel cashflowposten rechtstreeks aan een project.",
        },
        {
          title: "Afdelingensplitsing",
          desc: "Wijs percentages van een post toe aan afdelingen.",
        },
        {
          title: "Projectfilters",
          desc: "Beoordeel posten, afwikkelingen en openstaande bedragen per project.",
        },
      ],
      finalTitle: "Maak projectprestaties zichtbaar",
      finalSubtitle: "Start gratis en maak uw eerste project aan.",
    },
  },

  departments: {
    name: "Afdelingen",
    preview: {
      label: "Afdelingen",
      metric: {
        label: "Afdelingen",
        value: "8",
        note: "3 kostenplaatsen",
      },
      secondary: {
        label: "Toegewezen posten",
        value: "246",
      },
      chartLabel: "Posten per afdeling",
      rows: [
        {
          label: "Operations",
          value: "42%",
          status: "positive",
        },
        {
          label: "Sales",
          value: "31%",
          status: "warning",
        },
        {
          label: "Engineering",
          value: "27%",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Wijs elke beweging toe aan het team dat eigenaar is",
      subtitle:
        "Maak afdelingen aan, wijs percentages van posten toe en beoordeel de cijfers per team zonder het rapport opnieuw op te bouwen.",
      bullets: [
        "Afdelingrecords",
        "Toewijzingen in percentages",
        "Postfilters per afdeling",
        "Opgeslagen weergaven",
      ],
      outcomes: [
        {
          title: "Maak de afdeling aan",
          desc: "Naam, code en actieve status voor elke kostenplaats.",
        },
        {
          title: "Wijs posten toe",
          desc: "Wijs één of meer afdelingen met percentages toe aan een post.",
        },
        {
          title: "Filter per team",
          desc: "Beoordeel posten en afwikkelingen telkens voor één afdeling.",
        },
        {
          title: "Houd eigenaarschap zichtbaar",
          desc: "Zie welk team eigenaar is van de uitgave, in dezelfde werkruimte.",
        },
      ],
      steps: [
        {
          title: "Definieer afdelingen",
          desc: "Voeg de namen en codes toe die uw teams al gebruiken.",
        },
        {
          title: "Wijs posten toe",
          desc: "Splits een post met percentages over afdelingen.",
        },
        {
          title: "Beoordeel de cijfers",
          desc: "Filter cashflowposten per afdeling en beoordeel de positie.",
        },
      ],
      capabilitiesTitle: "Een kostenplaatsinzicht waarop u kunt vertrouwen",
      capabilitiesSubtitle:
        "Afdelingensplitsingen blijven aan de post gekoppeld in plaats van bij de rapportage opnieuw te worden opgebouwd.",
      capabilities: [
        {
          title: "Afdelingrecords",
          desc: "Naam, code en status voor elke kostenplaats.",
        },
        {
          title: "Toewijzing in percentages",
          desc: "Splits een post met vaste percentages over afdelingen.",
        },
        {
          title: "Postfilters",
          desc: "Filter cashflowposten per afdeling.",
        },
        {
          title: "Opgeslagen weergaven",
          desc: "Bewaar de kolommen en filters die uw team gebruikt.",
        },
      ],
      finalTitle: "Geef elke beweging een eigenaar",
      finalSubtitle: "Start gratis en definieer uw eerste afdeling.",
    },
  },

  crm: {
    name: "CRM",
    preview: {
      label: "Entiteiten",
      metric: {
        label: "Entiteiten",
        value: "186",
        note: "7 typen",
      },
      secondary: {
        label: "Actief",
        value: "164",
      },
      chartLabel: "Entiteiten per type",
      rows: [
        {
          label: "Klanten",
          value: "82",
          status: "positive",
        },
        {
          label: "Leveranciers",
          value: "46",
          status: "positive",
        },
        {
          label: "Zzp'ers",
          value: "18",
          status: "neutral",
        },
      ],
    },
    copy: {
      title: "Eén overzicht voor elke tegenpartij",
      subtitle:
        "Houd klanten, leveranciers, medewerkers, zzp'ers en partners in één werkruimte en koppel ze aan de cashflowposten waarop ze betrekking hebben.",
      bullets: [
        "Klanten, leveranciers en partners",
        "Contact- en belastinggegevens",
        "Entiteitstypen en status",
        "Koppelingen met cashflowposten",
      ],
      outcomes: [
        {
          title: "Eén overzicht",
          desc: "Leg elke tegenpartij één keer vast met een duidelijk entiteitstype.",
        },
        {
          title: "Contactgegevens",
          desc: "Bewaar e-mail, telefoon en adresgegevens bij het record.",
        },
        {
          title: "Belasting- en bankgegevens",
          desc: "Bewaar fiscale nummers en bankgegevens waar dat relevant is.",
        },
        {
          title: "Koppel het grootboek",
          desc: "Verwijs naar de entiteit op de cashflowposten die zij heeft betaald of ontvangen.",
        },
      ],
      steps: [
        {
          title: "Voeg de entiteit toe",
          desc: "Kies het entiteitstype en voeg de naam en contactgegevens toe.",
        },
        {
          title: "Classificeer de relatie",
          desc: "Markeer de entiteit als klant, leverancier, medewerker, zzp'er, partner of een ander type.",
        },
        {
          title: "Koppel posten",
          desc: "Verwijs naar de entiteit op de cashflowposten waarop ze betrekking heeft.",
        },
      ],
      capabilitiesTitle: "Tegenpartijgegevens die bruikbaar blijven",
      capabilitiesSubtitle:
        "Eén record voor de mensen en organisaties achter uw cashflow, in plaats van een contactenlijst in een aparte tool.",
      capabilities: [
        {
          title: "Entiteitrecords",
          desc: "Klanten, leveranciers, medewerkers, zzp'ers, partners en meer.",
        },
        {
          title: "Contactgegevens",
          desc: "E-mail, telefoon en adres in één record.",
        },
        {
          title: "Belasting- en bankvelden",
          desc: "Optionele fiscale nummers en bankgegevens.",
        },
        {
          title: "Koppelingen met posten",
          desc: "Verwijs naar de tegenpartij op cashflowposten.",
        },
      ],
      finalTitle: "Houd tegenpartijen op één plek",
      finalSubtitle: "Start gratis en voeg uw eerste entiteit toe.",
    },
  },

  inventory: {
    name: "Voorraad",
    preview: {
      label: "Voorraad",
      metric: {
        label: "Artikelen",
        value: "1.284",
        note: "42 categorieën",
      },
      secondary: {
        label: "Eenheden op voorraad",
        value: "8.960",
      },
      chartLabel: "Artikelen per eenheidstype",
      rows: [
        {
          label: "SKU-1042",
          value: "240 stuks",
          status: "positive",
        },
        {
          label: "SKU-2210",
          value: "18 stuks",
          status: "warning",
        },
        {
          label: "SKU-3180",
          value: "96 stuks",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Artikelgegevens voor voorraad en diensten",
      subtitle:
        "Houd SKU's, eenheden en de hoeveelheid op voorraad in één lijst en koppel artikelen aan de cashflowposten waarin ze worden verwerkt.",
      bullets: [
        "SKU en artikelnaam",
        "Eenheid",
        "Hoeveelheid op voorraad",
        "Koppelingen met cashflowposten",
      ],
      outcomes: [
        {
          title: "Eén artikellijst",
          desc: "Leg elke SKU één keer vast met een naam en omschrijving.",
        },
        {
          title: "Eenheden en hoeveelheden",
          desc: "Volg de eenheid en de hoeveelheid op voorraad.",
        },
        {
          title: "Statusbeheer",
          desc: "Deactiveer artikelen zonder hun historie te verwijderen.",
        },
        {
          title: "Koppel aan cashflow",
          desc: "Koppel voorraadregels aan de posten waarin voorraad wordt verwerkt.",
        },
      ],
      steps: [
        {
          title: "Maak het artikel aan",
          desc: "Voeg de SKU, naam en omschrijving toe.",
        },
        {
          title: "Stel de eenheid en hoeveelheid in",
          desc: "Kies de eenheid en leg de hoeveelheid op voorraad vast.",
        },
        {
          title: "Koppel het aan posten",
          desc: "Verwijs naar het artikel op de cashflowposten waarin het wordt verwerkt.",
        },
      ],
      capabilitiesTitle: "Schone artikelgegevens, gekoppeld aan finance",
      capabilitiesSubtitle:
        "Een eenvoudige artikellijst die gekoppeld blijft aan de cashflow die zij beïnvloedt.",
      capabilities: [
        {
          title: "Artikelrecords",
          desc: "SKU, naam, omschrijving en actieve status.",
        },
        {
          title: "Eenheden",
          desc: "Vrije eenheden zoals stuks, kilogram of uren.",
        },
        {
          title: "Hoeveelheid op voorraad",
          desc: "Bewaar de actuele hoeveelheid bij elk artikel.",
        },
        {
          title: "Koppelingen met posten",
          desc: "Verwijs naar artikelen op cashflowposten.",
        },
      ],
      finalTitle: "Houd artikelgegevens schoon",
      finalSubtitle: "Start gratis en voeg uw eerste SKU toe.",
    },
  },
};

export default nl;
