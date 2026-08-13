import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-neon-900/60 bg-grain-card p-6 shadow-card transition-all duration-300 sm:p-8",
        glow && "hover:-translate-y-1 hover:border-neon-500/60 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
