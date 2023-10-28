import { FetchedHeroesDataType } from "../../../generalTypes";

export type HeroDataType = Omit<FetchedHeroesDataType, "alias" | "dob">;
