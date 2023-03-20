export type TypographyProps = {
  children: React.ReactNode;
  variant: VariantType;
  variantSize: number;
  weight?: string;
  color?: string;
};

export type VariantType = "h1" | "h2" | "p";
