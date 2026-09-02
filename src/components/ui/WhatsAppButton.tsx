"use client";

import { buildWhatsAppUrl } from "@/data/clinic";
import { event } from "@/lib/analytics/gtag";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  message: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  ariaLabel?: string;
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
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => event("whatsapp_click", { message })}
      whileHover="hover"
      whileTap="tap"
      className={`inline-flex items-center justify-center gap-2 min-h-[50px] px-5 rounded-lg font-heading font-semibold text-[13px] tracking-[0.1px] transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {/* flex + items-center: o ícone precisa alinhar pelo centro do texto e
          respeitar o gap. Um <span> comum aqui alinha o SVG pela baseline. */}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {icon && (
        <motion.span
          variants={{
            hover: { x: 4 },
            tap: { x: -2 },
          }}
          className="relative z-10"
        >
          {icon}
        </motion.span>
      )}

      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-brand-blue-dark -z-10"
          initial={{ scaleX: 0 }}
          variants={{
            hover: { scaleX: 1 },
          }}
          style={{ originX: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.a>
  );
}
