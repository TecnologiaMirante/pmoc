import { List } from "phosphor-react";
import { Card, CardAdicionar, ContainerAtivos, Excluir, Frame142, Frame145, Frame190, Line, MiniCard, TextCodigo, Title, TitleAdicionar } from "./styles";

export function ListEquipamentos() {
    return (
        <ContainerAtivos>
        <Frame145>
          {/* Elétrica */}
          <Frame142>
            <Frame190>
              <Title>Elétrica</Title>
              <List>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <CardAdicionar onClick={() => console.log('clicou')}>
                  <TitleAdicionar>+</TitleAdicionar>
                </CardAdicionar>
              </List>
            </Frame190>
            <Line />
          </Frame142>
          {/* Refrigeração */}
          <Frame142>
            <Frame190>
              <Title>Refrigeração</Title>
              <List>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <CardAdicionar onClick={() => console.log('clicou')}>
                  <TitleAdicionar>+</TitleAdicionar>
                </CardAdicionar>
              </List>
            </Frame190>
            <Line />
          </Frame142>
          {/* Irradiação */}
          <Frame142>
            <Frame190>
              <Title>Irradição</Title>
              <List>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <CardAdicionar onClick={() => console.log('clicou')}>
                  <TitleAdicionar>+</TitleAdicionar>
                </CardAdicionar>
              </List>
            </Frame190>
            <Line />
          </Frame142>
          {/* Telemetria */}
          <Frame142>
            <Frame190>
              <Title>Telemetria</Title>
              <List>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <MiniCard>
                  <Card>
                    <TextCodigo>Cod</TextCodigo>
                    <Title>Equipamento</Title>
                    <Excluir>X</Excluir>
                  </Card>
                </MiniCard>
                <CardAdicionar onClick={() => console.log('clicou')}>
                  <TitleAdicionar>+</TitleAdicionar>
                </CardAdicionar>
              </List>
            </Frame190>
          </Frame142>
        </Frame145>
      </ContainerAtivos>
    );
}