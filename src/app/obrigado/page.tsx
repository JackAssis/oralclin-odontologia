import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Obrigado | OralClin",
  robots: {
    index: false,
  },
};

export default function ThankYou() {
  return (
    <main>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-brand-mist py-20">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center">
              <CheckCircle size={32} className="text-brand-green" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-heading font-semibold text-brand-navy">
              Recebemos suas informações.
            </h1>
            <p className="text-base md:text-lg text-[#52717a] max-w-md mx-auto leading-relaxed">
              Nossa equipe entrarÃ¡ em contato para entender melhor o seu caso e orientar sobre os próximos passos.
            </p>
          </div>

          <div className="pt-4">
            <WhatsAppButton message="Olá! Gostaria de conversar sobre minha avaliação na OralClin.">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
