import {
  Card,
  CardAdicionar,
  ContainerAtivos,
  Frame142,
  Frame145,
  Frame190,
  Line,
  MiniCard,
  List,
  TextCodigo,
  Title,
} from "./styles";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { useEffect, useRef, useState } from 'react';

type Props = {
  setModalOpen: (isOpen: boolean) => void;
  eletrica: any;
  irradiacao: any;
  refrigeracao: any;
  telemetria: any;
};

export function ListEquipamentos({
  setModalOpen,
  eletrica,
  irradiacao,
  refrigeracao,
  telemetria,
}: Props) {

  const [searchValue, setSearchValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [selectedEletricaAsset, setSelectedEletricaAsset] = useState<
    any | null
  >(null);
  const [filteredEletrica, setFilteredEletrica] = useState<any[]>([]);
  const [isAssetSelected, setIsAssetSelected] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMiniCardClick = (equipment: any) => {
    setSelectedEletricaAsset(equipment);
    setShowInput(true);
    setIsAssetSelected(true);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchValue(searchTerm);
    const filteredEquipments = eletrica?.filter((equipment) =>
      equipment.gerais.codigo.toLowerCase().includes(searchTerm)
    );
    setFilteredEletrica(filteredEquipments);
  };

  const handleInputBlur = (event: MouseEvent) => {
    setTimeout(() => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowInput(false);
        if (selectedEletricaAsset) {
          setIsAssetSelected(false);
        }
      }
    }, 0);
  };

  useEffect(() => {
    if (showInput) {
      document.addEventListener("mousedown", handleInputBlur);
    } else {
      document.removeEventListener("mousedown", handleInputBlur);
    }
    return () => {
      document.removeEventListener("mousedown", handleInputBlur);
    };
  }, [showInput]);


  return (
    <ContainerAtivos>
      <Frame145>
        {/* Elétrica */}
        <Frame142>
          <Frame190>
            <Title>Elétrica</Title>
            <List>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>

              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
              </CardAdicionar>
            </List>
          </Frame190>
          <Line />
        </Frame142>
        {/* Refrigeração */}
        <Frame142>
          <Frame190>
            <Title>Refrigeração</Title>
            <List>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
              </CardAdicionar>
            </List>
          </Frame190>
          <Line />
        </Frame142>
        {/* Irradiação */}
        <Frame142>
          <Frame190>
            <Title>Irradição</Title>
            <List>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
              </CardAdicionar>
            </List>
          </Frame190>
          <Line />
        </Frame142>
        {/* Telemetria */}
        <Frame142>
          <Frame190>
            <Title>Telemetria</Title>
            <List>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <MiniCard>
                <Card>
                  <TextCodigo>Cod</TextCodigo>
                  <Title>Equipamento</Title>
                  <IoIosRemoveCircleOutline
                    onClick={() => setModalOpen(true)}
                  />
                </Card>
              </MiniCard>
              <CardAdicionar onClick={() => console.log("clicou")}>
                <GrAddCircle />
              </CardAdicionar>
            </List>
          </Frame190>
        </Frame142>
      </Frame145>
    </ContainerAtivos>
  );
}
