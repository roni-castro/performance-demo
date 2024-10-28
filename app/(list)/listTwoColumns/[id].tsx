import OrdersProducts from "@/features/lists/listWithTwoColumns/components/OrdersProducts";
import { GridType } from "@/features/shared/types/grid";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function ListTwoColumns() {
  const params = useLocalSearchParams<{ id: GridType }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `List with ${params.id}` });
  }, [navigation, params.id]);

  return <OrdersProducts typeOfGrid={params.id} />;
}
