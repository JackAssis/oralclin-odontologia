import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";

const LOGO = "/images/brand/oralclin-logo.png";
const LOGO_RATIO = 414 / 98;

type BrandProps = {
  /** "color" sobre fundo claro; "white" deixa a marca sólida em branco (fundo escuro) */
  tone?: "color" | "white";
  /** Altura da marca em px — a largura sai da proporção do arquivo */
  height?: number;
  /** Sem link — usado nas LPs de campanha, que não devem ter rota de saída */
  asStatic?: boolean;
  className?: string;
};

export function Brand({
  tone = "color",
  height = 40,
  asStatic = false,
  className = "",
}: BrandProps) {
  const mark = (
    <Image
      src={LOGO}
      alt={clinic.name}
      width={Math.round(height * LOGO_RATIO)}
      height={height}
      priority
      className={tone === "white" ? "brightness-0 invert" : undefined}
    />
  );

  if (asStatic) {
    return <span className={`inline-flex items-center ${className}`}>{mark}</span>;
  }

  return (
    <Link
      href="/"
      aria-label={`${clinic.name}, ir para o início`}
      className={`inline-flex items-center ${className}`}
    >
      {mark}
    </Link>
  );
}
