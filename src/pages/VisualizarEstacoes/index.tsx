import api from "../../api/api";
import { CardEstacao } from "../../components/CardEstacao";
import { Header } from "../../components/Header";
import { InputPesquisar } from "../../components/InputPerquisar";
import {
  Ativos,
  Center,
  Container,
  Content,
  Content2,
  Eletrica,
  FilterPai,
  Title,
} from "./styles";
import { useState, useEffect } from "react";

export function VisualizarEstacoes() {
  const [pesquisar, setPesquisar] = useState<string>("");
  const [estacoes, setEstacoes] = useState<any[]>([]);

  useEffect(() => {
    getEstacoes();
  }, []);

  async function getEstacoes() {
    try {
      const res = await api.get("estacoes");
      setEstacoes(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para filtrar as estações com base no nome
  function filtrarEstacoes() {
    if (pesquisar === "") {
      // Se o campo de pesquisa estiver vazio, retorna todas as estações
      return estacoes;
    } else {
      // Filtra as estações com base no nome
      return estacoes.filter((estacao) =>
        estacao.nome.toLowerCase().includes(pesquisar.toLowerCase())
      );
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <Center>
          <Content>
            <Title>{filtrarEstacoes().length} Estações</Title>
            <Content2>
              <Eletrica>
                <Ativos>
                  {filtrarEstacoes().map((estacao) => (
                    <CardEstacao key={estacao.id} title={estacao.nome} />
                  ))}
                </Ativos>
              </Eletrica>
            </Content2>
          </Content>
          <FilterPai>
            <InputPesquisar
              placeholder="Pesquisar"
              type="text"
              value={pesquisar}
              onChange={(text) => setPesquisar(text.target.value)}
            />
          </FilterPai>
        </Center>
      </Container>
    </div>
  );
}
