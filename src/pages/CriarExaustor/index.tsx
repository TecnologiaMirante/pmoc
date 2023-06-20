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

type FormData = {
  codigo: string;
  marca: string;
  status: string;
  modelo: string;
};

export function CriarExaustor() {
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
    <div>
      <Header />
      <ContainerTitle>
        <Title>Exaustor</Title>
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
              <FormsInline>
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
    </div>
  );
}
