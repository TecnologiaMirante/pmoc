import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 7.8125rem;
  width: 100%;
  justify-content: center;
  display: inline-flex;
  align-items: flex-start;
  gap: 2.25rem;
`;

export const ContrainerMae = styled.div`
  display: flex;
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

export const ContainerInfo = styled.div`
  display: flex;
  padding: 1.5rem 2.25rem 3.75rem 2.25rem;
  flex-direction: row;
  justify-content: space-between;
  min-width: 68.75rem;
  max-width: 80.25rem;
  gap: 4.5rem;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 8px;
  box-shadow: 0px 5px 40px -5px rgba(58, 157, 249, 0.3);
`;

export const ContainerDados = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
`;


export const ContainerTexts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, auto);
  align-self: stretch;
`;

export const ContainerIdentificacao = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, auto);
  align-self: stretch;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const Image = styled.img`
  width: 9.5625rem;
  height: 6.25rem;
`;
