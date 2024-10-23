import OrderProductsGrid from "@/features/flatList/components/OrderProductsGrid";
import { GridType } from "@/features/flatList/shared/types";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function FlatListWithGrid() {
  const params = useLocalSearchParams<{ id: GridType }>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `List with ${params.id}` });
  }, [navigation, params.id]);

  return <OrderProductsGrid typeOfGrid={params.id} />;
}
