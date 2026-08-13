import { EbookCover } from "@/components/ebook-cover";
import { Container } from "@/components/ui/container";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section id="comecar" className="relative overflow-hidden py-28 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-stadium" />
      <div aria-hidden className="absolute inset-0 bg-noise" />
      <div aria-hidden className="absolute inset-0 bg-pitch-lines opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="order-2 mx-auto w-full max-w-xs lg:order-1 lg:max-w-none">
          <EbookCover size="lg" />
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-6 text-left lg:order-2">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[1.05] text-ink-50 sm:text-4xl lg:text-5xl">
              SE VOCÊ QUER ENTENDER O <span className="text-neon-400 text-glow-sm">DELAY</span>,
              <br />
              COMECE PELO CONHECIMENTO.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-lg text-base leading-relaxed text-ink-300 sm:text-lg">
              Tenha acesso ao Métodos Delay Pro e comece a estudar o mercado de forma mais organizada, consciente e
              estratégica.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <CheckoutButton size="lg">Adquira já o Método</CheckoutButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
