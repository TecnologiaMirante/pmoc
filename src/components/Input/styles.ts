import { styled } from "styled-components";

export const Input = styled.input`
    background-color: ${props => props.theme['bg-blue']};
    height: 1.875rem;
    width: 8.875rem;
    border-width: 0px;
    padding: 0.375rem 0.625rem;
    border-radius: 0.25rem;

    &::placeholder {
      font-size: 14px;
      font-size: 'Lato',sans-serif;
      color: ${(props) => props.theme["gray-50"]};
    }
`;