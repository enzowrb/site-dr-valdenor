import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { ProfessionalPhoto } from "@/components/ProfessionalPhoto";

/** Apresentação resumida do profissional (página inicial). */
export function About() {
  const { professional } = siteConfig;
  const roles = [professional.profession, ...professional.otherRoles];

  return (
    <section className="section bg-white" aria-labelledby="about-title">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5" data-reveal>
          <ProfessionalPhoto
            src={siteConfig.photos.presentation}
            expectedFile="dr-valdenor-apresentacao.jpg"
            alt="Retrato profissional do Dr. Valdenor Alves"
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="aspect-[4/5] rounded-[2rem]"
          />
          <div className="absolute right-4 -bottom-6 left-4 rounded-2xl bg-brand-800 p-6 text-white shadow-lift sm:right-auto sm:left-6 sm:max-w-xs">
            <p className="font-display text-5xl leading-none">+{professional.yearsInHealth}</p>
            <p className="mt-2 text-sm text-brand-100/90">
              anos de atuação na área da saúde, unindo nutrição, farmácia e educação física.
            </p>
          </div>
        </div>

        <div className="pt-6 lg:col-span-7 lg:pt-0" data-reveal>
          <p className="eyebrow">Conheça o profissional</p>
          <h2 id="about-title" className="heading-lg mt-4">
            Uma trajetória dedicada a cuidar de pessoas
          </h2>
          <p className="lead mt-6">
            O interesse do Dr. Valdenor Alves pela saúde começou ainda na infância, a partir de
            experiências pessoais com intolerâncias alimentares. Essa vivência se transformou em uma
            trajetória de estudo e atuação que hoje soma mais de {professional.yearsInHealth} anos.
          </p>
          <p className="mt-5 leading-relaxed text-ink-600">
            Sua comunicação valoriza a relação entre alimentação e exercício físico, o emagrecimento
            saudável, a qualidade de vida e a construção de hábitos que possam ser mantidos no dia a
            dia.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Áreas de atuação informadas">
            {roles.map((role) => (
              <li
                key={role}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
              >
                <Check size={15} aria-hidden="true" className="text-brand-600" />
                {role}
              </li>
            ))}
            {professional.mentionedEducation.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-100 px-4 py-2 text-sm font-medium text-ink-900"
              >
                <Check size={15} aria-hidden="true" className="text-gold-500" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/sobre" className="btn btn-secondary group mt-10" id="about-more">
            Ler a trajetória completa
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
