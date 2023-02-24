import { timeTransformWithBufferHour } from "@/lib/utils";
import { apiWithWeather } from "./main";

export const getWeatherInformation = async (x: string, y: string) => {
  const [base_date, base_time] = timeTransformWithBufferHour(0.5);
  const response = await apiWithWeather({
    params: {
      serviceKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
      numOfRows: "12",
      pageNo: "1",
      base_date,
      base_time,
      nx: x,
      ny: y,
      dataType: "JSON"
    }
  });
  return response.data.response.body.items.item;
};
