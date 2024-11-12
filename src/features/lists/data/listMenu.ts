import { GridTypes } from "@/features/lists/listWithTwoColumns/types/grid";
import { LongListTypes } from "@/features/lists/longList/types/longList";
import { TMenu } from "@/components/Menu/types";

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
          title: "Show long list using ScrollView (slow)",
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
