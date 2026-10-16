/**
 * Camada de dados dos conteúdos educativos.
 *
 * Posts oficiais do Dr. Valdenor Alves publicados em suas redes/comunicação.
 */

export type ArticleCategory = {
  slug: string;
  name: string;
};

export type ArticleSource = {
  title: string;
  url?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** Data ISO (AAAA-MM-DD). */
  publishedAt: string;
  updatedAt?: string;
  categorySlug: string;
  /** Caminho em /public ou URL permitida em next.config. */
  coverImage?: string;
  coverAlt?: string;
  readingMinutes?: number;
  /** Parágrafos do artigo. */
  body: string[];
  sources?: ArticleSource[];
  reviewedBy?: string;
};

export const categories: ArticleCategory[] = [
  { slug: "alimentacao", name: "Alimentação" },
  { slug: "qualidade-de-vida", name: "Qualidade de vida" },
  { slug: "exercicio", name: "Exercício físico" },
  { slug: "habitos", name: "Hábitos saudáveis" },
];

/**
 * Posts oficiais do Dr. Valdenor Alves.
 */
const articles: Article[] = [
  {
    slug: "cuidados-com-a-mente",
    title: "Cuidados com a mente: alimentação, sono e atividade física",
    excerpt:
      "A saúde mental e o bem-estar físico estão intimamente conectados. Veja 4 atitudes essenciais recomendadas pelo Dr. Valdenor Alves para nutrir seu cérebro e seu corpo.",
    categorySlug: "qualidade-de-vida",
    coverImage: "/images/posts/post-cuidados-mente.jpg",
    coverAlt: "Post Cuidados com a mente - Dr. Valdenor Alves Nutricionista",
    publishedAt: "2026-10-10",
    readingMinutes: 3,
    body: [
      "A saúde mental e o bem-estar físico caminham lado a lado. Pequenos hábitos diários influenciam diretamente nossos níveis de estresse, clareza mental e vitalidade.",
      "1. Tenha uma alimentação nutritiva e equilibrada: Nutrientes adequados fornecem os blocos de construção para neurotransmissores reguladores do humor e da energia.",
      "2. Garanta uma boa qualidade de sono e horas adequadas de descanso: O sono reparador é o momento em que o cérebro processa informações e recupera o organismo.",
      "3. Pratique atividades físicas que estimulam o cérebro e o corpo: O movimento estimula a circulação, oxigena o cérebro e libera endorfinas que promovem sensação de bem-estar.",
      "4. Dedique tempo para o lazer e o relaxamento: Pausas intencionais na rotina são fundamentais para recarregar as energias e sustentar hábitos ao longo da vida.",
    ],
  },
  {
    slug: "5-mitos-sobre-a-alimentacao-saudavel",
    title: "5 Mitos sobre a alimentação saudável que você precisa superar",
    excerpt:
      "Desmistificando ideias que tornam a alimentação um peso. Descubra por que comer bem não precisa ser caro, restritivo ou sem graça.",
    categorySlug: "alimentacao",
    coverImage: "/images/posts/post-mitos-alimentacao.jpg",
    coverAlt: "Post 5 Mitos sobre a alimentação saudável - Dr. Valdenor Alves",
    publishedAt: "2026-10-08",
    readingMinutes: 4,
    body: [
      "Muitas pessoas deixam de buscar uma rotina alimentar saudável por acreditarem em mitos que complicam o que deveria ser simples e natural. Vamos desmistificar os 5 principais:",
      "Mito 1: 'Só funciona com dieta restritiva'. O verdadeiro resultado sustentável nasce da constância e do equilíbrio, não de restrições radicais que não cabem na sua rotina.",
      "Mito 2: 'É muito caro comer saudável'. Alimentos básicos, comida de verdade, frutas da estação, feijão, arroz e ovos são a base da nutrição e cabem no orçamento.",
      "Mito 3: 'É chato e não tem o que gosto de comer'. Uma abordagem individualizada respeita suas preferências culturais e familiares, tornando a refeição prazerosa.",
      "Mito 4: 'Dá muito trabalho'. Com organização simples e planejamento semanal, manter hábitos saudáveis economiza tempo no seu dia a dia.",
      "Mito 5: 'Sempre vou estar de fora dos rolês'. Aprender a fazer escolhas conscientes permite que você viva socialmente e participe de encontros sem culpa.",
    ],
  },
  {
    slug: "atitudes-para-ganho-de-massa-muscular",
    title: "Atitudes que vão te ajudar a ganhar massa muscular",
    excerpt:
      "Construir massa magra exige sinergia entre alimentação, hidratação, descanso e treinamento intenso. Confira as orientações práticas.",
    categorySlug: "exercicio",
    coverImage: "/images/posts/post-ganho-massa-muscular.jpg",
    coverAlt: "Post Atitudes que vão te ajudar a ganhar massa muscular - Dr. Valdenor Alves",
    publishedAt: "2026-10-05",
    readingMinutes: 3,
    body: [
      "O ganho de massa muscular (hipertrofia) é um processo que depende da harmonia entre estímulo físico e suporte nutricional adequado. Cinco atitudes são pilares essenciais:",
      "Consumir proteína: A ingestão proteica fracionada ao longo do dia fornece os aminoácidos necessários para a reconstrução das fibras musculares.",
      "Ter uma boa noite de sono: É durante o sono profundo que ocorre a maior liberação de hormônios anabólicos e a recuperação do tecido muscular.",
      "Beber bastante água: A hidratação adequada é vital para a força muscular, síntese proteica e transporte de nutrientes intracelulares.",
      "Evitar ficar longos períodos sem comer: Manter o aporte nutricional constante evita o catabolismo e garante energia para as demandas metabólicas.",
      "Dar o seu melhor nos treinos: A intensidade e a progressão no treinamento são o gatilho que sinaliza ao corpo a necessidade de hipertrofia.",
    ],
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getRecentArticles(limit = 3): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getCategory(slug: string): ArticleCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getAdjacentArticles(slug: string) {
  const list = getAllArticles();
  const index = list.findIndex((article) => article.slug === slug);
  return {
    newer: index > 0 ? list[index - 1] : undefined,
    older: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
  };
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
