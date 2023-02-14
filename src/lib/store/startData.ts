import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { DEFAULT_LOCATION } from "@/lib/constants/constants";
import { StartData, InfoData } from "../types";

const { persistAtom } = recoilPersist();

export const startState = atom<StartData[]>({
  key: "startState",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const locationState = atom({
  key: "selectedInformation",
  default: DEFAULT_LOCATION,
  effects_UNSTABLE: [persistAtom]
});

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
      size: "1",
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
