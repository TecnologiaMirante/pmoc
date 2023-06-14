import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 150px;
  height: 40px;
  
  button {
    margin-top: 10px;
    margin-left: 10px;
    width: 150px;
    height: 40px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 1px solid ${props => props.theme["white"]};
    color: ${props => props.theme['white']};
    font: 400 .8rem Inter, sans-serif; 
    text-align: center;
    cursor: pointer;

    background: linear-gradient(to right, ${props => props.theme['gradient-dark-100']} 0%,  ${props => props.theme['gradient-dark-200']} 100%);
    border: none;
    border-radius: 8px;

    &:hover{
      color: ${props => props.theme['white']};
      border: 1px solid ${props => props.theme["white"]};
      background: linear-gradient(to right, ${props => props.theme['gradient-orange-100']} 0%,  ${props => props.theme['gradient-orange-200']} 100%);
    }
    
  }  
`;
