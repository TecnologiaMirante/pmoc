import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(to right, ${props => props.theme['gradient-blue-200']} 0%,  ${props => props.theme['gradient-blue-100']} 100%);
  padding: .8rem 0 .8rem;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 999999;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItems = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;

  li{
    margin-left: .5rem;
    margin-right: .5rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme['white']};
  }
  svg {
    margin-right: .7rem;
  }
`;

export const UserContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-self: center;
  background: ${props => props.theme['white']};
  border-radius: 99999px;
`;