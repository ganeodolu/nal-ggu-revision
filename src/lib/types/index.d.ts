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
