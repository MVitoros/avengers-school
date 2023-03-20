import { DataType } from "../App";

const renderHeroes = (heroList: DataType[], filter: DataType[]) => {
  if (filter.length > 0) {
    return filter;
  }

  return heroList;
};

export default renderHeroes;
