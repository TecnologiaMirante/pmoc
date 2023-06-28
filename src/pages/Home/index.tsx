import { CardAtivo } from "../../components/CardAtivo";
import { Header } from "../../components/Header";
import { InputPesquisar } from "../../components/InputPerquisar";
import {
  ContainerAnexos,
  ContainerFilho,
  ContainerFilho2,
  ContainerImage,
  ContainerPai,
  ContainerSubtitle,
  DocAutor,
  Image,
  InfoAtivo,
  InfoDocs,
  Line,
  NomeDoc,
  Subtitle,
  TipoDeBusca,
  Title,
  TitleInfo,
} from "./styles";
import quadrado from "../../assets/quadrado.png";

export function Home() {
  return (
    <div>
      <Header />
      <ContainerPai>
        <ContainerFilho>
          <Title>Ativos</Title>
          <CardAtivo />

          <InfoAtivo>
            <TitleInfo>Histórico de Manutenções</TitleInfo>
            <TitleInfo>Documentos</TitleInfo>
          </InfoAtivo>

          <ContainerAnexos>
            <ContainerImage>
              <Image src={quadrado} alt="quadrado" />
              <InfoDocs>
                <NomeDoc>Nf-e</NomeDoc>
                <DocAutor>Tec. Ramon</DocAutor>
                <DocAutor>12/06/2023</DocAutor>
              </InfoDocs>
            </ContainerImage>

            <ContainerImage>
              <Image src={quadrado} alt="quadrado" />
              <InfoDocs>
                <NomeDoc>Nf-e</NomeDoc>
                <DocAutor>Tec. Ramon</DocAutor>
                <DocAutor>12/06/2023</DocAutor>
              </InfoDocs>
            </ContainerImage>

            <ContainerImage>
              <Image src={quadrado} alt="quadrado" />
              <InfoDocs>
                <NomeDoc>Nf-e</NomeDoc>
                <DocAutor>Tec. Ramon</DocAutor>
                <DocAutor>12/06/2023</DocAutor>
              </InfoDocs>
            </ContainerImage>

            <ContainerImage>
              <Image src={quadrado} alt="quadrado" />
              <InfoDocs>
                <NomeDoc>Nf-e</NomeDoc>
                <DocAutor>Tec. Ramon</DocAutor>
                <DocAutor>12/06/2023</DocAutor>
              </InfoDocs>
            </ContainerImage>

            <ContainerImage>
              <Image src={quadrado} alt="quadrado" />
              <InfoDocs>
                <NomeDoc>Nf-e</NomeDoc>
                <DocAutor>Tec. Ramon</DocAutor>
                <DocAutor>12/06/2023</DocAutor>
              </InfoDocs>
            </ContainerImage>
          </ContainerAnexos>
        </ContainerFilho>
      </ContainerPai>
    </div>
  );
}
