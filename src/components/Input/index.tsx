import { ChangeEvent } from "react";
import { Input } from "./styles";

type Props = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
};

export function InputArea({ type, placeholder, value, onChange, style}: Props) {
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
      style={style}
    />
  );
}