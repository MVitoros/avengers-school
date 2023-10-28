import { ReactNode } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import MainLayout from "../components/MainLayout/MainLayout";
import { Typography } from "../components/Typography/Typography.styles";
import theme from "../theme/theme";
import Image from "../components/ImageComp/Image";
import Logo from "../assets/img/logo.png";
import Container from "../components/Container/Container";

const MainPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container maxWidth={1440} bgColor={theme.colors.darkRed}>
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
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default MainPageLayout;
