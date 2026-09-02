import { clinic } from "@/data/clinic";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function pageview(url: string) {
  if (!clinic.ga4MeasurementId || typeof window === "undefined") return;
  window.gtag?.("config", clinic.ga4MeasurementId, { page_path: url });
}

export function event(action: string, params: Record<string, unknown> = {}) {
  if (!clinic.ga4MeasurementId || typeof window === "undefined") return;
  window.gtag?.("event", action, params);
}

/**
 * Conversao do Google Ads. So dispara quando o ID e a label estiverem
 * realmente preenchidos em clinic.ts — enquanto forem placeholder, e no-op.
 */
export function conversion(params: Record<string, unknown> = {}) {
  const { googleAdsId, googleAdsConversionLabel } = clinic;

  const isConfigured =
    googleAdsId &&
    googleAdsConversionLabel &&
    !googleAdsId.startsWith("[INSERIR") &&
    !googleAdsConversionLabel.startsWith("[INSERIR");

  if (!isConfigured || typeof window === "undefined") return;

  window.gtag?.("event", "conversion", {
    send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
    ...params,
  });
}
