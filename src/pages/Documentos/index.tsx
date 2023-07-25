import { Header } from "../../components/Header";
import { CardContent, Center, Container, Content, DocumentCard, Title } from "./styles";
import { CardFilter } from "../../components/CardFilter";
import { CardDocumento } from "../../components/CardDocumento";
import { FAB } from "../../components/FAB";

export function Documentos(){
    return (
        <div>
            <Header />
            <Container>
                <Center>
                    <Content>
                        <Title>15 Documentos</Title>
                        <DocumentCard>
                            <CardContent>
                                <CardDocumento />
                                <CardDocumento />
                                <CardDocumento />
                                <CardDocumento />
                                <CardDocumento />
                                <CardDocumento />
                            </CardContent>
                        </DocumentCard>
                    </Content>
                    <CardFilter />
                </Center>
                <FAB />
            </Container>
        </div>
    );
}