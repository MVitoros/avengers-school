export type SelectProps = {
  value: string;
  options: string[];
  label?: string;
  onChange: (value: string) => void;
};
