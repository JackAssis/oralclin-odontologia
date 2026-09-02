import Image from "next/image";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import type { Campaign } from "@/data/campaigns";
import type { Treatment } from "@/data/treatments";
import { CampaignHeader } from "./CampaignHeader";
import { CampaignFooter } from "./CampaignFooter";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { GlassCard } from "@/components/decor/GlassCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TrustBar } from "@/components/sections/TrustBar";
import { AccordionFAQ } from "@/components/sections/AccordionFAQ";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { teamPhotos, photos, treatmentPhotos } from "@/data/media";
import { clinic } from "@/data/clinic";

type CampaignLandingPageProps = {
  campaign: Campaign;
  treatment: Treatment;
};

export function CampaignLandingPage({ campaign, treatment }: CampaignLandingPageProps) {
  return (
    <main>
      <CampaignHeader />

      {/* Hero: copy + formulário acima da dobra */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-mist to-[#e7f8f2] py-12 md:py-16">
        <GradientMesh variant="light" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
            <div className="space-y-6">
              <p className="flex items-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
                <span className="inline-block w-5 h-0.5 bg-current" />
                {treatment.title} em {clinic.city}
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-brand-navy leading-tight">
                {campaign.adHeadline}
              </h1>

              <p className="text-base md:text-lg text-[#426572] leading-relaxed">
                {campaign.adSubheadline}
              </p>

              <ul className="space-y-3">
                {campaign.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green flex items-center justify-center">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm md:text-base text-[#426572]">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 pt-2">
                <ShieldCheck size={19} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-[#4d6d77]">
                  Avaliação personalizada para entender o seu caso antes de qualquer decisão.
                </span>
              </div>
            </div>

            {/* Formulario acima da dobra */}
            <GlassCard variant="light" className="p-6 md:p-8" id="form">
              <div className="mb-5">
                <h2 className="font-heading font-semibold text-xl text-brand-navy">
                  {campaign.formTitle}
                </h2>
                <p className="text-sm text-[#52717a] mt-1">{campaign.formSubtitle}</p>
              </div>

              <LeadForm
                variant="light"
                defaultTreatment={treatment.slug}
                source={`lp-${campaign.slug}`}
              />

              <div className="mt-5 pt-5 border-t border-brand-line/60">
                <p className="text-xs text-[#67828a] mb-3 text-center">
                  Prefere falar agora pelo WhatsApp?
                </p>
                <WhatsAppButton
                  message={campaign.whatsappMessage}
                  variant="outline"
                  className="w-full"
                >
                  <MessageCircle size={18} />
                  Falar pelo WhatsApp
                </WhatsAppButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Dores */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
            Você reconhece alguma dessas situações?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatment.painPoints.map((point) => (
              <GlassCard key={point} variant="light" className="p-6">
                <p className="text-sm md:text-base text-[#52717a] leading-relaxed">{point}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* O que é / Para quem */}
      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
              O que é {treatment.title.toLowerCase()}?
            </h2>
            <p className="text-base text-[#52717a] leading-relaxed">{treatment.whatIsIt}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
              Para quem pode ser indicado?
            </h2>
            <ul className="space-y-3">
              {treatment.whoItsFor.map((item) => (
                <li key={item} className="border-l-4 border-brand-blue pl-4 py-1">
                  <p className="text-sm md:text-base text-[#52717a]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
            Como funciona
          </h2>
          <div className="space-y-5">
            {treatment.howItWorks.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-green text-white flex items-center justify-center font-heading font-semibold text-sm">
                  {index + 1}
                </span>
                <p className="text-base text-[#52717a] leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonial variant="light" />

      <GoogleReviews />

      {/* Estrutura e equipe */}
      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
              Uma equipe preparada para cuidar de você
            </h2>
            <p className="text-base text-[#52717a] leading-relaxed">{treatment.technologyText}</p>
            <p className="text-xs text-[#67828a]">
              Nomes, CROs e especialidades serão inseridos após o envio das informações
              profissionais oficiais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden">
              <Image
                src={teamPhotos[2]}
                alt="Profissional da equipe OralClin"
                fill
                sizes="(max-width: 900px) 45vw, 22vw"
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
            <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden">
              <Image
                src={photos.tecnologia}
                alt="Procedimento odontológico na oralclin"
                fill
                sizes="(max-width: 900px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {treatment.objections.length > 0 && (
        <AccordionFAQ
          items={treatment.objections}
          title="Dúvidas"
          subtitle="Antes de tomar qualquer decisão, talvez você tenha algumas dúvidas."
        />
      )}

      {/* CTA final com o formulário repetido */}
      <section
        className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white"
        id="contato"
      >
        <GradientMesh variant="dark" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
              Vamos entender o{" "}
              <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic">
                seu caso?
              </em>
            </h2>
            <p className="text-base text-[#c0d8df]">
              Preencha o formulário e a equipe entra em contato para agendar a sua avaliação.
            </p>
            <WhatsAppButton message={campaign.whatsappMessage} variant="light">
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </WhatsAppButton>
          </div>

          <GlassCard variant="dark" className="p-6 md:p-8">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              {campaign.formTitle}
            </h3>
            <LeadForm
              variant="dark"
              defaultTreatment={treatment.slug}
              source={`lp-${campaign.slug}-final`}
            />
          </GlassCard>
        </div>
      </section>

      <CampaignFooter />

      <StickyMobileCTA href="#form" whatsappMessage={campaign.whatsappMessage} />
    </main>
  );
}
