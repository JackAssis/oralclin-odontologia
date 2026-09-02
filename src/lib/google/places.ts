export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  publishTime?: string;
};

export type PlacesResponse = {
  displayName?: {
    text?: string;
  };
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    authorName: string;
    rating: number;
    text: string;
    publishTime?: string;
  }>;
  googleMapsUri?: string;
};

export async function fetchGooglePlaces(): Promise<{
  rating: number | null;
  reviewCount: number | null;
  reviews: GoogleReview[];
  mapsUrl: string | null;
} | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews,googleMapsUri",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Google Places API error:", response.status);
      return null;
    }

    const data: PlacesResponse = await response.json();

    return {
      rating: data.rating ?? null,
      reviewCount: data.userRatingCount ?? null,
      reviews: data.reviews?.slice(0, 6).map((review) => ({
        authorName: review.authorName,
        rating: review.rating,
        text: review.text,
        publishTime: review.publishTime,
      })) || [],
      mapsUrl: data.googleMapsUri || null,
    };
  } catch (error) {
    console.error("Failed to fetch Google Places:", error);
    return null;
  }
}
