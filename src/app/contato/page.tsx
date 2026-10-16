import type { Metadata } from "next";
import { MapPin, Phone, Clock, ShieldAlert } from "lucide-react";
import { siteConfig, mapsEmbedUrl, absoluteUrl } from "@/lib/config";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MapsButton, InstagramLink } from "@/components/ContactLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contato e Localização do Consultório | Dr. Valdenor Alves",
  description:
    "Entre em contato com o Dr. Valdenor Alves em Rio Verde - GO. Endereço completo do consultório na Vila Amalia, WhatsApp oficial e informações de atendimento.",
  alternates: {
    canonical: absoluteUrl("/contato"),
  },
};

export default function ContatoPage() {
  const { address, contact, professional } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Canais de Contato"
        title="Vamos conversar sobre seu atendimento?"
        description="Estamos à disposição para esclarecer suas dúvidas sobre a consulta, horários e orientações de agendamento."
      />

      <section className="section bg-sand-100" aria-labelledby="contato-info-title">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Informações Oficiais e Localização */}
          <div className="lg:col-span-5" data-reveal>
            <h2 id="contato-info-title" className="heading-md">
              Consultório em Rio Verde - GO
            </h2>
            <p className="mt-3 text-ink-600">
              Espaço preparado para acolher você com conforto, discrição e profissionalismo.
            </p>

            <div className="mt-8 space-y-6">
              <div className="card flex gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                  <MapPin size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">Endereço</h3>
                  <address className="mt-1 text-sm not-italic text-ink-600 leading-relaxed">
                    {address.street}
                    <br />
                    {address.neighborhood}
                    <br />
                    {address.city} - {address.state}
                    <br />
                    CEP: {address.postalCode}
                  </address>
                  <div className="mt-4">
                    <MapsButton id="contato-maps-btn" />
                  </div>
                </div>
              </div>

              <div className="card flex gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                  <Phone size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">WhatsApp de Atendimento</h3>
                  <p className="mt-1 text-sm text-ink-600">
                    Número oficial para informações sobre agendamento e dúvidas.
                  </p>
                  <p className="mt-2 font-mono text-base font-semibold text-brand-800">
                    {contact.whatsappDisplay}
                  </p>
                  <div className="mt-4">
                    <WhatsAppButton id="contato-whatsapp-btn" label="Falar no WhatsApp" />
                  </div>
                </div>
              </div>

              <div className="card flex gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                  <InstagramIcon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">Instagram Oficial</h3>
                  <p className="mt-1 text-sm text-ink-600">
                    Acompanhe publicações educativas, dicas e novidades da rotina.
                  </p>
                  <div className="mt-4">
                    <InstagramLink id="contato-instagram-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-7" data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Mapa do Google */}
      <section className="bg-white py-12" aria-label="Mapa de Localização do Consultório">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-line bg-sand-100 shadow-soft">
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-line">
              <div>
                <h3 className="font-display text-xl text-brand-900">Como Chegar ao Consultório</h3>
                <p className="text-sm text-ink-600">{address.street}, {address.neighborhood}, {address.city} - {address.state}</p>
              </div>
              <MapsButton id="map-section-btn" />
            </div>
            <div className="relative aspect-[21/9] min-h-[320px] w-full">
              <iframe
                title="Mapa de localização do consultório do Dr. Valdenor Alves"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
