import {  styled } from "styled-components";

export const ContainerAnexos = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["white"]};
  padding: 1.5rem 2.25rem 2.25rem 2.25rem;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 5px 40px -5px rgba(58, 157, 249, 0.3);
  flex-wrap: wrap;
  .wrapper {
    display: grid;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 13.0rem;
`;

export const Image = styled.img`
  height: 120px;
  width: 90px;
`;

export const NomeDoc = styled.h2`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

`;

export const DocAutor = styled.p`
  color: ${(props) => props.theme["slate-700"]};
  font-weight: 400;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  text-align: center;
`;

export const InfoDocs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-items: stretch;
`;