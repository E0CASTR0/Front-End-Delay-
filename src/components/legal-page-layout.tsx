import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function LegalPageLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return (
    <main className="relative pb-28 pt-32 sm:pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-ink-50 sm:text-4xl">
          {title}
        </h1>
        {updatedAt && (
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
            Última atualização: {updatedAt}
          </p>
        )}
        <div className="mt-10 flex flex-col gap-6 text-sm leading-relaxed text-ink-300 [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-extrabold [&_h2]:uppercase [&_h2]:text-ink-50 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink-100 sm:text-base">
          {children}
        </div>
      </Container>
    </main>
  );
}
