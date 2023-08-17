import StartSelectBox from "@/components/preset/StartSelectBox";
import {
  GROUP_CATEGORY,
  GROUP_CATEGORY_ARRAY_PRESET,
  SETTING_CATEGORY_PRESET
} from "@/lib/constants";
import { categoryListState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const Start = () => {
  const setSelectedCategoryList =
    useSetRecoilState(categoryListState);

  const setStoreInitialData = (index: number) => {
    const makeCategoryList = GROUP_CATEGORY_ARRAY_PRESET[index].map(
      (categoryItemNumber) => {
        return SETTING_CATEGORY_PRESET[categoryItemNumber];
      }
    );
    setSelectedCategoryList(makeCategoryList);
  };
  const { preset, keepList, selfCustom } = GROUP_CATEGORY;

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>
            <Image src="/sun.png" alt="날꾸로고" fill />
          </Logo>
          <AppTitle>NALGGU</AppTitle>
        </LogoWrapper>
        <HelloWrapper>
          <Hello>
            안녕하세요. 저는 <span>날꾸</span>에요! <br />
            <br />
            <span className="SubContent">
              저에게 궁금한게 무엇인가요? 선택해주세요!
            </span>
          </Hello>
        </HelloWrapper>
        <BoxWrapper>
          {preset.map(({ index, title, icon, color }) => (
            <div
              key={index}
              style={{ width: "100%" }}
              onClick={() => {
                setStoreInitialData(index);
              }}
            >
              <Link
                href={"/main"}
                style={{
                  width: "100%",
                  textDecoration: "none",
                  color: "black"
                }}
              >
                <StartSelectBox
                  key={index}
                  title={title}
                  icon={icon}
                  color={color}
                />
              </Link>
            </div>
          ))}
          <Link
            href={"/main"}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "black"
            }}
          >
            <StartSelectBox
              key={keepList.index}
              title={keepList.title}
              icon={keepList.icon}
              color={keepList.color}
            />
          </Link>
          <Divider></Divider>
          <Link
            href={"/setup"}
            style={{ width: "100%", textDecoration: "none", color: "black" }}
          >
            <StartSelectBox
              title={selfCustom.title}
              icon={selfCustom.icon}
              color={selfCustom.color}
            />
          </Link>
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 7rem;
  padding-right: 7rem;
  user-select: none;
  max-width: 47rem;
  min-width: 22rem;
  @media screen and (max-width: 32rem) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 32rem) {
    font-size: 0.5rem;
  }
`;

const HelloWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const Hello = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  span {
    color: #6d39ff;
  }
  @media screen and (max-width: 32rem) {
    font-size: 1.5rem;
  }

  .SubContent {
    color: black;
    font-size: 1.5rem;
    @media screen and (max-width: 32rem) {
      font-size: 1rem;
    }
  }
`;

const AppTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  @media screen and (max-width: 32rem) {
    font-size: 1rem;
  }
`;
const Logo = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  margin-right: 0.5rem;
  @media screen and (max-width: 32rem) {
    width: 3rem;
    height: 3rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-top: solid 2px lightgray;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Start;
