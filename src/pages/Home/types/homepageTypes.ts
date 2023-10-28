import { FetchedHeroesDataType } from "../../../generalTypes";

export type HeroListType = {
  heroesList: Pick<FetchedHeroesDataType, "alias" | "image" | "lessons">[];
};
