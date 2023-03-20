import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Typography from "./components/Typography/Typography";
import "./App.css";
import { Container } from "./components/Container/Container.styles";
import theme from "./theme/theme";

import Card from "./components/Card/Card";
import Image from "./components/ImageComp/Image";
import Logo from "./assets/img/logo.png";
import Main from "./components/Main/Main";
import CardGroup from "./components/CardGroup/CardGroup";
import Form from "./components/Form/Form";
import Search from "./components/Search/Search";

import renderHeroes from "./utils/renderHeros";

type Lesson = {
  ects: number;
  grade: number;
};

export type DataType = {
  alias: string;
  dob: string;
  gender: string;
  image: string;
  name: string;
  nationality?: string;
  lessons: Record<string, Lesson>;
};

const lightGrey = theme.colors.darkGrey;

function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data.filter((item) => {
    if (item.alias.toLowerCase().includes(searchValue.toLowerCase())) {
      return item;
    }

    return false;
  });

  const searchValueHandler = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/avengers");
      const data = await response.json();
      setData(data);
    })();
  }, [setData]);

  return (
    <div className="App">
      <Container maxWidth={1440} bgColor={theme.colors.lightRed}>
        <Header>
          <Card>
            <Card.SecondaryContent width={30} flexConfig={true}>
              <Image src={Logo} maxWidth={400} />
            </Card.SecondaryContent>
            <Card.MainContent>
              <Typography variant="h1" variantSize={3}>
                School
              </Typography>
            </Card.MainContent>
          </Card>
        </Header>
      </Container>

      <Container maxWidth={1440} bgColor={theme.colors.lightGrey}>
        <Main>
          <Container maxWidth={750} bgColor={theme.colors.lightGrey}>
            <Form>
              <Search
                label="Seach for a hero name"
                value={searchValue}
                onChange={(value) => searchValueHandler(value)}
              />
            </Form>
            <CardGroup>
              {renderHeroes(data, filteredData).map(
                ({ alias, image, lessons }: DataType) => {
                  return (
                    <Card key={alias}>
                      <Card.SecondaryContent width={40} flexConfig={true}>
                        <Image src={image} />
                      </Card.SecondaryContent>
                      <Card.MainContent
                        width={60}
                        flexConfig={true}
                        bgColor={lightGrey}
                      >
                        <Typography variant="h2" variantSize={0}>
                          {alias}
                        </Typography>
                        {Object.keys(lessons).map((el) => {
                          return (
                            <Typography key={el} variant="p" variantSize={0}>
                              {`Lesson: ${el}, grade: ${lessons[el].grade}`}
                            </Typography>
                          );
                        })}
                      </Card.MainContent>
                    </Card>
                  );
                }
              )}
            </CardGroup>
          </Container>
        </Main>
      </Container>
    </div>
  );
}

export default App;
