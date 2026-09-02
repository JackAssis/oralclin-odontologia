"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Brand } from "@/components/ui/Brand";
import { MobileMenu } from "./MobileMenu";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed z-10 top-0 w-full bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Brand tone="color" height={38} />

          <nav className="hidden md:flex gap-7 ml-auto mr-8 font-heading font-semibold text-xs tracking-tight">
            <a href="#tratamentos" className="text-brand-navy hover:text-brand-blue transition-colors">
              Tratamentos
            </a>
            <a href="#oralclin" className="text-brand-navy hover:text-brand-blue transition-colors">
              A OralClin
            </a>
            <a href="#equipe" className="text-brand-navy hover:text-brand-blue transition-colors">
              Equipe
            </a>
            <a href="#contato" className="text-brand-navy hover:text-brand-blue transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <Button href="#contato">
              Agendar avaliação
              <ArrowRight size={17} strokeWidth={2.2} />
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-navy"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}

      <div className="h-20" />
    </>
  );
}
