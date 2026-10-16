import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, absoluteUrl } from "@/lib/config";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Privacidade e Proteção de Dados | Dr. Valdenor Alves",
  description:
    "Conheça as diretrizes de privacidade, segurança e conformidade com a LGPD adotadas no site do Dr. Valdenor Alves.",
  alternates: {
    canonical: absoluteUrl("/privacidade"),
  },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade e Segurança"
        title="Política de Privacidade e Proteção de Dados"
        description="Nosso compromisso com a transparência, a segurança e a conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
      />

      <section className="section bg-white" aria-labelledby="privacidade-title">
        <div className="container-page max-w-4xl">
          <div className="prose-body">
            <h2 id="privacidade-title" className="heading-md mb-4">
              1. Princípios Gerais e Coleta Mínima
            </h2>
            <p>
              O site do <strong>{siteConfig.professional.displayName}</strong> preza pela total
              confidencialidade e respeito aos seus visitantes. Adotamos o princípio do{" "}
              <em>data minimization</em> (coleta mínima necessária): não coletamos nem armazenamos
              quaisquer dados sem a sua autorização expressa.
            </p>

            <h2 className="heading-md mt-10 mb-4">2. Formulário de Contato e WhatsApp</h2>
            <p>
              Ao utilizar o formulário de contato do site, solicitamos apenas seu <strong>nome</strong> e
              um <strong>meio de contato</strong> (telefone ou e-mail) para viabilizar o retorno da sua
              solicitação.
            </p>
            <p>
              <strong>Atenção especial a dados de saúde:</strong> Por razões éticas e de segurança,
              orientamos expressamente que os usuários <strong>não enviem</strong> prontuários, exames,
              diagnósticos ou qualquer informação clínica sensível por meio do formulário do site.
              Essas informações pertencem exclusivamente ao ato da consulta nutricional, em ambiente
              privativo.
            </p>
            <p>
              O formulário do site funciona como um facilitador de contato: as mensagens são
              direcionadas para o aplicativo oficial do WhatsApp do consultório ({siteConfig.contact.whatsappDisplay}),
              onde o próprio usuário realiza o envio.
            </p>

            <h2 className="heading-md mt-10 mb-4">3. Cookies e Rastreamento</h2>
            <p>
              Este site não utiliza cookies invasivos ou rastreadores de terceiros para publicidade
              comportamental. Utilizamos apenas recursos técnicos estritamente necessários para o
              correto funcionamento e a renderização das páginas.
            </p>

            <h2 className="heading-md mt-10 mb-4">4. Direitos do Titular (LGPD)</h2>
            <p>
              Nos termos do artigo 18 da LGPD, você tem o direito de solicitar a qualquer momento a
              confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos
              ou a eliminação de dados tratados com seu consentimento.
            </p>

            <h2 className="heading-md mt-10 mb-4">5. Contato com o Responsável</h2>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade ou exercer seus direitos de
              titular, entre em contato através dos nossos canais oficiais:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-600">
              <li>
                <strong>Profissional:</strong> {siteConfig.professional.displayName} (Nutricionista)
              </li>
              <li>
                <strong>WhatsApp:</strong> {siteConfig.contact.whatsappDisplay}
              </li>
              <li>
                <strong>Endereço:</strong> {siteConfig.address.street}, {siteConfig.address.neighborhood}, {siteConfig.address.city} - {siteConfig.address.state}
              </li>
            </ul>

            <div className="mt-12 border-t border-line pt-6">
              <Link href="/contato" className="btn btn-primary">
                Falar com o consultório
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
