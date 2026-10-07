export const clinic = {
  name: "OralClin Odontologia",
  city: "Itapoá",
  state: "SC",
  phoneDisplay: "(47) 99733-1350",
  /** Formato internacional, usado no link wa.me */
  whatsappNumber: "5547997331350",
  address: "R. 787 Vanilda Pereira Gomes, 617 - Itapema do Norte, Itapoá - SC, 89249-000",
  postalCode: "89249-000",
  neighborhood: "Itapema do Norte",
  hours: "[INSERIR HORÁRIO DE FUNCIONAMENTO]",
  instagramUrl: "https://www.instagram.com/oralclinitapoa/",
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJfZzlMDpX2ZQRQ6Qhvsrlu2U",
  googlePlaceId: "ChIJfZzlMDpX2ZQRQ6Qhvsrlu2U",
  ga4MeasurementId: "",
  siteUrl: "[INSERIR URL DO SITE]",
  /** Google Ads — usados para disparar a conversao nas LPs de campanha */
  googleAdsId: "[INSERIR GOOGLE ADS ID]",
  googleAdsConversionLabel: "[INSERIR LABEL DE CONVERSAO]",
};

/**
 * URL base do site — fonte única para canonical, Open Graph, sitemap e robots.
 * Ordem: env var (definida por ambiente na Vercel) → clinic.ts → fallback local.
 * Sem isso, layout e sitemap divergiam e o Open Graph apontava para um domínio
 * inexistente, quebrando a prévia do link no WhatsApp.
 */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (!clinic.siteUrl.startsWith("[INSERIR")) return clinic.siteUrl.replace(/\/$/, "");
  return "https://oralclin.local";
}

export function buildWhatsAppUrl(message: string) {
  const digitsOnly = clinic.whatsappNumber.replace(/\D/g, "");
  const phone = digitsOnly.length > 0 ? digitsOnly : clinic.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
