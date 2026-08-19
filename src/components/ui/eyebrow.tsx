import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Etiqueta pequena de destaque (ex: "MÉTODO EXCLUSIVO"). */
export function Eyebrow({
  children,
  className,
  tone = "neon",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neon" | "gold" | "ink";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em]",
        tone === "neon" && "border-neon-700/70 bg-neon-950/50 text-neon-400",
        tone === "gold" && "border-gold-600/60 bg-gold-900/40 text-gold-300",
        tone === "ink" && "border-ink-700 bg-ink-900/60 text-ink-300",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rounded-full",
          tone === "neon" && "bg-neon-400 shadow-glow-xs",
          tone === "gold" && "bg-gold-400 shadow-glow-gold",
          tone === "ink" && "bg-ink-400"
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}
