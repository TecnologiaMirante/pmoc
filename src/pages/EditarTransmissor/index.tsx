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
import { TransmissorDTO } from "../../dtos/lista-equipments";
import api from "../../api/api";
import { useEffect } from "react";


export function EditarTransmissor() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TransmissorDTO>();


  useEffect(() => {
  getAntena()  
  }, [])
  
  async function getAntena() {
    try {
      const res = await api.get('transmissor/1');
      reset({
        dados_gerais: {
          codigo: res.data.dados_gerais.codigo,
          marca: res.data.dados_gerais.marca,
          modelo: res.data.dados_gerais.modelo,
        },
        antena:res.data.antena,
        canal_fisico:res.data.canal_fisico,
        canal_virtual:res.data.canal_virtual,
        programmed_power:res.data.programmed_power,
        receptor:res.data.receptor,
        status: res.data.status,
        category: res.data.category,
      });
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitUpdate = async (data: TransmissorDTO) => {
    try {
      const res = await api.put('/transmissor/1', data);
      console.log('atualizou', res)
    } catch (error) {
      console.log('error ao atualizar', error)
    }
  };

  const onDelete = async() => {
    try {
      const res = await api.delete("/transmissor/1")
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
          <Title>Transmissor</Title>
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
                <Subtitle>Programmed power</Subtitle>
                  <Controller
                    control={control}
                    name="programmed_power"
                    rules={{ required: "Informe o Programmed power" }}
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
                <Subtitle>Antena</Subtitle>
                  <Controller
                    control={control}
                    name="antena"
                    rules={{ required: "Informe a antena" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Antena XX"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Form>
                <Form>
                <Subtitle>Canal virtual</Subtitle>
                  <Controller
                    control={control}
                    name="canal_virtual"
                    rules={{ required: "Informe o canal virtual" }}
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
                <Subtitle>Canal físico</Subtitle>
                  <Controller
                    control={control}
                    name="canal_fisico"
                    rules={{ required: "Informe o canal físico" }}
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
                <Subtitle>Receptor</Subtitle>
                  <Controller
                    control={control}
                    name="receptor"
                    rules={{ required: "Informe o receptor" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Receptor AAA"
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
    </div>
  );
}
