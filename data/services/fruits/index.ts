const fruits = [
  ["avocado", "🥑"],
  ["apple", "🍏"],
  ["orage", "🍊"],
  ["banana", "🍌"],
  ["pear", "🍐"],
  ["strawberry", "🍓"],
  ["coconut", "🥥"],
];

const generateUniqueId = () => {
  return `${Date.now()}_${Math.floor(Math.random() * 1_000_000_00)}`;
};

const getRandomItem = () => {
  const item = fruits[Math.floor(Math.random() * fruits.length)];
  return {
    name: item[0],
    icon: item[1],
    id: generateUniqueId(),
  };
};

export const getRandomFruits = (length: number = 10) => {
  return Array.from(new Array(length)).map(getRandomItem);
};

export const getRandomFruit = () => {
  return getRandomItem();
};
