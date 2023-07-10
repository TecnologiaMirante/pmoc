import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 7.5rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;

  &.is-modal-active {
    position: relative;

    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9998;
    }
  }
`;

export const ContrainerMae = styled.div`
display: flex;
width: 77.25rem;
min-width: 51.25rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 700;
`;


export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 1rem;
align-self: stretch;
`;

export const Buttons = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
gap: 0.75rem;
`;



export const ContainerAtivos = styled.div`
  display: flex;
  width: 77.25rem;
  padding: 1.5rem 2.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(58, 157, 249, 0.3);
`;

export const Frame145 = styled.div`
display: flex;
align-items: flex-start;
gap: 1rem;
align-self: stretch;
`;

export const Frame142 = styled.div`
display: flex;
align-items: flex-start;
gap: 1rem;
`;

export const Frame190 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.75rem;
`;

export const Line = styled.div`
height: 300px;
border-left: 1px solid ${(props) => props.theme["text-color"]};
`;

export const List = styled.div`
display: flex;
padding: 0.8125rem 0rem;
flex-direction: column;
align-items: flex-start;
gap: 0.625rem;
`;

export const MiniCard = styled.div`
display: flex;
width: 16.25rem;
height: 2.5rem;
min-width: 16.25rem;
flex-direction: column;
align-items: flex-start;
gap: 0.625rem;
border-radius: 0.25rem;
background-color: ${(props) => props.theme["box"]};
box-shadow: 0px 4px 4px 0px rgba(30, 30, 30, 0.05);
`;

export const Card = styled.div`
display: flex;
padding: 0.8125rem 1.5rem;
justify-content: space-between;
align-items: center;
align-self: stretch;
`;

export const CardAdicionar = styled.button`
cursor: pointer;
border-width: 0px;
display: flex;
width: 16.25rem;
height: 2.5rem;
min-width: 16.25rem;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.625rem;
border-radius: 0.25rem;
background-color: ${(props) => props.theme["cardAdd"]};
box-shadow: 0px 4px 4px 0px rgba(30, 30, 30, 0.05);
`;

export const TitleAdicionar = styled.p`
  color: ${(props) => props.theme["slate-700"]};
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
`;


export const TextCodigo = styled.p`
  color: ${(props) => props.theme["slate-700"]};
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 700;
`;

export const Excluir = styled.p`
  color: ${(props) => props.theme["slate-700"]};
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;




