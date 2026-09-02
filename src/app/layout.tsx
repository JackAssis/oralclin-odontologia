import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clinic, getSiteUrl } from "@/data/clinic";
import { responsibleProfessional } from "@/data/professionals";
import type { ReactNode } from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const isPlaceholder = (value: string) => value.startsWith("[INSERIR");

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OralClin Odontologia | Itapoá",
  description: "Tecnologia, conhecimento e atendimento humanizado para cuidar do seu sorriso.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OralClin Odontologia | Itapoá",
    description: "Tecnologia, conhecimento e atendimento humanizado para cuidar do seu sorriso.",
    url: "/",
    siteName: "OralClin",
    type: "website",
    images: [
      {
        url: "/images/clinica/dra-taliane.jpg",
        width: 1200,
        height: 800,
        alt: "OralClin Odontologia",
      },
    ],
  },
};

function buildOrganizationJsonLd() {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    url: siteUrl,
  };

  if (!isPlaceholder(clinic.address)) {
    jsonLd.address = {
      "@type": "PostalAddress",
      streetAddress: "R. 787 Vanilda Pereira Gomes, 617",
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.postalCode,
      addressCountry: "BR",
    };
  }

  if (!isPlaceholder(clinic.phoneDisplay)) {
    jsonLd.telephone = clinic.phoneDisplay;
  }

  if (!isPlaceholder(clinic.mapsUrl)) {
    jsonLd.hasMap = clinic.mapsUrl;
  }

  if (!isPlaceholder(clinic.instagramUrl)) {
    jsonLd.sameAs = [clinic.instagramUrl];
  }

  jsonLd.employee = {
    "@type": "Person",
    name: responsibleProfessional.name,
    jobTitle: responsibleProfessional.role,
    identifier: responsibleProfessional.cro,
  };

  return jsonLd;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationJsonLd = buildOrganizationJsonLd();

  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-brand-mist text-brand-ink font-body">
        {children}

        {clinic.ga4MeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${clinic.ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${clinic.ga4MeasurementId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
