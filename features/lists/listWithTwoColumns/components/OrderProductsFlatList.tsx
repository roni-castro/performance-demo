import { Order, Product } from "@/data/types/Order";
import React from "react";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

type OrderProductsFlatListProps = {
  order: Order;
};

const OrderProductsFlatList = ({ order }: OrderProductsFlatListProps) => {
  const renderProduct = ({ item }: { item: Product }) => (
    <ProductItem {...item} />
  );

  return (
    <FlatList
      data={order.products}
      keyExtractor={(product) => product.id.toString()}
      renderItem={renderProduct}
      numColumns={2}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OrderProductsFlatList;
