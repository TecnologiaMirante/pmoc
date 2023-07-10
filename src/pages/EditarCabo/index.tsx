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
import { EquipmentsStatusList } from "../../dtos/EquipamentoStatusDTO";
import { Dropdown } from "../../components/DropDown";
import { TipoCaboList } from "../../dtos/TipoCaboDTO";
import { InputArea } from "../../components/Input";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { CaboDTO } from "../../dtos/lista-equipments";
import { useEffect } from "react";
import api from "../../api/api";



export function EditarCabo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CaboDTO>();

  useEffect(() => {
    getAntena()  
    }, [])
    
    async function getAntena() {
      try {
        const res = await api.get('cabo/1');
        reset({
          dados_gerais: {
            codigo: res.data.dados_gerais.codigo,
            marca: res.data.dados_gerais.marca,
            modelo: res.data.dados_gerais.modelo,
          },
          status: res.data.status,
          tamanho:res.data.status,
          tipo:res.data.status,
          category: res.data.category,
        });
      } catch (error) {
        console.log(error)
      }
    }
  
    const onSubmitUpdate = async (data: CaboDTO) => {
      try {
        const res = await api.put('/cabo/1', data);
        console.log('atualizou', res)
      } catch (error) {
        console.log('error ao atualizar', error)
      }
    };
  
    const onDelete = async() => {
      try {
        const res = await api.delete("/cabo/1")
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
        <Title>Cabo</Title>
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
                    name="dados_gerais.codigo"
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
              <Subtitle>Tipo</Subtitle>
                  <Controller
                    control={control}
                    name="tipo"
                    rules={{ required: "Selecione o tipo" }}
                    render={({ field: { onChange, value } }) => (
                      <Dropdown
                        options={TipoCaboList}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
              </Form>
              <Form>
              <Subtitle>Tamanho</Subtitle>
                  <Controller
                    control={control}
                    name="tamanho"
                    rules={{ required: "Informe o tamanho" }}
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
