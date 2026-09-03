import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Fotos de perfil de quem avalia no Google, exibidas junto da avaliação
      { protocol: "https", hostname: "*.googleusercontent.com" },
    ],
  },

  async redirects() {
    return [
      /**
       * Invisalign saiu do portfólio de tratamentos e virou Facetas. As URLs
       * antigas podem ter circulado, então apontam para a lista de tratamentos
       * em vez de dar 404. Não redirecionamos para Facetas de propósito: são
       * tratamentos diferentes, e mandar quem procurava um para o outro engana.
       */
      { source: "/invisalign-itapoa", destination: "/#tratamentos", permanent: true },
      { source: "/lp/invisalign", destination: "/#tratamentos", permanent: true },
    ];
  },

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
