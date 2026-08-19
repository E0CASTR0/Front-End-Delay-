import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { Reveal } from "@/components/ui/reveal";
import { PRICE } from "@/config/checkout";
import { SITE } from "@/config/site";

const DISCOUNT_PERCENT = Math.round((1 - PRICE.currentValue / PRICE.previousValue) * 100);

export function Offer() {
  return (
    <section id="oferta" className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          {/* wrapper com gradiente dourado -> verde faz as vezes de borda, respeitando o border-radius
              (border-image nativo não acompanha cantos arredondados) */}
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-gold-500/70 via-gold-600/40 to-neon-500/70 p-px shadow-glow-lg">
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-royal px-6 py-14 text-center sm:px-14 sm:py-16">
              <div aria-hidden className="absolute inset-0 bg-noise" />

              <div className="relative flex flex-col items-center">
                <Eyebrow tone="gold">Condição Especial</Eyebrow>
                <h2 className="mt-6 max-w-xl text-balance font-display text-2xl font-extrabold uppercase leading-tight text-ink-50 sm:text-3xl lg:text-4xl">
                  TENHA ACESSO AO <span className="text-neon-400">{SITE.productName.toUpperCase()}</span>
                </h2>

                <div className="mt-9 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-ink-500 line-through decoration-2">
                      {PRICE.previous}
                    </span>
                    {DISCOUNT_PERCENT > 0 && (
                      <span className="rounded-full border border-gold-600/60 bg-gold-900/50 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-gold-300">
                        -{DISCOUNT_PERCENT}%
                      </span>
                    )}
                  </div>
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
