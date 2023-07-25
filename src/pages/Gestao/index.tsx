import { Header } from "../../components/Header";
import { Admin, AdminGroup, Avatar, Card, Center, Container, DadosUser, InfoUser, NomeEmpresa, NomeUser, Title } from "./styles";
import perfil from '../../assets/perfil.png'
import quadrado from '../../assets/quadrado.png'
import nario from '../../assets/nario.jpeg';
import clodo from '../../assets/clodo.jpeg';
import vini from '../../assets/vini.jpeg';
import neto from '../../assets/neto.jpeg';
import joao from '../../assets/joao.jpeg';
import fy from '../../assets/fy.jpeg';
import ramon from '../../assets/ramon.jpg';



export function Gestao () {
    return (
        <Container>
            <Header />
            <Center>
                <Card>
                    <Admin>
                        <Title>Admin</Title>
                        <AdminGroup>
                            <InfoUser>
                                <Avatar src={perfil} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Luan Cansado</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                            <InfoUser>
                                <Avatar src={nario} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Nario</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                        </AdminGroup>
                    </Admin>
                    <Admin>
                        <Title>Analista</Title>
                        <AdminGroup>
                            <InfoUser>
                                <Avatar src={clodo} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Clodoaldo </NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                            <InfoUser>
                                <Avatar src={vini} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Vinicius</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                        </AdminGroup>
                    </Admin>
                    <Admin>
                        <Title>Técnico</Title>
                        <AdminGroup>
                            <InfoUser>
                                <Avatar src={neto} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Neto Cansado</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                            <InfoUser>
                                <Avatar src={joao} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>João</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                        </AdminGroup>
                    </Admin>
                    <Admin>
                        <Title>Visualizador</Title>
                        <AdminGroup>
                            <InfoUser>
                                <Avatar src={fy} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Fylip Cansado</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                            <InfoUser>
                                <Avatar src={ramon} alt="profile"/>
                                <DadosUser>
                                    <NomeUser>Ramon</NomeUser>
                                    <NomeEmpresa>TV Mirante</NomeEmpresa>
                                </DadosUser>
                            </InfoUser>
                        </AdminGroup>
                    </Admin>
                </Card>
            </Center>
        </Container>
    )
}