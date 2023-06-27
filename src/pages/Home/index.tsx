import { CardAtivo } from "../../components/CardAtivo";
import { Header } from "../../components/Header";
import { InputPesquisar } from "../../components/InputPerquisar";
import { ContainerAnexos, ContainerFilho, ContainerFilho2, ContainerImage, ContainerPai, ContainerSubtitle, DocAutor, Image, InfoAtivo, Line, NomeDoc, Subtitle, TipoDeBusca, Title, TitleInfo } from "./styles";
import quadrado from '../../assets/quadrado.png';


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
          <Image src={quadrado} alt="quadrado"/>
            <NomeDoc>
              Nf-e
            </NomeDoc>
            <DocAutor>
              Tec. Ramon
            </DocAutor>
            <DocAutor>
              12/06/2023
            </DocAutor>
          </ContainerImage>

          <ContainerImage>
          <Image src={quadrado} alt="quadrado"/>
            <NomeDoc>
              Nf-e
            </NomeDoc>
            <DocAutor>
              Tec. Ramon
            </DocAutor>
            <DocAutor>
              12/06/2023
            </DocAutor>
          </ContainerImage>

          <ContainerImage>
          <Image src={quadrado} alt="quadrado"/>
            <NomeDoc>
              Nf-e
            </NomeDoc>
            <DocAutor>
              Tec. Ramon
            </DocAutor>
            <DocAutor>
              12/06/2023
            </DocAutor>
          </ContainerImage>

          <ContainerImage>
          <Image src={quadrado} alt="quadrado"/>
            <NomeDoc>
              Nf-e
            </NomeDoc>
            <DocAutor>
              Tec. Ramon
            </DocAutor>
            <DocAutor>
              12/06/2023
            </DocAutor>
          </ContainerImage>

          <ContainerImage>
          <Image src={quadrado} alt="quadrado"/>
            <NomeDoc>
              Nf-e
            </NomeDoc>
            <DocAutor>
              Tec. Ramon
            </DocAutor>
            <DocAutor>
              12/06/2023
            </DocAutor>
          </ContainerImage>

          <ContainerImage>
          <Image src={quadrado} alt="quadrado"/>
            <NomeDoc>
              Nf-e
            </NomeDoc>
            <DocAutor>
              Tec. Ramon
            </DocAutor>
            <DocAutor>
              12/06/2023
            </DocAutor>
          </ContainerImage>


        </ContainerAnexos>

      </ContainerFilho>

      <ContainerFilho2>
      <InputPesquisar placeholder="Pesquisar"/>

      <TipoDeBusca>
          <Title>Status</Title>
          <ContainerSubtitle>
            <Subtitle>Agendamento</Subtitle>
            <Subtitle>Execução</Subtitle>
            <Subtitle>Espera</Subtitle>
            <Subtitle>Realizadas</Subtitle>
          </ContainerSubtitle>
          <Line />

          <Title>Tipo</Title>
          <ContainerSubtitle>
            <Subtitle>Agendamento</Subtitle>
            <Subtitle>Execução</Subtitle>
            <Subtitle>Espera</Subtitle>
            <Subtitle>Realizadas</Subtitle>
          </ContainerSubtitle>
          <Line />

          <Title>Ordernar</Title>
          <ContainerSubtitle>
            <Subtitle>Data</Subtitle>
            <Subtitle>Nome</Subtitle>
            <Subtitle>Status</Subtitle>
          </ContainerSubtitle>
          <Line />

      </TipoDeBusca>
      </ContainerFilho2>

    </ContainerPai>
    </div>
  )
}