import {
  CodAtivo,
  ContainerCard,
  SuperContainer,
  ContainerInfo,
  DetalhesEquipamento,
  Image,
  InfoEquipamento,
  Subtitle,
  Title,
  TitleElementos,
  TitleEstacao,
} from "./styles";
import quadrado from "../../assets/quadrado.png";

export function CardAtivoArCondicionado() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Ar-Condiconado:</Title>
            <CodAtivo>ARC001</CodAtivo>
            <TitleEstacao>Estação Cururupu</TitleEstacao>
          </TitleElementos>
          <ContainerInfo>
            <DetalhesEquipamento>
              <Title>Marca</Title>
              <Subtitle>Marca X</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Modelo</Title>
              <Subtitle>Modelo X</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Potencia</Title>
              <Subtitle>12.000 BTUs</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Tensão</Title>
              <Subtitle>220v</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
        </InfoEquipamento>
        <Image src={quadrado} alt="quadrado" />
       </SuperContainer>
      </ContainerCard>
    </>
  );
}
