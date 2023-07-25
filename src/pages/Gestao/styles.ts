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
`;

export const Card = styled.div`
  width: 82.375rem;
  display: inline-flex;
  padding: 1.5rem 2.25rem 2.25rem 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.25rem;
`;

export const Admin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6875rem;
`;

export const AdminGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const InfoUser = styled.div`
  display: flex;
  width: 14.375rem;
  align-items: center;
  gap: 1.5rem;
`;

export const Avatar = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 3.75rem;
  border: 3px solid var(--main-blue, #1d4ed8);
`;

export const DadosUser = styled.div`
  width: 8.08825rem;
  height: 2.625rem;
  flex-shrink: 0;
`;

export const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const NomeUser = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const NomeEmpresa = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.theme["orange-500"]};
`;
