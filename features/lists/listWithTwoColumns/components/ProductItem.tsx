import { Product } from "@/data/types/Order";
import { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ProductItem({ title, price, thumbnail }: Product) {
  return (
    <View style={styles.productContainer}>
      <Image
        source={{ uri: thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 12,
    color: "#888",
  },
});

export default memo(ProductItem);
