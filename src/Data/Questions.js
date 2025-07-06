const questions = [
  {
    question: "Como você reage diante de um novo desafio no trabalho?",
    options: [
      { text: "Tomo a frente e busco resultados rapidamente", category: "D" },
      { text: "Envolvo a equipe com entusiasmo", category: "I" },
      { text: "Analiso com calma antes de agir", category: "S" },
      { text: "Pesquiso e sigo os procedimentos corretos", category: "C" },
    ],
  },
  {
    question: "O que mais te motiva em um ambiente profissional?",
    options: [
      { text: "Reconhecimento e interação social", category: "I" },
      { text: "Superar metas e vencer obstáculos", category: "D" },
      { text: "Fazer tudo com precisão e qualidade", category: "C" },
      { text: "Estabilidade e um ambiente harmonioso", category: "S" },
    ],
  },
  {
    question: "Como você costuma tomar decisões?",
    options: [
      { text: "Com base em dados e regras", category: "C" },
      { text: "De forma espontânea e otimista", category: "I" },
      { text: "Rápido e com confiança", category: "D" },
      { text: "Após ouvir os outros e refletir", category: "S" },
    ],
  },
  {
    question: "Qual dessas frases mais combina com você?",
    options: [
      { text: "Prefiro evitar conflitos e manter a paz", category: "S" },
      { text: "Gosto de estar no controle das situações", category: "D" },
      { text: "Adoro conhecer novas pessoas e ideias", category: "I" },
      { text: "Sou detalhista e sigo padrões", category: "C" },
    ],
  },
  {
    question: "Quando algo dá errado, você tende a:",
    options: [
      { text: "Investigar o que aconteceu e corrigir", category: "C" },
      { text: "Minimizar e seguir em frente com leveza", category: "I" },
      { text: "Assumir a responsabilidade e agir", category: "D" },
      { text: "Buscar apoio e manter a calma", category: "S" },
    ],
  },
  {
    question: "Como você lida com mudanças?",
    options: [
      { text: "Enxergo como oportunidade de crescimento", category: "D" },
      { text: "Prefiro mudanças graduais e planejadas", category: "S" },
      { text: "Me empolgo com a novidade", category: "I" },
      { text: "Avalio os riscos antes de aceitar", category: "C" },
    ],
  },
  {
    question: "Em uma equipe, você costuma ser:",
    options: [
      { text: "O motivador e comunicador", category: "I" },
      { text: "O organizador e analítico", category: "C" },
      { text: "O líder que impulsiona", category: "D" },
      { text: "O conciliador e confiável", category: "S" },
    ],
  },
  {
    question: "O que mais te incomoda em um colega de trabalho?",
    options: [
      { text: "Falta de iniciativa", category: "D" },
      { text: "Falta de entusiasmo", category: "I" },
      { text: "Falta de empatia", category: "S" },
      { text: "Falta de organização", category: "C" },
    ],
  },
  {
    question: "Como você prefere receber instruções?",
    options: [
      { text: "Claras, detalhadas e por escrito", category: "C" },
      { text: "Com tempo para absorver e perguntar", category: "S" },
      { text: "Diretas e objetivas", category: "D" },
      { text: "De forma leve e conversada", category: "I" },
    ],
  },
  {
    question: "Qual dessas situações te deixa mais desconfortável?",
    options: [
      { text: "Conflitos interpessoais", category: "S" },
      { text: "Ambiguidade e falta de regras", category: "C" },
      { text: "Trabalhar sozinho por muito tempo", category: "I" },
      { text: "Falta de autonomia para decidir", category: "D" },
    ],
  },
  {
    question: "Como você reage sob pressão?",
    options: [
      { text: "Toma decisões rápidas e assume o controle", category: "D" },
      { text: "Busca apoio e mantém a harmonia", category: "S" },
      { text: "Tenta manter o bom humor e motivar os outros", category: "I" },
      { text: "Analisa os fatos antes de agir", category: "C" },
    ],
  },
  {
    question: "O que você valoriza mais em um projeto?",
    options: [
      { text: "Resultados concretos e metas claras", category: "D" },
      { text: "Relacionamentos e colaboração", category: "I" },
      { text: "Planejamento e estabilidade", category: "S" },
      { text: "Precisão e qualidade técnica", category: "C" },
    ],
  },
  {
    question: "Como você lida com prazos apertados?",
    options: [
      { text: "Foca na execução e acelera o ritmo", category: "D" },
      { text: "Organiza as tarefas com calma", category: "S" },
      { text: "Motiva a equipe com energia", category: "I" },
      { text: "Revisa os detalhes para evitar erros", category: "C" },
    ],
  },
  {
    question: "Qual dessas atitudes você mais admira?",
    options: [
      { text: "Determinação para vencer desafios", category: "D" },
      { text: "Capacidade de se conectar com os outros", category: "I" },
      { text: "Paciência e empatia", category: "S" },
      { text: "Rigor e comprometimento com regras", category: "C" },
    ],
  },
  {
    question: "Como você prefere trabalhar?",
    options: [
      { text: "Com autonomia e liberdade para decidir", category: "D" },
      { text: "Com pessoas e trocas constantes", category: "I" },
      { text: "Com rotinas bem definidas", category: "S" },
      { text: "Com processos claros e bem documentados", category: "C" },
    ],
  },
  {
    question: "O que te deixa mais satisfeito após um dia de trabalho?",
    options: [
      { text: "Ter superado um grande desafio", category: "D" },
      { text: "Ter interagido com pessoas e se divertido", category: "I" },
      { text: "Ter ajudado alguém ou colaborado em equipe", category: "S" },
      { text: "Ter feito tudo com perfeição e sem erros", category: "C" },
    ],
  },
  {
    question: "Como você reage a críticas?",
    options: [
      { text: "Aceita se forem construtivas e bem explicadas", category: "C" },
      { text: "Fica desconfortável, mas escuta com empatia", category: "S" },
      { text: "Tenta justificar ou argumentar", category: "D" },
      { text: "Leva na esportiva e tenta manter o clima leve", category: "I" },
    ],
  },
  {
    question: "Qual dessas frases mais te representa?",
    options: [
      { text: "Gosto de liderar e tomar decisões", category: "D" },
      { text: "Gosto de conversar e fazer novas amizades", category: "I" },
      { text: "Gosto de ajudar e ouvir os outros", category: "S" },
      { text: "Gosto de seguir regras e manter a ordem", category: "C" },
    ],
  },
  {
    question: "Em um novo projeto, você tende a:",
    options: [
      { text: "Assumir a liderança e definir metas", category: "D" },
      { text: "Criar conexões e motivar a equipe", category: "I" },
      { text: "Buscar estabilidade e cooperação", category: "S" },
      { text: "Planejar cada etapa com cuidado", category: "C" },
    ],
  },
  {
    question: "Como você reage a mudanças inesperadas?",
    options: [
      { text: "Se adapta rapidamente e toma decisões", category: "D" },
      { text: "Tenta manter o otimismo e animar os outros", category: "I" },
      { text: "Fica desconfortável, mas busca se ajustar", category: "S" },
      { text: "Analisa os impactos antes de agir", category: "C" },
    ],
  },
  {
    question: "O que você prefere em um ambiente de trabalho?",
    options: [
      { text: "Desafios constantes e metas ousadas", category: "D" },
      { text: "Ambiente leve e descontraído", category: "I" },
      { text: "Clima harmonioso e previsível", category: "S" },
      { text: "Organização e processos bem definidos", category: "C" },
    ],
  },
  {
    question: "Como você costuma resolver conflitos?",
    options: [
      { text: "Enfrenta diretamente e busca solução rápida", category: "D" },
      { text: "Tenta amenizar com bom humor", category: "I" },
      { text: "Escuta todos os lados e busca consenso", category: "S" },
      { text: "Analisa os fatos e propõe uma solução lógica", category: "C" },
    ],
  },
  {
    question: "Qual dessas qualidades você mais valoriza em si mesmo?",
    options: [
      { text: "Determinação", category: "D" },
      { text: "Carisma", category: "I" },
      { text: "Lealdade", category: "S" },
      { text: "Precisão", category: "C" },
    ],
  },
  {
    question: "Como você prefere receber feedback?",
    options: [
      { text: "Direto e objetivo", category: "D" },
      { text: "Com empatia e leveza", category: "I" },
      { text: "Com tempo para refletir", category: "S" },
      { text: "Com base em dados e exemplos", category: "C" },
    ],
  },
  {
    question: "O que mais te incomoda em um ambiente de trabalho?",
    options: [
      { text: "Falta de metas claras", category: "D" },
      { text: "Ambiente frio e sem interação", category: "I" },
      { text: "Conflitos e desorganização", category: "S" },
      { text: "Improvisos e falta de padrão", category: "C" },
    ],
  },
  {
    question: "Como você costuma agir em reuniões?",
    options: [
      { text: "Vai direto ao ponto e propõe soluções", category: "D" },
      { text: "Gosta de interagir e compartilhar ideias", category: "I" },
      { text: "Escuta com atenção e contribui com equilíbrio", category: "S" },
      { text: "Toma notas e analisa os detalhes", category: "C" },
    ],
  },
  {
    question: "Qual dessas situações te deixa mais confortável?",
    options: [
      { text: "Ter autonomia para decidir", category: "D" },
      { text: "Estar cercado de pessoas", category: "I" },
      { text: "Ter um ambiente previsível", category: "S" },
      { text: "Seguir um plano bem estruturado", category: "C" },
    ],
  },
  {
    question: "Quando precisa convencer alguém, você:",
    options: [
      { text: "Aponta os resultados e benefícios", category: "D" },
      { text: "Usa carisma e entusiasmo", category: "I" },
      { text: "Mostra empatia e compreensão", category: "S" },
      { text: "Apresenta dados e lógica", category: "C" },
    ],
  },
  {
    question: "Como você reage a tarefas repetitivas?",
    options: [
      { text: "Fica entediado e busca algo novo", category: "D" },
      { text: "Tenta tornar a tarefa mais divertida", category: "I" },
      { text: "Aceita bem se houver estabilidade", category: "S" },
      { text: "Valoriza a precisão e consistência", category: "C" },
    ],
  },
  {
    question: "O que mais te motiva em um desafio?",
    options: [
      { text: "A chance de liderar e vencer", category: "D" },
      { text: "A oportunidade de se conectar com pessoas", category: "I" },
      { text: "A possibilidade de ajudar e colaborar", category: "S" },
      { text: "A busca por excelência e perfeição", category: "C" },
    ],
  },
];

export default questions;