import { Order } from "@/data/types/Order";
import React from "react";
import { View } from "react-native";
import ProductGrid from "./ProductGrid";

type OrderProductsCustomGridProps = {
  order: Order;
};

const OrderProductsCustomGrid = ({ order }: OrderProductsCustomGridProps) => {
  return (
    <View>
      <ProductGrid products={order.products} numColumns={2} />
    </View>
  );
};

export default OrderProductsCustomGrid;
