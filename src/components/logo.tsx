import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";

/**
 * Marca oficial da EQP R7 & BG7 — emblema geométrico original desenhado
 * em SVG (nenhuma imagem/foto de terceiros é usada).
 *
 * Este é um placeholder de marca profissional e facilmente substituível:
 * para usar a logo definitiva da equipe, troque o conteúdo de
 * `LogoMark` por um <Image src="/logo/logo.svg" ... /> apontando para
 * o arquivo em `public/logo/`.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 2.5 44.5 12.75v22.5L24 45.5 3.5 35.25v-22.5Z"
        stroke="currentColor"
        strokeWidth="2"
        className="text-neon-500"
      />
      <path
        d="M24 9.5 38 16.25v15.5L24 38.5 10 31.75v-15.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-neon-700"
      />
      <path d="M19.5 16.5 32 24l-12.5 7.5Z" fill="currentColor" className="text-neon-400" />
    </svg>
  );
}

export function Logo({
  withTagline = false,
  className,
  size = "md",
}: {
  withTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const markSize = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-14 w-14" }[size];
  const textSize = { sm: "text-sm", md: "text-base", lg: "text-xl" }[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${SITE.team} — página inicial`}
    >
      <LogoMark
        className={cn(
          markSize,
          "shrink-0 drop-shadow-[0_0_10px_rgba(43,255,119,0.35)] transition-transform duration-300 group-hover:scale-105"
        )}
      />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display font-extrabold uppercase tracking-tight text-ink-50", textSize)}>
          EQP R7 <span className="text-neon-400">&amp;</span> BG7
        </span>
        {withTagline && (
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-neon-500">
            {SITE.teamSlogan}
          </span>
        )}
      </span>
    </Link>
  );
}
