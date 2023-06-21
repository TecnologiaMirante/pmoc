import { css, styled } from "styled-components";

export const ContainerPai = styled.div`
  width: 100%;
  display: flex;
  padding-top: 36px;
  flex-direction: column;
  background-color: ${(props) => props.theme["bg-blue"]};
`;

export const ContainerTitle = styled.div`
  display: flex;
  background-color: aliceblue;
  margin-left: 40px;
  margin-top: 100px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["gradient-blue-100"]};
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
  height: auto; /* Altere a altura para 'auto' para que o conteúdo se ajuste dinamicamente */
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(58, 157, 249, 0.3);
  border-radius: 8px;
  justify-content: space-between;
  padding-right: 36px;

  @media (max-width: 560px) {
    flex-direction:column; 
  }
`;

export const Forms = styled.div`
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormsInline = styled.div`
  flex-direction: row;
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
  align-items: center;
  margin-top: 30px;
  height: auto; /* Altere a altura para 'auto' para que o conteúdo se ajuste dinamicamente */
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* Adicione um espaçamento entre os inputs e a imagem */

  @media (max-width: 890px) {
    margin-top: 65px; /* Ajuste o espaçamento para telas menores */
  }
`;

export const Image = styled.img`
  width: 184px;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ContainerButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  top: 100%; /* Ajuste a altura desejada */
  right: 0;
  margin-top: 30px; /* Ajuste a distância da borda direita */
  transform: translateY(-50%);
`;
