import roomsReducer from "./roomsReducer";
import messagesReducer from "./messagesReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  rooms: roomsReducer,
  messages: messagesReducer,
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composedEnhancer);

export default store;
