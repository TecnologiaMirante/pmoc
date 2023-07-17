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
import { useEffect } from "react";
import { NobreakDTO } from "../../dtos/lista-equipments";
import api from "../../api/api";



export function EditarNobreak() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NobreakDTO>();


  useEffect(() => {
  getNobreak()  
  }, [])
  
  async function getNobreak() {
    try {
      const res = await api.get('nobreak/1');
      reset({
        gerais: {
          codigo: res.data.dados_gerais.codigo,
          marca: res.data.dados_gerais.marca,
          modelo: res.data.dados_gerais.modelo,
        },
        status: res.data.status,
        tensao_entrada:res.data.tensao_entrada,
        tensao_saida:res.data.tensao_saida,
        category: res.data.category,
      });
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitUpdate = async (data: NobreakDTO) => {
    try {
      const res = await api.put('/nobreak/1', data);
      console.log('atualizou', res)
    } catch (error) {
      console.log('error ao atualizar', error)
    }
  };

  const onDelete = async() => {
    try {
      const res = await api.delete("/nobreak/1")
      console.log('deletou', res.data)
    } catch (error) {
      console.log('Error ao apagar', error)
    }
  }

  return (
    <div>
      <Header />
      <Container>
      <ContainerCenter>
        <Title>Nobreak</Title>
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
              <Subtitle>Tensão entrada</Subtitle>
                  <Controller
                    control={control}
                    name="tensao_entrada"
                    rules={{ required: "Informe a tensão de entrada" }}
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
              <Subtitle>Tensão Saída</Subtitle>
                  <Controller
                    control={control}
                    name="tensao_saida"
                    rules={{ required: "Informe a tensão de saida" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="110"
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
            <DeleteButton onClick={() => console.log("excluir")}/>
            <DeleteButton onClick={handleSubmit(onDelete)}/>
              <CancelButton onClick={() => console.log("cancelar")} />
              <SaveButton onClick={handleSubmit(onSubmitUpdate)} />
            </Buttons>
        </Content>
      </ContainerCenter>
      </Container>
    </div>
  );
}
