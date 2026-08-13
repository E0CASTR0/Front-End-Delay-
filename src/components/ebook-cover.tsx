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
              <StopwatchIcon className="h-16 w-16 text-neon-400/90 sm:h-24 sm:w-24" />
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

function StopwatchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="54" r="34" stroke="currentColor" strokeWidth="3" opacity="0.9" />
      <circle cx="50" cy="54" r="34" stroke="currentColor" strokeWidth="3" strokeDasharray="14 10" opacity="0.3" />
      <line x1="50" y1="54" x2="50" y2="33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="54" x2="63" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="54" r="3" fill="currentColor" />
      <line x1="41" y1="10" x2="59" y2="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="10" x2="50" y2="18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="74" y1="19" x2="80" y2="13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
