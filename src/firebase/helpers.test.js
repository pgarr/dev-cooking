import { prepareData } from "./helpers";

test('"helpers.prepareData" returns unique ingredient names', () => {
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
  expect(prepareData(recipes).ingredients).toStrictEqual([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]);
});

test('"helpers.prepareData" returns unique categories names', () => {
  const recipes = [
    {
      categories: ["A"],
      title: "test1",
    },
    {
      categories: ["a", "B", "D"],
      title: "test2",
    },
    {
      categories: ["A", "B", "d"],
      title: "test3",
    },
  ];
  expect(prepareData(recipes).categories).toStrictEqual(["A", "B", "D"]);
});

test('"helpers.prepareData" returns unmodified recipes', () => {
  const recipes = [
    {
      categories: ["A"],
      title: "test1",
      ingredients: [
        { title: "A", amount: 1 },
        { title: "B", amount: 1 },
        { title: "C", amount: 1 },
        { title: "D", amount: 1 },
      ],
    },
    {
      categories: ["a", "B", "D"],
      title: "test2",
      ingredients: [
        { title: "A", amount: 1 },
        { title: "B", amount: 1 },
        { title: "C", amount: 1 },
        { title: "D", amount: 1 },
      ],
    },
    {
      categories: ["A", "B", "d"],
      title: "test3",
      ingredients: [
        { title: "A", amount: 1 },
        { title: "B", amount: 1 },
        { title: "C", amount: 1 },
        { title: "D", amount: 1 },
      ],
    },
  ];
  expect(prepareData(recipes).recipes).toStrictEqual(recipes);
});
