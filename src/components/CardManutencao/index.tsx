import { Card, ContainerCard, Data, DataAtualizacao, EmpresaDiv, Image, Information, InformationLeft, LeftInformation, NomeEmpresa, NomeTecnico, RightInformation, Status, TecnicoDiv, TipoManutencao, TipoStatus, TitleDescricao, TitleEmpresa, TitleEndereco, TitleStatus, TitleTecnico, TitleTipoStatus } from "./styles";
import quadrado from "../../assets/quadrado.png";

export function CardManutencao(){
    return (
        <ContainerCard>
            <Card>
                <RightInformation>
                    <Image src={quadrado} alt="quadrado" />
                    <Information>
                        <TipoManutencao>Manutenção Preventiva</TipoManutencao>
                        <TitleEndereco>Rua teste, 220 - Bairro Teste - Cururupu, MA</TitleEndereco>
                        <TitleDescricao>Parabólica, Receptor, Ar-condicionado, DPS, Antena, Transmissor, Disjuntor</TitleDescricao>
                    </Information>
                </RightInformation>
                <LeftInformation>
                    <InformationLeft>
                        <Data>25/04/2023</Data>
                        <TecnicoDiv>
                            <TitleTecnico>Tecnico: </TitleTecnico>
                            <NomeTecnico>Ramon Maia</NomeTecnico>
                        </TecnicoDiv>
                        <EmpresaDiv>
                            <TitleEmpresa>Empresa: </TitleEmpresa>
                            <NomeEmpresa>TV Mirante</NomeEmpresa>
                        </EmpresaDiv>
                    </InformationLeft>
                    
                    <Status>
                        <TitleStatus>Ultima atualização:</TitleStatus>
                        <DataAtualizacao>25/04/2023 - 12:30</DataAtualizacao>
                        <TipoStatus>
                            <TitleTipoStatus>Realizado</TitleTipoStatus>
                        </TipoStatus>
                    </Status>

                </LeftInformation>
            </Card>
        </ContainerCard>
    );
}