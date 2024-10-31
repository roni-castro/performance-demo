import { Values } from "@/types/values";

export const LongListTypes = {
  FLATLIST: "flatlist",
  FLASHLIST: "flashlist",
  SCROLLVIEW: "scrollview",
} as const;

export type TLongList = Values<typeof LongListTypes>;
