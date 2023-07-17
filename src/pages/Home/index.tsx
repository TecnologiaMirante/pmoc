import { useState } from "react";
import { CardAtivoNobreak } from "../../components/CardAtivoNobreak";
import { CardFilter } from "../../components/CardFilter";
import { CardManutencao } from "../../components/CardManutencao";
import { ContainerDocumentos } from "../../components/ContainerDocumentos";
import { Header } from "../../components/Header";
import {
  Add,
  ContainerAvo,
  ContainerFilho,
  ContainerPai,
  Fab,
  FabContainer,
  SubPages,
  Title,
  TitleFab,
  TitleInfo,
} from "./styles";
import { FAB } from "../../components/FAB";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

type Page = "manutencoes" | "documentos";

const actions = [
  { label: "About", icon: <FcAbout />, onClick: console.log },
  { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
  { label: "Picture", icon: <FcCamera />, onClick: console.log },
  { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
];

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

          <FAB actions={actions}/>

        </ContainerPai>
        <CardFilter />
      </ContainerAvo>
    </div>
  );
}
