/**
 * Serviços e atendimento.
 *
 * A lista está VAZIA de propósito: nenhum serviço, modalidade (presencial/online),
 * preço, duração ou pacote deve ser publicado sem confirmação do profissional.
 *
 * Quando o Dr. Valdenor confirmar os serviços, adicione itens seguindo o tipo
 * `Service`. O componente <ServiceCard /> já está pronto para exibi-los.
 */

export type Service = {
  slug: string;
  name: string;
  description: string;
  audience: string;
  /** Informações práticas confirmadas (ex.: modalidade, preparação). */
  details?: string[];
  /** Mensagem pré-preenchida específica para o WhatsApp. */
  whatsappMessage?: string;
};

export const services: Service[] = [];

/**
 * Temas que orientam a comunicação do profissional (divulgados no Instagram).
 * NÃO são serviços contratáveis — são áreas de interesse e abordagem.
 */
export const focusThemes = [
  {
    icon: "Leaf",
    title: "Emagrecimento saudável",
    text: "Mudanças graduais e realistas, respeitando o corpo e a rotina de cada pessoa.",
  },
  {
    icon: "Activity",
    title: "Composição corporal",
    text: "Atenção à relação entre alimentação, exercício físico e composição corporal.",
  },
  {
    icon: "Dumbbell",
    title: "Desempenho físico",
    text: "A alimentação como aliada de quem busca mais rendimento nas atividades físicas.",
  },
  {
    icon: "Zap",
    title: "Energia e disposição",
    text: "Escolhas alimentares que contribuem para mais vitalidade no dia a dia.",
  },
  {
    icon: "Brain",
    title: "Saúde física e mental",
    text: "Um olhar que considera o bem-estar de forma integral, além do prato.",
  },
  {
    icon: "Repeat",
    title: "Hábitos sustentáveis",
    text: "Construção de hábitos que façam sentido e possam ser mantidos ao longo do tempo.",
  },
] as const;

export type FocusIcon = (typeof focusThemes)[number]["icon"];
