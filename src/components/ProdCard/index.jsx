import { CardContainer } from "./styles";

export function Card({ value }) {
  return (
    <CardContainer>
      <div>
        <img src={value.img} alt="" />
      </div>
      <div>
        <h2>{value.name}</h2>
        <h4>{value.category}</h4>
        <h3>R$ {value.price.toFixed(2)}</h3>
        <button>Adicionar</button>
      </div>
    </CardContainer>
  );
}
