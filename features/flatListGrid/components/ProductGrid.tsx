import { Product } from "@/data/types/Order";
import { StyleSheet, View } from "react-native";
import ProductItem from "./ProductItem";

type ProductGridProps = {
  products: Product[];
  numColumns?: number;
};

const ProductGrid = ({ products, numColumns = 2 }: ProductGridProps) => {
  const rows = [];
  for (let rowIndex = 0; rowIndex < products.length; rowIndex += numColumns) {
    const rowProducts = products.slice(rowIndex, rowIndex + numColumns);
    const rowKey = rowProducts.map((p) => p.id).join("-");
    rows.push(
      <View key={rowKey} style={styles.productItemContainer}>
        {rowProducts.map((prod) => (
          <ProductItem key={prod.id} {...prod} />
        ))}
      </View>,
    );
  }
  return <View>{rows}</View>;
};

const styles = StyleSheet.create({
  productItemContainer: {
    flexDirection: "row",
  },
});

export default ProductGrid;
