import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const it: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software di finanze personali per pianificare e tenere tutto sotto controllo",
    metaDescription:
      "Spifex Personale collega transazioni, conti bancari, budget, obiettivi e report in un unico workspace di finanze personali. Inizia gratis.",
    eyebrow: "Spifex Personale",
    title: "Le tue finanze personali, con la chiarezza di un sistema operativo",
    description:
      "Pianifica ciò che arriverà, tieni traccia di ciò che è accaduto e capisci la tua posizione completa tra conti, categorie, budget e obiettivi — senza mettere insieme fogli di calcolo.",
    primaryLabel: "Inizia gratis con Personale",
    proof: "Piano Free disponibile. Nessuna carta di credito richiesta.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Vedi ogni conto in un unico posto",
        description:
          "Aggiungi i conti bancari personali, monitora i saldi e tieni i bonifici separati dai totali di entrate e uscite.",
      },
      {
        title: "Pianifica con budget e obiettivi",
        description:
          "Crea budget e obiettivi, controlla l'avanzamento e adatta il piano quando la vita reale cambia.",
      },
      {
        title: "Comprendi lo storico delle transazioni",
        description:
          "Filtra le transazioni per data, categoria, conto, direzione e stato del regolamento.",
      },
      {
        title: "Riconcilia i pagamenti parziali",
        description:
          "Registra regolamenti totali o parziali sui conti e mantieni preciso l'importo in sospeso.",
      },
      {
        title: "Produci report senza ricostruire i dati",
        description:
          "Analizza posizioni in sospeso e regolate, categorie e indicatori finanziari dallo stesso workspace.",
      },
      {
        title: "Chiedi a un assistente AI",
        description:
          "Collega ChatGPT o Claude con accesso in sola lettura per riassumere transazioni e categorie.",
      },
    ],
    workflow: [
      {
        title: "Crea il tuo workspace personale",
        description: "Scegli paese e valuta e inizia con il piano Personal Free.",
      },
      {
        title: "Aggiungi conti e categorie",
        description:
          "Inserisci i conti e le categorie che usi già, poi adattali nel tempo.",
      },
      {
        title: "Pianifica, regola e analizza",
        description:
          "Usa budget, obiettivi, regolamenti e report per mantenere aggiornato il quadro completo.",
      },
    ],
    faq: [
      {
        question: "Cosa include Personal Free?",
        answer:
          "Personal Free include un workspace personale, 250 transazioni al mese, due conti bancari, 25 categorie, tre budget, tre obiettivi e due viste salvate.",
      },
      {
        question: "Quando conviene passare a Personal Starter o Pro?",
        answer:
          "Passa a un piano superiore quando ti servono più transazioni mensili, più conti bancari, librerie di categorie e budget più ampie, oppure più viste salvate e allegati.",
      },
      {
        question: "Posso usare sia workspace Personale sia workspace Aziende?",
        answer:
          "Sì. Un unico account Spifex può possedere più workspace in entrambe le categorie di prodotto e passare dall'uno all'altro.",
      },
      {
        question: "L'assistente AI modifica i miei dati?",
        answer:
          "No. Le connessioni AI sono in sola lettura e richiedono solo l'ambito cashflow:read.",
      },
    ],
    otherLabel: "Scopri Spifex Aziende",
    labels: {
      comparePlans: "Confronta i piani",
      outcomesEyebrow: "Cosa puoi fare",
      outcomesTitle: "Un modello operativo chiaro per gestire il denaro",
      outcomesDescription:
        "Ogni risultato qui sotto è supportato da un flusso di lavoro Spifex già implementato, non da una voce della roadmap futura.",
      howEyebrow: "Come funziona",
      howTitle: "Parti in piccolo. Aggiungi struttura man mano.",
      questionsEyebrow: "Domande",
      questionsTitle: "Prima di scegliere un piano",
      finalTitle:
        "Inizia gratis. Passa a un piano superiore solo quando l'operazione ha bisogno di più spazio.",
    },
  },

  business: {
    metaTitle: "Software per le operazioni finanziarie aziendali",
    metaDescription:
      "Spifex Aziende collega cash flow, banking, regolamenti, struttura del libro mastro, progetti, reparti e report con controlli basati sui ruoli. Inizia gratis.",
    eyebrow: "Spifex Aziende",
    title: "Un unico livello operativo per le operazioni finanziarie aziendali",
    description:
      "Pianifica il cash flow, collega il banking, riconcilia i regolamenti, struttura il libro mastro e produci report per progetto o reparto — con i ruoli e i controlli che un team finance richiede.",
    primaryLabel: "Inizia gratis con Aziende",
    proof: "Piano Free disponibile. Nessuna carta di credito richiesta.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Pianifica ed esegui il cash flow",
        description:
          "Crea voci pianificate, regolale sui conti bancari e mantieni aggiornati i saldi in sospeso.",
      },
      {
        title: "Collega banking ed estratti conto",
        description:
          "Aggiungi conti bancari, importa gli estratti conto e riconcilia i movimenti con evidenze reali.",
      },
      {
        title: "Attribuisci costi e responsabilità",
        description:
          "Usa progetti, reparti ed entità per spiegare dove il denaro viene pianificato e speso.",
      },
      {
        title: "Struttura il libro mastro",
        description:
          "Mantieni i conti di mastro e la struttura delle registrazioni, così i report restano coerenti.",
      },
      {
        title: "Controlla l'accesso per ruolo",
        description:
          "Usa i ruoli proprietario, amministratore e membro con autorizzazioni circoscritte al workspace e controlli sul ciclo di vita.",
      },
      {
        title: "Produci report con visibilità sui KPI",
        description:
          "Analizza indicatori di cash flow, regolamenti e operatività dagli stessi dati filtrati.",
      },
    ],
    workflow: [
      {
        title: "Crea il tuo workspace aziendale",
        description:
          "Imposta paese e valuta del workspace e inizia con il piano Business Free.",
      },
      {
        title: "Aggiungi la tua struttura operativa",
        description:
          "Aggiungi conti, categorie, progetti, reparti, membri e conti di mastro.",
      },
      {
        title: "Opera con i controlli",
        description:
          "Pianifica, regola, riconcilia e produci report con controlli di accesso basati sui ruoli.",
      },
    ],
    faq: [
      {
        question: "Cosa include Business Free?",
        answer:
          "Business Free include un workspace, 1.000 voci di cash flow al mese, due conti bancari, un membro, due progetti, dieci conti di mastro e due importazioni di estratti conto al mese.",
      },
      {
        question: "Cosa cambia con Starter e Pro?",
        answer:
          "Starter aumenta i limiti di voci, conti bancari, membri, progetti, mastro ed estratti conto. Pro rimuove i limiti dei flussi principali e consente fino a sei workspace posseduti.",
      },
      {
        question: "Spifex sostituisce il mio software contabile?",
        answer:
          "Spifex è il livello operativo per cash flow, visibilità bancaria, regolamenti, governance e report. Integra la contabilità di legge, non la sostituisce.",
      },
      {
        question: "Posso collegare ChatGPT o Claude?",
        answer:
          "Sì. I workspace Aziende supportano connessioni AI in sola lettura con OAuth e l'ambito cashflow:read.",
      },
    ],
    otherLabel: "Scopri Spifex Personale",
    labels: {
      comparePlans: "Confronta i piani",
      outcomesEyebrow: "Cosa puoi fare",
      outcomesTitle: "Un modello operativo chiaro per gestire il denaro",
      outcomesDescription:
        "Ogni risultato qui sotto è supportato da un flusso di lavoro Spifex già implementato, non da una voce della roadmap futura.",
      howEyebrow: "Come funziona",
      howTitle: "Parti in piccolo. Aggiungi struttura man mano.",
      questionsEyebrow: "Domande",
      questionsTitle: "Prima di scegliere un piano",
      finalTitle:
        "Inizia gratis. Passa a un piano superiore solo quando l'operazione ha bisogno di più spazio.",
    },
  },
};

export default it;
