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

export function CardAtivoTorre() {
  return (
    <>
      <ContainerCard>
       <SuperContainer>
       <InfoEquipamento>
          <TitleElementos>
            <Title>Torre:</Title>
            <CodAtivo>TOR001</CodAtivo>
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
              <Title>Tipo da estrutura</Title>
              <Subtitle>teste</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Altura</Title>
              <Subtitle>50m</Subtitle>
            </DetalhesEquipamento>
            <DetalhesEquipamento>
              <Title>Aterramento</Title>
              <Subtitle>Sim</Subtitle>
            </DetalhesEquipamento>
          </ContainerInfo>
        </InfoEquipamento>

        <Image src={quadrado} alt="quadrado" />
       </SuperContainer>

      </ContainerCard>
    </>
  );
}
