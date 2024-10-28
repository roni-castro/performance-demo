import { GridTypes } from "@/features/shared/types/grid";
import { LongListTypes } from "@/features/shared/types/longList";
import { TMenu } from "@/features/shared/types/menu";

const listMenu: TMenu = {
  id: "list",
  title: "Lists",
  subMenus: [
    {
      title: "List with two columns",
      items: [
        {
          title: "Show FlatList Grid",
          routePath: `/listTwoColumns/${GridTypes.FLATLIST_GRID}`,
        },
        {
          title: "Show FlashList Grid",
          routePath: `/listTwoColumns/${GridTypes.FLASHLIST_GRID}`,
        },
        {
          title: "Show FlatList with Custom Grid",
          routePath: `/listTwoColumns/${GridTypes.CUSTOM_GRID}`,
        },
      ],
    },
    {
      title: "Long list",
      items: [
        {
          title: "Show long list using ScrollView",
          routePath: `/longList/${LongListTypes.SCROLLVIEW}`,
        },
        {
          title: "Show long list using FlatList",
          routePath: `/longList/${LongListTypes.FLATLIST}`,
        },
        {
          title: "Show long list using FlashList",
          routePath: `/longList/${LongListTypes.FLASHLIST}`,
        },
      ],
    },
  ],
};

export default listMenu;
