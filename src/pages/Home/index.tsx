import { CancelButton } from "../../components/CancelButton/CancelButton";
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
      <SaveButton onClick={() => console.log('clicou')}/>
      <DeleteButton/>
      <CancelButton/>
      <CardEstacao />
      <CardEstacaoInfo />
      <div style={{marginTop:20, marginLeft:20, marginBottom:20}}>
      <CardEquipamento />
      </div>


      <div style={{marginBottom:20, marginTop:20}}>
        <Dropdown />
      </div>

    </div>
  )
}