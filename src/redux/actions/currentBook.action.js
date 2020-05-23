//this will generate the action object for current book
// it should receive  a current book.

import { UPDATE_CURRENT_BOOK } from "./actions";

export const currentBookAction = (book) => {
  return {
    type: UPDATE_CURRENT_BOOK,
    payload: book,
  };
};
