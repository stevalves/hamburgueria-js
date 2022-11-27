import { EmptyCartContainer } from "./styles";

export function CartEmpty() {
  return (
    <EmptyCartContainer>
      <h4>Sua sacola está vazia.</h4>
      <h5>Adicione itens</h5>
    </EmptyCartContainer>
  );
}
