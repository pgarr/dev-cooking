import { expect, test } from "vitest";
import { prepareData } from "../helpers";
import { Recipe } from "../../types";

test('"helpers.prepareData" returns unique ingredient names', () => {
  const recipes = [
    {
      categories: [],
      ingredients: [
        { title: "A", amount: 1 },
        { title: "B", amount: 1 },
        { title: "C", amount: 1 },
        { title: "D", amount: 1 },
      ],
      title: "test1",
    },
    {
      categories: [],
      ingredients: [
        { title: "A", amount: 1 },
        { title: "D", amount: 1 },
        { title: "E", amount: 1 },
        { title: "F", amount: 1 },
      ],
      title: "test2",
    },
    {
      categories: [],
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
  expect(prepareData(recipes as unknown as Recipe[]).ingredients).toStrictEqual(
    ["A", "B", "C", "D", "E", "F", "G"],
  );
});

test('"helpers.prepareData" returns unique categories names', () => {
  const recipes = [
    { ingredients: [], categories: ["A"], title: "test1" },
    { ingredients: [], categories: ["a", "B", "D"], title: "test2" },
    { ingredients: [], categories: ["A", "B", "d"], title: "test3" },
  ];
  expect(prepareData(recipes as unknown as Recipe[]).categories).toStrictEqual([
    "a",
    "b",
    "d",
  ]);
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
  expect(prepareData(recipes as unknown as Recipe[]).recipes).toStrictEqual(
    recipes,
  );
});
