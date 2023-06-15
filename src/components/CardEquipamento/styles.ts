import { styled } from "styled-components";

export const EstacaoContainer = styled.div`
    background-color: ${props => props.theme['white']};
    display: flex;
    width: 212px;
    height: 180px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 10;
`;


export const NomeTag = styled.p`
    margin-top: 20px;
    text-align: center;
    color: ${props => props.theme['gradient-blue-100']};
`;

export const TextMarcaModelo = styled.p`
    margin-top: 10px;
    text-align: left;
    color: ${props => props.theme['gray-500']};
`;