export type Objection = {
  question: string;
  answer: string;
};

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  heroH1: string;
  heroSubheadline: string;
  ctaLabel: string;
  whatsappMessage: string;
  painPoints: string[];
  whatIsIt: string;
  whoItsFor: string[];
  benefits: string[];
  howItWorks: string[];
  planningText: string;
  technologyText: string;
  objections: Objection[];
};

export const treatments: Treatment[] = [
  {
    slug: "protese-protocolo-itapoa",
    title: "Prótese Protocolo",
    shortDescription: "Soluções fixas para recuperar função, segurança e confiança ao sorrir.",
    seoTitle: "Prótese Protocolo em Itapoá | OralClin Odontologia",
    seoDescription: "Entenda como funciona a prótese protocolo sobre implantes em Itapoá e agende uma avaliação personalizada com a OralClin.",
    heroEyebrow: "Odontologia em Itapoá",
    heroH1: "Prótese Protocolo em Itapoá",
    heroSubheadline: "Uma alternativa de reabilitação com prótese fixa sobre implantes, indicada após avaliação individual.",
    ctaLabel: "Quero avaliar meu caso",
    whatsappMessage: "Olá! Gostaria de saber mais sobre prótese protocolo e entender como funciona a avaliação do meu caso.",
    painPoints: [
      "Desconforto e insegurança ao usar dentadura no dia a dia.",
      "Dificuldade para mastigar, falar ou sorrir com naturalidade.",
      "Sensação de que os dentes soltos limitam a rotina social.",
    ],
    whatIsIt: "A prótese protocolo é uma reabilitação fixa, apoiada sobre implantes dentários, pensada para substituir uma arcada com perdas dentárias significativas. Diferente da dentadura removível, ela permanece fixa na boca após a instalação, seguindo o planejamento definido pelo dentista responsável.",
    whoItsFor: [
      "Pessoas que perderam a maior parte ou todos os dentes de uma arcada.",
      "Quem hoje usa dentadura e busca entender alternativas fixas.",
      "Pacientes que desejam recuperar função mastigatória com mais estabilidade.",
    ],
    benefits: [
      "Fixação estável, sem a necessidade de remover a prótese para higienizar.",
      "Recuperação da função mastigatória dentro do planejamento indicado.",
      "Impacto positivo na confiança ao falar e sorrir.",
    ],
    howItWorks: [
      "Avaliação clínica e de imagem para entender a estrutura óssea disponível.",
      "Planejamento individual dos implantes e da prótese.",
      "Instalação dos implantes e período de acompanhamento.",
      "Confecção e instalação da prótese fixa conforme planejamento.",
    ],
    planningText: "Cada caso de prótese protocolo é planejado individualmente, considerando exames de imagem, histórico do paciente e objetivos do tratamento. Não existe um protocolo único para todos os pacientes.",
    technologyText: "A OralClin utiliza recursos de planejamento e imagem para apoiar o diagnóstico e a execução do tratamento, sempre conduzidos pela equipe clínica responsável.",
    objections: [
      { question: "Tenho medo de implante.", answer: "É natural sentir receio antes de qualquer procedimento. Na avaliação, a equipe explica cada etapa do planejamento para que você entenda o que esperar antes de decidir." },
      { question: "Será que meu caso pode receber protocolo?", answer: "Isso só é possível confirmar após avaliação clínica e de imagem, já que cada estrutura óssea e cada histórico são diferentes." },
      { question: "Tenho idade avançada.", answer: "A indicação depende da avaliação individual de saúde geral e bucal, não apenas da idade. O ideal é conversar com a equipe sobre o seu caso específico." },
      { question: "Já uso dentadura.", answer: "Muitos pacientes que usam dentadura buscam entender alternativas fixas. A avaliação ajuda a entender se a prótese protocolo pode ser considerada para o seu caso." },
      { question: "Tenho medo de sentir dor.", answer: "O manejo de conforto durante o tratamento e discutido na avaliação, de acordo com o planejamento e as necessidades individuais." },
      { question: "Quanto custa?", answer: "O valor depende do planejamento específico de cada caso e será apresentado após a avaliação, sem estimativas genéricas." },
      { question: "Quanto tempo dura o tratamento?", answer: "O tempo varia conforme o planejamento individual, os exames iniciais e a resposta de cada paciente durante o processo." },
    ],
  },
  {
    slug: "implante-dentario-itapoa",
    title: "Implantes",
    shortDescription: "Planejamento individualizado para reposição de dentes perdidos.",
    seoTitle: "Implante Dentário em Itapoá | OralClin Odontologia",
    seoDescription: "Conheca o tratamento de implante dentário em Itapoá e agende uma avaliação para entender as possibilidades do seu caso na OralClin.",
    heroEyebrow: "Odontologia em Itapoá",
    heroH1: "Implante Dentário em Itapoá",
    heroSubheadline: "Recupere função e estética por meio de um tratamento planejado de acordo com as necessidades do seu caso.",
    ctaLabel: "Agendar avaliação",
    whatsappMessage: "Olá! Gostaria de saber mais sobre implantes dentários e agendar uma avaliação.",
    painPoints: [
      "Um ou mais dentes perdidos que afetam a mastigação e a autoestima.",
      "Dúvida entre diferentes soluções de reposição dentária.",
      "Receio de que a perda de um dente afete os dentes vizinhos com o tempo.",
    ],
    whatIsIt: "O implante dentário é uma solução para reposição individual ou múltipla de dentes perdidos, planejada conforme a condição óssea e clínica de cada paciente.",
    whoItsFor: [
      "Pessoas com um ou mais dentes ausentes.",
      "Quem busca entender alternativas de reposição antes de decidir.",
      "Pacientes que desejam avaliar a viabilidade do implante para o seu caso.",
    ],
    benefits: [
      "Reposição planejada dente a dente, conforme indicação clínica.",
      "Preservação considerada da estrutura óssea ao longo do acompanhamento.",
      "Recuperação de função e estética dentro do planejamento definido.",
    ],
    howItWorks: [
      "Avaliação clínica e exames de imagem da região a ser tratada.",
      "Planejamento da posição e do número de implantes necessários.",
      "Instalação dos implantes e período de acompanhamento.",
      "Reabilitacao final sobre os implantes, conforme o planejamento.",
    ],
    planningText: "O planejamento de implantes considera a quantidade de dentes a repor, a condição óssea local e o histórico geral de saúde do paciente, sempre avaliado individualmente.",
    technologyText: "A equipe utiliza exames de imagem para apoiar o planejamento da posição dos implantes com mais previsibilidade.",
    objections: [
      { question: "Implante dentário doi?", answer: "O manejo de conforto é discutido durante a avaliação, de acordo com o procedimento planejado para o seu caso." },
      { question: "Quem pode fazer implante dentário?", answer: "A indicação depende de avaliação clínica individual, considerando saúde bucal e geral do paciente." },
      { question: "Quanto custa um implante dentário?", answer: "O valor é apresentado após a avaliação, conforme o número de implantes e o planejamento necessário para o seu caso." },
      { question: "Um dente perdido faz diferença?", answer: "Cada situação é avaliada individualmente pela equipe clínica, que pode explicar as possibilidades para o seu caso específico." },
    ],
  },
  {
    slug: "alinhadores-invisiveis-itapoa",
    title: "Alinhadores Invisíveis",
    shortDescription: "Alinhe seu sorriso com discrição e acompanhe sua rotina.",
    seoTitle: "Alinhadores Invisíveis em Itapoá | OralClin Odontologia",
    seoDescription: "Descubra se os alinhadores invisíveis podem ser indicados para o seu caso e agende uma avaliação na OralClin, em Itapoá.",
    heroEyebrow: "Odontologia em Itapoá",
    heroH1: "Alinhe seu sorriso com mais discrição.",
    heroSubheadline: "Conheca as possibilidades dos alinhadores transparentes e descubra se esse tratamento pode ser indicado para você.",
    ctaLabel: "Descobrir se e para mim",
    whatsappMessage: "Olá! Gostaria de saber se os alinhadores invisíveis podem ser indicados para o meu caso.",
    painPoints: [
      "Vontade de alinhar os dentes sem usar aparelho metalico visivel.",
      "Rotina social ou profissional que pede mais discrição no tratamento.",
      "Dúvida sobre encaixar o tratamento na rotina do dia a dia.",
    ],
    whatIsIt: "Os alinhadores invisíveis são placas transparentes e removíveis, planejadas para movimentar os dentes de forma gradual conforme indicação odontológica.",
    whoItsFor: [
      "Pessoas que buscam alinhar os dentes com discrição.",
      "Quem tem rotina que exige remover o aparelho em alguns momentos.",
      "Pacientes que desejam entender se o próprio caso pode ser tratado com alinhadores.",
    ],
    benefits: [
      "Aparência discreta durante o uso.",
      "Possibilidade de remover o alinhador para comer e higienizar, conforme orientação.",
      "Acompanhamento planejado ao longo de cada etapa do tratamento.",
    ],
    howItWorks: [
      "Avaliação clínica para entender o caso e a indicação.",
      "Planejamento das etapas de movimentação dentária.",
      "Uso continuo dos alinhadores conforme orientação profissional.",
      "Acompanhamento periodico para ajustes do plano de tratamento.",
    ],
    planningText: "Nem todo caso é indicado para alinhadores. O planejamento começa por uma avaliação que define se esse é o caminho mais adequado para o seu sorriso.",
    technologyText: "O planejamento das etapas de movimentação e apoiado por recursos digitais utilizados pela equipe clínica.",
    objections: [
      { question: "Alinhador invisível funciona?", answer: "A indicação e a resposta ao tratamento dependem do caso individual, avaliado pela equipe clínica antes de qualquer decisão." },
      { question: "Quanto custa Invisalign?", answer: "O valor depende do planejamento específico e será apresentado após a avaliação do seu caso." },
      { question: "Invisalign vale a pena?", answer: "Isso depende dos seus objetivos e da indicação para o seu caso, temas que a avaliação ajuda a esclarecer." },
      { question: "Invisalign ou aparelho convencional?", answer: "A escolha entre as opções depende da avaliação clínica individual e das necessidades específicas de cada paciente." },
    ],
  },
  {
    slug: "invisalign-itapoa",
    title: "Invisalign",
    shortDescription: "Tecnologia e planejamento para transformar seu sorriso com discrição.",
    seoTitle: "Invisalign em Itapoá | OralClin Odontologia",
    seoDescription: "Saiba mais sobre o tratamento com Invisalign em Itapoá e agende uma avaliação com a equipe da OralClin.",
    heroEyebrow: "Odontologia em Itapoá",
    heroH1: "Invisalign em Itapoá",
    heroSubheadline: "Uma alternativa discreta para o alinhamento dos dentes, com planejamento e acompanhamento profissional.",
    ctaLabel: "Agendar avaliação",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Invisalign e agendar uma avaliação.",
    painPoints: [
      "Busca por uma marca reconhecida de alinhadores transparentes.",
      "Dúvida sobre a diferença entre Invisalign e outros alinhadores.",
      "Vontade de planejar o tratamento com acompanhamento profissional próximo.",
    ],
    whatIsIt: "Invisalign(R) e um sistema de alinhadores transparentes removíveis, utilizado conforme planejamento e acompanhamento do dentista responsável pelo caso.",
    whoItsFor: [
      "Pacientes que buscam alinhar os dentes de forma discreta.",
      "Quem já pesquisou sobre alinhadores e quer entender melhor o sistema Invisalign.",
      "Pessoas que desejam avaliar se o próprio caso é indicado para esse sistema.",
    ],
    benefits: [
      "Alinhadores transparentes e removíveis.",
      "Planejamento das etapas de movimentação conduzido pela equipe clínica.",
      "Acompanhamento profissional ao longo do tratamento.",
    ],
    howItWorks: [
      "Avaliação clínica para confirmar a indicação do sistema Invisalign.",
      "Planejamento digital das etapas de movimentação dentária.",
      "Uso continuo dos alinhadores conforme orientação.",
      "Consultas de acompanhamento durante o tratamento.",
    ],
    planningText: "O uso da marca Invisalign(R) neste site segue o relacionamento e credenciamento vigente da clínica, e cada plano de tratamento e definido após avaliação individual.",
    technologyText: "O planejamento digital das etapas de movimentação e um recurso utilizado pela equipe para apoiar o acompanhamento do tratamento.",
    objections: [
      { question: "Invisalign ou aparelho fixo?", answer: "A indicação entre as opções depende da avaliação clínica individual e das necessidades específicas do seu caso." },
      { question: "Quanto custa Invisalign?", answer: "O valor é apresentado após a avaliação, conforme o planejamento definido para o seu caso." },
      { question: "Quanto tempo dura o tratamento?", answer: "O tempo de tratamento varia conforme o planejamento individual definido na avaliação." },
    ],
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
