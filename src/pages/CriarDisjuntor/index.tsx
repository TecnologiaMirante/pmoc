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
import { DisjuntorDTO } from "../../dtos/lista-equipments";
import api from "../../api/api";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export function CriarDisjuntor() {
  const { token } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DisjuntorDTO>({
    defaultValues: {
      category: "ELETRICA",
    },
  });


  const onSubmit = async (data: DisjuntorDTO) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {  
      const res = await api.post(`/disjuntores`, {
        gerais:{
          codigo: data.gerais.codigo,
          marca: data.gerais.marca,
          modelo: data.gerais.modelo
        },
        status: data.status,
        corrente_maxima:data.corrente_maxima,
        category: data.category,
        tipoEquipamentoId:1
      }, { headers });
      console.log("deu certo", res.data);
    } catch (error) {
      console.log("Deu erro ao fazer post", error);
    }
  };

  const getTeste = async() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await api.get(`/disjuntores`, {
        headers
      })
      console.log(res.data)
    } catch (error) {
      console.log('error ao fazer get', error)
    }
  }

  getTeste()
  

  return (
    <div>
      <Header />
      <Container>
        <ContainerCenter>
          <Title>Disjuntor</Title>
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
                  <Subtitle>Corrente máxima</Subtitle>
                  <Controller
                    control={control}
                    name="corrente_maxima"
                    rules={{ required: "Informe a corrente" }}
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
                        placeholder="Elétrica"
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
