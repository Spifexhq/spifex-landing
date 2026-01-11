const pt = {
  common: {
    learnMore: "Saiba mais",
    viewPricing: "Ver preços",
  },

  nav: {
    products: "Produtos",
    solutions: "Soluções",
    customers: "Clientes",
    pricing: "Preços",
    legal: "Jurídico",
    blog: "Blog",
    signin: "Entrar",
    signup: "Criar conta",
    home: "Início",
    toggleMenu: "Abrir menu",
  },

  legal: {
    title: "Jurídico",
    toc: "Sumário",
    disclaimer: "Aviso: esta página é um template estrutural e não constitui aconselhamento jurídico.",
  },

  blog: {
    indexTitle: "Blog",
    indexSubtitle: "Conteúdos sobre operações financeiras, fluxo de caixa, governança e automação.",
    searchPlaceholder: "Pesquisar",
    clearSearch: "Limpar busca",
    filter: "Filtrar",
    topic: "Tópico",
    filterAll: "Todos os tópicos",
    applyFilter: "Filtrar",
    activeFilter: "Filtro ativo",
    noActiveFilter: "Nenhum filtro ativo",
    clearFilter: "Limpar filtro",
    noResults: "Nenhum post encontrado para a busca/filtro atual.",
    breadcrumbBlog: "Blog",
    breadcrumbArticles: "Artigos",
    seriesDefault: "Blog Spifex",
  },

  products: {
    groups: { products: "Produtos", workflows: "Workflows", platform: "Plataforma" },
    items: {
      cashflow: { title: "Fluxo de Caixa", desc: "Planeje entradas e saídas, projete cenários e acompanhe a execução em tempo real." },
      banking: { title: "Bancos & Pagamentos", desc: "Centralize contas, pague fornecedores e gerencie transferências com controles integrados." },
      spend: { title: "Despesas & Liquidações", desc: "Padronize aprovações, liquidações e movimentações internas." },
      ledger: { title: "Razão (Ledger)", desc: "Plano de contas, classificação e estrutura auditável." },
      projects: { title: "Projetos", desc: "Atribua custos e receitas por iniciativa com rastreabilidade completa e KPIs." },
      departments: { title: "Departamentos", desc: "Orçamento, accountability e governança operacional por time." },
      crm: { title: "CRM", desc: "Conecte sinais do funil com visibilidade e planejamento de caixa." },
      inventory: { title: "Estoque", desc: "Conecte operação ao financeiro sem silos desconectados." },
      reconciliation: { title: "Conciliação", desc: "Feche o ciclo do planejado ao realizado com matching estruturado." },
      automation: { title: "Automação contábil", desc: "Reduza trabalho manual e mantenha dados consistentes entre módulos." },
      kpis: { title: "Relatórios & KPIs", desc: "Dashboards e indicadores para alinhar o time no que importa." },
      integrations: { title: "Integrações", desc: "Conecte o Spifex às suas ferramentas e padronize o backbone de dados." },
      intelligence: { title: "Inteligência", desc: "Insights acionáveis para a operação identificar riscos e oportunidades." },
      governance: { title: "Governança", desc: "RBAC, trilhas de auditoria e estrutura por organização." },
      global: { title: "Pronto para escala", desc: "Operações multi-stream desenhadas para complexidade e crescimento." },
    },
    footer: "Uma plataforma para caixa, pagamentos, governança e performance.",
    explore: "Explorar plataforma",
  },

  pricing: {
    title: "Preços",
    subtitle:
      "Escolha um plano alinhado à sua complexidade operacional. Evolua conforme governança, automação e integrações se tornam essenciais.",
    note:
      "Nota: esta página é um template de marketing. Termos comerciais finais devem ser revisados com sua equipe.",
    mostPopular: "Mais popular",
  },

  pricingTiers: {
    starter: {
      name: "Starter",
      priceLabel: "A partir de US$ 0",
      description: "Para times pequenos que precisam de clareza e estrutura rapidamente.",
      highlights: {
        0: "Planejamento de cashflow e relatórios básicos",
        1: "Visibilidade bancária essencial",
        2: "Acesso por função (padrão)",
        3: "Importação CSV para onboarding rápido",
      },
      ctaLabel: "Começar",
    },
    growth: {
      name: "Growth",
      priceLabel: "Sob consulta",
      description: "Para operações mais complexas escalando a rotina financeira.",
      highlights: {
        0: "Cashflow, liquidações e transferências",
        1: "Estrutura de ledger e governança",
        2: "Responsabilidade por projetos e departamentos",
        3: "Automações e dashboards de KPIs",
      },
      ctaLabel: "Falar com vendas",
    },
    enterprise: {
      name: "Enterprise",
      priceLabel: "Sob consulta",
      description: "Para times que exigem controles avançados, compliance e integrações.",
      highlights: {
        0: "RBAC avançado e trilhas de auditoria",
        1: "Integrações e workflows sob medida",
        2: "Operação multi organização e multi entidade",
        3: "Onboarding e suporte prioritários",
      },
      ctaLabel: "Falar conosco",
    },
  },

  home: {
    hero: {
      title: "Controle completo do fluxo de caixa, pagamentos e performance",
      subtitle:
        "Liquidações, transferências, conciliação e relatórios com KPIs. Líderes decidem com confiança.",
      emailPlaceholder: "Digite seu e-mail de trabalho",
      ctaPrimary: "Começar agora",
      disclaimer:
        "Ao continuar, você concorda em receber e-mails relacionados ao onboarding e a atualizações do produto. Você pode cancelar a qualquer momento.",
    },

    features: {
      title: "Finanças que rodam como operações",
      subtitle: "O Spifex conecta times, workflows e dados para que líderes atuem com velocidade e certeza.",
      items: {
        moneyLifecycle: {
          title: "Ciclo do dinheiro completo",
          desc: "De movimentos planejados a liquidações, transferências e conciliação. Tudo unificado ponta a ponta.",
        },
        complexity: {
          title: "Feito para complexidade operacional",
          desc: "Gerencie múltiplas fontes de receita e custos com padronização, automação e rastreabilidade.",
        },
        governance: {
          title: "Governança por padrão",
          desc: "Acesso por função, trilhas de auditoria e estruturas por organização mantêm alinhamento e conformidade.",
        },
        kpiExecution: {
          title: "Execução guiada por KPIs",
          desc: "Dashboards e indicadores mantêm o foco nas métricas que movem o negócio.",
        },
      },
    },

    modules: {
      title: "Modular por design. Unificado por dados.",
      subtitle:
        "Fluxo de caixa, bancos, contas contábeis, projetos, departamentos, CRM e Inventário. Construídos para trabalhar juntos.",
    },

    customers: {
      title: "Construído para negócios operacionalmente complexos",
      subtitle:
        "Especialmente equipes com múltiplas fontes de receita e custos, onde automação, rastreabilidade e visibilidade em tempo real são essenciais para escalar.",
      chips: {
        multiStreamRevenue: "Receitas em múltiplos fluxos",
        vendorHeavyOps: "Operação com muitos fornecedores",
        projectCostAttribution: "Custos atribuídos por projeto",
      },
    },

    cta: {
      title: "Traga clareza, velocidade e governança para suas operações financeiras.",
      subtitle: "Consolide planejamento, execução, conciliação e reporting em uma única camada operacional.",
      primary: "Criar conta",
      secondary: "Ver preços",
    },
  },
  meta: {
    siteTitle: "Spifex, operações financeiras unificadas",
    siteDescription:
      "Uma plataforma moderna de operações financeiras para dar às empresas controle completo do fluxo de caixa, pagamentos e performance operacional em um só lugar.",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },

  customersPage: {
    hero: {
      title: "Veja o que o Spifex pode fazer por você.",
      subtitle: "Crie uma conta em minutos e comece a operar com velocidade e controle.",
      emailPlaceholder: "Digite seu e-mail de trabalho",
      cta: "Começar agora",
      disclaimer:
        "O Spifex é uma plataforma de operações financeiras, não um banco. Os serviços bancários são prestados pelos seus bancos conectados.",
    },

    stories: {
      title: "Histórias de sucesso começam aqui.",
      subtitle:
        "Se você tem 10 pessoas ou 10.000, o Spifex ajuda a operar fluxo de caixa e pagamentos com confiança.",
      cards: {
        limits: {
          title: "Aumente limites com controle.",
          desc: "Operação com aprovações, visibilidade e controles prontos para escala.",
          imageSrc: "/customers/story-limits.png",
          imageAlt: "Cartão e controles de gastos",
        },
        spend: {
          title: "Simplifique seus gastos.",
          desc: "Gerencie pagamentos e reembolsos em uma única camada operacional.",
          imageSrc: "/customers/story-spend.png",
          imageAlt: "Fluxo de aprovação de gastos",
        },
        budget: {
          title: "Reinvente seu orçamento.",
          desc: "Mantenha reservas dentro de política e orçamento com ownership claro.",
          imageSrc: "/customers/story-budget.png",
          imageAlt: "Gestão de orçamento",
        },
        ap: {
          title: "Automatize contas a pagar.",
          desc: "Acelere o AP com evidências, aprovações e eventos de liquidação estruturados.",
          imageSrc: "/customers/story-ap.png",
          imageAlt: "Fatura processada com sucesso",
        },
      },
    },

    already: {
      title: "Já é cliente?",
      subtitle:
        "Conecte-se com outros clientes e operadores. Participe de sessões, programas de acesso antecipado e oportunidades de comunidade.",
      learnMore: "Saiba mais",
      images: {
        a: { src: "/customers/community-1.png", alt: "Encontro da comunidade" },
        b: { src: "/customers/community-2.png", alt: "Conversas em evento" },
        c: { src: "/customers/community-3.png", alt: "Sessão com clientes" },
      },
    },

    bottom: {
      title: "Os melhores operadores do mundo rodam no Spifex.",
      subtitle: "Junte-se a times que andam mais rápido com controle e visibilidade em tempo real.",
      emailPlaceholder: "Digite seu e-mail de trabalho",
      cta: "Começar agora",
    },
  },

  customersLearnMore: {
    title: "Fique por dentro das oportunidades de conexão.",
    intro:
      "Para saber como se conectar com outros clientes e operadores do Spifex, preencha o formulário e entraremos em contato.",

    bullets: {
      productDesign: {
        title: "Produto e Design:",
        desc: "Participe de sessões de feedback, teste recursos em beta e tenha acesso antecipado a lançamentos.",
      },
      localGroups: {
        title: "Grupos locais:",
        desc: "Entre em uma turma local para fazer networking, trocar experiências e enviar feedback.",
      },
      advocate: {
        title: "Advocacy:",
        desc: "Mostre sua marca e participe de cases, eventos ou referências.",
      },
    },

    note:
      "Preencher o formulário não é um compromisso. É um sinal de interesse. Entraremos em contato conforme surgirem oportunidades.",

    form: {
      title: "Cadastre-se para saber mais:",
      firstName: "Nome",
      lastName: "Sobrenome",
      workEmail: "E-mail de trabalho",
      company: "Nome da empresa",
      optionsLabel: "Selecione uma ou mais opções de interesse abaixo",
      options: {
        beta: "Produto e Design: Testes beta e acesso antecipado a lançamentos",
        coCreation: "Feedback de Produto e Design: Co-criação e sessões de feedback",
        userGroup: "Grupo de usuários: Turma local para networking e feedback",
        speak: "Advocacy: Palestrar em evento (presencial ou online)",
        reference: "Advocacy: Referência",
        networking: "Advocacy: Networking com outros clientes",
        other: "Outro",
      },
      submit: "Enviar",
      disclaimer:
        "Esta página é um template de marketing. O envio não cria contrato nem obrigação comercial.",
      thanksTitle: "Obrigado.",
      thanksSubtitle: "Recebemos seus dados e entraremos em contato quando houver oportunidades alinhadas ao seu interesse.",
    },
  },


} as const;

export default pt;
