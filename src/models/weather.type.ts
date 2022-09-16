type WindDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
type PrecipitationType = "snow" | "rain" | "frzr" | "icep" | "none"; //"frzr"-(freezing rain) // "icep"-(ice pellets)
type PrecipitationAmount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type CloudCover = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type WindSpeed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type LiftedIndex = -10 | -6 | -4 | -1 | 2 | 6 | 10 | 15;
type WeatherType =
  | "clearday"
  | "clearnight"
  | "pcloudyday"
  | "pcloudynight"
  | "mcloudyday"
  | "mcloudynight"
  | "cloudyday"
  | "cloudynight"
  | "humidday"
  | "humidnight"
  | "lightrainday"
  | "lightrainnight"
  | "oshowerday"
  | "oshowernight"
  | "ishowerday"
  | "ishowernight"
  | "lightsnowday"
  | "lightsnownight"
  | "rainday"
  | "rainnight"
  | "snowday"
  | "snownight"
  | "rainsnowday"
  | "rainsnownight";

export interface IWeather {
  timepoint?: number;
  cloudcover?: CloudCover;
  lifted_index?: LiftedIndex;
  prec_type?: PrecipitationType;
  prec_amount?: PrecipitationAmount;
  temp2m?: number; // [-76:60]
  rh2m?: number; // [0:100]
  wind10m?: {
    direction?: WindDirection;
    speed?: WindSpeed;
  };
  weather?: WeatherType;
}

export type Coordinates = { latitude: number; longitude: number } & {
  [key: string]: number;
};

export interface IWeatherFull {
  product?: string;
  init?: number;
  dataseries?: Array<IWeather>;
}

export interface WeatherState {
  data: IWeatherFull;
  status: "idle" | "loading" | "failed";
}
