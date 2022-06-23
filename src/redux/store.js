import roomsReducer from "./reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  rooms: roomsReducer,
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composedEnhancer);

export default store;
