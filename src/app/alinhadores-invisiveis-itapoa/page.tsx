import type { Metadata } from "next";
import { getTreatmentBySlug } from "@/data/treatments";
import { TreatmentLandingPage } from "@/components/treatments/TreatmentLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Alinhadores Invisíveis em Itapoá | OralClin Odontologia",
  description: "Descubra se os alinhadores invisíveis podem ser indicados para o seu caso e agende uma avaliação na OralClin, em Itapoá.",
  alternates: {
    canonical: "/alinhadores-invisiveis-itapoa",
  },
  openGraph: {
    title: "Alinhadores Invisíveis em Itapoá | OralClin",
    description: "Alinhe seu sorriso com discrição e acompanhe sua rotina.",
    url: "/alinhadores-invisiveis-itapoa",
    type: "website",
  },
};

export default function Page() {
  const treatment = getTreatmentBySlug("alinhadores-invisiveis-itapoa");

  if (!treatment) {
    return <div>Tratamento não encontrado</div>;
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", path: "/" },
          { name: treatment.title, path: "/alinhadores-invisiveis-itapoa" },
        ]}
      />
      <TreatmentLandingPage treatment={treatment} />
    </>
  );
}
