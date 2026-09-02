import { MessageCircle, CalendarDays } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type StickyMobileCTAProps = {
  /** Ancora do CTA de agendamento — as LPs de campanha apontam para o próprio formulário */
  href?: string;
  whatsappMessage?: string;
};

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre os tratamentos disponibilizados pela OralClin e agendar uma avaliação.";

export function StickyMobileCTA({
  href = "#contato",
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
}: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden grid grid-cols-[0.84fr_1.16fr] gap-0 bg-white shadow-[0_-5px_20px_rgba(15,63,83,0.15)] z-40 pb-safe">
      <WhatsAppButton message={whatsappMessage} variant="outline" ariaLabel="Falar pelo WhatsApp">
        <MessageCircle size={18} />
        <span className="hidden sm:inline">WhatsApp</span>
      </WhatsAppButton>

      <a
        href={href}
        aria-label="Agendar avaliação"
        className="flex items-center justify-center gap-2 bg-brand-blue text-white font-heading font-semibold text-xs transition-transform hover:-translate-y-0.5"
      >
        <CalendarDays size={18} />
        <span className="hidden sm:inline">Agendar</span>
      </a>
    </div>
  );
}
