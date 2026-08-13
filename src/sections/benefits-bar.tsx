import { BENEFITS } from "@/config/content";
import { ICONS } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function BenefitsBar() {
  return (
    <section id="beneficios" className="relative border-y border-neon-950/80 bg-surface py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-10">
          {BENEFITS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={index * 70}>
                <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neon-800/70 bg-neon-950/40 text-neon-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-ink-50 sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-400 sm:text-sm">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
