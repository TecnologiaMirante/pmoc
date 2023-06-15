import { Header } from "../../components/Header";
import { InputArea } from "../../components/Input";
import {
  ContainerCadastro,
  ContainerFormLine,
  ContainerFormVertical,
  ContainerTitle,
  FormsImage,
  Image,
  Subtitle,
  Title,
} from "./styles";
import { useState } from "react";
import quadrado from "../../assets/quadrado.png";

export function CriarNobreak() {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Header />
      <ContainerTitle>
      <Title>Nobreak</Title>
      </ContainerTitle>
      <FormsImage>
        <ContainerCadastro>
          <ContainerFormLine>
            <ContainerFormVertical>
              <Subtitle>Código</Subtitle>
              <InputArea
                type="text"
                placeholder="Digite o código"
                value={name}
                onChange={handleChange}
              />
            </ContainerFormVertical>

            <ContainerFormVertical>
              <Subtitle>Status</Subtitle>
              <InputArea
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={handleChange}
              />
            </ContainerFormVertical>
          </ContainerFormLine>

          <ContainerFormLine>
            <ContainerFormVertical>
              <Subtitle>Marca</Subtitle>
              <InputArea
                type="text"
                placeholder="Digite a marca"
                value={name}
                onChange={handleChange}
              />
            </ContainerFormVertical>

            <ContainerFormVertical>
              <Title>Modelo</Title>
              <InputArea
                type="text"
                placeholder="Digite o modelo"
                value={name}
                onChange={handleChange}
              />
            </ContainerFormVertical>

            <ContainerFormVertical>
              <Title>Tensão entrada</Title>
              <InputArea
                type="number"
                placeholder="220"
                value={name}
                onChange={handleChange}
              />
            </ContainerFormVertical>

            <ContainerFormVertical>
              <Title>Tensão Saída</Title>
              <InputArea
                type="number"
                placeholder="110"
                value={name}
                onChange={handleChange}
              />
            </ContainerFormVertical>
          </ContainerFormLine>
        </ContainerCadastro>
        <Image src={quadrado} alt="quadrado" />
      </FormsImage>
    </div>
  );
}
