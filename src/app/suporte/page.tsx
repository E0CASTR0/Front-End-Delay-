import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Suporte",
  description: `Central de suporte do ${SITE.productName}.`,
};

export default function SuportePage() {
  return (
    <LegalPageLayout title="Suporte">
      <h2>Como recebo o material após a compra?</h2>
      <p>
        Após a confirmação do pagamento, o acesso ao {SITE.productName} é disponibilizado conforme o fluxo do
        checkout utilizado no momento da compra.
      </p>

      <h2>Ainda não recebi meu acesso</h2>
      <p>
        Verifique primeiro a caixa de spam/lixo eletrônico do e-mail usado na compra. Se o problema persistir,
        entre em contato informando o e-mail utilizado e a data da compra.
      </p>

      <h2>Problemas com o pagamento</h2>
      <p>
        Questões relacionadas diretamente ao processamento do pagamento (cobrança, reembolso, nota fiscal) são
        tratadas pelo checkout Cakto, responsável pela transação.
      </p>

      <h2>Outras dúvidas</h2>
      <p>
        Para qualquer outra dúvida, fale com a nossa equipe pela página de{" "}
        <a href="/contato" className="text-neon-400 underline underline-offset-2">
          Contato
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
