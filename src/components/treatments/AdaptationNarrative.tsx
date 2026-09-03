"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { AdaptationNarrative as Narrative } from "@/data/treatments";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/decor/GradientMesh";

type Props = {
  narrative: Narrative;
  ctaHref?: string;
  ctaLabel?: string;
};

const AUTOPLAY_MS = 6500;

/**
 * Seção de identificação com a dor.
 *
 * As frases são pensamentos em primeira pessoa e aparecem DENTRO da imagem —
 * não como itens numerados. Lista numerada enumera problemas; monólogo gera
 * reconhecimento, que é o objetivo desta seção.
 *
 * A frase é texto HTML posicionado sobre a foto, nunca embutida no arquivo de
 * imagem: assim continua legível para leitor de tela, indexável e nítida em
 * qualquer densidade de tela.
 */
export function AdaptationNarrative({ narrative, ctaHref = "#avaliacao", ctaLabel }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const total = narrative.items.length;

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => setActive((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, total]);

  // No mobile o indicador segue o card visível no carrossel
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      { root: track, threshold: 0.6 },
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [total]);

  const item = narrative.items[active];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-heading font-semibold text-brand-green text-[11px] tracking-[0.18em] uppercase">
            <span className="inline-block w-6 h-px bg-current" />
            {narrative.eyebrow}
          </p>

          <h2 className="mt-5 text-[1.75rem] md:text-4xl lg:text-[2.6rem] font-heading font-semibold text-brand-navy leading-[1.18] tracking-[-0.01em]">
            {narrative.headline}{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {narrative.headlineAccent}
            </span>
          </h2>

          <div className="mt-6 pl-5 border-l-2 border-brand-green/30 space-y-3">
            <p className="text-base md:text-lg text-[#4d6d77] leading-[1.75]">{narrative.lead}</p>
            <p className="text-base md:text-lg text-brand-navy font-heading font-semibold leading-[1.6]">
              {narrative.leadEmphasis}
            </p>
          </div>
        </div>

        {/* ---------- DESKTOP: palco com a fala dentro da imagem ---------- */}
        <div
          className="hidden md:grid mt-16 grid-cols-[1.1fr_0.9fr] gap-14 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-brand-navy">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {item.image ? (
                  <Image src={item.image} alt="" fill sizes="52vw" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-navy-light">
                    <GradientMesh variant="dark" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Véu: garante contraste para a fala em qualquer foto */}
            <span className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/45 to-transparent" />

            {/* A fala */}
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.15 }}
                className="absolute inset-x-0 bottom-0 p-8 lg:p-10"
              >
                <span
                  aria-hidden="true"
                  className="block font-heading font-bold text-5xl leading-none text-white/25 select-none"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-1 font-heading font-semibold text-2xl lg:text-[1.85rem] text-white leading-[1.25] max-w-md">
                  {item.quote}
                </blockquote>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Contraponto: o que aquela frase custa */}
          <div className="space-y-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="text-lg lg:text-xl text-[#4d6d77] leading-[1.7]"
              >
                {item.description}
              </motion.p>
            </AnimatePresence>

            {/* Navegação: barras finas, sem números — mantém a noção de
                sequência sem transformar a seção numa lista */}
            <div className="flex gap-2" role="tablist" aria-label="Momentos">
              {narrative.items.map((entry, index) => (
                <button
                  key={entry.quote}
                  role="tab"
                  aria-selected={index === active}
                  aria-label={entry.quote}
                  onClick={() => setActive(index)}
                  className="group flex-1 py-3"
                >
                  <span className="block h-0.5 rounded-full bg-brand-line overflow-hidden group-hover:bg-brand-blue/25 transition-colors">
                    <motion.span
                      className="block h-full bg-gradient-to-r from-brand-blue to-brand-green"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: index === active ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{
                        duration:
                          index === active && !paused && !reduceMotion ? AUTOPLAY_MS / 1000 : 0.35,
                        ease: "linear",
                      }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- MOBILE: carrossel, a fala dentro de cada foto ---------- */}
        <div className="md:hidden mt-10 -mx-6">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {narrative.items.map((entry, index) => (
              <article key={entry.quote} data-index={index} className="snap-center shrink-0 w-[82%]">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy">
                  {entry.image ? (
                    <Image src={entry.image} alt="" fill sizes="82vw" className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-navy-light" />
                  )}

                  <span className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />

                  <figure className="absolute inset-x-0 bottom-0 p-5">
                    <span
                      aria-hidden="true"
                      className="block font-heading font-bold text-3xl leading-none text-white/25 select-none"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-0.5 font-heading font-semibold text-xl text-white leading-[1.3]">
                      {entry.quote}
                    </blockquote>
                  </figure>
                </div>

                <p className="mt-4 text-sm text-[#5a7a84] leading-relaxed">{entry.description}</p>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 mt-5 px-6">
            {narrative.items.map((entry, index) => (
              <span
                key={entry.quote}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-7 bg-gradient-to-r from-brand-blue to-brand-green"
                    : "w-1.5 bg-brand-line"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- Fechamento ---------- */}
        <div className="relative mt-14 md:mt-20 rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
          <GradientMesh variant="dark" />

          <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 md:items-center">
            <h3 className="text-2xl md:text-[2rem] font-heading font-semibold leading-[1.25]">
              {narrative.closing.headline}{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                {narrative.closing.headlineAccent}
              </span>
            </h3>

            <div className="space-y-6 md:border-l md:border-white/15 md:pl-12">
              <p className="text-base text-[#c0d8df] leading-relaxed">{narrative.closing.support}</p>

              <Button href={ctaHref}>
                {ctaLabel ?? "Quero dar o primeiro passo"}
                <ArrowRight size={17} strokeWidth={2.2} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
