import type { Treatment } from "@/data/treatments";
import { CampaignHeader } from "@/components/campaign/CampaignHeader";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AccordionFAQ } from "@/components/sections/AccordionFAQ";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { GlassCard } from "@/components/decor/GlassCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { PatientStory } from "./PatientStory";
import { TeamSection } from "./TeamSection";
import { AdaptationNarrative } from "./AdaptationNarrative";
import { SolutionTurn } from "./SolutionTurn";
import { JourneyTimeline } from "./JourneyTimeline";
import { clinic } from "@/data/clinic";

type TreatmentLandingPageProps = {
  treatment: Treatment;
};

export function TreatmentLandingPage({ treatment }: TreatmentLandingPageProps) {
  return (
    <main>
      {/* Sem menu: o objetivo da página é levar ao formulário, não navegar.
          A logo continua sendo o caminho de volta para a Home. */}
      <CampaignHeader linkLogo />

      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-brand-mist to-[#e7f8f2] relative overflow-hidden">
        <GradientMesh variant="light" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-14 items-center">
            <div className="space-y-8 md:space-y-9">
              {/* O termo de busca fica dentro do H1, acima da frase emocional:
                  preserva a palavra-chave para o orgânico sem abrir mão do impacto. */}
              <h1 className="space-y-5">
                <span className="flex items-center gap-2 font-heading font-semibold text-brand-green text-[11px] tracking-[0.18em] uppercase">
                  <span className="inline-block w-5 h-0.5 bg-current" />
                  {treatment.heroH1}
                </span>
                <span className="block text-[1.75rem] md:text-4xl lg:text-[2.6rem] font-heading font-semibold text-brand-navy leading-[1.18] tracking-[-0.01em]">
                  {treatment.hero.headline}{" "}
                  <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                    {treatment.hero.headlineAccent}
                  </span>
                </span>
              </h1>

              <p className="text-base md:text-lg text-[#4d6d77] leading-[1.75] max-w-md">
                {treatment.hero.lead}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Button href="#avaliacao">
                  {treatment.ctaLabel}
                  <ArrowRight size={17} strokeWidth={2.2} />
                </Button>
                <WhatsAppButton message={treatment.whatsappMessage} variant="outline">
                  <MessageCircle size={18} />
                  Falar pelo WhatsApp
                </WhatsAppButton>
              </div>

              {/* Desktop: linha fina distribuída */}
              <ul className="hidden md:flex flex-wrap items-center gap-x-3 gap-y-2 pt-1 text-[11px] tracking-[0.1em] uppercase text-[#7d959d] font-heading font-semibold">
                {treatment.hero.trustItems.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    {index > 0 && (
                      <span aria-hidden="true" className="w-1 h-1 rounded-full bg-brand-green/50" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>

              {/* Mobile: letreiro de uma linha. Empilhados, cinco selos
                  ocupavam meia tela e empurravam a foto para fora da dobra. */}
              <div className="md:hidden relative -mx-6 overflow-hidden pt-1">
                <div className="flex w-max animate-marquee">
                  {[0, 1].map((copy) => (
                    <ul
                      key={copy}
                      aria-hidden={copy === 1}
                      className="flex items-center gap-3 pr-3 text-[11px] tracking-[0.1em] uppercase text-[#7d959d] font-heading font-semibold"
                    >
                      {treatment.hero.trustItems.map((item) => (
                        <li key={`${item}-${copy}`} className="flex items-center gap-3 whitespace-nowrap">
                          <span
                            aria-hidden="true"
                            className="w-1 h-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-brand-mist to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-brand-mist to-transparent"
                />
              </div>
            </div>

            {/* Foto + card de depoimento sobreposto */}
            <div className="relative">
              <div className="relative h-[24rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={treatment.hero.photo}
                  alt={
                    treatment.hero.testimonial
                      ? `${treatment.hero.testimonial.name}, paciente da OralClin`
                      : `${treatment.title} na OralClin, em ${clinic.city}`
                  }
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>

              {treatment.hero.testimonial && (
                <figure className="relative md:absolute md:-bottom-6 md:-left-8 md:max-w-[19rem] mt-4 md:mt-0 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-xl p-5">
                  <blockquote className="text-sm text-brand-navy italic leading-relaxed">
                    &ldquo;{treatment.hero.testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-brand-green" aria-hidden="true" />
                    <span className="text-xs">
                      <strong className="font-heading font-semibold text-brand-navy">
                        {treatment.hero.testimonial.name}
                      </strong>
                      <span className="text-[#5a7a84]"> · {treatment.hero.testimonial.role}</span>
                    </span>
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* História real do paciente — a prova social vem antes da dor,
          então quem chega já sabe que existe saída. */}
      {treatment.story && (
        <PatientStory story={treatment.story} ctaLabel={treatment.ctaLabel} />
      )}

      {/* Identificação com a dor. Quando o tratamento tem a narrativa completa,
          ela substitui os cards de pain points — mesma função, muito mais forte. */}
      {treatment.adaptations ? (
        <AdaptationNarrative
          narrative={treatment.adaptations}
          ctaLabel={treatment.ctaLabel}
        />
      ) : (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-brand-navy">
                Você reconhece alguma dessas situações?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {treatment.painPoints.map((point, i) => (
                  <GlassCard key={i} variant="light" className="p-6 hover:-translate-y-1 transition-transform duration-300">
                    <p className="text-sm md:text-base text-[#52717a] leading-relaxed">{point}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* A virada: vem logo depois da dor, e abre clara de propósito */}
      {treatment.solution && <SolutionTurn solution={treatment.solution} />}

      {/* A jornada da decisão — responde "isso serve pra mim?" */}
      {treatment.journey && (
        <JourneyTimeline
          journey={treatment.journey}
          whatsappMessage={treatment.whatsappMessage}
          ctaLabel={treatment.ctaLabel}
        />
      )}

      <TeamSection />

      {/* Bloco de prova social: o depoimento em vídeo e as avaliações do Google
          ficam juntos, logo antes das objeções. Aqui a pessoa já entendeu o
          tratamento e está decidindo — é o momento em que a voz de outros
          pacientes pesa mais. */}
      <VideoTestimonial variant="light" />

      <GoogleReviews />

      {/* Objections Accordion */}
      {treatment.objections.length > 0 && (
        <AccordionFAQ items={treatment.objections} title="Dúvidas" subtitle="Antes de tomar qualquer decisão, talvez você tenha algumas dúvidas." />
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white relative overflow-hidden" id="avaliacao">
        <GradientMesh variant="dark" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold">
              Pronto para conversar sobre <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic">seu caso?</em>
            </h2>
            <p className="text-base text-[#c0d8df] max-w-2xl mx-auto leading-relaxed">
              {treatment.hero.formIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-3 justify-center h-full">
              <Button href="#avaliacao" variant="light">
                Agendar avaliação
                <ArrowRight size={17} strokeWidth={2.2} />
              </Button>
              <WhatsAppButton message={treatment.whatsappMessage} variant="light">
                Falar pelo WhatsApp
              </WhatsAppButton>
            </div>

            <GlassCard variant="dark" className="p-6 md:p-8">
              <h3 className="text-lg font-heading font-semibold text-white mb-4">Envie suas informações</h3>
              <LeadForm />
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
      {/* O formulário desta página tem id="avaliacao", não "#contato" (que é o
          da Home). Sem o href explícito, o botão fixo do mobile não levava a
          lugar nenhum. */}
      <StickyMobileCTA
        href="#avaliacao"
        whatsappMessage={treatment.whatsappMessage}
        ctaLabel="Agendar minha avaliação hoje"
      />
    </main>
  );
}
