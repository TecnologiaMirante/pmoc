import { css, styled } from "styled-components";

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 100px;
  padding-inline: 211px;
  min-height: 1100px;
  /* @media (max-width: 1100px) {
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  } */
`;

export const ContainerFilho = styled.div`
  flex-direction: column;


`;

export const InfoAtivo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TitleInfo = styled.div`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;
`;

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

export const ContainerFilho2 = styled.div`
  flex-direction: column;
`;

export const TipoDeBusca = styled.div`
  margin-top: 20px;
  flex-direction: column;
  display: flex;
  border-radius: 8px;
  padding: 20px;
  background-color: ${(props) => props.theme["white"]};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;

export const ContainerSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 15px;
`;

export const Line = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0.01px solid ${(props) => props.theme["text-color"]};
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
