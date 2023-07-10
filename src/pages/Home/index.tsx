import { CardAtivo } from "../../components/CardAtivo";
import { CardFilter } from "../../components/CardFilter";
import { CardManutencao } from "../../components/CardManutencao";
import { ContainerDocumentos } from "../../components/ContainerDocumentos";
import { Header } from "../../components/Header";
import {
  ContainerAvo,
  ContainerFilho,
  ContainerPai,
  SubPages,
  Title,
  TitleInfo,
} from "./styles";


export function Home() {
  return (
    <div>
      <Header />
      <ContainerAvo>
        <ContainerPai>
        <Title>5 Documentos</Title>
          <ContainerFilho>
            
            <CardAtivo />

            <SubPages>
              <TitleInfo>Histórico de Manutenções</TitleInfo>
              <TitleInfo>Documentos</TitleInfo>
            </SubPages>

            <CardManutencao />

            {/* <ContainerDocumentos /> */}

          </ContainerFilho>
        </ContainerPai>
        <CardFilter></CardFilter>
       
      </ContainerAvo>
    </div>
  );
}
