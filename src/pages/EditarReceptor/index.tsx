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

type FormData = {
  codigo: string;
  marca: string;
  modelo: string;
  status: string;
  channel: number;
  frequency: number;
  symbol_rate: number;
  transmissor: string;
  parabolica: string;
  category: string;
};

export function EditarReceptor() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      category:"Irradiação"
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
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
                    name="codigo"
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
                    name="marca"
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
                    name="modelo"
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
              <DeleteButton onClick={() => console.log("excluir")}/>
              <CancelButton onClick={() => console.log("cancelar")} />
              <SaveButton onClick={() => console.log("salvou")} />
            </Buttons>
          </Content>
        </ContainerCenter>
      </Container>
    </div>
  );
}
