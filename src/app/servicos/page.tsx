import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquare, CheckCircle2, Dumbbell, Stethoscope } from "lucide-react";
import { services } from "@/lib/services";
import { absoluteUrl, siteConfig } from "@/lib/config";
import { PageHero } from "@/components/PageHero";
import { FocusThemes, ServiceCard } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Serviços e Atendimento | Dr. Valdenor Alves Nutricionista",
  description:
    "Saiba como funciona o atendimento nutricional com o Dr. Valdenor Alves. Consulta individualizada, hábitos saudáveis e acompanhamento personalizado em Rio Verde - GO.",
  alternates: {
    canonical: absoluteUrl("/servicos"),
  },
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento e Serviços"
        title="Um atendimento planejado para a sua realidade."
        description="Conheça como a abordagem nutricional do Dr. Valdenor Alves integra rotina, hábitos e individualidade para resultados consistentes."
      />

      <section className="section bg-white" aria-labelledby="opcoes-title">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="eyebrow justify-center">Informações sobre a Consulta</p>
            <h2 id="opcoes-title" className="heading-lg mt-4">
              Como funciona o acompanhamento
            </h2>
          </div>

          {services && services.length > 0 ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          ) : (
            <div
              className="card mx-auto mt-12 max-w-4xl overflow-hidden p-0 shadow-lift"
              data-reveal
            >
              <div className="grid lg:grid-cols-12">
                <div className="relative aspect-[4/5] lg:aspect-auto lg:col-span-5 bg-brand-100 min-h-[360px]">
                  <Image
                    src={siteConfig.photos.coat || "/images/dr-valdenor-jaleco.jpg"}
                    alt="Dr. Valdenor Alves pronto para o atendimento clínico"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800">
                    <MessageSquare size={24} aria-hidden="true" />
                  </div>
                  <h3 className="heading-md mt-5">
                    Entre em contato para conhecer as opções de atendimento
                  </h3>
                  <p className="lead mt-3 text-ink-600 text-base">
                    Cada acompanhamento é estruturado de forma personalizada. Para obter informações
                    detalhadas sobre a consulta, esclarecer dúvidas e conhecer o formato ideal para o
                    seu caso, fale diretamente conosco.
                  </p>

                  <div className="mt-6">
                    <WhatsAppButton
                      id="servicos-whatsapp-consulta"
                      label="Solicitar informações sobre a consulta"
                      variant="primary"
                    />
                  </div>

                  <div className="mt-8 border-t border-line pt-6">
                    <ul className="grid gap-3 text-left text-sm text-ink-600 sm:grid-cols-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-600 shrink-0" />
                        Avaliação nutricional cuidadosa e detalhada
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-600 shrink-0" />
                        Orientação respeitosa com a sua rotina real
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-600 shrink-0" />
                        Atenção à composição corporal e energia
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-600 shrink-0" />
                        Foco na construção de hábitos duradouros
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Destaque da abordagem multidisciplinar com foto de performance */}
      <section className="section bg-sand-100" aria-labelledby="integracao-title">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow">Abordagem Integrada</p>
            <h2 id="integracao-title" className="heading-lg mt-4">
              Alimentação e Treinamento alinhados aos seus objetivos
            </h2>
            <p className="lead mt-5 text-ink-600">
              Com formação como nutricionista e educador físico, o Dr. Valdenor Alves compreende na
              prática as demandas metabólicas do exercício, recuperação muscular e melhoria da
              composição corporal.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 border border-line">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Stethoscope size={20} />
                </span>
                <h3 className="font-semibold text-brand-900 mt-3">Ciência Nutricional</h3>
                <p className="text-sm text-ink-600 mt-1">Estratégias alimentares baseadas em evidências e saúde clínica.</p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-line">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Dumbbell size={20} />
                </span>
                <h3 className="font-semibold text-brand-900 mt-3">Estímulo Físico</h3>
                <p className="text-sm text-ink-600 mt-1">Adequação nutricional para render melhor no treino diário.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lift">
              <Image
                src={siteConfig.photos.performance || "/images/dr-valdenor-performance.jpg"}
                alt="Dr. Valdenor Alves em ambiente de treino e musculação"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Temas de Atuação */}
      <FocusThemes />

      <CtaSection
        title="Quer saber como iniciar o seu acompanhamento?"
        description="Nossa equipe e o Dr. Valdenor estão à disposição para orientar seus primeiros passos."
      />
    </>
  );
}
