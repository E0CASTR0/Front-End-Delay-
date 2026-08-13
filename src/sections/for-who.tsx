import { FOR_WHO } from "@/config/content";
import { ICONS } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function ForWho() {
  return (
    <section id="para-quem" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Público" title="PARA QUEM É O MÉTODOS DELAY PRO?" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {FOR_WHO.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={index * 90}>
                <Card className="h-full">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-800/70 bg-neon-950/40 text-neon-400">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-ink-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-400">{item.description}</p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
