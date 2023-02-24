import MainHeader from "@/components/organisms/Header";
import WeatherBox from "@/components/organisms/WeatherBox";
import { categoryListState, locationState } from "@/lib/store";
import { timeTransformWithBufferHour } from "@/lib/utils";
import { getAstronomyInformation, getWeatherInformation } from "@/pages/api";
import { useQueryErrorResetBoundary, useQueries } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense, useCallback, useState, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { makeDate } from "../api/astronomy";
import type { FullData } from "@/lib/types";

const Main = () => {
  const [selectedCategoryList, setSelectedCategoryList] =
    useRecoilState(categoryListState);
  console.log(selectedCategoryList);
  const [selectedLocation, setSelectedLocation] = useRecoilState(locationState);
  console.log(selectedLocation);
  const { reset } = useQueryErrorResetBoundary();
  const [name, x, y, lon, lat] = selectedLocation;
  const location = { name, x, y, lon, lat };

  const [forecastData, setForecastData] = useState({});

  const [
    {
      data: weatherData,
      isError: isWeatherDataError,
      isLoading: isWeatherDataLoading,
      isFetched: isWeatherDataFetched
    },
    {
      data: astronomyData,
      isError: isAstronomyDataError,
      isLoading: isAstronomyDataLoading,
      isFetched: isAstronomyDataFetched
    }
  ] = useQueries({
    queries: [
      {
        queryKey: ["getWeather", x, y, timeTransformWithBufferHour(0.5)],
        queryFn: () => getWeatherInformation(x, y)
      },
      {
        queryKey: ["getAstronomy", lon, lat, makeDate()],
        queryFn: () => getAstronomyInformation(lon, lat)
      }
    ]
  });

  console.log(weatherData);
  console.log(astronomyData);

  useEffect(() => {
    let transformingForecastData: any = {};
    if (weatherData && astronomyData) {
      [...weatherData, ...astronomyData].forEach((item: FullData) => {
        transformingForecastData[item.category] = item;
      });
      setForecastData(transformingForecastData);
    }
    console.log(transformingForecastData);
  }, [weatherData, astronomyData]);

  // useEffect(() => {
  //   let weatherArray: any = {};

  //   Promise.all([
  //     getWeatherInformation(x, y),
  //     getAstronomyInformation(lon, lat)
  //   ])
  //     .then((response) =>
  //       response.forEach((data: Weather[] | Astronomy[]) => {
  //         console.log(data);
  //         data.forEach((val: any) => {
  //           weatherArray[val.category] = val;
  //         });
  //         setForecastData(weatherArray);
  //         console.log(weatherArray);
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //       [...MOCKUP_WEATHER_DATA, ...MOCKUP_ASTRONOMY_DATA].forEach((val) => {
  //         weatherArray[val.category] = val;
  //       });
  //       setForecastData(weatherArray);
  //       console.log(weatherArray);
  //     });
  // }, [name]);

  const handleChangeOrder = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;
      if (!destination) return;
      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;
      const newSelectedCategoryList = [...selectedCategoryList];
      const [cutItem] = newSelectedCategoryList.splice(result.source.index, 1);
      newSelectedCategoryList.splice(destination.index, 0, cutItem);
      setSelectedCategoryList(newSelectedCategoryList);
    },
    [selectedCategoryList]
  );


  
  if (isWeatherDataError || isAstronomyDataError) {
    return <button onClick={() => location.reload()}>새로고침해주세요</button>;
  }
  if (!isWeatherDataFetched || !isAstronomyDataFetched) {
    return <span>로딩중</span>;
  }


  return (
    <Wrapper className="wr">
      {/* <Suspense fallback={<>로딩</>}>
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              <button onClick={() => resetErrorBoundary()}>Try again</button>
            </div>
          )}
        > */}
          <MainHeader location={location.name} />
          <WeatherWrapper>
            {/* {selectedCategoryList.map((selectedCategoryItem) => (
          <WeatherBox
            selectedCategoryItem={selectedCategoryItem}
            forecastData={forecastData}
            key={selectedCategoryItem.category}
          />
        ))} */}

            <DragDropContext onDragEnd={handleChangeOrder}>
              <Droppable droppableId="infoList">
                {(provided) => (
                  <div
                    className="infoList"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {selectedCategoryList.map((selectedCategoryItem, i) => (
                      <Draggable
                        draggableId={selectedCategoryItem.category}
                        index={i}
                        key={selectedCategoryItem.category}
                      >
                        {(provided, Snapshot) => {
                          return (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <WeatherBox
                                // isDragging={Snapshot.isDragging}
                                selectedCategoryItem={selectedCategoryItem}
                                forecastData={forecastData}
                                key={selectedCategoryItem.category}
                              />
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </WeatherWrapper>
        {/* </ErrorBoundary>
      </Suspense> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
`;
const WeatherWrapper = styled.article`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  .infoList {
    width: 100%;
  }
`;

export default Main;
