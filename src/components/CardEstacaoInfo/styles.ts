import { styled } from "styled-components";

export const EstacaoContainer = styled.div`
    background-color: ${props => props.theme['white']};
    display: flex;
    max-width: 1000px;
    min-width: 630px;
    height: 190px;
    flex-direction: column;
    border-radius: 8px;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ContainerNomeEstacao = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`;

export const EstacaoImg = styled.img`
    width: 170px;
    height: 120px;
`;

export const NomeEstacao = styled.p`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme['gradient-blue-100']};
`;

export const ContainerLocalizazao = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -55px;
`;

export const TextLocalizacao = styled.p`
    margin-top: 10px;
    color: ${props => props.theme['gradient-blue-100']};
    margin-right: 40px;
`;

export const TextEndereco = styled.p`
    margin-top: 10px;
    text-align: left;
    color: ${props => props.theme['gray-500']};
`;