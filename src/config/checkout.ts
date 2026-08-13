/**
 * Configuração central do checkout — MÉTODOS DELAY PRO
 * ------------------------------------------------------
 * Este é o ÚNICO lugar da aplicação onde o link de compra deve ser
 * definido. Todo botão/CTA de compra da landing page deve importar
 * `CHECKOUT_URL` a partir deste arquivo em vez de escrever a URL
 * manualmente em cada componente.
 *
 * Para trocar o link de checkout no futuro, altere apenas a linha abaixo.
 */
export const CHECKOUT_URL = "https://pay.cakto.com.br/33vd8iy_1029401";

/** Preço vigente do produto — usado na Oferta, no CTA fixo mobile e no SEO. */
export const PRICE = {
  current: "R$ 37,90",
  previous: "R$ 47,90",
  currency: "BRL",
  /** Valor numérico puro, usado em metadados estruturados (SEO). */
  currentValue: 37.9,
  previousValue: 47.9,
  paymentLabel: "PAGAMENTO ÚNICO",
} as const;
