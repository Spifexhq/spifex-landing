import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const ca: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Programari de finances personals per planificar i controlar",
    metaDescription:
      "Spifex Personal connecta transaccions, comptes bancaris, pressupostos, objectius i informes en un únic espai de treball de finances personals. Comença gratis.",
    eyebrow: "Spifex Personal",
    title: "Les teves finances personals amb la claredat d'un sistema operatiu",
    description:
      "Planifica el que ha de venir, registra el que ja ha passat i entén la teva posició completa entre comptes, categories, pressupostos i objectius, sense haver d'encadenar fulls de càlcul.",
    primaryLabel: "Comença gratis amb Personal",
    proof: "Pla gratuït disponible. Sense targeta de crèdit.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Tingues tots els comptes en un sol lloc",
        description:
          "Afegeix els teus comptes bancaris personals, segueix els saldos i mantén les transferències separades dels totals d'ingressos i despeses.",
      },
      {
        title: "Planifica amb pressupostos i objectius",
        description:
          "Crea pressupostos i objectius, revisa el progrés i ajusta el pla a mesura que canvia la vida real.",
      },
      {
        title: "Entén l'historial de transaccions",
        description:
          "Filtra les transaccions per data, categoria, compte, direcció i estat de liquidació.",
      },
      {
        title: "Concilia pagaments parcials",
        description:
          "Registra liquidacions totals o parcials contra els comptes i mantén l'import pendent sempre exacte.",
      },
      {
        title: "Informa sense reconstruir dades",
        description:
          "Revisa posicions pendents i liquidades, categories i indicadors financers des del mateix espai de treball.",
      },
      {
        title: "Pregunta a un assistent d'IA",
        description:
          "Connecta ChatGPT o Claude amb accés de només lectura per resumir transaccions i categories.",
      },
    ],
    workflow: [
      {
        title: "Crea el teu espai de treball personal",
        description: "Tria el país i la moneda i comença amb el pla Personal Free.",
      },
      {
        title: "Afegeix comptes i categories",
        description:
          "Incorpora els comptes i les categories que ja utilitzes i ajusta'ls amb el temps.",
      },
      {
        title: "Planifica, liquida i revisa",
        description:
          "Utilitza pressupostos, objectius, liquidacions i informes per mantenir la imatge completa al dia.",
      },
    ],
    faq: [
      {
        question: "Què inclou Personal Free?",
        answer:
          "Personal Free inclou un espai de treball personal, 250 transaccions al mes, dos comptes bancaris, 25 categories, tres pressupostos, tres objectius i dues vistes desades.",
      },
      {
        question: "Quan hauria de passar a Personal Starter o Pro?",
        answer:
          "Fes el salt quan necessitis més transaccions mensuals, més comptes bancaris, biblioteques de categories i pressupostos més àmplies, o més vistes desades i adjunts.",
      },
      {
        question: "Puc fer servir espais de treball Personal i d'empresa?",
        answer:
          "Sí. Un sol compte de Spifex pot tenir diversos espais de treball a les dues categories de producte i canviar entre ells.",
      },
      {
        question: "L'assistent d'IA modifica les meves dades?",
        answer:
          "No. Les connexions d'IA són de només lectura i només sol·liciten l'abast cashflow:read.",
      },
    ],
    otherLabel: "Descobreix Spifex Empresa",
    labels: {
      comparePlans: "Compara plans",
      outcomesEyebrow: "Què pots fer",
      outcomesTitle: "Un model operatiu clar per gestionar els teus diners",
      outcomesDescription:
        "Cada resultat que veus a continuació es basa en un flux de treball ja implementat a Spifex, no en una funció futura del full de ruta.",
      howEyebrow: "Com funciona",
      howTitle: "Comença poc a poc. Afegeix estructura a mesura que avancis.",
      questionsEyebrow: "Preguntes",
      questionsTitle: "Abans de triar un pla",
      finalTitle:
        "Comença gratis. Millora el pla només quan la teva operació necessiti més espai.",
    },
  },

  business: {
    metaTitle: "Programari d'operacions financeres per a empreses",
    metaDescription:
      "Spifex Empresa connecta el flux de caixa, la banca, les liquidacions, l'estructura del llibre major, els projectes, els departaments i els informes amb controls per rols. Comença gratis.",
    eyebrow: "Spifex Empresa",
    title: "Una sola capa operativa per a les operacions financeres de l'empresa",
    description:
      "Planifica el flux de caixa, connecta la banca, concilia liquidacions, estructura el llibre major i informa per projecte o departament, amb els rols i els controls que necessita un equip financer.",
    primaryLabel: "Comença gratis amb Empresa",
    proof: "Pla gratuït disponible. Sense targeta de crèdit.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planifica i executa el flux de caixa",
        description:
          "Crea apunts previstos, liquida'ls contra comptes bancaris i mantén els saldos pendents al dia.",
      },
      {
        title: "Connecta la banca i els extractes",
        description:
          "Afegeix comptes bancaris, importa extractes i concilia moviments amb justificants reals.",
      },
      {
        title: "Atribueix costos i responsabilitat",
        description:
          "Utilitza projectes, departaments i entitats per explicar on es planifica i on es gasten els diners.",
      },
      {
        title: "Estructura el llibre major",
        description:
          "Mantén els comptes del llibre major i l'estructura d'assentaments perquè els informes es mantinguin coherents.",
      },
      {
        title: "Controla l'accés per rols",
        description:
          "Utilitza els rols de propietari, administrador i membre amb permisos delimitats per l'espai de treball i controls del cicle de vida.",
      },
      {
        title: "Informa amb visibilitat de KPI",
        description:
          "Revisa indicadors de flux de caixa, liquidació i operació a partir de les mateixes dades filtrades.",
      },
    ],
    workflow: [
      {
        title: "Crea el teu espai de treball d'empresa",
        description:
          "Defineix el país i la moneda de l'espai de treball i comença amb el pla Business Free.",
      },
      {
        title: "Afegeix la teva estructura operativa",
        description:
          "Afegeix comptes, categories, projectes, departaments, membres i comptes del llibre major.",
      },
      {
        title: "Opera amb controls",
        description: "Planifica, liquida, concilia i informa amb controls d'accés per rols.",
      },
    ],
    faq: [
      {
        question: "Què inclou Business Free?",
        answer:
          "Business Free inclou un espai de treball, 1.000 apunts de flux de caixa al mes, dos comptes bancaris, un membre, dos projectes, deu comptes del llibre major i dues importacions d'extractes al mes.",
      },
      {
        question: "Què canvia a Starter i Pro?",
        answer:
          "Starter amplia els límits d'apunts, comptes bancaris, membres, projectes, llibre major i extractes. Pro elimina els límits dels fluxos de treball principals i permet fins a sis espais de treball propis.",
      },
      {
        question: "Spifex substitueix el meu programari de comptabilitat?",
        answer:
          "Spifex és la capa operativa per al flux de caixa, la visibilitat bancària, les liquidacions, el govern i els informes. Complementa la comptabilitat oficial en lloc de substituir-la.",
      },
      {
        question: "Puc connectar ChatGPT o Claude?",
        answer:
          "Sí. Els espais de treball d'empresa admeten connexions d'IA de només lectura amb OAuth i l'abast cashflow:read.",
      },
    ],
    otherLabel: "Descobreix Spifex Personal",
    labels: {
      comparePlans: "Compara plans",
      outcomesEyebrow: "Què pots fer",
      outcomesTitle: "Un model operatiu clar per gestionar els teus diners",
      outcomesDescription:
        "Cada resultat que veus a continuació es basa en un flux de treball ja implementat a Spifex, no en una funció futura del full de ruta.",
      howEyebrow: "Com funciona",
      howTitle: "Comença poc a poc. Afegeix estructura a mesura que avancis.",
      questionsEyebrow: "Preguntes",
      questionsTitle: "Abans de triar un pla",
      finalTitle:
        "Comença gratis. Millora el pla només quan la teva operació necessiti més espai.",
    },
  },
};

export default ca;
