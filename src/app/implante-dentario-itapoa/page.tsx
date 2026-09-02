import type { Metadata } from "next";
import { getTreatmentBySlug } from "@/data/treatments";
import { TreatmentLandingPage } from "@/components/treatments/TreatmentLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Implante Dentário em Itapoá | OralClin Odontologia",
  description: "Conheca o tratamento de implante dentário em Itapoá e agende uma avaliação para entender as possibilidades do seu caso na OralClin.",
  alternates: {
    canonical: "/implante-dentario-itapoa",
  },
  openGraph: {
    title: "Implante Dentário em Itapoá | OralClin",
    description: "Planejamento individualizado para reposição de dentes perdidos.",
    url: "/implante-dentario-itapoa",
    type: "website",
  },
};

export default function Page() {
  const treatment = getTreatmentBySlug("implante-dentario-itapoa");

  if (!treatment) {
    return <div>Tratamento não encontrado</div>;
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", path: "/" },
          { name: treatment.title, path: "/implante-dentario-itapoa" },
        ]}
      />
      <TreatmentLandingPage treatment={treatment} />
    </>
  );
}
