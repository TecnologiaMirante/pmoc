import { styled } from "styled-components";

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

`;

export const BuscaBox = styled.div`
  display: flex;
  padding: 0.75rem 1rem 1.5rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  
  
  border-radius: 8px;
  background-color:  ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.30);

`;
export const GrupoBusca = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
`;

export const Title = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme["text-color"]};
  font-family: Lato;
  font-weight: 700;
`;

export const SubItem = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme["text-color"]};
  font-family: Lato;
`;

export const ItensBusca = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const Line = styled.div`
  border: 0.01px solid ${(props) => props.theme["text-color"]};
  width: 12.1875rem;
`;