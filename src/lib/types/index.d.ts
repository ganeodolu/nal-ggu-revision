export interface IndexSignatureForecastData {
  [i: string]: FullData;
}

export interface Weather {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

export interface Astronomy {
  category: string;
  value: string;
}

export type FullData = Weather | Astronomy;

export interface CategoryItem {
  sort: string;
  category: string;
  title: string;
  size: string;
  color: string;
}

export interface Address {
  code: string;
  longName: string;
  shortName: string;
  types:
      | "SIDO"
      | "SIGUGUN"
      | "RI"
      | "ROAD_NAME"
      | "BUILDING_NUMBER"
      | "BUILDING_NAME"
      | "LAND_NUMBER"
      | "POSTAL_CODE";
}

export interface AddressItem {
  addressElements: Address[];
  distance: string;
  englishAddress: string;
  jibunAddress: string;
  roadAddress: string;
  x: string;
  y: string;
}
