import { CancelButton } from "../../components/CancelButton/CancelButton";
import { CardEquipamento } from "../../components/CardEquipamento";
import { CardEstacao } from "../../components/CardEstacao";
import { CardEstacaoInfo } from "../../components/CardEstacaoInfo";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { Dropdown } from "../../components/DropDown";

import { Header } from "../../components/Header";
import { InputArea } from "../../components/Input";
import { SaveButton } from "../../components/SaveButton";
import {useState} from 'react';

export function Home() {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Header />
      <SaveButton/>
      <DeleteButton/>
      <CancelButton/>
      <CardEstacao />
      <CardEstacaoInfo />
      <div style={{marginTop:20, marginLeft:20, marginBottom:20}}>
      <CardEquipamento />
      </div>

      <InputArea
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleChange}
      />

      <div style={{marginBottom:20, marginTop:20}}>
        <Dropdown />
      </div>

    </div>
  )
}