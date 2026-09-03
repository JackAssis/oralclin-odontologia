import Image from "next/image";
import { Star } from "lucide-react";
import type { GoogleReview } from "@/lib/google/places";
import { GlassCard } from "@/components/decor/GlassCard";

type ReviewCardProps = {
  review: GoogleReview;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <GlassCard
      variant="light"
      className="p-5 md:p-6 space-y-3 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-start gap-3">
        {/* Foto e nome do autor: a política do Google exige atribuição da
            avaliação a quem a escreveu */}
        {review.authorPhoto ? (
          <Image
            src={review.authorPhoto}
            alt=""
            width={36}
            height={36}
            className="rounded-full flex-shrink-0"
          />
        ) : (
          <span className="w-9 h-9 rounded-full bg-brand-mist flex items-center justify-center font-heading font-semibold text-xs text-brand-navy flex-shrink-0">
            {review.authorName.charAt(0)}
          </span>
        )}

        <div className="flex-1 min-w-0">
          <p className="font-heading font-semibold text-sm text-brand-navy truncate">
            {review.authorName}
          </p>

          <div className="flex items-center gap-2 mt-0.5">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </span>
            {review.relativeTime && (
              <span className="text-[11px] text-[#8aa4ac]">{review.relativeTime}</span>
            )}
          </div>
        </div>
      </div>

      {/* Texto exibido exatamente como veio do Google — a política proíbe editar
          o conteúdo da avaliação */}
      <p className="text-xs md:text-sm text-[#52717a] leading-relaxed line-clamp-4">
        {review.text}
      </p>
    </GlassCard>
  );
}
