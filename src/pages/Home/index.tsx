import { CancelButton } from "../../components/CancelButton/CancelButton";
import { CardAtivo } from "../../components/CardAtivo";
import { CardEquipamento } from "../../components/CardEquipamento";
import { CardEstacao } from "../../components/CardEstacao";
import { CardEstacaoInfo } from "../../components/CardEstacaoInfo";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { Dropdown } from "../../components/DropDown";

import { Header } from "../../components/Header";

import { SaveButton } from "../../components/SaveButton";

export function Home() {
  return (
    <div>
      <Header />
      <div style={{marginTop:150}}>

      <CardAtivo />
      </div>



    </div>
  )
}