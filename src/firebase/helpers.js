import { capitalize, noop, toLower } from "lodash";

export const prepareData = (recipes) => {
  const categories = [];
  const ingredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients ? ingredients.push(recipe.ingredients) : noop();
    recipe.categories ? categories.push(recipe.categories) : noop();
  });
  return {
    categories: [
      ...new Set(categories.flat().map((category) => toLower(category))),
    ].sort(),
    ingredients: [
      ...new Set(
        ingredients.flat().map((ingredient) => capitalize(ingredient.title))
      ),
    ].sort(),
    recipes,
  };
};
