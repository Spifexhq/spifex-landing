import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const pt: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software de finanças pessoais para planear e controlar",
    metaDescription:
      "O Spifex Personal liga transações, contas bancárias, orçamentos, objetivos e relatórios num único workspace de finanças pessoais. Comece grátis.",
    eyebrow: "Spifex Personal",
    title: "As finanças pessoais com a clareza de um sistema operativo",
    description:
      "Planeie o que está para vir, acompanhe o que já aconteceu e compreenda a sua posição completa entre contas, categorias, orçamentos e objetivos — sem andar a juntar folhas de cálculo.",
    primaryLabel: "Começar grátis no Personal",
    proof: "Plano Free disponível. Não é necessário cartão de crédito.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Veja todas as contas num só lugar",
        description:
          "Adicione contas bancárias pessoais, acompanhe os saldos e mantenha as transferências separadas dos totais de rendimentos e despesas.",
      },
      {
        title: "Planeie com orçamentos e objetivos",
        description:
          "Crie orçamentos e objetivos, reveja o progresso e ajuste o plano à medida que a vida real muda.",
      },
      {
        title: "Compreenda o histórico de transações",
        description:
          "Filtre transações por data, categoria, conta, direção e estado de liquidação.",
      },
      {
        title: "Reconcilie pagamentos parciais",
        description:
          "Registe liquidações totais ou parciais nas contas e mantenha o valor em aberto sempre correto.",
      },
      {
        title: "Reporte sem reconstruir dados",
        description:
          "Reveja posições em aberto e liquidadas, categorias e indicadores financeiros a partir do mesmo workspace.",
      },
      {
        title: "Pergunte a um assistente de IA",
        description:
          "Ligue o ChatGPT ou o Claude com acesso só de leitura para resumir transações e categorias.",
      },
    ],
    workflow: [
      {
        title: "Crie o seu workspace pessoal",
        description: "Escolha o país e a moeda e comece no plano Personal Free.",
      },
      {
        title: "Adicione contas e categorias",
        description:
          "Traga as contas e categorias que já utiliza e ajuste-as ao longo do tempo.",
      },
      {
        title: "Planeie, liquide e reveja",
        description:
          "Use orçamentos, objetivos, liquidações e relatórios para manter o quadro completo atualizado.",
      },
    ],
    faq: [
      {
        question: "O que está incluído no Personal Free?",
        answer:
          "O Personal Free inclui um workspace pessoal, 250 transações por mês, duas contas bancárias, 25 categorias, três orçamentos, três objetivos e duas vistas guardadas.",
      },
      {
        question: "Quando devo passar para o Personal Starter ou Pro?",
        answer:
          "Avance quando precisar de mais transações mensais, mais contas bancárias, bibliotecas maiores de categorias e orçamentos, ou mais vistas guardadas e anexos.",
      },
      {
        question: "Posso usar workspaces Personal e Empresas?",
        answer:
          "Sim. Uma conta Spifex pode ter vários workspaces nas duas categorias de produto e alternar entre eles.",
      },
      {
        question: "O assistente de IA altera os meus dados?",
        answer:
          "Não. As ligações de IA são só de leitura e pedem apenas o âmbito cashflow:read.",
      },
    ],
    otherLabel: "Explorar o Spifex Empresas",
    labels: {
      comparePlans: "Comparar planos",
      outcomesEyebrow: "O que pode fazer",
      outcomesTitle: "Um modelo operacional claro para a forma como gere o seu dinheiro",
      outcomesDescription:
        "Cada resultado abaixo corresponde a um fluxo de trabalho do Spifex já implementado, não a um item de roadmap futuro.",
      howEyebrow: "Como funciona",
      howTitle: "Comece em pequeno. Acrescente estrutura à medida que avança.",
      questionsEyebrow: "Perguntas",
      questionsTitle: "Antes de escolher um plano",
      finalTitle: "Comece grátis. Faça upgrade apenas quando a operação precisar de mais espaço.",
    },
  },
  business: {
    metaTitle: "Software de operações financeiras para empresas",
    metaDescription:
      "O Spifex Business liga fluxo de caixa, banking, liquidações, estrutura do livro razão, projetos, departamentos e relatórios com controlos por função. Comece grátis.",
    eyebrow: "Spifex Business",
    title: "Uma camada operacional para as operações financeiras da empresa",
    description:
      "Planeie o fluxo de caixa, ligue o banking, reconcilie liquidações, estruture o livro razão e reporte por projeto ou departamento — com as funções e os controlos de que uma equipa financeira precisa.",
    primaryLabel: "Começar grátis no Business",
    proof: "Plano Free disponível. Não é necessário cartão de crédito.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planeie e execute o fluxo de caixa",
        description:
          "Crie registos planeados, liquide-os nas contas bancárias e mantenha os saldos em aberto atualizados.",
      },
      {
        title: "Ligue o banking e os extratos",
        description:
          "Adicione contas bancárias, importe extratos e reconcilie movimentos com evidência real.",
      },
      {
        title: "Atribua custos e responsabilidade",
        description:
          "Use projetos, departamentos e entidades para explicar onde o dinheiro é planeado e gasto.",
      },
      {
        title: "Estruture o livro razão",
        description:
          "Mantenha as contas do livro razão e a estrutura de lançamentos para que os relatórios se mantenham consistentes.",
      },
      {
        title: "Controle o acesso por função",
        description:
          "Use as funções de proprietário, administrador e membro, com permissões limitadas ao workspace e controlos de ciclo de vida.",
      },
      {
        title: "Reporte com visibilidade de KPI",
        description:
          "Reveja indicadores de fluxo de caixa, liquidação e operacionais a partir dos mesmos dados filtrados.",
      },
    ],
    workflow: [
      {
        title: "Crie o workspace da sua empresa",
        description:
          "Defina o país e a moeda do workspace e comece no plano Business Free.",
      },
      {
        title: "Adicione a sua estrutura operacional",
        description:
          "Adicione contas, categorias, projetos, departamentos, membros e contas do livro razão.",
      },
      {
        title: "Opere com controlos",
        description:
          "Planeie, liquide, reconcilie e reporte com controlos de acesso por função.",
      },
    ],
    faq: [
      {
        question: "O que está incluído no Business Free?",
        answer:
          "O Business Free inclui um workspace, 1 000 registos de fluxo de caixa por mês, duas contas bancárias, um membro, dois projetos, dez contas do livro razão e duas importações de extratos por mês.",
      },
      {
        question: "O que muda no Starter e no Pro?",
        answer:
          "O Starter aumenta os limites de registos, bancos, membros, projetos, livro razão e extratos. O Pro remove os limites dos fluxos de trabalho principais e permite até seis workspaces próprios.",
      },
      {
        question: "O Spifex substitui o meu software de contabilidade?",
        answer:
          "O Spifex é a camada operacional para fluxo de caixa, visibilidade bancária, liquidações, governança e relatórios. Complementa a contabilidade oficial em vez de a substituir.",
      },
      {
        question: "Posso ligar o ChatGPT ou o Claude?",
        answer:
          "Sim. Os workspaces de empresa suportam ligações de IA só de leitura com OAuth e o âmbito cashflow:read.",
      },
    ],
    otherLabel: "Explorar o Spifex Personal",
    labels: {
      comparePlans: "Comparar planos",
      outcomesEyebrow: "O que pode fazer",
      outcomesTitle: "Um modelo operacional claro para a forma como gere o seu dinheiro",
      outcomesDescription:
        "Cada resultado abaixo corresponde a um fluxo de trabalho do Spifex já implementado, não a um item de roadmap futuro.",
      howEyebrow: "Como funciona",
      howTitle: "Comece em pequeno. Acrescente estrutura à medida que avança.",
      questionsEyebrow: "Perguntas",
      questionsTitle: "Antes de escolher um plano",
      finalTitle: "Comece grátis. Faça upgrade apenas quando a operação precisar de mais espaço.",
    },
  },
};

export default pt;
