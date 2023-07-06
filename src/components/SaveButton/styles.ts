import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 11.25rem;
  height: auto;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme["white"]};
  font: 400 0.8rem Inter, sans-serif;
  text-align: center;
  cursor: pointer;

  background: linear-gradient(
    to right,
    ${(props) => props.theme["gradient-blue-100"]} 0%,
    ${(props) => props.theme["gradient-blue-200"]} 100%
  );
  border: none;

  &:hover {
    color: ${(props) => props.theme["white"]};
    background: linear-gradient(
      to left,
      ${(props) => props.theme["gradient-blue-100"]} 0%,
      ${(props) => props.theme["gradient-blue-200"]} 100%
    );
  }
`;
