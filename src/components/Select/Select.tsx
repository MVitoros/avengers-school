import * as Styled from "./Select.styles";
import { SelectProps } from "./Select.types";

const Select = ({ value, options, label, onChange }: SelectProps) => {
  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <Styled.SelectWrapper>
      {label && <Styled.Label htmlFor="input-lesson">{label}</Styled.Label>}
      <Styled.Select
        id="input-lesson"
        value={value}
        onChange={selectChangeHandler}
      >
        <Styled.Option value="">Select a lesson</Styled.Option>
        {options.map((option) => (
          <Styled.Option key={option} value={option}>
            {option}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.SelectWrapper>
  );
};

export default Select;
