import { capitalize } from "lodash";

export const getUniqueIngredients = (recipes) => {
  const ingredients = [];
  recipes.forEach((recipe) => {
    ingredients.push(recipe.ingredients);
  });
  return [
    ...new Set(
      ingredients.flat().map((ingredient) => capitalize(ingredient.title))
    ),
  ].sort();
};
