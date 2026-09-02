import { clinic } from "@/data/clinic";
import { Brand } from "@/components/ui/Brand";
import { responsibleProfessional } from "@/data/professionals";

export function Footer() {
  return (
    <footer className="bg-[#082e3d] text-[#bcd2d7] py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-8">
          <div>
            <Brand tone="white" height={34} />
          </div>

          <div className="text-xs space-y-1">
            <p className="text-white font-heading font-semibold mb-3">Navegação</p>
            <div className="space-y-2">
              <a href="#tratamentos" className="block hover:text-white transition-colors">
                Tratamentos
              </a>
              <a href="#oralclin" className="block hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#equipe" className="block hover:text-white transition-colors">
                Equipe
              </a>
              <a href="/blog" className="block hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div className="text-xs space-y-1">
            <p className="text-white font-heading font-semibold mb-3">Contato</p>
            <p>{clinic.phoneDisplay}</p>
            <p>{clinic.address}</p>
            <p className="text-xs mt-2">
              <a href={clinic.mapsUrl} className="hover:text-white transition-colors">
                Ver no mapa
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-[#264f5e] pt-6 space-y-2">
          <p className="text-xs text-[#7a9aa2]">
            {clinic.name} — {clinic.city}, {clinic.state}
          </p>
          <p className="text-xs text-[#7a9aa2]">
            {responsibleProfessional.role}: {responsibleProfessional.name} —{" "}
            {responsibleProfessional.cro}
          </p>
          <p className="text-[11px] text-[#7a9aa2] max-w-2xl">
            Os resultados de qualquer tratamento variam conforme o caso de cada paciente e dependem
            de avaliação clínica individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
