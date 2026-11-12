import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const pt: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Fluxo de caixa",
    preview: {
      label: "Fluxo de caixa",
      metric: {
        label: "Posição de caixa",
        value: "482,9 mil €",
        note: "+8,2% face ao plano",
      },
      secondary: {
        label: "Planeado",
        value: "164,2 mil €",
      },
      chartLabel: "Planeado vs liquidado",
      rows: [
        {
          label: "Salários",
          value: "28 900 €",
          status: "positive",
        },
        {
          label: "Pagamento a fornecedores",
          value: "12 400 €",
          status: "warning",
        },
        {
          label: "Liquidação de cartão",
          value: "6 120 €",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Saiba o que entra, o que sai e o que ainda está pendente",
      subtitle:
        "Planeie registos, liquide-os em contas bancárias e mantenha cada movimento associado à categoria, ao projeto ou ao departamento responsável.",
      bullets: [
        "Registos planeados e liquidados numa só vista",
        "Liquidações parciais e transferências internas",
        "Categorias, projetos e departamentos",
        "Filtros, vistas guardadas e anexos",
      ],
      outcomes: [
        {
          title: "Veja o plano de caixa",
          desc: "Crie registos planeados com datas, categorias e responsáveis para que o mês comece a partir de uma base clara.",
        },
        {
          title: "Liquide em contas reais",
          desc: "Registe liquidações totais ou parciais em contas bancárias e mantenha o saldo em aberto atualizado.",
        },
        {
          title: "Mantenha as transferências separadas",
          desc: "Mova dinheiro entre contas sem inflacionar os totais de receita ou despesa.",
        },
        {
          title: "Reporte a partir dos mesmos dados",
          desc: "Filtre posições pendentes e liquidadas por categoria, projeto ou departamento.",
        },
      ],
      steps: [
        {
          title: "Crie o workspace",
          desc: "Escolha o país, a moeda e o tipo de workspace. Comece no plano Free.",
        },
        {
          title: "Adicione contas e categorias",
          desc: "Adicione as contas bancárias e as categorias que a sua equipa já utiliza.",
        },
        {
          title: "Planeie, liquide e reveja",
          desc: "Planeie registos, liquide-os e reveja a posição sem reconstruir uma folha de cálculo.",
        },
      ],
      capabilitiesTitle: "Os blocos de construção de um plano de caixa",
      capabilitiesSubtitle:
        "Cada registo mantém o montante, as datas, a responsabilidade e o histórico de liquidações num só lugar.",
      capabilities: [
        {
          title: "Registos planeados",
          desc: "Registe o montante, a data de vencimento, a categoria, o projeto e a contraparte.",
        },
        {
          title: "Liquidações",
          desc: "Liquide total ou parcialmente numa conta bancária, com um saldo em aberto sempre atualizado.",
        },
        {
          title: "Transferências internas",
          desc: "Mova fundos entre contas sem alterar os totais de receita ou despesa.",
        },
        {
          title: "Afetações",
          desc: "Divida registos entre departamentos e associe-os a projetos.",
        },
        {
          title: "Filtros e vistas guardadas",
          desc: "Guarde os filtros e as colunas que a sua equipa mais utiliza.",
        },
        {
          title: "Anexos",
          desc: "Mantenha os documentos de suporte junto do registo a que pertencem.",
        },
      ],
      finalTitle: "Comece com um plano de caixa claro",
      finalSubtitle:
        "Crie um workspace gratuito e adicione as contas e categorias que já utiliza.",
    },
  },
  banking: {
    name: "Banking e pagamentos",
    preview: {
      label: "Banking",
      metric: {
        label: "Contas",
        value: "4",
        note: "2 moedas",
      },
      secondary: {
        label: "Linhas de extrato",
        value: "186",
      },
      chartLabel: "Conciliado vs pendente",
      rows: [
        {
          label: "Conta operacional",
          value: "Conciliado",
          status: "positive",
        },
        {
          label: "Conta fiscal",
          value: "12 pendentes",
          status: "warning",
        },
        {
          label: "Conta de reserva",
          value: "Conciliado",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Contas bancárias e extratos no mesmo workspace",
      subtitle:
        "Mantenha os dados das contas, os extratos importados e as decisões de correspondência juntos, para que a reconciliação não fique numa folha de cálculo à parte.",
      bullets: [
        "Contas bancárias e saldos",
        "Importação e leitura de extratos",
        "Correspondências sugeridas",
        "Revisão da reconciliação",
      ],
      outcomes: [
        {
          title: "Uma única lista de contas",
          desc: "Mantenha o nome do banco, o tipo de conta, a moeda e o saldo no workspace.",
        },
        {
          title: "Importe extratos",
          desc: "Carregue um extrato e reveja as linhas lidas antes de as confirmar.",
        },
        {
          title: "Faça corresponder movimentos",
          desc: "Use as correspondências sugeridas entre linhas de extrato e registos de fluxo de caixa e confirme.",
        },
        {
          title: "Reveja exceções",
          desc: "Veja as linhas sem correspondência e pendentes em vez de as procurar em ficheiros.",
        },
      ],
      steps: [
        {
          title: "Adicione uma conta bancária",
          desc: "Defina a instituição, o tipo de conta, a moeda e os dados iniciais.",
        },
        {
          title: "Importe um extrato",
          desc: "Carregue o ficheiro e reveja as linhas lidas antes de importar.",
        },
        {
          title: "Faça corresponder e reconcilie",
          desc: "Confirme as correspondências sugeridas e mantenha as exceções visíveis.",
        },
      ],
      capabilitiesTitle: "Dados bancários, sem a folha de cálculo paralela",
      capabilitiesSubtitle:
        "Contas, linhas de extrato e decisões de correspondência mantêm-se ligadas ao fluxo de caixa que explicam.",
      capabilities: [
        {
          title: "Contas bancárias",
          desc: "Instituição, tipo, moeda e dados da conta por workspace.",
        },
        {
          title: "Importação de extratos",
          desc: "Carregue e leia extratos com um passo de revisão antes da confirmação.",
        },
        {
          title: "Correspondências sugeridas",
          desc: "Classifique linhas de extrato face a registos e padrões reutilizáveis.",
        },
        {
          title: "Revisão da reconciliação",
          desc: "Mantenha as linhas pendentes, conciliadas e sem correspondência visíveis.",
        },
        {
          title: "Ligações de liquidação",
          desc: "Associe os movimentos liquidados à conta bancária que os recebeu.",
        },
        {
          title: "Funções no workspace",
          desc: "Mantenha os dados das contas limitados ao workspace e aos seus membros.",
        },
      ],
      finalTitle: "Traga o banking para o mesmo workspace",
      finalSubtitle: "Comece grátis e adicione a sua primeira conta bancária.",
    },
  },
  spend: {
    name: "Despesas e liquidações",
    preview: {
      label: "Despesas",
      metric: {
        label: "Saídas pendentes",
        value: "38,4 mil €",
        note: "14 registos",
      },
      secondary: {
        label: "Liquidado este mês",
        value: "96,2 mil €",
      },
      chartLabel: "Liquidado vs pendente",
      rows: [
        {
          label: "Viagens",
          value: "2 840 €",
          status: "positive",
        },
        {
          label: "Software",
          value: "1 290 €",
          status: "warning",
        },
        {
          label: "Escritório",
          value: "640 €",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Acompanhe as despesas de saída e liquide-as face ao plano",
      subtitle:
        "Registe saídas, afete-as a categorias, projetos ou departamentos e liquide-as total ou parcialmente.",
      bullets: [
        "Saídas com datas de vencimento",
        "Liquidações parciais",
        "Afetação a projetos e departamentos",
        "Vistas de saldo pendente",
      ],
      outcomes: [
        {
          title: "Veja a despesa comprometida",
          desc: "Registe saídas com datas de vencimento, categorias e responsáveis.",
        },
        {
          title: "Liquide em partes",
          desc: "Aplique uma ou mais liquidações a um registo e acompanhe o montante restante.",
        },
        {
          title: "Afete o custo",
          desc: "Divida a despesa entre departamentos e associe-a a projetos.",
        },
        {
          title: "Reveja o que está em aberto",
          desc: "Filtre despesas pendentes e liquidadas sem exportar dados.",
        },
      ],
      steps: [
        {
          title: "Registe a saída",
          desc: "Registe o montante, a data de vencimento, a categoria, o projeto e a contraparte.",
        },
        {
          title: "Liquide na conta",
          desc: "Aplique uma ou mais liquidações e mantenha o saldo em aberto atualizado.",
        },
        {
          title: "Reveja o saldo",
          desc: "Filtre despesas liquidadas e pendentes por categoria, projeto ou departamento.",
        },
      ],
      capabilitiesTitle: "Despesa que se mantém ligada à liquidação",
      capabilitiesSubtitle:
        "As saídas mantêm a afetação e o histórico de liquidações em vez de acabarem numa folha separada.",
      capabilities: [
        {
          title: "Saídas",
          desc: "Montante, data de vencimento, categoria, projeto e contraparte.",
        },
        {
          title: "Liquidações parciais",
          desc: "Liquide um registo através de vários pagamentos.",
        },
        {
          title: "Afetações",
          desc: "Atribua percentagens a departamentos e associe projetos.",
        },
        {
          title: "Vistas de valores pendentes",
          desc: "Veja a despesa em aberto e liquidada com filtros guardados.",
        },
      ],
      finalTitle: "Mantenha a despesa e a liquidação ligadas",
      finalSubtitle: "Comece grátis e registe a sua primeira saída.",
    },
  },
  ledger: {
    name: "Livro razão",
    preview: {
      label: "Livro razão",
      metric: {
        label: "Contas de lançamento",
        value: "128",
        note: "6 contas de agregação",
      },
      secondary: {
        label: "Lançamentos no diário",
        value: "1 842",
      },
      chartLabel: "Atividade de lançamento",
      rows: [
        {
          label: "Receita · 4010",
          value: "Equilibrado",
          status: "positive",
        },
        {
          label: "Salários · 6200",
          value: "Lançado",
          status: "positive",
        },
        {
          label: "Suspense · 9999",
          value: "Rever",
          status: "warning",
        },
      ],
    },
    copy: {
      title: "Um plano de contas criado para relatórios consistentes",
      subtitle:
        "Estruture contas de agregação e de lançamento, registe lançamentos no diário e mantenha os períodos e as dimensões sob controlo.",
      bullets: [
        "Contas de agregação e de lançamento",
        "Lançamentos no diário e livros",
        "Períodos fiscais",
        "Dimensões e políticas de lançamento",
      ],
      outcomes: [
        {
          title: "Estruture o plano",
          desc: "Crie contas de agregação e de lançamento com códigos e saldos normais.",
        },
        {
          title: "Registe lançamentos",
          desc: "Lance lançamentos no diário com linhas, livros e períodos fiscais.",
        },
        {
          title: "Mantenha as dimensões",
          desc: "Defina dimensões e valores permitidos para a estrutura de relatórios.",
        },
        {
          title: "Controle o lançamento",
          desc: "Use políticas de lançamento e controlos de lançamento manual quando necessário.",
        },
      ],
      steps: [
        {
          title: "Desenhe o plano",
          desc: "Crie as contas de agregação e de lançamento de que os seus relatórios precisam.",
        },
        {
          title: "Registe lançamentos",
          desc: "Lance lançamentos no diário com o livro, o período e as dimensões corretas.",
        },
        {
          title: "Reveja os períodos",
          desc: "Mantenha os períodos fiscais e o estado dos lançamentos sob controlo.",
        },
      ],
      capabilitiesTitle: "Uma estrutura contabilística sólida",
      capabilitiesSubtitle:
        "O plano, os diários, os períodos e as dimensões partilham um único workspace em vez de divergirem.",
      capabilities: [
        {
          title: "Plano de contas",
          desc: "Contas de agregação e de lançamento com códigos, tipos e saldos normais.",
        },
        {
          title: "Lançamentos no diário",
          desc: "Lançamentos com várias linhas, livros, períodos e estado.",
        },
        {
          title: "Períodos fiscais",
          desc: "Abra e feche períodos para cada livro contabilístico.",
        },
        {
          title: "Dimensões",
          desc: "Defina dimensões, valores e regras ao nível da conta.",
        },
        {
          title: "Políticas de lançamento",
          desc: "Controle a forma como os lançamentos são registados e que contas permitem lançamento manual.",
        },
        {
          title: "Controlos de contas",
          desc: "Contas de controlo bancário e proteções de classificação.",
        },
      ],
      finalTitle: "Construa um livro razão que consegue defender",
      finalSubtitle:
        "Comece grátis e molde o plano de contas aos seus relatórios.",
    },
  },
  projects: {
    name: "Projetos",
    preview: {
      label: "Projetos",
      metric: {
        label: "Projetos ativos",
        value: "24",
        note: "6 tipos",
      },
      secondary: {
        label: "Registos associados",
        value: "312",
      },
      chartLabel: "Planeado vs liquidado por projeto",
      rows: [
        {
          label: "Implementação",
          value: "420 mil €",
          status: "positive",
        },
        {
          label: "Migração",
          value: "186 mil €",
          status: "warning",
        },
        {
          label: "Suporte",
          value: "96 mil €",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Veja custos e receitas por projeto",
      subtitle:
        "Crie projetos, associe-lhes registos de fluxo de caixa e compare montantes planeados, liquidados e pendentes num único filtro.",
      bullets: [
        "Registos de projeto com códigos e tipos",
        "Associação de registos ao projeto",
        "Afetações a departamentos",
        "Vistas específicas por projeto",
      ],
      outcomes: [
        {
          title: "Crie um registo de projeto",
          desc: "Nome, código, tipo e descrição com estado ativo.",
        },
        {
          title: "Associe registos",
          desc: "Ligue registos de fluxo de caixa planeados e liquidados ao projeto.",
        },
        {
          title: "Afete departamentos",
          desc: "Divida o custo de um registo entre departamentos.",
        },
        {
          title: "Reveja o projeto",
          desc: "Filtre registos e montantes pendentes por projeto.",
        },
      ],
      steps: [
        {
          title: "Crie o projeto",
          desc: "Adicione um nome, um código e um tipo para que o projeto seja fácil de identificar.",
        },
        {
          title: "Associe registos",
          desc: "Ligue os registos de fluxo de caixa que pertencem ao projeto.",
        },
        {
          title: "Reveja a posição",
          desc: "Filtre montantes planeados, liquidados e pendentes por projeto.",
        },
      ],
      capabilitiesTitle: "Contexto de projeto em cada movimento",
      capabilitiesSubtitle:
        "Registos, divisões por departamento e estado de liquidação mantêm-se ligados ao projeto responsável.",
      capabilities: [
        {
          title: "Registos de projeto",
          desc: "Nome, código, tipo, descrição e estado.",
        },
        {
          title: "Ligações a registos",
          desc: "Associe registos de fluxo de caixa diretamente a um projeto.",
        },
        {
          title: "Divisão por departamento",
          desc: "Afete percentagens de um registo entre departamentos.",
        },
        {
          title: "Filtros de projeto",
          desc: "Reveja registos, liquidações e montantes em aberto por projeto.",
        },
      ],
      finalTitle: "Torne o desempenho dos projetos visível",
      finalSubtitle: "Comece grátis e crie o seu primeiro projeto.",
    },
  },
  departments: {
    name: "Departamentos",
    preview: {
      label: "Departamentos",
      metric: {
        label: "Departamentos",
        value: "8",
        note: "3 centros de custo",
      },
      secondary: {
        label: "Registos afetados",
        value: "246",
      },
      chartLabel: "Registos por departamento",
      rows: [
        {
          label: "Operações",
          value: "42%",
          status: "positive",
        },
        {
          label: "Vendas",
          value: "31%",
          status: "warning",
        },
        {
          label: "Engenharia",
          value: "27%",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Atribua cada movimento à equipa responsável",
      subtitle:
        "Crie departamentos, afete percentagens dos registos e reveja os números por equipa sem reconstruir o relatório.",
      bullets: [
        "Registos de departamento",
        "Afetações por percentagem",
        "Filtros de registos por departamento",
        "Vistas guardadas",
      ],
      outcomes: [
        {
          title: "Crie o departamento",
          desc: "Nome, código e estado ativo para cada centro de custo.",
        },
        {
          title: "Afete registos",
          desc: "Atribua um ou mais departamentos a um registo com percentagens.",
        },
        {
          title: "Filtre por equipa",
          desc: "Reveja registos e liquidações de um departamento de cada vez.",
        },
        {
          title: "Mantenha a responsabilidade visível",
          desc: "Veja que equipa é responsável pela despesa no mesmo workspace.",
        },
      ],
      steps: [
        {
          title: "Defina os departamentos",
          desc: "Adicione os nomes e códigos que as suas equipas já utilizam.",
        },
        {
          title: "Afete registos",
          desc: "Divida um registo entre departamentos com percentagens.",
        },
        {
          title: "Reveja os números",
          desc: "Filtre registos de fluxo de caixa por departamento e reveja a posição.",
        },
      ],
      capabilitiesTitle: "Uma vista de centros de custo em que pode confiar",
      capabilitiesSubtitle:
        "As divisões por departamento mantêm-se ligadas ao registo em vez de serem reconstruídas na altura do relatório.",
      capabilities: [
        {
          title: "Registos de departamento",
          desc: "Nome, código e estado para cada centro de custo.",
        },
        {
          title: "Afetação por percentagem",
          desc: "Divida um registo entre departamentos com percentagens definidas.",
        },
        {
          title: "Filtros de registos",
          desc: "Filtre registos de fluxo de caixa por departamento.",
        },
        {
          title: "Vistas guardadas",
          desc: "Mantenha as colunas e os filtros que a sua equipa utiliza.",
        },
      ],
      finalTitle: "Dê um responsável a cada movimento",
      finalSubtitle: "Comece grátis e defina o seu primeiro departamento.",
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
        label: "Ativas",
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
          label: "Fornecedores",
          value: "46",
          status: "positive",
        },
        {
          label: "Prestadores de serviços",
          value: "18",
          status: "neutral",
        },
      ],
    },
    copy: {
      title: "Um único diretório para cada contraparte",
      subtitle:
        "Mantenha clientes, fornecedores, colaboradores, prestadores de serviços e parceiros num só workspace e ligue-os aos registos de fluxo de caixa com que se relacionam.",
      bullets: [
        "Clientes, fornecedores e parceiros",
        "Dados de contacto e fiscais",
        "Tipos de entidade e estado",
        "Ligações a registos de fluxo de caixa",
      ],
      outcomes: [
        {
          title: "Um único diretório",
          desc: "Guarde cada contraparte uma só vez, com um tipo de entidade claro.",
        },
        {
          title: "Dados de contacto",
          desc: "Mantenha o email, o telefone e a morada junto do registo.",
        },
        {
          title: "Dados fiscais e bancários",
          desc: "Guarde números de contribuinte e dados bancários quando relevante.",
        },
        {
          title: "Ligue o livro razão",
          desc: "Referencie a entidade nos registos de fluxo de caixa que pagou ou recebeu.",
        },
      ],
      steps: [
        {
          title: "Adicione a entidade",
          desc: "Escolha o tipo de entidade e adicione o nome e os dados de contacto.",
        },
        {
          title: "Classifique a relação",
          desc: "Marque-a como cliente, fornecedor, colaborador, prestador de serviços, parceiro ou outro tipo.",
        },
        {
          title: "Ligue registos",
          desc: "Referencie a entidade nos registos de fluxo de caixa com que se relaciona.",
        },
      ],
      capabilitiesTitle: "Dados de contraparte que continuam úteis",
      capabilitiesSubtitle:
        "Um único registo para as pessoas e organizações por trás do seu fluxo de caixa, em vez de uma lista de contactos numa ferramenta à parte.",
      capabilities: [
        {
          title: "Registos de entidade",
          desc: "Clientes, fornecedores, colaboradores, prestadores de serviços, parceiros e mais.",
        },
        {
          title: "Dados de contacto",
          desc: "Email, telefone e morada num único registo.",
        },
        {
          title: "Campos fiscais e bancários",
          desc: "Números de contribuinte e dados bancários opcionais.",
        },
        {
          title: "Ligações a registos",
          desc: "Referencie a contraparte nos registos de fluxo de caixa.",
        },
      ],
      finalTitle: "Mantenha as contrapartes num só lugar",
      finalSubtitle: "Comece grátis e adicione a sua primeira entidade.",
    },
  },
  inventory: {
    name: "Inventário",
    preview: {
      label: "Inventário",
      metric: {
        label: "Artigos",
        value: "1 284",
        note: "42 categorias",
      },
      secondary: {
        label: "Unidades em stock",
        value: "8 960",
      },
      chartLabel: "Artigos por tipo de unidade",
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
      title: "Dados mestre de artigos para stock e serviços",
      subtitle:
        "Mantenha SKUs, unidades de medida e quantidades em stock numa única lista e associe os artigos aos registos de fluxo de caixa que os movimentam.",
      bullets: [
        "SKU e nome do artigo",
        "Unidade de medida",
        "Quantidade em stock",
        "Ligações a registos de fluxo de caixa",
      ],
      outcomes: [
        {
          title: "Uma única lista de artigos",
          desc: "Guarde cada SKU uma só vez, com nome e descrição.",
        },
        {
          title: "Unidades e quantidades",
          desc: "Acompanhe a unidade de medida e a quantidade em stock.",
        },
        {
          title: "Controlo de estado",
          desc: "Desative artigos sem eliminar o seu histórico.",
        },
        {
          title: "Ligue ao fluxo de caixa",
          desc: "Associe linhas de inventário aos registos que movimentam stock.",
        },
      ],
      steps: [
        {
          title: "Crie o artigo",
          desc: "Adicione o SKU, o nome e a descrição.",
        },
        {
          title: "Defina a unidade e a quantidade",
          desc: "Escolha a unidade de medida e registe a quantidade em stock.",
        },
        {
          title: "Associe-o aos registos",
          desc: "Referencie o artigo nos registos de fluxo de caixa que o movimentam.",
        },
      ],
      capabilitiesTitle: "Dados de artigos limpos, ligados às finanças",
      capabilitiesSubtitle:
        "Um cadastro de artigos simples que se mantém ligado ao fluxo de caixa que afeta.",
      capabilities: [
        {
          title: "Registos de artigos",
          desc: "SKU, nome, descrição e estado ativo.",
        },
        {
          title: "Unidades de medida",
          desc: "Unidades em texto livre, como peças, quilogramas ou horas.",
        },
        {
          title: "Quantidade em stock",
          desc: "Mantenha a quantidade atual em cada artigo.",
        },
        {
          title: "Ligações a registos",
          desc: "Referencie artigos nos registos de fluxo de caixa.",
        },
      ],
      finalTitle: "Mantenha os dados dos artigos limpos",
      finalSubtitle: "Comece grátis e adicione o seu primeiro SKU.",
    },
  },
};

export default pt;
