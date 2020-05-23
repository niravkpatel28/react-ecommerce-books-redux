// this will initialize the categories that it will receive in form of an array
import { INITIALISE_CATEGORIES } from "./actions";

export const initializeCategoriesAction = (categories) => {
  return {
    type: INITIALISE_CATEGORIES,
    payload: categories,
  };
};
