import { Cart, Product } from "@/data/types/Cart";
import useFetchCartsProducts from "@/hooks/useFetchCartsProducts";
import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductGrid from "./ProductGrid";
import ProductItem from "./ProductItem";

const CartProductsGrid = ({ shouldUseNestedFlatList = false }) => {
  const {
    data,
    fetchNextPage,
    refreshPosts,
    hasNextPage,
    isFetching,
    isRefreshing,
  } = useFetchCartsProducts();

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductItem {...item} />
  );

  const renderCart = ({ item }: { item: Cart }) => {
    return (
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart ID: {item.id}</Text>
        {shouldUseNestedFlatList ? (
          /** This causes performance issue, nesting FlatLists */
          <FlatList
            data={item.products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={renderProduct}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          /** This is the trick to fix the need of nested FlatList and improve performance */
          <ProductGrid products={item.products} />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCart}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={refreshPosts}
          tintColor="#000"
        />
      }
      onEndReached={onEndReached}
      ListFooterComponent={
        isFetching && !isRefreshing ? (
          <ActivityIndicator size="large" color="#000" />
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    marginVertical: 10,
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
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default CartProductsGrid;
