import { Card } from "../ProdCard";
import { ProdList } from "./styles";

export function List({ dataList, setCart, cart }) {
  return (
    <ProdList>
      {dataList.map((value) => (
        <Card valuer={value} setCart={setCart} cart={cart} key={value.id} />
      ))}
    </ProdList>
  );
}
