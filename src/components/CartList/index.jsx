import { CartCard } from "../CartCard";
import { CartListContainer } from "./styles";

export function CartList({dataCart}) {
    return (
      <CartListContainer>
        {dataCart.map((value) => <CartCard value={value} key={value.id * 0.555}/>)}
      </CartListContainer>
    )
}