import { CardTotalContainer } from "./styles";

export function CardTotal({ cart, setCart }) {
  const TotalValue = cart.reduce((prev, next) => {
    return prev + next.price;
  }, 0);

  return (
    <CardTotalContainer>
      <div>
        <h2>Total</h2>
        <h4>R$ {TotalValue.toFixed(2)}</h4>
      </div>
      <button type="button" onClick={() => setCart([])}>
        Remover todos
      </button>
    </CardTotalContainer>
  );
}
