import type { MetadataRoute } from "next";
import { treatments } from "@/data/treatments";
import { getSiteUrl } from "@/data/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const treatmentRoutes = treatments.map((treatment) => ({
    url: `${baseUrl}/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...treatmentRoutes,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
