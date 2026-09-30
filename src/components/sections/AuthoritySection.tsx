import Image from "next/image";
import { professionals, professionalsNote } from "@/data/professionals";
import { GlassCard } from "@/components/decor/GlassCard";
import { GradientMesh } from "@/components/decor/GradientMesh";

export function AuthoritySection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="equipe">
      <GradientMesh variant="light" />
      <div className="max-w-5xl mx-auto px-6 space-y-12 relative z-10">
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1.2fr_0.7fr] md:gap-20 md:items-end">
          <div className="space-y-3">
            <p className="flex items-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
              <span className="inline-block w-5 h-0.5 bg-current" />
              Nossa equipe
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-brand-navy leading-tight">
              Confiança começa por quem cuida de você.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#52717a] leading-relaxed">
            Uma equipe preparada para ouvir, orientar e acompanhar cada etapa do seu cuidado.
          </p>
        </div>

        {/* Nome sempre acompanhado do CRO — exigência do CFO para publicidade odontológica */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {professionals.map((professional) => (
            <GlassCard
              key={professional.cro}
              variant="light"
              className="overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative bg-[#dfece9] h-48 md:h-64">
                {professional.photo && (
                  <Image
                    src={professional.photo}
                    alt={`${professional.name}, ${professional.role} da OralClin`}
                    fill
                    sizes="(max-width: 760px) 46vw, 23vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 18%" }}
                  />
                )}
              </div>
              <div className="p-3 md:p-4">
                <p className="font-heading font-semibold text-xs md:text-sm text-brand-navy leading-snug">
                  {professional.name}
                </p>
                <p className="text-[11px] text-[#52717a] mt-0.5">{professional.cro}</p>
                <p className="text-[11px] text-brand-green font-heading font-semibold mt-1">
                  {professional.specialty ?? professional.role}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        <p className="text-xs text-[#67828a] leading-relaxed">{professionalsNote}</p>
      </div>
    </section>
  );
}
