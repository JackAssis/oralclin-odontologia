import type { Treatment } from "@/data/treatments";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AccordionFAQ } from "@/components/sections/AccordionFAQ";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { GlassCard } from "@/components/decor/GlassCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { teamPhotos, photos, treatmentPhotos } from "@/data/media";
import { treatments } from "@/data/treatments";
import { clinic } from "@/data/clinic";

type TreatmentLandingPageProps = {
  treatment: Treatment;
};

export function TreatmentLandingPage({ treatment }: TreatmentLandingPageProps) {
  const treatmentIndex = treatments.findIndex((t) => t.slug === treatment.slug);
  const offset = treatmentIndex >= 0 ? treatmentIndex * 2 : 0;
  const pageTeamPhotos = [
    teamPhotos[offset % teamPhotos.length],
    teamPhotos[(offset + 1) % teamPhotos.length],
  ];

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="mt-20 pt-16 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-brand-mist to-[#e7f8f2] relative overflow-hidden">
        <GradientMesh variant="light" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="flex items-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
                  <span className="inline-block w-5 h-0.5 bg-current" />
                  {treatment.heroEyebrow}
                </p>
                <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-navy leading-tight">
                  {treatment.heroH1}
                </h1>
                <p className="text-base md:text-lg text-[#426572]">{treatment.heroSubheadline}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 flex-wrap">
                <Button href="#avaliacao">
                  {treatment.ctaLabel}
                  <ArrowRight size={17} strokeWidth={2.2} />
                </Button>
                <WhatsAppButton message={treatment.whatsappMessage} variant="outline">
                  Falar pelo WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            <div className="relative h-72 md:h-[26rem] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={treatmentPhotos[treatment.slug] ?? photos.estrutura}
                alt={`${treatment.title} na oralclin, em ${clinic.city}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
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

      {/* What Is It */}
      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">O que é {treatment.title.toLowerCase()}?</h2>
            <p className="text-base text-[#52717a] leading-relaxed">{treatment.whatIsIt}</p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">Para quem pode ser indicado?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatment.whoItsFor.map((item, i) => (
              <div key={i} className="border-l-4 border-brand-blue pl-5 py-2">
                <p className="text-sm md:text-base text-[#52717a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatment.benefits.map((benefit, i) => (
              <GlassCard key={i} variant="light" className="p-6 hover:-translate-y-1 transition-transform duration-300">
                <p className="text-sm md:text-base text-[#52717a] leading-relaxed">{benefit}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">Como funciona?</h2>
          <div className="space-y-4">
            {treatment.howItWorks.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-semibold text-sm">
                  {i + 1}
                </div>
                <p className="text-base text-[#52717a] leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy mb-6">Planejamento individualizado</h2>
          <p className="text-base text-[#52717a] leading-relaxed mb-8">{treatment.planningText}</p>
          <Button href="#avaliacao">
            Agendar uma avaliação
            <ArrowRight size={17} strokeWidth={2.2} />
          </Button>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy mb-6">Tecnologia</h2>
            <p className="text-base text-[#52717a] leading-relaxed">{treatment.technologyText}</p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={photos.tecnologia}
              alt="Procedimento odontológico na oralclin"
              fill
              sizes="(max-width: 900px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-brand-mist">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">Nossa equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageTeamPhotos.map((photo, i) => (
              <div key={i} className="bg-white border border-brand-line rounded-lg overflow-hidden">
                <div className="relative bg-[#dfece9] h-48 md:h-64">
                  <Image
                    src={photo}
                    alt="Profissional da equipe OralClin"
                    fill
                    sizes="(max-width: 900px) 90vw, 40vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
                <div className="p-4">
                  <p className="font-heading font-semibold text-sm text-brand-navy">Equipe OralClin</p>
                  <p className="text-xs text-[#67828a] mt-2">Nomes e CROs serão inseridos após envio das informações oficiais.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonial variant="light" />

      {/* Google Reviews */}
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
            <p className="text-base text-[#c0d8df] max-w-2xl mx-auto">
              Agende uma avaliação personalizada e entenda as possibilidades de tratamento para você.
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
      <StickyMobileCTA />
    </main>
  );
}
