import Card from "../../../../components/Card/Card";
import CardGroup from "../../../../components/CardGroup/CardGroup";
import Image from "../../../../components/ImageComp/Image";
import Typography from "../../../../components/Typography/Typography";
import theme from "../../../../theme/theme";
import { Link } from "react-router-dom";
import { encodeURL } from "../../../../utils/editURL";
import { HeroListType } from "../../types/homepageTypes";

const lightGrey = theme.colors.darkGrey;

const HeroList = ({ heroesList }: HeroListType) => (
  <CardGroup>
    {heroesList.map(({ alias, image, lessons }) => (
      <Link
        to={`heroes/${encodeURL(alias)}`}
        key={alias}
        state={heroesList.find((item) => item.alias === alias)}
      >
        <Card>
          <Card.SecondaryContent width={40} flexConfig={true}>
            <Image maxWidth={290} src={image} />
          </Card.SecondaryContent>
          <Card.MainContent width={60} flexConfig={true} bgColor={lightGrey}>
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
      </Link>
    ))}
  </CardGroup>
);
export default HeroList;
