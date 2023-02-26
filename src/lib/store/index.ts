import { DEFAULT_LOCATION } from "@/lib/constants";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CategoryItem } from "../types";

const { persistAtom } = recoilPersist();

export const categoryListState = atom<CategoryItem[]>({
  key: "categoryListState",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const locationState = atom({
  key: "locationState",
  default: DEFAULT_LOCATION,
  effects_UNSTABLE: [persistAtom]
});
