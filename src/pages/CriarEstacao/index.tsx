import { Header } from "../../components/Header";
import { useForm, Controller, FormState } from "react-hook-form";
import {
  Buttons,
  Card,
  CardAdicionar,
  Container,
  ContainerAtivos,
  ContainerDados,
  ContainerIdentificacao,
  ContainerImage,
  ContainerInfo,
  ContainerInfos,
  ContainerTexts,
  Content,
  ContrainerMae,
  Excluir,
  Frame142,
  Frame145,
  Frame190,
  Image,
  Line,
  List,
  MiniCard,
  TextCodigo,
  Title,
  TitleAdicionar,
} from "./styles";

import { Dropdown } from "../../components/DropDown";
import { EquipmentsStatusList } from "../../dtos/EquipamentoStatusDTO";
import quadrado from "../../assets/quadrado.png";
import { InputArea } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { CancelButton } from "../../components/CancelButton/CancelButton";
import { SaveButton } from "../../components/SaveButton";

type FormData = {
  identificacao: string;
  status: string;
  latitude: number;
  longitude: number;
  grafana: string;
  endereco: number;
};

export function CriarEstacao() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});
  return (
    <div>
      <Header />
      <Container>
        <ContrainerMae>
        <Title>Informações</Title>
        {/* card */}
        <ContainerInfo>

          {/* inputs */}
          <ContainerDados>
           
            <ContainerTexts>

              {/* 4inputs */}
              <ContainerIdentificacao>

                <ContainerInfos>
                  <Title>Identificação</Title>
                  <Controller
                    control={control}
                    name="identificacao"
                    rules={{ required: "Informe a identificação" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Cururupu"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </ContainerInfos>

                <ContainerInfos>
                  <Title>Status</Title>
                  <Controller
                    control={control}
                    name="status"
                    rules={{ required: "Selecione o status" }}
                    render={({ field: { onChange, value } }) => (
                      <Dropdown
                        options={EquipmentsStatusList}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </ContainerInfos>

                <ContainerInfos>
                  <Title>Latitude</Title>
                  <Controller
                    control={control}
                    name="latitude"
                    rules={{ required: "Informe a latitude" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="41.40338"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </ContainerInfos>

                <ContainerInfos>
                  <Title>Longitude</Title>
                  <Controller
                    control={control}
                    name="longitude"
                    rules={{ required: "Informe a latitude" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="2.17403"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </ContainerInfos>
              </ContainerIdentificacao>

              <ContainerInfos>
                <Title>Endereço</Title>
                <Controller
                  control={control}
                  name="endereco"
                  rules={{ required: "Informe o endereço" }}
                  render={({ field: { onChange, value } }) => (
                    <TextArea
                      placeholder="Rua teste. 220 - Bairro teste - Cururupu"
                      value={value}
                      onChange={onChange}
                      style={{ width: "33.5625rem", height: "7.4375rem" }}
                      multiline
                      rows={5}
                    />
                  )}
                />
              </ContainerInfos>

            </ContainerTexts>

            {/* div grafana */}
            <ContainerInfos>
              <Title>Grafana</Title>
              <Controller
                control={control}
                name="grafana"
                rules={{ required: "Informe o link do grafana" }}
                render={({ field: { onChange, value } }) => (
                  <TextArea
                    placeholder="https://grafana.com/"
                    value={value}
                    onChange={onChange}
                    style={{ width: "54.0625rem" }}
                  />
                )}
              />
            </ContainerInfos>

          </ContainerDados>






          <ContainerImage>
            <Image src={quadrado} alt="quadrado" />
          </ContainerImage>
        </ContainerInfo>
        
        <Title>Equipamentos</Title>

        <Content>
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
        
        <Buttons>

        <DeleteButton onClick={() => console.log('deletar')}/>
        <CancelButton onClick={() => console.log('cancelar')}/>
        <SaveButton onClick={() => console.log('salvar')}/>
        </Buttons>
        </Content>



        </ContrainerMae>
      </Container>
    </div>
  );
}
