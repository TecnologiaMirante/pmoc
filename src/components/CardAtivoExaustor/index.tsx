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

export function CardAtivoExaustor() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Exaustor:</Title>
            <CodAtivo>EXA 001</CodAtivo>
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
              <Title>Status</Title>
              <Subtitle>Parado</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
        </InfoEquipamento>

        <Image src={quadrado} alt="quadrado" />
       </SuperContainer>

      </ContainerCard>
    </>
  );
}
