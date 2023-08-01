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
  ContainerInput,
  Pesquisa,
} from "./styles";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useState } from "react";

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
  const [selectedAsset, setSelectedAsset] = useState<Equipment | null>(null); // Step 1: State for selected asset
  const [filteredEletrica, setFilteredEletrica] = useState<Equipment[]>([]);
  const [isAssetSelected, setIsAssetSelected] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState<Equipment[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMiniCardClick = (equipment: Equipment) => {
    setSelectedAssets((prevSelectedAssets) => [
      ...prevSelectedAssets,
      equipment,
    ]);
    setShowInput(false); // Close the input field
    setIsAssetSelected(true);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchValue(searchTerm);
    const filteredEquipments = eletrica?.filter((equipment: Equipment) =>
      equipment.gerais.codigo.toLowerCase().includes(searchTerm)
    );
    setFilteredEletrica(filteredEquipments);
  };

  const handleInputBlur = (event: MouseEvent) => {
    setTimeout(() => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
        if (selectedAsset) {
          setIsAssetSelected(false);
        }
      }
    }, 0);
  };

  return (
    <ContainerAtivos>
      <Frame145>
        {/* Elétrica */}
        <Frame142>
          <Frame190>
            <Title>Elétrica</Title>
            <List>
              {/* Equipamentos selecionados */}
              {selectedAssets.length > 0 && (
                <List>
                  {selectedAssets.map((asset) => (
                    <MiniCard key={asset.id}>
                      <Card>
                        <TextCodigo>{asset.gerais.codigo}</TextCodigo>
                        <Title>Equipamento</Title>
                        <IoIosRemoveCircleOutline
                          onClick={() => setModalOpen(true)}
                        />
                      </Card>
                    </MiniCard>
                  ))}
                </List>
              )}

              {!showInput && (
                <CardAdicionar onClick={() => setShowInput(true)}>
                  <GrAddCircle />
                </CardAdicionar>
              )}
            </List>
            {showInput && (
              <div>
                <ContainerInput>
                  <AiOutlineSearch />
                  <Pesquisa
                    placeholder="Pesquisar"
                    ref={inputRef}
                    type="text"
                    value={searchValue}
                    onChange={handleSearch}
                  />
                </ContainerInput>
                {filteredEletrica.map((equipment) => (
                  <MiniCard
                    key={equipment.id}
                    onClick={() => handleMiniCardClick(equipment)}
                  >
                    <Card>
                      <TextCodigo>{equipment.gerais.codigo}</TextCodigo>
                      <Title>Equipamento</Title>
                    </Card>
                  </MiniCard>
                ))}
              </div>
            )}
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
