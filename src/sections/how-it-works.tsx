import { HOW_IT_WORKS } from "@/config/content";
import { ICONS } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="O Processo" title="ENTENDA O FUNCIONAMENTO" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.number} delay={index * 90}>
                <Card className="h-full">
                  <span className="font-display text-5xl font-extrabold text-neon-900/80 transition-colors duration-300 group-hover:text-neon-800 sm:text-6xl">
                    {item.number}
                  </span>
                  <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl border border-neon-800/70 bg-neon-950/40 text-neon-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-ink-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
