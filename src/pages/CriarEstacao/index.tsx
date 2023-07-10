import { Header } from "../../components/Header";
import React, { useState } from 'react';
import {
  Buttons,
  Container,
  Content,
  ContrainerMae,
  Title,
} from "./styles";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { CancelButton } from "../../components/CancelButton/CancelButton";
import { SaveButton } from "../../components/SaveButton";
import { ListEquipamentos } from "../../components/ListEquipamentos";
import { CardDesvincular } from "../../components/CardDesvincular";
import { CreateEstacaoInfo } from "../../components/CreateEstacaoInfo";
import { useForm } from "react-hook-form";



export function CriarEstacao() {


  const [isModalOpen, setModalOpen] = useState(false);
  const { handleSubmit, control } = useForm();

  const onSubmit = async(data:any) => {
    console.log(data);
  }


  return (
    <div>
      <Header />
      <Container className={isModalOpen ? "is-modal-active" : ""}>
        <ContrainerMae>
        <Title>Informações</Title>

        {/* card */}
        <CreateEstacaoInfo control={control}/>


        <Title>Equipamentos</Title>
        <Content>

        <ListEquipamentos  setModalOpen={setModalOpen}/>
        
        <Buttons>
        <DeleteButton  onClick={() => console.log('deletar')}/>
        <CancelButton onClick={() => console.log('cancelar')}/>
        <SaveButton onClick={handleSubmit(onSubmit)}/>
        </Buttons>
        </Content>
        </ContrainerMae>
        {isModalOpen &&
          <CardDesvincular onConfirmar={() => setModalOpen(false)} />  
        }
      </Container>
    </div>
  );
}
