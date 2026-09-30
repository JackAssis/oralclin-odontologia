export type Professional = {
  name: string;
  /** Sempre exibir junto do nome — exigência do CFO para publicidade odontológica */
  cro: string;
  role: string;
  /**
   * Especialidade registrada. Fica vazia até a clínica confirmar: divulgar
   * especialidade não registrada é infração, então o campo vazio não renderiza.
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

export const professionals: Professional[] = [
  responsibleProfessional,

  {
    name: "Dr. Eduardo Olsen Lazzaris",
    cro: "CRO-SC 11884",
    role: "Cirurgião-Dentista",
    specialty: "Implantodontia",
    photo: "/images/clinica/dr-eduardo.jpg",
  },

  {
    name: "Dra. Jéssica Conti Réus",
    cro: "CRO-SC 16211",
    role: "Cirurgiã-Dentista",
    photo: "/images/clinica/dra-jessica.jpg",
  },

  {
    name: "Simone de Castro",
    // SC-ASB-7193 — Auxiliar em Saúde Bucal, ativo no CFO
    cro: "ASB-SC 7193",
    role: "Auxiliar em Saúde Bucal",
    photo: "/images/clinica/simone.jpg",
  },
];

export const professionalsNote =
  "Registros verificados junto ao Conselho Federal de Odontologia.";
