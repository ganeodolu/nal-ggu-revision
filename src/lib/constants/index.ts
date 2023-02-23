import { Weather, Astronomy } from "../types";

export const COLOR_CHIP = ["#FF7A7A", "#B470EA", "#FFC42E", "#61C3A0", "#929292"];

export const DEFAULT_LOCATION = [
  "경기도 성남시 분당구 판교동",
  "62",
  "123",
  "127.0986189",
  "37.389844"
];

export const MOCKUP_WEATHER_DATA: Weather[] = [
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "TMP",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "20",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "UUU",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "1.8",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "VVV",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "-0.8",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "VEC",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "294",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "WSD",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "1.9",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "SKY",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "4",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "PTY",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "0",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "POP",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "30",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "WAV",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "0",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "PCP",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "강수없음",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "REH",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "65",
    nx: 55,
    ny: 127
  },
  {
    baseDate: "20221016",
    baseTime: "1400",
    category: "SNO",
    fcstDate: "20221016",
    fcstTime: "1500",
    fcstValue: "적설없음",
    nx: 55,
    ny: 127
  }
];

export const MOCKUP_ASTRONOMY_DATA: Astronomy[] = [
  { category: "SUNRISE", value: "0646" },
  { category: "SUNSET", value: "1747" }
];

export const PRESET_DATA = {
    presets: [
      {
        id: "1",
        title: "비가 오는지 궁금해요",
        icon: "☔",
        color: "#609FFF"
      },
      // {
      //   id: "2",
      //   title: "달릴만한 날씨인지 궁금해요",
      //   icon: "🏃",
      //   color: "#FF7A7A"
      // },
      // {
      //   id: "3",
      //   title: "하늘 상태가 궁금해요",
      //   icon: "🌤️",
      //   color: "#B470EA"
      // },
      // {
      //   id: "4",
      //   title: "꿉꿉하진 않은지 궁금해요",
      //   icon: "🌫️",
      //   color: "#FFC42E"
      // },
      // {
      //   id: "5",
      //   title: "아무렇게나 해주세요",
      //   icon: "🛏️",
      //   color: "#61C3A0"
      // }
    ],
    selfCustom: [{ title: "제가 꾸미고 싶어요", icon: "🌈", color: "#929292" }]
  };

export const SETTING_CATEGORY_PRESET = [
  {
    sort: "대기",
    category: "TMP",
    title: "1시간 기온",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "대기",
    category: "SKY",
    title: "하늘상태",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "대기",
    category: "REH",
    title: "습도",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "강수",
    category: "POP",
    title: "강수확률",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "강수",
    category: "PTY",
    title: "강수형태",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "강수",
    category: "PCP",
    title: "1시간 강수량",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "강수",
    category: "SNO",
    title: "1시간 신적설",
    size: "2",
    color: "#64B2E3"
  },

  {
    sort: "바람",
    category: "WSD",
    title: "풍속",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "바람",
    category: "VEC",
    title: "풍향",
    size: "2",
    color: "#64B2E3"
  },
  // {
  //   sort: "바람",
  //   category: "WAV",
  //   title: "파고",
  //   size: "2",
  //   color: "#64B2E3"
  // }
  {
    sort: "천문",
    category: "SUNRISE",
    title: "일출",
    size: "2",
    color: "#64B2E3"
  },
  {
    sort: "천문",
    category: "SUNSET",
    title: "일몰",
    size: "2",
    color: "#64B2E3"
  }
];
