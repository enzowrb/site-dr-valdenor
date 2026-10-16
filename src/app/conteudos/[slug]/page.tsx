import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User, BookOpen } from "lucide-react";
import {
  getAllArticles,
  getArticleBySlug,
  getAdjacentArticles,
  getCategory,
  formatDate,
} from "@/lib/articles";
import { siteConfig, absoluteUrl } from "@/lib/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  if (articles.length === 0) {
    // Next.js 16 Cache Components requires at least 1 param returned
    return [{ slug: "_placeholder" }];
  }
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: `${article.title} | ${siteConfig.professional.displayName}`,
    description: article.excerpt,
    alternates: {
      canonical: absoluteUrl(`/conteudos/${article.slug}`),
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [siteConfig.professional.displayName],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategory(article.categorySlug);
  const { newer, older } = getAdjacentArticles(slug);

  return (
    <article className="pt-10 pb-20">
      <div className="container-page max-w-4xl">
        <Link
          href="/conteudos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Voltar para conteúdos
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          {category && (
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {category.name}
            </span>
          )}
          <h1 className="heading-lg mt-4">{article.title}</h1>
          <p className="lead mt-4">{article.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ink-600">
            <span className="flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              Dr. Valdenor Alves
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </span>
            {article.readingMinutes && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                {article.readingMinutes} min de leitura
              </span>
            )}
          </div>
        </header>

        <div className="prose-body mt-10">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {article.sources && article.sources.length > 0 && (
          <aside className="mt-12 rounded-2xl bg-sand-100 p-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-brand-900 uppercase">
              <BookOpen size={16} aria-hidden="true" /> Fontes e Referências
            </h2>
            <ul className="mt-3 space-y-1.5 text-xs text-ink-600">
              {article.sources.map((s, idx) => (
                <li key={idx}>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-700 underline"
                    >
                      {s.title}
                    </a>
                  ) : (
                    <span>{s.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-14 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
          <h3 className="heading-md">Gostou deste conteúdo?</h3>
          <p className="mt-2 text-sm text-ink-600">
            Compartilhe ou tire suas dúvidas diretamente no WhatsApp do consultório.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton
              label="Tirar dúvidas pelo WhatsApp"
              message={`Olá! Li o artigo "${article.title}" no seu site e gostaria de saber mais.`}
            />
          </div>
        </div>

        <nav className="mt-12 flex justify-between border-t border-line pt-6 text-sm" aria-label="Navegação entre artigos">
          {older ? (
            <Link href={`/conteudos/${older.slug}`} className="text-brand-700 hover:underline">
              ← {older.title}
            </Link>
          ) : <span />}
          {newer && (
            <Link href={`/conteudos/${newer.slug}`} className="text-brand-700 hover:underline">
              {newer.title} →
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
