import { Product } from "@/data/types/Order";
import { StyleSheet, View } from "react-native";
import ProductItem from "./ProductItem";

type ProductGridProps = {
  products: Product[];
  numColumns?: number;
};

const ProductGrid = ({ products, numColumns = 2 }: ProductGridProps) => {
  return (
    <View>
      {products.map(
        (_, index) =>
          index % numColumns === 0 && ( // check is the current index is a multiple of numColumns
            <View key={index} style={styles.productItemContainer}>
              {/** create a row with {numColumns} products */}
              {products.slice(index, index + numColumns).map((prod) => (
                <ProductItem key={prod.id} {...prod} />
              ))}
            </View>
          ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productItemContainer: {
    flexDirection: "row",
  },
});

export default ProductGrid;
