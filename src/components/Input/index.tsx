import { ChangeEvent } from "react";
import { Input } from "./styles";

type Props = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function InputArea({ type, placeholder, value, onChange }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}