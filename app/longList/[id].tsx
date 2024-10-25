import LongListFlashList from "@/features/longList/components/LongListFlashList";
import LongListFlatList from "@/features/longList/components/LongListFlatList";
import LongListScrollView from "@/features/longList/components/LongListScrollView";
import { LongListType, LongListTypes } from "@/features/shared/types/longList";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

const LongListMap = {
  [LongListTypes.FLASHLIST]: LongListFlashList,
  [LongListTypes.FLATLIST]: LongListFlatList,
  [LongListTypes.SCROLLVIEW]: LongListScrollView,
} as const;

export default function LongList() {
  const { id } = useLocalSearchParams<{ id: LongListType }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Long list using ${id}` });
  }, [navigation, id]);

  const LongListComponent = LongListMap[id];
  return <LongListComponent />;
}
