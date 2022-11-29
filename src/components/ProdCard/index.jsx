import { CardContainer } from "./styles";

export function Card({ valuer, setCart, cart, setToaster }) {
  function addToCart(item) {
    const newCart = [...cart, item];
    return cart.includes(item)
      ? setToaster(true)
      : setCart(newCart);
  }

  return (
    <CardContainer>
      <div>
        <img src={valuer.img} alt="" />
      </div>
      <div>
        <h2>{valuer.name}</h2>
        <h4>{valuer.category}</h4>
        <h3>R$ {valuer.price.toFixed(2)}</h3>
        <button type="button" onClick={(e) => addToCart(valuer)}>
          Adicionar
        </button>
      </div>
    </CardContainer>
  );
}
