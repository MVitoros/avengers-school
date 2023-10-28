import * as Styled from "./Seach.styles";
import { SearchProps } from "./Search.types";

const Search = ({ value, label, onChange }: SearchProps) => {
  return (
    <Styled.Search>
      {label && <Styled.Label htmlFor="input-name">{label}</Styled.Label>}
      <Styled.Input
        id="input-name"
        onInput={(event) => onChange(event.currentTarget.value)}
        value={value}
      />
    </Styled.Search>
  );
};

export default Search;
