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
import { InputArea } from "../../components/Input";
import quadrado from "../../assets/quadrado.png";
import { useForm, Controller, FormState } from "react-hook-form";
import { SaveButton } from "../../components/SaveButton";
import { CancelButton } from "../../components/CancelButton/CancelButton";
import { ErrorMessage } from "@hookform/error-message";
import { Dropdown } from "../../components/DropDown";
import { EquipmentsStatusList } from "../../dtos/EquipamentoStatusDTO";
import { TipoAntenaList } from "../../dtos/TipoAntenaDTO";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { AntenaDTO } from "../../dtos/lista-equipments";
import { useEffect } from "react";
import api from "../../api/api";



export function EditarAntena() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AntenaDTO>();


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
        posicao_torre: res.data.posicao_torre,
        vr: res.data.vr,
        tipo: res.data.tipo,
        status: res.data.status,
        gain: res.data.gain,
        fendas: res.data.fendas,
        category: res.data.category,
      });
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitUpdate = async (data: AntenaDTO) => {
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
    <>
      <Header />
      <Container>
        <ContainerCenter>
          <Title>Antena</Title>

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
                  <Subtitle>Gain</Subtitle>
                  <Controller
                    control={control}
                    name="gain"
                    rules={{ required: "Informe o gain" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Digite o tipo"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>

                <Form>
                  <Subtitle>Fendas</Subtitle>
                  <Controller
                    control={control}
                    name="fendas"
                    rules={{ required: "Informe a fenda" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="123"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>

                <Form>
                  <Subtitle>Tipo</Subtitle>
                  <Controller
                    control={control}
                    name="tipo"
                    rules={{ required: "Selecione o tipo" }}
                    render={({ field: { onChange, value } }) => (
                      <Dropdown
                        options={TipoAntenaList}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>

                <Form>
                  <Subtitle>VR</Subtitle>
                  <Controller
                    control={control}
                    name="vr"
                    rules={{ required: "Informe o VR" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="VR XX"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>

                <Form>
                  <Subtitle>Posição torre</Subtitle>
                  <Controller
                    control={control}
                    name="posicao_torre"
                    rules={{ required: "Informe a posição da torre" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="number"
                        placeholder="230"
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
              <DeleteButton onClick={handleSubmit(onDelete)}/>
              <CancelButton onClick={() => console.log("cancelar")} />
              <SaveButton onClick={handleSubmit(onSubmitUpdate)} />
            </Buttons>
          </Content>
        </ContainerCenter>
      </Container>
    </>
  );
}
