import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-500/15 text-neon-400 ring-1 ring-neon-500/40">
        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
      </span>
      <span className="text-base text-ink-100 sm:text-lg">{children}</span>
    </li>
  );
}
