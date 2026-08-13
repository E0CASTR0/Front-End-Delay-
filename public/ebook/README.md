# /public/ebook

Coloque aqui a arte final da capa do e-book quando estiver pronta
(ex: `capa.webp`, formato retrato ~3:4).

Enquanto não houver uma capa definitiva, o site usa um mockup 3D
construído em CSS/SVG (`src/components/ebook-cover.tsx`) — com
profundidade, lombada, glow e flutuação — sem depender de nenhuma
imagem externa.

Para usar a capa real depois de colocá-la aqui, edite
`src/components/ebook-cover.tsx`: mantenha o wrapper 3D (perspectiva /
rotação / glow / páginas empilhadas) e troque apenas o miolo — a `div`
com a classe `"relative flex h-full w-full flex-col ..."` — por:

```tsx
import Image from "next/image";

<Image
  src="/ebook/capa.webp"
  alt="Capa do e-book Métodos Delay Pro"
  fill
  className="rounded-2xl border border-neon-500/40 object-cover shadow-2xl"
/>
```

Não distorça a capa nem altere sua proporção original.
