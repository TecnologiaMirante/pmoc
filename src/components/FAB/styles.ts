import styled, { css } from "styled-components";

export const FabContainer = styled.div`
  position: fixed;
  right: 2em;
  bottom: 2em;
`;

export const FabButton = styled.button`
  width: 3.4375rem;
  height: 3.4375rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 3px 6px lightgrey;
  display: grid;
  place-items: center;
  margin-bottom: 8px;
  font-size: 28px;
  cursor: pointer;
  background-color: ${(props) => props.theme["gradient-blue-100"]};
  color: white;

  svg {
    fill: white;
  }
`;

export const FabAction = styled.li`
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 50%;
  box-shadow: 0 3px 6px lightgrey;
  display: grid;
  place-items: center;
  margin-bottom: 8px;
  font-size: 28px;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme["gradient-blue-100"]};
  color: white;
  position: relative;

  ${({ open }) =>
    open &&
    css`
      transform: translateY(-80px);
    `}

  svg {
    fill: white;
  }
`;

export const Tooltip = styled.span`
  padding: 4px 6px;
  font-size: 12px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #353b48;
  border-radius: 4px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  user-select: none;

  ${FabAction}:hover & {
    opacity: 1;
  }
`;
