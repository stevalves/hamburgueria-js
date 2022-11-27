import { Card } from "../ProdCard";
import { ProdList } from "./styles";

export function List({dataList}) {
    return (
        <ProdList>
            {dataList.map((value) => <Card value={value}  key={value.id}/>)}
        </ProdList>
    )
}