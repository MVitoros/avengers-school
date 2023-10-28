import { useLocation, useParams } from "react-router-dom";
import { decodeURL } from "../../utils/editURL";
import Image from "../../components/ImageComp/Image";
import Typography from "../../components/Typography/Typography";
import MainPageLayout from "../../layout/MainPageLayout";
import { HeroDataType } from "./types/heroPageTypes";

const Heroes = () => {
  const { heroId } = useParams();
  const location = useLocation();

  const heroData: HeroDataType = location.state;

  return (
    <div className="Heroes">
      <MainPageLayout>
        {!heroData ? (
          <h1>No such Hero was found in the database.</h1>
        ) : (
          <>
            <Typography variant="h2" variantSize={0}>
              {heroData.name}
            </Typography>
            <Typography variant="h1" variantSize={3}>
              {heroId && decodeURL(heroId)}
            </Typography>
            <Typography variant="p" variantSize={2}>
              {heroData.gender}
            </Typography>
            {heroData.nationality && (
              <Typography variant="h2" variantSize={0}>
                {heroData.nationality}
              </Typography>
            )}
            <Image src={heroData.image} />
            {Object.keys(heroData.lessons).map((el) => {
              return (
                <Typography key={el} variant="h2" variantSize={0}>
                  {`Lesson: ${el}, grade: ${heroData.lessons[el].grade}`}
                </Typography>
              );
            })}
          </>
        )}
      </MainPageLayout>
    </div>
  );
};

export default Heroes;
