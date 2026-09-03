const trustItems = [
  "Avaliação personalizada",
  "Atendimento humanizado",
  "Tecnologia odontológica",
  "Equipe especializada",
];

/**
 * Faixa de confiança logo abaixo do hero.
 *
 * Sem ícone de check: o check é justamente o que faz um conjunto de frases
 * parecer checklist. Um ponto em gradiente cumpre a separação e mantém o tom.
 *
 * No mobile vira um letreiro contínuo de uma linha só. Empilhada, ela ocupava
 * quatro linhas logo abaixo do hero e empurrava o CTA para fora da dobra.
 */
export function TrustBar() {
  const item = (text: string, key: string) => (
    <span key={key} className="flex items-center gap-3 whitespace-nowrap">
      <span
        aria-hidden="true"
        className="w-1 h-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green flex-shrink-0"
      />
      <span className="font-heading font-semibold text-[11px] tracking-[0.14em] uppercase text-[#5a7a84]">
        {text}
      </span>
    </span>
  );

  return (
    <div className="bg-white border-b border-brand-line overflow-hidden">
      {/* Desktop: linha única, distribuída */}
      <div className="hidden md:block max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between gap-6">
          {trustItems.map((text) => item(text, text))}
        </div>
      </div>

      {/* Mobile: letreiro contínuo. A lista é repetida para o laço não ter
          emenda visível; a cópia fica com aria-hidden para o leitor de tela
          não ouvir tudo duas vezes. */}
      <div className="md:hidden py-4 relative">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-8 pr-8">
            {trustItems.map((text) => item(text, text))}
          </div>
          <div className="flex items-center gap-8 pr-8" aria-hidden="true">
            {trustItems.map((text) => item(text, `${text}-copia`))}
          </div>
        </div>

        {/* Esfumaçado nas bordas: o texto entra e sai em vez de ser cortado */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"
        />
        <span
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"
        />
      </div>
    </div>
  );
}
