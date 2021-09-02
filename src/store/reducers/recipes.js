import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: true,
  ingredients: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPES:
      return { ...state, recipes: action.recipes };
    case actionTypes.START_LOADING:
      return { ...state, loading: true };
    case actionTypes.STOP_LOADING:
      return { ...state, loading: false };
    case actionTypes.SET_INGREDIENTS:
      return { ...state, ingredients: action.ingredients };
    default:
      return state;
  }
};

export default reducer;
