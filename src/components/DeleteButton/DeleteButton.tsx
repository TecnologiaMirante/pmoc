import { ButtonContainer } from "./styles";

type DeleteButtonProps = {
  title?: string
  onClick: () => void;
};

export function DeleteButton({ onClick, title='Excluir equipamento' }: DeleteButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
  );
}
