import { DEFAULT_LOCATION } from "@/lib/constants/constants";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { InfoData, StartData } from "../types";

const { persistAtom } = recoilPersist();

export const categoryOrderListState = atom<StartData[]>({
  key: "categoryOrderListState",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const locationState = atom({
  key: "locationState",
  default: DEFAULT_LOCATION,
  effects_UNSTABLE: [persistAtom]
});
// FIXME 중복
export const dataState = atom<InfoData[]>({
  key: "data",
  default: []
});

export const testState = atom<InfoData[]>({
  key: "test",
  default: [
    {
      category: "POP",
      color: "#64B2E3",
      size: "2",
      sort: "강수",
      title: "강수확률"
    },
    {
      category: "PTY",
      color: "#FFA57A",
      size: "2",
      sort: "강수",
      title: "강수형태"
    },
    {
      category: "PCP",
      color: "#56DFA3",
      size: "2",
      sort: "강수",
      title: "1시간 강수량"
    }
  ]
});
