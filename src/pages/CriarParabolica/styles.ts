import { css, styled } from "styled-components";

export const ContainerPai = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 36px;
  flex-direction: column;
  background-color: ${(props) => props.theme["bg-blue"]};
`;

export const ContainerTitle = styled.div`
  display: flex;
  background-color: aliceblue;
  margin-left: 40px;
  margin-top: 50px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["gradient-blue-100"]};;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const ContainerFilhoDoPai = styled.div`
  width: 100%;
  display: flex;
  padding-top: 36px;
  flex-direction: column;
  padding: 0px 36px;
  position: absolute;
  background-color: ${(props) => props.theme["bg-blue"]};
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  display: flex;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(58, 157, 249, 0.3);
  border-radius: 8px;
  justify-content: space-between;
  padding-right: 36px;
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const Forms = styled.div`
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormsInline = styled.div`
  flex-direction: row;
  padding-top: 32px;
  padding-left: 36px;

  @media (max-width: 890px) {
    flex-direction: column;
    height: auto;
    padding-right: 0;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme["gradient-blue-100"]};
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
  font-family: "Lato", sans-serif;
`;

export const FormsContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;

export const ContainerImage = styled.div`
 align-items: center;
 justify-content: center;
`;

export const Image = styled.img`
  width: 184px;
  height: 120px;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const ContainerButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  top: 100%; /* Ajuste a altura desejada */
  right: 0;
  margin-top:30px; /* Ajuste a distância da borda direita */
  transform: translateY(-50%);
`;