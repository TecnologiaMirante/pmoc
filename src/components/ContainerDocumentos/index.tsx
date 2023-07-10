import { ContainerAnexos, ContainerImage, DocAutor, Image, InfoDocs, NomeDoc } from "./styles";
import quadrado from "../../assets/quadrado.png";

export function ContainerDocumentos(){
    return (
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
    );
}