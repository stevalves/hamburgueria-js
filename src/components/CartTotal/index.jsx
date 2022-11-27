import { CardTotalContainer } from "./styles";

export function CardTotal() {
    return (
        <CardTotalContainer>
            <div>
                <h2>Total</h2>
                <h4>R$ 00.00</h4>
            </div>
            <button>Remover todos</button>
        </CardTotalContainer>
    )
}