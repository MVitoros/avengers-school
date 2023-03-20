import * as Styled from "./Form.styles";

const Form = ({ children }: { children: React.ReactNode }) => {
  return <Styled.Form>{children}</Styled.Form>;
};

export default Form;
