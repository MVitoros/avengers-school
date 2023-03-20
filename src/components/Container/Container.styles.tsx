import styled from "styled-components";

import { ContainerProps } from "./Container.types";

export const Container = styled.div<ContainerProps>`
  ${({ maxWidth, bgColor }) => `
    max-width: ${maxWidth === 100 ? `${maxWidth}%` : `${maxWidth}px`};
    width: 100%;
    margin: 0 auto;
    background-color: ${bgColor};
    padding: 20px;
    box-sizing: border-box;
  `}
`;
