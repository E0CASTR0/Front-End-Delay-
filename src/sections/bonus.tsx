import { BONUS_ITEMS } from "@/config/content";
import { ICONS } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function Bonus() {
  return (
    <section id="bonus" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(43,255,119,0.14),transparent_70%),radial-gradient(45%_40%_at_90%_100%,rgba(224,175,65,0.12),transparent_65%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-noise" />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow tone="gold">Vantagens Extras</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight text-ink-50 sm:text-4xl lg:text-5xl">
            E AINDA TEM <span className="text-neon-400 text-glow-sm">MAIS</span>...
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-sm font-semibold uppercase tracking-wide text-ink-400 sm:text-base">
            Conteúdos extras para complementar sua experiência.
          </p>
        </Reveal>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3">
          {BONUS_ITEMS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.label} delay={200 + index * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-neon-500/40 bg-gradient-to-b from-neon-950/60 to-surface p-7 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/70 hover:shadow-glow-gold">
                  <span className="inline-flex rounded-full border border-gold-500/50 bg-black/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-300">
                    {item.label}
                  </span>
                  <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-800/70 bg-black/30 text-neon-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-ink-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
