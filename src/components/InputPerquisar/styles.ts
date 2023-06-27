import { styled } from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  align-items: center;
  border-radius: 20px;
  background-color: ${(props) => props.theme["white"]};
  padding-left: 10px;
`;

export const Input = styled.input`
    height: 30px;
    width: 183px;
    border-width: 0px;
    padding-left: 10px;
    border-radius: 4px;

    &::placeholder {
      font-size: 14px;
      font-size: 'Lato',sans-serif;
      color: ${(props) => props.theme["main-blue"]};
    }
`;
