import { styled, keyframes } from "styled-components";

const arrowAnimation = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(100);
  }
`;

export const Container = styled.div`
  background-color: #002438;
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  width: 100%;
  height: 100vh;
`;

export const ArrowImage = styled.img`
  position: absolute;
  z-index: 1;
  animation: ${arrowAnimation} linear infinite;
`;

export const Frame201 = styled.div`
  width: 21.3125rem;
  height: 29.375rem;
  z-index: 999999;
  display: inline-flex;
  padding: 2.25rem 1.5rem 1.5rem 2.25rem;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(255, 255, 255, 0.5);
`;

export const Frame187 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1875rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["black"]};
  font-family: "Lato", sans-serif;
`;

export const Image = styled.img``;

export const Content = styled.div`
  display: flex;
  min-width: 17.5625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Input = styled.div`
  display: flex;
  height: 3.5625rem;
  min-width: 8.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const TitleForms = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
`;

export const ContainerButtons = styled.div`
  display: flex;
  padding: 1.5rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const BntEntrar = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  border-width: 0px;
  background: linear-gradient(45deg, #003c78 0%, #36c 100%);
`;

export const TitleEntrar = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["white"]};
  font-family: "Inter", sans-serif;
`;

export const BntTrocarSenha = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  border-width: 0px;
  border: 1px solid var(--slate-400, #94a3b8);
`;

export const TitleTrocarSenha = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["slate-500"]};
  font-family: "Inter", sans-serif;
`;

export const ContainerBy = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleBy = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["black"]};
  font-family: "Lato", sans-serif;
`;

export const TitleEmpresa = styled.p`
  margin-left: 3px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
`;
