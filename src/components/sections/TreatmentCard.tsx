"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Treatment } from "@/data/treatments";
import { treatmentPhotos, photos } from "@/data/media";

type TreatmentCardProps = {
  treatment: Treatment;
  index: number;
};

export function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border-b border-brand-line py-6 px-4 -mx-4 rounded-2xl flex items-start gap-6 md:gap-8 hover:bg-white/60 hover:backdrop-blur-xl hover:border-white/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <Link href={`/${treatment.slug}`} className="flex items-start gap-6 md:gap-8 w-full">
        {/* Número grande em Fraunces */}
        <motion.div
          className="flex-shrink-0 font-heading text-5xl md:text-6xl font-bold text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors w-12 md:w-16"
          whileHover={{ scale: 1.1 }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        {/* Conteúdo textual */}
        <div className="flex-1 pt-2">
          <motion.h3
            className="font-heading text-xl md:text-2xl font-semibold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors"
            whileHover={{ x: 4 }}
          >
            {treatment.title}
          </motion.h3>
          <p className="text-sm md:text-base text-[#52717a] leading-relaxed">
            {treatment.shortDescription}
          </p>
        </div>

        {/* Thumbnail que aparece no hover */}
        <div className="hidden lg:flex-shrink-0 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-brand-mist border border-brand-line flex-shrink-0">
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={treatmentPhotos[treatment.slug] ?? photos.estrutura}
              alt={treatment.title}
              fill
              sizes="128px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}
