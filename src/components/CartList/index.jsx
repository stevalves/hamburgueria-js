import { CartCard } from "../CartCard";
import { CartListContainer } from "./styles";

export function CartList({ dataCart, cart, setCart }) {
  return (
    <CartListContainer>
      {dataCart.map((value, index) => (
        <CartCard
          value={value}
          key={value.id * 0.555}
          id={index}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </CartListContainer>
  );
}
