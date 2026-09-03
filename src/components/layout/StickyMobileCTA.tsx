import { MessageCircle, CalendarDays } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type StickyMobileCTAProps = {
  /**
   * Âncora do CTA de agendamento. O padrão "#contato" é o da Home; as páginas
   * de tratamento usam "#avaliacao" e precisam passar isso explicitamente,
   * senão o clique não leva a lugar nenhum.
   */
  href?: string;
  whatsappMessage?: string;
  /** Texto do botão de agendamento */
  ctaLabel?: string;
};

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre os tratamentos disponibilizados pela OralClin e agendar uma avaliação.";

export function StickyMobileCTA({
  href = "#contato",
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
  ctaLabel = "Agendar",
}: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden grid grid-cols-[0.72fr_1.28fr] bg-white shadow-[0_-5px_20px_rgba(15,63,83,0.15)] z-40 pb-safe">
      <WhatsAppButton message={whatsappMessage} variant="outline" ariaLabel="Falar pelo WhatsApp">
        <MessageCircle size={18} />
      </WhatsAppButton>

      <a
        href={href}
        aria-label={ctaLabel}
        className="flex items-center justify-center gap-2 px-3 bg-gradient-to-r from-brand-blue to-brand-green text-white font-heading font-semibold text-[13px] leading-tight text-center"
      >
        <CalendarDays size={17} className="flex-shrink-0" />
        {ctaLabel}
      </a>
    </div>
  );
}
