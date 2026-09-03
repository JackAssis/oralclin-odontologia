"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { treatmentCardImages } from "@/data/media";

/** Copy emocional de cada card — headline curta + apoio, por tratamento. */
const cardCopy: Record<string, { headline: string; support: string }> = {
  "protese-protocolo-itapoa": {
    headline: "Volte a sorrir, falar e mastigar sem insegurança.",
    support:
      "Mais estabilidade, conforto e liberdade para viver cada momento com confiança.",
  },
  "implante-dentario-itapoa": {
    headline: "Recupere o que faz falta ao seu sorriso.",
    support:
      "Soluções personalizadas que devolvem função, estética e segurança de forma duradoura.",
  },
  "alinhadores-invisiveis-itapoa": {
    headline: "Alinhe seu sorriso sem mudar sua rotina.",
    support:
      "Discretos, confortáveis e eficientes para transformar seu sorriso com leveza e praticidade.",
  },
  "facetas-itapoa": {
    headline: "Harmonia que parece natural, beleza que transforma.",
    support:
      "Corrija imperfeições e realce o que você tem de melhor com um resultado natural e sofisticado.",
  },
};

type TreatmentCardProps = {
  treatment: Treatment;
  index: number;
};

export function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  const copy = cardCopy[treatment.slug];
  const image = treatmentCardImages[treatment.slug];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
      className="group"
    >
      <Link
        href={`/${treatment.slug}`}
        className="block h-full rounded-3xl overflow-hidden bg-white border border-brand-line hover:border-brand-blue/40 hover:shadow-[0_18px_40px_rgba(14,63,83,0.10)] transition-all duration-300"
      >
        {/* Imagem */}
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-mist">
          <Image
            src={image}
            alt={`${treatment.title} na OralClin`}
            fill
            sizes="(max-width: 768px) 92vw, 44vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Véu de gradiente: dá contraste ao rótulo e amarra a foto à identidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />

          <div className="absolute left-5 right-5 bottom-4 flex items-center gap-2.5">
            <span className="font-heading font-bold text-xs text-white/70 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-white/25" />
            <span className="font-heading font-semibold text-[11px] tracking-[0.16em] uppercase text-white">
              {treatment.title}
            </span>
          </div>
        </div>

        {/* Texto */}
        <div className="p-6 md:p-7 flex flex-col gap-3">
          <h3 className="font-heading font-semibold text-lg md:text-xl text-brand-navy leading-snug">
            {copy?.headline ?? treatment.title}
          </h3>

          <p className="text-sm text-[#5a7a84] leading-relaxed">
            {copy?.support ?? treatment.shortDescription}
          </p>

          <span className="mt-1 inline-flex items-center gap-1.5 font-heading font-semibold text-sm text-brand-blue group-hover:gap-2.5 transition-all">
            Conhecer tratamento
            <ArrowRight size={16} strokeWidth={2.4} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
