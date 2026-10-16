/**
 * Configuração central do site.
 *
 * TODAS as informações de contato e identidade do profissional ficam aqui.
 * Componentes e páginas devem importar estes dados — nunca duplicar
 * números, endereços ou links diretamente no código.
 */

export type Registration = { label: string; value: string };

export const siteConfig = {
  /** URL pública do site (defina NEXT_PUBLIC_SITE_URL em produção). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "pt_BR",

  professional: {
    name: "Valdenor Alves",
    displayName: "Dr. Valdenor Alves",
    profession: "Nutricionista",
    /** Informação divulgada no perfil oficial do Instagram. */
    yearsInHealth: 26,
    /** Atuações informadas pelo próprio profissional no Instagram. */
    otherRoles: ["Farmacêutico", "Educador físico"],
    /** Formação mencionada no perfil oficial (instituição não informada). */
    mentionedEducation: ["Pós-graduação em Farmácia Clínica"],
    /**
     * Registros profissionais (ex.: CRN). Preencha SOMENTE com dados verificados.
     * Enquanto a lista estiver vazia, nada é exibido no site.
     */
    registrations: [] as Registration[],
  },

  contact: {
    /** Número oficial em formato internacional, apenas dígitos. */
    whatsappNumber: "5564993163294",
    whatsappDisplay: "+55 64 99316-3294",
    whatsappDefaultMessage:
      "Olá! Gostaria de obter informações sobre o atendimento nutricional com o Dr. Valdenor Alves.",
    instagramUrl: "https://www.instagram.com/drvaldenornutricionista/",
    instagramHandle: "@drvaldenornutricionista",
  },

  address: {
    street: "Rua Nizo Jaime de Gusmão, 369",
    neighborhood: "Vila Amalia",
    city: "Rio Verde",
    state: "GO",
    postalCode: "75901-240",
    country: "BR",
    /** Link oficial fornecido pelo cliente. */
    mapsUrl: "https://maps.app.goo.gl/1gYGvkwhX1Lj1Go79",
  },

  /**
   * Fotografias originais do profissional em /public/images.
   */
  photos: {
    hero: "/images/dr-valdenor-hero.jpg",
    presentation: "/images/dr-valdenor-apresentacao.jpg",
    about: "/images/dr-valdenor-sobre.jpg",
    office: "/images/consultorio.jpg",
    performance: "/images/dr-valdenor-performance.jpg",
    coat: "/images/dr-valdenor-jaleco.jpg",
  },
};

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/contato", label: "Contato" },
] as const;

/** Gera o link do WhatsApp com a mensagem codificada corretamente. */
export function getWhatsAppUrl(message: string = siteConfig.contact.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}, CEP ${siteConfig.address.postalCode}`;

/** Embed do Google Maps baseado apenas no endereço textual (sem coordenadas inventadas). */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
