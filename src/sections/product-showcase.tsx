import { EbookCover } from "@/components/ebook-cover";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckItem } from "@/components/ui/check-item";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCT_CHECKLIST } from "@/config/content";

export function ProductShowcase() {
  return (
    <section id="produto" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_85%_15%,rgba(43,255,119,0.08),transparent_65%)]"
      />
      <Container className="relative">
        <SectionHeading eyebrow="O Material" title="CONHEÇA O SEU NOVO MATERIAL DE ESTUDO" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <EbookCover size="lg" />
          </Reveal>

          <Reveal delay={100} className="flex flex-col items-start gap-6">
            <h3 className="font-display text-3xl font-extrabold uppercase leading-tight text-ink-50 sm:text-4xl">
              Métodos <span className="text-neon-400">Delay Pro</span>
            </h3>
            <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
              Um material criado para transformar um conceito complexo em conteúdo organizado e fácil de entender.
            </p>
            <ul className="flex flex-col gap-3">
              {PRODUCT_CHECKLIST.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <CheckoutButton size="lg" className="mt-2">
              Quero meu Métodos Delay Pro
            </CheckoutButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
