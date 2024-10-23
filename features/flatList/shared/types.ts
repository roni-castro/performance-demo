export const GridTypes = {
  FLATLIST_GRID: "flatlist-grid",
  FLASHLIST_GRID: "flashlist-grid",
  CUSTOM_GRID: "custom-grid",
} as const;

type Values<T> = T[keyof T];
export type GridType = Values<typeof GridTypes>;
