import styled from "styled-components";
import { TypographyProps } from "./Typography.types";
import { VariantType } from "./Typography.types";
import theme from "../../theme/theme";

const getFontSize = (variant: VariantType, size: number) => {
  if (variant === "h1" || variant === "h2") {
    return `${theme.typography.heading.sizes[size]}px`;
  } else {
    return `${theme.typography.paragraph.sizes[size]}px`;
  }
};

export const Typography = styled.p<TypographyProps>`
  ${({ variant, variantSize, weight }) => `
      font-size: ${getFontSize(variant, variantSize)};
      font-weight: ${weight ? weight : "400"};
    `};
`;
