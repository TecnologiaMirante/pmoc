import { styled } from "styled-components";
import quadrado from "../../assets/quadrado.png";

export const ContainerCard = styled.div`
  width: 90%;
  height: auto;
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(58, 157, 249, 0.3);
  border-radius: 8px;
  justify-content: space-between;
  padding: 24px 36px 36px 36px;
  min-width: 804px;

  /* @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
  } */
`;

export const InfoEquipamento = styled.div`
  flex-direction: column;
  justify-content: space-around;
  display: flex;
`;

export const TitleElementos = styled.div`
  flex-direction: row;
  display: flex;
`;

export const ContainerInfo = styled.div`
  flex-direction: row;
  display: flex;
`;

export const DetalhesEquipamento = styled.div`
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  margin-right: 60px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["slate-700"]};
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
`;

export const CodAtivo = styled.h2`
  color: ${(props) => props.theme["text-ativo"]};
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  text-align: end;
`;

export const TitleEstacao = styled.h2`
  color: ${(props) => props.theme["gradient-orange-200"]};
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 890px) {
    margin-top: 65px;
  }
`;

export const Image = styled.img`
  width: 184px;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
