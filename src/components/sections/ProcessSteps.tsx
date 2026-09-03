"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { photos } from "@/data/media";

const steps = [
  {
    title: "Conte o que você busca",
    description: "O primeiro passo começa com uma conversa.",
    image: photos.planejamentoAvaliacao,
    imageAlt: "Profissional da OralClin ouvindo o paciente e registrando a avaliação",
  },
  {
    title: "Entenda seu caso",
    description: "Clareza para você decidir com tranquilidade.",
    image: photos.diagnosticoRaioX,
    imageAlt: "Radiografia panorâmica usada para entender o caso",
  },
  {
    title: "Encontre seu caminho",
    description: "Um cuidado pensado para as suas necessidades.",
    image: photos.diagnosticoScan,
    imageAlt: "Equipe da OralClin definindo o planejamento do tratamento",
  },
  {
    title: "Comece a cuidar",
    description: "Uma equipe ao seu lado em cada etapa.",
    image: photos.atendimentoEquipe,
    imageAlt: "Equipe da OralClin durante o atendimento",
  },
];

export function ProcessSteps() {
  // Passo em destaque: no desktop muda ao passar o mouse, no mobile ao tocar
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const current = steps[active];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
          {/* Coluna de texto */}
          <div className="space-y-10">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="flex items-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
                <span className="inline-block w-5 h-0.5 bg-current" />
                Seu caminho
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-brand-navy leading-tight">
                Você não precisa saber{" "}
                <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic">
                  por onde começar.
                </em>
              </h2>

              <p className="text-base md:text-lg text-[#426572] leading-relaxed">
                Seu primeiro passo é conversar com quem vai entender o seu caso.
              </p>
            </motion.div>

            {/* Passos */}
            <div>
              {steps.map((step, index) => {
                const isActive = index === active;

                return (
                  <motion.div
                    key={step.title}
                    initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex gap-4 group"
                  >
                    {/* Trilha: número + linha conectora */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs shadow-sm transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-brand-blue to-brand-green text-white"
                            : "bg-white border border-brand-line text-[#8aa4ac]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {index < steps.length - 1 && (
                        <motion.span
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: (index + 1) * 0.12 }}
                          style={{ originY: 0 }}
                          className="w-0.5 flex-1 min-h-[34px] bg-gradient-to-b from-brand-blue/50 to-brand-green/20"
                        />
                      )}
                    </div>

                    <div className="pb-7 pt-1.5 flex-1 min-w-0">
                      {/* No mobile o título é um botão que abre imagem + descrição.
                          No desktop, passar o mouse já troca a foto ao lado. */}
                      <button
                        onClick={() => setActive(index)}
                        onMouseEnter={() => setActive(index)}
                        onFocus={() => setActive(index)}
                        aria-expanded={isActive}
                        className="w-full text-left flex items-start justify-between gap-3"
                      >
                        <h3
                          className={`font-heading font-semibold text-base md:text-lg leading-snug transition-colors ${
                            isActive ? "text-brand-blue" : "text-brand-navy"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Afordância de toque, só no mobile */}
                        <span
                          aria-hidden="true"
                          className={`md:hidden flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "rotate-45 border-brand-blue text-brand-blue"
                              : "border-brand-line text-[#8aa4ac]"
                          }`}
                        >
                          <Plus size={13} strokeWidth={2.5} />
                        </span>
                      </button>

                      {/* Desktop: descrição sempre visível */}
                      <p className="hidden md:block text-sm text-[#5a7a84] mt-0.5 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Mobile: imagem + descrição abrem no toque */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="md:hidden overflow-hidden"
                          >
                            <div className="pt-3">
                              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-brand-mist">
                                <Image
                                  src={step.image}
                                  alt={step.imageAlt}
                                  fill
                                  sizes="80vw"
                                  className="object-cover"
                                />
                              </div>
                              <p className="mt-3 text-sm text-[#5a7a84] leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <Button href="#contato">
                Quero dar o primeiro passo
                <ArrowRight size={17} strokeWidth={2.2} />
              </Button>

              <p className="text-sm text-[#5a7a84] leading-relaxed max-w-md">
                Comece pela avaliação. O restante a gente constrói junto com você.
              </p>
            </motion.div>
          </div>

          {/* Desktop: a foto acompanha o passo em destaque */}
          <div className="hidden md:block relative h-[30rem] lg:h-[34rem] rounded-3xl overflow-hidden shadow-xl bg-brand-mist">
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
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
