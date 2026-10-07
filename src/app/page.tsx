import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TrustBar } from "@/components/sections/TrustBar";
import { TreatmentGrid } from "@/components/sections/TreatmentGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { GlassCard } from "@/components/decor/GlassCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { photos, facadePhotos } from "@/data/media";
import { clinic } from "@/data/clinic";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="mt-20 pt-0 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-brand-mist from-[61%] via-brand-mist to-[#e7f8f2] overflow-hidden relative">
        <GradientMesh variant="light" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1 pt-8 md:pt-0">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-5 h-0.5 bg-brand-green" />
                  <span className="font-heading font-semibold text-brand-green text-xs tracking-wider uppercase">
                    Odontologia em Itapoá
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-heading font-semibold text-brand-navy leading-tight">
                  Seu sorriso merece um cuidado{" "}
                  <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent font-semibold not-italic">
                    à altura dele.
                  </em>
                </h1>

                <p className="text-base md:text-lg text-[#426572] leading-relaxed max-w-lg">
                  Em Itapoá, tecnologia e conhecimento para cuidar do seu sorriso. Humanidade para
                  cuidar de você.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-3 flex-wrap">
                <Button href="#contato">
                  Agendar avaliação
                  <ArrowRight size={17} strokeWidth={2.2} />
                </Button>
                <WhatsAppButton message="Olá! Gostaria de conversar sobre os tratamentos odontológicos disponibilizados pela OralClin e agendar uma avaliação.">
                  <MessageCircle size={18} />
                  Falar pelo WhatsApp
                </WhatsAppButton>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <ShieldCheck size={19} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-[#4d6d77]">
                  Avaliação personalizada para entender o seu caso.
                </span>
              </div>
            </div>

            <div className="relative min-h-[240px] md:min-h-[510px] order-1 md:order-2">
              <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[60%] rounded-b-3xl md:rounded-b-none md:rounded-l-[200px] md:rounded-r-2xl overflow-hidden bg-[#dcece7]">
                <Image
                  src={photos.draTalianeProcedimento}
                  alt="Dra. Taliane realizando um procedimento na OralClin, em Itapoá"
                  fill
                  priority
                  sizes="(max-width: 900px) 90vw, 43vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 40%" }}
                />
              </div>

              <div className="hidden md:flex absolute bottom-6 md:bottom-6 md:-left-10 w-40 h-40 rounded-full bg-brand-navy/70 backdrop-blur-xl border border-white/20 text-white p-6 shadow-[0_16px_30px_rgba(14,63,83,0.25)] flex-col justify-center items-center">
                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent text-xs font-heading font-semibold block mb-2">OralClin</span>
                <strong className="text-center text-base font-heading font-semibold leading-tight mb-2">
                  Cuidado que transforma
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <TreatmentGrid />

      {/* About */}
      <section className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden" id="oralclin">
        <GradientMesh variant="dark" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Composição da fachada: frente da clínica em destaque + detalhe do
                logotipo e recepção, para o paciente reconhecer o lugar na rua */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-2 relative h-52 md:h-64 rounded-2xl overflow-hidden bg-[#264f5e] shadow-lg">
                <Image
                  src={facadePhotos.frente}
                  alt="Fachada da OralClin Odontologia na Rua 787 Vanilda Pereira Gomes, 617, em Itapoá"
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden bg-[#264f5e] shadow-lg">
                <Image
                  src={facadePhotos.logo}
                  alt="Letreiro da OralClin na fachada da clínica"
                  fill
                  sizes="(max-width: 760px) 45vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: "60% 40%" }}
                />
              </div>

              <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden bg-[#264f5e] shadow-lg">
                <Image
                  src={facadePhotos.scanner}
                  alt="Scanner intraoral em uso na OralClin"
                  fill
                  sizes="(max-width: 760px) 45vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 60%" }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-heading font-semibold text-[#76d8bf] text-xs tracking-widest uppercase">
                  <span className="inline-block w-5 h-0.5 bg-current" />
                  A OralClin
                </p>
                <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">
                  Muito mais que <em className="text-[#79d6ef] not-italic font-semibold">um sorriso.</em>
                </h2>
              </div>

              <div className="space-y-4 text-[#c4dbe0] leading-relaxed">
                <p>O sorriso influencia a forma como você se expressa, se relaciona, mastiga, conversa e se enxerga.</p>
                <p>Na OralClin, cuidar da saúde bucal também significa cuidar da sua qualidade de vida.</p>
              </div>

              <div className="flex items-start gap-3 pt-2 text-sm text-[#c4dbe0]">
                <MapPin size={18} className="text-[#76d8bf] flex-shrink-0 mt-0.5" />
                <span>{clinic.address}</span>
              </div>

              <a
                href="#equipe"
                className="inline-flex items-center gap-2 text-white font-heading font-semibold text-xs mt-2 hover:gap-3 transition-all"
              >
                Conheça a equipe →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <AuthoritySection />

      <VideoTestimonial variant="light" />

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white relative overflow-hidden" id="contato">
        <GradientMesh variant="dark" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="space-y-12">
            <div className="space-y-4 text-center md:text-left">
              <p className="flex items-center gap-2 font-heading font-semibold text-[#76d8bf] text-xs tracking-widest uppercase justify-center md:justify-start">
                <span className="inline-block w-5 h-0.5 bg-current" />
                Próximo passo
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">
                Vamos conversar sobre o seu <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic font-semibold">sorriso?</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-[#c0d8df] mb-6">Agende uma avaliação e entenda as possibilidades para o seu caso.</p>
                <div className="flex flex-col gap-3">
                  <Button href="#tratamentos" variant="primary">
                    Agendar avaliação
                    <ArrowRight size={17} strokeWidth={2.2} />
                  </Button>
                  <WhatsAppButton
                    message="Olá! Gostaria de conversar sobre os tratamentos odontológicos disponíveis na OralClin e agendar uma avaliação."
                    variant="light"
                  >
                    <MessageCircle size={18} />
                    Falar pelo WhatsApp
                  </WhatsAppButton>
                </div>
              </div>

              <div>
                <GlassCard variant="dark" className="p-6 md:p-8">
                  <h3 className="text-lg font-heading font-semibold text-white mb-4">Envie suas informações</h3>
                  <LeadForm />
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <StickyMobileCTA />
    </main>
  );
}
