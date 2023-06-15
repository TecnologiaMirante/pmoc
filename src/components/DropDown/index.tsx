import { Select } from "./styles";

export function Dropdown() {
  return (
    <label>
    <Select name="Status">
      <option value="">--</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </Select>
    </label>
  );
}
