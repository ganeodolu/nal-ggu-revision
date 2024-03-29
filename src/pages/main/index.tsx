import React, { useCallback, useState, useEffect } from "react";
import { categoryListState, locationState } from "@/lib/store";
import { timeTransformWithBufferHour } from "@/lib/utils";
import { getAstronomyInformation, getWeatherInformation } from "@/pages/api";
import { useQueries } from "@tanstack/react-query";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { makeDate } from "../api/astronomy";
import type { FullData, IndexSignatureForecastData } from "@/lib/types";
import Loading from "@/components/common/Loading";
import MainHeader from "@/components/main/Header";
import WeatherBox from "@/components/main/WeatherBox";

const Main = () => {
  const [selectedCategoryList, setSelectedCategoryList] =
    useRecoilState(categoryListState);
  const selectedLocation = useRecoilValue(locationState);
  const [name, x, y, lon, lat] = selectedLocation;
  const location = { name, x, y, lon, lat };

  const [forecastData, setForecastData] = useState({});

  const [
    {
      data: weatherData,
      isError: isWeatherDataError,
      isLoading: isWeatherDataLoading,
      error: weatherDataError
    },
    {
      data: astronomyData,
      isError: isAstronomyDataError,
      isLoading: isAstronomyDataLoading,
      error: astronomyDataError
    }
  ] = useQueries({
    queries: [
      {
        queryKey: ["getWeather", x, y, timeTransformWithBufferHour(0.5)],
        queryFn: () => getWeatherInformation(x, y),
        retry: 1
      },
      {
        queryKey: ["getAstronomy", lon, lat, makeDate()],
        queryFn: () => getAstronomyInformation(lon, lat),
        retry: 1
      }
    ]
  });

  useEffect(() => {
    let transformingForecastData: IndexSignatureForecastData = {};
    if (weatherData && astronomyData) {
      [...weatherData, ...astronomyData].forEach((item: FullData) => {
        transformingForecastData[item.category] = item;
      });
      setForecastData(transformingForecastData);
    }
  }, [weatherData, astronomyData]);

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


  return (
    <Wrapper className="wr">
      <MainHeader location={location.name} />
      <CategoryWrapper>
        {(isWeatherDataLoading || isAstronomyDataLoading) && <Loading />}
        {(isWeatherDataError || isAstronomyDataError) && (
          <h1 className="fetchError">데이터가 없습니다</h1>
        )}
        {weatherData && astronomyData && (
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
        )}
      </CategoryWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  max-width: 47rem;
  min-width: 22rem;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryWrapper = styled.article`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* justify-content: space-around; */
  .infoList {
    width: 100%;
  }
  .fetchError {
    margin-top: 45vh;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export default Main;
