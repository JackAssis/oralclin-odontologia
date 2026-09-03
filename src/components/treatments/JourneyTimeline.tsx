"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { TreatmentJourney } from "@/data/treatments";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type Props = {
  journey: TreatmentJourney;
  whatsappMessage: string;
  ctaLabel: string;
};

/**
 * Linha do tempo da jornada de decisão.
 *
 * Desktop: horizontal e interativa — os marcadores são a navegação e o detalhe
 * troca abaixo. A linha se preenche até a etapa ativa, então a pessoa vê onde
 * está no percurso.
 *
 * Mobile: vertical, com todas as etapas visíveis. Aqui o scroll já é a
 * interação — transformar em carrossel esconderia conteúdo sem ganho nenhum.
 */
export function JourneyTimeline({ journey, whatsappMessage, ctaLabel }: Props) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const total = journey.steps.length;
  const step = journey.steps[active];
  const progress = total > 1 ? active / (total - 1) : 0;

  return (
    <section className="py-20 md:py-28 bg-brand-mist overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-heading font-semibold text-brand-green text-[11px] tracking-[0.18em] uppercase">
            <span className="inline-block w-6 h-px bg-current" />
            {journey.eyebrow}
          </p>

          <h2 className="mt-5 text-[1.75rem] md:text-4xl lg:text-[2.6rem] font-heading font-semibold text-brand-navy leading-[1.18] tracking-[-0.01em]">
            {journey.headline}{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {journey.headlineAccent}
            </span>
          </h2>

          <div className="mt-6 space-y-4">
            {journey.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base md:text-lg text-[#4d6d77] leading-[1.75]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ---------- DESKTOP: linha horizontal interativa ---------- */}
        <div className="hidden md:block mt-16">
          <div className="relative">
            {/* Trilho */}
            <div className="absolute left-0 right-0 top-[0.4375rem] h-px bg-brand-line" />
            <motion.div
              className="absolute left-0 top-[0.4375rem] h-px bg-gradient-to-r from-brand-blue to-brand-green"
              animate={{ scaleX: progress }}
              style={{ originX: 0, width: "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeInOut" }}
            />

            <ul className="relative grid" style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}>
              {journey.steps.map((entry, index) => {
                const isActive = index === active;
                const isPast = index < active;

                return (
                  <li key={entry.label}>
                    <button
                      onClick={() => setActive(index)}
                      aria-current={isActive}
                      className="group w-full text-left"
                    >
                      {/* Marcador */}
                      <span className="block relative h-3.5">
                        <span
                          className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-3.5 h-3.5 bg-gradient-to-r from-brand-blue to-brand-green ring-4 ring-brand-mist"
                              : isPast
                                ? "w-2.5 h-2.5 bg-brand-blue ring-4 ring-brand-mist"
                                : "w-2.5 h-2.5 bg-white border border-brand-line ring-4 ring-brand-mist group-hover:border-brand-blue"
                          }`}
                        />
                      </span>

                      <span
                        className={`block mt-5 font-heading font-bold text-[11px] tabular-nums tracking-[0.1em] transition-colors ${
                          isActive || isPast ? "text-brand-blue" : "text-[#b8ccd2]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`block mt-1 font-heading font-semibold text-sm tracking-[0.08em] uppercase transition-colors ${
                          isActive
                            ? "text-brand-navy"
                            : "text-[#7d959d] group-hover:text-brand-navy"
                        }`}
                      >
                        {entry.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detalhe da etapa ativa: texto + a foto daquele momento.
              A imagem troca junto com o marcador — ela mostra o que é a etapa,
              não serve de enfeite ao lado do texto. */}
          <div className="mt-12 grid grid-cols-[1fr_0.85fr] gap-12 items-center min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-heading font-semibold text-2xl text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-base lg:text-lg text-[#4d6d77] leading-[1.75]">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ---------- MOBILE: linha vertical, tudo visível ---------- */}
        <ol className="md:hidden mt-12 space-y-0">
          {journey.steps.map((entry, index) => (
            <motion.li
              key={entry.label}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green mt-1.5" />
                {index < total - 1 && (
                  <span className="w-px flex-1 min-h-[3.5rem] bg-gradient-to-b from-brand-blue/40 to-brand-green/15 my-1" />
                )}
              </div>

              <div className="pb-8 min-w-0">
                <span className="font-heading font-bold text-[11px] tabular-nums tracking-[0.1em] text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="ml-2 font-heading font-semibold text-[11px] tracking-[0.1em] uppercase text-[#7d959d]">
                  {entry.label}
                </span>

                <h3 className="mt-1.5 font-heading font-semibold text-lg text-brand-navy leading-snug">
                  {entry.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#5a7a84] leading-relaxed">{entry.description}</p>

                {/* No mobile a foto acompanha cada etapa: sem hover nem clique,
                    é assim que a imagem continua ligada ao momento que descreve */}
                <div className="relative mt-4 aspect-[16/10] rounded-xl overflow-hidden bg-white shadow-sm">
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    fill
                    sizes="80vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* ---------- O recado e o fechamento ---------- */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 md:mt-16 pt-12 md:pt-16 border-t border-brand-line text-center"
        >
          {/* Isolado tipograficamente: é o compromisso da seção, não mais um parágrafo */}
          <p className="text-xl md:text-2xl text-[#4d6d77] leading-snug">
            {journey.reassurance.line}
          </p>
          <p className="mt-2 text-xl md:text-2xl font-heading font-semibold text-brand-navy leading-snug">
            {journey.reassurance.emphasis}
          </p>

          <p className="mt-10 text-lg md:text-xl font-heading font-semibold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent max-w-xl mx-auto leading-snug">
            {journey.closing}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Button href="#avaliacao">
              {ctaLabel}
              <ArrowRight size={17} strokeWidth={2.2} />
            </Button>
            <WhatsAppButton message={whatsappMessage} variant="outline">
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
