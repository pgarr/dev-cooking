import { getUniqueIngredients } from "./helpers";

test('"helpers.getUniqueIngredients" returns unique ingredient names', () => {
  const recipes = [
    {
      ingredients: [
        { title: "A", amount: 1 },
        { title: "B", amount: 1 },
        { title: "C", amount: 1 },
        { title: "D", amount: 1 },
      ],
      title: "test1",
    },
    {
      ingredients: [
        { title: "A", amount: 1 },
        { title: "D", amount: 1 },
        { title: "E", amount: 1 },
        { title: "F", amount: 1 },
      ],
      title: "test2",
    },
    {
      ingredients: [
        { title: "a", amount: 1 },
        { title: "C", amount: 1 },
        { title: "E", amount: 1 },
        { title: "F", amount: 1 },
        { title: "G", amount: 1 },
      ],
      title: "test3",
    },
  ];
  expect(getUniqueIngredients(recipes)).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]);
});
