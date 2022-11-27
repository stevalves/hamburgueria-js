import { CartCardContainer } from "./styles";

export function CartCard({ value }) {
  return (
    <CartCardContainer>
      <div>
        <img src={value.img} alt="" />
      </div>
      <div>
        <h2>{value.name}</h2>
        <h3>{value.category}</h3>
      </div>
      <button>Remover</button>
    </CartCardContainer>
  );
}
