import { MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Brand } from "@/components/ui/Brand";

type CampaignHeaderProps = {
  /**
   * Quando true, a logo leva para a Home.
   *
   * Padrão é false: numa LP de anúncio, qualquer link é rota de fuga para um
   * visitante que custou dinheiro em mídia. Nas páginas de tratamento, que
   * também recebem tráfego orgânico, a volta para a Home é esperada.
   */
  linkLogo?: boolean;
};

/**
 * Topo enxuto: marca e localização, sem menu de navegação.
 */
export function CampaignHeader({ linkLogo = false }: CampaignHeaderProps) {
  return (
    <header className="w-full bg-white/70 backdrop-blur-xl border-b border-white/40 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Brand tone="color" height={36} asStatic={!linkLogo} />

        <span className="flex items-center gap-2 text-xs md:text-sm text-[#52717a]">
          <MapPin size={15} className="text-brand-green" />
          {clinic.city}, {clinic.state}
        </span>
      </div>
    </header>
  );
}
