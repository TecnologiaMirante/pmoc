import { useState } from "react";
import { CardAtivoNobreak } from "../../components/CardAtivoNobreak";
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
import { FAB } from "../../components/FAB";


type Page = "manutencoes" | "documentos";


export function Home() {
  const [currentPage, setCurrentPage] = useState("manutencoes");

  const handlePageChange = (page:Page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <ContainerAvo>
        <ContainerPai>
          <Title>5 Documentos</Title>
          <ContainerFilho>
            <CardAtivoNobreak />
            <SubPages>
              <TitleInfo
                onClick={() => handlePageChange("manutencoes")}
                className={currentPage === "manutencoes" ? "active" : ""}
              >
                Histórico de Manutenções
              </TitleInfo>
              <TitleInfo
                onClick={() => handlePageChange("documentos")}
                className={currentPage === "documentos" ? "active" : ""}
              >
                Documentos
              </TitleInfo>
            </SubPages>
            {currentPage === "manutencoes" && <CardManutencao />}
            {currentPage === "documentos" && <ContainerDocumentos />}
          </ContainerFilho>

          <FAB />

        </ContainerPai>
        <CardFilter />
      </ContainerAvo>
    </div>
  );
}
