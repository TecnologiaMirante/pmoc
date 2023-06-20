import { Header } from "../../components/Header";
import { InputArea } from "../../components/Input";
import {
  ContainerButton,
  ContainerCard,
  ContainerFilhoDoPai,
  ContainerImage,
  ContainerPai,
  ContainerTitle,
  Corpo,
  Forms,
  FormsContainer,
  FormsInline,
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

type FormData = {
  codigo: string;
  marca: string;
  modelo: string;
  status: string;
  diametro: number;
  satelite: string;
  receptor: string;
  category: string;
};

export function CriarParabolica() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {},
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <Corpo>
      <Header />
      <ContainerTitle>
        <Title>Parabólica</Title>
      </ContainerTitle>
      <ContainerPai>
        <ContainerFilhoDoPai>
          <ContainerCard>
            <FormsContainer>
              <FormsInline>
                <Forms>
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
                </Forms>
                <Forms>
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
                </Forms>
                <Forms>
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
                </Forms>
              </FormsInline>
              <FormsInline>
                <Forms>
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
                </Forms>
                <Forms>
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
                </Forms>
                <Forms>
                  <Subtitle>Categoria</Subtitle>
                  <Controller
                    control={control}
                    name="category"
                    rules={{ required: "Informe a categoria" }}
                    render={({ field: { onChange, value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Categoria X"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </Forms>
              </FormsInline>
              <FormsInline>
                <Forms>
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
                </Forms>
                <Forms>
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
                </Forms>
              </FormsInline>
            </FormsContainer>
            <ContainerImage>
              <Image src={quadrado} alt="quadrado" />
            </ContainerImage>
          </ContainerCard>
          <ContainerButton>
            <CancelButton />
            <SaveButton onClick={handleSubmit(onSubmit)} />
          </ContainerButton>
        </ContainerFilhoDoPai>
      </ContainerPai>
    </Corpo>
  );
}
