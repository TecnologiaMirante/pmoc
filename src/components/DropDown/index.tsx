import { EquipmentStatus } from "../../dtos/EquipamentoStatusDTO";
import { Select } from "./styles";

interface DropdownProps {
  options: EquipmentStatus[];
  value: string;
  onChange: (value: string) => void;
}

export function Dropdown({ options, value, onChange }: DropdownProps) {
  return (
    <label>
      <Select name="Status" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </Select>
    </label>
  );
}
