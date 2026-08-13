import type { IconKey } from "@/config/content";
import { DIFFERENTIALS } from "@/config/content";
import { ICONS } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function Differentials() {
  const [firstRow, secondRow] = [DIFFERENTIALS.slice(0, 3), DIFFERENTIALS.slice(3)];

  return (
    <section id="diferenciais" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Diferenciais" title="POR QUE O MÉTODOS DELAY PRO?" />

        <div className="mt-14 space-y-6 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {firstRow.map((item, index) => (
              <DifferentialCard key={item.title} title={item.title} description={item.description} icon={item.icon} delay={index * 90} />
            ))}
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {secondRow.map((item, index) => (
              <DifferentialCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                delay={(index + 3) * 90}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DifferentialCard({
  title,
  description,
  icon,
  delay,
}: {
  title: string;
  description: string;
  icon: IconKey;
  delay: number;
}) {
  const Icon = ICONS[icon];
  return (
    <Reveal delay={delay}>
      <Card className="h-full">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-800/70 bg-neon-950/40 text-neon-400">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-5 font-display text-sm font-extrabold uppercase tracking-wide text-ink-50">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
      </Card>
    </Reveal>
  );
}
