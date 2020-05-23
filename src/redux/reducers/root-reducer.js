//main reducer at which all the reducers will converge
import { combineReducer } from "redux";
// key here is the slice of state that will be modified,
// value will be the reducer that is modifying the state
// Sequentially import each of the reducer and combine
// them into a single rootReducer
import categoryReducer from "./currentCategory.reducer";
import currentBookReducer from "./currentBook.reducer";
import booksReducer from "./books.reducer";
import categoriesReducer from "./categories.reducers";

// combining each reducer
rootReducer = combineReducer({
  books: booksReducer,
  categories: categoriesReducer,
  currentCategory: categoryReducer,
  currentBook: currentBookReducer,
});

export default rootReducer;
