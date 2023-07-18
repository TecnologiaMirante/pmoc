import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

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
                <Box onClick={() => handleNavigate("/criarDisjuntor")}>
                  <SubTitle>Disjuntor</SubTitle>
                </Box>

                <Box onClick={() => handleNavigate("/criarDPS")}>
                  <SubTitle>DPS</SubTitle>
                </Box>

                <Box onClick={() => handleNavigate("/criarNobreak")}>
                  <SubTitle>Nobreak</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerEletrica>

            <ContainerRefrigeracao>
              <Title>Refrigeração</Title>
              <ContainerDasEscolhas>
                <Box onClick={() => handleNavigate("/criarArcondicionado")}>
                  <SubTitle>Arcondicionado</SubTitle>
                </Box>

                <Box onClick={() => handleNavigate("/criarExaustor")}>
                  <SubTitle>Exaustor</SubTitle>
                </Box>
              </ContainerDasEscolhas>
            </ContainerRefrigeracao>

            <ContainerIrradiacao>
              <Title>Irradiação</Title>

              <ContainerDasEscolhasIrradiacao>
                <Box onClick={() => handleNavigate("/criarAntena")}>
                  <SubTitle>Antena</SubTitle>
                </Box>

                <Box onClick={() => handleNavigate("/criarCabo")}>
                  <SubTitle>Cabo</SubTitle>
                </Box>
                <Box onClick={() => handleNavigate("/criarCombinador")}>
                  <SubTitle>Combinador</SubTitle>
                </Box>
                <Box onClick={() => handleNavigate("/criarParabolica")}>
                  <SubTitle>Parabólica</SubTitle>
                </Box>
                <Box onClick={() => handleNavigate("/criarReceptor")}>
                  <SubTitle>Receptor</SubTitle>
                </Box>
                <Box onClick={() => handleNavigate("/criarTorre")}>
                  <SubTitle>Torre</SubTitle>
                </Box>
                <Box onClick={() => handleNavigate("/criarTransmissor")}>
                  <SubTitle>Transmissor</SubTitle>
                </Box>
              </ContainerDasEscolhasIrradiacao>
            </ContainerIrradiacao>

            <ContainerRefrigeracao>
              <Title>Telemetria</Title>
              <ContainerDasEscolhas>
                <Box onClick={() => handleNavigate("/criarTelemetria")}>
                  <SubTitle>Telemetria</SubTitle>
                </Box>

                <Box onClick={() => handleNavigate("/criarSwitch")}>
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
