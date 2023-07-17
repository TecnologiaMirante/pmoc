import { Header } from "../../components/Header";
import {
  Buttons,
  Card,
  Container,
  ContainerCenter,
  ContainerForms,
  Content,
  Form,
  Image,
  Subtitle,
  Title,
} from "./styles";
import quadrado from "../../assets/quadrado.png";
import { useForm, Controller, FormState } from "react-hook-form";
import { SaveButton } from "../../components/SaveButton";
import { CancelButton } from "../../components/CancelButton/CancelButton";
import { ErrorMessage } from "@hookform/error-message";
import { Dropdown } from "../../components/DropDown";
import { EquipmentsStatusList } from "../../dtos/EquipamentoStatusDTO";
import { InputArea } from "../../components/Input";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { ReceptorDTO } from "../../dtos/lista-equipments";
import api from "../../api/api";
import { useEffect } from "react";

export function EditarReceptor() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReceptorDTO>();

  useEffect(() => {
    getReceptor();
  }, []);

  async function getReceptor() {
    try {
      const res = await api.get("receptor/1");
      reset({
        gerais: {
          codigo: res.data.dados_gerais.codigo,
          marca: res.data.dados_gerais.marca,
          modelo: res.data.dados_gerais.modelo,
        },
        channel: res.data.channel,
        frequency: res.data.frequency,
        parabolica: res.data.parabolica,
        symbol_rate: res.data.symbol_rate,
        transmissor: res.data.transmissor,
        status: res.data.status,
        category: res.data.category,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitUpdate = async (data: ReceptorDTO) => {
    try {
      const res = await api.put("/receptor/1", data);
      console.log("atualizou", res);
    } catch (error) {
      console.log("error ao atualizar", error);
    }
  };

  const onDelete = async () => {
    try {
      const res = await api.delete("/receptor/1");
      console.log("deletou", res.data);
    } catch (error) {
      console.log("Error ao apagar", error);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <ContainerCenter>
          <Title>Receptor</Title>
          <Content>
            <Card>
              <ContainerForms>
                <Form>
                  <Subtitle>Código</Subtitle>
                  <Controller
                    control={control}
                    name="gerais.codigo"
                    rules={{ required: "Informe o código" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Digite o código"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Status</Subtitle>
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
                </Form>
                <Form>
                  <Subtitle>Marca</Subtitle>
                  <Controller
                    control={control}
                    name="gerais.marca"
                    rules={{ required: "Informe a marca" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Digite a marca"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Modelo</Subtitle>
                  <Controller
                    control={control}
                    name="gerais.modelo"
                    rules={{ required: "Informe o modelo" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Digite o modelo"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Channel</Subtitle>
                  <Controller
                    control={control}
                    name="channel"
                    rules={{ required: "Informe o channel" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="220"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Frequência</Subtitle>
                  <Controller
                    control={control}
                    name="frequency"
                    rules={{ required: "Informe a frequência" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="2131Ghz"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Transmissor</Subtitle>
                  <Controller
                    control={control}
                    name="transmissor"
                    rules={{ required: "Informe o transmissor" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="transmissor AAA"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Parabólica</Subtitle>
                  <Controller
                    control={control}
                    name="symbol_rate"
                    rules={{ required: "Informe o symbol rate" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Parabólica XX"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Symbol rate</Subtitle>
                  <Controller
                    control={control}
                    name="symbol_rate"
                    rules={{ required: "Informe o symbol rate" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="220"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                  <Subtitle>Categoria</Subtitle>
                  <Controller
                    control={control}
                    name="category"
                    rules={{ required: "Informe a categoria" }}
                    render={({ field: { value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Irradiação"
                        value={value}
                      />
                    )}
                  />
                </Form>
              </ContainerForms>
              <Image src={quadrado} alt="quadrado" />
            </Card>
            <Buttons>
              <DeleteButton onClick={handleSubmit(onDelete)} />
              <CancelButton onClick={() => console.log("cancelar")} />
              <SaveButton onClick={handleSubmit(onSubmitUpdate)} />
            </Buttons>
          </Content>
        </ContainerCenter>
      </Container>
    </div>
  );
}
