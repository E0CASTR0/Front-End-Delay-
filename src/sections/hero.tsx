import { EbookCover } from "@/components/ebook-cover";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/config/site";

const PARTICLES = [
  { top: "14%", left: "8%", size: 3, delay: "0s", duration: "15s" },
  { top: "24%", left: "84%", size: 2, delay: "-4s", duration: "19s" },
  { top: "66%", left: "12%", size: 2.5, delay: "-2s", duration: "17s" },
  { top: "78%", left: "72%", size: 3.5, delay: "-6s", duration: "21s" },
  { top: "42%", left: "94%", size: 2, delay: "-3s", duration: "16s" },
  { top: "56%", left: "3%", size: 2, delay: "-5s", duration: "18s" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-stadium pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-pitch-lines" />
      <HeroParticles />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg sm:h-40"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col items-start gap-6 text-left">
          <Reveal>
            <Eyebrow>Método Exclusivo</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[2.65rem] font-extrabold uppercase leading-[0.94] text-ink-50 sm:text-6xl lg:text-[5.2rem]">
              {SITE.productNameParts[0]}
              <br />
              <span className="text-neon-400 text-glow">{SITE.productNameParts[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">
              Aprenda a entender o <strong className="font-semibold text-neon-400">mercado de Delay</strong> no
              futebol, estudar as diferenças de transmissão e desenvolver uma estrutura mais organizada para suas
              análises.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-lg text-sm leading-relaxed text-ink-400 sm:text-base">
              Conteúdo direto ao ponto, exemplos visuais e uma metodologia organizada para quem quer entender melhor
              esse mercado.
            </p>
          </Reveal>

          <Reveal delay={260} className="w-full sm:w-auto">
            <CheckoutButton size="lg" className="w-full sm:w-auto">
              Adquira já o Método
            </CheckoutButton>
          </Reveal>

          <Reveal delay={320}>
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400 sm:text-xs">
              <span>Acesso digital</span>
              <Dot />
              <span>Conteúdo organizado</span>
              <Dot />
              <span>Disponibilização após a compra</span>
            </p>
          </Reveal>

          <Reveal delay={380}>
            <Disclaimer className="max-w-md" />
          </Reveal>
        </div>

        <Reveal delay={220} className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <EbookCover />
        </Reveal>
      </Container>
    </section>
  );
}

function Dot() {
  return <span className="h-1 w-1 shrink-0 rounded-full bg-ink-600" aria-hidden />;
}

function HeroParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-neon-400/50 blur-[1px] animate-drift"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
