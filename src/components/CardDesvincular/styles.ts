import { styled } from "styled-components";


export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  padding: 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["white"]};
  z-index: 99999;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["black"]};
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme["slate-700"]};
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;
