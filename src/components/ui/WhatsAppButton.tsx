"use client";

import { useState, useRef } from "react";
import { buildWhatsAppUrl } from "@/data/clinic";
import { event } from "@/lib/analytics/gtag";
import { submitWhatsAppLead } from "@/app/actions/submitWhatsAppLead";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  message: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  ariaLabel?: string;
  /** Origem do lead (identifica de onde veio o clique no webhook) */
  source?: string;
};

const variantClasses = {
  primary:
    "text-white bg-gradient-to-r from-brand-blue to-brand-green hover:shadow-[0_0_30px_rgba(0,163,224,0.4)] relative overflow-hidden group",
  outline:
    "border border-brand-ink/20 text-brand-navy hover:border-brand-blue hover:text-brand-blue group",
  light: "bg-white text-brand-navy hover:bg-white/90 group",
};

export function WhatsAppButton({
  message,
  children,
  icon,
  variant = "primary",
  className = "",
  ariaLabel,
  source = "whatsapp-button",
}: WhatsAppButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const url = buildWhatsAppUrl(message);

  /* Abre o modal em vez de ir direto para o WhatsApp */
  function handleButtonClick(e: React.MouseEvent) {
    e.preventDefault();
    setOpen(true);
    // Foca o campo de nome assim que o modal aparecer
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  /* Submete o lead e abre o WhatsApp simultaneamente.
     window.open precisa ser chamado de forma síncrona dentro do handler
     do clique — se for em await, o bloqueador de popup do browser cancela. */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    // 1. Abre o WhatsApp imediatamente (síncrono → sem bloqueio de popup)
    event("whatsapp_click", { message, source, name });
    window.open(url, "_blank", "noopener,noreferrer");

    // 2. Dispara o lead em background (fire-and-forget)
    void submitWhatsAppLead({ name, phone, source });

    setOpen(false);
    setSending(false);
    setName("");
    setPhone("");
  }

  /* Pular o formulário e ir direto ao WhatsApp */
  function handleSkip() {
    event("whatsapp_click", { message, source, skipped: true });
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <motion.button
        type="button"
        aria-label={ariaLabel}
        onClick={handleButtonClick}
        whileHover="hover"
        whileTap="tap"
        className={`inline-flex items-center justify-center gap-2 min-h-[50px] px-5 rounded-lg font-heading font-semibold text-[13px] tracking-[0.1px] transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {icon && (
          <motion.span
            variants={{ hover: { x: 4 }, tap: { x: -2 } }}
            className="relative z-10"
          >
            {icon}
          </motion.span>
        )}
        {variant === "primary" && (
          <motion.div
            className="absolute inset-0 bg-brand-blue-dark -z-10"
            initial={{ scaleX: 0 }}
            variants={{ hover: { scaleX: 1 } }}
            style={{ originX: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>

      {/* Modal de captura de lead */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Card do modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="pointer-events-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Topo colorido */}
                <div className="bg-gradient-to-r from-brand-blue to-brand-green px-6 py-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white text-sm leading-tight">
                        Falar pelo WhatsApp
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        Deixe seu contato e vamos te chamar
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white transition-colors mt-0.5 flex-shrink-0"
                    aria-label="Fechar"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                  <div>
                    <label
                      htmlFor="wa-name"
                      className="block font-heading font-semibold text-xs text-brand-navy mb-1.5"
                    >
                      Seu nome
                    </label>
                    <input
                      ref={nameRef}
                      id="wa-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como prefere ser chamado?"
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-brand-line bg-brand-mist text-brand-ink placeholder-[#8aa4ac] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="wa-phone"
                      className="block font-heading font-semibold text-xs text-brand-navy mb-1.5"
                    >
                      WhatsApp (com DDD)
                    </label>
                    <input
                      id="wa-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(47) 99999-9999"
                      className="w-full px-4 py-2.5 rounded-lg text-sm border border-brand-line bg-brand-mist text-brand-ink placeholder-[#8aa4ac] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full min-h-11 rounded-lg bg-gradient-to-r from-brand-blue to-brand-green text-white font-heading font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,163,224,0.35)] transition-all disabled:opacity-60"
                  >
                    {sending ? "Abrindo..." : "Ir para o WhatsApp →"}
                  </button>

                  <button
                    type="button"
                    onClick={handleSkip}
                    className="w-full text-center text-xs text-[#8aa4ac] hover:text-brand-navy transition-colors py-1"
                  >
                    Pular e ir direto
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
