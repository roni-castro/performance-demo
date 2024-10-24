import { getRandomFruit, getRandomFruits } from "@/data/services/fruits";
import { useState } from "react";

const useFruits = (length: number = 5000) => {
  const [fruits, setFruits] = useState(() => getRandomFruits(length));

  const addFruit = () => {
    setFruits([getRandomFruit()].concat(fruits));
  };

  return { fruits, addFruit };
};

export default useFruits;
