import { useState } from "react";

import Form from "../../components/Form/Form";
import Search from "../../components/Search/Search";
import Select from "../../components/Select/Select";
import HeroList from "./components/HeroList/HeroList";
//helpers
import { debounce } from "../../utils/debounce";
import generateLessons from "../../utils/generateLessons";

//types
import { FetchedHeroesDataType } from "../../generalTypes";

//hooks
import useFetchData from "../../hooks/services/useFetchData";
import renderHeroes from "../../utils/renderHeroes";
import MainPageLayout from "../../layout/MainPageLayout";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const selectValueHandler = (value: string) => {
    setSelectValue(value);
  };

  const debouncedHandleChange = debounce((value) => setSearchValue(value));

  const {
    data: heroes,
    isLoading,
    hasError,
  } = useFetchData<FetchedHeroesDataType>({
    url: "http://localhost:4000/avengers",
  });

  const mainContent = () => {
    if (isLoading) return <h1>Loading...</h1>;

    if (!isLoading && hasError.status) <h1>{hasError.message}</h1>;

    return (
      <>
        <Form>
          <Select
            value={selectValue}
            options={generateLessons(heroes)}
            label={"Search for a lesson"}
            onChange={selectValueHandler}
          />
          <Search
            label="Seach for a hero name"
            onChange={debouncedHandleChange}
          />
        </Form>
        <HeroList heroesList={renderHeroes(heroes, searchValue, selectValue)} />
      </>
    );
  };

  return (
    <div className="Home">
      <MainPageLayout>{mainContent()}</MainPageLayout>
    </div>
  );
};

export default Home;
