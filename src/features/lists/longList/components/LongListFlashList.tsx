import { TFruit } from "@/data/types/Fruit";
import useFruits from "@/hooks/useFruits";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Button } from "react-native";
import FruitItem from "./FruitItem";

const LongListFlashList = () => {
  const { fruits, addFruit } = useFruits();

  const renderItem = ({ item: { name, icon } }: { item: TFruit }) => (
    <FruitItem name={name} icon={icon} />
  );

  const keyExtractor = ({ id }: TFruit) => id;
  return (
    <>
      <Button title="add item" onPress={addFruit} />
      <FlashList
        data={fruits}
        estimatedItemSize={39}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </>
  );
};

export default LongListFlashList;
