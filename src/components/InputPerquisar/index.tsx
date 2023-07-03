import { ChangeEvent } from "react";
import { ContainerBusca, ContainerInput, Input } from "./styles";
import { FiSearch } from 'react-icons/fi';


type Props = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function InputPesquisar({ type, placeholder, value, onChange }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <ContainerBusca>
      <ContainerInput>
        <FiSearch size={16} color="#1D4ED8" />
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </ContainerInput>
    </ContainerBusca>
  );
}
