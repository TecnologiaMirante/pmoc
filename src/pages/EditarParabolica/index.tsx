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
import { ParabolicaDTO } from "../../dtos/lista-equipments";
import api from "../../api/api";
import { useEffect } from "react";


export function EditarParabolica() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ParabolicaDTO>();

  useEffect(() => {
    getParabolica()  
    }, [])
    
    async function getParabolica() {
      try {
        const res = await api.get('parabolica/1');
        reset({
          dados_gerais: {
            codigo: res.data.dados_gerais.codigo,
            marca: res.data.dados_gerais.marca,
            modelo: res.data.dados_gerais.modelo,
          },
          diametro:res.data.diametro,
          receptor:res.data.receptor,
          satelite:res.data.satelite,
          status: res.data.status,
          category: res.data.category,
        });
      } catch (error) {
        console.log(error)
      }
    }
  
    const onSubmitUpdate = async (data: ParabolicaDTO) => {
      try {
        const res = await api.put('/parabolica/1', data);
        console.log('atualizou', res)
      } catch (error) {
        console.log('error ao atualizar', error)
      }
    };
  
    const onDelete = async() => {
      try {
        const res = await api.delete("/parabolica/1")
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
          <Title>Parabólica</Title>
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
                  <Subtitle>Diametro</Subtitle>
                  <Controller
                    control={control}
                    name="diametro"
                    rules={{ required: "Informe o diametro" }}
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
                  <Subtitle>Satélite</Subtitle>
                  <Controller
                    control={control}
                    name="satelite"
                    rules={{ required: "Informe o satélite" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Sat. AAA"
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
                        placeholder="Irradição"
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
