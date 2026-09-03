export type GoogleReview = {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  /** Ex.: "há 2 meses" — vem pronto da API, já traduzido */
  relativeTime?: string;
  publishTime?: string;
};

/**
 * Formato de resposta da Places API (New).
 *
 * Atenção aos campos aninhados: `text` e `originalText` são LocalizedText
 * ({ text, languageCode }) e o autor vem em `authorAttribution`, não solto na
 * raiz da review. Tratar como string quebra silenciosamente — a review aparece
 * vazia no site em vez de dar erro.
 */
type PlacesReview = {
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  relativePublishTimeDescription?: string;
  publishTime?: string;
};

type PlacesResponse = {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
  googleMapsUri?: string;
};

export type PlacesResult = {
  rating: number | null;
  reviewCount: number | null;
  reviews: GoogleReview[];
  mapsUrl: string | null;
};

export async function fetchGooglePlaces(): Promise<PlacesResult | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        // FieldMask é obrigatório e define o que é cobrado: pedir só o necessário
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews,googleMapsUri",
      },
      // 1 hora de cache: a API é cobrada por requisição e avaliação não muda
      // a ponto de justificar buscar a cada visita
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("[places] API respondeu com erro:", response.status, await response.text());
      return null;
    }

    const data: PlacesResponse = await response.json();

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((review) => ({
        authorName: review.authorAttribution?.displayName ?? "",
        authorPhoto: review.authorAttribution?.photoUri,
        rating: review.rating ?? 0,
        // O conteúdo da avaliação nunca é editado — só lido de onde a API o coloca
        text: review.text?.text ?? review.originalText?.text ?? "",
        relativeTime: review.relativePublishTimeDescription,
        publishTime: review.publishTime,
      }))
      // Sem texto não há o que exibir; evita card vazio na grade
      .filter((review) => review.text.trim().length > 0)
      .slice(0, 6);

    return {
      rating: data.rating ?? null,
      reviewCount: data.userRatingCount ?? null,
      reviews,
      mapsUrl: data.googleMapsUri ?? null,
    };
  } catch (error) {
    console.error("[places] Falha ao consultar a API:", error);
    return null;
  }
}
