# /public/logo

Coloque aqui o arquivo da logo oficial da equipe **EQP R7 & BG7** quando
estiver disponível (ex: `logo.svg` ou `logo.png`, fundo transparente).

Enquanto não houver um arquivo de logo real, o site usa uma marca
original desenhada em código (emblema SVG + wordmark) em
`src/components/logo.tsx` — sem depender de nenhuma imagem externa.

Para usar o arquivo real depois de colocá-lo aqui, edite
`src/components/logo.tsx` e troque o conteúdo de `LogoMark` por:

```tsx
import Image from "next/image";

<Image src="/logo/logo.svg" alt="EQP R7 & BG7" width={40} height={40} />
```

Mantenha a proporção original do arquivo — não distorça, não redesenhe
cores nem aplique efeitos que prejudiquem a leitura.
