import { CardGroupProps } from "./CardGroup.types";
import * as Styled from "./CardGroup.styles";

const CardGroup = ({ children, ...rest }: CardGroupProps) => {
  return <Styled.CardGroup {...rest}>{children}</Styled.CardGroup>;
};

export default CardGroup;
