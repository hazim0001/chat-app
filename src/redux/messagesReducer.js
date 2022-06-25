import * as types from "./types";

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES:
      return action.payload;
    case types.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messagesReducer;
