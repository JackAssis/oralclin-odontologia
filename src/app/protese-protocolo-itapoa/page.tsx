import type { Metadata } from "next";
import { getTreatmentBySlug } from "@/data/treatments";
import { TreatmentLandingPage } from "@/components/treatments/TreatmentLandingPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Prótese Protocolo em Itapoá | OralClin Odontologia",
  description: "Entenda como funciona a prótese protocolo sobre implantes em Itapoá e agende uma avaliação personalizada com a OralClin.",
  alternates: {
    canonical: "/protese-protocolo-itapoa",
  },
  openGraph: {
    title: "Prótese Protocolo em Itapoá | OralClin",
    description: "Soluções fixas para recuperar função, segurança e confiança ao sorrir.",
    url: "/protese-protocolo-itapoa",
    type: "website",
  },
};

export default function Page() {
  const treatment = getTreatmentBySlug("protese-protocolo-itapoa");

  if (!treatment) {
    return <div>Tratamento não encontrado</div>;
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", path: "/" },
          { name: treatment.title, path: "/protese-protocolo-itapoa" },
        ]}
      />
      <TreatmentLandingPage treatment={treatment} />
    </>
  );
}
