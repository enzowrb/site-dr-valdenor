import { Ear, CalendarClock, Footprints, Sprout } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const principles = [
  {
    icon: Ear,
    title: "Escuta atenta",
    text: "Cada pessoa tem uma história, preferências e necessidades. O cuidado começa por compreendê-las.",
  },
  {
    icon: CalendarClock,
    title: "Rotina real",
    text: "Orientações que consideram o seu dia a dia, seus horários e o que é possível manter.",
  },
  {
    icon: Footprints,
    title: "Alimentação e movimento",
    text: "Uma visão que integra a alimentação ao exercício físico em favor da saúde.",
  },
  {
    icon: Sprout,
    title: "Constância",
    text: "Mudanças graduais e consistentes tendem a ser mais sustentáveis do que soluções rápidas.",
  },
];

/** Seção sobre a importância do acompanhamento individualizado. */
export function Approach() {
  return (
    <section className="section relative overflow-hidden bg-brand-900" aria-labelledby="approach-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/30 blur-3xl"
      />
      <div className="container-page relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            inverted
            eyebrow="Por que individualizar"
            title={<span id="approach-title">Não existe uma dieta que sirva para todos</span>}
            description="Cada organismo, rotina e objetivo é único. Por isso, um acompanhamento individualizado busca orientações coerentes com a sua realidade — e não fórmulas prontas."
          />
          <p className="mt-8 border-l-2 border-brand-500 pl-5 text-[0.95rem] leading-relaxed text-brand-100/75" data-reveal>
            Resultados variam de pessoa para pessoa. O objetivo é promover escolhas mais conscientes e
            melhor qualidade de vida, com responsabilidade e sem promessas milagrosas.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {principles.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                  <item.icon size={21} aria-hidden="true" />
                </span>
                <span className="font-display text-2xl text-white/25" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-[1.3rem] !text-white">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed text-brand-100/75">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
