import { ButtonContainer } from "./styles";

type SaveButtonProps = {
  onClick: () => void;
};

export function SaveButton({ onClick }: SaveButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>
        Salvar equipamento
    </ButtonContainer>
  );
}