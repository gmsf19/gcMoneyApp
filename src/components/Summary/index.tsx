import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg"
import OutComeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"

export function Summary (){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>R$31.100,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutComeImg} alt="Saídas" />
                </header>
                <strong>-R$570,00</strong>
            </div>
            <div className="highligth-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$30.530,00</strong>
            </div>
        </Container>
    )
}    