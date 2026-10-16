import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { siteConfig, absoluteUrl } from "@/lib/config";
import { PageHero } from "@/components/PageHero";
import { ProfessionalPhoto } from "@/components/ProfessionalPhoto";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Sobre o Dr. Valdenor Alves | Nutricionista em Rio Verde - GO",
  description:
    "Conheça a trajetória de mais de 26 anos na área da saúde do Dr. Valdenor Alves, sua formação e a abordagem humanizada no atendimento nutricional.",
  alternates: {
    canonical: absoluteUrl("/sobre"),
  },
};

export default function SobrePage() {
  const { professional } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Sobre o profissional"
        title="Uma vida dedicada ao cuidado, à ciência e à saúde humana."
        description="Conheça a trajetória, os princípios e a visão que orientam o atendimento do Dr. Valdenor Alves em Rio Verde - GO."
      />

      <section className="section bg-white" aria-labelledby="historia-title">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <ProfessionalPhoto
              src={siteConfig.photos.about}
              expectedFile="dr-valdenor-sobre.jpg"
              alt="Dr. Valdenor Alves em seu consultório"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/5] rounded-[2rem] shadow-lift"
            />
          </div>

          <div className="prose-body lg:col-span-7" data-reveal>
            <p className="eyebrow">Origem e Vocação</p>
            <h2 id="historia-title" className="heading-lg mt-4 mb-6">
              O cuidado que nasceu da própria vivência
            </h2>
            <p>
              O interesse do Dr. Valdenor Alves pela área da saúde teve início ainda na infância. A
              convivência precoce com intolerâncias alimentares e os desafios de compreender como a
              alimentação afeta profundamente o bem-estar e o dia a dia despertaram nele uma curiosidade
              genuína e o desejo de transformar essa experiência em cuidado para com os outros.
            </p>
            <p>
              Essa vocação amadureceu ao longo de mais de <strong>26 anos de atuação profissional na área da saúde</strong>.
              Sua visão integrada une a <strong>Nutrição</strong>, a <strong>Farmácia</strong> e a <strong>Educação Física</strong>,
              além de pós-graduação em <strong>Farmácia Clínica</strong>. Essa bagagem multidisciplinar permite
              compreender o ser humano de forma holística: a interação metabólica dos alimentos, o papel
              fundamental do movimento e a importância do equilíbrio fisiológico geral.
            </p>
            <p>
              No consultório em Rio Verde - GO, sua prática é guiada por uma premissa clara:{" "}
              <em>nenhum plano alimentar tem valor se não respeitar a história, a rotina e as preferências reais da pessoa.</em>
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton id="sobre-whatsapp" label="Conversar com o Dr. Valdenor" />
              <Link href="/servicos" className="btn btn-secondary">
                Conhecer a abordagem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualificações confirmadas e registros */}
      <section className="section bg-sand-100" aria-labelledby="formacao-title">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <p className="eyebrow justify-center">Informações Oficiais</p>
            <h2 id="formacao-title" className="heading-lg mt-4">
              Atuação e Formação Confirmadas
            </h2>
            <p className="lead mt-4">
              Apresentamos com transparência e responsabilidade ética as informações comunicadas pelo
              profissional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-7" data-reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                <HeartHandshake size={24} aria-hidden="true" />
              </div>
              <h3 className="heading-md mt-5 !text-[1.25rem]">Experiência Comprovada</h3>
              <p className="mt-2 text-ink-600">
                Mais de 26 anos de dedicação diária à área da saúde e ao bem-estar dos pacientes.
              </p>
            </div>

            <div className="card p-7" data-reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                <Award size={24} aria-hidden="true" />
              </div>
              <h3 className="heading-md mt-5 !text-[1.25rem]">Atuações Confirmadas</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-brand-600" />
                  Nutricionista
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-brand-600" />
                  Farmacêutico
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-brand-600" />
                  Educador Físico
                </li>
              </ul>
            </div>

            <div className="card p-7" data-reveal>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3 className="heading-md mt-5 !text-[1.25rem]">Pós-Graduação</h3>
              <p className="mt-2 text-ink-600">
                Pós-graduação em Farmácia Clínica informada pelo profissional em suas referências oficiais.
              </p>
            </div>
          </div>

          {/* Espaço preparado para registros profissionais verificados */}
          {professional.registrations && professional.registrations.length > 0 ? (
            <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center" data-reveal>
              <p className="text-sm font-semibold text-brand-900">Registros Profissionais Verificados:</p>
              <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-brand-700">
                {professional.registrations.map((reg) => (
                  <span key={reg.label} className="font-mono">
                    {reg.label}: {reg.value}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-10 text-center text-xs text-ink-600" data-reveal>
              Registros profissionais e diplomas serão incluídos mediante conferência cadastral.
            </p>
          )}
        </div>
      </section>

      <CtaSection
        title="Deseja agendar sua consulta ou tirar dúvidas?"
        description="Fale diretamente pelo WhatsApp para receber todas as orientações sobre o atendimento."
      />
    </>
  );
}
