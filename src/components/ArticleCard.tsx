import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { formatDate, getCategory, type Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.categorySlug);
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-100">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.coverAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-300" aria-hidden="true">
            <BookOpen size={40} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink-600">
          {category && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
              {category.name}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} aria-hidden="true" />
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </span>
        </div>
        <h3 className="heading-md mt-4 !text-[1.3rem]">
          <Link href={`/conteudos/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-ink-600">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-700">
          Ler artigo
          <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
