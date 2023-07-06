import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 11.25rem;
  height: auto;
  padding: 0.625rem 0.9375rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.625rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme["slate-950"]};
  font: 400 0.8rem Inter, sans-serif;
  text-align: center;
  cursor: pointer;

  background: transparent;
  border: 1px solid ${(props) => props.theme["slate-400"]};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  &:hover {
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["slate-500"]};
  }
`;
