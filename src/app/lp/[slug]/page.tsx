import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaigns, getCampaignBySlug } from "@/data/campaigns";
import { getTreatmentBySlug } from "@/data/treatments";
import { CampaignLandingPage } from "@/components/campaign/CampaignLandingPage";

type PageParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);

  if (!campaign) {
    return { title: "Página não encontrada | OralClin" };
  }

  return {
    title: campaign.metaTitle,
    description: campaign.adSubheadline,
    // LP de campanha não entra no indice: evita competir com a página de SEO
    // do mesmo tratamento e evita conteúdo duplicado.
    robots: { index: false, follow: false },
  };
}

export default async function CampaignPage({ params }: PageParams) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  const treatment = getTreatmentBySlug(campaign.treatmentSlug);

  if (!treatment) {
    notFound();
  }

  return <CampaignLandingPage campaign={campaign} treatment={treatment} />;
}
