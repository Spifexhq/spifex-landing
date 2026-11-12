import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const fr: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Logiciel de finances personnelles pour planifier et garder le contrôle",
    metaDescription:
      "Spifex Personnel réunit transactions, comptes bancaires, budgets, objectifs et reporting dans un seul espace de travail de finances personnelles. Commencez gratuitement.",
    eyebrow: "Spifex Personnel",
    title: "Vos finances personnelles, avec la clarté d'un système d'exploitation",
    description:
      "Planifiez ce qui arrive, suivez ce qui s'est passé et comprenez votre situation complète entre comptes, catégories, budgets et objectifs — sans assembler des tableurs.",
    primaryLabel: "Commencer gratuitement avec Personnel",
    proof: "Offre gratuite disponible. Sans carte bancaire.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Voyez tous vos comptes au même endroit",
        description:
          "Ajoutez vos comptes bancaires personnels, suivez les soldes et gardez les transferts séparés des totaux de revenus et de dépenses.",
      },
      {
        title: "Planifiez avec des budgets et des objectifs",
        description:
          "Créez des budgets et des objectifs, suivez leur progression et ajustez le plan au rythme de votre vie.",
      },
      {
        title: "Comprenez l'historique des transactions",
        description:
          "Filtrez les transactions par date, catégorie, compte, sens et statut de règlement.",
      },
      {
        title: "Rapprochez les paiements partiels",
        description:
          "Enregistrez des règlements complets ou partiels sur vos comptes et gardez le montant en attente exact.",
      },
      {
        title: "Produisez vos rapports sans reconstruire les données",
        description:
          "Consultez les positions en attente et réglées, les catégories et les indicateurs financiers depuis le même espace de travail.",
      },
      {
        title: "Interrogez un assistant IA",
        description:
          "Connectez ChatGPT ou Claude en lecture seule pour résumer transactions et catégories.",
      },
    ],
    workflow: [
      {
        title: "Créez votre espace personnel",
        description:
          "Choisissez votre pays et votre devise, puis démarrez sur l'offre Personal Free.",
      },
      {
        title: "Ajoutez vos comptes et catégories",
        description:
          "Reprenez les comptes et catégories que vous utilisez déjà, puis ajustez-les au fil du temps.",
      },
      {
        title: "Planifiez, réglez et analysez",
        description:
          "Utilisez budgets, objectifs, règlements et rapports pour garder une vision à jour de l'ensemble.",
      },
    ],
    faq: [
      {
        question: "Que comprend l'offre Personal Free ?",
        answer:
          "Personal Free comprend un espace personnel, 250 transactions par mois, deux comptes bancaires, 25 catégories, trois budgets, trois objectifs et deux vues enregistrées.",
      },
      {
        question: "Quand passer à Personal Starter ou Pro ?",
        answer:
          "Passez à une offre supérieure lorsque vous avez besoin de plus de transactions mensuelles, de comptes bancaires, de catégories et de budgets, ou de vues enregistrées et de pièces jointes supplémentaires.",
      },
      {
        question: "Puis-je utiliser à la fois un espace Personnel et un espace Professionnel ?",
        answer:
          "Oui. Un même compte Spifex peut posséder plusieurs espaces de travail dans les deux catégories de produits et basculer de l'un à l'autre.",
      },
      {
        question: "L'assistant IA modifie-t-il mes données ?",
        answer:
          "Non. Les connexions IA sont en lecture seule et ne demandent que la portée cashflow:read.",
      },
    ],
    otherLabel: "Découvrir Spifex Professionnel",
    labels: {
      comparePlans: "Comparer les offres",
      outcomesEyebrow: "Ce que vous pouvez faire",
      outcomesTitle: "Un modèle opérationnel clair pour gérer votre argent",
      outcomesDescription:
        "Chaque résultat ci-dessous repose sur un flux de travail Spifex déjà implémenté, et non sur une feuille de route.",
      howEyebrow: "Comment ça marche",
      howTitle: "Commencez petit. Ajoutez de la structure au fur et à mesure.",
      questionsEyebrow: "Questions",
      questionsTitle: "Avant de choisir une offre",
      finalTitle:
        "Commencez gratuitement. Passez à une offre supérieure seulement quand votre activité a besoin de plus d'espace.",
    },
  },

  business: {
    metaTitle: "Logiciel d'opérations financières pour les entreprises",
    metaDescription:
      "Spifex Professionnel relie trésorerie, opérations bancaires, règlements, structure du grand livre, projets, départements et reporting avec des contrôles par rôle. Commencez gratuitement.",
    eyebrow: "Spifex Professionnel",
    title: "Une seule couche opérationnelle pour la gestion financière de l'entreprise",
    description:
      "Planifiez votre trésorerie, connectez vos comptes bancaires, rapprochez les règlements, structurez votre grand livre et produisez vos rapports par projet ou par département — avec les rôles et les contrôles dont une équipe financière a besoin.",
    primaryLabel: "Commencer gratuitement avec Professionnel",
    proof: "Offre gratuite disponible. Sans carte bancaire.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planifiez et exécutez la trésorerie",
        description:
          "Créez des écritures prévues, réglez-les sur vos comptes bancaires et gardez les soldes en attente à jour.",
      },
      {
        title: "Connectez la banque et les relevés",
        description:
          "Ajoutez des comptes bancaires, importez vos relevés et rapprochez les mouvements avec des justificatifs réels.",
      },
      {
        title: "Attribuez les coûts et les responsabilités",
        description:
          "Utilisez projets, départements et entités pour expliquer où l'argent est planifié et dépensé.",
      },
      {
        title: "Structurez le grand livre",
        description:
          "Tenez à jour les comptes du grand livre et la structure des écritures pour un reporting cohérent.",
      },
      {
        title: "Contrôlez l'accès par rôle",
        description:
          "Utilisez les rôles propriétaire, administrateur et membre, avec des autorisations limitées à l'espace de travail et une gestion du cycle de vie.",
      },
      {
        title: "Produisez vos rapports avec une visibilité sur vos KPI",
        description:
          "Consultez les indicateurs de trésorerie, de règlement et d'exploitation à partir des mêmes données filtrées.",
      },
    ],
    workflow: [
      {
        title: "Créez votre espace professionnel",
        description:
          "Définissez le pays et la devise de l'espace de travail, puis démarrez sur l'offre Business Free.",
      },
      {
        title: "Ajoutez votre structure opérationnelle",
        description:
          "Ajoutez comptes, catégories, projets, départements, membres et comptes du grand livre.",
      },
      {
        title: "Opérez avec des contrôles",
        description:
          "Planifiez, réglez, rapprochez et produisez vos rapports avec des contrôles d'accès par rôle.",
      },
    ],
    faq: [
      {
        question: "Que comprend l'offre Business Free ?",
        answer:
          "Business Free comprend un espace de travail, 1 000 écritures de trésorerie par mois, deux comptes bancaires, un membre, deux projets, dix comptes du grand livre et deux imports de relevés par mois.",
      },
      {
        question: "Qu'est-ce qui change avec Starter et Pro ?",
        answer:
          "Starter augmente les limites d'écritures, de comptes bancaires, de membres, de projets, de grand livre et de relevés. Pro supprime les limites des flux de base et permet jusqu'à six espaces de travail détenus.",
      },
      {
        question: "Spifex remplace-t-il mon logiciel comptable ?",
        answer:
          "Spifex est la couche opérationnelle pour la trésorerie, la visibilité bancaire, les règlements, la gouvernance et le reporting. Il complète la comptabilité légale sans la remplacer.",
      },
      {
        question: "Puis-je connecter ChatGPT ou Claude ?",
        answer:
          "Oui. Les espaces professionnels prennent en charge des connexions IA en lecture seule avec OAuth et la portée cashflow:read.",
      },
    ],
    otherLabel: "Découvrir Spifex Personnel",
    labels: {
      comparePlans: "Comparer les offres",
      outcomesEyebrow: "Ce que vous pouvez faire",
      outcomesTitle: "Un modèle opérationnel clair pour gérer votre argent",
      outcomesDescription:
        "Chaque résultat ci-dessous repose sur un flux de travail Spifex déjà implémenté, et non sur une feuille de route.",
      howEyebrow: "Comment ça marche",
      howTitle: "Commencez petit. Ajoutez de la structure au fur et à mesure.",
      questionsEyebrow: "Questions",
      questionsTitle: "Avant de choisir une offre",
      finalTitle:
        "Commencez gratuitement. Passez à une offre supérieure seulement quand votre activité a besoin de plus d'espace.",
    },
  },
};

export default fr;
