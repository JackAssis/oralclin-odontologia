import { Star } from "lucide-react";
import type { GoogleReview } from "@/lib/google/places";
import { GlassCard } from "@/components/decor/GlassCard";

type ReviewCardProps = {
  review: GoogleReview;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <GlassCard variant="light" className="p-5 md:p-6 space-y-3 hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="font-heading font-semibold text-sm text-brand-navy">{review.authorName}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-xs md:text-sm text-[#52717a] leading-relaxed line-clamp-3">{review.text}</p>
    </GlassCard>
  );
}
