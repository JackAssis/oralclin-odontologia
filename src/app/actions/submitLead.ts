"use server";

import { redirect } from "next/navigation";

export type Lead = {
  name: string;
  whatsapp: string;
  treatment: string;
  source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  submittedAt: string;
};

/**
 * Entrega o lead no destino configurado em LEAD_WEBHOOK_URL (n8n, Zapier, Make,
 * CRM...). Sem essa variavel o lead não tem para onde ir — nesse caso registramos
 * um erro explicito no log do servidor em vez de falhar em silencio, porque numa
 * campanha paga um lead perdido e dinheiro perdido.
 */
export async function deliverLead(lead: Lead) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "[lead] LEAD_WEBHOOK_URL não configurada — lead recebido mas NAO entregue:",
      { treatment: lead.treatment, source: lead.source, submittedAt: lead.submittedAt },
    );
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      console.error("[lead] Webhook respondeu com erro:", response.status, lead);
    }
  } catch (error) {
    console.error("[lead] Falha ao enviar para o webhook:", error, lead);
  }
}

export async function submitLead(prevState: unknown, formData: FormData) {
  const getField = (key: string) => ((formData.get(key) as string) ?? "").trim();

  const name = getField("name");
  const whatsapp = getField("whatsapp");
  const treatment = getField("treatment");

  if (!name || !whatsapp || !treatment) {
    return { error: "Todos os campos são obrigatórios" };
  }

  const digitsOnly = whatsapp.replace(/\D/g, "");
  if (digitsOnly.length < 10) {
    return { error: "Número de WhatsApp inválido" };
  }

  await deliverLead({
    name,
    whatsapp,
    treatment,
    source: getField("source") || "site",
    utm_source: getField("utm_source"),
    utm_medium: getField("utm_medium"),
    utm_campaign: getField("utm_campaign"),
    utm_content: getField("utm_content"),
    utm_term: getField("utm_term"),
    gclid: getField("gclid"),
    submittedAt: new Date().toISOString(),
  });

  redirect("/obrigado");
}
