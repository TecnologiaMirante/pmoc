import { Header } from "../../components/Header";
import { InputArea } from "../../components/Input";
import {
  ContainerButton,
  ContainerCard,
  ContainerFilhoDoPai,
  ContainerImage,
  ContainerPai,
  ContainerTitle,
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
  corrente_maxima: number;
  category: string;
};

export function CriarTelemetria() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      category:"Telemetria"
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };


  return (
    <div>
      <Header />
      <ContainerTitle>
        <Title>Telemetria</Title>
      </ContainerTitle>
      <ContainerPai>
        <ContainerFilhoDoPai>
          <ContainerCard>
            <FormsContainer>
              <FormsInline >
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
              </FormsInline>
              <FormsInline >
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
              </FormsInline>
              <FormsInline>
              <Forms>
                  <Subtitle>Categoria</Subtitle>
                  <Controller
                    control={control}
                    name="category"
                    rules={{ required: "Informe a categoria" }}
                    render={({ field: { value } }) => (
                      <InputArea
                        type="text"
                        placeholder="Telemetria"
                        value={value}
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
            <CancelButton onClick={() => console.log('cancelar')}/>
            <SaveButton onClick={handleSubmit(onSubmit)} />
          </ContainerButton>
        </ContainerFilhoDoPai>
      </ContainerPai>
    </div>
  );
}
