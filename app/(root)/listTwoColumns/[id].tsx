import OrdersProducts from "@/features/flatListGrid/components/OrdersProducts";
import { GridType } from "@/features/shared/types/grid";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function ListTwoColumns() {
  const params = useLocalSearchParams<{ id: GridType }>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `List with ${params.id}` });
  }, [navigation, params.id]);

  return <OrdersProducts typeOfGrid={params.id} />;
}
