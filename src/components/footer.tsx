import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { Disclaimer } from "@/components/ui/disclaimer";
import { FOOTER_LINKS, SITE } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neon-950/80 bg-bg-elevated pb-28 pt-16 lg:pb-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo size="md" withTagline />
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Links institucionais">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wide text-ink-400 transition-colors hover:text-neon-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div aria-hidden className="h-px w-full bg-gradient-to-r from-neon-900/60 via-neon-900/20 to-transparent" />

        <div className="flex flex-col gap-4">
          <Disclaimer full />
          <p className="text-xs text-ink-600">
            © {year} {SITE.team}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
