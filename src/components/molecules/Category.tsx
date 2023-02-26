import { SETTING_CATEGORY_PRESET } from "@/lib/constants";
import { categoryListState } from "@/lib/store";
import { CategoryItem } from "@/lib/types";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Category = () => {
  const [selectedCategoryList, setSelectedCategoryList] =
    useRecoilState(categoryListState);

  const restCategoryList = (name: string) => {
    return SETTING_CATEGORY_PRESET.filter((categoryInfo) => {
      return (
        categoryInfo.sort === name &&
        selectedCategoryList.every(
          (item) => item.category !== categoryInfo.category
        )
      );
    });
  };

  const onAddCategory = (category: CategoryItem) => {
    setSelectedCategoryList((prev) => {
      return [...prev, category];
    });
  };

  return (
    <CategoryContainer>
      <WeatherCategory>
        <WeatherCategoryTitle>⛅ 대기</WeatherCategoryTitle>
        {restCategoryList("대기").map((data) => (
          <WeatherCategoryButton key={data.category}>
            <span>{data.title}</span>
            <Wrappper>
              <AddRemoveButton onClick={() => onAddCategory(data)}>추가</AddRemoveButton>
              {/* <DotsImage src="/dots.png" alt="dots" /> */}
            </Wrappper>
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>☔️ 강수</WeatherCategoryTitle>
        {restCategoryList("강수").map((data) => (
          <WeatherCategoryButton key={data.category}>
            <span>{data.title}</span>
            <Wrappper>
              <AddRemoveButton onClick={() => onAddCategory(data)}>추가</AddRemoveButton>
              {/* <DotsImage src="/dots.png" alt="dots" /> */}
            </Wrappper>
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>💨 바람</WeatherCategoryTitle>
        {restCategoryList("바람").map((data) => (
          <WeatherCategoryButton key={data.category}>
            <span>{data.title}</span>
            <Wrappper>
              <AddRemoveButton onClick={() => onAddCategory(data)}>추가</AddRemoveButton>
              {/* <DotsImage src="/dots.png" alt="dots" /> */}
            </Wrappper>
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
      <WeatherCategory>
        <WeatherCategoryTitle>🌅 천문</WeatherCategoryTitle>
        {restCategoryList("천문").map((data) => (
          <WeatherCategoryButton key={data.category}>
            <span>{data.title}</span>
            <Wrappper>
              <AddRemoveButton onClick={() => onAddCategory(data)}>추가</AddRemoveButton>
              {/* <DotsImage src="/dots.png" alt="dots" /> */}
            </Wrappper>
          </WeatherCategoryButton>
        ))}
      </WeatherCategory>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  padding-bottom: 4rem;
`;

const WeatherCategory = styled.div`
  margin: 0.3rem 0 1rem 0;
  padding: 1rem 0 0 0;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const WeatherCategoryTitle = styled.p`
  margin: 0 0 0.5rem 0;
`;

const WeatherCategoryButton = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  justify-content: space-between;
  border-radius: 0.6rem;
  border: 1px solid #cdcdcd;
  padding: 2rem 1rem;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const Wrappper = styled.div`
  ${(props) => props.theme.flex.flexBox()};
  flex-direction: row;
`;

const AddRemoveButton = styled.button`
  border-radius: 5px;
  padding: 5px 15px;
  border: none;
  background-color: #cdcdcd;
  cursor: pointer;
  &:hover {
    background-color: #888;
  }
`;


const DotsImage = styled.img`
  width: 1rem;
  right: 0.5rem;
`;

export default Category;
