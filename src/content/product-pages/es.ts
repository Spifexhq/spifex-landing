import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const es: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Flujo de caja",
    preview: {
      label: "Flujo de caja",
      metric: {
        label: "Posición de caja",
        value: "482,9 mil €",
        note: "+8,2 % frente al plan",
      },
      secondary: {
        label: "Planificado",
        value: "164,2 mil €",
      },
      chartLabel: "Planificado frente a liquidado",
      rows: [
        {
          label: "Nóminas",
          value: "28.900 €",
          status: "positive",
        },
        {
          label: "Pago a proveedores",
          value: "12.400 €",
          status: "warning",
        },
        {
          label: "Liquidación de tarjeta",
          value: "6.120 €",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Ten claro qué entra, qué sale y qué queda pendiente",
      subtitle:
        "Planifica apuntes, liquidalos contra cuentas bancarias y mantén cada movimiento vinculado a la categoría, el proyecto o el departamento que lo gestiona.",
      bullets: [
        "Apuntes planificados y liquidados en una sola vista",
        "Liquidaciones parciales y transferencias internas",
        "Categorías, proyectos y departamentos",
        "Filtros, vistas guardadas y adjuntos",
      ],
      outcomes: [
        {
          title: "Ve el plan de caja",
          desc: "Crea apuntes planificados con fechas, categorías y responsables para que el mes empiece con una base clara.",
        },
        {
          title: "Liquida contra cuentas reales",
          desc: "Registra liquidaciones totales o parciales contra cuentas bancarias y mantén actualizado el saldo pendiente.",
        },
        {
          title: "Mantén las transferencias aparte",
          desc: "Mueve dinero entre cuentas sin inflar los totales de ingresos o gastos.",
        },
        {
          title: "Informa con los mismos datos",
          desc: "Filtra las posiciones pendientes y liquidadas por categoría, proyecto o departamento.",
        },
      ],
      steps: [
        {
          title: "Crea el espacio de trabajo",
          desc: "Elige país, moneda y tipo de espacio de trabajo. Empieza con el plan Free.",
        },
        {
          title: "Añade cuentas y categorías",
          desc: "Añade las cuentas bancarias y las categorías que tu equipo ya utiliza.",
        },
        {
          title: "Planifica, liquida y revisa",
          desc: "Planifica apuntes, liquidalos y revisa la posición sin rehacer una hoja de cálculo.",
        },
      ],
      capabilitiesTitle: "Los elementos básicos de un plan de caja",
      capabilitiesSubtitle:
        "Cada apunte conserva su importe, sus fechas, su responsable y su historial de liquidaciones en un mismo lugar.",
      capabilities: [
        {
          title: "Apuntes planificados",
          desc: "Registra importe, fecha de vencimiento, categoría, proyecto y contraparte.",
        },
        {
          title: "Liquidaciones",
          desc: "Liquida en total o por partes contra una cuenta bancaria, con el saldo pendiente siempre actualizado.",
        },
        {
          title: "Transferencias internas",
          desc: "Mueve fondos entre cuentas sin alterar los totales de ingresos o gastos.",
        },
        {
          title: "Imputaciones",
          desc: "Divide los apuntes entre departamentos y vincúlalos a proyectos.",
        },
        {
          title: "Filtros y vistas guardadas",
          desc: "Guarda los filtros y las columnas que más usa tu equipo.",
        },
        {
          title: "Adjuntos",
          desc: "Conserva los documentos de soporte junto al apunte al que pertenecen.",
        },
      ],
      finalTitle: "Empieza con un plan de caja claro",
      finalSubtitle:
        "Crea un espacio de trabajo gratuito y añade las cuentas y categorías que ya utilizas.",
    },
  },
  banking: {
    name: "Banca y pagos",
    preview: {
      label: "Banca",
      metric: {
        label: "Cuentas",
        value: "4",
        note: "2 monedas",
      },
      secondary: {
        label: "Filas de extracto",
        value: "186",
      },
      chartLabel: "Emparejadas frente a pendientes",
      rows: [
        {
          label: "Cuenta operativa",
          value: "Emparejada",
          status: "positive",
        },
        {
          label: "Cuenta de impuestos",
          value: "12 pendientes",
          status: "warning",
        },
        {
          label: "Cuenta de reserva",
          value: "Emparejada",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Cuentas bancarias y extractos en el mismo espacio de trabajo",
      subtitle:
        "Mantén juntos los datos de las cuentas, los extractos importados y las decisiones de emparejamiento para que la conciliación no viva en una hoja de cálculo aparte.",
      bullets: [
        "Cuentas bancarias y saldos",
        "Importación y lectura de extractos",
        "Emparejamiento sugerido",
        "Revisión de la conciliación",
      ],
      outcomes: [
        {
          title: "Una única lista de cuentas",
          desc: "Conserva el banco, el tipo de cuenta, la moneda y el saldo en el espacio de trabajo.",
        },
        {
          title: "Importa extractos",
          desc: "Sube un extracto y revisa las filas leídas antes de confirmarlas.",
        },
        {
          title: "Empareja movimientos",
          desc: "Usa las coincidencias sugeridas entre filas del extracto y apuntes de flujo de caja, y confírmalas.",
        },
        {
          title: "Revisa las excepciones",
          desc: "Consulta las filas sin emparejar y pendientes en lugar de buscarlas entre archivos.",
        },
      ],
      steps: [
        {
          title: "Añade una cuenta bancaria",
          desc: "Define la entidad, el tipo de cuenta, la moneda y los datos de apertura.",
        },
        {
          title: "Importa un extracto",
          desc: "Sube el archivo y revisa las filas leídas antes de importar.",
        },
        {
          title: "Empareja y concilia",
          desc: "Confirma las coincidencias sugeridas y mantén las excepciones visibles.",
        },
      ],
      capabilitiesTitle: "Datos bancarios, sin la hoja de cálculo paralela",
      capabilitiesSubtitle:
        "Las cuentas, las filas de extracto y las decisiones de emparejamiento siguen conectadas al flujo de caja que explican.",
      capabilities: [
        {
          title: "Cuentas bancarias",
          desc: "Entidad, tipo, moneda y datos de la cuenta en cada espacio de trabajo.",
        },
        {
          title: "Importación de extractos",
          desc: "Sube y lee extractos con un paso de revisión antes de confirmar.",
        },
        {
          title: "Emparejamiento sugerido",
          desc: "Clasifica las filas del extracto frente a apuntes y patrones reutilizables.",
        },
        {
          title: "Revisión de la conciliación",
          desc: "Mantén visibles las filas pendientes, emparejadas y sin emparejar.",
        },
        {
          title: "Vínculos de liquidación",
          desc: "Conecta los movimientos liquidados con la cuenta bancaria que los recibió.",
        },
        {
          title: "Roles del espacio de trabajo",
          desc: "Mantén los datos de las cuentas acotados al espacio de trabajo y a sus miembros.",
        },
      ],
      finalTitle: "Lleva la banca al mismo espacio de trabajo",
      finalSubtitle: "Empieza gratis y añade tu primera cuenta bancaria.",
    },
  },
  spend: {
    name: "Gastos y liquidaciones",
    preview: {
      label: "Gastos",
      metric: {
        label: "Salida pendiente",
        value: "38,4 mil €",
        note: "14 apuntes",
      },
      secondary: {
        label: "Liquidado este mes",
        value: "96,2 mil €",
      },
      chartLabel: "Liquidado frente a pendiente",
      rows: [
        {
          label: "Viajes",
          value: "2.840 €",
          status: "positive",
        },
        {
          label: "Software",
          value: "1.290 €",
          status: "warning",
        },
        {
          label: "Oficina",
          value: "640 €",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Sigue el gasto de salida y liquídalo contra el plan",
      subtitle:
        "Registra apuntes de salida, imputálos a categorías, proyectos o departamentos y liquídalos en total o por partes.",
      bullets: [
        "Apuntes de salida con fecha de vencimiento",
        "Liquidaciones parciales",
        "Imputación a proyectos y departamentos",
        "Vistas de saldo pendiente",
      ],
      outcomes: [
        {
          title: "Ve el gasto comprometido",
          desc: "Registra apuntes de salida con fechas de vencimiento, categorías y responsables.",
        },
        {
          title: "Liquida por partes",
          desc: "Aplica una o varias liquidaciones a un apunte y sigue el importe restante.",
        },
        {
          title: "Imputa el coste",
          desc: "Divide el gasto entre departamentos y vincúlalo a proyectos.",
        },
        {
          title: "Revisa lo que está pendiente",
          desc: "Filtra el gasto pendiente y liquidado sin exportar datos.",
        },
      ],
      steps: [
        {
          title: "Registra la salida",
          desc: "Captura importe, fecha de vencimiento, categoría, proyecto y contraparte.",
        },
        {
          title: "Liquida contra la cuenta",
          desc: "Aplica una o varias liquidaciones y mantén actualizado el saldo pendiente.",
        },
        {
          title: "Revisa el saldo",
          desc: "Filtra el gasto liquidado y pendiente por categoría, proyecto o departamento.",
        },
      ],
      capabilitiesTitle: "Un gasto que sigue conectado a su liquidación",
      capabilitiesSubtitle:
        "Los apuntes de salida conservan su imputación y su historial de liquidaciones en lugar de acabar en una hoja aparte.",
      capabilities: [
        {
          title: "Apuntes de salida",
          desc: "Importe, fecha de vencimiento, categoría, proyecto y contraparte.",
        },
        {
          title: "Liquidaciones parciales",
          desc: "Liquida un apunte en varios pagos.",
        },
        {
          title: "Imputaciones",
          desc: "Asigna porcentajes a departamentos y vincula proyectos.",
        },
        {
          title: "Vistas de pendientes",
          desc: "Consulta el gasto pendiente y liquidado con filtros guardados.",
        },
      ],
      finalTitle: "Mantén unidos gasto y liquidación",
      finalSubtitle: "Empieza gratis y registra tu primer apunte de salida.",
    },
  },
  ledger: {
    name: "Libro mayor",
    preview: {
      label: "Libro mayor",
      metric: {
        label: "Cuentas de apunte",
        value: "128",
        note: "6 cabeceras",
      },
      secondary: {
        label: "Asientos contables",
        value: "1.842",
      },
      chartLabel: "Actividad de apuntes",
      rows: [
        {
          label: "Ingresos · 4010",
          value: "Cuadrada",
          status: "positive",
        },
        {
          label: "Nóminas · 6200",
          value: "Registrada",
          status: "positive",
        },
        {
          label: "Transitoria · 9999",
          value: "Revisar",
          status: "warning",
        },
      ],
    },
    copy: {
      title: "Un plan contable pensado para informes coherentes",
      subtitle:
        "Estructura cuentas de cabecera y de apunte, registra asientos y mantén bajo control los periodos y las dimensiones.",
      bullets: [
        "Cuentas de cabecera y de apunte",
        "Asientos y libros contables",
        "Periodos fiscales",
        "Dimensiones y políticas de registro",
      ],
      outcomes: [
        {
          title: "Estructura el plan contable",
          desc: "Crea cuentas de cabecera y de apunte con códigos y naturaleza de saldo.",
        },
        {
          title: "Registra asientos",
          desc: "Registra asientos con líneas, libros y periodos fiscales.",
        },
        {
          title: "Mantén las dimensiones",
          desc: "Define dimensiones y valores permitidos para la estructura de informes.",
        },
        {
          title: "Controla el registro",
          desc: "Usa políticas de registro y controles de apunte manual cuando los necesites.",
        },
      ],
      steps: [
        {
          title: "Diseña el plan contable",
          desc: "Crea las cuentas de cabecera y de apunte que necesitan tus informes.",
        },
        {
          title: "Registra asientos",
          desc: "Registra asientos con el libro, el periodo y las dimensiones correctas.",
        },
        {
          title: "Revisa los periodos",
          desc: "Mantén bajo control los periodos fiscales y el estado del registro.",
        },
      ],
      capabilitiesTitle: "Una estructura contable que se sostiene",
      capabilitiesSubtitle:
        "El plan contable, los asientos, los periodos y las dimensiones comparten un único espacio de trabajo en lugar de dispersarse.",
      capabilities: [
        {
          title: "Plan contable",
          desc: "Cuentas de cabecera y de apunte con códigos, tipos y naturaleza de saldo.",
        },
        {
          title: "Asientos contables",
          desc: "Asientos con varias líneas, libros, periodos y estado.",
        },
        {
          title: "Periodos fiscales",
          desc: "Abre y cierra periodos para cada libro contable.",
        },
        {
          title: "Dimensiones",
          desc: "Define dimensiones, valores y reglas a nivel de cuenta.",
        },
        {
          title: "Políticas de registro",
          desc: "Controla cómo se registran los asientos y qué cuentas permiten apunte manual.",
        },
        {
          title: "Controles de cuenta",
          desc: "Cuentas de control bancario y protecciones de clasificación.",
        },
      ],
      finalTitle: "Construye un libro mayor que puedas defender",
      finalSubtitle: "Empieza gratis y da forma al plan contable según tus informes.",
    },
  },
  projects: {
    name: "Proyectos",
    preview: {
      label: "Proyectos",
      metric: {
        label: "Proyectos activos",
        value: "24",
        note: "6 tipos",
      },
      secondary: {
        label: "Apuntes vinculados",
        value: "312",
      },
      chartLabel: "Planificado frente a liquidado por proyecto",
      rows: [
        {
          label: "Implantación",
          value: "420 mil €",
          status: "positive",
        },
        {
          label: "Migración",
          value: "186 mil €",
          status: "warning",
        },
        {
          label: "Soporte",
          value: "96 mil €",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Consulta costes e ingresos por proyecto",
      subtitle:
        "Crea proyectos, vincula apuntes de flujo de caja y compara importes planificados, liquidados y pendientes con un solo filtro.",
      bullets: [
        "Proyectos con código y tipo",
        "Vínculos de proyecto en cada apunte",
        "Imputaciones a departamentos",
        "Vistas específicas por proyecto",
      ],
      outcomes: [
        {
          title: "Crea un proyecto",
          desc: "Nombre, código, tipo y descripción con estado activo.",
        },
        {
          title: "Vincula apuntes",
          desc: "Conecta los apuntes planificados y liquidados al proyecto.",
        },
        {
          title: "Imputa departamentos",
          desc: "Divide el coste de un apunte entre departamentos.",
        },
        {
          title: "Revisa el proyecto",
          desc: "Filtra apuntes e importes pendientes por proyecto.",
        },
      ],
      steps: [
        {
          title: "Crea el proyecto",
          desc: "Añade nombre, código y tipo para identificar el proyecto con facilidad.",
        },
        {
          title: "Vincula apuntes",
          desc: "Conecta los apuntes de flujo de caja que pertenecen al proyecto.",
        },
        {
          title: "Revisa la posición",
          desc: "Filtra importes planificados, liquidados y pendientes por proyecto.",
        },
      ],
      capabilitiesTitle: "Contexto de proyecto en cada movimiento",
      capabilitiesSubtitle:
        "Los apuntes, los repartos por departamento y el estado de liquidación siguen vinculados al proyecto al que pertenecen.",
      capabilities: [
        {
          title: "Proyectos",
          desc: "Nombre, código, tipo, descripción y estado.",
        },
        {
          title: "Vínculos de apuntes",
          desc: "Asocia apuntes de flujo de caja directamente a un proyecto.",
        },
        {
          title: "Reparto por departamento",
          desc: "Imputa porcentajes de cada apunte entre departamentos.",
        },
        {
          title: "Filtros de proyecto",
          desc: "Revisa apuntes, liquidaciones e importes pendientes por proyecto.",
        },
      ],
      finalTitle: "Haz visible el rendimiento de cada proyecto",
      finalSubtitle: "Empieza gratis y crea tu primer proyecto.",
    },
  },
  departments: {
    name: "Departamentos",
    preview: {
      label: "Departamentos",
      metric: {
        label: "Departamentos",
        value: "8",
        note: "3 centros de coste",
      },
      secondary: {
        label: "Apuntes imputados",
        value: "246",
      },
      chartLabel: "Apuntes por departamento",
      rows: [
        {
          label: "Operaciones",
          value: "42 %",
          status: "positive",
        },
        {
          label: "Ventas",
          value: "31 %",
          status: "warning",
        },
        {
          label: "Ingeniería",
          value: "27 %",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Imputa cada movimiento al equipo que lo gestiona",
      subtitle:
        "Crea departamentos, imputa porcentajes de cada apunte y revisa las cifras por equipo sin rehacer el informe.",
      bullets: [
        "Departamentos con código",
        "Imputaciones por porcentaje",
        "Filtros de apuntes por departamento",
        "Vistas guardadas",
      ],
      outcomes: [
        {
          title: "Crea el departamento",
          desc: "Nombre, código y estado activo para cada centro de coste.",
        },
        {
          title: "Imputa apuntes",
          desc: "Asigna uno o varios departamentos a un apunte con porcentajes.",
        },
        {
          title: "Filtra por equipo",
          desc: "Revisa apuntes y liquidaciones de un departamento cada vez.",
        },
        {
          title: "Mantén visible la responsabilidad",
          desc: "Ve qué equipo asume el gasto en el mismo espacio de trabajo.",
        },
      ],
      steps: [
        {
          title: "Define los departamentos",
          desc: "Añade los nombres y códigos que tus equipos ya utilizan.",
        },
        {
          title: "Imputa apuntes",
          desc: "Reparte un apunte entre departamentos con porcentajes.",
        },
        {
          title: "Revisa las cifras",
          desc: "Filtra apuntes de flujo de caja por departamento y revisa la posición.",
        },
      ],
      capabilitiesTitle: "Una vista de centros de coste fiable",
      capabilitiesSubtitle:
        "Los repartos por departamento siguen vinculados al apunte en lugar de reconstruirse al preparar los informes.",
      capabilities: [
        {
          title: "Departamentos",
          desc: "Nombre, código y estado de cada centro de coste.",
        },
        {
          title: "Imputación por porcentaje",
          desc: "Reparte un apunte entre departamentos con porcentajes definidos.",
        },
        {
          title: "Filtros de apuntes",
          desc: "Filtra los apuntes de flujo de caja por departamento.",
        },
        {
          title: "Vistas guardadas",
          desc: "Conserva las columnas y los filtros que usa tu equipo.",
        },
      ],
      finalTitle: "Da un responsable a cada movimiento",
      finalSubtitle: "Empieza gratis y define tu primer departamento.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Entidades",
      metric: {
        label: "Entidades",
        value: "186",
        note: "7 tipos",
      },
      secondary: {
        label: "Activas",
        value: "164",
      },
      chartLabel: "Entidades por tipo",
      rows: [
        {
          label: "Clientes",
          value: "82",
          status: "positive",
        },
        {
          label: "Proveedores",
          value: "46",
          status: "positive",
        },
        {
          label: "Contratistas",
          value: "18",
          status: "neutral",
        },
      ],
    },
    copy: {
      title: "Un único directorio para cada contraparte",
      subtitle:
        "Reúne clientes, proveedores, empleados, contratistas y socios en un solo espacio de trabajo y vincúlalos a los apuntes de flujo de caja con los que se relacionan.",
      bullets: [
        "Clientes, proveedores y socios",
        "Datos de contacto y fiscales",
        "Tipos de entidad y estado",
        "Vínculos con apuntes de flujo de caja",
      ],
      outcomes: [
        {
          title: "Un único directorio",
          desc: "Guarda cada contraparte una sola vez con un tipo de entidad claro.",
        },
        {
          title: "Datos de contacto",
          desc: "Conserva el email, el teléfono y la dirección junto al registro.",
        },
        {
          title: "Datos fiscales y bancarios",
          desc: "Guarda NIF y datos bancarios cuando corresponda.",
        },
        {
          title: "Conecta el libro mayor",
          desc: "Referencia la entidad en los apuntes de flujo de caja que pagó o recibió.",
        },
      ],
      steps: [
        {
          title: "Añade la entidad",
          desc: "Elige el tipo de entidad y añade el nombre y los datos de contacto.",
        },
        {
          title: "Clasifica la relación",
          desc: "Márcala como cliente, proveedor, empleado, contratista, socio u otro tipo.",
        },
        {
          title: "Vincula apuntes",
          desc: "Referencia la entidad en los apuntes de flujo de caja con los que se relaciona.",
        },
      ],
      capabilitiesTitle: "Datos de contraparte que siguen siendo útiles",
      capabilitiesSubtitle:
        "Un único registro para las personas y organizaciones detrás de tu flujo de caja, en lugar de una lista de contactos en otra herramienta.",
      capabilities: [
        {
          title: "Entidades",
          desc: "Clientes, proveedores, empleados, contratistas, socios y más.",
        },
        {
          title: "Datos de contacto",
          desc: "Email, teléfono y dirección en un mismo registro.",
        },
        {
          title: "Campos fiscales y bancarios",
          desc: "NIF y datos bancarios opcionales.",
        },
        {
          title: "Vínculos de apuntes",
          desc: "Referencia la contraparte en los apuntes de flujo de caja.",
        },
      ],
      finalTitle: "Ten las contrapartes en un solo lugar",
      finalSubtitle: "Empieza gratis y añade tu primera entidad.",
    },
  },
  inventory: {
    name: "Inventario",
    preview: {
      label: "Inventario",
      metric: {
        label: "Artículos",
        value: "1.284",
        note: "42 categorías",
      },
      secondary: {
        label: "Unidades disponibles",
        value: "8.960",
      },
      chartLabel: "Artículos por tipo de unidad",
      rows: [
        {
          label: "SKU-1042",
          value: "240 unidades",
          status: "positive",
        },
        {
          label: "SKU-2210",
          value: "18 unidades",
          status: "warning",
        },
        {
          label: "SKU-3180",
          value: "96 unidades",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Datos maestros de artículos para stock y servicios",
      subtitle:
        "Mantén SKU, unidades de medida y cantidad disponible en una sola lista y vincula los artículos a los apuntes de flujo de caja que los mueven.",
      bullets: [
        "SKU y nombre del artículo",
        "Unidad de medida",
        "Cantidad disponible",
        "Vínculos con apuntes de flujo de caja",
      ],
      outcomes: [
        {
          title: "Una única lista de artículos",
          desc: "Guarda cada SKU una sola vez con nombre y descripción.",
        },
        {
          title: "Unidades y cantidades",
          desc: "Sigue la unidad de medida y la cantidad disponible.",
        },
        {
          title: "Control de estado",
          desc: "Desactiva artículos sin borrar su historial.",
        },
        {
          title: "Conecta con el flujo de caja",
          desc: "Vincula las líneas de inventario a los apuntes que mueven stock.",
        },
      ],
      steps: [
        {
          title: "Crea el artículo",
          desc: "Añade el SKU, el nombre y la descripción.",
        },
        {
          title: "Define unidad y cantidad",
          desc: "Elige la unidad de medida y registra la cantidad disponible.",
        },
        {
          title: "Vincula el artículo a los apuntes",
          desc: "Referencia el artículo en los apuntes de flujo de caja que lo mueven.",
        },
      ],
      capabilitiesTitle: "Datos de artículo limpios y conectados a finanzas",
      capabilitiesSubtitle:
        "Un maestro de artículos sencillo que sigue vinculado al flujo de caja al que afecta.",
      capabilities: [
        {
          title: "Artículos",
          desc: "SKU, nombre, descripción y estado activo.",
        },
        {
          title: "Unidades de medida",
          desc: "Unidades de texto libre como piezas, kilogramos u horas.",
        },
        {
          title: "Cantidad disponible",
          desc: "Mantén la cantidad actual de cada artículo.",
        },
        {
          title: "Vínculos de apuntes",
          desc: "Referencia artículos en los apuntes de flujo de caja.",
        },
      ],
      finalTitle: "Mantén limpios los datos de artículos",
      finalSubtitle: "Empieza gratis y añade tu primer SKU.",
    },
  },
};

export default es;
