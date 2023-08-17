import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { CategoryItem, IndexSignatureForecastData } from "@/lib/types";

interface Props {
  selectedCategoryItem: CategoryItem;
  forecastData: IndexSignatureForecastData;
}

const WeatherBox = ({ selectedCategoryItem, forecastData }: Props) => {
  const [weatherData, setWeatherData] = useState<string>();
  const [weatherImg, setWeatherImg] = useState<string>();
  const [weatherUnit, setWeatherUnit] = useState<string>();

  const skyTransform = (code: string) => {
    switch (code) {
      case "1":
        setWeatherImg("/icon/sunny.png");
        return "맑음";
      case "2":
        setWeatherImg("/icon/little_cloudy.png");
        return "구름조금";
      case "3":
        setWeatherImg("/icon/many_cloudy.png");
        return "구름많음";
      default:
        setWeatherImg("/icon/cloudy.png");
        return "흐림";
    }
  };

  const rainTransform = (code: string) => {
    switch (code) {
      case "0":
        setWeatherImg("/icon/rainy.png");
        return "없음";
      case "1":
        setWeatherImg("/icon/rainy.png");
        return "비";
      case "2":
        setWeatherImg("/icon/snow and white.png");
        return "비/눈";
      case "3":
        setWeatherImg("/icon/snow.png");
        return "눈";
      case "4":
        setWeatherImg("/icon/sonakki.png");
        return "소나기";
    }
  };

  useEffect(() => {
    const CATEGORY = selectedCategoryItem.category;

    if (forecastData[CATEGORY]) {
      switch (CATEGORY) {
        case "SKY":
          setWeatherData(skyTransform(forecastData[CATEGORY].fcstValue));
          return;
        case "PTY":
          setWeatherData(rainTransform(forecastData[CATEGORY].fcstValue));
          return;
        case "TMP":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherUnit("℃");
          setWeatherImg("/icon/temp.png");
          return;
        case "PCP":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherUnit("");
          setWeatherImg("/icon/rain_onehour.png");
          return;
        case "SNO":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherImg("/icon/snow.png");
          setWeatherUnit("cm");
          return;
        case "POP":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherImg("/icon/rainy.png");
          setWeatherUnit("%");
          return;
        case "REH":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherImg("/icon/wet.png");
          setWeatherUnit("%");
          return;
        case "WAV":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherImg("/icon/wave.png");
          setWeatherUnit("M");
          return;
        case "VEC":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherImg("/icon/wind2.png");
          setWeatherUnit("deg");
          return;
        case "WSD":
          setWeatherData(forecastData[CATEGORY].fcstValue);
          setWeatherImg("/icon/wind.png");
          setWeatherUnit("m/s");
          return;
        case "SUNRISE":
          setWeatherData(
            forecastData[CATEGORY].fcstValue.slice(0, 2) +
              ":" +
              forecastData[CATEGORY].fcstValue.slice(2)
          );
          setWeatherImg("/icon/sunrise.png");
          setWeatherUnit("");
          return;
        case "SUNSET":
          setWeatherData(
            forecastData[CATEGORY].fcstValue.slice(0, 2) +
              ":" +
              forecastData[CATEGORY].fcstValue.slice(2)
          );
          setWeatherImg("/icon/sunset.png");
          setWeatherUnit("");
          return;
        default:
          return setWeatherData(forecastData[CATEGORY].fcstValue);
      }
    }
  }, [forecastData]);

  return (
    <Wrapper
      size={selectedCategoryItem.size === "1" ? "40%" : "90%"}
      color={selectedCategoryItem.color}
    >
      <img src={weatherImg} />
      <div className="weatherDataWrapper">
        <div className="weatherTitle">{selectedCategoryItem.title}</div>
        <div className="weatherDataGroup">
          <div className="weatherData">{weatherData}</div>
          <div className="weatherUnit">{weatherUnit}</div>
        </div>
      </div>
    </Wrapper>
  );
};

interface WeatherBox {
  size: string;
  color: string;
}

const Wrapper = styled.div<WeatherBox>`
  box-shadow: 2px 2px 2px 2px rgb(223, 222, 223);
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.color};
  height: 15rem;
  width: ${(props) => props.size};
  margin: 2.5rem 5%;
  border-radius: 10px;
  font-weight: 600;
  .weatherDataGroup {
    display: flex;
  }
  ${(props) =>
    props.size === "40%" &&
    css`
      .weatherDataWrapper {
        margin: auto auto 2rem auto;
        line-height: 3rem;
        text-align: center;
        .weatherTitle {
          font-size: 1.5rem;
          font-weight: 400;
        }
        .weatherData {
          font-size: 3rem;
        }
        .weatherUnit {
          font-size: 1.5rem;
          margin-left: 10px;
        }
      }
      img {
        width: 8rem;
        height: 8rem;
      }
    `}
  ${(props) =>
    props.size === "90%" &&
    css`
      justify-content: space-around;
      align-items: center;
      .weatherDataWrapper {
        line-height: 4rem;
        text-align: center;
        .weatherTitle {
          font-size: 1.5rem;
          font-weight: 400;
        }
        .weatherData {
          font-size: 4rem;
          margin-bottom: 2.5rem;
        }
        .weatherUnit {
          font-size: 1.5rem;
          margin-left: 10px;
        }
      }
      img {
        width: 11rem;
        height: 11rem;
      }
    `}
  /* h1 {
    font-size: 5rem;
    margin-top: 1.5rem;
  } */
  color: white;
  @media screen and (max-width: 32rem) {
    height: 10rem;
    font-size: 1rem;
    ${(props) =>
      props.size === "40%" &&
      css`
        .weatherDataWrapper {
          line-height: 2rem;
          margin-top: 3.5rem;
          .weatherTitle {
            font-size: 1rem;
            font-weight: 400;
          }
          .weatherData {
            font-size: 2rem;
          }
        }
        img {
          width: 5rem;
          height: 5rem;
        }
      `}
    ${(props) =>
      props.size === "90%" &&
      css`
        .weatherDataWrapper {
          line-height: 2.5rem;
          margin-top: 2rem;
          .weatherTitle {
            font-size: 1.5rem;
            font-weight: 400;
          }
          .weatherData {
            font-size: 3rem;
          }
        }
        img {
          width: 7rem;
          height: 7rem;
        }
      `}
  }
`;

export default WeatherBox;
