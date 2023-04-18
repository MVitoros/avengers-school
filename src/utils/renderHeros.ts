import { DataType } from "../App";

const renderHeroes = (
  heroList: DataType[],
  searchValue: string,
  selectValue: string
) => {
  if (!selectValue && !searchValue) {
    return heroList;
  }

  const filteredData = heroList.filter((item) => {
    const lessonMatch = selectValue
      ? Object.keys(item.lessons).some((lessonName) =>
          lessonName.toLowerCase().includes(selectValue.toLowerCase())
        )
      : true;
    const heroMatch = searchValue
      ? item.alias.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return lessonMatch && heroMatch;
  });

  if (filteredData.length === 0) {
    return [];
  }

  return filteredData;
};

export default renderHeroes;
