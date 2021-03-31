import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTables() {
    useEffect(() =>{
        api('transactions')
         .then(response => console.log(response.data))
    }, [])

    return (
     <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Salário Carol</td>
                        <td className="deposit">R$30.000,00</td>
                        <td>Pagamento</td>
                        <td>28/02/2021</td>
                    </tr>
                    <tr>
                        <td>Salário Gabriel</td>
                        <td className="deposit">R$1100,00</td>
                        <td>Pagamento</td>
                        <td>28/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$570,00</td>
                        <td>Despesa Fixa</td>
                        <td>05/03/2021</td>
                    </tr>
                </tbody>

            </table>
        </Container>
     
    )
}