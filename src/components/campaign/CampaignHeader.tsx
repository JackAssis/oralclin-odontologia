import { MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";
import { Brand } from "@/components/ui/Brand";

/**
 * Topo das LPs de campanha: só a marca e a localização.
 * Sem menu e sem links de saída — cada link aqui é uma rota de fuga
 * para um visitante que custou dinheiro em mídia paga.
 */
export function CampaignHeader() {
  return (
    <header className="w-full bg-white/70 backdrop-blur-xl border-b border-white/40">
      <div className="max-w-5xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* asStatic: LP de campanha não tem link de saída, nem no logo */}
        <Brand tone="color" height={36} asStatic />

        <span className="flex items-center gap-2 text-xs md:text-sm text-[#52717a]">
          <MapPin size={15} className="text-brand-green" />
          {clinic.city}, {clinic.state}
        </span>
      </div>
    </header>
  );
}
