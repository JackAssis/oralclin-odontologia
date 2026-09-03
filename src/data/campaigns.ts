export type Campaign = {
  /** Slug da LP: /lp/[slug] */
  slug: string;
  /** Referencia o tratamento em treatments.ts — de onde vem todo o conteúdo profundo */
  treatmentSlug: string;
  /** H1 da LP — deve espelhar o texto do anúncio (message match) */
  adHeadline: string;
  adSubheadline: string;
  /** Bullets acima da dobra, ao lado do formulário */
  bullets: string[];
  formTitle: string;
  formSubtitle: string;
  whatsappMessage: string;
  metaTitle: string;
};

export const campaigns: Campaign[] = [
  {
    slug: "protese-protocolo",
    treatmentSlug: "protese-protocolo-itapoa",
    adHeadline: "Prótese protocolo em Itapoá: dentes fixos, planejados para o seu caso",
    adSubheadline:
      "Uma alternativa fixa sobre implantes para quem perdeu a maior parte dos dentes. O primeiro passo é uma avaliação para entender se o seu caso tem indicação.",
    bullets: [
      "Prótese fixa, sem precisar remover para higienizar",
      "Planejamento individual com exames de imagem",
      "Avaliação para entender a indicação no seu caso",
    ],
    formTitle: "Agende sua avaliação",
    formSubtitle: "Preencha e a equipe entra em contato para entender o seu caso.",
    whatsappMessage:
      "Olá! Vim pelo anúncio de prótese protocolo e gostaria de agendar uma avaliação.",
    metaTitle: "Prótese Protocolo em Itapoá | Agende sua avaliação | OralClin",
  },
  {
    slug: "implante-dentario",
    treatmentSlug: "implante-dentario-itapoa",
    adHeadline: "Implante dentário em Itapoá: reposição planejada dente a dente",
    adSubheadline:
      "Recupere função e estética com um tratamento planejado a partir da avaliação clínica e dos exames de imagem do seu caso.",
    bullets: [
      "Planejamento individual da posição de cada implante",
      "Avaliação com exames de imagem antes de qualquer decisão",
      "Acompanhamento da equipe em todas as etapas",
    ],
    formTitle: "Agende sua avaliação",
    formSubtitle: "Preencha e a equipe entra em contato para entender o seu caso.",
    whatsappMessage:
      "Olá! Vim pelo anúncio de implante dentário e gostaria de agendar uma avaliação.",
    metaTitle: "Implante Dentário em Itapoá | Agende sua avaliação | OralClin",
  },
  {
    slug: "alinhadores-invisiveis",
    treatmentSlug: "alinhadores-invisiveis-itapoa",
    adHeadline: "Alinhadores invisíveis em Itapoá: alinhe seu sorriso com discrição",
    adSubheadline:
      "Placas transparentes e removíveis, planejadas etapa por etapa. Descubra na avaliação se o seu caso tem indicação para alinhadores.",
    bullets: [
      "Aparência discreta durante todo o uso",
      "Removível para comer e higienizar, conforme orientação",
      "Planejamento digital das etapas de movimentação",
    ],
    formTitle: "Descubra se e para o seu caso",
    formSubtitle: "Preencha e a equipe entra em contato para avaliar a indicação.",
    whatsappMessage:
      "Olá! Vim pelo anúncio de alinhadores invisíveis e gostaria de saber se e indicado para o meu caso.",
    metaTitle: "Alinhadores Invisíveis em Itapoá | Avaliação | OralClin",
  },
  {
    slug: "facetas",
    treatmentSlug: "facetas-itapoa",
    adHeadline: "Facetas em Itapoá: harmonia que parece natural",
    adSubheadline:
      "Ajuste de forma, cor e proporção do sorriso, planejado a partir da avaliação clínica do seu caso.",
    bullets: [
      "Planejamento estético antes de qualquer preparo",
      "Resultado pensado para se integrar ao seu rosto",
      "Avaliação para confirmar a indicação no seu caso",
    ],
    formTitle: "Agende sua avaliação",
    formSubtitle: "Preencha e a equipe entra em contato para entender o seu caso.",
    whatsappMessage:
      "Olá! Vim pelo anúncio de facetas e gostaria de agendar uma avaliação.",
    metaTitle: "Facetas Dentárias em Itapoá | Agende sua avaliação | OralClin",
  },
];

export function getCampaignBySlug(slug: string) {
  return campaigns.find((campaign) => campaign.slug === slug);
}
