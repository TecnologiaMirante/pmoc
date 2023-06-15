import { EstacaoContainer, NomeTag, TextMarcaModelo,  } from "./styles";
import quadrado from '../../assets/quadrado.png';


export function CardEquipamento() {
    return(
        <EstacaoContainer>
            <img src={quadrado} alt="quadrado"/>

           <NomeTag>Tag</NomeTag>

            <TextMarcaModelo>Marca - Modelo</TextMarcaModelo>

        </EstacaoContainer>
    );
}