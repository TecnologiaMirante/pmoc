import { Header } from "../../components/Header";
import {
  Box,
  ContainerBox,
  ContainerDasEscolhas,
  ContainerDasEscolhasIrradiacao,
  ContainerEletrica,
  ContainerIrradiacao,
  ContainerMae,
  ContainerPai,
  ContainerRefrigeracao,
  SubTitle,
  Title,
} from "./styles";

export function CriarAtivo() {
  return (
    <div>
      <Header />
      <ContainerPai>
        <ContainerMae>
          <Title>Tipo de equipamento</Title>
          <ContainerBox>
            <ContainerEletrica>
              <Title>Elétrica</Title>
              <ContainerDasEscolhas>
                <Box>
                  <SubTitle>Disjuntor</SubTitle>
                </Box>

                <Box>
                  <SubTitle>DPS</SubTitle>
                </Box>

                <Box>
                  <SubTitle>Nobreak</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerEletrica>

            <ContainerRefrigeracao>
              <Title>Refrigeração</Title>
              <ContainerDasEscolhas>
                <Box>
                  <SubTitle>Arcondicionado</SubTitle>
                </Box>

                <Box>
                  <SubTitle>Exasutor</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerRefrigeracao>

            <ContainerIrradiacao>
              <Title>Irradiação</Title>

              <ContainerDasEscolhasIrradiacao>
                <Box>
                  <SubTitle>Antena</SubTitle>
                </Box>

                <Box>
                  <SubTitle>Cabo</SubTitle>
                </Box>
                <Box>
                  <SubTitle>Combinador</SubTitle>
                </Box>
                <Box>
                  <SubTitle>Parabólica</SubTitle>
                </Box>
                <Box>
                  <SubTitle>Receptor</SubTitle>
                </Box>
                <Box>
                  <SubTitle>Torre</SubTitle>
                </Box>
                <Box>
                  <SubTitle>Transmissor</SubTitle>
                </Box>
              </ContainerDasEscolhasIrradiacao>
            </ContainerIrradiacao>

            <ContainerRefrigeracao>
              <Title>Telemetria</Title>
              <ContainerDasEscolhas>
                <Box>
                  <SubTitle>Telemetria</SubTitle>
                </Box>

                <Box>
                  <SubTitle>Switch</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerRefrigeracao>
          </ContainerBox>
        </ContainerMae>
      </ContainerPai>
    </div>
  );
}
