"use client";

import { useActionState } from "react";
import { submitLead } from "@/app/actions/submitLead";
import { treatments } from "@/data/treatments";
import { event, conversion } from "@/lib/analytics/gtag";
import { useCampaignParams } from "@/hooks/useCampaignParams";

type LeadFormProps = {
  /** "dark" para uso sobre fundo navy, "light" para uso sobre fundo claro */
  variant?: "dark" | "light";
  /** Slug do tratamento a pre-selecionar (usado nas LPs de campanha) */
  defaultTreatment?: string;
  /** Origem do lead — nas LPs de campanha, o slug da campanha */
  source?: string;
};

export function LeadForm({ variant = "dark", defaultTreatment, source = "site" }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(submitLead, null);
  const campaignParams = useCampaignParams();

  const isDark = variant === "dark";

  const labelClass = `block font-heading font-semibold text-xs mb-2 ${
    isDark ? "text-white/90" : "text-brand-navy"
  }`;

  const fieldClass = `w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${
    isDark
      ? "bg-white/10 border border-white/25 text-white placeholder-white/40"
      : "bg-white border border-brand-line text-brand-ink placeholder-[#8aa4ac]"
  }`;

  return (
    <form
      action={formAction}
      onSubmit={() => {
        event("form_submit", { source });
        conversion({ source });
      }}
      className="space-y-4"
    >
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="utm_source" value={campaignParams.utm_source} />
      <input type="hidden" name="utm_medium" value={campaignParams.utm_medium} />
      <input type="hidden" name="utm_campaign" value={campaignParams.utm_campaign} />
      <input type="hidden" name="utm_content" value={campaignParams.utm_content} />
      <input type="hidden" name="utm_term" value={campaignParams.utm_term} />
      <input type="hidden" name="gclid" value={campaignParams.gclid} />

      <div>
        <label htmlFor="name" className={labelClass}>
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp (com DDD)
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
          placeholder="(47) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="treatment" className={labelClass}>
          Tratamento de interesse
        </label>
        {defaultTreatment ? (
          /* Página de tratamento: o campo é travado — só exibe o tratamento
             daquela página. O visitante não precisa escolher, e o valor
             chega certinho no lead. */
          <>
            <input type="hidden" name="treatment" value={defaultTreatment} />
            <div
              className={`${fieldClass} flex items-center opacity-80 cursor-default select-none`}
            >
              {treatments.find((t) => t.slug === defaultTreatment)?.title ?? defaultTreatment}
            </div>
          </>
        ) : (
          /* Home e páginas genéricas: dropdown completo */
          <select
            id="treatment"
            name="treatment"
            required
            defaultValue=""
            className={`${fieldClass} [&>option]:text-brand-navy`}
          >
            <option value="">Selecione um tratamento</option>
            {treatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.slug}>
                {treatment.title}
              </option>
            ))}
            <option value="outro">Outro</option>
          </select>
        )}
      </div>

      {state?.error && (
        <p className={`text-xs ${isDark ? "text-red-300" : "text-red-600"}`}>{state.error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full min-h-12 px-5 rounded-lg font-heading font-semibold text-xs tracking-[0.1px] bg-gradient-to-r from-brand-blue to-brand-green text-white hover:shadow-[0_0_30px_rgba(0,163,224,0.4)] transition-all disabled:opacity-60"
      >
        {isPending ? "Enviando..." : "Agendar minha avaliação"}
      </button>

      <p className={`text-[11px] leading-relaxed ${isDark ? "text-white/60" : "text-[#67828a]"}`}>
        Ao enviar, você autoriza o contato da equipe da OralClin sobre a sua avaliação.
      </p>
    </form>
  );
}
