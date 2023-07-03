import {
    Filter,
    BuscaBox,
    GrupoBusca,
    Title,
    SubItem,
    ItensBusca,
    Line
  } from "./styles";
  import { InputPesquisar } from "../../components/InputPerquisar";
  
  export function CardFilter() {
    return (
      <>
        <Filter>
            <InputPesquisar
                        type="text"
                        placeholder="Pesquisar"
                      />
            <BuscaBox>
                <GrupoBusca>
                    <Title>Tipo</Title>
                    <ItensBusca>
                        <SubItem>Documento</SubItem>
                        <SubItem>Foto</SubItem>
                    </ItensBusca>
                    <Line></Line>
                </GrupoBusca>
                <GrupoBusca>
                    <Title>Ordenar</Title>
                    <ItensBusca>
                        <SubItem>Data</SubItem>
                        <SubItem>Nome</SubItem>
                        <SubItem>Status</SubItem>
                    </ItensBusca>
                </GrupoBusca>
                
            </BuscaBox>
        </Filter>
      </>
    );
  }
  