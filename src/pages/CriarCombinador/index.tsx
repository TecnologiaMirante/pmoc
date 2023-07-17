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
import { CombinadoDTO } from "../../dtos/lista-equipments";
import api from "../../api/api";


export function CriarCombinador() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CombinadoDTO>({
    defaultValues: {
      category:'IRRADIACAO'
    },
  });

  const onSubmit = async (data: CombinadoDTO) => {
    console.log(data);
    try {
      const res = await api.post('/combinador', data)
      console.log('deu certo', res)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <ContainerCenter>
          <Title>Combinador</Title>
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
            <CancelButton onClick={() => console.log("cancelar")} />
              <SaveButton onClick={handleSubmit(onSubmit)} />
            </Buttons>
          </Content>
        </ContainerCenter>
      </Container>
    </div>
  );
}
