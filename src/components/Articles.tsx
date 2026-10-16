import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { SectionHeading } from "@/components/SectionHeading";
import { ContentCarousel } from "@/components/ContentCarousel";

export function Articles() {
  const articles = getAllArticles();

  return (
    <section className="section bg-white" aria-labelledby="articles-title">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10">
          <SectionHeading
            eyebrow="Conteúdos educativos"
            title={<span id="articles-title">Informação para escolhas mais conscientes</span>}
            description="Acompanhe as orientações e posts educativos do Dr. Valdenor Alves sobre alimentação, bem-estar e performance."
          />
          <Link href="/conteudos" className="btn btn-secondary group shrink-0" data-reveal>
            Ver todos os conteúdos
            <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div data-reveal>
          <ContentCarousel articles={articles} intervalMs={10000} />
        </div>
      </div>
    </section>
  );
}
