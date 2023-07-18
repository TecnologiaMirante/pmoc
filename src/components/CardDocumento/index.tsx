import quadrado from "../../assets/quadrado.png";
import { ContainerImage, Image, InfoDocs, TitleDoc, TitleDocAutor, TitleDocData } from "./styles";


export function CardDocumento(){
    return (
        <ContainerImage>
            <Image alt="quadrado" src={quadrado}/>
            <InfoDocs>
                <TitleDoc>NF-e</TitleDoc>
                <TitleDocAutor>Ramon Maia</TitleDocAutor>
                <TitleDocData>18/07/2023</TitleDocData>
            </InfoDocs>
        </ContainerImage>
    );
}