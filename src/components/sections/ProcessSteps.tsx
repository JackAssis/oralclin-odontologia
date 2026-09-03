"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { photos } from "@/data/media";

const steps = [
  {
    title: "Conte o que você busca",
    description: "O primeiro passo começa com uma conversa.",
  },
  {
    title: "Entenda seu caso",
    description: "Clareza para você decidir com tranquilidade.",
  },
  {
    title: "Encontre seu caminho",
    description: "Um cuidado pensado para as suas necessidades.",
  },
  {
    title: "Comece a cuidar",
    description: "Uma equipe ao seu lado em cada etapa.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
          {/* Coluna de texto */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-4 group"
                >
                  {/* Trilha: número + linha conectora */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="w-9 h-9 rounded-full bg-gradient-to-r from-brand-blue to-brand-green text-white flex items-center justify-center font-heading font-bold text-xs shadow-sm">
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

                  <div className="pb-7 pt-1.5">
                    <h3 className="font-heading font-semibold text-base md:text-lg text-brand-navy group-hover:text-brand-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#5a7a84] mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
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

          {/* Foto só no desktop: no mobile a parte emocional se sustenta sozinha,
              e a imagem só empurraria o CTA para longe da dobra */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden md:block relative h-[30rem] lg:h-[34rem] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={photos.atendimentoEquipe}
              alt="Equipe da OralClin durante o atendimento a uma paciente"
              fill
              sizes="(max-width: 768px) 1px, 45vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
