import { Activity, Brain, Dumbbell, Leaf, Repeat, Zap, type LucideIcon } from "lucide-react";
import { focusThemes, type FocusIcon, type Service } from "@/lib/services";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const icons: Record<FocusIcon, LucideIcon> = { Leaf, Activity, Dumbbell, Zap, Brain, Repeat };

type FocusThemesProps = {
  headingLevel?: "h2" | "h3";
  showHeading?: boolean;
};

/** Temas que orientam a abordagem (não são serviços contratáveis). */
export function FocusThemes({ showHeading = true }: FocusThemesProps) {
  return (
    <section className="section bg-sand-100" aria-labelledby={showHeading ? "themes-title" : undefined}>
      <div className="container-page">
        {showHeading && (
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Temas de atuação"
              title={<span id="themes-title">O que orienta o cuidado</span>}
              description="Temas presentes na comunicação do Dr. Valdenor e que refletem uma visão integrada entre alimentação, movimento e bem-estar."
            />
          </div>
        )}

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusThemes.map((theme, i) => {
            const Icon = icons[theme.icon];
            return (
              <li
                key={theme.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                className="card group p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="heading-md mt-6 !text-[1.3rem]">{theme.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{theme.text}</p>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-sm text-ink-600" data-reveal>
          Estes temas não representam uma lista de serviços. Para conhecer as opções de atendimento,
          entre em contato.
        </p>
      </div>
    </section>
  );
}

/** Cartão reutilizável para um serviço confirmado pelo profissional. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card flex h-full flex-col p-8" data-reveal>
      <h3 className="heading-md">{service.name}</h3>
      <p className="mt-4 leading-relaxed text-ink-600">{service.description}</p>
      <div className="mt-6 rounded-xl bg-brand-50 p-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">Para quem</p>
        <p className="mt-1.5 text-[0.95rem] text-ink-900">{service.audience}</p>
      </div>
      {service.details && service.details.length > 0 && (
        <ul className="mt-6 space-y-2 text-[0.95rem] text-ink-600">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
              {detail}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-8">
        <WhatsAppButton
          label="Solicitar informações"
          variant="secondary"
          message={
            service.whatsappMessage ??
            `Olá! Gostaria de obter informações sobre "${service.name}" com o Dr. Valdenor Alves.`
          }
          className="w-full"
        />
      </div>
    </article>
  );
}
