import styled from "styled-components";
import { fontSize } from "../../design-system/typography";
import { color } from "../../design-system/color";

interface TextOptions {
  color?: string;
  uppercase?: boolean;
  fontSize?: string;
}

export const H1 = styled.h1<TextOptions>`
  font-size: ${fontSize[5]};
  margin: 40px auto;
  padding: 0;
  font-weight: bold;
  color: ${color.darkBlue};
  text-transform: capitalize;
`;

export const H4 = styled.h4<TextOptions>`
  font-style: normal;
  font-weight: bold;
  margin: 0;
  color: ${color.purple}
  font-size: ${fontSize[2]};
`;
