import { CardFilter } from "../../components/CardFilter";
import { CardManutencao } from "../../components/CardManutencao";
import { FAB } from "../../components/FAB";
import { Header } from "../../components/Header";
import { Center, Container, Content, Filter, Manutencao, PageTitle, Title } from "./styles";

export function Manutencoes() {
  return (
    <div>
      <Header />
      <Container>
        <Center>
            <Content>
                <PageTitle>
                    <Title>5 manutenções Em execução</Title>
                    <Title>12 manutenções Agendadas</Title>
                    <Title>2 manutenções Em espera</Title>
                </PageTitle>
                <Manutencao>
                    <CardManutencao />
                    <CardManutencao />
                    <CardManutencao />
                    <CardManutencao />
                </Manutencao>
            </Content>
            <Filter>
                <CardFilter />
            </Filter>
        </Center>
        <FAB/>
      </Container>
    </div>
  );
}
