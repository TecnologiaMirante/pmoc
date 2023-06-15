import { EstacaoContainer, NomeEstacao } from "./styles";
import quadrado from '../../assets/quadrado.png';


export function CardEstacao() {
    return(
        <EstacaoContainer>
            <img src={quadrado} alt="quadrado"/>

            <NomeEstacao>Nova Estação</NomeEstacao>
        </EstacaoContainer>
    );
}