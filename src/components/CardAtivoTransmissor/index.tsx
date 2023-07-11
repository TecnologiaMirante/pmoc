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

export function CardAtivoTransmissor() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Transmissor:</Title>
            <CodAtivo>TRANS001</CodAtivo>
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
              <Subtitle>123</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Canal físico</Title>
              <Subtitle>10</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Canal virtual</Title>
              <Subtitle>05</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Receptor</Title>
              <Subtitle>Atlas</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Antena</Title>
              <Subtitle>Hein</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Programmed power</Title>
              <Subtitle>555V</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
        </InfoEquipamento>

        <Image src={quadrado} alt="quadrado" />
       </SuperContainer>

      </ContainerCard>
    </>
  );
}
