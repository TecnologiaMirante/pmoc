import { IconBaseProps } from "react-icons";
import styled from "styled-components";

export interface CustomIconProps extends IconBaseProps {
  color?: string;
}

export const CustomIcon = styled(({ color, ...rest }: CustomIconProps) => (
  <div {...rest} />
))`
  color: ${(props) => props.color || "#1D4ED8"};
`;