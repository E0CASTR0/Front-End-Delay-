/**
 * Prova social / depoimentos.
 *
 * Nenhum depoimento, nome, foto ou resultado foi inventado. Este
 * arquivo é o único lugar que precisa ser editado para publicar
 * depoimentos reais de compradores — a seção de prova social já está
 * pronta para renderizá-los automaticamente assim que este array for
 * preenchido. Enquanto estiver vazio, a seção exibe um estado
 * "em breve" honesto, sem dados falsos.
 */
export type Testimonial = {
  name: string;
  /** Caminho da foto em /public/images/ (opcional). Ex: "/images/depoimentos/nome.webp" */
  photo?: string;
  quote: string;
  /** Ex: "Julho de 2026" */
  date: string;
};

export const TESTIMONIALS: Testimonial[] = [];
