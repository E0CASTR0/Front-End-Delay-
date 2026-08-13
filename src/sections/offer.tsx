import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { Reveal } from "@/components/ui/reveal";
import { PRICE } from "@/config/checkout";
import { SITE } from "@/config/site";

export function Offer() {
  return (
    <section id="oferta" className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-neon-500/50 bg-bg-elevated px-6 py-14 text-center shadow-glow-lg sm:px-14 sm:py-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_-10%,rgba(43,255,119,0.18),transparent_60%)]"
            />
            <div aria-hidden className="absolute inset-0 bg-noise" />

            <div className="relative flex flex-col items-center">
              <Eyebrow>Condição Especial</Eyebrow>
              <h2 className="mt-6 max-w-xl text-balance font-display text-2xl font-extrabold uppercase leading-tight text-ink-50 sm:text-3xl lg:text-4xl">
                TENHA ACESSO AO <span className="text-neon-400">{SITE.productName.toUpperCase()}</span>
              </h2>

              <div className="mt-9 flex flex-col items-center gap-1">
                <span className="text-lg font-semibold text-ink-500 line-through decoration-2">
                  {PRICE.previous}
                </span>
                <span className="font-display text-6xl font-extrabold text-neon-400 text-glow sm:text-7xl">
                  {PRICE.current}
                </span>
                <span className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-ink-400">
                  {PRICE.paymentLabel}
                </span>
              </div>

              <CheckoutButton size="lg" className="mt-10 w-full sm:w-auto">
                Adquira já o Método
              </CheckoutButton>

              <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink-500">
                Acesso ao produto após confirmação da compra.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
