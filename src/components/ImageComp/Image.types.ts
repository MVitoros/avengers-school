export type MeasurementsType = {
  width?: number;
  height?: number;
};

export type ImageType = {
  src: string;
  alt?: string;
  maxWidth?: number;
};

export type ImageProps = MeasurementsType & ImageType;
