"use client";

import { useEffect, useState } from "react";

export type CampaignParams = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
};

const EMPTY: CampaignParams = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
};

const STORAGE_KEY = "oralclin_campaign_params";

/**
 * Lê utm_* e gclid da URL após a hidratação e guarda em sessionStorage, para que
 * a origem sobreviva a navegação dentro do site (o visitante pode chegar pelo
 * anúncio e só converter alguns cliques depois).
 *
 * Lê de window.location em vez de useSearchParams() de propósito: useSearchParams()
 * exigiria um <Suspense> e tiraria a página do prerender estático. Numa LP de
 * anúncio o tempo de carregamento conta, e esses valores só precisam existir no
 * momento do envio do formulário.
 */
export function useCampaignParams(): CampaignParams {
  const [params, setParams] = useState<CampaignParams>(EMPTY);

  useEffect(() => {
    try {
      const search = new URLSearchParams(window.location.search);
      const fromUrl: CampaignParams = {
        utm_source: search.get("utm_source") ?? "",
        utm_medium: search.get("utm_medium") ?? "",
        utm_campaign: search.get("utm_campaign") ?? "",
        utm_content: search.get("utm_content") ?? "",
        utm_term: search.get("utm_term") ?? "",
        gclid: search.get("gclid") ?? "",
      };

      const hasAnyFromUrl = Object.values(fromUrl).some((value) => value !== "");

      if (hasAnyFromUrl) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
        setParams(fromUrl);
        return;
      }

      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setParams({ ...EMPTY, ...JSON.parse(stored) });
      }
    } catch {
      // sessionStorage pode falhar (navegação anonima, cookies bloqueados).
      // A origem se perde, mas o formulário continua funcionando.
    }
  }, []);

  return params;
}
