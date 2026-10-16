import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * Depoimentos REAIS de pacientes.
 * Adicione somente depoimentos fornecidos e com autorização expressa por escrito
 * para publicação. Evite depoimentos que prometam resultados (observe as normas
 * éticas do Conselho Federal de Nutricionistas sobre publicidade).
 * Enquanto a lista estiver vazia, a seção não é exibida.
 */
export type Testimonial = { quote: string; author: string; context?: string };

export const testimonials: Testimonial[] = [];

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section bg-sand-100" aria-labelledby="testimonials-title">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Depoimentos"
          title={<span id="testimonials-title">Quem já foi atendido</span>}
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author} className="card p-8" data-reveal>
              <Quote size={28} className="text-brand-300" aria-hidden="true" />
              <blockquote className="mt-4 leading-relaxed text-ink-900">“{t.quote}”</blockquote>
              <p className="mt-6 text-sm font-semibold text-brand-800">{t.author}</p>
              {t.context && <p className="text-sm text-ink-600">{t.context}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
