import * as actionTypes from "./actionTypes";

export const setRecipes = (recipes) => {
  return {
    type: actionTypes.SET_RECIPES,
    recipes,
  };
};

export const startLoading = () => {
  return {
    type: actionTypes.START_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING,
  };
};
