import { LongListType } from "@/features/shared/types/longList";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function LongList() {
  const params = useLocalSearchParams<{ id: LongListType }>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `Long list using ${params.id}` });
  }, [navigation, params.id]);

  return null;
}
