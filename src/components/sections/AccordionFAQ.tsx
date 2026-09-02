"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Objection } from "@/data/treatments";
import { GlassCard } from "@/components/decor/GlassCard";

type AccordionFAQProps = {
  items: Objection[];
  title?: string;
  subtitle?: string;
};

export function AccordionFAQ({ items, title = "Dúvidas frequentes", subtitle = "" }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        {(title || subtitle) && (
          <div className="space-y-3 text-center">
            {title && (
              <p className="flex items-center justify-center gap-2 font-heading font-semibold text-brand-green text-xs tracking-widest uppercase">
                <span className="inline-block w-5 h-0.5 bg-current" />
                {title}
                <span className="inline-block w-5 h-0.5 bg-current" />
              </p>
            )}
            {subtitle && (
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">{subtitle}</h2>
            )}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item, index) => (
            <GlassCard key={index} variant="light" className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between hover:bg-white/40 transition-colors"
              >
                <span className="font-heading font-semibold text-sm md:text-base text-brand-navy text-left">{item.question}</span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-brand-blue to-brand-green flex items-center justify-center text-white transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                >
                  <ChevronDown size={16} />
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 md:px-6 md:py-5 border-t border-white/40">
                  <p className="text-sm text-[#52717a] leading-relaxed">{item.answer}</p>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
