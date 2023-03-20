import styled, { FlattenSimpleInterpolation, css } from "styled-components";

import { CardPartStyles } from "./Card.types";

export const Container = styled.div``;

export const InnerCard = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const flexAdjustment = ({
  flexConfig,
  width,
}: CardPartStyles): FlattenSimpleInterpolation => {
  if (!flexConfig) return css``;

  return css`
    flex: 0 0 ${width}%;
    width: ${width};
  `;
};

export const SecondaryContent = styled.div<CardPartStyles>`
  ${({ width, flexConfig, bgColor }) => css`
    ${flexAdjustment({ flexConfig, width })};
    background-color: ${bgColor ? bgColor : "inital"};
  `}
`;

export const MainContent = styled.div<CardPartStyles>`
  ${({ width, flexConfig, bgColor }) => css`
    ${flexAdjustment({ flexConfig, width })};
    background-color: ${bgColor ? bgColor : "inital"};
  `}
`;
