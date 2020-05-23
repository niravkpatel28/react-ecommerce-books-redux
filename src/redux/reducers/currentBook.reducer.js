// this will update the current book upon click onto a book card
const INITIAL_STATE = {
  currentBook: null,
};

import { UPDATE_CURRENT_BOOK } from "../actions/actions";

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_BOOK:
      return {
        ...state,
        currentBook: { ...action.payload },
      };
    default:
      return state;
  }
};

export default bookReducer;
