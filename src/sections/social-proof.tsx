import Image from "next/image";
import { MessageSquareText } from "lucide-react";
import { TESTIMONIALS } from "@/config/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

/**
 * Prova social. Sem depoimentos reais cadastrados em
 * `src/config/testimonials.ts`, exibe um estado "em breve" honesto —
 * nenhum nome, foto ou resultado é inventado.
 */
export function SocialProof() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Depoimentos" title="O QUE ESTÃO FALANDO" />

        <div className="mt-14 sm:mt-16">
          {TESTIMONIALS.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial, index) => (
                <Reveal key={`${testimonial.name}-${testimonial.date}`} delay={index * 90}>
                  <Card className="h-full">
                    <div className="flex items-center gap-3">
                      {testimonial.photo ? (
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neon-950/60 font-display text-sm font-bold text-neon-400">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                      <div>
                        <p className="text-sm font-bold text-ink-50">{testimonial.name}</p>
                        <p className="text-xs text-ink-500">{testimonial.date}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-dashed border-neon-900/70 bg-surface/60 px-8 py-14 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-800/70 bg-neon-950/40 text-neon-400">
                  <MessageSquareText className="h-5 w-5" aria-hidden />
                </span>
                <p className="font-display text-base font-bold uppercase tracking-wide text-ink-100">
                  Depoimentos em breve
                </p>
                <p className="max-w-sm text-sm leading-relaxed text-ink-400">
                  Assim que tivermos depoimentos reais de quem já estudou com o Métodos Delay Pro, eles vão aparecer
                  aqui.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
