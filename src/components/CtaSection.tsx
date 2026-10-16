import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapsButton } from "@/components/ContactLinks";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

/** Chamada final para contato, reutilizada nas páginas. */
export function CtaSection({
  title = "Pronto para dar o próximo passo no cuidado com a sua saúde?",
  description = "Entre em contato pelo WhatsApp para conhecer as opções de atendimento e tirar suas dúvidas sobre a consulta.",
}: CtaSectionProps) {
  return (
    <section className="section bg-white" aria-labelledby="cta-title">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-20"
          data-reveal
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-600/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-28 h-80 w-80 rounded-full bg-brand-900/70 blur-3xl"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="pointer-events-none absolute top-6 right-6 h-28 w-28 text-white/[0.06] lg:h-40 lg:w-40"
            fill="currentColor"
          >
            <path d="M100 190C100 120 60 80 20 60c40 0 80 20 80 70 0-50 40-90 90-100-40 30-70 70-90 160Z" />
          </svg>
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-title" className="heading-lg !text-white">
              {title}
            </h2>
            <p className="lead mx-auto mt-5 max-w-xl !text-brand-100/85">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton id="cta-whatsapp" label="Falar pelo WhatsApp" variant="light" />
              <MapsButton id="cta-maps" className="btn-ghost-light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
