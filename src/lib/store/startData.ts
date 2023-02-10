import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { DEFAULT_LOCATION } from "@/lib/constants/constants";
import { StartData } from "../types";

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
