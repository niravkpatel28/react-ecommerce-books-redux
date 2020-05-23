// this action type will update current category and take current category as input

import { UPDATE_CURRENT_CATEGORY } from "./actions";

export const currentCategoryAction = (category) => {
  return {
    type: UPDATE_CURRENT_CATEGORY,
    payload: category,
  };
};
