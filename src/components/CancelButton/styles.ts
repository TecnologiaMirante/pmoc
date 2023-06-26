import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 150px;
  height: 40px;

  margin-top: 10px;
  margin-left: 10px;
  width: 150px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme["slate-950"]};
  font: 400 0.8rem Inter, sans-serif;
  text-align: center;
  cursor: pointer;

  background: transparent;
  border: 2.2px solid ${(props) => props.theme["slate-400"]};
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  &:hover {
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["slate-500"]};
  }
`;
