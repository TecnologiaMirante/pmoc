import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 11.25rem;
  height: auto;
  padding: 0.625rem 0.9375rem;
  border-radius: 0.5rem;


  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme["white"]};
  color: ${(props) => props.theme["white"]};
  font: 400 0.8rem Inter, sans-serif;
  text-align: center;
  cursor: pointer;

  background: linear-gradient(
    to right,
    ${(props) => props.theme["gradient-dark-100"]} 0%,
    ${(props) => props.theme["gradient-dark-200"]} 100%
  );
  border: none;

  &:hover {
    color: ${(props) => props.theme["white"]};
    border: 1px solid ${(props) => props.theme["white"]};
    background: linear-gradient(
      to right,
      ${(props) => props.theme["gradient-orange-100"]} 0%,
      ${(props) => props.theme["gradient-orange-200"]} 100%
    );
  }
`;
