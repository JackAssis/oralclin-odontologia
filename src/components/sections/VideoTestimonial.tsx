"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
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
 * O vídeo tem 3,5 MB e só é baixado no clique (preload="none"): em LP de
 * anúncio o tempo de carregamento afeta o Quality Score, e não faz sentido
 * baixar o vídeo para quem nunca vai assistir.
 *
 * A ordem muda por breakpoint: no mobile o título vem antes do vídeo, no
 * desktop o vídeo fica à esquerda e todo o texto à direita. Isso é feito com
 * `order`/posicionamento de grid, não duplicando o conteúdo — texto repetido
 * seria lido duas vezes por leitor de tela.
 */
export function VideoTestimonial({ variant = "light" }: VideoTestimonialProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const isDark = variant === "dark";

  function handlePlay() {
    setPlaying(true);
    event("video_testimonial_play");
    requestAnimationFrame(() => videoRef.current?.play());
  }

  return (
    <section className={`py-16 md:py-24 ${isDark ? "bg-brand-navy" : "bg-brand-mist"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-[0.8fr_1.2fr] md:grid-rows-[auto_auto] gap-y-6 md:gap-y-6 md:gap-x-14 md:items-center">
          {/* Título — no mobile vem primeiro; no desktop ocupa o topo da coluna direita */}
          <div className="order-1 md:order-none md:col-start-2 md:row-start-1 space-y-3">
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
              O que muda quando você volta a sorrir{" "}
              <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic">
                com confiança.
              </em>
            </h2>
          </div>

          {/* Player vertical, no formato em que o vídeo foi gravado */}
          <div className="order-2 md:order-none md:col-start-1 md:row-start-1 md:row-span-2">
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-none aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-black">
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
                  aria-label="Assistir ao depoimento de Edilson, paciente da OralClin"
                  className="group absolute inset-0 w-full h-full"
                >
                  <Image
                    src={POSTER_SRC}
                    alt="Edilson, paciente da OralClin, durante o depoimento"
                    fill
                    sizes="(max-width: 768px) 300px, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/5 transition-colors" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-brand-navy translate-x-0.5" fill="currentColor" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Citação, autoria e avisos */}
          <div className="order-3 md:order-none md:col-start-2 md:row-start-2 space-y-5">
            <figure className="space-y-3">
              <div className="flex gap-3">
                <span
                  aria-hidden="true"
                  className={`font-heading font-bold text-3xl leading-none select-none ${
                    isDark ? "text-[#76d8bf]" : "text-brand-green"
                  }`}
                >
                  &ldquo;
                </span>
                <blockquote
                  className={`text-xl md:text-2xl italic leading-snug ${
                    isDark ? "text-white" : "text-brand-navy"
                  }`}
                >
                  Hoje eu consigo sorrir sem aquela preocupação.
                </blockquote>
              </div>

              <figcaption className={`text-sm pl-8 ${isDark ? "text-[#c4dbe0]" : "text-[#5a7a84]"}`}>
                — <strong className="font-heading font-semibold">Edilson</strong>, paciente OralClin
              </figcaption>
            </figure>

            <div className="flex items-start gap-3">
              <span
                className={`flex-shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark ? "bg-white/10" : "bg-brand-green/10"
                }`}
              >
                <Play
                  size={13}
                  className={isDark ? "text-[#76d8bf]" : "text-brand-green"}
                  fill="currentColor"
                />
              </span>
              <p className={`text-sm leading-relaxed ${isDark ? "text-[#c4dbe0]" : "text-[#5a7a84]"}`}>
                Ouça de quem viveu essa experiência na OralClin — do primeiro atendimento ao
                resultado.
              </p>
            </div>

            <p className={`text-xs leading-relaxed ${isDark ? "text-white/50" : "text-[#7d959d]"}`}>
              Depoimento real, gravado na clínica e publicado com autorização do paciente. Os
              resultados variam conforme o caso de cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
