import { Order } from "@/data/types/Order";
import {
  TGrid,
  GridTypes,
} from "@/features/lists/listWithTwoColumns/types/grid";
import useFetchOrdersProducts from "@/hooks/useFetchOrdersProducts";
import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import OrderProductsCustomGrid from "./OrderProductsCustomGrid";
import OrderProductsFlashList from "./OrderProductsFlashList";
import OrderProductsFlatList from "./OrderProductsFlatList";

type OrdersProductsProps = {
  typeOfGrid: TGrid;
};

const OrdersProducts = ({ typeOfGrid }: OrdersProductsProps) => {
  const {
    data: orders,
    fetchNextPage,
    refreshPosts,
    hasNextPage,
    isFetching,
    isRefreshing,
  } = useFetchOrdersProducts();

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  const renderOrder = ({ item }: { item: Order }) => {
    const OrderProducts = OrderProductsMap[typeOfGrid];
    return (
      <View style={styles.orderContainer}>
        <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
        {OrderProducts ? OrderProducts(item) : null}
      </View>
    );
  };

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderOrder}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={refreshPosts}
          tintColor="#000"
        />
      }
      onEndReached={onEndReached}
      ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
      ListFooterComponent={
        isFetching && !isRefreshing ? (
          <ActivityIndicator size="large" color="#000" />
        ) : null
      }
    />
  );
};

const OrderProductsMap = {
  [GridTypes.FLATLIST_GRID]: (order: Order) => (
    <OrderProductsFlatList order={order} />
  ),
  [GridTypes.FLASHLIST_GRID]: (order: Order) => (
    <OrderProductsFlashList order={order} />
  ),
  [GridTypes.CUSTOM_GRID]: (order: Order) => (
    <OrderProductsCustomGrid order={order} />
  ),
};

const styles = StyleSheet.create({
  orderContainer: {
    padding: 10,
    backgroundColor: "#c0c0c0",
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 2,
        blurRadius: 4,
        spreadDistance: 0,
        color: "#c0c0c0",
      },
    ],
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardSeparator: {
    height: 16,
  },
});

export default OrdersProducts;
