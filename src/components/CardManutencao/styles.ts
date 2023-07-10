import { styled } from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  height: 13.125rem;
  min-width: 58.125rem;
  max-width: 77.25rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 40px -5px rgba(59, 130, 246, 0.5);
`;

export const Card = styled.div`
  display: flex;
  min-width: 51.25rem;
  max-width: 77.25rem;
  padding: 1.5rem 2.25rem 2.25rem 2.25rem;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  background-color: ${(props) => props.theme["white"]};
`;

export const RightInformation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const Image = styled.img`
  width: 8.125rem;
  height: 9.375rem;
  border-radius: 0.5rem;
`;

export const Information = styled.div`
  display: flex;
  min-width: 17.5rem;
  min-height: 9.375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const TipoManutencao = styled.h2`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme["text-color"]};
`;

export const TitleEndereco = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.theme["slate-700"]};
`;

export const TitleDescricao = styled.p`
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.theme["text-descricao"]};
`;

export const LeftInformation = styled.div`
  display: flex;
  min-width: 15.625rem;
  max-width: 28rem;
  min-height: 9.375rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 0 0;
  align-self: stretch;
`;

export const InformationLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  align-self: stretch;
`;

export const Data = styled.h2`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-color"]};
`;

export const TecnicoDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.625rem;
`;

export const TitleTecnico = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-color"]};
`;

export const NomeTecnico = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-descricao"]};
`;

export const EmpresaDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.625rem;
`;

export const TitleEmpresa = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-color"]};
`;

export const NomeEmpresa = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-descricao"]};
`;

export const Status = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.25rem;
  align-self: stretch;
`;

export const TitleStatus = styled.p`
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  color: ${(props) => props.theme["text-color"]};
`;

export const DataAtualizacao = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.theme["text-descricao"]};
`;

export const TipoStatus = styled.div`
display: flex;
width: 8.625rem;
padding: 0.4375rem 1.75rem;
justify-content: center;
align-items: flex-start;
border-radius: 6.25rem;
background: linear-gradient(225deg, #059669 0%, #10B981 100%);
`;

export const TitleTipoStatus = styled.p`
font-family: Inter;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: right;
color: ${(props) => props.theme["white"]};
`;
