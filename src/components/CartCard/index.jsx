import { CartCardContainer } from "./styles";

export function CartCard({ value, id, cart, setCart }) {
  function removeFromCart() {
    const newCart = [...cart];
    newCart.splice(id, 1);
    setCart(newCart);
  }

  return (
    <CartCardContainer>
      <div>
        <img src={value.img} alt="" />
      </div>
      <div>
        <h2>{value.name}</h2>
        <h3>{value.category}</h3>
      </div>
      <button type="button" onClick={removeFromCart}>
        Remover
      </button>
    </CartCardContainer>
  );
}
