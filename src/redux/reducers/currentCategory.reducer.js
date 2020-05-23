// this reducer will update the current category
const INITIAL_STATE = {
  currentCategory: null,
};
import { UPDATE_CURRENT_CATEGORY } from "../actions/actions";

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: { ...action.payload },
      };
    default:
      return state;
  }
};

export default categoryReducer;
