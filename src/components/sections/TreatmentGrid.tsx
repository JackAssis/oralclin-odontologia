"use client";

import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import { TreatmentCard } from "./TreatmentCard";

export function TreatmentGrid() {
  return (
    <section className="py-20 md:py-28 bg-white" id="tratamentos">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <p className="flex items-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
              <span className="inline-block w-5 h-0.5 bg-current" />
              Tratamentos
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-brand-navy leading-tight">
              Encontre o cuidado que seu sorriso precisa.
            </h2>
          </div>
          <p className="max-w-sm text-sm md:text-base text-[#52717a] leading-relaxed">
            Cada sorriso tem uma história. E cada tratamento começa entendendo o que você realmente precisa.
          </p>
        </motion.div>

        {/* Editorial list em vez de grid */}
        <div className="divide-y divide-brand-line">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
