import { CancelButton } from "../../components/CancelButton/CancelButton";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { Header } from "../../components/Header";
import { SaveButton } from "../../components/SaveButton";

export function Home() {
  return (
    <div>
      <Header />
      <SaveButton/>
      <DeleteButton/>
      <CancelButton/>
    </div>
  )
}