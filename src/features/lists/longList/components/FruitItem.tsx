import { TFruit } from "@/data/types/Fruit";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type FruitItemProps = Omit<TFruit, "id">;

const FruitItem = ({ name, icon }: FruitItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.icon}>{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    margin: 3,
    padding: 5,
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    width: 150,
  },
  icon: {
    fontSize: 20,
  },
});

export default FruitItem;
