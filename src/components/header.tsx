"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { CheckoutButton } from "@/components/ui/checkout-button";
import { NAV_LINKS } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-neon-900/50 bg-bg/85 backdrop-blur-lg" : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-neon-500/60 to-transparent opacity-70"
      />

      <Container className="flex h-[68px] items-center justify-between sm:h-20">
        <Logo size="sm" className="sm:hidden" />
        <Logo size="md" className="hidden sm:inline-flex" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-wide text-ink-300 transition-colors hover:text-neon-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CheckoutButton size="sm" icon={false}>
            Adquira já o Método
          </CheckoutButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neon-900/60 text-ink-100 transition-colors hover:border-neon-500 hover:text-neon-400 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-neon-900/50 bg-bg/98 backdrop-blur-lg transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open
            ? "max-h-[100dvh] min-h-[calc(100dvh-4.25rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-wide text-ink-200 transition-colors hover:bg-neon-950/40 hover:text-neon-400"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3">
            <CheckoutButton className="w-full" onClick={() => setOpen(false)}>
              Adquira já o Método
            </CheckoutButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
