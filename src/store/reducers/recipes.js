import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPES:
      return { ...state, recipes: action.recipes };
    default:
      return state;
  }
};

export default reducer;
