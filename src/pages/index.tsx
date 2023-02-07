import StartSelectBox from "@/components/atoms/startSelectBox";
import { startState } from "@/lib/store/startData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { PRESET_DATA } from "@/lib/constants/constants";

const Start = () => {
  const colorChip = ["#FF7A7A", "#B470EA", "#FFC42E", "#61C3A0", "#929292"];
  const [startData, setStartData] = useRecoilState(startState);
  
  const initialData = [
    [
      {
        sort: "비",
        category: "POP",
        title: "강수확률",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "PCP",
        title: "1시간 강수량",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "PTY",
        title: "강수형태",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "SKY",
        title: "하늘상태",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "TMP",
        title: "1시간 기온",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "VEC",
        title: "풍향",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "WSD",
        title: "풍속",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      }
    ],
    [
      {
        sort: "비",
        category: "POP",
        title: "강수확률",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "TMP",
        title: "1시간 기온",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "WSD",
        title: "풍속",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "SKY",
        title: "하늘상태",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "REH",
        title: "습도",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "VEC",
        title: "풍향",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "강수",
        category: "SNO",
        title: "1시간 신적설",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      }
    ],
    [
      {
        sort: "대기",
        category: "SKY",
        title: "하늘상태",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "TMP",
        title: "1시간 기온",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "PCP",
        title: "1시간 강수량",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "VEC",
        title: "풍향",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "WSD",
        title: "풍속",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "REH",
        title: "습도",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "POP",
        title: "강수확률",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      }
    ],
    [
      {
        sort: "대기",
        category: "REH",
        title: "습도",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "POP",
        title: "강수확률",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "TMP",
        title: "1시간 기온",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "VEC",
        title: "풍향",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "WSD",
        title: "풍속",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "SKY",
        title: "하늘상태",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "PCP",
        title: "1시간 강수량",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      }
    ],
    [
      {
        sort: "대기",
        category: "sunrise",
        title: "일출",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "대기",
        category: "sunset",
        title: "일몰",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      // {
      //   sort: "대기",
      //   category: "SKY",
      //   title: "하늘상태",
      //   size: "2",
      //   color: colorChip[Math.floor(Math.random() * colorChip.length)],
      // },
      // {
      //   sort: "대기",
      //   category: "TMP",
      //   title: "1시간 기온",
      //   size: "2",
      //   color: colorChip[Math.floor(Math.random() * colorChip.length)],
      // },
      {
        sort: "비",
        category: "POP",
        title: "강수확률",
        size: "2",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "PCP",
        title: "1시간 강수량",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "비",
        category: "REH",
        title: "습도",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "WSD",
        title: "풍속",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      },
      {
        sort: "바람",
        category: "VEC",
        title: "풍향",
        size: "1",
        color: colorChip[Math.floor(Math.random() * colorChip.length)]
      }
    ]
  ];

  const setStoreInitialData = (id: string) => {
    setStartData(initialData[Number(id) - 1]);
  };

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
          {PRESET_DATA.presets.map((PRESET_DATA) => (
            <div
              key={PRESET_DATA.id}
              style={{ width: "100%" }}
              onClick={() => {
                setStoreInitialData(PRESET_DATA.id);
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
                  key={PRESET_DATA.id}
                  title={PRESET_DATA.title}
                  icon={PRESET_DATA.icon}
                  color={PRESET_DATA.color}
                />
              </Link>
            </div>
          ))}
          <Divider></Divider>
          <Link
            href={"/setup"}
            style={{ width: "100%", textDecoration: "none", color: "black" }}
          >
            <StartSelectBox
              title={PRESET_DATA.selfCustom[0].title}
              icon={PRESET_DATA.selfCustom[0].icon}
              color={PRESET_DATA.selfCustom[0].color}
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
  padding-left: 7rem;
  padding-right: 7rem;
  user-select: none;
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
