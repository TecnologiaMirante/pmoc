import {
  ContainerLocalizazao,
  ContainerNomeEstacao,
  EstacaoContainer,
  EstacaoImg,
  NomeEstacao,
  TextEndereco,
  TextLocalizacao,
} from "./styles";
import quadrado from "../../assets/quadrado.png";

export function CardEstacaoInfo() {
  return (
    <EstacaoContainer>
      <ContainerNomeEstacao>
        <NomeEstacao>Estação Cururupu</NomeEstacao>
        <EstacaoImg src={quadrado} alt="quadrado" />
      </ContainerNomeEstacao>
      <ContainerLocalizazao>
        <TextLocalizacao>Latitude: 41.40338</TextLocalizacao>
        <TextLocalizacao>Longitude: 2.17403</TextLocalizacao>
      </ContainerLocalizazao>
      <TextEndereco>
        Rua teste. 220 - Bairro teste - Cururupu, MA - 37560-252
      </TextEndereco>
    </EstacaoContainer>
  );
}
