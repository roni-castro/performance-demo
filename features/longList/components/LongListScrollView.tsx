import useFruits from "@/hooks/useFruits";
import React from "react";
import { Button, ScrollView } from "react-native";
import FruitItem from "./FruitItem";

const LongListScrollView = () => {
  const { fruits, addFruit } = useFruits();

  return (
    <>
      <Button title="add item" onPress={addFruit} />
      <ScrollView>
        {fruits.map(({ name, icon, id }) => (
          <FruitItem key={id.toString()} name={name} icon={icon} />
        ))}
      </ScrollView>
    </>
  );
};

export default LongListScrollView;
