export type Objection = {
  question: string;
  answer: string;
};

/** Hero emocional das páginas de tratamento — a abertura que segura o lead. */
export type TreatmentHero = {
  /** Primeira parte do título, em peso normal */
  headline: string;
  /** Fecho do título, destacado em gradiente — é onde está a virada emocional */
  headlineAccent: string;
  /** Um único parágrafo. Mais que isso e o hero perde o respiro. */
  lead: string;
  /** Frase que abre a seção do formulário, no fim da página */
  formIntro: string;
  /** Selos curtos abaixo dos botões */
  trustItems: string[];
  /** Foto principal do hero */
  photo: string;
  /** Card de depoimento sobreposto à foto, quando existe um autorizado */
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
};

/**
 * Seção narrativa de identificação: nomeia as adaptações silenciosas que a
 * pessoa já faz. Substitui os "pain points" em card quando presente.
 */
export type AdaptationNarrative = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  lead: string;
  /** Frase final do parágrafo, com mais peso */
  leadEmphasis: string;
  items: {
    /**
     * A frase em primeira pessoa, como um pensamento da própria pessoa.
     * Lidas em sequência, as quatro formam um monólogo — é isso que gera
     * identificação, onde uma lista numerada só enumeraria problemas.
     */
    quote: string;
    description: string;
    /** Opcional: enquanto não houver foto, o palco usa um tratamento tipográfico */
    image?: string;
  }[];
  closing: {
    headline: string;
    headlineAccent: string;
    support: string;
  };
};

/**
 * A virada: entra logo depois da seção de dor e precisa respirar.
 * Foto real da clínica + os ganhos concretos do tratamento.
 */
export type TreatmentSolution = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  lead: string;
  /** Foto principal, em formato panorâmico */
  photo: string;
  photoAlt: string;
  /** Foto secundária, sobreposta em canto — mostra o lado do planejamento */
  insetPhoto?: string;
  insetAlt?: string;
  benefits: {
    title: string;
    description: string;
  }[];
};

/**
 * "Próximo passo": a jornada da decisão, não a do tratamento.
 *
 * Termina em "Decisão" de propósito — se terminasse em "Tratamento", a seção
 * assumiria que a pessoa já vai fechar, contradizendo a promessa de que a
 * avaliação não é uma consulta para vender.
 */
export type TreatmentJourney = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  paragraphs: string[];
  steps: {
    /** Rótulo curto, usado no marcador da linha */
    label: string;
    title: string;
    description: string;
    /** Foto da etapa — troca junto com o marcador ativo, mostrando o que é
     *  cada momento em vez de servir de enfeite */
    image: string;
    imageAlt: string;
  }[];
  /** O recado central da seção, isolado tipograficamente */
  reassurance: {
    line: string;
    emphasis: string;
  };
  closing: string;
};

/**
 * História real de um paciente, logo depois do hero.
 *
 * A headline é a frase do próprio paciente — tem mais força do que qualquer
 * título que a gente escrevesse, e evita que a página faça promessa de
 * resultado em nome da clínica.
 */
export type TreatmentStory = {
  eyebrow: string;
  quote: string;
  paragraphs: string[];
  patientName: string;
  patientRole: string;
  video: string;
  poster: string;
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
  hero: TreatmentHero;
  story?: TreatmentStory;
  adaptations?: AdaptationNarrative;
  solution?: TreatmentSolution;
  journey?: TreatmentJourney;
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
    hero: {
      headline: "Talvez o que você queira recuperar não seja apenas o sorriso.",
      headlineAccent: "É a vontade de sorrir de novo.",
      lead: "Voltar a sorrir pode significar recuperar a autoestima, a segurança e a liberdade de viver momentos sem aquela preocupação.",
      formIntro: "Você começa com uma avaliação individual, entende seu caso e recebe orientação sobre o melhor caminho para transformar o seu sorriso.",
      trustItems: [
        "Avaliação individual",
        "Planejamento personalizado",
        "Exames de imagem",
        "Acompanhamento em cada etapa",
        "Itapoá/SC",
      ],
      photo: "/images/clinica/paciente-marli.jpg",
      // Sem card de depoimento aqui: a frase da Marli é a headline da seção
      // logo abaixo, e repeti-la duas vezes seguidas enfraqueceria as duas.
    },
    story: {
      eyebrow: "Uma história real",
      quote: "Depois de tanto tempo, a autoestima da gente volta com um sorriso.",
      paragraphs: [
        "O que você acabou de ler não é uma promessa nossa. É a frase da Marli, do jeito que ela falou.",
        "Aqui ela conta, com as próprias palavras, o que o sorriso passou a representar depois do tratamento na OralClin.",
      ],
      patientName: "Marli",
      patientRole: "Paciente OralClin",
      video: "/video/depoimento-marli.mp4",
      poster: "/video/depoimento-marli-poster.jpg",
    },
    adaptations: {
      eyebrow: "Talvez você conheça essa sensação",
      headline: "Quando o sorriso deixa de ser espontâneo, a gente começa a",
      headlineAccent: "se adaptar.",
      lead: "Escolher o que comer. Falar com mais cuidado. Evitar certas fotos. Sorrir menos. Pensar duas vezes antes de viver um momento simples.",
      leadEmphasis: "E, com o tempo, aquilo que incomodava passa a parecer parte da rotina.",
      items: [
        {
          quote: "Será que ela vai mexer?",
          description:
            "A preocupação não avisa a hora de chegar. Vem no meio da conversa, do almoço, da risada — e tira você do momento.",
          image: "/images/narrativa/adapt-01-preocupacao.jpg",
        },
        {
          quote: "Melhor eu pedir outra coisa.",
          description:
            "Você olha o cardápio e já sabe o que não vai pedir. Não é falta de vontade: é o cálculo silencioso de evitar o constrangimento.",
          image: "/images/narrativa/adapt-02-prato.jpg",
        },
        {
          quote: "Nessa foto eu não sorri.",
          description:
            "A boca fechada, o rosto virado, o sorriso contido. A insegurança aparece justo nos momentos que deveriam ser os mais leves.",
          image: "/images/narrativa/adapt-03-foto.jpg",
        },
        {
          quote: "Vou sorrir de boca fechada.",
          description:
            "Quando sorrir vira decisão em vez de reflexo, o que se perde não é só o sorriso. É a espontaneidade de ser você.",
          image: "/images/narrativa/adapt-04-espelho.jpg",
        },
      ],
      closing: {
        headline: "Você não precisa continuar se adaptando a um sorriso que",
        headlineAccent: "já não faz você se sentir bem.",
        support:
          "Existe um caminho que pode devolver segurança, estabilidade e liberdade para o seu dia a dia. Ele começa com uma conversa.",
      },
    },
    solution: {
      eyebrow: "A solução",
      headline: "Existe uma alternativa que pode transformar",
      headlineAccent: "o seu dia a dia.",
      lead: "A prótese protocolo sobre implantes pode oferecer mais estabilidade, segurança e conforto para você viver momentos do cotidiano com mais tranquilidade.",
      photo: "/images/clinica/procedimento-cirurgico.jpg",
      photoAlt: "Equipe da OralClin durante um procedimento cirúrgico na clínica",
      insetPhoto: "/images/clinica/protese-instrumental.jpg",
      insetAlt: "Prótese protocolo e instrumental preparados na clínica",
      benefits: [
        {
          title: "Mais segurança",
          description: "Para falar, sorrir e mastigar.",
        },
        {
          title: "Liberdade",
          description: "Para comer o que gosta.",
        },
        {
          title: "Mais autoestima",
          description: "Para sorrir com confiança.",
        },
        {
          title: "Mais estabilidade",
          description: "Uma solução fixa planejada para o seu caso.",
        },
      ],
    },
    journey: {
      eyebrow: "Próximo passo",
      headline: "Como saber se esse caminho é",
      headlineAccent: "para você?",
      paragraphs: [
        "Cada sorriso é único. Por isso, tudo começa com uma avaliação individual, onde entendemos suas necessidades, sua condição atual e o que você deseja transformar.",
        "Depois, mostramos o caminho com clareza — sem pressão para decidir antes de entender.",
      ],
      steps: [
        {
          label: "Avaliação",
          title: "Conhecemos o seu caso",
          description:
            "Uma conversa individual para entender sua situação atual, suas necessidades e o que você deseja transformar no seu sorriso.",
          image: "/images/clinica/planejamento-avaliacao.jpg",
          imageAlt: "Profissional da OralClin preenchendo a ficha de avaliação",
        },
        {
          label: "Exames",
          title: "Entendemos suas condições",
          description:
            "Os exames de imagem necessários mostram a estrutura óssea e a condição clínica — o que é possível e o que precisa de atenção antes.",
          image: "/images/clinica/diagnostico-raiox.jpg",
          imageAlt: "Radiografia panorâmica exibida em tablet na clínica",
        },
        {
          label: "Planejamento",
          title: "Definimos as possibilidades",
          description:
            "A partir da avaliação e dos exames, a equipe define os caminhos possíveis para o seu caso específico, com as etapas e o que esperar de cada uma.",
          image: "/images/clinica/diagnostico-scan.jpg",
          imageAlt: "Equipe da OralClin analisando o escaneamento do caso",
        },
        {
          label: "Decisão",
          title: "A escolha é sua",
          description:
            "Você recebe a orientação necessária para decidir com consciência — no seu tempo, sabendo exatamente o que está escolhendo.",
          image: "/images/clinica/decisao-orientacao.jpg",
          imageAlt: "Profissional da OralClin explicando o tratamento com um modelo de implante",
        },
      ],
      reassurance: {
        line: "Você não precisa chegar sabendo qual tratamento precisa.",
        emphasis: "Precisa apenas dar o primeiro passo.",
      },
      closing: "Vamos descobrir juntos o melhor caminho para o seu sorriso.",
    },
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
    hero: {
      headline: "Um dente que falta muda mais coisas",
      headlineAccent: "do que a gente imagina.",
      lead: "Mastigar de um lado só, evitar certos alimentos, cobrir a boca ao rir. São ajustes silenciosos que a gente vai fazendo, até virarem rotina.",
      formIntro: "Você começa com uma avaliação individual, entende a condição do seu caso e recebe orientação sobre o que é possível fazer.",
      trustItems: [
        "Avaliação individual",
        "Exames de imagem",
        "Planejamento dente a dente",
        "Acompanhamento em cada etapa",
        "Itapoá/SC",
      ],
      photo: "/images/clinica/implante-modelo.jpg",
    },
    adaptations: {
      eyebrow: "Talvez você reconheça isso",
      headline: "A gente vai se ajustando, até virar",
      headlineAccent: "o jeito normal de viver.",
      lead: "Mastigar sempre do mesmo lado. Rir com a mão na frente. Adiar mais um ano. São ajustes pequenos, feitos quase sem pensar.",
      leadEmphasis: "Até que um dia eles deixam de parecer ajuste e passam a parecer quem você é.",
      items: [
        {
          quote: "Mastigo sempre do mesmo lado.",
          description:
            "Começa como preferência e vira automático. Um lado trabalha dobrado, o outro descansa — e o corpo se acostuma com o desequilíbrio.",
          image: "/images/narrativa/impl-01-mastigar.jpg",
        },
        {
          quote: "Rio com a mão na frente.",
          description:
            "O gesto é tão rápido que nem parece escolha. Mas ele aparece justo nos momentos em que a risada deveria ser solta.",
          image: "/images/narrativa/impl-02-riso.jpg",
        },
        {
          quote: "Ano que vem eu resolvo.",
          description:
            "O adiamento tem sempre um motivo razoável. E, enquanto isso, a falta vai deixando de incomodar por acostumar, não por melhorar.",
          image: "/images/narrativa/impl-03-adiamento.jpg",
        },
        {
          quote: "Será que afeta os outros dentes?",
          description:
            "Essa é a dúvida que costuma vir junto. E é exatamente ela que uma avaliação com exames de imagem consegue responder.",
          image: "/images/narrativa/impl-04-duvida.jpg",
        },
      ],
      closing: {
        headline: "Você não precisa continuar se ajustando a uma falta que",
        headlineAccent: "tem solução.",
        support:
          "Existe um caminho para repor o que falta, planejado a partir do seu caso e dos seus exames. Ele começa com uma conversa.",
      },
    },
    solution: {
      eyebrow: "A solução",
      headline: "Repor o que falta pode devolver mais do que",
      headlineAccent: "um dente.",
      lead: "O implante dentário repõe a raiz e o dente, devolvendo função e estética de forma planejada a partir da condição óssea e clínica do seu caso.",
      photo: "/images/clinica/atendimento-implante-wide.jpg",
      photoAlt: "Equipe da OralClin durante um atendimento na clínica",
      insetPhoto: "/images/clinica/implante-modelo.jpg",
      insetAlt: "Modelo didático mostrando como o implante se posiciona no osso",
      benefits: [
        {
          title: "Mastigação equilibrada",
          description: "Voltar a usar os dois lados.",
        },
        {
          title: "Estética natural",
          description: "Um dente que conversa com os seus.",
        },
        {
          title: "Planejamento individual",
          description: "Posição definida a partir dos seus exames.",
        },
        {
          title: "Acompanhamento",
          description: "A equipe junto em cada etapa.",
        },
      ],
    },
    journey: {
      eyebrow: "Próximo passo",
      headline: "Como saber se o implante é",
      headlineAccent: "indicado para você?",
      paragraphs: [
        "Cada caso é diferente. Tudo começa com uma avaliação individual, que verifica a condição dos dentes vizinhos, da gengiva e do osso da região.",
        "Depois, mostramos o caminho com clareza — sem pressão para decidir antes de entender.",
      ],
      steps: [
        {
          label: "Avaliação",
          title: "Conhecemos o seu caso",
          description:
            "Uma conversa individual para entender há quanto tempo falta o dente, como isso afeta a sua rotina e o que você espera do tratamento.",
          image: "/images/clinica/planejamento-avaliacao.jpg",
          imageAlt: "Profissional da OralClin registrando a avaliação do paciente",
        },
        {
          label: "Exames",
          title: "Verificamos a condição óssea",
          description:
            "Os exames de imagem mostram quanto osso existe na região e se ele comporta o implante — é o que define se o caso está pronto ou precisa de uma etapa antes.",
          image: "/images/clinica/diagnostico-raiox.jpg",
          imageAlt: "Radiografia panorâmica usada para avaliar a região do implante",
        },
        {
          label: "Planejamento",
          title: "Definimos posição e quantidade",
          description:
            "A partir dos exames, a equipe define onde cada implante entra e quantos são necessários, com as etapas e o tempo de cada uma.",
          image: "/images/clinica/diagnostico-scan.jpg",
          imageAlt: "Equipe da OralClin analisando o escaneamento do caso",
        },
        {
          label: "Decisão",
          title: "A escolha é sua",
          description:
            "Você recebe a orientação necessária para decidir com consciência — no seu tempo, sabendo exatamente o que está escolhendo.",
          image: "/images/clinica/decisao-orientacao.jpg",
          imageAlt: "Profissional da OralClin explicando o tratamento com um modelo de implante",
        },
      ],
      reassurance: {
        line: "Você não precisa chegar sabendo quantos implantes precisa.",
        emphasis: "Precisa apenas dar o primeiro passo.",
      },
      closing: "Vamos descobrir juntos o melhor caminho para o seu sorriso.",
    },
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
    heroH1: "Alinhadores Invisíveis em Itapoá",
    heroSubheadline: "Conheça as possibilidades dos alinhadores transparentes e descubra se esse tratamento pode ser indicado para você.",
    hero: {
      headline: "Alinhar o sorriso sem que a sua rotina",
      headlineAccent: "precise mudar por causa disso.",
      lead: "Reuniões, fotos, conversas de perto. A vontade de alinhar os dentes costuma esbarrar no receio de passar meses com algo aparente no sorriso.",
      formIntro: "Você começa com uma avaliação individual que verifica se o seu caso tem indicação para alinhadores e o que esperar de cada etapa.",
      trustItems: [
        "Avaliação individual",
        "Escaneamento digital",
        "Etapas planejadas antes de começar",
        "Acompanhamento em cada troca",
        "Itapoá/SC",
      ],
      photo: "/images/tratamentos/trat-alinhadores.jpg",
    },
    story: {
      eyebrow: "Uma história real",
      quote: "Trabalhando e aparecendo nas câmeras normalmente.",
      paragraphs: [
        "O que você acabou de ler são as palavras da Nathaly. Ela mesma gravou a própria jornada — da fachada da clínica ao consultório, da avaliação até a troca dos alinhadores.",
        "O scanner digital tornou o planejamento preciso e confortável. Os alinhadores, transparentes e discretos, seguiram com ela na rotina de trabalho sem que ninguém precisasse notar.",
      ],
      patientName: "Nathaly Monteiro",
      patientRole: "Criadora de conteúdo",
      video: "/video/depoimento-nathaly.mp4",
      poster: "/video/depoimento-nathaly-poster.jpg",
    },
    adaptations: {
      eyebrow: "Talvez você faça isso sem perceber",
      headline: "A gente aprende a esconder",
      headlineAccent: "sem nem decidir esconder.",
      lead: "Escolher o ângulo da foto. Segurar o sorriso. Adiar mais um pouco. São ajustes pequenos, feitos quase no automático.",
      leadEmphasis: "E hábito, depois de um tempo, deixa de parecer escolha.",
      items: [
        {
          quote: "Sempre o mesmo ângulo na foto.",
          image: "/images/narrativa/alinhador-angulo.jpg",
          description:
            "Você já sabe qual lado favorece, e vira para ele sem pensar. Não é vaidade: é um ensaio silencioso que você repete há anos.",
        },
        {
          quote: "Aparelho? Agora?",
          image: "/images/narrativa/alinhador-agora.jpg",
          description:
            "A vontade existe, mas esbarra na ideia de passar meses com algo aparente — em reunião, em foto, em conversa de perto.",
        },
        {
          quote: "Depois desse projeto eu resolvo.",
          image: "/images/narrativa/alinhador-depois.jpg",
          description:
            "Sempre tem um compromisso no caminho. E o tratamento vai ficando para um momento mais calmo que nunca chega.",
        },
        {
          quote: "Melhor não abrir muito o sorriso.",
          image: "/images/narrativa/alinhador-sorriso.jpg",
          description:
            "O sorriso sai contido sem você mandar. É o corpo protegendo algo que a cabeça já decidiu esconder.",
        },
      ],
      closing: {
        headline: "Alinhar o sorriso não precisa custar",
        headlineAccent: "meses de constrangimento.",
        support:
          "Existe um caminho discreto, com as etapas planejadas antes de começar. Ele começa com uma avaliação que confirma se o seu caso tem indicação.",
      },
    },
    solution: {
      eyebrow: "A solução",
      headline: "Alinhar sem que ninguém precise",
      headlineAccent: "reparar no processo.",
      lead: "Os alinhadores são placas transparentes e removíveis, trocadas em etapas definidas digitalmente antes de o tratamento começar.",
      photo: "/images/clinica/planejamento-alinhador-wide.jpg",
      photoAlt: "Profissional da OralClin planejando o tratamento com alinhadores no computador",
      insetPhoto: "/images/clinica/alinhador-produto.jpg",
      insetAlt: "Alinhador transparente removível",
      benefits: [
        {
          title: "Discrição",
          description: "Transparentes no dia a dia.",
        },
        {
          title: "Liberdade",
          description: "Removíveis para comer e higienizar.",
        },
        {
          title: "Planejamento digital",
          description: "As etapas definidas antes de começar.",
        },
        {
          title: "Acompanhamento",
          description: "Consultas de controle ao longo do caminho.",
        },
      ],
    },
    journey: {
      eyebrow: "Próximo passo",
      headline: "Como saber se o alinhador é",
      headlineAccent: "indicado para você?",
      paragraphs: [
        "Nem todo caso tem indicação para alinhadores. Tudo começa com uma avaliação individual, que verifica o tipo de movimentação que os seus dentes precisam.",
        "Depois, mostramos o caminho com clareza — sem pressão para decidir antes de entender.",
      ],
      steps: [
        {
          label: "Avaliação",
          title: "Conhecemos o seu caso",
          description:
            "Uma conversa individual para entender o que te incomoda no sorriso hoje e o que você gostaria de mudar.",
          image: "/images/clinica/planejamento-avaliacao.jpg",
          imageAlt: "Profissional da OralClin registrando a avaliação do paciente",
        },
        {
          label: "Escaneamento",
          title: "Mapeamos seus dentes",
          description:
            "O escaneamento digital substitui a moldagem e gera o modelo em que o tratamento será planejado — sem pasta, sem desconforto.",
          image: "/images/clinica/diagnostico-scan.jpg",
          imageAlt: "Equipe da OralClin analisando o escaneamento intraoral",
        },
        {
          label: "Planejamento",
          title: "Você vê o caminho antes de começar",
          description:
            "As etapas de movimentação são definidas digitalmente, então dá para entender quantas trocas serão necessárias antes de iniciar.",
          image: "/images/clinica/diagnostico-raiox.jpg",
          imageAlt: "Exame de imagem usado no planejamento do tratamento",
        },
        {
          label: "Decisão",
          title: "A escolha é sua",
          description:
            "Você recebe a orientação necessária para decidir com consciência — no seu tempo, sabendo exatamente o que está escolhendo.",
          image: "/images/clinica/decisao-orientacao.jpg",
          imageAlt: "Profissional da OralClin explicando o tratamento ao paciente",
        },
      ],
      reassurance: {
        line: "Você não precisa chegar sabendo se o seu caso tem indicação.",
        emphasis: "Precisa apenas dar o primeiro passo.",
      },
      closing: "Vamos descobrir juntos o melhor caminho para o seu sorriso.",
    },
    ctaLabel: "Descobrir se é para mim",
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
      { question: "Quanto custa o tratamento com alinhadores?", answer: "O valor depende do planejamento específico e será apresentado após a avaliação do seu caso." },
      { question: "Alinhador vale a pena?", answer: "Isso depende dos seus objetivos e da indicação para o seu caso, temas que a avaliação ajuda a esclarecer." },
      { question: "Alinhador ou aparelho convencional?", answer: "A escolha entre as opções depende da avaliação clínica individual e das necessidades específicas de cada paciente." },
    ],
  },
  {
    slug: "facetas-itapoa",
    title: "Facetas",
    shortDescription: "Corrija imperfeições e realce o que você tem de melhor, com resultado natural.",
    seoTitle: "Facetas Dentárias em Itapoá | OralClin Odontologia",
    seoDescription: "Entenda como funcionam as facetas dentárias, para quem podem ser indicadas e agende uma avaliação na OralClin, em Itapoá.",
    heroEyebrow: "Odontologia em Itapoá",
    heroH1: "Facetas Dentárias em Itapoá",
    heroSubheadline: "Uma alternativa estética para forma, cor e alinhamento aparente dos dentes, sempre definida a partir de avaliação individual.",
    hero: {
      headline: "Um sorriso que continua sendo o seu —",
      headlineAccent: "só que do jeito que você gostaria.",
      lead: "Não é sobre ter outro sorriso. É sobre ajustar aquele detalhe que te incomoda há tempo na foto, no espelho, na hora de rir sem pensar.",
      formIntro: "O planejamento vem antes de qualquer preparo: você entende o que é possível no seu caso e decide com clareza.",
      trustItems: ["Planejamento antes de decidir", "Resultado natural", "Itapoá/SC"],
      photo: "/images/tratamentos/trat-facetas.jpg",
    },
    ctaLabel: "Quero avaliar meu caso",
    whatsappMessage: "Olá! Gostaria de saber mais sobre facetas e entender se são indicadas para o meu caso.",
    painPoints: [
      "Incômodo com a cor, o formato ou o tamanho dos dentes da frente.",
      "Pequenos desgastes, manchas ou espaços que aparecem ao sorrir.",
      "Vontade de harmonizar o sorriso mantendo uma aparência natural.",
    ],
    whatIsIt: "Facetas são lâminas finas fixadas na face visível dos dentes, usadas para ajustar forma, cor e proporção do sorriso. Existem diferentes materiais e técnicas, e a escolha depende da avaliação clínica de cada caso — inclusive da condição do dente que vai recebê-las.",
    whoItsFor: [
      "Pessoas incomodadas com cor, formato ou proporção dos dentes anteriores.",
      "Quem tem pequenas fraturas, desgastes ou espaços entre os dentes.",
      "Pacientes que querem entender se o próprio caso tem indicação estética.",
    ],
    benefits: [
      "Ajuste de forma, cor e proporção dentro do que o caso permite.",
      "Planejamento prévio para você visualizar a proposta antes de decidir.",
      "Resultado pensado para se integrar de forma natural ao seu rosto.",
    ],
    howItWorks: [
      "Avaliação clínica da saúde bucal e da condição dos dentes envolvidos.",
      "Planejamento estético do formato, da cor e da proporção do sorriso.",
      "Preparo dos dentes conforme a técnica indicada para o caso.",
      "Instalação das facetas e ajustes finais de acompanhamento.",
    ],
    planningText: "Facetas são um tratamento estético e exigem que a saúde bucal esteja em ordem antes de começar. O planejamento considera a condição de cada dente, a expectativa do paciente e o que é possível alcançar no caso específico.",
    technologyText: "O planejamento estético é apoiado por recursos de imagem que ajudam a alinhar, antes do início, a expectativa do paciente e a proposta da equipe clínica.",
    objections: [
      { question: "Faceta estraga o dente?", answer: "O preparo varia conforme a técnica e a condição de cada dente. Essa é justamente uma das questões discutidas na avaliação, antes de qualquer decisão." },
      { question: "O resultado fica artificial?", answer: "Forma, cor e proporção são definidas no planejamento, considerando o seu rosto e a sua expectativa. O objetivo é um resultado que se integre naturalmente." },
      { question: "Quanto tempo dura?", answer: "A durabilidade depende do material, dos hábitos e da manutenção. A equipe explica os cuidados necessários durante a avaliação." },
      { question: "Quanto custa?", answer: "O valor depende do número de dentes e da técnica indicada, e é apresentado após a avaliação do seu caso." },
      { question: "Meu caso tem indicação?", answer: "Só é possível confirmar após avaliação clínica, que verifica a saúde bucal e a condição dos dentes que receberiam as facetas." },
    ],
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
