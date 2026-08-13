import { DELAY_TIMELINE } from "@/config/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function WhatIsDelay() {
  return (
    <section id="o-metodo" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="O Conceito"
          title={
            <>
              O QUE É O <span className="text-neon-400 text-glow-sm">MÉTODO DE DELAY</span>?
            </>
          }
          description="Delay é o intervalo de tempo existente entre o acontecimento de um lance em uma transmissão e a atualização desse mesmo acontecimento em outra plataforma."
        />

        <Reveal delay={120} className="mt-16 sm:mt-20">
          {/* mobile / tablet: linha do tempo vertical */}
          <ol className="flex flex-col gap-2 lg:hidden">
            {DELAY_TIMELINE.map((step, index) => {
              const isLast = index === DELAY_TIMELINE.length - 1;
              return (
                <li key={step} className="relative flex items-center gap-4 py-2">
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-[27px] top-[3.6rem] h-[calc(100%-2.6rem)] w-px bg-gradient-to-b from-neon-600/70 to-neon-900/10"
                    />
                  )}
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-neon-500/70 bg-neon-950/50 font-display text-sm font-extrabold text-neon-400 shadow-glow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-ink-100">{step}</span>
                </li>
              );
            })}
          </ol>

          {/* desktop: linha do tempo horizontal */}
          <ol className="relative hidden lg:flex lg:items-start lg:justify-between">
            <span
              aria-hidden
              className="pointer-events-none absolute left-7 right-7 top-7 h-px bg-gradient-to-r from-neon-900/10 via-neon-500/60 to-neon-900/10"
            />
            {DELAY_TIMELINE.map((step, index) => (
              <li key={step} className="relative z-10 flex flex-1 flex-col items-center gap-4 px-2">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-neon-500/70 bg-bg font-display text-sm font-extrabold text-neon-400 shadow-glow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-center text-xs font-bold uppercase tracking-wider text-ink-100 xl:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
