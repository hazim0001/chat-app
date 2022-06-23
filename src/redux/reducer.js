import * as types from "./types";

const initialState = [];

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ROOMS:
      return action.payload;
    case types.ADD_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default roomsReducer;
