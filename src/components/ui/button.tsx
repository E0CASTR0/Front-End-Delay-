import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: boolean;
  external?: boolean;
  onClick?: () => void;
}

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full font-display font-extrabold uppercase tracking-wide transition-all duration-300 ease-out focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-500 text-ink-950 shadow-glow hover:-translate-y-0.5 hover:bg-neon-400 hover:shadow-glow-lg active:translate-y-0 active:shadow-glow-sm",
  secondary:
    "border-2 border-neon-600/70 bg-neon-950/30 text-neon-300 backdrop-blur hover:-translate-y-0.5 hover:border-neon-400 hover:bg-neon-500 hover:text-ink-950 hover:shadow-glow",
  ghost: "text-ink-100 hover:text-neon-400",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-xs sm:text-sm",
  lg: "px-9 py-5 text-sm sm:text-base",
};

function Shine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine"
    />
  );
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  icon = true,
  external,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
        {icon && (
          <ArrowRight
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        )}
      </span>
      {variant !== "ghost" && <Shine />}
    </>
  );

  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {inner}
    </Link>
  );
}
