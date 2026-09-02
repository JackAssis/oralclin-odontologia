import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/clinic";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /lp/ = landing pages de campanha (tráfego pago): não devem ser indexadas
      // para não competir com as páginas de SEO dos mesmos tratamentos.
      disallow: ["/obrigado", "/lp/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
