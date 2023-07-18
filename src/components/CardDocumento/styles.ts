import { styled } from "styled-components";

export const ContainerImage = styled.div`
  display: flex;
  width: 13.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: 5.62238rem;
  height: 7.5rem;
  border-radius: 0.25rem;
`;

export const InfoDocs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`;

export const TitleDoc = styled.p`
  color: ${(props) => props.theme["text-color"]};
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TitleDocAutor = styled.p`
  color: ${(props) => props.theme["slate-400"]};
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleDocData = styled.p`
  color: ${(props) => props.theme["slate-400"]};
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;