import Link from "next/link";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <nav
      className="fixed top-20 left-0 right-0 bg-white border-b border-brand-line p-4 md:hidden"
      onClick={onClose}
    >
      <div className="flex flex-col gap-4 font-heading font-semibold text-sm text-brand-navy">
        <a href="#tratamentos" className="hover:text-brand-blue transition-colors">
          Tratamentos
        </a>
        <a href="#oralclin" className="hover:text-brand-blue transition-colors">
          A OralClin
        </a>
        <a href="#equipe" className="hover:text-brand-blue transition-colors">
          Equipe
        </a>
        <a href="#contato" className="hover:text-brand-blue transition-colors">
          Contato
        </a>
      </div>
    </nav>
  );
}
