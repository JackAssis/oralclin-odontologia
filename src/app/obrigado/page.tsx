import type { Metadata } from "next";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Obrigado | OralClin",
  robots: {
    index: false,
  },
};

const reassurance = ["Atendimento personalizado", "Equipe especializada", clinic.city];

export default function ThankYou() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-brand-mist py-20 md:py-28 min-h-[70vh] flex items-center">
        <GradientMesh variant="light" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          {/* Confirmação */}
          <div className="flex justify-center mb-7">
            <span className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-green flex items-center justify-center shadow-lg">
              <Check size={30} className="text-white" strokeWidth={3} />
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-heading font-semibold text-brand-navy leading-tight">
              Recebemos suas informações.
            </h1>

            <p className="text-lg md:text-xl font-heading font-semibold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Seu primeiro passo para cuidar do seu sorriso já foi dado.
            </p>

            <p className="text-base text-[#52717a] max-w-lg mx-auto leading-relaxed">
              Nossa equipe da OralClin entrará em contato para entender melhor o seu caso e orientar
              você sobre os próximos passos.
            </p>
          </div>

          {/* Atalho para quem não quer esperar o retorno */}
          <div className="mt-10 pt-10 border-t border-brand-line space-y-5">
            <p className="font-heading font-semibold text-brand-navy">
              Quer falar com a gente agora?
            </p>

            <WhatsAppButton
              message="Olá! Acabei de enviar meus dados pelo site e gostaria de falar sobre a minha avaliação."
              icon={<ArrowRight size={17} strokeWidth={2.2} />}
            >
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </WhatsAppButton>
          </div>

          {/* Reforço discreto */}
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-[#7d959d]">
            {reassurance.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true" className="text-brand-green/60">•</span>}
                {item}
              </span>
            ))}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
