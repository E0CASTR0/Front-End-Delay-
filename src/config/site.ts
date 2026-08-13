/**
 * Informações gerais do site / marca. Centralizado para facilitar
 * futuras edições (nome do produto, equipe, slogans, links de navegação).
 */
export const SITE = {
  productName: "Métodos Delay Pro",
  productNameParts: ["MÉTODOS", "DELAY PRO"],
  subtitle: "O guia completo para entender e estudar o mercado de Delay no futebol.",
  slogan: "DOMINE O TEMPO. SAIA NA FRENTE. FAÇA A DIFERENÇA.",
  team: "EQP R7 & BG7",
  teamSlogan: "THE WORLD IS YOURS",
  // Domínio provisório — atualize para o domínio real após o deploy (usado em metadata/SEO).
  url: "https://metodosdelaypro.com.br",
  description:
    "Conheça o Métodos Delay Pro, um guia digital para entender o conceito de Delay no futebol, estudar o mercado esportivo e desenvolver uma rotina mais organizada de análise.",
  locale: "pt_BR",
} as const;

export const NAV_LINKS = [
  { label: "O Método", href: "#o-metodo" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Bônus", href: "#bonus" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FOOTER_LINKS = [
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Contato", href: "/contato" },
  { label: "Suporte", href: "/suporte" },
] as const;

/** Aviso de responsabilidade — reutilizado em Hero, Oferta e Footer. */
export const RESPONSIBLE_NOTICE_SHORT =
  "18+ | O mercado de apostas envolve riscos. Aposte com responsabilidade.";

export const RESPONSIBLE_NOTICE_FULL =
  "18+. O mercado de apostas envolve riscos financeiros. Este material possui finalidade educacional. Aposte com responsabilidade e dentro das regras aplicáveis.";
