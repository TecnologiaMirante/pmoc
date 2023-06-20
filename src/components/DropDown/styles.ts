import { styled } from "styled-components";
import setapng from "../../assets/seta.png";

export const Select = styled.select`
  background-color: ${(props) => props.theme["bg-blue"]};
  height: 30px;
  width: 183px;
  border-width: 0px;
  font-family: "Lato", sans-serif;

  appearance: none;

  background-image: url(${setapng});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 14px;

  padding-inline: 10px;
`;
