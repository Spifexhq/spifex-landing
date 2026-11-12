import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const ptBR: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Fluxo de caixa",
    preview: {
      label: "Fluxo de caixa",
      metric: {
        label: "Posição de caixa",
        value: "€ 482,9 mil",
        note: "+8,2% vs. plano",
      },
      secondary: {
        label: "Planejado",
        value: "€ 164,2 mil",
      },
      chartLabel: "Planejado vs. liquidado",
      rows: [
        {
          label: "Folha de pagamento",
          value: "€ 28.900",
          status: "positive",
        },
        {
          label: "Pagamento a fornecedores",
          value: "€ 12.400",
          status: "warning",
        },
        {
          label: "Liquidação de cartão",
          value: "€ 6.120",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Saiba o que entra, o que sai e o que ainda está pendente",
      subtitle:
        "Planeje lançamentos, liquide-os em contas bancárias e mantenha cada movimento vinculado à categoria, ao projeto ou ao departamento responsável.",
      bullets: [
        "Lançamentos planejados e liquidados em uma só visão",
        "Liquidações parciais e transferências internas",
        "Categorias, projetos e departamentos",
        "Filtros, visões salvas e anexos",
      ],
      outcomes: [
        {
          title: "Veja o plano de caixa",
          desc: "Crie lançamentos planejados com datas, categorias e responsáveis para que o mês comece a partir de uma base clara.",
        },
        {
          title: "Liquide em contas reais",
          desc: "Registre liquidações totais ou parciais em contas bancárias e mantenha o saldo em aberto atualizado.",
        },
        {
          title: "Mantenha as transferências separadas",
          desc: "Mova dinheiro entre contas sem inflar os totais de receita ou despesa.",
        },
        {
          title: "Relate a partir dos mesmos dados",
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
          desc: "Adicione as contas bancárias e as categorias que sua equipe já usa.",
        },
        {
          title: "Planeje, liquide e revise",
          desc: "Planeje lançamentos, liquide-os e revise a posição sem reconstruir uma planilha.",
        },
      ],
      capabilitiesTitle: "Os blocos de construção de um plano de caixa",
      capabilitiesSubtitle:
        "Cada lançamento mantém o valor, as datas, a responsabilidade e o histórico de liquidações em um só lugar.",
      capabilities: [
        {
          title: "Lançamentos planejados",
          desc: "Registre o valor, a data de vencimento, a categoria, o projeto e a contraparte.",
        },
        {
          title: "Liquidações",
          desc: "Liquide total ou parcialmente em uma conta bancária, com um saldo em aberto sempre atualizado.",
        },
        {
          title: "Transferências internas",
          desc: "Mova recursos entre contas sem alterar os totais de receita ou despesa.",
        },
        {
          title: "Alocações",
          desc: "Divida lançamentos entre departamentos e vincule-os a projetos.",
        },
        {
          title: "Filtros e visões salvas",
          desc: "Salve os filtros e as colunas que sua equipe mais usa.",
        },
        {
          title: "Anexos",
          desc: "Mantenha os documentos de apoio junto do lançamento a que pertencem.",
        },
      ],
      finalTitle: "Comece com um plano de caixa claro",
      finalSubtitle:
        "Crie um workspace gratuito e adicione as contas e categorias que você já usa.",
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
      chartLabel: "Conciliado vs. pendente",
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
        "Mantenha os dados das contas, os extratos importados e as decisões de correspondência juntos, para que a conciliação não fique em uma planilha à parte.",
      bullets: [
        "Contas bancárias e saldos",
        "Importação e leitura de extratos",
        "Correspondências sugeridas",
        "Revisão da conciliação",
      ],
      outcomes: [
        {
          title: "Uma única lista de contas",
          desc: "Mantenha o nome do banco, o tipo de conta, a moeda e o saldo no workspace.",
        },
        {
          title: "Importe extratos",
          desc: "Envie um extrato e revise as linhas lidas antes de confirmá-las.",
        },
        {
          title: "Combine movimentos",
          desc: "Use as correspondências sugeridas entre linhas de extrato e lançamentos de fluxo de caixa e confirme.",
        },
        {
          title: "Revise exceções",
          desc: "Veja as linhas sem correspondência e pendentes em vez de procurá-las em arquivos.",
        },
      ],
      steps: [
        {
          title: "Adicione uma conta bancária",
          desc: "Defina a instituição, o tipo de conta, a moeda e os dados iniciais.",
        },
        {
          title: "Importe um extrato",
          desc: "Envie o arquivo e revise as linhas lidas antes de importar.",
        },
        {
          title: "Combine e concilie",
          desc: "Confirme as correspondências sugeridas e mantenha as exceções visíveis.",
        },
      ],
      capabilitiesTitle: "Dados bancários, sem a planilha paralela",
      capabilitiesSubtitle:
        "Contas, linhas de extrato e decisões de correspondência continuam ligadas ao fluxo de caixa que explicam.",
      capabilities: [
        {
          title: "Contas bancárias",
          desc: "Instituição, tipo, moeda e dados da conta por workspace.",
        },
        {
          title: "Importação de extratos",
          desc: "Envie e leia extratos com uma etapa de revisão antes da confirmação.",
        },
        {
          title: "Correspondências sugeridas",
          desc: "Classifique linhas de extrato em relação a lançamentos e padrões reutilizáveis.",
        },
        {
          title: "Revisão da conciliação",
          desc: "Mantenha as linhas pendentes, conciliadas e sem correspondência visíveis.",
        },
        {
          title: "Vínculos de liquidação",
          desc: "Conecte movimentos liquidados à conta bancária que os recebeu.",
        },
        {
          title: "Funções no workspace",
          desc: "Mantenha os dados das contas restritos ao workspace e aos seus membros.",
        },
      ],
      finalTitle: "Traga o banking para o mesmo workspace",
      finalSubtitle: "Comece grátis e adicione sua primeira conta bancária.",
    },
  },
  spend: {
    name: "Gastos e liquidações",
    preview: {
      label: "Gastos",
      metric: {
        label: "Saídas pendentes",
        value: "€ 38,4 mil",
        note: "14 lançamentos",
      },
      secondary: {
        label: "Liquidado neste mês",
        value: "€ 96,2 mil",
      },
      chartLabel: "Liquidado vs. pendente",
      rows: [
        {
          label: "Viagens",
          value: "€ 2.840",
          status: "positive",
        },
        {
          label: "Software",
          value: "€ 1.290",
          status: "warning",
        },
        {
          label: "Escritório",
          value: "€ 640",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Acompanhe os gastos de saída e liquide-os em relação ao plano",
      subtitle:
        "Registre saídas, aloque-as a categorias, projetos ou departamentos e liquide-as total ou parcialmente.",
      bullets: [
        "Saídas com datas de vencimento",
        "Liquidações parciais",
        "Alocação a projetos e departamentos",
        "Visões de saldo pendente",
      ],
      outcomes: [
        {
          title: "Veja o gasto comprometido",
          desc: "Registre saídas com datas de vencimento, categorias e responsáveis.",
        },
        {
          title: "Liquide em partes",
          desc: "Aplique uma ou mais liquidações a um lançamento e acompanhe o valor restante.",
        },
        {
          title: "Aloque o custo",
          desc: "Divida o gasto entre departamentos e vincule-o a projetos.",
        },
        {
          title: "Revise o que está em aberto",
          desc: "Filtre gastos pendentes e liquidados sem exportar dados.",
        },
      ],
      steps: [
        {
          title: "Registre a saída",
          desc: "Registre o valor, a data de vencimento, a categoria, o projeto e a contraparte.",
        },
        {
          title: "Liquide na conta",
          desc: "Aplique uma ou mais liquidações e mantenha o saldo em aberto atualizado.",
        },
        {
          title: "Revise o saldo",
          desc: "Filtre gastos liquidados e pendentes por categoria, projeto ou departamento.",
        },
      ],
      capabilitiesTitle: "Gasto que permanece conectado à liquidação",
      capabilitiesSubtitle:
        "As saídas mantêm a alocação e o histórico de liquidações em vez de terminarem em uma planilha separada.",
      capabilities: [
        {
          title: "Saídas",
          desc: "Valor, data de vencimento, categoria, projeto e contraparte.",
        },
        {
          title: "Liquidações parciais",
          desc: "Liquide um lançamento em vários pagamentos.",
        },
        {
          title: "Alocações",
          desc: "Atribua percentuais a departamentos e vincule projetos.",
        },
        {
          title: "Visões de valores pendentes",
          desc: "Veja o gasto em aberto e liquidado com filtros salvos.",
        },
      ],
      finalTitle: "Mantenha o gasto e a liquidação conectados",
      finalSubtitle: "Comece grátis e registre sua primeira saída.",
    },
  },
  ledger: {
    name: "Livro razão",
    preview: {
      label: "Livro razão",
      metric: {
        label: "Contas de lançamento",
        value: "128",
        note: "6 contas sintéticas",
      },
      secondary: {
        label: "Lançamentos contábeis",
        value: "1.842",
      },
      chartLabel: "Atividade de lançamento",
      rows: [
        {
          label: "Receita · 4010",
          value: "Balanceado",
          status: "positive",
        },
        {
          label: "Folha de pagamento · 6200",
          value: "Lançado",
          status: "positive",
        },
        {
          label: "Suspense · 9999",
          value: "Revisar",
          status: "warning",
        },
      ],
    },
    copy: {
      title: "Um plano de contas feito para relatórios consistentes",
      subtitle:
        "Estruture contas sintéticas e de lançamento, registre lançamentos contábeis e mantenha os períodos e as dimensões sob controle.",
      bullets: [
        "Contas sintéticas e de lançamento",
        "Lançamentos contábeis e livros",
        "Períodos fiscais",
        "Dimensões e políticas de lançamento",
      ],
      outcomes: [
        {
          title: "Estruture o plano",
          desc: "Crie contas sintéticas e de lançamento com códigos e saldos normais.",
        },
        {
          title: "Registre lançamentos",
          desc: "Lance lançamentos contábeis com linhas, livros e períodos fiscais.",
        },
        {
          title: "Mantenha as dimensões",
          desc: "Defina dimensões e valores permitidos para a estrutura de relatórios.",
        },
        {
          title: "Controle o lançamento",
          desc: "Use políticas de lançamento e controles de lançamento manual quando necessário.",
        },
      ],
      steps: [
        {
          title: "Desenhe o plano",
          desc: "Crie as contas sintéticas e de lançamento de que seus relatórios precisam.",
        },
        {
          title: "Registre lançamentos",
          desc: "Lance lançamentos contábeis com o livro, o período e as dimensões corretas.",
        },
        {
          title: "Revise os períodos",
          desc: "Mantenha os períodos fiscais e o status dos lançamentos sob controle.",
        },
      ],
      capabilitiesTitle: "Uma estrutura contábil sólida",
      capabilitiesSubtitle:
        "O plano, os diários, os períodos e as dimensões compartilham um único workspace em vez de se dispersarem.",
      capabilities: [
        {
          title: "Plano de contas",
          desc: "Contas sintéticas e de lançamento com códigos, tipos e saldos normais.",
        },
        {
          title: "Lançamentos contábeis",
          desc: "Lançamentos com várias linhas, livros, períodos e status.",
        },
        {
          title: "Períodos fiscais",
          desc: "Abra e feche períodos para cada livro contábil.",
        },
        {
          title: "Dimensões",
          desc: "Defina dimensões, valores e regras no nível da conta.",
        },
        {
          title: "Políticas de lançamento",
          desc: "Controle como os lançamentos são registrados e quais contas permitem lançamento manual.",
        },
        {
          title: "Controles de contas",
          desc: "Contas de controle bancário e proteções de classificação.",
        },
      ],
      finalTitle: "Construa um livro razão que você consegue defender",
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
        label: "Lançamentos vinculados",
        value: "312",
      },
      chartLabel: "Planejado vs. liquidado por projeto",
      rows: [
        {
          label: "Implantação",
          value: "€ 420 mil",
          status: "positive",
        },
        {
          label: "Migração",
          value: "€ 186 mil",
          status: "warning",
        },
        {
          label: "Suporte",
          value: "€ 96 mil",
          status: "positive",
        },
      ],
    },
    copy: {
      title: "Veja custos e receitas por projeto",
      subtitle:
        "Crie projetos, vincule lançamentos de fluxo de caixa a eles e compare valores planejados, liquidados e pendentes em um único filtro.",
      bullets: [
        "Registros de projeto com códigos e tipos",
        "Vínculo de lançamentos ao projeto",
        "Alocações a departamentos",
        "Visões específicas por projeto",
      ],
      outcomes: [
        {
          title: "Crie um registro de projeto",
          desc: "Nome, código, tipo e descrição com status ativo.",
        },
        {
          title: "Vincule lançamentos",
          desc: "Conecte lançamentos de fluxo de caixa planejados e liquidados ao projeto.",
        },
        {
          title: "Aloque departamentos",
          desc: "Divida o custo de um lançamento entre departamentos.",
        },
        {
          title: "Revise o projeto",
          desc: "Filtre lançamentos e valores pendentes por projeto.",
        },
      ],
      steps: [
        {
          title: "Crie o projeto",
          desc: "Adicione um nome, um código e um tipo para que o projeto seja fácil de identificar.",
        },
        {
          title: "Vincule lançamentos",
          desc: "Conecte os lançamentos de fluxo de caixa que pertencem ao projeto.",
        },
        {
          title: "Revise a posição",
          desc: "Filtre valores planejados, liquidados e pendentes por projeto.",
        },
      ],
      capabilitiesTitle: "Contexto de projeto em cada movimento",
      capabilitiesSubtitle:
        "Lançamentos, divisões por departamento e status de liquidação permanecem vinculados ao projeto responsável.",
      capabilities: [
        {
          title: "Registros de projeto",
          desc: "Nome, código, tipo, descrição e status.",
        },
        {
          title: "Vínculos de lançamentos",
          desc: "Vincule lançamentos de fluxo de caixa diretamente a um projeto.",
        },
        {
          title: "Divisão por departamento",
          desc: "Aloque percentuais de um lançamento entre departamentos.",
        },
        {
          title: "Filtros de projeto",
          desc: "Revise lançamentos, liquidações e valores em aberto por projeto.",
        },
      ],
      finalTitle: "Torne o desempenho dos projetos visível",
      finalSubtitle: "Comece grátis e crie seu primeiro projeto.",
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
        label: "Lançamentos alocados",
        value: "246",
      },
      chartLabel: "Lançamentos por departamento",
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
      title: "Atribua cada movimento à equipe responsável",
      subtitle:
        "Crie departamentos, aloque percentuais dos lançamentos e revise os números por equipe sem reconstruir o relatório.",
      bullets: [
        "Registros de departamento",
        "Alocações por percentual",
        "Filtros de lançamentos por departamento",
        "Visões salvas",
      ],
      outcomes: [
        {
          title: "Crie o departamento",
          desc: "Nome, código e status ativo para cada centro de custo.",
        },
        {
          title: "Aloque lançamentos",
          desc: "Atribua um ou mais departamentos a um lançamento com percentuais.",
        },
        {
          title: "Filtre por equipe",
          desc: "Revise lançamentos e liquidações de um departamento por vez.",
        },
        {
          title: "Mantenha a responsabilidade visível",
          desc: "Veja qual equipe é responsável pelo gasto no mesmo workspace.",
        },
      ],
      steps: [
        {
          title: "Defina os departamentos",
          desc: "Adicione os nomes e códigos que suas equipes já usam.",
        },
        {
          title: "Aloque lançamentos",
          desc: "Divida um lançamento entre departamentos com percentuais.",
        },
        {
          title: "Revise os números",
          desc: "Filtre lançamentos de fluxo de caixa por departamento e revise a posição.",
        },
      ],
      capabilitiesTitle: "Uma visão de centros de custo em que você pode confiar",
      capabilitiesSubtitle:
        "As divisões por departamento permanecem vinculadas ao lançamento em vez de serem reconstruídas na hora do relatório.",
      capabilities: [
        {
          title: "Registros de departamento",
          desc: "Nome, código e status para cada centro de custo.",
        },
        {
          title: "Alocação por percentual",
          desc: "Divida um lançamento entre departamentos com percentuais definidos.",
        },
        {
          title: "Filtros de lançamentos",
          desc: "Filtre lançamentos de fluxo de caixa por departamento.",
        },
        {
          title: "Visões salvas",
          desc: "Mantenha as colunas e os filtros que sua equipe usa.",
        },
      ],
      finalTitle: "Dê um responsável a cada movimento",
      finalSubtitle: "Comece grátis e defina seu primeiro departamento.",
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
          label: "Prestadores de serviço",
          value: "18",
          status: "neutral",
        },
      ],
    },
    copy: {
      title: "Um único diretório para cada contraparte",
      subtitle:
        "Mantenha clientes, fornecedores, colaboradores, prestadores de serviço e parceiros em um só workspace e vincule-os aos lançamentos de fluxo de caixa com que se relacionam.",
      bullets: [
        "Clientes, fornecedores e parceiros",
        "Dados de contato e fiscais",
        "Tipos de entidade e status",
        "Vínculos a lançamentos de fluxo de caixa",
      ],
      outcomes: [
        {
          title: "Um único diretório",
          desc: "Armazene cada contraparte uma única vez, com um tipo de entidade claro.",
        },
        {
          title: "Dados de contato",
          desc: "Mantenha e-mail, telefone e endereço junto do registro.",
        },
        {
          title: "Dados fiscais e bancários",
          desc: "Armazene identificadores fiscais e dados bancários quando relevante.",
        },
        {
          title: "Conecte o livro razão",
          desc: "Referencie a entidade nos lançamentos de fluxo de caixa que ela pagou ou recebeu.",
        },
      ],
      steps: [
        {
          title: "Adicione a entidade",
          desc: "Escolha o tipo de entidade e adicione o nome e os dados de contato.",
        },
        {
          title: "Classifique o relacionamento",
          desc: "Marque-a como cliente, fornecedor, colaborador, prestador de serviço, parceiro ou outro tipo.",
        },
        {
          title: "Vincule lançamentos",
          desc: "Referencie a entidade nos lançamentos de fluxo de caixa com que ela se relaciona.",
        },
      ],
      capabilitiesTitle: "Dados de contraparte que continuam úteis",
      capabilitiesSubtitle:
        "Um único registro para as pessoas e organizações por trás do seu fluxo de caixa, em vez de uma lista de contatos em uma ferramenta à parte.",
      capabilities: [
        {
          title: "Registros de entidade",
          desc: "Clientes, fornecedores, colaboradores, prestadores de serviço, parceiros e mais.",
        },
        {
          title: "Dados de contato",
          desc: "E-mail, telefone e endereço em um único registro.",
        },
        {
          title: "Campos fiscais e bancários",
          desc: "Identificadores fiscais e dados bancários opcionais.",
        },
        {
          title: "Vínculos de lançamentos",
          desc: "Referencie a contraparte nos lançamentos de fluxo de caixa.",
        },
      ],
      finalTitle: "Mantenha as contrapartes em um só lugar",
      finalSubtitle: "Comece grátis e adicione sua primeira entidade.",
    },
  },
  inventory: {
    name: "Estoque",
    preview: {
      label: "Estoque",
      metric: {
        label: "Itens",
        value: "1.284",
        note: "42 categorias",
      },
      secondary: {
        label: "Unidades em estoque",
        value: "8.960",
      },
      chartLabel: "Itens por tipo de unidade",
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
      title: "Dados mestres de itens para estoque e serviços",
      subtitle:
        "Mantenha SKUs, unidades de medida e quantidades em estoque em uma única lista e vincule os itens aos lançamentos de fluxo de caixa que os movimentam.",
      bullets: [
        "SKU e nome do item",
        "Unidade de medida",
        "Quantidade em estoque",
        "Vínculos a lançamentos de fluxo de caixa",
      ],
      outcomes: [
        {
          title: "Uma única lista de itens",
          desc: "Armazene cada SKU uma única vez, com nome e descrição.",
        },
        {
          title: "Unidades e quantidades",
          desc: "Acompanhe a unidade de medida e a quantidade em estoque.",
        },
        {
          title: "Controle de status",
          desc: "Desative itens sem excluir o histórico.",
        },
        {
          title: "Conecte ao fluxo de caixa",
          desc: "Vincule linhas de estoque aos lançamentos que movimentam o estoque.",
        },
      ],
      steps: [
        {
          title: "Crie o item",
          desc: "Adicione o SKU, o nome e a descrição.",
        },
        {
          title: "Defina a unidade e a quantidade",
          desc: "Escolha a unidade de medida e registre a quantidade em estoque.",
        },
        {
          title: "Vincule aos lançamentos",
          desc: "Referencie o item nos lançamentos de fluxo de caixa que o movimentam.",
        },
      ],
      capabilitiesTitle: "Dados de itens limpos, conectados às finanças",
      capabilitiesSubtitle:
        "Um cadastro de itens simples que permanece vinculado ao fluxo de caixa que ele afeta.",
      capabilities: [
        {
          title: "Registros de itens",
          desc: "SKU, nome, descrição e status ativo.",
        },
        {
          title: "Unidades de medida",
          desc: "Unidades em texto livre, como peças, quilogramas ou horas.",
        },
        {
          title: "Quantidade em estoque",
          desc: "Mantenha a quantidade atual em cada item.",
        },
        {
          title: "Vínculos de lançamentos",
          desc: "Referencie itens nos lançamentos de fluxo de caixa.",
        },
      ],
      finalTitle: "Mantenha os dados dos itens limpos",
      finalSubtitle: "Comece grátis e adicione seu primeiro SKU.",
    },
  },
};

export default ptBR;
