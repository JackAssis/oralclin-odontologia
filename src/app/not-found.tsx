import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-brand-mist">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-navy">404</h1>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-navy">
            Ops. Esse sorriso saiu da rota.
          </h2>
          <p className="text-base md:text-lg text-[#52717a] max-w-md mx-auto">
            A página que você procura não foi encontrada. Vamos voltar para o início?
          </p>
          <Button href="/">Voltar para a OralClin</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
