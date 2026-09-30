"use server";

import { deliverLead } from "./submitLead";

/**
 * Captura o lead do botão de WhatsApp.
 *
 * Diferente de submitLead (formulário completo), aqui:
 * - Não há campo de tratamento — a origem já identifica o contexto
 * - Não redireciona — o cliente abre o WhatsApp e fecha o modal
 * - Fire-and-forget: o cliente não espera a resposta para abrir o WhatsApp
 */
export async function submitWhatsAppLead({
  name,
  phone,
  source,
}: {
  name: string;
  phone: string;
  source: string;
}) {
  const digitsOnly = phone.replace(/\D/g, "");
  if (!name.trim() || digitsOnly.length < 10) return;

  await deliverLead({
    name: name.trim(),
    whatsapp: phone.trim(),
    treatment: "whatsapp",
    source,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    submittedAt: new Date().toISOString(),
  });
}
