import { ReactElement } from "react";

import { CardProps } from "../Card/Card.types";

export type CardGroupProps = {
  children: ReactElement<CardProps>[];
  width?: number;
};
