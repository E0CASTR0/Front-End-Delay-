import { cn } from "@/lib/utils";

/**
 * Mockup 3D da capa do Métodos Delay Pro — construído inteiramente em
 * CSS/SVG (sem imagem real), com profundidade, sombra, glow e
 * flutuação sutil.
 *
 * SUBSTITUIÇÃO PELA CAPA REAL:
 * Assim que a capa definitiva (arte final do e-book) estiver disponível,
 * salve-a em `public/ebook/capa.webp` (ou .png/.jpg) e troque o miolo do
 * `<div className="... cover face ...">` abaixo por:
 *   <Image src="/ebook/capa.webp" alt="Capa do e-book Métodos Delay Pro"
 *          fill className="object-cover rounded-2xl" />
 * mantendo o wrapper 3D (perspective/rotate/glow) que já está pronto.
 */
export function EbookCover({
  className,
  size = "lg",
  floating = true,
}: {
  className?: string;
  size?: "md" | "lg";
  floating?: boolean;
}) {
  const dims = size === "lg" ? "w-[240px] sm:w-[300px] lg:w-[380px]" : "w-[180px] sm:w-[220px]";

  return (
    <div className={cn("relative mx-auto", dims, className)}>
      {/* glow atrás da capa */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-full bg-neon-500/25 blur-[64px] animate-glow-pulse sm:-inset-12"
      />

      <div
        className={cn("relative [perspective:1400px]", floating && "animate-float")}
        style={{ ["--tilt" as string]: "-4deg" }}
      >
        <div
          className="relative aspect-[3/4.15] [transform-style:preserve-3d]"
          style={{ transform: "rotateY(-12deg) rotateX(3deg) rotateZ(-1.5deg)" }}
        >
          {/* páginas empilhadas, para dar volume de livro */}
          <div
            aria-hidden
            className="absolute inset-y-2 -right-1.5 w-full rounded-2xl bg-ink-800"
            style={{ transform: "translateZ(-6px)" }}
          />
          <div
            aria-hidden
            className="absolute inset-y-1.5 -right-1 w-full rounded-2xl bg-ink-700"
            style={{ transform: "translateZ(-4px)" }}
          />
          <div
            aria-hidden
            className="absolute inset-y-1 -right-0.5 w-full rounded-2xl bg-ink-600"
            style={{ transform: "translateZ(-2px)" }}
          />

          {/* lombada */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 z-10 w-3.5 rounded-l-2xl bg-gradient-to-b from-neon-900 via-ink-950 to-neon-950 shadow-[inset_-3px_0_8px_rgba(0,0,0,0.7)] sm:w-4"
          />

          {/* capa */}
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-neon-500/40 bg-[radial-gradient(120%_100%_at_20%_0%,#0d3a22_0%,#050a06_55%,#020302_100%)] px-5 py-6 shadow-2xl sm:px-6 sm:py-7">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-white/10 via-white/0 to-transparent"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neon-500/50 bg-black/30 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.22em] text-neon-300 sm:text-[9px]">
                E-book digital
              </span>
              <h3 className="mt-4 font-display text-[26px] font-extrabold uppercase leading-[0.95] text-white sm:text-3xl">
                Métodos
              </h3>
              <h3 className="font-display text-[32px] font-extrabold uppercase leading-[0.95] text-neon-400 text-glow sm:text-4xl">
                Delay Pro
              </h3>
              <div className="mt-3 h-px w-12 bg-neon-500/60" />
              <p className="mt-3 max-w-[85%] text-[10.5px] leading-relaxed text-ink-300 sm:text-xs">
                O guia completo para entender e estudar o mercado de Delay no futebol.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-center py-3 sm:py-4">
              <CoverEmblem className="aspect-[6/5] w-[130px] text-neon-400/90 sm:w-[190px]" />
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-neon-900/70 pt-3 text-center sm:pt-4">
              {["Análise", "Estratégia", "Gestão"].map((label) => (
                <span
                  key={label}
                  className="text-[7.5px] font-bold uppercase tracking-wider text-ink-400 sm:text-[9px]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Bola de futebol — pentágono central + seis "gomos" ao redor (o
 * mesmo princípio da bola clássica: pentágonos + hexágonos, pesquisado
 * como referência real antes de desenhar), sombra e brilho simulando
 * volume de esfera, padrão girando bem devagar. Linhas de movimento +
 * selo de cronômetro dourado no canto mantêm a ideia de "Delay" como
 * detalhe, não como a imagem inteira.
 */
function CoverEmblem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <defs>
        <clipPath id="ball-clip">
          <circle cx="60" cy="54" r="32" />
        </clipPath>
      </defs>

      {/* linhas de movimento */}
      <path d="M4,36 Q18,33 32,38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
      <path d="M2,54 Q16,52 30,55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
      <path d="M4,72 Q18,74 32,69" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />

      {/* bola de futebol — esfera base */}
      <circle cx="60" cy="54" r="32" fill="#0a2c19" stroke="currentColor" strokeWidth="2.5" />

      {/* padrão (pentágono central + 5 gomos hexagonais ao redor), girando devagar */}
      <g className="animate-ball-spin" style={{ transformOrigin: "60px 54px" }}>
        <path
          d="M60,41.2 L60,27 L85.7,45.7 L72.2,50 Z
             M72.2,50 L85.7,45.7 L75.9,75.8 L67.5,64.4 Z
             M67.5,64.4 L75.9,75.8 L44.1,75.8 L52.5,64.4 Z
             M52.5,64.4 L44.1,75.8 L34.3,45.7 L47.8,50 Z
             M47.8,50 L34.3,45.7 L60,27 L60,41.2 Z"
          fill="#04140b"
          stroke="currentColor"
          className="text-neon-500"
          strokeWidth="1.2"
        />
        <path
          d="M60,41.2 L72.2,50 L67.5,64.4 L52.5,64.4 L47.8,50 Z"
          fill="currentColor"
          className="text-gold-400"
          stroke="#8a6a1f"
          strokeWidth="0.6"
        />
      </g>

      {/* brilho e sombra fixos (luz não gira junto com o padrão) */}
      <g clipPath="url(#ball-clip)">
        <ellipse cx="74" cy="71" rx="17" ry="14" fill="black" opacity="0.28" />
        <ellipse cx="46" cy="37" rx="15" ry="10" fill="white" opacity="0.15" transform="rotate(-25 46 37)" />
        <ellipse cx="43" cy="34" rx="6" ry="4" fill="white" opacity="0.3" transform="rotate(-25 43 34)" />
      </g>

      {/* selo de cronômetro */}
      <circle cx="96" cy="22" r="15" fill="#050604" stroke="currentColor" strokeWidth="2" className="text-gold-400" />
      <line x1="92" y1="8" x2="100" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold-400" />
      <line x1="96" y1="8" x2="96" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold-400" />
      <line x1="96" y1="22" x2="96" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold-300" />
      <line x1="96" y1="22" x2="103" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold-300" />
      <circle cx="96" cy="22" r="1.6" fill="currentColor" className="text-gold-300" />
    </svg>
  );
}
