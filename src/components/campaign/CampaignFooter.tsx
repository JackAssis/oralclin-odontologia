import { clinic } from "@/data/clinic";
import { Brand } from "@/components/ui/Brand";
import { responsibleProfessional } from "@/data/professionals";

/**
 * Rodapé das LPs de campanha: apenas identificação e dados obrigatórios.
 * Sem links de navegação, pelo mesmo motivo do CampaignHeader.
 */
export function CampaignFooter() {
  return (
    <footer className="bg-[#082e3d] text-[#bcd2d7] py-10">
      <div className="max-w-5xl mx-auto px-6 space-y-3 text-center">
        <Brand tone="white" height={32} asStatic className="mx-auto" />
        <p className="text-xs">
          {clinic.name} — {clinic.city}, {clinic.state}
        </p>
        <p className="text-xs">{clinic.address}</p>
        <p className="text-xs">{clinic.phoneDisplay}</p>
        <p className="text-[11px] text-[#7a9aa2] max-w-xl mx-auto pt-2">
          {responsibleProfessional.role}: {responsibleProfessional.name} —{" "}
          {responsibleProfessional.cro}. Os resultados de qualquer tratamento variam conforme o caso
          de cada paciente e dependem de avaliação clínica individual.
        </p>
      </div>
    </footer>
  );
}
