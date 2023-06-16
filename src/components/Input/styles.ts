import { styled } from "styled-components";

export const Input = styled.input`
    background-color: ${props => props.theme['bg-blue']};
    height: 30px;
    width: 183px;
    border-width: 0px;
    padding-left: 10px;
    border-radius: 4px;

    &::placeholder {
      font-size: 14px;
      font-size: 'Lato',sans-serif;
      color: ${(props) => props.theme["gray-50"]};
    }
`;
