"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { TreatmentSolution } from "@/data/treatments";

type Props = {
  solution: TreatmentSolution;
};

/**
 * A virada da narrativa: entra logo depois da seção de dor, que fecha em navy.
 *
 * Por isso ela abre clara e com muito ar — o contraste entre as duas seções é
 * parte do argumento. O painel de benefícios sobe por cima da foto em vez de
 * ficar abaixo dela: o gesto de "algo emergindo" é o que dá o sentido de virada,
 * e evita a fileira de cards iguais que faria a seção parecer template.
 */
export function SolutionTurn({ solution }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-brand-mist pt-20 md:pt-28 pb-20 md:pb-28 overflow-hidden">
      {/* Clarão sutil atrás do título, reforçando a sensação de abertura */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10 blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="flex items-center gap-3 font-heading font-semibold text-brand-green text-[11px] tracking-[0.18em] uppercase">
            <span className="inline-block w-6 h-px bg-current" />
            {solution.eyebrow}
          </p>

          <h2 className="mt-5 text-[1.75rem] md:text-4xl lg:text-[2.6rem] font-heading font-semibold text-brand-navy leading-[1.18] tracking-[-0.01em]">
            {solution.headline}{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {solution.headlineAccent}
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#4d6d77] leading-[1.75] max-w-2xl">
            {solution.lead}
          </p>
        </motion.div>

        {/* Foto + painel sobreposto */}
        <div className="mt-12 md:mt-16 md:pb-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            {/* 3:2 = a proporção em que a foto do procedimento foi recortada,
                para o container não cortá-la de novo */}
            <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-[1.75rem] overflow-hidden bg-brand-navy shadow-xl">
              <Image
                src={solution.photo}
                alt={solution.photoAlt}
                fill
                sizes="(max-width: 768px) 92vw, 1100px"
                className="object-cover"
              />
              {/* Véu leve: unifica a foto com a paleta sem escurecer demais */}
              <span className="absolute inset-0 bg-gradient-to-tr from-brand-navy/45 via-transparent to-transparent" />
            </div>

            {/* Foto secundária: o lado do planejamento, não só o da execução.
                No desktop fica solta no canto superior; no mobile desce em
                diagonal sobre a borda inferior da foto principal, para não
                sumir da página como acontecia antes. */}
            {solution.insetPhoto && (
              /* z-20 é essencial: o painel de benefícios vem depois no DOM e,
                 sem isso, pintava por cima da miniatura — ela ficava escondida
                 atrás do painel no mobile. */
              <div className="absolute z-20 -bottom-8 right-4 w-24 h-32 lg:bottom-auto lg:-top-8 lg:-right-6 lg:w-40 lg:h-52 rounded-2xl overflow-hidden border-4 border-brand-mist shadow-2xl rotate-3 lg:rotate-0">
                <Image
                  src={solution.insetPhoto}
                  alt={solution.insetAlt ?? ""}
                  fill
                  sizes="(max-width: 1024px) 96px, 160px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Painel de benefícios, emergindo da foto */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 md:absolute md:left-8 md:right-8 md:-bottom-20 mt-12 md:mt-0 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(14,63,83,0.14)]"
            >
              {/* Filetes finos em vez de caixas: os quatro ganhos convivem numa
                  faixa só, sem virar quatro cards iguais.
                  No mobile ficam 2x2 — empilhados em coluna única viravam
                  quatro blocos altos e a seção perdia o ritmo. */}
              <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-line [&>li:nth-child(-n+2)]:border-b [&>li:nth-child(-n+2)]:border-brand-line lg:[&>li]:border-b-0">
                {solution.benefits.map((benefit, index) => (
                  <li key={benefit.title} className="p-5 lg:p-7">
                    <span
                      aria-hidden="true"
                      className="block w-7 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                      style={{ opacity: 1 - index * 0.15 }}
                    />
                    <h3 className="mt-3.5 font-heading font-semibold text-base lg:text-lg text-brand-navy leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] lg:text-sm text-[#5a7a84] leading-relaxed">
                      {benefit.description}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
