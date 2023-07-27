import { Header } from "../../components/Header";
import { useState, useContext, useEffect } from 'react';
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
import api from "../../api/api";
import AuthContext from "../../context/AuthContext";



export function CriarEstacao() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [eletrica, setEletrica] = useState();
  const [refrigeracao, setRefrigeracao] = useState();
  const [irradiacao, setIrradiacao] = useState();
  const [telemetria, setTelemetria] = useState();
  const { handleSubmit, control } = useForm();
  const {token} = useContext(AuthContext);

  const onSubmit = async(data:any) => {
    console.log(data);
  }



  useEffect(() => {
    getEstacoes();
  }, []);


  async function getEstacoes() {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await api.get("/all", {headers});
      const { antenas, arCondicionados, cabos, combinadores, disjuntores, dps, nobreaks, parabolicas, switchers, telemetrias, torres, transmissores } = res.data;
      const allEquipments = [...antenas, ...arCondicionados, ...cabos, ...combinadores, ...disjuntores, ...dps, ...nobreaks, ...parabolicas, ...switchers, ...telemetrias, ...torres, ...transmissores];

      // Categorizando os ativos com base na categoria
      const categorizedEquipments: {
        eletrica: any[];
        refrigeracao: any[];
        irradiacao: any[];
        telemetria: any[];
      } = {
        eletrica: [],
        refrigeracao: [],
        irradiacao: [],
        telemetria: [],
      };

      // Checando se existe a categoria e o equipamento
      allEquipments.forEach((equipmentArray) => {
        equipmentArray.forEach((equipment) => {
          if (equipment && equipment.category) {
            switch (equipment.category) {
              case "ELETRICA":
                categorizedEquipments.eletrica.push(equipment);
                break;
              case "REFRIGERACAO":
                categorizedEquipments.refrigeracao.push(equipment);
                break;
              case "IRRADIACAO":
                categorizedEquipments.irradiacao.push(equipment);
                break;
              case "TELEMETRIA":
                categorizedEquipments.telemetria.push(equipment);
                break;
              default:
                break;
            }
          }
        });
      });

      // Setando os equipamentos pelas categorias
      setEletrica(categorizedEquipments.eletrica);
      setRefrigeracao(categorizedEquipments.refrigeracao);
      setIrradiacao(categorizedEquipments.irradiacao);
      setTelemetria(categorizedEquipments.telemetria);

     
    } catch (error) {
      console.log(error);
    }
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

        <ListEquipamentos setModalOpen={setModalOpen} eletrica={eletrica} refrigeracao={refrigeracao} irradiacao={irradiacao} telemetria={telemetria}/>
        
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
