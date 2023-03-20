import * as Styled from "./Seach.styles";
import { SearchProps } from "./Search.types";

const Search = ({ value, label, onChange }: SearchProps) => {
  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <Styled.Search>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.Input
        onInput={(event) => inputChangeHandler(event)}
        value={value}
      />
    </Styled.Search>
  );
};

export default Search;
