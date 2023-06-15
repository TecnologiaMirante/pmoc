import { styled } from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormsImage = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1250px;
  min-width: 500px;
  height: 230px;
  background-color: ${(props) => props.theme["white"]};
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin-left: 30px;
  margin-top: 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const ContainerFormVertical = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7%;
`;

export const ContainerFormLine = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 30px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme["gradient-blue-100"]};
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["gradient-blue-100"]};
  font-weight: 700;
`;

export const Image = styled.img`
  width: 184px;
  height: 120px;
  border-radius: 8px;
  margin-top: -20px;
`;

export const ContainerTitle = styled.div`
    display: flex;
    margin-top: 70px;
    margin-left: 30px;
`;
