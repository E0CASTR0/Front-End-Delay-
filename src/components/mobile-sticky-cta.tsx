"use client";

import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { PRICE } from "@/config/checkout";
import { cn } from "@/lib/utils";

/**
 * CTA fixo na parte inferior da tela, apenas no mobile. Some
 * automaticamente quando a seção de Oferta (id="oferta") está visível,
 * já que ali existe um CTA gigante próprio.
 */
export function MobileStickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("oferta");
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => setHidden(entry?.isIntersecting ?? false), {
      rootMargin: "-15% 0px -15% 0px",
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-neon-900/70 bg-bg/95 px-4 py-3 backdrop-blur-lg transition-transform duration-300 ease-out lg:hidden",
        hidden ? "translate-y-full" : "translate-y-0"
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CheckoutButton size="md" className="w-full" icon={false}>
        Adquira o Método — {PRICE.current}
      </CheckoutButton>
    </div>
  );
}
