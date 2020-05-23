// this just returns a slice with all books
import books from "../../data/books";
import { INITIALISE_BOOKS } from "../actions/actions";
const INITIAL_STATE = {
  books: [],
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALISE_BOOKS:
      return {
        ...state,
        books: [...action.payload],
      };
    default:
      return state;
  }
};

export default bookReducer;
