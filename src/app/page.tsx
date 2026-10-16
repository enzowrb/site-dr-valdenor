import type { Metadata } from "next";
import { siteConfig, fullAddress, absoluteUrl } from "@/lib/config";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FocusThemes } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Articles } from "@/components/Articles";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Sua saúde merece um cuidado que respeita você | Dr. Valdenor Alves",
  description:
    "Atendimento nutricional individualizado com o Dr. Valdenor Alves em Rio Verde - GO. Alimentação equilibrada, composição corporal, energia e qualidade de vida.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteConfig.professional.displayName,
    jobTitle: siteConfig.professional.profession,
    description:
      "Nutricionista com mais de 26 anos na área da saúde, atuando com atendimento individualizado em Rio Verde - GO.",
    url: siteConfig.url,
    telephone: siteConfig.contact.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BR",
    },
    sameAs: [siteConfig.contact.instagramUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <FocusThemes />
      <Approach />
      <Articles />
      <Testimonials />
      <CtaSection />
    </>
  );
}
