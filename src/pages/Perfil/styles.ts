import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 120rem;
  padding-top: 125px;
  flex-direction: column;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  min-width: 31.25rem;
  max-width: 55rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`;

export const CardInfoUser = styled.div`
  display: flex;
  padding: 1.5rem 2.25rem 2.25rem 2.25rem;
  align-items: flex-start;
  gap: 3rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.5);
`;

export const Avatar = styled.img`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 5.625rem;
  border: 3px solid var(--main-blue, #1d4ed8);
`;

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1 0 0;
`;

export const NomeUser = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const TextCargo = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["orange-500"]};
`;

export const ContainerInfo = styled.div`
display: flex;
align-items: flex-start;
gap: 2.25rem;
align-self: stretch;
`;

export const C1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.75rem;
flex: 1 0 0;
`;

export const C2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.75rem;
flex: 1 0 0;
`;

export const LabelInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
`;

export const SubTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["slate-700"]};
`;

export const CardButtons = styled.div`
display: flex;
padding: 1.5rem 1.5rem 2.25rem 1.5rem;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
gap: 0.75rem 0.6875rem;
align-self: stretch;
flex-wrap: wrap;
border-radius: 0.5rem;
background-color: ${(props) => props.theme["white"]};
box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.50);
`;

export const Button = styled.button`
cursor: pointer;
display: flex;
width: 23rem;
padding: 0.5625rem 5.3125rem;
justify-content: center;
align-items: flex-start;
gap: 0.625rem;
border-radius: 0.5rem;
border-width: 0px;
background-color: ${(props) => props.theme["box"]};
&:hover {
    background-color: ${(props) => props.theme["cardAdd"]};
  }
`;

export const InfoButton = styled.div`
display: flex;
align-items: flex-start;
gap: 0.75rem;
`;




