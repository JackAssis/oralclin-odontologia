"use client";

import { MessageCircle, ShieldCheck } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { LeadForm } from "@/components/forms/LeadForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GlassCard } from "@/components/decor/GlassCard";
import { GradientMesh } from "@/components/decor/GradientMesh";

type Props = {
  treatment: Treatment;
};

/**
 * Bloco de captura logo depois do hero.
 *
 * Numa página de venda, quem já chegou decidido não deveria ter que atravessar
 * a narrativa inteira para conseguir agendar. Este bloco atende esse visitante;
 * quem ainda precisa ser convencido simplesmente rola e encontra a história, a
 * dor, a solução — e o formulário completo de novo no fim.
 *
 * A âncora #avaliacao continua no formulário do fim de propósito: quem clica no
 * CTA do hero está pedindo para entender mais, e o caminho longo é o que
 * converte esse perfil.
 */
export function QuickCapture({ treatment }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-mist py-14 md:py-16" id="agendar">
      <GradientMesh variant="light" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
          {/* Argumento curto — quem chegou aqui já está inclinado a agir */}
          <div className="space-y-5">
            <p className="flex items-center gap-3 font-heading font-semibold text-brand-green text-[11px] tracking-[0.18em] uppercase">
              <span className="inline-block w-6 h-px bg-current" />
              Comece por aqui
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy leading-[1.2]">
              Não precisa esperar para{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                entender o seu caso.
              </span>
            </h2>

            <p className="text-base text-[#4d6d77] leading-relaxed">
              {treatment.hero.formIntro}
            </p>

            <div className="flex items-start gap-3 pt-1">
              <ShieldCheck size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#5a7a84]">
                Avaliação individual, sem compromisso de decidir na hora.
              </span>
            </div>

            <div className="pt-1">
              <WhatsAppButton message={treatment.whatsappMessage} variant="outline">
                <MessageCircle size={18} />
                Prefiro falar pelo WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Formulário */}
          <GlassCard variant="light" className="p-6 md:p-8">
            <h3 className="font-heading font-semibold text-lg text-brand-navy">
              Agende sua avaliação
            </h3>
            <p className="text-sm text-[#5a7a84] mt-1 mb-5">
              Preencha e a equipe entra em contato para entender o seu caso.
            </p>

            <LeadForm
              variant="light"
              defaultTreatment={treatment.slug}
              source={`pagina-${treatment.slug}-topo`}
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
