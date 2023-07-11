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

export function CardAtivoAntena() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Antena:</Title>
            <CodAtivo>ANT 001</CodAtivo>
            <TitleEstacao>Estação Cururupu</TitleEstacao>
          </TitleElementos>
          <ContainerInfo>
            <DetalhesEquipamento>
              <Title>Marca</Title>
              <Subtitle>Marca X</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Modelo</Title>
              <Subtitle>Channel X</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Gain</Title>
              <Subtitle>21Ghz</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>fendas</Title>
              <Subtitle>20</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Tipo</Title>
              <Subtitle>Teste</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>VR</Title>
              <Subtitle>Teste</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Posição Torre</Title>
              <Subtitle>2.456787</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
        </InfoEquipamento>

        <Image src={quadrado} alt="quadrado" />
       </SuperContainer>

      </ContainerCard>
    </>
  );
}
