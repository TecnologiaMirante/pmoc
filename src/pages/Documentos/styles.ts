import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 119.9375rem;
  padding-top: 125px;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

export const Center = styled.div`
  display: flex;
  min-width: 58.5625rem;
  max-width: 93rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1 0 0;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
`;

export const DocumentCard = styled.div`
  display: flex;
  min-width: 42.875rem;
  max-width: 78rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.5);
`;

export const CardContent = styled.div`
  display: flex;
  min-width: 42.875rem;
  max-width: 77.25rem;
  padding: 1.5rem 2.25rem 2.25rem 2.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 1.125rem;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["white"]};
`;



