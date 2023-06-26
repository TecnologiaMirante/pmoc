import { ButtonContainer } from "./styles";

type CancelButtonProps = {
  onClick: () => void;
};


export function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>   
        Cancelar
    </ButtonContainer>
  );
}