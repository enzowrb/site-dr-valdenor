"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Article, ArticleCategory } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";

type ArticleExplorerProps = {
  articles: Article[];
  categories: ArticleCategory[];
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/** Listagem com busca e filtro por categoria (executados no navegador). */
export function ArticleExplorer({ articles, categories }: ArticleExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("todas");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return articles.filter((a) => {
      const matchCategory = category === "todas" || a.categorySlug === category;
      const matchQuery = !q || normalize(`${a.title} ${a.excerpt}`).includes(q);
      return matchCategory && matchQuery;
    });
  }, [articles, query, category]);

  const usedCategories = categories.filter((c) => articles.some((a) => a.categorySlug === c.slug));

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
          {[{ slug: "todas", name: "Todas" }, ...usedCategories].map((c) => {
            const active = category === c.slug;
            return (
              <button
                key={c.slug}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c.slug)}
                className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                  active
                    ? "border-brand-800 bg-brand-800 text-white"
                    : "border-line bg-white text-ink-600 hover:border-brand-300 hover:text-brand-800"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="article-search" className="sr-only">
            Buscar conteúdos
          </label>
          <Search
            size={18}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink-400"
            aria-hidden="true"
          />
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar conteúdos"
            className="field-input !rounded-full !pl-11"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
              className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-400 hover:bg-sand-200"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "conteúdo encontrado" : "conteúdos encontrados"}
      </p>

      {filtered.length > 0 ? (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <li key={article.slug} className="relative">
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 rounded-2xl border border-dashed border-line p-10 text-center text-ink-600">
          Nenhum conteúdo encontrado para os filtros selecionados.
        </p>
      )}
    </div>
  );
}
