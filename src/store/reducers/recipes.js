import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: true,
  ingredients: [],
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return { ...state, loading: true };
    case actionTypes.STOP_LOADING:
      return { ...state, loading: false };
    case actionTypes.SET_DATA:
      return { ...state, ...action.data, loading: false };
    default:
      return state;
  }
};

export default reducer;
