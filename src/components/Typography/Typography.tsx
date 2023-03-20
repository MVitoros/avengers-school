import { TypographyProps } from "./Typography.types";
import * as Styled from "./Typography.styles";

const Typography = ({ children, variant, ...rest }: TypographyProps) => {
  return (
    <Styled.Typography as={variant} variant={variant} {...rest}>
      {children}
    </Styled.Typography>
  );
};

export default Typography;
