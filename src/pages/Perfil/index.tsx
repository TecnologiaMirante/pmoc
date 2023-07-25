import { Header } from "../../components/Header";
import {
  Avatar,
  Button,
  C1,
  C2,
  CardButtons,
  CardInfoUser,
  Center,
  Container,
  ContainerInfo,
  Content,
  ContentInfos,
  InfoButton,
  LabelInfo,
  NomeUser,
  SubTitle,
  TextCargo,
  Title,
} from "./styles";
import nario from "../../assets/nario.jpeg";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export function Perfil() {
  const {setToken} = useContext(AuthContext);

  const handleLogout = () => {
    // Remove o token do sessionStorage
    sessionStorage.removeItem("token");

    // Atualiza o token do AuthContext para null
    setToken(null);
  };


  return (
    <div>
      <Header />
      <Container>
        <Center>
          <Title>Perfil</Title>
          <Content>
            <CardInfoUser>
              <Avatar src={nario} alt="profile" />
              <ContentInfos>
                <NomeUser>Nario S.</NomeUser>
                <TextCargo>Admin</TextCargo>
                <NomeUser>Informações</NomeUser>
                <ContainerInfo>
                  <C1>
                    <LabelInfo>
                      <Title>E-mail</Title>
                      <SubTitle>nario@mirante.com.br</SubTitle>
                    </LabelInfo>
                    <LabelInfo>
                      <Title>Empresa</Title>
                      <SubTitle>TV Mirante</SubTitle>
                    </LabelInfo>
                  </C1>
                  <C2>
                    <LabelInfo>
                      <Title>Contato</Title>
                      <SubTitle>(98)91234-5678</SubTitle>
                    </LabelInfo>
                    <LabelInfo>
                      <Title>Contato empresa</Title>
                      <SubTitle>(98)91234-5678</SubTitle>
                    </LabelInfo>
                  </C2>
                </ContainerInfo>
              </ContentInfos>
            </CardInfoUser>
            <CardButtons>
              {/* alterar senha */}
              <Button>
                <InfoButton>
                  <AiFillLock />
                  <Title>Alterar Senha</Title>
                </InfoButton>
              </Button>
              {/* editar info */}
              <Button>
                <InfoButton>
                  <BsFillPersonFill />
                  <Title>Editar Informações</Title>
                </InfoButton>
              </Button>
              {/* editar nivel de acesso */}
              <Button>
                <InfoButton>
                  <LiaSearchSolid />
                  <Title>Editar Nivel de Acesso</Title>
                </InfoButton>
              </Button>
              {/* conf de notificação*/}
              <Button>
                <InfoButton>
                  <AiOutlineBell />
                  <Title>Notificações</Title>
                </InfoButton>
              </Button>
              {/* logout*/}
              <Button onClick={()=> handleLogout()}>
                <InfoButton>
                  <AiOutlineLogout />
                  <Title>Sair</Title>
                </InfoButton>
              </Button>
            </CardButtons>
          </Content>
        </Center>
      </Container>
    </div>
  );
}
