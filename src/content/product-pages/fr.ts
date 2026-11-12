import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const fr: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Trésorerie",
    preview: {
      label: "Trésorerie",
      metric: { label: "Position de trésorerie", value: "482,9 k€", note: "+8,2 % vs prévu" },
      secondary: { label: "Prévu", value: "164,2 k€" },
      chartLabel: "Prévu vs réglé",
      rows: [
        { label: "Paie", value: "28 900 €", status: "positive" },
        { label: "Paiement fournisseur", value: "12 400 €", status: "warning" },
        { label: "Règlement carte", value: "6 120 €", status: "positive" },
      ],
    },
    copy: {
      title: "Sachez ce qui entre, ce qui sort et ce qui reste à régler",
      subtitle:
        "Planifiez vos écritures, réglez-les sur vos comptes bancaires et gardez chaque mouvement lié à la catégorie, au projet ou au département qui en est responsable.",
      bullets: [
        "Écritures prévues et réglées dans une seule vue",
        "Règlements partiels et transferts internes",
        "Catégories, projets et départements",
        "Filtres, vues enregistrées et pièces jointes",
      ],
      outcomes: [
        {
          title: "Visualisez le plan de trésorerie",
          desc: "Créez des écritures prévues avec dates, catégories et responsables pour que le mois démarre sur une base claire.",
        },
        {
          title: "Réglez sur des comptes réels",
          desc: "Enregistrez des règlements complets ou partiels sur vos comptes bancaires et gardez le solde ouvert à jour.",
        },
        {
          title: "Gardez les transferts à part",
          desc: "Déplacez des fonds entre comptes sans gonfler les totaux de produits ou de charges.",
        },
        {
          title: "Produisez vos rapports avec les mêmes données",
          desc: "Filtrez les positions en attente et réglées par catégorie, projet ou département.",
        },
      ],
      steps: [
        {
          title: "Créez l'espace de travail",
          desc: "Choisissez le pays, la devise et le type d'espace de travail. Démarrez avec l'offre gratuite.",
        },
        {
          title: "Ajoutez comptes et catégories",
          desc: "Ajoutez les comptes bancaires et les catégories que votre équipe utilise déjà.",
        },
        {
          title: "Planifiez, réglez, analysez",
          desc: "Planifiez les écritures, réglez-les et analysez la position sans reconstruire un tableur.",
        },
      ],
      capabilitiesTitle: "Les briques d'un plan de trésorerie",
      capabilitiesSubtitle:
        "Chaque écriture conserve son montant, ses dates, son responsable et son historique de règlement au même endroit.",
      capabilities: [
        {
          title: "Écritures prévues",
          desc: "Saisissez le montant, l'échéance, la catégorie, le projet et la contrepartie.",
        },
        {
          title: "Règlements",
          desc: "Réglez en totalité ou en plusieurs fois sur un compte bancaire, avec un solde ouvert actualisé.",
        },
        {
          title: "Transferts internes",
          desc: "Déplacez des fonds entre comptes sans modifier les totaux de produits ou de charges.",
        },
        {
          title: "Affectations",
          desc: "Répartissez les écritures entre départements et rattachez-les à des projets.",
        },
        {
          title: "Filtres et vues enregistrées",
          desc: "Enregistrez les filtres et les colonnes que votre équipe utilise le plus.",
        },
        {
          title: "Pièces jointes",
          desc: "Conservez les justificatifs avec l'écriture à laquelle ils se rapportent.",
        },
      ],
      finalTitle: "Démarrez avec un plan de trésorerie clair",
      finalSubtitle:
        "Créez un espace de travail gratuit et ajoutez les comptes et catégories que vous utilisez déjà.",
    },
  },
  banking: {
    name: "Banque et paiements",
    preview: {
      label: "Banque",
      metric: { label: "Comptes", value: "4", note: "2 devises" },
      secondary: { label: "Lignes de relevé", value: "186" },
      chartLabel: "Rapproché vs en attente",
      rows: [
        { label: "Compte d'exploitation", value: "Rapproché", status: "positive" },
        { label: "Compte fiscal", value: "12 en attente", status: "warning" },
        { label: "Compte de réserve", value: "Rapproché", status: "positive" },
      ],
    },
    copy: {
      title: "Comptes bancaires et relevés dans le même espace de travail",
      subtitle:
        "Regroupez les détails de comptes, les relevés importés et les décisions de rapprochement pour que le rapprochement ne vive pas dans un tableur séparé.",
      bullets: [
        "Comptes bancaires et soldes",
        "Imports et analyse des relevés",
        "Rapprochements suggérés",
        "Revue du rapprochement",
      ],
      outcomes: [
        {
          title: "Une seule liste de comptes",
          desc: "Conservez le nom de la banque, le type de compte, la devise et le solde dans l'espace de travail.",
        },
        {
          title: "Importez vos relevés",
          desc: "Importez un relevé et vérifiez les lignes analysées avant de les valider.",
        },
        {
          title: "Rapprochez les mouvements",
          desc: "Utilisez les rapprochements suggérés entre lignes de relevé et écritures de trésorerie, puis confirmez.",
        },
        {
          title: "Traitez les exceptions",
          desc: "Consultez les lignes non rapprochées et en attente au lieu de fouiller dans des fichiers.",
        },
      ],
      steps: [
        {
          title: "Ajoutez un compte bancaire",
          desc: "Renseignez l'établissement, le type de compte, la devise et les informations d'ouverture.",
        },
        {
          title: "Importez un relevé",
          desc: "Chargez le fichier et vérifiez les lignes analysées avant l'import.",
        },
        {
          title: "Rapprochez et validez",
          desc: "Confirmez les rapprochements suggérés et gardez les exceptions visibles.",
        },
      ],
      capabilitiesTitle: "Les données bancaires, sans le tableur parallèle",
      capabilitiesSubtitle:
        "Comptes, lignes de relevé et décisions de rapprochement restent liés à la trésorerie qu'ils expliquent.",
      capabilities: [
        {
          title: "Comptes bancaires",
          desc: "Établissement, type, devise et détails du compte pour chaque espace de travail.",
        },
        {
          title: "Imports de relevés",
          desc: "Importez et analysez les relevés avec une étape de vérification avant validation.",
        },
        {
          title: "Rapprochements suggérés",
          desc: "Classez les lignes de relevé par rapport aux écritures et aux modèles réutilisables.",
        },
        {
          title: "Revue du rapprochement",
          desc: "Gardez les lignes en attente, rapprochées et non rapprochées visibles.",
        },
        {
          title: "Liens de règlement",
          desc: "Reliez les mouvements réglés au compte bancaire qui les a reçus.",
        },
        {
          title: "Rôles de l'espace de travail",
          desc: "Limitez les données de compte à l'espace de travail et à ses membres.",
        },
      ],
      finalTitle: "Réunissez la banque dans le même espace de travail",
      finalSubtitle: "Commencez gratuitement et ajoutez votre premier compte bancaire.",
    },
  },
  spend: {
    name: "Dépenses et règlements",
    preview: {
      label: "Dépenses",
      metric: { label: "Sorties ouvertes", value: "38,4 k€", note: "14 écritures" },
      secondary: { label: "Réglé ce mois-ci", value: "96,2 k€" },
      chartLabel: "Réglé vs en attente",
      rows: [
        { label: "Déplacements", value: "2 840 €", status: "positive" },
        { label: "Logiciels", value: "1 290 €", status: "warning" },
        { label: "Bureau", value: "640 €", status: "positive" },
      ],
    },
    copy: {
      title: "Suivez les dépenses sortantes et réglez-les selon le plan",
      subtitle:
        "Enregistrez les écritures sortantes, affectez-les à des catégories, projets ou départements et réglez-les en totalité ou en plusieurs fois.",
      bullets: [
        "Écritures sortantes avec échéances",
        "Règlements partiels",
        "Affectation aux projets et départements",
        "Vues du solde en attente",
      ],
      outcomes: [
        {
          title: "Visualisez les dépenses engagées",
          desc: "Enregistrez les écritures sortantes avec échéances, catégories et responsables.",
        },
        {
          title: "Réglez en plusieurs fois",
          desc: "Appliquez un ou plusieurs règlements à une écriture et suivez le montant restant.",
        },
        {
          title: "Affectez le coût",
          desc: "Répartissez les dépenses entre départements et rattachez-les à des projets.",
        },
        {
          title: "Analysez ce qui reste ouvert",
          desc: "Filtrez les dépenses réglées et en attente sans exporter de données.",
        },
      ],
      steps: [
        {
          title: "Enregistrez la sortie",
          desc: "Saisissez le montant, l'échéance, la catégorie, le projet et la contrepartie.",
        },
        {
          title: "Réglez sur le compte",
          desc: "Appliquez un ou plusieurs règlements et gardez le solde ouvert à jour.",
        },
        {
          title: "Analysez le solde",
          desc: "Filtrez les dépenses réglées et en attente par catégorie, projet ou département.",
        },
      ],
      capabilitiesTitle: "Des dépenses toujours liées à leur règlement",
      capabilitiesSubtitle:
        "Les écritures sortantes conservent leur affectation et leur historique de règlement au lieu de finir dans une feuille séparée.",
      capabilities: [
        {
          title: "Écritures sortantes",
          desc: "Montant, échéance, catégorie, projet et contrepartie.",
        },
        {
          title: "Règlements partiels",
          desc: "Réglez une écriture en plusieurs paiements.",
        },
        {
          title: "Affectations",
          desc: "Attribuez des pourcentages aux départements et rattachez les projets.",
        },
        {
          title: "Vues des soldes ouverts",
          desc: "Consultez les dépenses ouvertes et réglées avec des filtres enregistrés.",
        },
      ],
      finalTitle: "Gardez dépenses et règlements connectés",
      finalSubtitle: "Commencez gratuitement et enregistrez votre première écriture sortante.",
    },
  },
  ledger: {
    name: "Grand livre",
    preview: {
      label: "Grand livre",
      metric: { label: "Comptes de comptabilisation", value: "128", note: "6 regroupements" },
      secondary: { label: "Écritures journal", value: "1 842" },
      chartLabel: "Activité de comptabilisation",
      rows: [
        { label: "Produits · 4010", value: "Équilibré", status: "positive" },
        { label: "Paie · 6200", value: "Comptabilisé", status: "positive" },
        { label: "Attente · 9999", value: "À vérifier", status: "warning" },
      ],
    },
    copy: {
      title: "Un plan comptable conçu pour un reporting cohérent",
      subtitle:
        "Structurez les comptes de regroupement et de comptabilisation, enregistrez les écritures journal et gardez périodes et dimensions sous contrôle.",
      bullets: [
        "Comptes de regroupement et de comptabilisation",
        "Écritures et journaux comptables",
        "Périodes fiscales",
        "Dimensions et politiques de comptabilisation",
      ],
      outcomes: [
        {
          title: "Structurez le plan",
          desc: "Créez des comptes de regroupement et de comptabilisation avec codes et soldes normaux.",
        },
        {
          title: "Enregistrez les journaux",
          desc: "Comptabilisez les écritures journal avec lignes, journaux et périodes fiscales.",
        },
        {
          title: "Préservez les dimensions",
          desc: "Définissez les dimensions et les valeurs autorisées pour structurer le reporting.",
        },
        {
          title: "Contrôlez la comptabilisation",
          desc: "Utilisez les politiques de comptabilisation et les contrôles de saisie manuelle selon vos besoins.",
        },
      ],
      steps: [
        {
          title: "Concevez le plan",
          desc: "Créez les comptes de regroupement et de comptabilisation dont votre reporting a besoin.",
        },
        {
          title: "Enregistrez les écritures",
          desc: "Comptabilisez les écritures journal avec le bon journal, la bonne période et les bonnes dimensions.",
        },
        {
          title: "Vérifiez les périodes",
          desc: "Gardez les périodes fiscales et le statut de comptabilisation sous contrôle.",
        },
      ],
      capabilitiesTitle: "Une structure comptable qui tient",
      capabilitiesSubtitle:
        "Plan, journaux, périodes et dimensions partagent un même espace de travail au lieu de diverger.",
      capabilities: [
        {
          title: "Plan comptable",
          desc: "Comptes de regroupement et de comptabilisation avec codes, types et soldes normaux.",
        },
        {
          title: "Écritures journal",
          desc: "Écritures multilignes avec journaux, périodes et statut.",
        },
        {
          title: "Périodes fiscales",
          desc: "Ouvrez et clôturez les périodes de chaque journal comptable.",
        },
        {
          title: "Dimensions",
          desc: "Définissez dimensions, valeurs et règles au niveau des comptes.",
        },
        {
          title: "Politiques de comptabilisation",
          desc: "Contrôlez la comptabilisation des écritures et les comptes autorisant la saisie manuelle.",
        },
        {
          title: "Contrôles de comptes",
          desc: "Comptes de contrôle bancaire et protections de classification.",
        },
      ],
      finalTitle: "Construisez un grand livre que vous pouvez justifier",
      finalSubtitle: "Commencez gratuitement et façonnez le plan autour de votre reporting.",
    },
  },
  projects: {
    name: "Projets",
    preview: {
      label: "Projets",
      metric: { label: "Projets actifs", value: "24", note: "6 types" },
      secondary: { label: "Écritures liées", value: "312" },
      chartLabel: "Prévu vs réglé par projet",
      rows: [
        { label: "Mise en œuvre", value: "420 k€", status: "positive" },
        { label: "Migration", value: "186 k€", status: "warning" },
        { label: "Support", value: "96 k€", status: "positive" },
      ],
    },
    copy: {
      title: "Visualisez coûts et revenus par projet",
      subtitle:
        "Créez des projets, rattachez-y vos écritures de trésorerie et comparez les montants prévus, réglés et en attente dans un seul filtre.",
      bullets: [
        "Fiches projet avec codes et types",
        "Rattachement des écritures au projet",
        "Affectations aux départements",
        "Vues spécifiques par projet",
      ],
      outcomes: [
        {
          title: "Créez une fiche projet",
          desc: "Nom, code, type et description, avec un statut actif.",
        },
        {
          title: "Rattachez les écritures",
          desc: "Reliez les écritures de trésorerie prévues et réglées au projet.",
        },
        {
          title: "Affectez les départements",
          desc: "Répartissez le coût d'une écriture entre plusieurs départements.",
        },
        {
          title: "Analysez le projet",
          desc: "Filtrez les écritures et les montants en attente par projet.",
        },
      ],
      steps: [
        {
          title: "Créez le projet",
          desc: "Ajoutez un nom, un code et un type pour identifier facilement le projet.",
        },
        {
          title: "Rattachez les écritures",
          desc: "Reliez les écritures de trésorerie qui appartiennent au projet.",
        },
        {
          title: "Analysez la position",
          desc: "Filtrez les montants prévus, réglés et en attente par projet.",
        },
      ],
      capabilitiesTitle: "Le contexte projet sur chaque mouvement",
      capabilitiesSubtitle:
        "Écritures, répartitions par département et statut de règlement restent attachés au projet qui en est responsable.",
      capabilities: [
        {
          title: "Fiches projet",
          desc: "Nom, code, type, description et statut.",
        },
        {
          title: "Liens vers les écritures",
          desc: "Rattachez directement les écritures de trésorerie à un projet.",
        },
        {
          title: "Répartition par département",
          desc: "Affectez des pourcentages d'écriture entre départements.",
        },
        {
          title: "Filtres projet",
          desc: "Analysez écritures, règlements et montants ouverts par projet.",
        },
      ],
      finalTitle: "Rendez la performance projet visible",
      finalSubtitle: "Commencez gratuitement et créez votre premier projet.",
    },
  },
  departments: {
    name: "Départements",
    preview: {
      label: "Départements",
      metric: { label: "Départements", value: "8", note: "3 centres de coûts" },
      secondary: { label: "Écritures affectées", value: "246" },
      chartLabel: "Écritures par département",
      rows: [
        { label: "Opérations", value: "42 %", status: "positive" },
        { label: "Ventes", value: "31 %", status: "warning" },
        { label: "Ingénierie", value: "27 %", status: "positive" },
      ],
    },
    copy: {
      title: "Attribuez chaque mouvement à l'équipe qui en est responsable",
      subtitle:
        "Créez des départements, affectez des pourcentages d'écriture et analysez les chiffres par équipe sans reconstruire le rapport.",
      bullets: [
        "Fiches département",
        "Affectations en pourcentage",
        "Filtres d'écritures par département",
        "Vues enregistrées",
      ],
      outcomes: [
        {
          title: "Créez le département",
          desc: "Nom, code et statut actif pour chaque centre de coûts.",
        },
        {
          title: "Affectez les écritures",
          desc: "Attribuez un ou plusieurs départements à une écriture, avec des pourcentages.",
        },
        {
          title: "Filtrez par équipe",
          desc: "Analysez les écritures et les règlements d'un département à la fois.",
        },
        {
          title: "Gardez la responsabilité visible",
          desc: "Voyez quelle équipe porte la dépense dans le même espace de travail.",
        },
      ],
      steps: [
        {
          title: "Définissez les départements",
          desc: "Ajoutez les noms et les codes que vos équipes utilisent déjà.",
        },
        {
          title: "Affectez les écritures",
          desc: "Répartissez une écriture entre départements avec des pourcentages.",
        },
        {
          title: "Analysez les chiffres",
          desc: "Filtrez les écritures de trésorerie par département et analysez la position.",
        },
      ],
      capabilitiesTitle: "Une vue par centre de coûts fiable",
      capabilitiesSubtitle:
        "Les répartitions par département restent attachées à l'écriture au lieu d'être reconstruites au moment du reporting.",
      capabilities: [
        {
          title: "Fiches département",
          desc: "Nom, code et statut pour chaque centre de coûts.",
        },
        {
          title: "Affectation en pourcentage",
          desc: "Répartissez une écriture entre départements avec des pourcentages définis.",
        },
        {
          title: "Filtres d'écritures",
          desc: "Filtrez les écritures de trésorerie par département.",
        },
        {
          title: "Vues enregistrées",
          desc: "Conservez les colonnes et les filtres utilisés par votre équipe.",
        },
      ],
      finalTitle: "Donnez un responsable à chaque mouvement",
      finalSubtitle: "Commencez gratuitement et définissez votre premier département.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Entités",
      metric: { label: "Entités", value: "186", note: "7 types" },
      secondary: { label: "Actives", value: "164" },
      chartLabel: "Entités par type",
      rows: [
        { label: "Clients", value: "82", status: "positive" },
        { label: "Fournisseurs", value: "46", status: "positive" },
        { label: "Sous-traitants", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Un répertoire unique pour chaque contrepartie",
      subtitle:
        "Regroupez clients, fournisseurs, collaborateurs, sous-traitants et partenaires dans un seul espace de travail et reliez-les aux écritures de trésorerie concernées.",
      bullets: [
        "Clients, fournisseurs et partenaires",
        "Coordonnées et informations fiscales",
        "Types d'entités et statut",
        "Liens vers les écritures de trésorerie",
      ],
      outcomes: [
        {
          title: "Un seul répertoire",
          desc: "Enregistrez chaque contrepartie une seule fois avec un type d'entité explicite.",
        },
        {
          title: "Coordonnées",
          desc: "Conservez l'e-mail, le téléphone et l'adresse avec la fiche.",
        },
        {
          title: "Informations fiscales et bancaires",
          desc: "Renseignez les identifiants fiscaux et les coordonnées bancaires lorsque c'est utile.",
        },
        {
          title: "Reliez au grand livre",
          desc: "Référencez l'entité sur les écritures de trésorerie qu'elle a payées ou reçues.",
        },
      ],
      steps: [
        {
          title: "Ajoutez l'entité",
          desc: "Choisissez le type d'entité et ajoutez le nom et les coordonnées.",
        },
        {
          title: "Qualifiez la relation",
          desc: "Indiquez s'il s'agit d'un client, d'un fournisseur, d'un collaborateur, d'un sous-traitant, d'un partenaire ou d'un autre type.",
        },
        {
          title: "Reliez les écritures",
          desc: "Référencez l'entité sur les écritures de trésorerie concernées.",
        },
      ],
      capabilitiesTitle: "Des données de contrepartie qui restent utiles",
      capabilitiesSubtitle:
        "Une fiche unique pour les personnes et organisations derrière votre trésorerie, au lieu d'une liste de contacts dans un outil séparé.",
      capabilities: [
        {
          title: "Fiches d'entité",
          desc: "Clients, fournisseurs, collaborateurs, sous-traitants, partenaires et plus encore.",
        },
        {
          title: "Coordonnées",
          desc: "E-mail, téléphone et adresse dans une seule fiche.",
        },
        {
          title: "Champs fiscaux et bancaires",
          desc: "Identifiants fiscaux et coordonnées bancaires facultatifs.",
        },
        {
          title: "Liens vers les écritures",
          desc: "Référencez la contrepartie sur les écritures de trésorerie.",
        },
      ],
      finalTitle: "Réunissez vos contreparties au même endroit",
      finalSubtitle: "Commencez gratuitement et ajoutez votre première entité.",
    },
  },
  inventory: {
    name: "Stock",
    preview: {
      label: "Stock",
      metric: { label: "Articles", value: "1 284", note: "42 catégories" },
      secondary: { label: "Unités en stock", value: "8 960" },
      chartLabel: "Articles par type d'unité",
      rows: [
        { label: "SKU-1042", value: "240 unités", status: "positive" },
        { label: "SKU-2210", value: "18 unités", status: "warning" },
        { label: "SKU-3180", value: "96 unités", status: "positive" },
      ],
    },
    copy: {
      title: "Les données de base des articles, pour le stock et les services",
      subtitle:
        "Conservez les SKU, unités de mesure et quantités en stock dans une même liste, puis rattachez les articles aux écritures de trésorerie qui les font bouger.",
      bullets: [
        "SKU et nom de l'article",
        "Unité de mesure",
        "Quantité en stock",
        "Liens vers les écritures de trésorerie",
      ],
      outcomes: [
        {
          title: "Une seule liste d'articles",
          desc: "Enregistrez chaque SKU une seule fois avec un nom et une description.",
        },
        {
          title: "Unités et quantités",
          desc: "Suivez l'unité de mesure et la quantité en stock.",
        },
        {
          title: "Contrôle du statut",
          desc: "Désactivez des articles sans supprimer leur historique.",
        },
        {
          title: "Reliez à la trésorerie",
          desc: "Rattachez les lignes de stock aux écritures qui font bouger le stock.",
        },
      ],
      steps: [
        {
          title: "Créez l'article",
          desc: "Ajoutez le SKU, le nom et la description.",
        },
        {
          title: "Définissez l'unité et la quantité",
          desc: "Choisissez l'unité de mesure et enregistrez la quantité en stock.",
        },
        {
          title: "Rattachez-le aux écritures",
          desc: "Référencez l'article sur les écritures de trésorerie qui le concernent.",
        },
      ],
      capabilitiesTitle: "Des données d'articles propres, reliées à la finance",
      capabilitiesSubtitle:
        "Une base articles simple qui reste liée à la trésorerie qu'elle impacte.",
      capabilities: [
        {
          title: "Fiches article",
          desc: "SKU, nom, description et statut actif.",
        },
        {
          title: "Unités de mesure",
          desc: "Unités en texte libre, comme pièces, kilos ou heures.",
        },
        {
          title: "Quantité en stock",
          desc: "Conservez la quantité actuelle avec chaque article.",
        },
        {
          title: "Liens vers les écritures",
          desc: "Référencez les articles sur les écritures de trésorerie.",
        },
      ],
      finalTitle: "Gardez des données d'articles propres",
      finalSubtitle: "Commencez gratuitement et ajoutez votre premier SKU.",
    },
  },
};

export default fr;
