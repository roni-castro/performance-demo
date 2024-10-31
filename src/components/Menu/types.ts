import { Href } from "expo-router";

export type TMenu = {
  id: string;
  title: string;
  subMenus: TSubMenu[];
};

export type TSubMenu = {
  title: string;
  items: TSubMenuItem[];
};

export type TSubMenuItem = {
  title: string;
  routePath: Href;
};
