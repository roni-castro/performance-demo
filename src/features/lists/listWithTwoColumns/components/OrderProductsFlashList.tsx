import { Order, Product } from "@/data/types/Order";
import React, { useCallback } from "react";
import { FlashList } from "@shopify/flash-list";
import ProductItem from "./ProductItem";

type OrderProductsFlashListProps = {
  order: Order;
};

const OrderProductsFlashList = ({ order }: OrderProductsFlashListProps) => {
  const renderProduct = ({ item }: { item: Product }) => (
    <ProductItem {...item} />
  );

  const productKeyExtractor = useCallback(
    (item: Product, i: number) => `${i}-${item.id}`,
    [],
  );

  return (
    <FlashList
      data={order.products}
      keyExtractor={productKeyExtractor}
      estimatedItemSize={145}
      renderItem={renderProduct}
      numColumns={2}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OrderProductsFlashList;
