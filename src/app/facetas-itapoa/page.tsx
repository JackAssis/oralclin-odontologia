import type { Metadata } from "next";
import { getTreatmentBySlug } from "@/data/treatments";
import { TreatmentLandingPage } from "@/components/treatments/TreatmentLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Facetas Dentárias em Itapoá | OralClin Odontologia",
  description: "Entenda como funcionam as facetas dentárias, para quem podem ser indicadas e agende uma avaliação na OralClin, em Itapoá.",
  alternates: {
    canonical: "/facetas-itapoa",
  },
  openGraph: {
    title: "Facetas Dentárias em Itapoá | OralClin",
    description: "Corrija imperfeições e realce o que você tem de melhor, com resultado natural.",
    url: "/facetas-itapoa",
    type: "website",
  },
};

export default function Page() {
  const treatment = getTreatmentBySlug("facetas-itapoa");

  if (!treatment) {
    return <div>Tratamento não encontrado</div>;
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", path: "/" },
          { name: treatment.title, path: "/facetas-itapoa" },
        ]}
      />
      <TreatmentLandingPage treatment={treatment} />
    </>
  );
}
