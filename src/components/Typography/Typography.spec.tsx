import { render, screen } from "@testing-library/react";
import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

const props: TypographyProps = {
  children: "text",
  variant: "h1",
  variantSize: 1,
};

const renderTypography = (props: TypographyProps) => {
  return render(<Typography {...props} />);
};

it("renders typography component", () => {
  renderTypography(props);

  const textElement = screen.getByText(/text/i);

  expect(textElement).toBeInTheDocument();
});
