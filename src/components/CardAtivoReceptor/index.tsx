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

export function CardAtivoReceptor() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Receptor:</Title>
            <CodAtivo>RECP 001</CodAtivo>
            <TitleEstacao>Estação Cururupu</TitleEstacao>
          </TitleElementos>
          <ContainerInfo>
            <DetalhesEquipamento>
              <Title>Marca</Title>
              <Subtitle>Marca X</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Channel</Title>
              <Subtitle>Channel X</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>frequência</Title>
              <Subtitle>21Ghz</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Symbol Rate</Title>
              <Subtitle>220</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Transmissor</Title>
              <Subtitle>Teste</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Parabólica</Title>
              <Subtitle>Teste</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
        </InfoEquipamento>

        <Image src={quadrado} alt="quadrado" />
       </SuperContainer>

      </ContainerCard>
    </>
  );
}
