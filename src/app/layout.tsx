import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig, absoluteUrl } from "@/lib/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#174D35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.professional.displayName} | ${siteConfig.professional.profession} em Rio Verde - GO`,
    template: `%s | ${siteConfig.professional.displayName}`,
  },
  description:
    "Atendimento nutricional individualizado em Rio Verde - GO com o Dr. Valdenor Alves. Alimentação, exercícios, saúde e hábitos sustentáveis com mais de 26 anos de experiência na área da saúde.",
  keywords: [
    "Nutricionista Rio Verde",
    "Dr. Valdenor Alves",
    "Nutrição Rio Verde GO",
    "Emagrecimento saudável Rio Verde",
    "Nutricionista individualizado",
  ],
  authors: [{ name: siteConfig.professional.displayName }],
  creator: siteConfig.professional.displayName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.professional.displayName,
    title: `${siteConfig.professional.displayName} | ${siteConfig.professional.profession}`,
    description:
      "Atendimento nutricional individualizado que respeita sua rotina e seus hábitos em Rio Verde - GO.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fontBody.variable} ${fontHeading.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink-900">
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
