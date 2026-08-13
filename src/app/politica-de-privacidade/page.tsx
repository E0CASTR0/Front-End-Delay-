import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do ${SITE.productName}, produto digital da ${SITE.team}.`,
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPageLayout title="Política de Privacidade" updatedAt="Agosto de 2026">
      <p>
        Esta Política de Privacidade explica como a {SITE.team} trata as informações relacionadas à compra do{" "}
        {SITE.productName}, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
      </p>

      <h2>1. Dados coletados</h2>
      <p>
        No momento da compra, dados como nome, e-mail e informações de pagamento são coletados diretamente pelo
        processador de checkout (Cakto), responsável pelo processamento seguro da transação. Este site não
        armazena dados de cartão de crédito.
      </p>

      <h2>2. Uso das informações</h2>
      <p>
        As informações fornecidas são utilizadas exclusivamente para processar a compra, liberar o acesso ao
        material digital e prestar suporte quando solicitado.
      </p>

      <h2>3. Compartilhamento com terceiros</h2>
      <p>
        Os dados de pagamento são compartilhados apenas com o processador de checkout responsável pela transação.
        Não vendemos nem compartilhamos dados pessoais com terceiros para fins de marketing.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Esta landing page não utiliza cookies de rastreamento ou ferramentas de analytics de terceiros.
      </p>

      <h2>5. Seus direitos</h2>
      <p>Nos termos da LGPD, você pode solicitar, a qualquer momento:</p>
      <ul>
        <li>Confirmação da existência de tratamento de dados;</li>
        <li>Acesso, correção ou atualização dos seus dados;</li>
        <li>Exclusão dos dados pessoais, quando aplicável.</li>
      </ul>
      <p>
        Solicitações podem ser feitas pelos canais descritos na página de{" "}
        <a href="/contato" className="text-neon-400 underline underline-offset-2">
          Contato
        </a>
        .
      </p>

      <h2>6. Segurança</h2>
      <p>
        Adotamos medidas razoáveis para proteger as informações tratadas, incluindo a delegação do processamento de
        pagamento a um provedor especializado e seguro.
      </p>

      <h2>7. Alterações</h2>
      <p>Esta política pode ser atualizada periodicamente. A versão vigente é sempre a publicada nesta página.</p>
    </LegalPageLayout>
  );
}
