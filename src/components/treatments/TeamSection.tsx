"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { professionals, professionalsNote } from "@/data/professionals";

const pillars = [
  { title: "Escuta", description: "Entender você antes de decidir." },
  { title: "Planejamento", description: "Cuidado pensado para o seu caso." },
  { title: "Acompanhamento", description: "Presença em cada etapa." },
];

/**
 * Seção de autoridade das páginas de tratamento.
 *
 * O nome de cada profissional nunca aparece sem o CRO ao lado — é exigência do
 * CFO para publicidade odontológica. A especialidade só é exibida quando está
 * preenchida em professionals.ts: divulgar especialidade não registrada é
 * infração, então o campo vazio simplesmente não renderiza.
 *
 * O layout se adapta à quantidade de profissionais confirmados: com um, retrato
 * grande e cartão sobreposto; com dois ou mais, uma grade de cartões e a frase
 * de trabalho em conjunto.
 */
export function TeamSection() {
  const reduceMotion = useReducedMotion();
  const isSolo = professionals.length === 1;
  const lead = professionals[0];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Cabeçalho centralizado */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="flex items-center justify-center gap-3 font-heading font-semibold text-brand-green text-[11px] tracking-[0.18em] uppercase">
            <span className="inline-block w-6 h-px bg-current" />
            Quem está ao seu lado
            <span className="inline-block w-6 h-px bg-current" />
          </p>

          <h2 className="mt-5 text-[1.75rem] md:text-4xl font-heading font-semibold text-brand-navy leading-[1.18] tracking-[-0.01em]">
            Confiança começa por{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              quem cuida de você.
            </span>
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-base md:text-lg text-[#4d6d77] leading-[1.75]">
              Um tratamento que transforma o sorriso começa com profissionais que entendem que cada
              paciente também traz uma história.
            </p>
            <p className="text-base md:text-lg text-[#4d6d77] leading-[1.75]">
              Na OralClin, você encontra uma equipe preparada para avaliar seu caso, planejar cada
              etapa e acompanhar você durante sua jornada.
            </p>
          </div>
        </motion.div>

        {/* Profissionais */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-14 md:mt-16"
        >
          {isSolo && lead.photo ? (
            /* Um profissional: retrato grande com o cartão de identificação
               sobreposto na borda, em vez de dois retângulos lado a lado */
            <div className="relative max-w-3xl mx-auto md:pr-24">
              <div className="relative aspect-[4/5] md:aspect-[3/2] rounded-[1.75rem] overflow-hidden bg-brand-mist shadow-xl">
                <Image
                  src={lead.photo}
                  alt={`${lead.name}, ${lead.role} da OralClin`}
                  fill
                  sizes="(max-width: 768px) 92vw, 720px"
                  className="object-cover"
                  style={{ objectPosition: "50% 22%" }}
                />
              </div>

              <div className="relative md:absolute md:right-0 md:bottom-10 md:w-64 mt-5 md:mt-0 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_18px_40px_rgba(14,63,83,0.16)] p-6">
                <span
                  aria-hidden="true"
                  className="block w-8 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                />
                <h3 className="mt-4 font-heading font-semibold text-lg text-brand-navy leading-snug">
                  {lead.name}
                </h3>
                <p className="mt-1 text-sm text-[#5a7a84]">{lead.cro}</p>
                <p className="mt-2 font-heading font-semibold text-[11px] tracking-[0.12em] uppercase text-brand-green">
                  {lead.role}
                </p>
                {lead.specialty && (
                  <p className="mt-2 text-sm text-[#5a7a84]">{lead.specialty}</p>
                )}
              </div>
            </div>
          ) : (
            /* Dois ou mais: grade de cartões */
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {professionals.map((professional) => (
                  <article
                    key={professional.cro}
                    className="rounded-2xl overflow-hidden bg-white border border-brand-line shadow-sm"
                  >
                    {professional.photo && (
                      <div className="relative aspect-[4/5] bg-brand-mist">
                        <Image
                          src={professional.photo}
                          alt={`${professional.name}, ${professional.role} da OralClin`}
                          fill
                          sizes="(max-width: 640px) 92vw, 320px"
                          className="object-cover"
                          style={{ objectPosition: "50% 22%" }}
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-base text-brand-navy leading-snug">
                        {professional.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#5a7a84]">{professional.cro}</p>
                      {professional.specialty && (
                        <p className="mt-1.5 text-sm text-[#5a7a84]">{professional.specialty}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-8 text-center text-base md:text-lg font-heading font-semibold text-brand-navy">
                Uma equipe trabalhando em conjunto para cuidar do seu sorriso.
              </p>
            </>
          )}
        </motion.div>

        {/* Pilares — como a equipe trabalha.
            No mobile viram um painel único com filetes internos: soltos, os três
            blocos pareciam desgarrados da seção. Como painel, leem como uma
            continuação do cartão do profissional logo acima. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-12 md:mt-20 md:pt-12 md:border-t md:border-brand-line"
        >
          <p className="md:hidden font-heading font-semibold text-[11px] tracking-[0.16em] uppercase text-brand-green text-center mb-4">
            Como a equipe trabalha
          </p>

          <ul className="rounded-2xl border border-brand-line bg-brand-mist/60 divide-y divide-brand-line md:rounded-none md:border-0 md:bg-transparent md:divide-y-0 md:grid md:grid-cols-3 md:divide-x md:divide-brand-line">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className="flex md:block items-start gap-4 p-5 md:p-0 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                {/* Marcador só no mobile: dá âncora visual a cada linha */}
                <span
                  aria-hidden="true"
                  className="md:hidden flex-shrink-0 mt-1.5 w-6 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                  style={{ opacity: 1 - index * 0.2 }}
                />

                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-[11px] tracking-[0.16em] uppercase text-brand-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 md:mt-2.5 text-sm text-[#5a7a84] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="mt-10 text-xs text-[#8aa4ac] text-center leading-relaxed">
          {professionalsNote}
        </p>
      </div>
    </section>
  );
}
