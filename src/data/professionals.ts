export type Professional = {
  name: string;
  /** Sempre exibir junto do nome — exigência do CFO para publicidade odontológica */
  cro: string;
  role: string;
  /**
   * Especialidade registrada. Fica vazia até a clínica confirmar: divulgar
   * especialidade não registrada é infração, então nada aqui é presumido.
   */
  specialty?: string;
  photo?: string;
};

/** Responsável técnica da clínica, conforme placa da fachada. */
export const responsibleProfessional: Professional = {
  name: "Dra. Taliane Dallarosa",
  cro: "CRO-SC 17510",
  role: "Responsável técnica",
  photo: "/images/clinica/dra-taliane.jpg",
};

/**
 * Demais profissionais entram aqui conforme nome + CRO forem confirmados.
 * Com dois ou mais, a seção de equipe passa a exibir a frase de conjunto
 * automaticamente.
 */
export const professionals: Professional[] = [responsibleProfessional];

/** Aviso exibido enquanto os dados dos demais profissionais não chegarem. */
export const professionalsNote =
  "Nomes, CROs e especialidades dos demais profissionais serão inseridos após o envio das informações oficiais.";
