"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const steps = ["Avaliação", "Diagnóstico", "Planejamento", "Tratamento"];

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="space-y-3">
            <p className="flex items-center justify-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
              <span className="inline-block w-5 h-0.5 bg-current" />
              Seu caminho
              <span className="inline-block w-5 h-0.5 bg-current" />
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-brand-navy leading-tight">
              Um cuidado pensado <em className="text-brand-blue not-italic font-semibold">para você.</em>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#58737d] leading-relaxed">
            Você não precisa chegar sabendo qual tratamento fazer. O primeiro passo é entender seu caso.
          </p>
        </motion.div>

        {/* Timeline conectada */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 md:gap-8 items-start group"
            >
              {/* Bolinha na timeline */}
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  className="w-6 h-6 rounded-full bg-brand-blue ring-4 ring-white border-2 border-brand-blue relative z-10"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-1 bg-gradient-to-b from-brand-blue to-transparent flex-grow"
                    style={{ height: "80px" }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  />
                )}
              </div>

              {/* Conteúdo */}
              <div className="pt-1">
                <span className="text-xs md:text-sm font-heading font-semibold text-brand-blue block mb-1">
                  0{index + 1}
                </span>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {step}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-6">
          <Button href="#contato">
            Quero agendar minha avaliação
            <ArrowRight size={17} strokeWidth={2.2} />
          </Button>
        </div>
      </div>
    </section>
  );
}
