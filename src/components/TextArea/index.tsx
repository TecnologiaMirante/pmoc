import { ChangeEvent } from "react";
import { Input } from "./styles";

type Props = {
  placeholder: string;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
  multiline?: boolean;
  rows?: number;
};

export function TextArea({ placeholder, value, onChange, style, multiline, rows }: Props) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      multiline={multiline}
      rows={rows}
      style={style}
    />
  );
}
