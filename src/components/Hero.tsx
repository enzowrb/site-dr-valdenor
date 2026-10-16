import Link from "next/link";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProfessionalPhoto } from "@/components/ProfessionalPhoto";

export function Hero() {
  const { professional, address } = siteConfig;

  return (
    <section className="grain relative overflow-hidden bg-sand-100" aria-labelledby="hero-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-12rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-brand-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] bottom-[-14rem] h-[34rem] w-[34rem] rounded-full bg-gold-100/80 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-14 pt-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow animate-fade-up">
            {professional.profession} · {address.city} - {address.state}
          </p>
          <h1 id="hero-title" className="heading-xl mt-6 animate-fade-up [animation-delay:80ms]">
            Sua saúde merece um cuidado que{" "}
            <em className="font-normal text-brand-600 italic">respeita você.</em>
          </h1>
          <p className="lead mt-7 max-w-xl animate-fade-up [animation-delay:160ms]">
            Uma abordagem individualizada que valoriza a alimentação, os hábitos e a rotina de cada
            pessoa para promover escolhas mais conscientes e uma melhor qualidade de vida.
          </p>
          <div className="mt-10 flex flex-col gap-3 animate-fade-up [animation-delay:240ms] sm:flex-row">
            <WhatsAppButton id="hero-whatsapp" label="Agendar consulta" />
            <Link href="/sobre" className="btn btn-secondary group" id="hero-about">
              Conheça o profissional
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-line pt-8 animate-fade-up [animation-delay:320ms]">
            <div>
              <dt className="text-sm text-ink-600">Na área da saúde</dt>
              <dd className="mt-1 font-display text-3xl text-brand-800">
                +{professional.yearsInHealth} anos
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-600">Atendimento</dt>
              <dd className="mt-1 font-display text-3xl text-brand-800">Individualizado</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <div className="relative mx-auto max-w-md animate-fade-in lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.25rem] border border-brand-200/70 sm:-inset-4"
            />
            <ProfessionalPhoto
              src={siteConfig.photos.hero}
              expectedFile="dr-valdenor-hero.jpg"
              alt="Dr. Valdenor Alves, nutricionista, em seu consultório em Rio Verde - GO"
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="aspect-[4/5] rounded-[2rem] shadow-lift"
            />

            <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <HeartHandshake size={20} aria-hidden="true" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold text-ink-900">Cuidado individual</span>
                <span className="text-ink-600">respeitando sua rotina</span>
              </span>
            </div>

            <div className="absolute -top-5 -right-2 hidden items-center gap-2 rounded-full border border-line bg-white/95 px-4 py-2.5 shadow-soft backdrop-blur sm:flex lg:-right-6">
              <Sparkles size={16} className="text-gold-500" aria-hidden="true" />
              <span className="text-sm font-medium text-ink-900">Alimentação + movimento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
