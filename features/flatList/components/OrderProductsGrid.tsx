import { Order, Product } from "@/data/types/Order";
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
import { FlashList } from "@shopify/flash-list";
import ProductItem from "./ProductItem";
import ProductGrid from "./ProductGrid";
import { GridType, GridTypes } from "../shared/types";

type OrderProductsGridProps = {
  typeOfGrid: GridType;
};

const OrderProductsGrid = ({ typeOfGrid }: OrderProductsGridProps) => {
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

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductItem {...item} />
  );

  const productKeyExtractor = useCallback(
    (item: Product, i: number) => `${i}-${item.id}`,
    [],
  );

  const renderOrders = ({ item }: { item: Order }) => {
    return (
      <View style={styles.orderContainer}>
        <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
        {typeOfGrid === GridTypes.FLATLIST_GRID && (
          /** This causes performance issue, nesting FlatLists */
          <FlatList
            scrollEnabled={false}
            data={item.products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={renderProduct}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        )}
        {typeOfGrid === GridTypes.FLASHLIST_GRID && (
          /** FlashList works even when nested */
          <FlashList
            scrollEnabled={false}
            data={item.products}
            keyExtractor={productKeyExtractor}
            estimatedItemSize={145}
            renderItem={renderProduct}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        )}
        {typeOfGrid === GridTypes.CUSTOM_GRID && (
          /** This is the trick to fix the need of nested FlatList and improve performance */
          <ProductGrid products={item.products} />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderOrders}
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

const styles = StyleSheet.create({
  orderContainer: {
    padding: 10,
    backgroundColor: "#c0c0c0",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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

export default OrderProductsGrid;
