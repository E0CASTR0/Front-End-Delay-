import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";

/**
 * Marca oficial da EQP R7 & BG7 — emblema original desenhado em SVG
 * (crista + coroa), sem depender de nenhuma foto/imagem de terceiros.
 *
 * Por que não usamos as fotos enviadas como logo: elas mostravam o
 * rosto do ator Al Pacino e uma composição com o nome "El Chapo"
 * (Joaquín Guzmán, uma pessoa real) — usar o rosto de um ator real ou
 * a identidade de um criminoso real como marca comercial não é algo
 * que este site pode publicar. Este emblema (crista + coroa dourada)
 * busca a mesma sensação de "donos/realeza" pedida, sem esse problema.
 *
 * Placeholder facilmente substituível: para usar a logo definitiva da
 * equipe, troque o conteúdo de `LogoMark` por um
 * <Image src="/logo/logo.svg" ... /> apontando para `public/logo/`.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 54" fill="none" className={className} aria-hidden="true">
      {/* coroa dourada */}
      <path
        d="M13,10 L13,5 L19,9 L24,2 L29,9 L35,5 L35,10 Z"
        fill="currentColor"
        className="text-gold-400"
      />
      <rect x="13" y="9.5" width="22" height="3" rx="1" fill="currentColor" className="text-gold-500" />

      {/* crista / emblema */}
      <path
        d="M14,14 L34,14 L44,24 L44,38 L24,50 L4,38 L4,24 Z"
        stroke="currentColor"
        strokeWidth="2"
        className="text-neon-500"
      />
      <path
        d="M17,18 L31,18 L38,25 L38,37 L24,45.5 L10,37 L10,25 Z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-neon-700"
      />
      <path d="M19,25 L32,32 L19,39 Z" fill="currentColor" className="text-neon-400" />
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
  const markSize = { sm: "h-9 w-8", md: "h-11 w-10", lg: "h-16 w-14" }[size];
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
          EQP R7 <span className="text-gold-400">&amp;</span> BG7
        </span>
        {withTagline && (
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
            {SITE.teamSlogan}
          </span>
        )}
      </span>
    </Link>
  );
}
