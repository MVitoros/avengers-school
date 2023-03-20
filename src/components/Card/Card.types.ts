import React from "react";

export type CardProps = {
  children: React.ReactNode;
};

export type CardPartStyles = {
  width?: number;
  flexConfig?: boolean;
  bgColor?: string;
};

export type CardPartProps = CardProps & CardPartStyles;
