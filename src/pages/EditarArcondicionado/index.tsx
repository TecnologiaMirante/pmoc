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
import { ArCondionadoDTO } from "../../dtos/lista-equipments";
import { useEffect } from "react";
import api from "../../api/api";


export function EditarArcondicionado() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ArCondionadoDTO>();

  useEffect(() => {
    getAntena()  
    }, [])
    
    async function getAntena() {
      try {
        const res = await api.get('antena/1');
        reset({
          dados_gerais: {
            codigo: res.data.dados_gerais.codigo,
            marca: res.data.dados_gerais.marca,
            modelo: res.data.dados_gerais.modelo,
          },
          potencia: res.data.posicao_torre,
          status: res.data.status,
          tensao:res.data.tensao,
          category: res.data.category,
        });
      } catch (error) {
        console.log(error)
      }
    }
  
    const onSubmitUpdate = async (data: ArCondionadoDTO) => {
      try {
        const res = await api.put('/antena/1', data);
        console.log('atualizou', res)
      } catch (error) {
        console.log('error ao atualizar', error)
      }
    };
  
    const onDelete = async() => {
      try {
        const res = await api.delete("/antena/1")
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
          <Title>Ar-condicionado</Title>
          <Content>
            <Card>
              <ContainerForms>
                <Form>
                <Subtitle>Código</Subtitle>
                  <Controller
                    control={control}
                    name="dados_gerais.codigo"
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
                    name="dados_gerais.marca"
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
                    name="dados_gerais.modelo"
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
                <Subtitle>Potência</Subtitle>
                  <Controller
                    control={control}
                    name="potencia"
                    rules={{ required: "Informe a potência" }}
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
                <Subtitle>Tensão</Subtitle>
                  <Controller
                    control={control}
                    name="tensao"
                    rules={{ required: "Informe a tensão do equipamento" }}
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
                    render={({ field: { value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Refrigeração"
                        value={value}
                      />
                    )}
                  />
                </Form>
              </ContainerForms>
              <Image src={quadrado} alt="quadrado" />
            </Card>
            <Buttons>
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
