import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const it: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Cash flow",
    preview: {
      label: "Cash flow",
      metric: { label: "Posizione di cassa", value: "€ 482,9k", note: "+8,2% rispetto al piano" },
      secondary: { label: "Pianificato", value: "€ 164,2k" },
      chartLabel: "Pianificato vs regolato",
      rows: [
        { label: "Personale", value: "€ 28.900", status: "positive" },
        { label: "Pagamento fornitore", value: "€ 12.400", status: "warning" },
        { label: "Regolamento carta", value: "€ 6.120", status: "positive" },
      ],
    },
    copy: {
      title: "Sai cosa entra, cosa esce e cosa resta ancora da regolare",
      subtitle:
        "Pianifica le voci, regolale sui conti bancari e mantieni ogni movimento collegato alla categoria, al progetto o al reparto che ne è responsabile.",
      bullets: [
        "Voci pianificate e regolate in un'unica vista",
        "Regolamenti parziali e bonifici interni",
        "Categorie, progetti e reparti",
        "Filtri, viste salvate e allegati",
      ],
      outcomes: [
        {
          title: "Vedi il piano di cassa",
          desc: "Crea voci pianificate con date, categorie e responsabili, così il mese parte da una base chiara.",
        },
        {
          title: "Regola sui conti reali",
          desc: "Registra regolamenti totali o parziali sui conti bancari e mantieni aggiornato il saldo aperto.",
        },
        {
          title: "Tieni separati i bonifici",
          desc: "Sposta denaro tra conti senza gonfiare i totali di entrate o uscite.",
        },
        {
          title: "Produci report dagli stessi dati",
          desc: "Filtra le posizioni in sospeso e regolate per categoria, progetto o reparto.",
        },
      ],
      steps: [
        {
          title: "Crea il workspace",
          desc: "Scegli paese, valuta e tipo di workspace. Inizia con il piano Free.",
        },
        {
          title: "Aggiungi conti e categorie",
          desc: "Aggiungi i conti bancari e le categorie che il tuo team già usa.",
        },
        {
          title: "Pianifica, regola e analizza",
          desc: "Pianifica le voci, regolale e analizza la posizione senza ricostruire un foglio di calcolo.",
        },
      ],
      capabilitiesTitle: "Gli elementi base di un piano di cassa",
      capabilitiesSubtitle:
        "Ogni voce conserva importo, date, responsabilità e storico dei regolamenti in un unico posto.",
      capabilities: [
        {
          title: "Voci pianificate",
          desc: "Registra importo, scadenza, categoria, progetto e controparte.",
        },
        {
          title: "Regolamenti",
          desc: "Regola per intero o in più parti su un conto bancario, con saldo aperto aggiornato.",
        },
        {
          title: "Bonifici interni",
          desc: "Sposta fondi tra conti senza modificare i totali di entrate o uscite.",
        },
        {
          title: "Allocazioni",
          desc: "Suddividi le voci tra i reparti e collegale ai progetti.",
        },
        {
          title: "Filtri e viste salvate",
          desc: "Salva i filtri e le colonne che il tuo team usa di più.",
        },
        {
          title: "Allegati",
          desc: "Conserva i documenti di supporto insieme alla voce a cui appartengono.",
        },
      ],
      finalTitle: "Parti da un piano di cassa chiaro",
      finalSubtitle: "Crea un workspace gratuito e aggiungi i conti e le categorie che già usi.",
    },
  },

  banking: {
    name: "Banking e pagamenti",
    preview: {
      label: "Banking",
      metric: { label: "Conti", value: "4", note: "2 valute" },
      secondary: { label: "Righe estratto conto", value: "186" },
      chartLabel: "Abbinati vs in attesa",
      rows: [
        { label: "Conto operativo", value: "Abbinato", status: "positive" },
        { label: "Conto fiscale", value: "12 in attesa", status: "warning" },
        { label: "Conto riserve", value: "Abbinato", status: "positive" },
      ],
    },
    copy: {
      title: "Conti bancari ed estratti conto nello stesso workspace",
      subtitle:
        "Tieni insieme dettagli dei conti, estratti conto importati e decisioni di abbinamento, così la riconciliazione non vive in un foglio di calcolo separato.",
      bullets: [
        "Conti bancari e saldi",
        "Importazione e analisi degli estratti conto",
        "Abbinamenti suggeriti",
        "Revisione della riconciliazione",
      ],
      outcomes: [
        {
          title: "Un unico elenco di conti",
          desc: "Mantieni nel workspace nome della banca, tipo di conto, valuta e saldo.",
        },
        {
          title: "Importa gli estratti conto",
          desc: "Carica un estratto conto e controlla le righe analizzate prima di confermarle.",
        },
        {
          title: "Abbina i movimenti",
          desc: "Usa gli abbinamenti suggeriti tra righe dell'estratto conto e voci di cash flow, poi conferma.",
        },
        {
          title: "Esamina le eccezioni",
          desc: "Vedi le righe non abbinate e in attesa invece di cercarle tra i file.",
        },
      ],
      steps: [
        {
          title: "Aggiungi un conto bancario",
          desc: "Imposta istituto, tipo di conto, valuta e dati iniziali.",
        },
        {
          title: "Importa un estratto conto",
          desc: "Carica il file e controlla le righe analizzate prima di importarle.",
        },
        {
          title: "Abbina e riconcilia",
          desc: "Conferma gli abbinamenti suggeriti e mantieni visibili le eccezioni.",
        },
      ],
      capabilitiesTitle: "Dati bancari, senza il foglio di calcolo parallelo",
      capabilitiesSubtitle:
        "Conti, righe degli estratti conto e decisioni di abbinamento restano collegati al cash flow che spiegano.",
      capabilities: [
        {
          title: "Conti bancari",
          desc: "Istituto, tipo, valuta e dettagli del conto per workspace.",
        },
        {
          title: "Importazione estratti conto",
          desc: "Carica e analizza gli estratti conto con un passaggio di revisione prima della conferma.",
        },
        {
          title: "Abbinamenti suggeriti",
          desc: "Classifica le righe dell'estratto conto rispetto alle voci e a pattern riutilizzabili.",
        },
        {
          title: "Revisione della riconciliazione",
          desc: "Mantieni visibili le righe in attesa, abbinate e non abbinate.",
        },
        {
          title: "Collegamenti ai regolamenti",
          desc: "Collega i movimenti regolati al conto bancario che li ha ricevuti.",
        },
        {
          title: "Ruoli del workspace",
          desc: "Mantieni i dati dei conti circoscritti al workspace e ai suoi membri.",
        },
      ],
      finalTitle: "Porta il banking nello stesso workspace",
      finalSubtitle: "Inizia gratis e aggiungi il tuo primo conto bancario.",
    },
  },

  spend: {
    name: "Spese e regolamenti",
    preview: {
      label: "Spese",
      metric: { label: "Uscite aperte", value: "€ 38,4k", note: "14 voci" },
      secondary: { label: "Regolato questo mese", value: "€ 96,2k" },
      chartLabel: "Regolato vs in sospeso",
      rows: [
        { label: "Viaggi", value: "€ 2.840", status: "positive" },
        { label: "Software", value: "€ 1.290", status: "warning" },
        { label: "Ufficio", value: "€ 640", status: "positive" },
      ],
    },
    copy: {
      title: "Monitora le spese in uscita e regolale rispetto al piano",
      subtitle:
        "Registra le voci in uscita, assegnale a categorie, progetti o reparti e regolale per intero o in più parti.",
      bullets: [
        "Voci in uscita con scadenze",
        "Regolamenti parziali",
        "Allocazione a progetti e reparti",
        "Viste sul saldo in sospeso",
      ],
      outcomes: [
        {
          title: "Vedi la spesa impegnata",
          desc: "Registra le voci in uscita con scadenze, categorie e responsabili.",
        },
        {
          title: "Regola in più parti",
          desc: "Applica uno o più regolamenti a una voce e monitora l'importo residuo.",
        },
        {
          title: "Assegna il costo",
          desc: "Suddividi la spesa tra i reparti e collegala ai progetti.",
        },
        {
          title: "Controlla ciò che è aperto",
          desc: "Filtra la spesa in sospeso e regolata senza esportare dati.",
        },
      ],
      steps: [
        {
          title: "Registra l'uscita",
          desc: "Inserisci importo, scadenza, categoria, progetto e controparte.",
        },
        {
          title: "Regola sul conto",
          desc: "Applica uno o più regolamenti e mantieni aggiornato il saldo aperto.",
        },
        {
          title: "Analizza il saldo",
          desc: "Filtra la spesa regolata e in sospeso per categoria, progetto o reparto.",
        },
      ],
      capabilitiesTitle: "Spese sempre collegate al regolamento",
      capabilitiesSubtitle:
        "Le voci in uscita conservano allocazione e storico dei regolamenti, invece di finire in un foglio separato.",
      capabilities: [
        {
          title: "Voci in uscita",
          desc: "Importo, scadenza, categoria, progetto e controparte.",
        },
        {
          title: "Regolamenti parziali",
          desc: "Regola una voce attraverso più pagamenti.",
        },
        {
          title: "Allocazioni",
          desc: "Assegna percentuali ai reparti e collega i progetti.",
        },
        {
          title: "Viste sul saldo in sospeso",
          desc: "Vedi la spesa aperta e regolata con filtri salvati.",
        },
      ],
      finalTitle: "Tieni collegate spese e regolamenti",
      finalSubtitle: "Inizia gratis e registra la tua prima voce in uscita.",
    },
  },

  ledger: {
    name: "Libro mastro",
    preview: {
      label: "Libro mastro",
      metric: { label: "Conti di rilevazione", value: "128", note: "6 raggruppamenti" },
      secondary: { label: "Scritture contabili", value: "1.842" },
      chartLabel: "Attività di contabilizzazione",
      rows: [
        { label: "Ricavi · 4010", value: "Bilanciato", status: "positive" },
        { label: "Personale · 6200", value: "Contabilizzato", status: "positive" },
        { label: "Sospesi · 9999", value: "Da verificare", status: "warning" },
      ],
    },
    copy: {
      title: "Un piano dei conti pensato per report coerenti",
      subtitle:
        "Struttura conti di raggruppamento e di rilevazione, registra scritture contabili e tieni sotto controllo periodi e dimensioni.",
      bullets: [
        "Conti di raggruppamento e di rilevazione",
        "Scritture contabili e libri",
        "Periodi fiscali",
        "Dimensioni e politiche di contabilizzazione",
      ],
      outcomes: [
        {
          title: "Struttura il piano",
          desc: "Crea conti di raggruppamento e di rilevazione con codici e saldi normali.",
        },
        {
          title: "Registra le scritture",
          desc: "Contabilizza scritture con righe, libri e periodi fiscali.",
        },
        {
          title: "Gestisci le dimensioni",
          desc: "Definisci dimensioni e valori ammessi per la struttura dei report.",
        },
        {
          title: "Controlla la contabilizzazione",
          desc: "Usa politiche di contabilizzazione e controlli sull'inserimento manuale dove serve.",
        },
      ],
      steps: [
        {
          title: "Progetta il piano",
          desc: "Crea i conti di raggruppamento e di rilevazione che servono ai tuoi report.",
        },
        {
          title: "Registra le voci",
          desc: "Contabilizza le scritture con libro, periodo e dimensioni corretti.",
        },
        {
          title: "Verifica i periodi",
          desc: "Mantieni sotto controllo periodi fiscali e stato della contabilizzazione.",
        },
      ],
      capabilitiesTitle: "Una struttura contabile che regge",
      capabilitiesSubtitle:
        "Piano, giornale, periodi e dimensioni condividono un unico workspace invece di divergere.",
      capabilities: [
        {
          title: "Piano dei conti",
          desc: "Conti di raggruppamento e di rilevazione con codici, tipi e saldi normali.",
        },
        {
          title: "Scritture contabili",
          desc: "Registrazioni multi-riga con libri, periodi e stato.",
        },
        {
          title: "Periodi fiscali",
          desc: "Apri e chiudi i periodi per ciascun libro contabile.",
        },
        {
          title: "Dimensioni",
          desc: "Definisci dimensioni, valori e regole a livello di conto.",
        },
        {
          title: "Politiche di contabilizzazione",
          desc: "Controlla come vengono contabilizzate le voci e quali conti ammettono l'inserimento manuale.",
        },
        {
          title: "Controlli sui conti",
          desc: "Conti di controllo bancari e protezioni della classificazione.",
        },
      ],
      finalTitle: "Costruisci un libro mastro difendibile",
      finalSubtitle: "Inizia gratis e modella il piano dei conti sui tuoi report.",
    },
  },

  projects: {
    name: "Progetti",
    preview: {
      label: "Progetti",
      metric: { label: "Progetti attivi", value: "24", note: "6 tipi" },
      secondary: { label: "Voci collegate", value: "312" },
      chartLabel: "Pianificato vs regolato per progetto",
      rows: [
        { label: "Implementazione", value: "€ 420k", status: "positive" },
        { label: "Migrazione", value: "€ 186k", status: "warning" },
        { label: "Supporto", value: "€ 96k", status: "positive" },
      ],
    },
    copy: {
      title: "Vedi costi e ricavi per progetto",
      subtitle:
        "Crea progetti, collega le voci di cash flow e confronta importi pianificati, regolati e in sospeso con un unico filtro.",
      bullets: [
        "Anagrafiche progetto con codici e tipi",
        "Collegamento delle voci al progetto",
        "Allocazioni ai reparti",
        "Viste specifiche per progetto",
      ],
      outcomes: [
        {
          title: "Crea l'anagrafica del progetto",
          desc: "Nome, codice, tipo e descrizione con stato attivo.",
        },
        {
          title: "Collega le voci",
          desc: "Collega al progetto le voci di cash flow pianificate e regolate.",
        },
        {
          title: "Alloca i reparti",
          desc: "Suddividi il costo di una voce tra i reparti.",
        },
        {
          title: "Analizza il progetto",
          desc: "Filtra voci e importi in sospeso per progetto.",
        },
      ],
      steps: [
        {
          title: "Crea il progetto",
          desc: "Aggiungi nome, codice e tipo per identificare facilmente il progetto.",
        },
        {
          title: "Collega le voci",
          desc: "Collega le voci di cash flow che appartengono al progetto.",
        },
        {
          title: "Analizza la posizione",
          desc: "Filtra importi pianificati, regolati e in sospeso per progetto.",
        },
      ],
      capabilitiesTitle: "Il contesto del progetto su ogni movimento",
      capabilitiesSubtitle:
        "Voci, suddivisioni tra reparti e stato dei regolamenti restano collegati al progetto che ne è responsabile.",
      capabilities: [
        {
          title: "Anagrafiche progetto",
          desc: "Nome, codice, tipo, descrizione e stato.",
        },
        {
          title: "Collegamenti alle voci",
          desc: "Collega direttamente le voci di cash flow a un progetto.",
        },
        {
          title: "Suddivisione per reparto",
          desc: "Alloca le percentuali delle voci tra i reparti.",
        },
        {
          title: "Filtri per progetto",
          desc: "Analizza voci, regolamenti e importi aperti per progetto.",
        },
      ],
      finalTitle: "Rendi visibili le performance dei progetti",
      finalSubtitle: "Inizia gratis e crea il tuo primo progetto.",
    },
  },

  departments: {
    name: "Reparti",
    preview: {
      label: "Reparti",
      metric: { label: "Reparti", value: "8", note: "3 centri di costo" },
      secondary: { label: "Voci allocate", value: "246" },
      chartLabel: "Voci per reparto",
      rows: [
        { label: "Operations", value: "42%", status: "positive" },
        { label: "Vendite", value: "31%", status: "warning" },
        { label: "Engineering", value: "27%", status: "positive" },
      ],
    },
    copy: {
      title: "Attribuisci ogni movimento al team che ne è responsabile",
      subtitle:
        "Crea reparti, alloca le percentuali delle voci e analizza i numeri per team senza ricostruire il report.",
      bullets: [
        "Anagrafiche reparto",
        "Allocazioni percentuali",
        "Filtri delle voci per reparto",
        "Viste salvate",
      ],
      outcomes: [
        {
          title: "Crea il reparto",
          desc: "Nome, codice e stato attivo per ogni centro di costo.",
        },
        {
          title: "Alloca le voci",
          desc: "Assegna a una voce uno o più reparti con relative percentuali.",
        },
        {
          title: "Filtra per team",
          desc: "Analizza voci e regolamenti di un reparto alla volta.",
        },
        {
          title: "Mantieni visibile la responsabilità",
          desc: "Vedi quale team è responsabile della spesa nello stesso workspace.",
        },
      ],
      steps: [
        {
          title: "Definisci i reparti",
          desc: "Aggiungi i nomi e i codici che i tuoi team già usano.",
        },
        {
          title: "Alloca le voci",
          desc: "Suddividi una voce tra i reparti con percentuali.",
        },
        {
          title: "Analizza i numeri",
          desc: "Filtra le voci di cash flow per reparto e analizza la posizione.",
        },
      ],
      capabilitiesTitle: "Una vista per centri di costo affidabile",
      capabilitiesSubtitle:
        "Le suddivisioni per reparto restano collegate alla voce invece di essere ricostruite al momento del report.",
      capabilities: [
        {
          title: "Anagrafiche reparto",
          desc: "Nome, codice e stato per ogni centro di costo.",
        },
        {
          title: "Allocazione percentuale",
          desc: "Suddividi una voce tra i reparti con percentuali definite.",
        },
        {
          title: "Filtri delle voci",
          desc: "Filtra le voci di cash flow per reparto.",
        },
        {
          title: "Viste salvate",
          desc: "Conserva le colonne e i filtri che il tuo team usa.",
        },
      ],
      finalTitle: "Dai un responsabile a ogni movimento",
      finalSubtitle: "Inizia gratis e definisci il tuo primo reparto.",
    },
  },

  crm: {
    name: "CRM",
    preview: {
      label: "Entità",
      metric: { label: "Entità", value: "186", note: "7 tipi" },
      secondary: { label: "Attive", value: "164" },
      chartLabel: "Entità per tipo",
      rows: [
        { label: "Clienti", value: "82", status: "positive" },
        { label: "Fornitori", value: "46", status: "positive" },
        { label: "Collaboratori", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Un'unica anagrafica per ogni controparte",
      subtitle:
        "Tieni clienti, fornitori, dipendenti, collaboratori e partner in un unico workspace e collegali alle voci di cash flow a cui si riferiscono.",
      bullets: [
        "Clienti, fornitori e partner",
        "Dati di contatto e fiscali",
        "Tipi di entità e stato",
        "Collegamenti alle voci di cash flow",
      ],
      outcomes: [
        {
          title: "Un'unica anagrafica",
          desc: "Archivia ogni controparte una sola volta con un tipo di entità chiaro.",
        },
        {
          title: "Dati di contatto",
          desc: "Mantieni email, telefono e indirizzo insieme alla scheda.",
        },
        {
          title: "Dati fiscali e bancari",
          desc: "Archivia codici fiscali e dati bancari dove rilevante.",
        },
        {
          title: "Collega il libro mastro",
          desc: "Riferisci l'entità nelle voci di cash flow che ha pagato o ricevuto.",
        },
      ],
      steps: [
        {
          title: "Aggiungi l'entità",
          desc: "Scegli il tipo di entità e inserisci nome e dati di contatto.",
        },
        {
          title: "Classifica la relazione",
          desc: "Indicala come cliente, fornitore, dipendente, collaboratore, partner o altro tipo.",
        },
        {
          title: "Collega le voci",
          desc: "Riferisci l'entità nelle voci di cash flow a cui è correlata.",
        },
      ],
      capabilitiesTitle: "Dati delle controparti che restano utili",
      capabilitiesSubtitle:
        "Un'unica scheda per le persone e le organizzazioni dietro il tuo cash flow, invece di una rubrica in uno strumento separato.",
      capabilities: [
        {
          title: "Anagrafiche entità",
          desc: "Clienti, fornitori, dipendenti, collaboratori, partner e altro.",
        },
        {
          title: "Dati di contatto",
          desc: "Email, telefono e indirizzo in un'unica scheda.",
        },
        {
          title: "Campi fiscali e bancari",
          desc: "Codici fiscali e dati bancari opzionali.",
        },
        {
          title: "Collegamenti alle voci",
          desc: "Riferisci la controparte nelle voci di cash flow.",
        },
      ],
      finalTitle: "Tieni le controparti in un unico posto",
      finalSubtitle: "Inizia gratis e aggiungi la tua prima entità.",
    },
  },

  inventory: {
    name: "Inventario",
    preview: {
      label: "Inventario",
      metric: { label: "Articoli", value: "1.284", note: "42 categorie" },
      secondary: { label: "Unità disponibili", value: "8.960" },
      chartLabel: "Articoli per tipo di unità",
      rows: [
        { label: "SKU-1042", value: "240 unità", status: "positive" },
        { label: "SKU-2210", value: "18 unità", status: "warning" },
        { label: "SKU-3180", value: "96 unità", status: "positive" },
      ],
    },
    copy: {
      title: "Dati anagrafici degli articoli per stock e servizi",
      subtitle:
        "Tieni SKU, unità di misura e quantità disponibile in un unico elenco, poi collega gli articoli alle voci di cash flow che li movimentano.",
      bullets: [
        "SKU e nome dell'articolo",
        "Unità di misura",
        "Quantità disponibile",
        "Collegamenti alle voci di cash flow",
      ],
      outcomes: [
        {
          title: "Un unico elenco di articoli",
          desc: "Archivia ogni SKU una sola volta con nome e descrizione.",
        },
        {
          title: "Unità e quantità",
          desc: "Monitora unità di misura e quantità disponibile.",
        },
        {
          title: "Controllo dello stato",
          desc: "Disattiva gli articoli senza eliminare il loro storico.",
        },
        {
          title: "Collega al cash flow",
          desc: "Collega le righe di inventario alle voci che movimentano lo stock.",
        },
      ],
      steps: [
        {
          title: "Crea l'articolo",
          desc: "Aggiungi SKU, nome e descrizione.",
        },
        {
          title: "Imposta unità e quantità",
          desc: "Scegli l'unità di misura e registra la quantità disponibile.",
        },
        {
          title: "Collegalo alle voci",
          desc: "Riferisci l'articolo nelle voci di cash flow che lo movimentano.",
        },
      ],
      capabilitiesTitle: "Dati articolo puliti, collegati alla finanza",
      capabilitiesSubtitle:
        "Un'anagrafica articoli semplice che resta collegata al cash flow che influisce.",
      capabilities: [
        {
          title: "Anagrafiche articolo",
          desc: "SKU, nome, descrizione e stato attivo.",
        },
        {
          title: "Unità di misura",
          desc: "Unità libere come pezzi, chilogrammi o ore.",
        },
        {
          title: "Quantità disponibile",
          desc: "Mantieni la quantità corrente con ogni articolo.",
        },
        {
          title: "Collegamenti alle voci",
          desc: "Riferisci gli articoli nelle voci di cash flow.",
        },
      ],
      finalTitle: "Mantieni puliti i dati degli articoli",
      finalSubtitle: "Inizia gratis e aggiungi il tuo primo SKU.",
    },
  },
};

export default it;
