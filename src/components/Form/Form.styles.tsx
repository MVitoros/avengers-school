import styled from "styled-components";
import theme from "../../theme/theme";

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  column-gap: 15px;
  background-color: ${theme.colors.darkRed};
  padding: 20px;
  border-radius: 22px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
