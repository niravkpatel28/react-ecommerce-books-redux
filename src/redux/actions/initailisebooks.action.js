// this will initialize the books that it will receive in form of an array
import { INITIALISE_BOOKS } from "./actions";

export const initializeBooksAction = (books) => {
  return {
    type: INITIALISE_BOOKS,
    payload: books,
  };
};
