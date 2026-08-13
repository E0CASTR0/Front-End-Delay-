import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de uso do ${SITE.productName}, produto digital da ${SITE.team}.`,
};

export default function TermosDeUsoPage() {
  return (
    <LegalPageLayout title="Termos de Uso" updatedAt="Agosto de 2026">
      <p>
        Estes Termos de Uso regulam a aquisição e utilização do {SITE.productName}, produto digital
        comercializado pela {SITE.team}. Ao efetuar a compra, você concorda com as condições descritas abaixo.
      </p>

      <h2>1. Natureza do produto</h2>
      <p>
        O {SITE.productName} é um e-book digital de caráter educacional sobre o conceito de Delay no futebol e o
        estudo do mercado esportivo. O material não constitui aconselhamento financeiro e não garante resultados,
        lucros ou desempenho de qualquer natureza.
      </p>

      <h2>2. Licença de uso</h2>
      <ul>
        <li>O acesso é pessoal e intransferível.</li>
        <li>É proibida a reprodução, revenda, distribuição ou compartilhamento do material sem autorização.</li>
        <li>Todo o conteúdo é protegido por direitos autorais.</li>
      </ul>

      <h2>3. Pagamento</h2>
      <p>
        O processamento do pagamento é realizado por um provedor de checkout terceirizado (Cakto). Este site não
        coleta nem armazena dados de cartão de crédito — essas informações são tratadas diretamente pelo processador
        de pagamento.
      </p>

      <h2>4. Direito de arrependimento</h2>
      <p>
        Nos termos do art. 49 do Código de Defesa do Consumidor, você tem até 7 (sete) dias corridos, a contar da
        confirmação da compra, para desistir da aquisição e solicitar o reembolso, sem necessidade de justificativa.
        A solicitação deve ser feita pelos canais informados na página de{" "}
        <a href="/contato" className="text-neon-400 underline underline-offset-2">
          Contato
        </a>
        .
      </p>

      <h2>5. Responsabilidade</h2>
      <p>
        O conteúdo tem finalidade exclusivamente educacional. O mercado de apostas esportivas envolve riscos
        financeiros. A decisão de participar desse mercado é de responsabilidade exclusiva do usuário, que deve
        agir com responsabilidade e dentro das regras aplicáveis em sua jurisdição. Produto destinado a maiores de
        18 anos.
      </p>

      <h2>6. Alterações</h2>
      <p>
        Estes Termos podem ser atualizados periodicamente. A versão vigente é sempre a publicada nesta página.
      </p>

      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas pelos canais descritos na página de{" "}
        <a href="/contato" className="text-neon-400 underline underline-offset-2">
          Contato
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
