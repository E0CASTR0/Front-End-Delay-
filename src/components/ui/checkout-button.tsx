import { CHECKOUT_URL } from "@/config/checkout";
import { Button, type ButtonProps } from "./button";

type CheckoutButtonProps = Omit<ButtonProps, "href" | "external">;

/**
 * Único componente que os CTAs de compra devem usar.
 *
 * Ele já aponta para `CHECKOUT_URL` (src/config/checkout.ts) e abre em
 * uma nova aba com rel="noopener noreferrer". Nenhum outro componente
 * deve escrever a URL do checkout manualmente — sempre importe e use
 * `<CheckoutButton>`.
 */
export function CheckoutButton(props: CheckoutButtonProps) {
  return <Button href={CHECKOUT_URL} external {...props} />;
}
