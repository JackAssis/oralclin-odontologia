import { Star } from "lucide-react";
import { GlassCard } from "@/components/decor/GlassCard";

type RatingSummaryProps = {
  rating: number;
  reviewCount: number;
  mapsUrl: string;
};

export function RatingSummary({ rating, reviewCount, mapsUrl }: RatingSummaryProps) {
  return (
    <GlassCard variant="light" className="p-6 md:p-8 space-y-4 text-center">
      <div className="flex items-center justify-center gap-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <div>
          <p className="font-heading font-bold text-2xl text-brand-navy">{rating.toFixed(1)}</p>
          <p className="text-xs text-[#52717a]">{reviewCount} avaliações</p>
        </div>
      </div>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-brand-blue font-heading font-semibold text-xs hover:text-brand-blue-dark transition-colors"
      >
        Ver todas as avaliações no Google →
      </a>
    </GlassCard>
  );
}
