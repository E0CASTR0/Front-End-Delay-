import { EBOOK_CONTENTS } from "@/config/content";
import { ICONS } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function EbookContents() {
  return (
    <section id="conteudo" className="relative py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-pitch-lines opacity-60" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Conteúdo"
          title={
            <>
              O QUE VOCÊ VAI ENCONTRAR NO <span className="text-neon-400">MÉTODOS DELAY PRO</span>?
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {EBOOK_CONTENTS.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={(index % 3) * 90}>
                <Card className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-800/70 bg-neon-950/40 text-neon-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-sm font-extrabold uppercase leading-snug tracking-wide text-ink-50">
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
