import {
  Card,
  CardAdicionar,
  ContainerAtivos,
  Frame142,
  Frame145,
  Frame190,
  Line,
  MiniCard,
  List,
  TextCodigo,
  Title,
} from "./styles";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";

type Props = {
  setModalOpen: (isOpen: boolean) => void;
}

export function ListEquipamentos({ setModalOpen }: Props) {

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
                    <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
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
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
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
                 <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                 <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                 <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
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
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline onClick={() => setModalOpen(true)}/>
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
              </CardAdicionar>
            </List>
          </Frame190>
        </Frame142>
      </Frame145>
    </ContainerAtivos>
  );
}
