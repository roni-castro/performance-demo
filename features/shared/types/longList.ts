import { Values } from "./values";

export const LongListTypes = {
  FLATLIST: "flatlist",
  FLASHLIST: "flashlist",
  SCROLLVIEW: "scrollview",
} as const;

export type LongListType = Values<typeof LongListTypes>;
