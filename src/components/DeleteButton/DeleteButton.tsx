import { ButtonContainer } from "./styles";

type DeleteButtonProps = {
  onClick: () => void;
};

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>Excluir equipamento</ButtonContainer>
  );
}
