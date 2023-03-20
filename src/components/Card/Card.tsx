import {
  Container,
  InnerCard,
  SecondaryContent,
  MainContent,
} from "./Card.styles";
import { CardProps } from "./Card.types";
import { CardPartProps } from "./Card.types";

const Card = ({ children }: CardProps) => {
  return (
    <Container>
      <InnerCard>{children}</InnerCard>
    </Container>
  );
};

Card.SecondaryContent = ({
  children,
  flexConfig = false,
  ...rest
}: CardPartProps) => {
  return (
    <SecondaryContent flexConfig={flexConfig} {...rest}>
      {children}
    </SecondaryContent>
  );
};

Card.MainContent = ({
  children,
  flexConfig = false,
  ...rest
}: CardPartProps) => {
  return (
    <MainContent flexConfig={flexConfig} {...rest}>
      {children}
    </MainContent>
  );
};

export default Card;
