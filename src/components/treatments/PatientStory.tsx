"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import type { TreatmentStory } from "@/data/treatments";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/decor/GradientMesh";
import { event } from "@/lib/analytics/gtag";

type Props = {
  story: TreatmentStory;
  ctaLabel: string;
};

/**
 * História real do paciente, logo depois do hero.
 *
 * Fundo navy de propósito: o hero é claro, então essa seção cria uma batida de
 * contraste na página — e vídeo em fundo escuro tem muito mais presença.
 *
 * A frase do paciente é o H2. Ela carrega o peso que uma headline escrita pela
 * clínica não teria, e mantém a página longe de prometer resultado.
 */
export function PatientStory({ story, ctaLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  function handlePlay() {
    setPlaying(true);
    event("video_story_play", { patient: story.patientName });
    requestAnimationFrame(() => videoRef.current?.play());
  }

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white overflow-hidden">
      <GradientMesh variant="dark" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <p className="flex items-center gap-3 font-heading font-semibold text-[#76d8bf] text-[11px] tracking-[0.18em] uppercase">
              <span className="inline-block w-6 h-px bg-current" />
              {story.eyebrow}
            </p>

            <figure className="mt-6">
              <span
                aria-hidden="true"
                className="block font-heading font-bold text-6xl leading-none select-none bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent"
              >
                &ldquo;
              </span>

              {/* A frase da paciente é o próprio H2 da seção */}
              <h2 className="-mt-3 text-[1.6rem] md:text-[2.1rem] lg:text-[2.4rem] font-heading font-semibold leading-[1.22] tracking-[-0.01em]">
                {story.quote}
              </h2>

              <figcaption className="mt-5 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-px bg-[#76d8bf]" />
                <span className="text-sm">
                  <strong className="font-heading font-semibold text-white">
                    {story.patientName}
                  </strong>
                  <span className="text-[#9fc0c9]"> · {story.patientRole}</span>
                </span>
              </figcaption>
            </figure>

            <div className="mt-8 space-y-4 max-w-lg">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base md:text-lg text-[#c0d8df] leading-[1.7]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9">
              <Button href="#avaliacao">
                {ctaLabel}
                <ArrowRight size={17} strokeWidth={2.2} />
              </Button>
            </div>
          </motion.div>

          {/* Vídeo vertical */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-2 mx-auto w-full max-w-[280px] md:max-w-none"
          >
            <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
              {playing ? (
                <video
                  ref={videoRef}
                  src={story.video}
                  poster={story.poster}
                  controls
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              ) : (
                <button
                  onClick={handlePlay}
                  aria-label={`Assistir ao depoimento de ${story.patientName}`}
                  className="group absolute inset-0 w-full h-full"
                >
                  <Image
                    src={story.poster}
                    alt={`${story.patientName}, paciente da OralClin, durante o depoimento`}
                    fill
                    sizes="(max-width: 768px) 280px, 32vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-brand-navy/15 group-hover:bg-transparent transition-colors" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play
                        size={24}
                        className="text-brand-navy translate-x-0.5"
                        fill="currentColor"
                      />
                    </span>
                  </span>
                </button>
              )}
            </div>

            <p className="mt-4 text-[11px] text-white/45 leading-relaxed text-center md:text-left">
              Depoimento real, gravado na clínica e publicado com autorização da paciente. Os
              resultados variam conforme o caso de cada pessoa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
