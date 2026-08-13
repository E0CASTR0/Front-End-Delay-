/**
 * Conteúdo estruturado da landing page.
 *
 * Todo texto que se repete em cards/listas fica centralizado aqui,
 * tipado, para facilitar edição futura sem precisar mexer nos
 * componentes visuais. Os ícones são referenciados por chave (string)
 * e resolvidos em `src/lib/icons.tsx`.
 */

export type IconKey =
  | "book-open"
  | "zap"
  | "bar-chart"
  | "laptop"
  | "radar"
  | "search-check"
  | "line-chart"
  | "list-checks"
  | "clock"
  | "wallet"
  | "calendar-clock"
  | "alert-triangle"
  | "lightbulb"
  | "sprout"
  | "layout-grid"
  | "graduation-cap"
  | "compass"
  | "target"
  | "image"
  | "layers"
  | "trending-up"
  | "shield-check"
  | "users"
  | "refresh-cw"
  | "gift"
  | "check";

export const BENEFITS: { icon: IconKey; title: string; description: string }[] = [
  {
    icon: "book-open",
    title: "CONTEÚDO PRÁTICO",
    description: "Material estruturado e direto ao ponto.",
  },
  {
    icon: "zap",
    title: "ESTRATÉGIA",
    description: "Conceitos para melhorar sua análise.",
  },
  {
    icon: "bar-chart",
    title: "ORGANIZAÇÃO",
    description: "Estruture melhor seus estudos.",
  },
  {
    icon: "laptop",
    title: "ACESSO DIGITAL",
    description: "Material disponibilizado digitalmente.",
  },
];

export const DELAY_TIMELINE: string[] = [
  "JOGO AO VIVO",
  "TRANSMISSÃO",
  "DIFERENÇA TEMPORAL",
  "ATUALIZAÇÃO",
  "ANÁLISE",
];

export const HOW_IT_WORKS: {
  number: string;
  icon: IconKey;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: "radar",
    title: "ACOMPANHE",
    description: "Entenda como diferentes transmissões podem apresentar diferenças de atualização.",
  },
  {
    number: "02",
    icon: "search-check",
    title: "IDENTIFIQUE",
    description: "Aprenda a reconhecer situações em que existe diferença temporal.",
  },
  {
    number: "03",
    icon: "line-chart",
    title: "ANALISE",
    description: "Estude o cenário antes de tomar qualquer decisão.",
  },
  {
    number: "04",
    icon: "list-checks",
    title: "ORGANIZE",
    description: "Desenvolva uma rotina mais disciplinada para suas análises.",
  },
];

export const EBOOK_CONTENTS: { icon: IconKey; title: string; description: string }[] = [
  {
    icon: "clock",
    title: "COMO FUNCIONA O MERCADO DE DELAY",
    description: "Entenda os conceitos fundamentais e a lógica por trás das diferenças de transmissão.",
  },
  {
    icon: "search-check",
    title: "COMO ANALISAR O DELAY",
    description: "Conheça os principais pontos que devem ser observados durante seus estudos.",
  },
  {
    icon: "wallet",
    title: "GESTÃO DE BANCA",
    description: "Aprenda conceitos de organização, controle e gestão de risco.",
  },
  {
    icon: "calendar-clock",
    title: "ROTINA E ORGANIZAÇÃO",
    description: "Monte uma rotina mais disciplinada para estudar e analisar o mercado.",
  },
  {
    icon: "alert-triangle",
    title: "ERROS COMUNS",
    description: "Conheça erros frequentes de iniciantes e como evitá-los.",
  },
  {
    icon: "lightbulb",
    title: "ESTRATÉGIAS E CONCEITOS",
    description: "Conteúdo organizado para facilitar o aprendizado e a análise.",
  },
];

export const PRODUCT_CHECKLIST: string[] = [
  "Conteúdo estruturado",
  "Explicações diretas",
  "Exemplos visuais",
  "Conceitos de Delay",
  "Organização e gestão",
  "Material digital",
];

export const FOR_WHO: { icon: IconKey; title: string; description: string }[] = [
  {
    icon: "sprout",
    title: "INICIANTES",
    description: "Para quem está começando a estudar o mercado.",
  },
  {
    icon: "layout-grid",
    title: "QUEM QUER SE ORGANIZAR",
    description: "Para quem quer uma metodologia mais estruturada.",
  },
  {
    icon: "graduation-cap",
    title: "QUEM JÁ ESTUDA",
    description: "Para quem deseja organizar melhor seus conhecimentos.",
  },
  {
    icon: "compass",
    title: "QUEM BUSCA CONHECIMENTO",
    description: "Para quem quer entender melhor o conceito de Delay no futebol.",
  },
];

export const DIFFERENTIALS: { icon: IconKey; title: string; description: string }[] = [
  {
    icon: "target",
    title: "CONTEÚDO DIRETO AO PONTO",
    description: "Sem excesso de informações desnecessárias.",
  },
  {
    icon: "image",
    title: "MATERIAL VISUAL",
    description: "Explicações acompanhadas de elementos visuais.",
  },
  {
    icon: "layers",
    title: "ESTRUTURA ORGANIZADA",
    description: "Conteúdo separado por etapas.",
  },
  {
    icon: "trending-up",
    title: "FOCO EM ESTRATÉGIA",
    description: "Aprendizado baseado em análise e disciplina.",
  },
  {
    icon: "shield-check",
    title: "GESTÃO DE RISCO",
    description: "Conceitos importantes para uma abordagem responsável.",
  },
];

export const BONUS_ITEMS: { label: string; icon: IconKey; title: string; description: string }[] = [
  {
    label: "BÔNUS 01",
    icon: "users",
    title: "COMUNIDADE EXCLUSIVA",
    description: "Espaço para acompanhar conteúdos e novidades.",
  },
  {
    label: "BÔNUS 02",
    icon: "refresh-cw",
    title: "ATUALIZAÇÕES",
    description: "Novos conteúdos quando disponibilizados.",
  },
  {
    label: "BÔNUS 03",
    icon: "gift",
    title: "CONTEÚDOS EXTRAS",
    description: "Materiais complementares relacionados ao tema.",
  },
];

export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "O que é o Métodos Delay Pro?",
    answer: "É um e-book digital educacional sobre o conceito de Delay no mercado esportivo.",
  },
  {
    question: "Como recebo o material?",
    answer: "Após a confirmação da compra, o acesso deve ser disponibilizado conforme o checkout utilizado.",
  },
  {
    question: "O material é físico?",
    answer: "Não. É um produto digital.",
  },
  {
    question: "Para quem é o material?",
    answer: "Para pessoas interessadas em estudar e entender o conceito de Delay no futebol.",
  },
  {
    question: "Preciso ter experiência?",
    answer: "Não. O conteúdo deve começar pelos conceitos fundamentais.",
  },
  {
    question: "Existe garantia de lucro?",
    answer: "Não. O material possui finalidade educacional e não garante resultados financeiros.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim. O material é digital.",
  },
  {
    question: "O mercado de apostas possui riscos?",
    answer: "Sim. Apostas esportivas envolvem riscos financeiros e devem ser realizadas com responsabilidade.",
  },
];
