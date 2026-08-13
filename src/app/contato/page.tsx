import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a equipe ${SITE.team} sobre o ${SITE.productName}.`,
};

export default function ContatoPage() {
  return (
    <LegalPageLayout title="Contato">
      <p>
        Tem dúvidas sobre o {SITE.productName} antes ou depois da compra? Fale com a nossa equipe pelo canal abaixo.
      </p>

      <a
        href={`mailto:${SITE.supportEmail}`}
        className="group flex w-fit items-center gap-3 rounded-2xl border border-neon-800/70 bg-surface px-6 py-4 text-ink-50 transition-colors hover:border-neon-500"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-950/50 text-neon-400">
          <Mail className="h-4 w-4" aria-hidden />
        </span>
        <span className="font-semibold">{SITE.supportEmail}</span>
      </a>

      <p className="text-sm text-ink-400">
        Procurando ajuda com um acesso já adquirido? Veja também a página de{" "}
        <a href="/suporte" className="text-neon-400 underline underline-offset-2">
          Suporte
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
