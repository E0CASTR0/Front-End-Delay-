import { RESPONSIBLE_NOTICE_FULL, RESPONSIBLE_NOTICE_SHORT } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Aviso de responsabilidade (18+ / riscos do mercado de apostas).
 * Reutilizado em Hero, Oferta e Footer — nunca como elemento principal.
 */
export function Disclaimer({
  full = false,
  className,
}: {
  full?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("text-[11px] leading-relaxed text-ink-500", className)}>
      {full ? RESPONSIBLE_NOTICE_FULL : RESPONSIBLE_NOTICE_SHORT}
    </p>
  );
}
