import { useLocation, useParams } from "react-router-dom";
import { decodeURL } from "../utils/editURL";
import Image from "../components/ImageComp/Image";
import Typography from "../components/Typography/Typography";
import { FetchedHeroesDataType } from "../utils/types/generalTypes";
import MainPageLayout from "../layout/MainPageLayout";

const Heroes = () => {
  const { heroId } = useParams();
  const location = useLocation();

  const heroSlice = location.state as FetchedHeroesDataType;

  return (
    <div className="Heroes">
      <MainPageLayout>
        {!heroSlice ? (
          <h1>No such Hero was found in the database.</h1>
        ) : (
          <>
            <Typography variant="h2" variantSize={0}>
              {heroSlice.name}
            </Typography>
            <Typography variant="h1" variantSize={3}>
              {heroId && decodeURL(heroId)}
            </Typography>
            <Typography variant="p" variantSize={2}>
              {heroSlice.gender}
            </Typography>
            {heroSlice.nationality && (
              <Typography variant="h2" variantSize={0}>
                {heroSlice.nationality}
              </Typography>
            )}
            <Image src={heroSlice.image} />
            {Object.keys(heroSlice.lessons).map((el) => {
              return (
                <Typography key={el} variant="h2" variantSize={0}>
                  {`Lesson: ${el}, grade: ${heroSlice.lessons[el].grade}`}
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
