import styled from "styled-components";
import { color } from "../../design-system/color";
import { fontSize } from "../../design-system/typography";

export const Primary = styled.button`
  width: 130px;
  height: 25px;
  border-radius: 24px;
  border: none;
  background: ${color.purple};
  color: ${color.white};
  font-size: ${fontSize[1]};
  margin: 0;
  cursor: pointer;
`;
