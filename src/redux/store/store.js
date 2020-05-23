import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/root-reducer";

// incase more than one middlewares have to be applied
// const middlewares = [logger];
// const store = createStore(rootReducer, applyMiddleware({ ...middlewares }));

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
