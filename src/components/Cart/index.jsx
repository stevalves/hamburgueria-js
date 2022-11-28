import { useEffect, useState } from "react";
import { CartEmpty } from "../CartEmpty";
import { CartList } from "../CartList";
import { CardTotal } from "../CartTotal";
import { CartContainer } from "./styles";

export function Cart({ dataCart, setCart, cart }) {
  const [inn, setInn] = useState();

  useEffect(() => {
    dataCart.length > 0 ? setInn(false) : setInn(true);
  }, [dataCart]);

  return (
    <CartContainer>
      <h3>Carrinho de compras</h3>
      {inn && <CartEmpty />}
      {!inn && (
        <>
          <CartList dataCart={dataCart} cart={cart} setCart={setCart} />
          <hr />
          <CardTotal cart={cart} setCart={setCart} />
        </>
      )}
    </CartContainer>
  );
}
