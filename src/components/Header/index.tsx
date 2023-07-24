import { HeaderContainer, HeaderContent, ListItems, UserContainer, Logo } from "./styles";
import { Question, BellSimple, User } from "phosphor-react";
import logo from '../../assets/Logo.png'



export function Header() {



  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logo} alt="logomarca"/>
        <ListItems>
          <li><a href="/home">Home</a></li>
          <li><a href="#">Monitor</a></li>
          <li><a href="#">Manutenções</a></li>
          <li><a href="/documentos">Documentos</a></li>
          <li><a href="/estacoes">Estações</a></li>
          <li><a href="#">Gestão</a></li>
        </ListItems>
        <ListItems>
          <a href="#">
            <Question size={28} />
          </a>
          <a href="#">
            <BellSimple size={28} />
          </a>
          <a href="#">
            <UserContainer>
              <User size={28} />
            </UserContainer>
          </a>
        </ListItems>
      </HeaderContent>
    </HeaderContainer>
  );
}