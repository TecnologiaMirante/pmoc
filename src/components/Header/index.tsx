import { HeaderContainer, HeaderContent, ListItems, UserContainer } from "./styles";
import { Question, BellSimple, User } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Logo</h2>
        <ListItems>
          <li><a href="#">Home</a></li>
          <li><a href="#">Monitor</a></li>
          <li><a href="#">Manutenções</a></li>
          <li><a href="#">Documentos</a></li>
          <li><a href="#">Estações</a></li>
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