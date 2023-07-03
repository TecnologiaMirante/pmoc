import { CardAtivo } from "../../components/CardAtivo";
import { CardFilter } from "../../components/CardFilter";
import { Header } from "../../components/Header";
import {
  ContainerAvo,
  ContainerAnexos,
  ContainerFilho,
  ContainerImage,
  ContainerPai,
  DocAutor,
  Image,
  SubPages,
  InfoDocs,
  NomeDoc,
  Title,
  TitleInfo,
} from "./styles";
import quadrado from "../../assets/quadrado.png";

export function Home() {
  return (
    <div>
      <Header />
      <ContainerAvo>
        <ContainerPai>
        <Title>15 Documentos</Title>
          <ContainerFilho>
            
            <CardAtivo />

            <SubPages>
              <TitleInfo>Histórico de Manutenções</TitleInfo>
              <TitleInfo>Documentos</TitleInfo>
            </SubPages>

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
        <CardFilter></CardFilter>
       
      </ContainerAvo>
    </div>
  );
}
