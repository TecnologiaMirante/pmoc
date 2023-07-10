import { CancelButton } from "../CancelButton/CancelButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import {
  Container,
  ContainerButtons,
  ContainerTitle,
  SubTitle,
  Title,
} from "./styles";

type Props = {
  onConfirmar: () => void;
}

export function CardDesvincular({ onConfirmar }: Props) {


  return (
    <Container>
      <ContainerTitle>
        <Title>Desvincular equipamento</Title>
        <SubTitle>Tem certeza que deseja excluir o equipamento?</SubTitle>
      </ContainerTitle>
      <ContainerButtons>

        <CancelButton onClick={onConfirmar}/>

        <DeleteButton title='Confirmar' onClick={onConfirmar}/>
      </ContainerButtons>
    </Container>
  );
}
