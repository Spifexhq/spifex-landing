import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const ca: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Flux de caixa",
    preview: {
      label: "Flux de caixa",
      metric: { label: "Posició de caixa", value: "482,9 mil €", note: "+8,2% vs. previst" },
      secondary: { label: "Previst", value: "164,2 mil €" },
      chartLabel: "Previst vs. liquidat",
      rows: [
        { label: "Nòmines", value: "€28.900", status: "positive" },
        { label: "Pagament a proveïdors", value: "€12.400", status: "warning" },
        { label: "Liquidació de targeta", value: "€6.120", status: "positive" },
      ],
    },
    copy: {
      title: "Saps què arriba, què marxa i què queda pendent",
      subtitle:
        "Planifica apunts, liquida'ls contra comptes bancaris i mantén cada moviment lligat a la categoria, el projecte o el departament que en és responsable.",
      bullets: [
        "Apunts previstos i liquidats en una sola vista",
        "Liquidacions parcials i transferències internes",
        "Categories, projectes i departaments",
        "Filtres, vistes desades i adjunts",
      ],
      outcomes: [
        {
          title: "Consulta el pla de caixa",
          desc: "Crea apunts previstos amb dates, categories i responsables perquè el mes comenci amb una referència.",
        },
        {
          title: "Liquida contra comptes reals",
          desc: "Registra liquidacions totals o parcials contra comptes bancaris i mantén actualitzat el saldo pendent.",
        },
        {
          title: "Mantén les transferències a part",
          desc: "Mou diners entre comptes sense inflar els totals d'ingressos o despeses.",
        },
        {
          title: "Informa amb les mateixes dades",
          desc: "Filtra les posicions pendents i liquidades per categoria, projecte o departament.",
        },
      ],
      steps: [
        {
          title: "Crea l'espai de treball",
          desc: "Tria el país, la moneda i el tipus d'espai de treball. Comença amb el pla gratuït.",
        },
        {
          title: "Afegeix comptes i categories",
          desc: "Afegeix els comptes bancaris i les categories que el teu equip ja utilitza.",
        },
        {
          title: "Planifica, liquida i revisa",
          desc: "Planifica apunts, liquida'ls i revisa la posició sense refer un full de càlcul.",
        },
      ],
      capabilitiesTitle: "Els blocs d'un pla de caixa",
      capabilitiesSubtitle:
        "Cada apunt conserva l'import, les dates, la responsabilitat i l'historial de liquidacions en un sol lloc.",
      capabilities: [
        {
          title: "Apunts previstos",
          desc: "Captura l'import, la data de venciment, la categoria, el projecte i la contrapart.",
        },
        {
          title: "Liquidacions",
          desc: "Liquida totalment o per parts contra un compte bancari, amb un saldo pendent actualitzat.",
        },
        {
          title: "Transferències internes",
          desc: "Mou fons entre comptes sense alterar els totals d'ingressos o despeses.",
        },
        {
          title: "Assignacions",
          desc: "Divideix apunts entre departaments i vincula'ls a projectes.",
        },
        {
          title: "Filtres i vistes desades",
          desc: "Desa els filtres i les columnes que el teu equip fa servir més.",
        },
        {
          title: "Adjunts",
          desc: "Conserva els documents de suport amb l'apunt al qual pertanyen.",
        },
      ],
      finalTitle: "Comença amb un pla de caixa clar",
      finalSubtitle:
        "Crea un espai de treball gratuït i afegeix els comptes i les categories que ja utilitzes.",
    },
  },
  banking: {
    name: "Banca i pagaments",
    preview: {
      label: "Banca",
      metric: { label: "Comptes", value: "4", note: "2 monedes" },
      secondary: { label: "Línies d'extracte", value: "186" },
      chartLabel: "Conciliat vs. pendent",
      rows: [
        { label: "Compte operatiu", value: "Conciliat", status: "positive" },
        { label: "Compte d'impostos", value: "12 pendents", status: "warning" },
        { label: "Compte de reserves", value: "Conciliat", status: "positive" },
      ],
    },
    copy: {
      title: "Comptes bancaris i extractes al mateix espai de treball",
      subtitle:
        "Mantén les dades dels comptes, els extractes importats i les decisions de conciliació junts perquè la conciliació no visqui en un full de càlcul a part.",
      bullets: [
        "Comptes bancaris i saldos",
        "Importació i anàlisi d'extractes",
        "Conciliació suggerida",
        "Revisió de conciliació",
      ],
      outcomes: [
        {
          title: "Una sola llista de comptes",
          desc: "Conserva el nom del banc, el tipus de compte, la moneda i el saldo a l'espai de treball.",
        },
        {
          title: "Importa extractes",
          desc: "Puja un extracte i revisa les línies analitzades abans de confirmar-les.",
        },
        {
          title: "Concilia moviments",
          desc: "Utilitza les conciliacions suggerides entre línies d'extracte i apunts de flux de caixa i confirma-les.",
        },
        {
          title: "Revisa les excepcions",
          desc: "Consulta les línies no conciliades i pendents en lloc de buscar entre fitxers.",
        },
      ],
      steps: [
        {
          title: "Afegeix un compte bancari",
          desc: "Defineix l'entitat, el tipus de compte, la moneda i les dades inicials.",
        },
        {
          title: "Importa un extracte",
          desc: "Puja el fitxer i revisa les línies analitzades abans d'importar.",
        },
        {
          title: "Concilia i quadra",
          desc: "Confirma les conciliacions suggerides i mantén les excepcions visibles.",
        },
      ],
      capabilitiesTitle: "Dades bancàries, sense el full de càlcul paral·lel",
      capabilitiesSubtitle:
        "Els comptes, les línies d'extracte i les decisions de conciliació es mantenen connectats amb el flux de caixa que expliquen.",
      capabilities: [
        {
          title: "Comptes bancaris",
          desc: "Entitat, tipus, moneda i dades del compte per espai de treball.",
        },
        {
          title: "Importació d'extractes",
          desc: "Puja i analitza extractes amb un pas de revisió abans de confirmar.",
        },
        {
          title: "Conciliació suggerida",
          desc: "Classifica línies d'extracte contra apunts i patrons reutilitzables.",
        },
        {
          title: "Revisió de conciliació",
          desc: "Mantén visibles les línies pendents, conciliades i no conciliades.",
        },
        {
          title: "Enllaços de liquidació",
          desc: "Connecta els moviments liquidats amb el compte bancari que els ha rebut.",
        },
        {
          title: "Rols de l'espai de treball",
          desc: "Mantén les dades dels comptes delimitades a l'espai de treball i als seus membres.",
        },
      ],
      finalTitle: "Porta la banca al mateix espai de treball",
      finalSubtitle: "Comença gratis i afegeix el teu primer compte bancari.",
    },
  },
  spend: {
    name: "Despeses i liquidacions",
    preview: {
      label: "Despeses",
      metric: { label: "Sortida pendent", value: "38,4 mil €", note: "14 apunts" },
      secondary: { label: "Liquidat aquest mes", value: "96,2 mil €" },
      chartLabel: "Liquidat vs. pendent",
      rows: [
        { label: "Viatges", value: "€2.840", status: "positive" },
        { label: "Programari", value: "€1.290", status: "warning" },
        { label: "Oficina", value: "€640", status: "positive" },
      ],
    },
    copy: {
      title: "Controla la despesa sortint i liquida-la segons el pla",
      subtitle:
        "Registra apunts de sortida, assigna'ls a categories, projectes o departaments i liquida'ls íntegrament o per parts.",
      bullets: [
        "Apunts de sortida amb data de venciment",
        "Liquidacions parcials",
        "Assignació a projectes i departaments",
        "Vistes de saldo pendent",
      ],
      outcomes: [
        {
          title: "Consulta la despesa compromesa",
          desc: "Registra apunts de sortida amb dates de venciment, categories i responsables.",
        },
        {
          title: "Liquida per parts",
          desc: "Aplica una o més liquidacions a un apunt i segueix l'import restant.",
        },
        {
          title: "Assigna el cost",
          desc: "Divideix la despesa entre departaments i vincula-la a projectes.",
        },
        {
          title: "Revisa què queda obert",
          desc: "Filtra la despesa pendent i liquidada sense exportar dades.",
        },
      ],
      steps: [
        {
          title: "Registra la sortida",
          desc: "Captura l'import, la data de venciment, la categoria, el projecte i la contrapart.",
        },
        {
          title: "Liquida contra el compte",
          desc: "Aplica una o més liquidacions i mantén actualitzat el saldo obert.",
        },
        {
          title: "Revisa el saldo",
          desc: "Filtra la despesa liquidada i pendent per categoria, projecte o departament.",
        },
      ],
      capabilitiesTitle: "Despesa que no es desconnecta de la liquidació",
      capabilitiesSubtitle:
        "Els apunts de sortida conserven la seva assignació i historial de liquidacions en lloc d'acabar en un full a part.",
      capabilities: [
        {
          title: "Apunts de sortida",
          desc: "Import, data de venciment, categoria, projecte i contrapart.",
        },
        {
          title: "Liquidacions parcials",
          desc: "Liquida un apunt en diversos pagaments.",
        },
        {
          title: "Assignacions",
          desc: "Assigna percentatges a departaments i vincula projectes.",
        },
        {
          title: "Vistes de pendents",
          desc: "Consulta la despesa oberta i liquidada amb filtres desats.",
        },
      ],
      finalTitle: "Mantén la despesa i la liquidació connectades",
      finalSubtitle: "Comença gratis i registra el teu primer apunt de sortida.",
    },
  },
  ledger: {
    name: "Llibre major",
    preview: {
      label: "Llibre major",
      metric: { label: "Comptes de registre", value: "128", note: "6 capçaleres" },
      secondary: { label: "Assentaments", value: "1.842" },
      chartLabel: "Activitat de registre",
      rows: [
        { label: "Ingressos · 4010", value: "Quadra", status: "positive" },
        { label: "Nòmines · 6200", value: "Registrat", status: "positive" },
        { label: "Transitori · 9999", value: "Revisa", status: "warning" },
      ],
    },
    copy: {
      title: "Un pla de comptes pensat per a informes coherents",
      subtitle:
        "Estructura comptes de capçalera i de registre, registra assentaments i mantén els períodes i les dimensions sota control.",
      bullets: [
        "Comptes de capçalera i de registre",
        "Assentaments i llibres",
        "Períodes fiscals",
        "Dimensions i polítiques de registre",
      ],
      outcomes: [
        {
          title: "Estructura el pla",
          desc: "Crea comptes de capçalera i de registre amb codis i saldos normals.",
        },
        {
          title: "Registra assentaments",
          desc: "Comptabilitza assentaments amb línies, llibres i períodes fiscals.",
        },
        {
          title: "Mantén les dimensions",
          desc: "Defineix dimensions i valors permesos per a l'estructura d'informes.",
        },
        {
          title: "Controla el registre",
          desc: "Utilitza polítiques de registre i controls de registre manual quan calgui.",
        },
      ],
      steps: [
        {
          title: "Dissenya el pla",
          desc: "Crea els comptes de capçalera i de registre que necessiten els teus informes.",
        },
        {
          title: "Registra apunts",
          desc: "Comptabilitza assentaments amb el llibre, el període i les dimensions correctes.",
        },
        {
          title: "Revisa els períodes",
          desc: "Mantén els períodes fiscals i l'estat de registre sota control.",
        },
      ],
      capabilitiesTitle: "Una estructura comptable que aguanta",
      capabilitiesSubtitle:
        "El pla, els assentaments, els períodes i les dimensions comparteixen un sol espai de treball en lloc d'anar-se separant.",
      capabilities: [
        {
          title: "Pla de comptes",
          desc: "Comptes de capçalera i de registre amb codis, tipus i saldos normals.",
        },
        {
          title: "Assentaments",
          desc: "Apunts amb diverses línies, llibres, períodes i estat.",
        },
        {
          title: "Períodes fiscals",
          desc: "Obre i tanca períodes per a cada llibre comptable.",
        },
        {
          title: "Dimensions",
          desc: "Defineix dimensions, valors i regles a nivell de compte.",
        },
        {
          title: "Polítiques de registre",
          desc: "Controla com es registren els assentaments i quins comptes permeten registre manual.",
        },
        {
          title: "Controls de compte",
          desc: "Comptes de control bancari i proteccions de classificació.",
        },
      ],
      finalTitle: "Construeix un llibre major defensable",
      finalSubtitle: "Comença gratis i dona forma al pla segons els teus informes.",
    },
  },
  projects: {
    name: "Projectes",
    preview: {
      label: "Projectes",
      metric: { label: "Projectes actius", value: "24", note: "6 tipus" },
      secondary: { label: "Apunts vinculats", value: "312" },
      chartLabel: "Previst vs. liquidat per projecte",
      rows: [
        { label: "Implantació", value: "420 mil €", status: "positive" },
        { label: "Migració", value: "186 mil €", status: "warning" },
        { label: "Suport", value: "96 mil €", status: "positive" },
      ],
    },
    copy: {
      title: "Consulta costos i ingressos per projecte",
      subtitle:
        "Crea projectes, vincula-hi apunts de flux de caixa i compara imports previstos, liquidats i pendents en un sol filtre.",
      bullets: [
        "Fitxes de projecte amb codis i tipus",
        "Vincles d'apunt a projecte",
        "Assignacions a departaments",
        "Vistes específiques per projecte",
      ],
      outcomes: [
        {
          title: "Crea una fitxa de projecte",
          desc: "Nom, codi, tipus i descripció amb estat actiu.",
        },
        {
          title: "Vincula apunts",
          desc: "Enllaça apunts de flux de caixa previstos i liquidats al projecte.",
        },
        {
          title: "Assigna departaments",
          desc: "Divideix el cost d'un apunt entre departaments.",
        },
        {
          title: "Revisa el projecte",
          desc: "Filtra apunts i imports pendents per projecte.",
        },
      ],
      steps: [
        {
          title: "Crea el projecte",
          desc: "Afegeix un nom, un codi i un tipus perquè el projecte sigui fàcil d'identificar.",
        },
        {
          title: "Vincula apunts",
          desc: "Enllaça els apunts de flux de caixa que pertanyen al projecte.",
        },
        {
          title: "Revisa la posició",
          desc: "Filtra els imports previstos, liquidats i pendents per projecte.",
        },
      ],
      capabilitiesTitle: "Context de projecte a cada moviment",
      capabilitiesSubtitle:
        "Els apunts, els repartiments per departament i l'estat de liquidació es mantenen lligats al projecte que en és responsable.",
      capabilities: [
        {
          title: "Fitxes de projecte",
          desc: "Nom, codi, tipus, descripció i estat.",
        },
        {
          title: "Vincles d'apunts",
          desc: "Vincula apunts de flux de caixa directament a un projecte.",
        },
        {
          title: "Repartiment per departament",
          desc: "Assigna percentatges d'apunt entre departaments.",
        },
        {
          title: "Filtres de projecte",
          desc: "Revisa apunts, liquidacions i imports oberts per projecte.",
        },
      ],
      finalTitle: "Fes visible el rendiment dels projectes",
      finalSubtitle: "Comença gratis i crea el teu primer projecte.",
    },
  },
  departments: {
    name: "Departaments",
    preview: {
      label: "Departaments",
      metric: { label: "Departaments", value: "8", note: "3 centres de cost" },
      secondary: { label: "Apunts assignats", value: "246" },
      chartLabel: "Apunts per departament",
      rows: [
        { label: "Operacions", value: "42%", status: "positive" },
        { label: "Vendes", value: "31%", status: "warning" },
        { label: "Enginyeria", value: "27%", status: "positive" },
      ],
    },
    copy: {
      title: "Atribueix cada moviment a l'equip que en és responsable",
      subtitle:
        "Crea departaments, assigna percentatges d'apunt i revisa les xifres per equip sense refer l'informe.",
      bullets: [
        "Fitxes de departament",
        "Assignacions per percentatge",
        "Filtres d'apunts per departament",
        "Vistes desades",
      ],
      outcomes: [
        {
          title: "Crea el departament",
          desc: "Nom, codi i estat actiu per a cada centre de cost.",
        },
        {
          title: "Assigna apunts",
          desc: "Assigna un o més departaments a un apunt amb percentatges.",
        },
        {
          title: "Filtra per equip",
          desc: "Revisa apunts i liquidacions d'un departament alhora.",
        },
        {
          title: "Mantén visible la responsabilitat",
          desc: "Consulta quin equip és responsable de la despesa al mateix espai de treball.",
        },
      ],
      steps: [
        {
          title: "Defineix els departaments",
          desc: "Afegeix els noms i codis que els teus equips ja utilitzen.",
        },
        {
          title: "Assigna apunts",
          desc: "Divideix un apunt entre departaments amb percentatges.",
        },
        {
          title: "Revisa les xifres",
          desc: "Filtra els apunts de flux de caixa per departament i revisa la posició.",
        },
      ],
      capabilitiesTitle: "Una vista de centre de cost fiable",
      capabilitiesSubtitle:
        "Els repartiments per departament es mantenen lligats a l'apunt en lloc de reconstruir-se a l'hora d'informar.",
      capabilities: [
        {
          title: "Fitxes de departament",
          desc: "Nom, codi i estat per a cada centre de cost.",
        },
        {
          title: "Assignació per percentatge",
          desc: "Divideix un apunt entre departaments amb percentatges definits.",
        },
        {
          title: "Filtres d'apunts",
          desc: "Filtra apunts de flux de caixa per departament.",
        },
        {
          title: "Vistes desades",
          desc: "Conserva les columnes i els filtres que utilitza el teu equip.",
        },
      ],
      finalTitle: "Dona un responsable a cada moviment",
      finalSubtitle: "Comença gratis i defineix el teu primer departament.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Entitats",
      metric: { label: "Entitats", value: "186", note: "7 tipus" },
      secondary: { label: "Actives", value: "164" },
      chartLabel: "Entitats per tipus",
      rows: [
        { label: "Clients", value: "82", status: "positive" },
        { label: "Proveïdors", value: "46", status: "positive" },
        { label: "Contractistes", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Un sol directori per a cada contrapart",
      subtitle:
        "Mantén clients, proveïdors, empleats, contractistes i socis en un sol espai de treball i vincula'ls als apunts de flux de caixa que hi tenen relació.",
      bullets: [
        "Clients, proveïdors i socis",
        "Dades de contacte i fiscals",
        "Tipus i estat de les entitats",
        "Vincles amb apunts de flux de caixa",
      ],
      outcomes: [
        {
          title: "Un sol directori",
          desc: "Emmagatzema cada contrapart una sola vegada amb un tipus d'entitat clar.",
        },
        {
          title: "Dades de contacte",
          desc: "Conserva el correu, el telèfon i l'adreça amb la fitxa.",
        },
        {
          title: "Dades fiscals i bancàries",
          desc: "Emmagatzema els identificadors fiscals i les dades bancàries quan calgui.",
        },
        {
          title: "Connecta el llibre major",
          desc: "Referencia l'entitat als apunts de flux de caixa que ha pagat o rebut.",
        },
      ],
      steps: [
        {
          title: "Afegeix l'entitat",
          desc: "Tria el tipus d'entitat i afegeix el nom i les dades de contacte.",
        },
        {
          title: "Classifica la relació",
          desc: "Marca-la com a client, proveïdor, empleat, contractista, soci o un altre tipus.",
        },
        {
          title: "Vincula apunts",
          desc: "Referencia l'entitat als apunts de flux de caixa amb què es relaciona.",
        },
      ],
      capabilitiesTitle: "Dades de contrapart que segueixen sent útils",
      capabilitiesSubtitle:
        "Una fitxa per a les persones i organitzacions que hi ha darrere del teu flux de caixa, en lloc d'una llista de contactes en una eina a part.",
      capabilities: [
        {
          title: "Fitxes d'entitat",
          desc: "Clients, proveïdors, empleats, contractistes, socis i més.",
        },
        {
          title: "Dades de contacte",
          desc: "Correu, telèfon i adreça en una sola fitxa.",
        },
        {
          title: "Camps fiscals i bancaris",
          desc: "Identificadors fiscals i dades bancàries opcionals.",
        },
        {
          title: "Vincles d'apunts",
          desc: "Referencia la contrapart als apunts de flux de caixa.",
        },
      ],
      finalTitle: "Mantén les contraparts en un sol lloc",
      finalSubtitle: "Comença gratis i afegeix la teva primera entitat.",
    },
  },
  inventory: {
    name: "Inventari",
    preview: {
      label: "Inventari",
      metric: { label: "Articles", value: "1.284", note: "42 categories" },
      secondary: { label: "Unitats en estoc", value: "8.960" },
      chartLabel: "Articles per tipus d'unitat",
      rows: [
        { label: "SKU-1042", value: "240 unitats", status: "positive" },
        { label: "SKU-2210", value: "18 unitats", status: "warning" },
        { label: "SKU-3180", value: "96 unitats", status: "positive" },
      ],
    },
    copy: {
      title: "Dades mestre d'articles per a estoc i serveis",
      subtitle:
        "Mantén els SKU, les unitats de mesura i la quantitat en estoc en una sola llista i vincula els articles als apunts de flux de caixa que els mouen.",
      bullets: [
        "SKU i nom de l'article",
        "Unitat de mesura",
        "Quantitat en estoc",
        "Vincles amb apunts de flux de caixa",
      ],
      outcomes: [
        {
          title: "Una sola llista d'articles",
          desc: "Emmagatzema cada SKU una sola vegada amb un nom i una descripció.",
        },
        {
          title: "Unitats i quantitats",
          desc: "Fes el seguiment de la unitat de mesura i la quantitat en estoc.",
        },
        {
          title: "Control d'estat",
          desc: "Desactiva articles sense eliminar-ne l'historial.",
        },
        {
          title: "Connecta amb el flux de caixa",
          desc: "Vincula línies d'inventari als apunts que mouen estoc.",
        },
      ],
      steps: [
        {
          title: "Crea l'article",
          desc: "Afegeix el SKU, el nom i la descripció.",
        },
        {
          title: "Defineix la unitat i la quantitat",
          desc: "Tria la unitat de mesura i registra la quantitat en estoc.",
        },
        {
          title: "Vincula'l als apunts",
          desc: "Referencia l'article als apunts de flux de caixa que el mouen.",
        },
      ],
      capabilitiesTitle: "Dades d'article netes, connectades amb les finances",
      capabilitiesSubtitle:
        "Un mestre d'articles senzill que es manté lligat al flux de caixa que afecta.",
      capabilities: [
        {
          title: "Fitxes d'article",
          desc: "SKU, nom, descripció i estat actiu.",
        },
        {
          title: "Unitats de mesura",
          desc: "Unitats de text lliure com peces, quilos o hores.",
        },
        {
          title: "Quantitat en estoc",
          desc: "Conserva la quantitat actual de cada article.",
        },
        {
          title: "Vincles d'apunts",
          desc: "Referencia articles als apunts de flux de caixa.",
        },
      ],
      finalTitle: "Mantén les dades d'article netes",
      finalSubtitle: "Comença gratis i afegeix el teu primer SKU.",
    },
  },
};

export default ca;
