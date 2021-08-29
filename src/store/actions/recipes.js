import * as actionTypes from "./actionTypes";

export const setRecipes = (recipes) => {
  return {
    type: actionTypes.SET_RECIPES,
    recipes,
  };
};
