import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPES:
      return { ...state, recipes: action.recipes };
    case actionTypes.START_LOADING:
      return { ...state, loading: true };
    case actionTypes.STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
