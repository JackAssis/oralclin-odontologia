import { fetchGooglePlaces } from "@/lib/google/places";
import { ReviewCard } from "./ReviewCard";
import { RatingSummary } from "./RatingSummary";
import { clinic } from "@/data/clinic";
import { TrackedLink } from "@/components/ui/TrackedLink";

export async function GoogleReviews() {
  const data = await fetchGooglePlaces();

  if (!data || !data.reviews.length) {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
                <span className="inline-block w-5 h-0.5 bg-current" />
                Avaliações
                <span className="inline-block w-5 h-0.5 bg-current" />
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
                Quem conhece a OralClin recomenda.
              </h2>
            </div>
            <p className="text-sm text-[#52717a] max-w-md mx-auto">
              Veja o que nossos pacientes estao dizendo no Google.
            </p>
            <TrackedLink
              href={clinic.mapsUrl}
              eventName="google_reviews_click"
              className="inline-block px-5 py-3 bg-brand-blue text-white font-heading font-semibold text-xs rounded-lg hover:bg-brand-blue-dark transition-colors"
            >
              Ver avaliações no Google
            </TrackedLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="space-y-2 text-center">
          <p className="flex items-center justify-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
            <span className="inline-block w-5 h-0.5 bg-current" />
            Avaliações
            <span className="inline-block w-5 h-0.5 bg-current" />
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
            Quem conhece a OralClin recomenda.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.rating !== null && data.reviewCount !== null && data.mapsUrl && (
            <div className="md:col-span-1">
              <RatingSummary rating={data.rating} reviewCount={data.reviewCount} mapsUrl={data.mapsUrl} />
            </div>
          )}

          <div className={data.rating !== null ? "md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" : "md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4"}>
            {data.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
