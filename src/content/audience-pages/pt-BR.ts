import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const ptBR: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Software de finanças pessoais para planejar e controlar",
    metaDescription:
      "O Spifex Personal conecta transações, contas bancárias, orçamentos, metas e relatórios em um único workspace de finanças pessoais. Comece grátis.",
    eyebrow: "Spifex Personal",
    title: "Suas finanças pessoais com a clareza de um sistema operacional",
    description:
      "Planeje o que está por vir, acompanhe o que já aconteceu e entenda sua posição completa entre contas, categorias, orçamentos e metas — sem precisar juntar planilhas.",
    primaryLabel: "Começar grátis com o Personal",
    proof: "Plano grátis disponível. Sem cartão de crédito.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Veja todas as contas em um só lugar",
        description:
          "Adicione contas bancárias pessoais, acompanhe os saldos e mantenha as transferências separadas dos totais de receitas e despesas.",
      },
      {
        title: "Planeje com orçamentos e metas",
        description:
          "Crie orçamentos e metas, revise o progresso e ajuste o plano conforme a vida real muda.",
      },
      {
        title: "Entenda o histórico de transações",
        description:
          "Filtre transações por data, categoria, conta, direção e status de liquidação.",
      },
      {
        title: "Concilie pagamentos parciais",
        description:
          "Registre liquidações totais ou parciais nas contas e mantenha o valor em aberto sempre preciso.",
      },
      {
        title: "Gere relatórios sem reconstruir dados",
        description:
          "Revise posições pendentes e liquidadas, categorias e indicadores financeiros no mesmo workspace.",
      },
      {
        title: "Pergunte a um assistente de IA",
        description:
          "Conecte ChatGPT ou Claude com acesso somente leitura para resumir transações e categorias.",
      },
    ],
    workflow: [
      {
        title: "Crie seu workspace pessoal",
        description: "Escolha o país e a moeda e comece no plano Personal Free.",
      },
      {
        title: "Adicione contas e categorias",
        description:
          "Traga as contas e categorias que você já usa e ajuste com o tempo.",
      },
      {
        title: "Planeje, liquide e revise",
        description:
          "Use orçamentos, metas, liquidações e relatórios para manter o panorama completo atualizado.",
      },
    ],
    faq: [
      {
        question: "O que está incluído no Personal Free?",
        answer:
          "O Personal Free inclui um workspace pessoal, 250 transações por mês, duas contas bancárias, 25 categorias, três orçamentos, três metas e duas visões salvas.",
      },
      {
        question: "Quando devo migrar para o Personal Starter ou Pro?",
        answer:
          "Migre quando precisar de mais transações mensais, mais contas bancárias, bibliotecas maiores de categorias e orçamentos, ou mais visões salvas e anexos.",
      },
      {
        question: "Posso usar workspaces Pessoal e de Empresas?",
        answer:
          "Sim. Uma conta Spifex pode ter vários workspaces nas duas categorias de produto e alternar entre eles.",
      },
      {
        question: "O assistente de IA altera meus dados?",
        answer:
          "Não. As conexões de IA são somente leitura e solicitam apenas o escopo spifex:access.",
      },
    ],
    otherLabel: "Explorar o Spifex Empresas",
    labels: {
      comparePlans: "Comparar planos",
      outcomesEyebrow: "O que você pode fazer",
      outcomesTitle: "Um modelo operacional claro para a forma como você gere seu dinheiro",
      outcomesDescription:
        "Cada resultado abaixo é sustentado por um fluxo de trabalho do Spifex já implementado, não por um item de roadmap futuro.",
      howEyebrow: "Como funciona",
      howTitle: "Comece pequeno. Adicione estrutura conforme avança.",
      questionsEyebrow: "Dúvidas",
      questionsTitle: "Antes de escolher um plano",
      finalTitle: "Comece grátis. Faça upgrade só quando a operação precisar de mais espaço.",
    },
  },
  business: {
    metaTitle: "Software de operações financeiras para empresas",
    metaDescription:
      "O Spifex Business conecta fluxo de caixa, banking, liquidações, estrutura do livro razão, projetos, departamentos e relatórios com controles por função. Comece grátis.",
    eyebrow: "Spifex Business",
    title: "Uma camada operacional para as operações financeiras da empresa",
    description:
      "Planeje o fluxo de caixa, conecte o banking, concilie liquidações, estruture seu livro razão e gere relatórios por projeto ou departamento — com as funções e os controles que uma equipe financeira precisa.",
    primaryLabel: "Começar grátis com o Business",
    proof: "Plano grátis disponível. Sem cartão de crédito.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planeje e execute o fluxo de caixa",
        description:
          "Crie lançamentos planejados, liquide-os nas contas bancárias e mantenha os saldos pendentes atualizados.",
      },
      {
        title: "Conecte banking e extratos",
        description:
          "Adicione contas bancárias, importe extratos e concilie movimentos com evidência real.",
      },
      {
        title: "Atribua custos e responsabilidade",
        description:
          "Use projetos, departamentos e entidades para explicar onde o dinheiro é planejado e gasto.",
      },
      {
        title: "Estruture o livro razão",
        description:
          "Mantenha as contas contábeis e a estrutura de lançamentos para que os relatórios permaneçam consistentes.",
      },
      {
        title: "Controle o acesso por função",
        description:
          "Use as funções de proprietário, administrador e membro, com permissões limitadas ao workspace e controles de ciclo de vida.",
      },
      {
        title: "Gere relatórios com visibilidade de KPIs",
        description:
          "Revise indicadores de fluxo de caixa, liquidação e operacionais a partir dos mesmos dados filtrados.",
      },
    ],
    workflow: [
      {
        title: "Crie o workspace da sua empresa",
        description:
          "Defina o país e a moeda do workspace e comece no plano Business Free.",
      },
      {
        title: "Adicione sua estrutura operacional",
        description:
          "Adicione contas, categorias, projetos, departamentos, membros e contas contábeis.",
      },
      {
        title: "Opere com controles",
        description:
          "Planeje, liquide, concilie e gere relatórios com controles de acesso por função.",
      },
    ],
    faq: [
      {
        question: "O que está incluído no Business Free?",
        answer:
          "O Business Free inclui um workspace, 1.000 lançamentos de fluxo de caixa por mês, duas contas bancárias, um membro, dois projetos, dez contas contábeis e duas importações de extratos por mês.",
      },
      {
        question: "O que muda no Starter e no Pro?",
        answer:
          "O Starter aumenta os limites de lançamentos, bancos, membros, projetos, livro razão e extratos. O Pro remove os limites dos fluxos de trabalho principais e permite até seis workspaces próprios.",
      },
      {
        question: "O Spifex substitui meu software de contabilidade?",
        answer:
          "O Spifex é a camada operacional para fluxo de caixa, visibilidade bancária, liquidações, governança e relatórios. Ele complementa a contabilidade societária em vez de substituí-la.",
      },
      {
        question: "Posso conectar ChatGPT ou Claude?",
        answer:
          "Sim. Workspaces de empresas aceitam conexões de IA somente leitura com OAuth e o escopo spifex:access.",
      },
    ],
    otherLabel: "Explorar o Spifex Personal",
    labels: {
      comparePlans: "Comparar planos",
      outcomesEyebrow: "O que você pode fazer",
      outcomesTitle: "Um modelo operacional claro para a forma como você gere seu dinheiro",
      outcomesDescription:
        "Cada resultado abaixo é sustentado por um fluxo de trabalho do Spifex já implementado, não por um item de roadmap futuro.",
      howEyebrow: "Como funciona",
      howTitle: "Comece pequeno. Adicione estrutura conforme avança.",
      questionsEyebrow: "Dúvidas",
      questionsTitle: "Antes de escolher um plano",
      finalTitle: "Comece grátis. Faça upgrade só quando a operação precisar de mais espaço.",
    },
  },
};

export default ptBR;
