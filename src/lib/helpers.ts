import { capitalize, toLower } from "lodash";
import { Ingredient, Recipe } from "../types";

export const prepareData = (recipes: Recipe[]) => {
  const categories: string[] = [];
  const ingredients: Ingredient[] = [];
  recipes.forEach((recipe) => {
    ingredients.push(...recipe.ingredients);
    categories.push(...recipe.categories);
  });
  return {
    categories: [
      ...new Set(categories.flat().map((category) => toLower(category))),
    ].sort(),
    ingredients: [
      ...new Set(
        ingredients.flat().map((ingredient) => capitalize(ingredient.title)),
      ),
    ].sort(),
    recipes,
  };
};
