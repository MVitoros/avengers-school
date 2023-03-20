import { ImgWrapper } from "./Image.styles";
import { ImgPicture } from "./Image.styles";
import { Img } from "./Image.styles";

import { ImageProps } from "./Image.types";

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return (
    <ImgWrapper {...rest}>
      <ImgPicture>
        <Img src={src} alt={alt ? alt : "content image"} {...rest} />
      </ImgPicture>
    </ImgWrapper>
  );
};

export default Image;
