import { INITIALISE_CATEGORIES } from "../actions/actions";
import categories from "../../data/categories";

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALISE_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    default:
      return state;
  }
};

export default categoriesReducer;
