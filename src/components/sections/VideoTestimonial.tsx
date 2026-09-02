"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Quote } from "lucide-react";
import { event } from "@/lib/analytics/gtag";

const VIDEO_SRC = "/video/depoimento-paciente.mp4";
const POSTER_SRC = "/video/depoimento-poster.jpg";

type VideoTestimonialProps = {
  /** Fundo da seção — "light" sobre mist, "dark" sobre navy */
  variant?: "light" | "dark";
};

/**
 * Depoimento em vídeo com poster + play manual.
 *
 * O vídeo tem 3,5 MB e só é baixado quando a pessoa clica (preload="none").
 * Isso é proposital: em LP de anúncio o tempo de carregamento afeta o Quality
 * Score, e não faz sentido baixar o vídeo para quem nunca vai assistir.
 */
export function VideoTestimonial({ variant = "light" }: VideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const isDark = variant === "dark";

  function handlePlay() {
    setPlaying(true);
    event("video_testimonial_play");
    // O elemento só existe depois do setPlaying, então esperamos o próximo frame
    requestAnimationFrame(() => videoRef.current?.play());
  }

  return (
    <section className={`py-16 md:py-24 ${isDark ? "bg-brand-navy" : "bg-brand-mist"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-center">
          {/* Player vertical, no formato em que o vídeo foi gravado */}
          <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-black">
            {playing ? (
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                controls
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            ) : (
              <button
                onClick={handlePlay}
                aria-label="Assistir ao depoimento do paciente"
                className="group absolute inset-0 w-full h-full"
              >
                <Image
                  src={POSTER_SRC}
                  alt="Paciente da OralClin gravando seu depoimento"
                  fill
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-brand-navy/25 group-hover:bg-brand-navy/10 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/95 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={26} className="text-brand-navy translate-x-0.5" fill="currentColor" />
                  </span>
                </span>
              </button>
            )}
          </div>

          <div className="space-y-5">
            <p
              className={`flex items-center gap-2 font-heading font-semibold text-xs tracking-widest uppercase ${
                isDark ? "text-[#76d8bf]" : "text-brand-green"
              }`}
            >
              <span className="inline-block w-5 h-0.5 bg-current" />
              Quem já passou por aqui
            </p>

            <h2
              className={`text-3xl md:text-4xl font-heading font-semibold leading-tight ${
                isDark ? "text-white" : "text-brand-navy"
              }`}
            >
              O depoimento de quem{" "}
              <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic">
                já fez o tratamento.
              </em>
            </h2>

            <div className="flex gap-3">
              <Quote
                size={22}
                className={`flex-shrink-0 ${isDark ? "text-[#76d8bf]" : "text-brand-green"}`}
              />
              <p className={`text-base leading-relaxed ${isDark ? "text-[#c4dbe0]" : "text-[#52717a]"}`}>
                Um paciente conta, em 40 segundos, como foi o atendimento na OralClin — da avaliação
                ao resultado.
              </p>
            </div>

            <p className={`text-xs ${isDark ? "text-white/50" : "text-[#67828a]"}`}>
              Depoimento real, gravado na clínica e publicado com autorização do paciente. Os
              resultados variam conforme o caso de cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
