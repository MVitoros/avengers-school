import { ContainerProps } from "./Container.types";
import * as Styled from "./Container.styles";

const Container = ({ children, ...rest }: ContainerProps) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>;
};

export default Container;
