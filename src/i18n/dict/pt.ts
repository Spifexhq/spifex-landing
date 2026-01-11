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

  cashflowPage: {
    hero: {
      badge: "Cashflow",
      title: "Cashflow confiável do planejamento à execução",
      subtitle:
        "Substitua planilhas por uma camada operacional única para planejamento de caixa, liquidações, conciliação e KPIs. Seu time executa com mais velocidade, ownership claro e auditabilidade.",
      bullets: {
        b1: "Previsão com premissas rastreáveis",
        b2: "Liquidações ligadas ao planejado",
        b3: "Conciliação como loop contínuo",
        b4: "KPIs conectados ao ownership",
      },
      emailPlaceholder: "Email de trabalho",
      ctaEmail: "Começar agora",
      ctaPricing: "Ver preços",
      disclaimer:
        "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
    },

    outcomes: {
      title: "Um modelo de operação de caixa, não mais uma planilha",
      subtitle:
        "Cashflow funciona quando intenção, execução e conciliação vivem juntas. É isso que o Spifex estrutura por padrão.",
      items: {
        forecast: {
          title: "Acurácia de previsão",
          desc: "Entradas e saídas planejadas viram mensuráveis, com variância acompanhada semana a semana.",
        },
        execution: {
          title: "Execução controlada",
          desc: "Pagamentos, transferências e liquidações seguem aprovações e políticas ligadas à sua estrutura operacional.",
        },
        reconciliation: {
          title: "Conciliação contínua",
          desc: "Feche o ciclo mais rápido com matching estruturado e exceções claras, sem depender do fim do mês.",
        },
        governance: {
          title: "Governança e auditabilidade",
          desc: "Acesso por função, histórico de mudanças e ownership por projeto ou departamento como padrão.",
        },
      },
    },

    howItWorks: {
      title: "Como o Cashflow funciona",
      subtitle:
        "Um único loop conecta planejamento, eventos de execução e sinais de conciliação. Isso elimina pontos cegos e acelera decisões.",
      steps: {
        plan: {
          title: "Planejar",
          desc: "Registre intenção com ownership, datas, categorias e contexto. Os lançamentos planejados viram base da previsão.",
        },
        execute: {
          title: "Executar",
          desc: "Acompanhe eventos como aprovação, liquidação parcial, transferências e ajustes com trilha completa.",
        },
        reconcile: {
          title: "Conciliar",
          desc: "Compare planejado e realizado, detecte não planejados e mantenha classificação consistente.",
        },
      },
      imageAlt: "Visão do produto Cashflow",
      imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
      ctaPrimary: "Ver preços",
      ctaSecondary: "Criar conta",
    },

    features: {
      title: "Capacidades feitas para operadores",
      subtitle: "Recursos pensados para reduzir trabalho manual e aumentar consistência e controle.",
      items: {
        planning: {
          title: "Planejamento e previsão",
          desc: "Monte um calendário de caixa confiável com ownership, categorias e templates recorrentes para operação previsível.",
        },
        settlements: {
          title: "Liquidações e transferências",
          desc: "Conecte execução ao planejado, incluindo liquidações parciais e transferências internas.",
        },
        allocations: {
          title: "Projetos e departamentos",
          desc: "Atribua custos e receitas por iniciativa e time, com visibilidade que escala com a complexidade.",
        },
        reporting: {
          title: "KPIs e relatórios",
          desc: "KPIs operacionais que geram ação, com classificação consistente ao longo do tempo e entre times.",
        },
      },
    },

    kpis: {
      title: "KPIs que orientam decisões",
      subtitle: "Evite métricas de vaidade. Acompanhe o que melhora acurácia, velocidade e governança.",
      items: {
        accuracy: { title: "Acurácia de previsão", desc: "Tendência de variância em quatro semanas com drivers claros." },
        unplanned: { title: "Percentual de não planejados", desc: "Percentual de movimentos sem vínculo com intenção planejada." },
        approvalTime: { title: "Tempo de aprovação", desc: "Tempo do criado ao aprovado e ao executado." },
        closeLag: { title: "Atraso de conciliação", desc: "Dias para casar e fechar movimentos com evidências." },
      },
    },

    bottom: {
      title: "Torne o cashflow operacional",
      subtitle:
        "Comece com uma regra simples: toda movimentação executada deve estar ligada a uma intenção planejada, ou marcada como não planejada.",
      ctaPricing: "Ver preços",
      ctaSignup: "Criar conta",
    },
  },

bankingPaymentsPage: {
  hero: {
    badge: "Banking & Payments",
    title: "Pagamentos e banking feitos para execução com controle",
    subtitle:
      "Conecte contas, aprovações e operações de pagamento em um só lugar. Reduza trabalho manual, evite erros e mantenha cada movimento auditável do pedido à liquidação.",
    bullets: {
      b1: "Centralize contas e favorecidos",
      b2: "Aprove antes de pagar",
      b3: "Pagamentos em lote com rastreabilidade",
      b4: "Concilie mais rápido com evidências claras",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Pagamentos como fluxo controlado, não como risco no fim do processo",
    subtitle:
      "Banking & Payments transforma execução em um processo operacional com políticas, trilha de auditoria e classificação consistente.",
    items: {
      control: {
        title: "Controle por políticas",
        desc: "Aprovações, funções e limites garantem que as pessoas certas autorizem os pagamentos certos.",
      },
      speed: {
        title: "Execução mais rápida",
        desc: "Padronize solicitações e lotes para reduzir repasses e diminuir erros.",
      },
      visibility: {
        title: "Visibilidade operacional",
        desc: "Saiba o que está pendente, aprovado, executado e com falha—por responsável, projeto ou departamento.",
      },
      compliance: {
        title: "Registros prontos para auditoria",
        desc: "Cada movimento mantém intenção, evidências e mudanças—sem depender de memória ou planilhas.",
      },
    },
  },

  snapshot: {
    eyebrow: "Panorama operacional",
    title: "Veja o que está acontecendo antes do dinheiro sair",
    subtitle:
      "Transforme execução em fluxo visível: pendências, aprovações, resultados de execução e exceções.",
    rows: {
      pending: "Pendentes",
      approved: "Aprovados",
      executed: "Executados",
      exceptions: "Exceções",
    },
    values: {
      pending: "Fila por responsável",
      approved: "Pronto para executar",
      executed: "Lotes rastreáveis",
      exceptions: "Próximas ações claras",
    },
    ctaPrimary: "Ver preços",
    ctaSecondary: "Explorar Cashflow",
    note: "Feito para operadores: clareza primeiro, depois velocidade.",
  },

  howItWorks: {
    title: "Como Banking & Payments funciona",
    subtitle:
      "Um fluxo simples conecta contexto de conta, políticas de aprovação e execução de pagamentos, e depois alimenta a conciliação nos relatórios.",
    steps: {
      connect: {
        title: "Conectar",
        desc: "Organize contas, favorecidos e meios de pagamento dentro da sua estrutura operacional.",
        tag: "Configure uma vez, reutilize sempre",
      },
      operate: {
        title: "Operar",
        desc: "Crie solicitações, roteie aprovações e execute lotes com rastreabilidade completa e ownership.",
        tag: "Aprovação → trilha de execução",
      },
      reconcile: {
        title: "Conciliar",
        desc: "Case movimentos do banco com a intenção de execução e mantenha classificação consistente ao longo do tempo.",
        tag: "Fechamento por evidência",
      },
    },
    imageAlt: "Visão do produto Banking & Payments",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  sideCard: {
    title: "Reduza risco sem desacelerar",
    desc: "Padronize aprovações e evidências para tornar pagamentos previsíveis, mesmo com mais volume e mais times.",
    linkPrimary: "Ver preços",
    linkSecondary: "Criar conta",
  },

  capabilities: {
    title: "Uma stack de pagamentos feita para operadores de finanças",
    subtitle: "Um sistema flexível que escala de aprovações simples até execução em alto volume com múltiplos times.",
    highlight: {
      eyebrow: "Capacidade principal",
      title: "Execução baseada em aprovação com ownership claro",
      desc: "Todo pagamento começa com intenção, passa por política e termina com evidência. Sem pontos cegos.",
      points: {
        p1: "Aprovações e limites por função",
        p2: "Execução em lote com rastreabilidade",
        p3: "Tratamento de exceções com próximas ações",
        p4: "Trilha completa de mudanças e status",
      },
      cta: "Ver preços",
      ctaSecondary: "Explorar Cashflow",
    },
    items: {
      approvals: { title: "Aprovações e políticas", desc: "Defina quem aprova o quê e aplique de forma consistente." },
      batching: { title: "Pagamentos em lote", desc: "Execute lotes repetíveis com status, tentativas e resultados claros." },
      accounts: { title: "Contas e favorecidos", desc: "Centralize contexto bancário e beneficiários para reduzir erros." },
      audit: { title: "Evidências e auditoria", desc: "Mantenha prova anexada a movimentos para revisões rápidas e confiáveis." },
      limits: { title: "Limites e fronteiras", desc: "Defina limites por função, departamento e etapa do fluxo." },
      exceptions: { title: "Exceções e correção", desc: "Antecipe falhas com responsável definido e próximos passos." },
    },
  },

  controls: {
    title: "Controles que refletem a operação financeira real",
    subtitle: "Governança já nasce no fluxo: aprovações, segregação, evidências e classificação consistente.",
    chips: {
      rbac: "RBAC",
      approvals: "Aprovações",
      auditTrail: "Trilha de auditoria",
      makerChecker: "Maker-checker",
      templates: "Templates",
      exports: "Exportações",
    },
    noteTitle: "Confiabilidade operacional, não burocracia",
    noteDesc:
      "O objetivo é errar menos e fechar mais rápido, padronizando como pagamentos são solicitados, aprovados, executados e conciliados.",
  },

  governance: {
    eyebrow: "Checklist de governança",
    title: "O mínimo para execução segura",
    subtitle: "Princípios simples que escalam com volume e quantidade de times.",
    checks: {
      ownership: "Todo pagamento tem um responsável e um caminho de aprovação claro.",
      policies: "Políticas definem limites: valores, funções e evidências obrigatórias.",
      evidence: "A execução mantém prova: quem, o quê, quando e por que mudou.",
      segregation: "Ações críticas ficam separadas por função para evitar ponto único de falha.",
    },
    ctaPrimary: "Criar conta",
    ctaSecondary: "Ver preços",
  },

  kpis: {
    title: "KPIs que melhoram a qualidade dos pagamentos",
    subtitle: "Meça velocidade e confiabilidade e remova gargalos de forma sistemática.",
    items: {
      approvalTime: { title: "Tempo de aprovação", desc: "Tempo do pedido até ficar aprovado e pronto para pagar." },
      paymentSuccess: { title: "Taxa de sucesso", desc: "Percentual executado sem retrabalho, tentativas ou exceções." },
      reworkRate: { title: "Retrabalho", desc: "Frequência de correções em favorecido, valor ou dados do pagamento." },
      closeLag: { title: "Atraso de conciliação", desc: "Dias para casar e fechar movimentos executados com evidências." },
    },
    footerNote:
      "KPIs devem gerar ação: reduzir gargalos, aumentar taxa de sucesso e encurtar atraso de conciliação.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Explorar Cashflow",
  },

  bottom: {
    title: "Torne a execução de pagamentos previsível",
    subtitle:
      "Comece com uma regra: todo pagamento deve estar ligado a uma solicitação aprovada, com ownership claro e trilha completa.",
    trustLine: "Feito para governança, velocidade e accountability sem impor um workflow rígido.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
    smallPrint: "Você pode começar simples e evoluir políticas conforme escala.",
  },
},

spendSettlementsPage: {
  hero: {
    badge: "Spend & Settlements",
    title: "Controle gastos do pedido à liquidação",
    subtitle:
      "Transforme despesas em um fluxo gerenciado: solicitações, aprovações, liquidações e conciliação. Reduza exceções, aumente compliance e mantenha cada decisão rastreável.",
    bullets: {
      b1: "Solicitações com ownership",
      b2: "Aprovações alinhadas à política",
      b3: "Liquidações com evidência clara",
      b4: "Fechamentos mais rápidos com menos exceções",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Gastos como sistema operacional, não aprovações soltas",
    subtitle:
      "Spend & Settlements ajuda o time a executar gastos com governança e velocidade, mantendo relatórios consistentes por projetos e departamentos.",
    items: {
      control: {
        title: "Execução controlada",
        desc: "Solicitações e liquidações seguem funções, limites e aprovações, sem decisões ad-hoc.",
      },
      velocity: {
        title: "Ciclo mais rápido",
        desc: "Workflows padronizados reduzem repasses e diminuem o tempo até liquidar.",
      },
      traceability: {
        title: "Rastreabilidade total",
        desc: "Cada movimento mantém intenção, aprovadores, evidências e histórico de mudanças.",
      },
      accuracy: {
        title: "Relatórios mais limpos",
        desc: "Classificação melhor na origem reduz retrabalho e melhora KPIs posteriores.",
      },
    },
  },

  howItWorks: {
    title: "Como Spend & Settlements funciona",
    subtitle:
      "Um loop simples conecta intenção, aprovação e liquidação, e depois alimenta a conciliação nos relatórios.",
    steps: {
      request: {
        title: "Solicitar",
        desc: "Registre intenção com responsável, categoria, projeto/departamento e contexto de suporte.",
      },
      approve: {
        title: "Aprovar",
        desc: "Roteie aprovações conforme políticas, limites e responsabilidade, mantendo trilha explícita.",
      },
      settle: {
        title: "Liquidar",
        desc: "Registre execução com evidências, trate parciais e gerencie exceções cedo.",
      },
    },
    imageAlt: "Visão do produto Spend & Settlements",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  features: {
    title: "Capacidades feitas para operadores",
    subtitle: "Recursos pensados para reduzir trabalho manual e aumentar controle e consistência.",
    items: {
      requests: {
        title: "Solicitações e workflows",
        desc: "Padronize solicitações de gasto com ownership, categorias e contexto estruturado.",
      },
      settlements: {
        title: "Liquidações e exceções",
        desc: "Acompanhe parciais, cancelamentos e exceções com próximas ações claras.",
      },
      allocations: {
        title: "Projetos e departamentos",
        desc: "Aloque gastos por iniciativa e time para refletir accountability real nos relatórios.",
      },
      policies: {
        title: "Políticas e auditabilidade",
        desc: "Defina limites e caminhos de aprovação e mantenha evidências anexadas para revisões confiáveis.",
      },
    },
  },

  kpis: {
    title: "KPIs que melhoram a execução de gastos",
    subtitle: "Meça gargalos e taxa de exceções e elimine-os de forma sistemática.",
    items: {
      cycleTime: { title: "Tempo de ciclo", desc: "Tempo do pedido criado até liquidado com evidência." },
      exceptions: { title: "Taxa de exceções", desc: "Percentual de liquidações que exigem retrabalho ou intervenção manual." },
      policyCompliance: { title: "Compliance de política", desc: "Parcela de gastos executados dentro de funções e limites definidos." },
      closeLag: { title: "Atraso de fechamento", desc: "Dias para conciliar e fechar movimentos após a liquidação." },
    },
  },

  bottom: {
    title: "Torne a execução de gastos previsível",
    subtitle:
      "Comece com uma regra: toda liquidação deve estar ligada a uma solicitação aprovada, com ownership e evidência embutidos.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
  },
},

ledgerPage: {
  hero: {
    badge: "Ledger",
    title: "Um plano de contas feito para clareza e auditoria",
    subtitle:
      "Defina sua estrutura financeira uma vez. Classifique com consistência entre times, aplique regras na origem e mantenha relatórios confiáveis conforme a operação escala.",
    bullets: {
      b1: "Plano de contas que reflete o negócio",
      b2: "Regras de classificação que reduzem retrabalho",
      b3: "Importações e templates para onboarding rápido",
      b4: "Estrutura pronta para auditoria com histórico e ownership",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Estrutura que torna relatórios confiáveis",
    subtitle:
      "Ledger entrega a espinha dorsal financeira: classificação consistente, rastreabilidade e um plano de contas para operação real.",
    items: {
      structure: {
        title: "Estrutura limpa",
        desc: "Plano de contas alinhado ao seu modelo operacional: projetos, departamentos e ownership.",
      },
      consistency: {
        title: "Classificação consistente",
        desc: "Regras e templates reduzem variação para classificar o mesmo evento da mesma forma sempre.",
      },
      traceability: {
        title: "Rastreabilidade por padrão",
        desc: "Histórico, ownership e contexto evitam classificações baseadas em memória.",
      },
      readiness: {
        title: "Pronto para auditoria",
        desc: "Revisões mais rápidas com estrutura que suporta evidências, controles e governança.",
      },
    },
  },

  howItWorks: {
    title: "Como o Ledger funciona",
    subtitle:
      "Desenhe a estrutura, aplique regras de classificação na origem e mantenha trilha completa para revisões e auditorias.",
    steps: {
      design: {
        title: "Desenhar o plano",
        desc: "Crie contas alinhadas às necessidades de relatório com convenções de nome e ownership.",
      },
      classify: {
        title: "Classificar com consistência",
        desc: "Aplique regras e templates para manter categorias iguais ao longo do tempo e workflows.",
      },
      audit: {
        title: "Revisar e auditar",
        desc: "Mantenha histórico e evidências para tornar auditorias e fechamentos processos controlados.",
      },
    },
    imageAlt: "Visão do produto Ledger",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  features: {
    title: "Capacidades feitas para operadores de finanças",
    subtitle:
      "Ferramentas para manter o plano de contas limpo, utilizável e aplicável em toda a organização.",
    items: {
      chart: {
        title: "Plano de contas",
        desc: "Crie e gerencie hierarquias, convenções de nome e ownership por organização.",
      },
      rules: {
        title: "Regras de classificação",
        desc: "Padronize categorização com templates e guardrails para reduzir deriva ao longo do tempo.",
      },
      imports: {
        title: "Importações e templates",
        desc: "Onboarding mais rápido com templates CSV/XLSX e importações que preservam consistência.",
      },
      controls: {
        title: "Controles e governança",
        desc: "Permissões por função e histórico ajudam a manter o ledger pronto para auditoria.",
      },
    },
  },

  kpis: {
    title: "KPIs que mantêm a estrutura saudável",
    subtitle: "Meça qualidade de classificação e velocidade de fechamento para reduzir retrabalho.",
    items: {
      coverage: { title: "Cobertura de classificação", desc: "Parcela de lançamentos mapeados ao plano de contas com consistência." },
      reclassRate: { title: "Taxa de reclassificação", desc: "Frequência de correções após a classificação inicial." },
      closeLag: { title: "Atraso de fechamento", desc: "Dias para fechar períodos com classificação consistente e evidências." },
      auditTime: { title: "Tempo de preparação para auditoria", desc: "Tempo gasto reunindo evidências e explicando classificações." },
    },
  },

  bottom: {
    title: "Construa uma estrutura financeira pronta para auditoria",
    subtitle:
      "Comece com um princípio: defina o plano e as regras uma vez e aplique na origem.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
  },
},

projectsPage: {
  hero: {
    badge: "Projects",
    title: "Rentabilidade e accountability por iniciativa",
    subtitle:
      "Atribua custos e receitas a iniciativas com rastreabilidade total. Acompanhe budgets, variância e KPIs por projeto e time com classificação consistente.",
    bullets: {
      b1: "Custos e receitas ligados a iniciativas",
      b2: "Ownership e rastreabilidade por padrão",
      b3: "Budgets, variância e burn contínuos",
      b4: "KPIs alinhados a entrega e finanças",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Iniciativas mensuráveis, não só planejadas",
    subtitle:
      "Projects transforma iniciativas em unidades operacionais com accountability, visão de rentabilidade e relatórios consistentes.",
    items: {
      accountability: {
        title: "Accountability claro",
        desc: "Ownership e regras de alocação garantem que cada movimento tenha iniciativa e time responsáveis.",
      },
      profitability: {
        title: "Visibilidade de rentabilidade",
        desc: "Entenda margem e contribuição por iniciativa, não apenas no nível da empresa.",
      },
      traceability: {
        title: "Rastreabilidade total",
        desc: "Cada custo e receita mantém contexto: quem, o quê, quando, por quê e como foi classificado.",
      },
      decisioning: {
        title: "Decisões melhores",
        desc: "Priorize, pause ou reescopo iniciativas com base em performance financeira real e tendências.",
      },
    },
  },

  howItWorks: {
    title: "Como Projects funciona",
    subtitle:
      "Defina iniciativas, aloque movimentos com consistência e acompanhe performance por KPIs e variância ao longo do tempo.",
    steps: {
      define: {
        title: "Definir iniciativas",
        desc: "Crie projetos com responsáveis, escopo, budgets e estrutura alinhados à sua operação.",
      },
      track: {
        title: "Acompanhar custos e receitas",
        desc: "Aloque movimentos a projetos na origem com classificação consistente e contexto.",
      },
      report: {
        title: "Medir e otimizar",
        desc: "Monitore rentabilidade, burn e variância e aja com ownership claro e KPIs.",
      },
    },
    imageAlt: "Visão do produto Projects",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  features: {
    title: "Capacidades feitas para iniciativas rastreáveis",
    subtitle: "Recursos que conectam sinais financeiros às iniciativas operacionais sem planilhas manuais.",
    items: {
      allocation: {
        title: "Alocação por projeto",
        desc: "Atribua gastos e receitas a iniciativas com regras e ownership consistente.",
      },
      budgets: {
        title: "Budgets e variância",
        desc: "Defina budgets por projeto e acompanhe variância continuamente, não apenas no fim do mês.",
      },
      governance: {
        title: "Governança e ownership",
        desc: "Defina responsáveis, aprovações e estrutura para escalar accountability com o time.",
      },
      reporting: {
        title: "KPIs e relatórios",
        desc: "KPIs por projeto conectados à realidade: burn, margem e tendências de performance.",
      },
    },
  },

  kpis: {
    title: "KPIs para operar iniciativas",
    subtitle: "Meça rentabilidade, velocidade e variância para gerir iniciativas de forma proativa.",
    items: {
      margin: { title: "Margem do projeto", desc: "Margem bruta ou de contribuição por projeto ao longo do tempo." },
      burnRate: { title: "Burn rate", desc: "Burn mensal e sinal de runway por iniciativa." },
      variance: { title: "Variância de budget", desc: "Planejado vs realizado com drivers e ownership." },
      closeLag: { title: "Atraso de fechamento", desc: "Dias para conciliar e fechar movimentos ligados a projetos." },
    },
  },

  bottom: {
    title: "Torne iniciativas financeiramente rastreáveis",
    subtitle:
      "Comece com uma regra simples: todo movimento deve estar ligado a um projeto ou marcado como não alocado, com ownership.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
  },
},

departmentsPage: {
  hero: {
    badge: "Departments",
    title: "Governança operacional por time com accountability real",
    subtitle:
      "Dê a cada departamento ownership de budget, limites de aprovação e KPIs mensuráveis. Controle gastos e acelere decisões com responsabilidade clara.",
    bullets: {
      b1: "Ownership de budget por time",
      b2: "Aprovações e limites por função",
      b3: "Governança guiada por políticas",
      b4: "KPIs ligados a accountability",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Times que operam com limites e visibilidade",
    subtitle:
      "Departments torna a governança prática: ownership claro, políticas consistentes e relatórios que refletem como os times gastam e entregam.",
    items: {
      ownership: {
        title: "Ownership claro",
        desc: "Cada time tem responsabilidade de budget e limites claros para tomada de decisão.",
      },
      controls: {
        title: "Controles embutidos",
        desc: "Aprovações, limites e políticas reduzem risco sem criar gargalos.",
      },
      visibility: {
        title: "Visibilidade por time",
        desc: "Veja gastos, compromissos e variância por departamento com classificação consistente.",
      },
      alignment: {
        title: "Accountability alinhado",
        desc: "KPIs e relatórios conectam resultado financeiro à responsabilidade operacional.",
      },
    },
  },

  howItWorks: {
    title: "Como Departments funciona",
    subtitle:
      "Defina ownership e limites, opere com aprovações guiadas por política e revise performance por KPIs e variância.",
    steps: {
      assign: {
        title: "Definir ownership",
        desc: "Crie departamentos, responsáveis, budgets e limites de custo alinhados à operação dos times.",
      },
      operate: {
        title: "Operar com políticas",
        desc: "Aplique aprovações e limites para que gastos sigam governança sem travar a execução.",
      },
      review: {
        title: "Revisar e otimizar",
        desc: "Acompanhe variância, não planejados e velocidade de aprovação para melhorar ao longo do tempo.",
      },
    },
    imageAlt: "Visão do produto Departments",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  features: {
    title: "Capacidades feitas para governança por time",
    subtitle: "Recursos que tornam ownership, limites e relatórios operacionais sem planilhas.",
    items: {
      budgets: {
        title: "Budgets e ownership",
        desc: "Defina budgets por departamento e acompanhe compromissos e variância continuamente.",
      },
      approvals: {
        title: "Aprovações e limites",
        desc: "Defina caminhos de aprovação e limites por função para reduzir risco e retrabalho.",
      },
      policies: {
        title: "Políticas e governança",
        desc: "Padronize regras entre times mantendo flexibilidade operacional quando necessário.",
      },
      reporting: {
        title: "KPIs e relatórios",
        desc: "Meça performance por time com KPIs ligados a accountability e consistência de classificação.",
      },
    },
  },

  kpis: {
    title: "KPIs para manter accountability por time",
    subtitle: "Meça variância, velocidade e não planejados para fortalecer governança e execução.",
    items: {
      variance: { title: "Variância de budget", desc: "Planejado vs realizado por departamento com drivers." },
      approvalTime: { title: "Tempo de aprovação", desc: "Tempo do pedido ao aprovado e ao executado, por time." },
      unplanned: { title: "Percentual de não planejados", desc: "Parcela de movimentos sem vínculo com intenção planejada por departamento." },
      closeLag: { title: "Atraso de fechamento", desc: "Dias para conciliar e fechar movimentos com evidências." },
    },
  },

  bottom: {
    title: "Torne a governança por time operacional",
    subtitle:
      "Comece com uma regra: todo movimento tem um departamento responsável, segue política e vira mensurável por KPIs.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
  },
},

crmPage: {
  hero: {
    badge: "CRM",
    title: "Conecte sinais do pipeline ao planejamento de caixa",
    subtitle:
      "Transforme seu pipeline em visibilidade de caixa. Modele probabilidade, datas esperadas e termos de pagamento para que o planejamento reflita o que é provável acontecer, não só o que você espera.",
    bullets: {
      b1: "Probabilidades do pipeline ligadas à previsão",
      b2: "Timing de caixa conforme termos",
      b3: "Handoffs conectados à execução",
      b4: "KPIs que aumentam previsibilidade",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Pipeline que vira visibilidade de caixa",
    subtitle:
      "CRM funciona melhor quando o progresso do deal informa previsão e execução. O Spifex conecta sinais do pipeline ao Cashflow por padrão.",
    items: {
      visibility: {
        title: "Visibilidade de receita",
        desc: "Veja o que deve fechar, quando pode fechar e como isso impacta o timing de caixa.",
      },
      forecasting: {
        title: "Previsão melhor",
        desc: "Use probabilidade e sinais de estágio para reduzir otimismo e melhorar acurácia.",
      },
      alignment: {
        title: "Alinhamento vendas-finanças",
        desc: "Definições comuns de estágios, termos e ownership eliminam ambiguidade no handoff.",
      },
      execution: {
        title: "Execução mais limpa",
        desc: "Handoffs para cobrança, liquidações e conciliação viram fluxo estruturado, não improviso.",
      },
    },
  },

  howItWorks: {
    title: "Como o CRM funciona",
    subtitle:
      "Capture sinais do pipeline, modele expectativa de caixa e conecte resultados a execução e planejamento.",
    steps: {
      capture: {
        title: "Capturar sinais",
        desc: "Acompanhe estágio, probabilidade, data esperada e termos-chave com ownership.",
      },
      model: {
        title: "Modelar caixa esperado",
        desc: "Traduza pipeline em entradas esperadas com timing baseado em termos e confiança.",
      },
      plan: {
        title: "Planejar e executar",
        desc: "Alimente entradas esperadas no Cashflow e conecte deals ganhos à cobrança e liquidações.",
      },
    },
    imageAlt: "Visão do produto CRM",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  features: {
    title: "Capacidades feitas para receita previsível",
    subtitle: "Recursos que conectam progresso do pipeline a planejamento, execução e resultados mensuráveis.",
    items: {
      pipeline: {
        title: "Estrutura de pipeline",
        desc: "Estágios, probabilidade e ownership criam sinais consistentes em vez de notas subjetivas.",
      },
      signals: {
        title: "Termos e timing",
        desc: "Data esperada e termos de pagamento transformam oportunidades em timeline de caixa.",
      },
      scenarios: {
        title: "Cenários de previsão",
        desc: "Modele melhor/base/pior caso com probabilidade e transições de estágio, sem planilhas.",
      },
      handoffs: {
        title: "Handoffs para execução",
        desc: "Conecte deals ganhos a cobrança, liquidações e conciliação para tornar o resultado operacional.",
      },
    },
  },

  kpis: {
    title: "KPIs que aumentam previsibilidade",
    subtitle: "Meça conversão, ciclo de vendas e acurácia para que o pipeline vire insumo confiável de planejamento.",
    items: {
      coverage: { title: "Cobertura do pipeline", desc: "Parcela da receita esperada representada no pipeline com termos e datas." },
      conversion: { title: "Conversão por estágio", desc: "Taxa de conversão entre estágios para melhorar qualidade do processo." },
      forecastAccuracy: { title: "Acurácia de previsão", desc: "Variância entre entradas esperadas e realizadas ao longo do tempo." },
      cycleTime: { title: "Ciclo de vendas", desc: "Tempo do criado ao ganho com drivers por segmento ou responsável." },
    },
  },

  bottom: {
    title: "Torne sinais do pipeline operacionais",
    subtitle:
      "Comece com uma regra: toda oportunidade tem probabilidade, timing esperado e termos, para planejar com base na realidade.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
  },
},

inventoryPage: {
  hero: {
    badge: "Inventory",
    title: "Conecte operação de estoque a resultados financeiros",
    subtitle:
      "Mantenha operação e finanças conectadas. Acompanhe movimentos, valuation e impacto na margem para que estoque deixe de ser um silo e vire parte do planejamento.",
    bullets: {
      b1: "Movimentos conectados a custos",
      b2: "Valuation ligado a caixa e margem",
      b3: "Sinais operacionais para planejamento",
      b4: "Governança e rastreabilidade por padrão",
    },
    emailPlaceholder: "Email de trabalho",
    ctaEmail: "Começar agora",
    ctaPricing: "Ver preços",
    disclaimer:
      "Ao enviar seu email, você será redirecionado para criar sua conta. Você pode ajustar preferências a qualquer momento.",
  },

  outcomes: {
    title: "Estoque que informa caixa e rentabilidade",
    subtitle:
      "Inventory gera valor quando saldo, movimentos e valuation se conectam a relatórios e planejamento. O Spifex mantém tudo na mesma camada operacional.",
    items: {
      visibility: {
        title: "Visibilidade operacional",
        desc: "Veja o que você tem, onde está e como muda, sem planilhas desconectadas.",
      },
      costing: {
        title: "Clareza de custo e margem",
        desc: "Conecte movimentos a custos e impacto na margem para que rentabilidade reflita a realidade.",
      },
      planning: {
        title: "Sinais para planejamento",
        desc: "Use inputs operacionais para melhorar previsão, compras e decisões de timing de caixa.",
      },
      governance: {
        title: "Governança e rastreabilidade",
        desc: "Cada movimento mantém ownership, evidências e histórico para revisões confiáveis.",
      },
    },
  },

  howItWorks: {
    title: "Como Inventory funciona",
    subtitle:
      "Defina itens e locais, acompanhe movimentos no dia a dia e reconcilie valuation em relatórios e planejamento.",
    steps: {
      define: {
        title: "Definir itens e estrutura",
        desc: "Organize itens, unidades, locais e categorias para mapear operação em finanças com clareza.",
      },
      move: {
        title: "Acompanhar movimentos",
        desc: "Registre entradas, saídas, ajustes e transferências com contexto e ownership.",
      },
      reconcile: {
        title: "Conciliar valuation",
        desc: "Conecte saldo e movimentos ao valuation e aos relatórios para manter finanças prontas para auditoria.",
      },
    },
    imageAlt: "Visão do produto Inventory",
    imageCaption: "Exemplo de visual. Substitua por capturas reais quando estiverem disponíveis.",
    ctaPrimary: "Ver preços",
    ctaSecondary: "Criar conta",
  },

  features: {
    title: "Capacidades feitas para operação conectada",
    subtitle: "Recursos que ligam eventos de estoque a resultados financeiros sem silos.",
    items: {
      items: {
        title: "Itens e estrutura",
        desc: "Organize itens, locais, categorias e ownership para manter consistência operacional.",
      },
      movements: {
        title: "Movimentos e rastreabilidade",
        desc: "Acompanhe entradas, saídas, transferências e ajustes com evidências e histórico.",
      },
      valuation: {
        title: "Valuation e custos",
        desc: "Conecte movimentos a custos para manter margem e relatórios ancorados no estado real do estoque.",
      },
      integrations: {
        title: "Workflows conectados",
        desc: "Conecte compras, vendas e sinais operacionais ao Cashflow, projetos e departamentos.",
      },
    },
  },

  kpis: {
    title: "KPIs que conectam estoque a resultados",
    subtitle: "Meça acurácia, giro e perdas para transformar trabalho operacional em confiabilidade financeira.",
    items: {
      stockAccuracy: { title: "Acurácia de estoque", desc: "Diferença entre estoque registrado e contagens verificadas ao longo do tempo." },
      turnover: { title: "Giro de estoque", desc: "Velocidade com que o estoque vira venda ou consumo por categoria." },
      shrinkage: { title: "Taxa de perdas", desc: "Taxa de perdas e ajustes com drivers e accountability." },
      marginImpact: { title: "Impacto na margem", desc: "Como valuation e custos de estoque afetam a rentabilidade." },
    },
  },

  bottom: {
    title: "Pare de operar estoque como silo",
    subtitle:
      "Comece com uma regra: todo movimento de estoque é rastreável e se conecta a valuation e relatórios.",
    ctaPricing: "Ver preços",
    ctaSignup: "Criar conta",
  },
},



} as const;

export default pt;
