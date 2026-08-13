# Métodos Delay Pro — Landing Page Oficial

Landing page de vendas do e-book **Métodos Delay Pro**, da equipe **EQP R7 & BG7**.
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Identidade visual
preto + verde neon + branco, dark/premium/cinematográfica.

## Sumário

- [Como rodar o projeto](#como-rodar-o-projeto)
- [Configuração do checkout](#configuração-do-checkout-mais-importante)
- [Onde adicionar a logo oficial](#onde-adicionar-a-logo-oficial)
- [Onde adicionar a capa do e-book](#onde-adicionar-a-capa-do-e-book)
- [Estrutura do projeto](#estrutura-do-projeto)
- [O que é editável e onde](#o-que-é-editável-e-onde)
- [Deploy](#deploy)
- [Nota sobre o conteúdo do produto](#nota-sobre-o-conteúdo-do-produto)

## Como rodar o projeto

Requer Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # build de produção
npm run start    # roda o build de produção (após "npm run build")
npm run lint     # ESLint (flat config do Next 16)
```

O build de produção foi testado neste projeto (`npm run build` e `npm run lint`
rodam limpos, sem erros ou warnings) e validado visualmente em 360, 390, 430,
768, 1024, 1440 e 1920px, além de testes funcionais automatizados (menu
mobile, accordion do FAQ, CTA fixo mobile, links do footer, robots/sitemap/OG
image, e verificação de que todos os CTAs externos apontam para o checkout).

## Configuração do checkout (MAIS IMPORTANTE)

O link oficial de compra é centralizado em **um único arquivo**:

```
src/config/checkout.ts
```

```ts
export const CHECKOUT_URL = "https://pay.cakto.com.br/33vd8iy_1029401";
```

Todo botão de compra da página usa o componente `<CheckoutButton>`
(`src/components/ui/checkout-button.tsx`), que já importa `CHECKOUT_URL` e
abre em nova aba com `rel="noopener noreferrer"`. Nenhum outro componente
escreve a URL manualmente — foi conferido via busca no código-fonte que a
string do checkout aparece **apenas** em `checkout.ts`.

Para trocar o link de checkout no futuro (ou o preço exibido), edite apenas
esse arquivo — todos os 8 pontos de CTA (header desktop, menu mobile, Hero,
CTA fixo mobile, Apresentação do produto, Oferta, CTA final) atualizam
automaticamente.

## Onde adicionar a logo oficial

Nenhuma imagem/foto de terceiros foi usada no projeto. Como referência visual
enviada para o logo trazia fotos do ator Al Pacino e uma composição com o
nome "El Chapo" (Joaquín Guzmán, uma pessoa real), o logo atual é uma marca
**original**, desenhada em código (emblema SVG + wordmark), em
`src/components/logo.tsx`. Ela já usa o nome "EQP R7 & BG7" e o slogan
"THE WORLD IS YOURS" no Header e no Footer.

Quando vocês tiverem o arquivo definitivo da logo:

1. Coloque o arquivo em `public/logo/` (veja `public/logo/README.md`).
2. Edite `src/components/logo.tsx` e troque o conteúdo de `LogoMark` por um
   `<Image src="/logo/logo.svg" ... />` apontando para o arquivo.

## Onde adicionar a capa do e-book

A capa exibida hoje é um mockup 3D construído inteiramente em CSS/SVG
(`src/components/ebook-cover.tsx`) — com lombada, páginas empilhadas,
perspectiva, glow e flutuação — sem depender de nenhuma imagem.

Quando a arte final da capa estiver pronta:

1. Salve o arquivo em `public/ebook/` (veja `public/ebook/README.md`).
2. Edite `src/components/ebook-cover.tsx` e troque o miolo do mockup por um
   `<Image src="/ebook/capa.webp" fill className="object-cover rounded-2xl" />`,
   mantendo o wrapper 3D (perspectiva/rotação/glow) que já está pronto.

## Estrutura do projeto

```
src/
├── app/                    # Rotas (App Router)
│   ├── layout.tsx          # Layout raiz: fontes, metadata, Header/Footer/CTA fixo
│   ├── page.tsx             # Monta todas as seções da home, em ordem
│   ├── globals.css          # Design tokens (cores, fontes, glow, keyframes) — Tailwind v4
│   ├── icon.svg              # Favicon
│   ├── opengraph-image.tsx   # Imagem OG gerada dinamicamente (next/og)
│   ├── robots.ts / sitemap.ts
│   └── termos-de-uso/ | politica-de-privacidade/ | contato/ | suporte/
├── components/               # Componentes reutilizáveis (chrome + primitivos)
│   ├── header.tsx, footer.tsx, mobile-sticky-cta.tsx
│   ├── logo.tsx, ebook-cover.tsx, legal-page-layout.tsx
│   └── ui/                   # Button, CheckoutButton, Card, Container, FAQ etc.
├── sections/                 # Uma seção da landing page por arquivo
│   ├── hero.tsx, benefits-bar.tsx, what-is-delay.tsx, how-it-works.tsx
│   ├── ebook-contents.tsx, product-showcase.tsx, for-who.tsx, differentials.tsx
│   ├── social-proof.tsx, bonus.tsx, offer.tsx, faq.tsx, final-cta.tsx
├── config/                   # Toda a configuração/copy estruturada
│   ├── checkout.ts           # CHECKOUT_URL + preço
│   ├── site.ts                # Nome do produto, nav, links do footer, avisos
│   ├── content.ts             # Textos dos cards (benefícios, FAQ, bônus, etc.)
│   └── testimonials.ts        # Depoimentos reais (vazio por padrão — ver abaixo)
└── lib/
    ├── utils.ts               # helper `cn` (merge de classes Tailwind)
    └── icons.tsx               # registro de ícones (lucide-react) por chave

public/
├── logo/README.md            # instruções para adicionar a logo real
├── ebook/README.md           # instruções para adicionar a capa real
└── images/README.md          # pasta para fotos de depoimentos reais, etc.
```

## O que é editável e onde

| Quero mudar...                              | Arquivo                                   |
| -------------------------------------------- | ------------------------------------------ |
| Link de checkout / preço                     | `src/config/checkout.ts`                   |
| Nome do produto, links do menu, footer, avisos | `src/config/site.ts`                     |
| Textos dos cards (benefícios, "o que vem no e-book", "para quem é", diferenciais, bônus, FAQ) | `src/config/content.ts` |
| Depoimentos reais                            | `src/config/testimonials.ts` (array vazio — adicione objetos `{ name, quote, date, photo? }`; a seção troca automaticamente do estado "em breve" para os cards reais) |
| Logo                                         | `public/logo/` + `src/components/logo.tsx` |
| Capa do e-book                               | `public/ebook/` + `src/components/ebook-cover.tsx` |
| Textos únicos do Hero / Oferta / CTA final   | dentro do respectivo arquivo em `src/sections/` |
| E-mail de contato/suporte                    | `SITE.supportEmail` em `src/config/site.ts` (hoje é um placeholder: `contato@metodosdelaypro.com.br`) |
| Domínio do site (SEO/OG)                     | `SITE.url` em `src/config/site.ts` (hoje é um placeholder: `metodosdelaypro.com.br`) — atualize para o domínio real após o deploy |
| Countdown/prazo real de oferta               | Ainda não implementado de propósito (o briefing pede para não simular urgência falsa). Se vocês definirem uma data real de encerramento, um componente de countdown pode ser adicionado na seção de Oferta. |

## Deploy

O projeto é um app Next.js padrão — funciona em qualquer host com suporte a
Next.js (Vercel, Netlify, servidor Node próprio, etc.):

```bash
npm run build
npm run start   # ou: next start -p 3000
```

Na Vercel, basta importar o repositório — nenhuma variável de ambiente é
necessária (não há chaves/segredos no projeto; o checkout é apenas uma URL
pública para a Cakto). Após o deploy, atualize `SITE.url` em
`src/config/site.ts` com o domínio final, para que o SEO/Open Graph fiquem
corretos.

## Nota sobre o conteúdo do produto

Durante o desenvolvimento, as imagens de referência enviadas mostraram que a
mecânica descrita para o "Delay" (apostar após o lance já ter acontecido na
transmissão, antes da casa atualizar as odds, com promessa de "lucro
garantido") e o bônus de "sinais ao vivo" não são compatíveis com o que pode
ser publicado nesta página. A versão implementada segue a descrição neutra do
briefing original: delay como conceito de estudo/análise (diferenças de
transmissão, organização, gestão, disciplina), sem instruções para apostar
com resultado já conhecido e sem qualquer promessa de lucro — isso foi
alinhado em conversa antes da implementação. Todos os textos foram revisados
para não conter as expressões proibidas (lucro garantido, 100% de acerto,
etc.) — confirmado por busca automatizada no código-fonte.

As páginas de Termos de Uso e Política de Privacidade incluem um modelo
padrão (inclusive o direito de arrependimento de 7 dias do Código de Defesa
do Consumidor). Recomenda-se revisão jurídica antes de considerá-las
definitivas, principalmente quanto a CNPJ/razão social da empresa, que não
foram informados e por isso não aparecem no texto.
