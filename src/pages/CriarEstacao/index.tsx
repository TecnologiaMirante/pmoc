import { Header } from "../../components/Header";
import { useForm, Controller, FormState } from "react-hook-form";
import {
  Container,
  ContainerDados,
  ContainerIdentificacao,
  ContainerImage,
  ContainerInfo,
  ContainerInfos,
  ContainerTexts,
  ContrainerMae,
  Image,
  Title,
} from "./styles";

import { Dropdown } from "../../components/DropDown";
import { EquipmentsStatusList } from "../../dtos/EquipamentoStatusDTO";
import quadrado from "../../assets/quadrado.png";
import { InputArea } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

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



        </ContrainerMae>
      </Container>
    </div>
  );
}
