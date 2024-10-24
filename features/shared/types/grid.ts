import { Values } from "./values";

export const GridTypes = {
  FLATLIST_GRID: "flatlist-grid",
  FLASHLIST_GRID: "flashlist-grid",
  CUSTOM_GRID: "custom-grid",
} as const;

export type GridType = Values<typeof GridTypes>;
