import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        /**
         * Qualquer domínio *.vercel.app é ambiente provisório (preview ou o
         * deploy de aprovação do cliente) e não pode ser indexado — senão passa
         * a competir no Google com o site definitivo e gera conteúdo duplicado.
         *
         * A regra é presa ao host de propósito: quando o domínio próprio da
         * clínica for apontado, o header simplesmente deixa de ser aplicado e o
         * site fica indexável, sem ninguém precisar lembrar de mexer aqui.
         */
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
