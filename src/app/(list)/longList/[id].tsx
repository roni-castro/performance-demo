import LongListFlashList from "@/features/lists/longList/components/LongListFlashList";
import LongListFlatList from "@/features/lists/longList/components/LongListFlatList";
import LongListScrollView from "@/features/lists/longList/components/LongListScrollView";
import {
  TLongList,
  LongListTypes,
} from "@/features/lists/longList/types/longList";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

const LongListMap = {
  [LongListTypes.FLASHLIST]: LongListFlashList,
  [LongListTypes.FLATLIST]: LongListFlatList,
  [LongListTypes.SCROLLVIEW]: LongListScrollView,
} as const;

export default function LongList() {
  const { id } = useLocalSearchParams<{ id: TLongList }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Long list using ${id}` });
  }, [navigation, id]);

  const LongListComponent = LongListMap[id];
  return <LongListComponent />;
}
