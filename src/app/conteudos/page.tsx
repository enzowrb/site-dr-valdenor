import type { Metadata } from "next";
import { getAllArticles, categories } from "@/lib/articles";
import { absoluteUrl } from "@/lib/config";
import { PageHero } from "@/components/PageHero";
import { ArticleExplorer } from "@/components/ArticleExplorer";
import { ContentCarousel } from "@/components/ContentCarousel";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Conteúdos Educativos e Dicas de Saúde | Dr. Valdenor Alves",
  description:
    "Artigos e publicações sobre nutrição, hábitos saudáveis, saúde mental, mitos alimentares e hipertrofia com o Dr. Valdenor Alves em Rio Verde - GO.",
  alternates: {
    canonical: absoluteUrl("/conteudos"),
  },
};

export default function ConteudosPage() {
  const articles = getAllArticles();

  return (
    <>
      <PageHero
        eyebrow="Conteúdos Educativos"
        title="Conhecimento para escolhas mais conscientes."
        description="Publicações oficiais do Dr. Valdenor Alves sobre alimentação equilibrada, qualidade de vida e desempenho físico."
      />

      {/* Destaque em formato carrossel com delay de 10s */}
      <section className="py-12 bg-white" aria-labelledby="carousel-section-title">
        <div className="container-page">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="eyebrow">Destaques Recentes</p>
              <h2 id="carousel-section-title" className="heading-md mt-2">
                Publicações e Orientações Oficiais
              </h2>
            </div>
          </div>

          <ContentCarousel articles={articles} intervalMs={10000} />
        </div>
      </section>

      {/* Grade completa com busca e filtros */}
      <section className="section bg-sand-100" aria-labelledby="conteudos-list-title">
        <div className="container-page">
          <div className="mb-8">
            <h2 id="conteudos-list-title" className="heading-md">
              Todos os Conteúdos
            </h2>
            <p className="lead mt-2 text-ink-600 text-base">
              Explore por categoria ou faça uma busca nos temas abordados.
            </p>
          </div>

          <ArticleExplorer articles={articles} categories={categories} />
        </div>
      </section>

      <CtaSection
        title="Ficou com alguma dúvida sobre alimentação e saúde?"
        description="Entre em contato e agende uma conversa individualizada com o Dr. Valdenor Alves."
      />
    </>
  );
}
