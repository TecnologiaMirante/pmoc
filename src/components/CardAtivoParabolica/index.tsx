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

export function CardAtivoParabolica() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Parabólica:</Title>
            <CodAtivo>PAR 001</CodAtivo>
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
              <Title>Diametro</Title>
              <Subtitle>123</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Satélite</Title>
              <Subtitle>Mirante</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Receptor</Title>
              <Subtitle>Teste</Subtitle>
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
