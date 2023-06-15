import { styled } from "styled-components";

export const EstacaoContainer = styled.div`
    background-color: ${props => props.theme['white']};
    display: flex;
    width: 212px;
    height: 167px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
`;



export const NomeEstacao = styled.p`
    margin-top: 10px;
    text-align: center;
    color: ${props => props.theme['gradient-blue-100']};
`;