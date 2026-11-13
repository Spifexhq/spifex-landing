import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const es: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software de finanzas personales para planificar y controlar",
    metaDescription:
      "Spifex Personal conecta transacciones, cuentas bancarias, presupuestos, objetivos e informes en un único espacio de trabajo de finanzas personales. Empieza gratis.",
    eyebrow: "Spifex Personal",
    title: "Tus finanzas personales con la claridad de un sistema operativo",
    description:
      "Planifica lo que está por llegar, registra lo que ya ha pasado y entiende tu posición completa entre cuentas, categorías, presupuestos y objetivos, sin tener que encadenar hojas de cálculo.",
    primaryLabel: "Empieza gratis con Personal",
    proof: "Plan gratuito disponible. Sin tarjeta de crédito.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Ve todas tus cuentas en un solo lugar",
        description:
          "Añade tus cuentas bancarias personales, sigue los saldos y mantén las transferencias separadas de los totales de ingresos y gastos.",
      },
      {
        title: "Planifica con presupuestos y objetivos",
        description:
          "Crea presupuestos y objetivos, revisa el avance y ajusta el plan a medida que cambia la vida real.",
      },
      {
        title: "Entiende el historial de transacciones",
        description:
          "Filtra las transacciones por fecha, categoría, cuenta, dirección y estado de liquidación.",
      },
      {
        title: "Concilia pagos parciales",
        description:
          "Registra liquidaciones totales o parciales contra tus cuentas y mantén el importe pendiente siempre exacto.",
      },
      {
        title: "Informa sin reconstruir datos",
        description:
          "Revisa posiciones pendientes y liquidadas, categorías e indicadores financieros desde el mismo espacio de trabajo.",
      },
      {
        title: "Pregunta a un asistente de IA",
        description:
          "Conecta ChatGPT o Claude con acceso de solo lectura para resumir transacciones y categorías.",
      },
    ],
    workflow: [
      {
        title: "Crea tu espacio de trabajo personal",
        description: "Elige tu país y tu moneda y empieza con el plan Personal Free.",
      },
      {
        title: "Añade cuentas y categorías",
        description:
          "Incorpora las cuentas y categorías que ya utilizas y ajústalas con el tiempo.",
      },
      {
        title: "Planifica, liquida y revisa",
        description:
          "Usa presupuestos, objetivos, liquidaciones e informes para mantener la imagen completa al día.",
      },
    ],
    faq: [
      {
        question: "¿Qué incluye Personal Free?",
        answer:
          "Personal Free incluye un espacio de trabajo personal, 250 transacciones al mes, dos cuentas bancarias, 25 categorías, tres presupuestos, tres objetivos y dos vistas guardadas.",
      },
      {
        question: "¿Cuándo debería pasar a Personal Starter o Pro?",
        answer:
          "Da el salto cuando necesites más transacciones mensuales, más cuentas bancarias, bibliotecas de categorías y presupuestos más amplias, o más vistas guardadas y adjuntos.",
      },
      {
        question: "¿Puedo usar espacios de trabajo Personal y de Empresas?",
        answer:
          "Sí. Una sola cuenta de Spifex puede tener varios espacios de trabajo en ambas categorías de producto y cambiar entre ellos.",
      },
      {
        question: "¿El asistente de IA modifica mis datos?",
        answer:
          "No. Las conexiones de IA son de solo lectura y solo solicitan el ámbito spifex:access.",
      },
    ],
    otherLabel: "Explora Spifex Empresas",
    labels: {
      comparePlans: "Comparar planes",
      outcomesEyebrow: "Qué puedes hacer",
      outcomesTitle: "Un modelo operativo claro para gestionar tu dinero",
      outcomesDescription:
        "Cada resultado que ves a continuación se apoya en un flujo de trabajo ya implementado en Spifex, no en una función futura del roadmap.",
      howEyebrow: "Cómo funciona",
      howTitle: "Empieza poco a poco. Añade estructura a medida que avances.",
      questionsEyebrow: "Preguntas",
      questionsTitle: "Antes de elegir un plan",
      finalTitle:
        "Empieza gratis. Mejora el plan solo cuando tu operación necesite más espacio.",
    },
  },

  business: {
    metaTitle: "Software de operaciones financieras para empresas",
    metaDescription:
      "Spifex Empresas conecta el flujo de caja, la banca, las liquidaciones, la estructura del libro mayor, los proyectos, los departamentos y los informes con controles por roles. Empieza gratis.",
    eyebrow: "Spifex Empresas",
    title: "Una sola capa operativa para las operaciones financieras de tu empresa",
    description:
      "Planifica el flujo de caja, conecta la banca, concilia liquidaciones, estructura tu libro mayor e informa por proyecto o departamento, con los roles y controles que necesita un equipo de finanzas.",
    primaryLabel: "Empieza gratis con Empresas",
    proof: "Plan gratuito disponible. Sin tarjeta de crédito.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planifica y ejecuta el flujo de caja",
        description:
          "Crea apuntes planificados, liquídalos contra cuentas bancarias y mantén los saldos pendientes al día.",
      },
      {
        title: "Conecta la banca y los extractos",
        description:
          "Añade cuentas bancarias, importa extractos y concilia movimientos con evidencias reales.",
      },
      {
        title: "Atribuye costes y responsabilidad",
        description:
          "Usa proyectos, departamentos y entidades para explicar dónde se planifica y dónde se gasta el dinero.",
      },
      {
        title: "Estructura el libro mayor",
        description:
          "Mantén las cuentas del libro mayor y la estructura de asientos para que los informes sigan siendo coherentes.",
      },
      {
        title: "Controla el acceso por roles",
        description:
          "Usa los roles de propietario, administrador y miembro con permisos acotados al espacio de trabajo y controles del ciclo de vida.",
      },
      {
        title: "Informa con visibilidad de KPI",
        description:
          "Revisa indicadores de flujo de caja, liquidación y operación a partir de los mismos datos filtrados.",
      },
    ],
    workflow: [
      {
        title: "Crea tu espacio de trabajo de empresa",
        description:
          "Define el país y la moneda del espacio de trabajo y empieza con el plan Business Free.",
      },
      {
        title: "Añade tu estructura operativa",
        description:
          "Añade cuentas, categorías, proyectos, departamentos, miembros y cuentas del libro mayor.",
      },
      {
        title: "Opera con controles",
        description: "Planifica, liquida, concilia e informa con controles de acceso por roles.",
      },
    ],
    faq: [
      {
        question: "¿Qué incluye Business Free?",
        answer:
          "Business Free incluye un espacio de trabajo, 1.000 apuntes de flujo de caja al mes, dos cuentas bancarias, un miembro, dos proyectos, diez cuentas del libro mayor y dos importaciones de extractos al mes.",
      },
      {
        question: "¿Qué cambia en Starter y Pro?",
        answer:
          "Starter amplía los límites de apuntes, cuentas bancarias, miembros, proyectos, libro mayor y extractos. Pro elimina los límites de los flujos de trabajo principales y permite hasta seis espacios de trabajo propios.",
      },
      {
        question: "¿Spifex sustituye a mi software de contabilidad?",
        answer:
          "Spifex es la capa operativa para el flujo de caja, la visibilidad bancaria, las liquidaciones, la gobernanza y los informes. Complementa la contabilidad oficial en lugar de sustituirla.",
      },
      {
        question: "¿Puedo conectar ChatGPT o Claude?",
        answer:
          "Sí. Los espacios de trabajo de empresa admiten conexiones de IA de solo lectura con OAuth y el ámbito spifex:access.",
      },
    ],
    otherLabel: "Explora Spifex Personal",
    labels: {
      comparePlans: "Comparar planes",
      outcomesEyebrow: "Qué puedes hacer",
      outcomesTitle: "Un modelo operativo claro para gestionar tu dinero",
      outcomesDescription:
        "Cada resultado que ves a continuación se apoya en un flujo de trabajo ya implementado en Spifex, no en una función futura del roadmap.",
      howEyebrow: "Cómo funciona",
      howTitle: "Empieza poco a poco. Añade estructura a medida que avances.",
      questionsEyebrow: "Preguntas",
      questionsTitle: "Antes de elegir un plan",
      finalTitle:
        "Empieza gratis. Mejora el plan solo cuando tu operación necesite más espacio.",
    },
  },
};

export default es;
