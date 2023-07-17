import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 125px;
  flex-direction: column;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  min-width: 74rem;
  max-width: 93rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1 0 0;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.25rem;
`;

export const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const Manutencao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

export const Filter = styled.div`
display: flex;
max-width: 14.25rem;
flex-direction: column;
align-items: flex-end;
gap: 1.5rem;
flex: 1 0 0;
`;


