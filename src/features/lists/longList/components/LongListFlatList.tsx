import useFruits from "@/hooks/useFruits";
import React from "react";
import { Button, FlatList } from "react-native";
import FruitItem from "./FruitItem";
import { TFruit } from "@/data/types/Fruit";

const LongListFlatList = () => {
  const { fruits, addFruit } = useFruits();

  const renderItem = ({ item: { name, icon } }: { item: TFruit }) => (
    <FruitItem name={name} icon={icon} />
  );

  return (
    <>
      <Button title="add item" onPress={addFruit} />
      <FlatList
        data={fruits}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
      />
    </>
  );
};

export default LongListFlatList;
