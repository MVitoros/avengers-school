import { MeasurementsType } from "./Image.types";
import styled from "styled-components";

import { ImageType } from "./Image.types";

export const ImgWrapper = styled.div<MeasurementsType>`
  ${({ width, height }) => `
    width: ${width ? `${width}px` : "100%"};
    height: ${height ? `${height}px` : "100%"};
  `}
`;
export const ImgPicture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;
export const Img = styled.img<ImageType>`
  ${({ maxWidth }) => `
    max-width: ${maxWidth ? maxWidth : ""}px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `}
`;
