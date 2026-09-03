"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/data/treatments";
import { TreatmentCard } from "./TreatmentCard";
import { Button } from "@/components/ui/Button";

export function TreatmentGrid() {
  return (
    <section className="py-20 md:py-28 bg-white" id="tratamentos">
      <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-16">
        {/* Abertura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-4"
        >
          <p className="flex items-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
            <span className="inline-block w-5 h-0.5 bg-current" />
            Tratamentos
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-brand-navy leading-tight">
            O sorriso que você deseja começa com o{" "}
            <em className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent not-italic">
              cuidado certo.
            </em>
          </h2>

          <p className="text-base md:text-lg text-[#426572] leading-relaxed">
            Cada sorriso tem uma história. Na OralClin, entendemos o que você deseja transformar e
            planejamos o cuidado de acordo com suas necessidades e objetivos.
          </p>
        </motion.div>

        {/* Grade 2x2 no desktop, coluna única no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} index={index} />
          ))}
        </div>

        {/* Fechamento: acolhe quem não sabe o que procura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-brand-mist border border-brand-line px-6 py-10 md:px-12 md:py-12 text-center space-y-4"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
            Não sabe qual caminho é o seu?
          </h3>

          <p className="text-base text-[#5a7a84] leading-relaxed max-w-xl mx-auto">
            Tudo bem. A primeira conversa é justamente para entender você, seu sorriso e o que
            deseja transformar.
          </p>

          <div className="pt-2">
            <Button href="#contato">
              Quero descobrir meu caminho
              <ArrowRight size={17} strokeWidth={2.2} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
