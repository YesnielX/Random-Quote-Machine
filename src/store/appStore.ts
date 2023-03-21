import { create } from "zustand";
import { randomColor } from "../utils/randomColor";
import { createSelectors } from "./createSelectors";

interface appStoreInterface {
  color: string;
  newRandomColor: () => void;
}

const useAppStoreBase = create<appStoreInterface>((set) => ({
  color: `${randomColor()}`,
  newRandomColor: () =>
    set((state) => ({
      color: `${randomColor()}`,
    })),
}));

export const useAppStore = createSelectors(useAppStoreBase);
