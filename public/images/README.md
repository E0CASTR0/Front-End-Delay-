# /public/images

Pasta para imagens gerais da página (ex: fotos de depoimentos reais).

- Depoimentos: salve as fotos em `public/images/depoimentos/` e
  referencie o caminho (`/images/depoimentos/nome.webp`) no campo
  `photo` de `src/config/testimonials.ts`.
- Prefira `.webp` para melhor performance. Imagens aqui são servidas
  como arquivos estáticos e otimizadas automaticamente pelo
  `next/image` quando usadas através dele.
