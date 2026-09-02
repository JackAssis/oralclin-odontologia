import type { Metadata } from "next";
import { getTreatmentBySlug } from "@/data/treatments";
import { TreatmentLandingPage } from "@/components/treatments/TreatmentLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Invisalign em Itapoá | OralClin Odontologia",
  description: "Saiba mais sobre o tratamento com Invisalign em Itapoá e agende uma avaliação com a equipe da OralClin.",
  alternates: {
    canonical: "/invisalign-itapoa",
  },
  openGraph: {
    title: "Invisalign em Itapoá | OralClin",
    description: "Tecnologia e planejamento para transformar seu sorriso com discrição.",
    url: "/invisalign-itapoa",
    type: "website",
  },
};

export default function Page() {
  const treatment = getTreatmentBySlug("invisalign-itapoa");

  if (!treatment) {
    return <div>Tratamento não encontrado</div>;
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", path: "/" },
          { name: treatment.title, path: "/invisalign-itapoa" },
        ]}
      />
      <TreatmentLandingPage treatment={treatment} />
    </>
  );
}
