"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play, CalendarDays, ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/articles";

type ContentCarouselProps = {
  articles: Article[];
  intervalMs?: number;
};

export function ContentCarousel({ articles, intervalMs = 10000 }: ContentCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const count = articles.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % count);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, [count]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + count) % count);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, [count]);

  const goTo = (index: number) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  // Barra de progresso contínua e temporizador de 10s
  useEffect(() => {
    if (!isPlaying || count <= 1) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    startTimeRef.current = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(100, (elapsed / intervalMs) * 100);
      setProgress(pct);

      if (elapsed >= intervalMs) {
        next();
      } else {
        animFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [current, isPlaying, intervalMs, next, count]);

  if (count === 0) return null;

  const activeArticle = articles[current];

  return (
    <div
      className="card relative overflow-hidden bg-sand-100 border border-line shadow-lift"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => {
        startTimeRef.current = performance.now() - (progress / 100) * intervalMs;
        setIsPlaying(true);
      }}
      aria-roledescription="carrossel"
      aria-label="Carrossel de conteúdos educativos do Dr. Valdenor Alves"
    >
      {/* Barra de progresso dos 10 segundos no topo */}
      <div className="h-1.5 w-full bg-line overflow-hidden">
        <div
          className="h-full bg-brand-600 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid lg:grid-cols-12 items-center p-6 sm:p-10 lg:p-12 gap-8 lg:gap-12 min-h-[480px]">
        {/* Imagem do Post em destaque */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white">
            {activeArticle.coverImage && (
              <Image
                src={activeArticle.coverImage}
                alt={activeArticle.coverAlt || activeArticle.title}
                fill
                priority
                sizes="(min-width: 1024px) 25vw, 80vw"
                className="object-contain"
              />
            )}
          </div>
        </div>

        {/* Informações e Texto do Post */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <span className="rounded-full bg-brand-100 px-3 py-1">Post Educativo</span>
            <span className="flex items-center gap-1.5 text-ink-600 font-normal">
              <CalendarDays size={14} aria-hidden="true" />
              <time dateTime={activeArticle.publishedAt}>{formatDate(activeArticle.publishedAt)}</time>
            </span>
          </div>

          <h3 className="heading-md mt-4 text-brand-900 text-2xl sm:text-3xl lg:text-4xl">
            {activeArticle.title}
          </h3>

          <p className="lead mt-4 text-ink-600 text-base sm:text-lg">
            {activeArticle.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/conteudos/${activeArticle.slug}`}
              className="btn btn-primary"
            >
              Ler conteúdo completo
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <span className="text-xs text-ink-600">
              Alterna automaticamente a cada 10 segundos
            </span>
          </div>

          {/* Controles de Navegação do Carrossel */}
          <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
            <div className="flex items-center gap-2">
              {articles.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-label={`Ir para o post ${idx + 1}`}
                  aria-current={current === idx}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-8 bg-brand-700"
                      : "w-3 bg-brand-200 hover:bg-brand-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-600 hover:text-brand-800 transition-colors"
                aria-label={isPlaying ? "Pausar carrossel" : "Iniciar rotação automática"}
                title={isPlaying ? "Pausar (10s)" : "Reproduzir (10s)"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-600 hover:text-brand-800 transition-colors"
                aria-label="Post anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-600 hover:text-brand-800 transition-colors"
                aria-label="Próximo post"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
