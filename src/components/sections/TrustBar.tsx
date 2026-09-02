import { Check } from "lucide-react";

const trustItems = [
  "Avaliação personalizada",
  "Atendimento humanizado",
  "Tecnologia odontológica",
  "Equipe especializada",
];

export function TrustBar() {
  return (
    <div className="bg-white border-b border-brand-line">
      <div className="max-w-5xl mx-auto px-6 py-6 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-3 md:border-r md:border-brand-line md:pr-6 md:pl-6 first:pl-0 last:border-r-0">
              <Check size={17} className="text-brand-green flex-shrink-0" />
              <span className="text-xs md:text-sm text-[#426572]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
