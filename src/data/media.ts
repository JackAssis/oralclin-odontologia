/** Fotos da clínica, agrupadas por uso — evita repetir caminho solto pelos componentes. */

export const photos = {
  /** Dra. Taliane em procedimento — foto de capa da Home */
  draTalianeProcedimento: "/images/clinica/taliane-procedimento.jpg",
  /** Retrato da Dra. Taliane, responsável pela OralClin */
  draTaliane: "/images/clinica/dra-taliane.jpg",
  /** Retrato de outra profissional da equipe */
  retrato: "/images/clinica/equipe-retrato.jpg",
  /** Modelo didático de implante — ideal para explicar o tratamento */
  implanteModelo: "/images/clinica/implante-modelo.jpg",
  /** Planejamento digital de alinhador na tela */
  planejamentoDigital: "/images/clinica/planejamento-digital.jpg",
  /** Duas profissionais analisando escaneamento intraoral */
  diagnosticoScan: "/images/clinica/diagnostico-scan.jpg",
  /** Raio-X panorâmico em tablet */
  diagnosticoRaioX: "/images/clinica/diagnostico-raiox.jpg",
  /** Sala clínica completa — mostra estrutura */
  estrutura: "/images/clinica/estrutura-consultorio.jpg",
  /** Atendimento com luz quente */
  atendimento: "/images/clinica/atendimento-humanizado.jpg",
  /** Dupla atendendo paciente, com a marca ao fundo */
  atendimentoEquipe: "/images/clinica/atendimento-equipe.jpg",
  /** Procedimento em close, luz azul — visual dramático, bom sobre fundo escuro */
  tecnologia: "/images/clinica/tecnologia-procedimento.jpg",
  /** Profissional preenchendo ficha de avaliação */
  planejamentoAvaliacao: "/images/clinica/planejamento-avaliacao.jpg",
  /** Cirurgia de implante */
  cirurgiaImplante: "/images/clinica/cirurgia-implante.jpg",
} as const;

/** Fotos usadas na grade de equipe */
export const teamPhotos = [
  photos.draTaliane,
  photos.retrato,
  photos.atendimentoEquipe,
  photos.cirurgiaImplante,
];

/** Fachada e ambiente — usadas na seção "Conheça a OralClin" */
export const facadePhotos = {
  /** Fachada completa, com a placa e a entrada */
  frente: "/images/clinica/fachada-frente.jpg",
  /** Detalhe do logotipo na fachada, contra o céu */
  logo: "/images/clinica/fachada-logo.jpg",
  /** Scanner intraoral em uso — tecnologia da clínica */
  scanner: "/images/clinica/scanner-procedimento.jpg",
};

/** Imagem ilustrativa de cada tratamento na grade da Home */
export const treatmentCardImages: Record<string, string> = {
  "protese-protocolo-itapoa": "/images/tratamentos/trat-protese-protocolo.jpg",
  "implante-dentario-itapoa": "/images/tratamentos/trat-implantes.jpg",
  "alinhadores-invisiveis-itapoa": "/images/tratamentos/trat-alinhadores.jpg",
  "facetas-itapoa": "/images/tratamentos/trat-facetas.jpg",
};

/** Imagem de apoio para cada tratamento, usada nas páginas e LPs */
export const treatmentPhotos: Record<string, string> = {
  "protese-protocolo-itapoa": photos.cirurgiaImplante,
  "implante-dentario-itapoa": photos.implanteModelo,
  "alinhadores-invisiveis-itapoa": photos.planejamentoDigital,
  "facetas-itapoa": photos.diagnosticoScan,
};
