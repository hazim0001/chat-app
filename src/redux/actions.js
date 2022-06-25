import * as types from "./types";

import { apiFetchRooms, apiFetchRoomMessages } from "./utils";

export const fetchRooms = () => (dispatch) => {
  apiFetchRooms()
    .then((response) => {
      dispatch(addRooms(response.data));
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const addRoomWs = (newRoom) => (dispatch) => {
  dispatch(addRoom(newRoom));
};

const addRooms = (fetchedRooms) => ({
  type: types.FETCH_ROOMS,
  payload: fetchedRooms,
});

const addRoom = (newRoom) => ({
  type: types.ADD_ROOM,
  payload: newRoom,
});
/// =>            Messages actions

export const fetchMessages = (roomId) => (dispatch) => {
  apiFetchRoomMessages(roomId)
    .then((response) => {
      dispatch(addMessages(response.data));
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const addMessageWs = (newMessage) => (dispatch) => {
  dispatch(addMessage(newMessage));
};

const addMessages = (fetchedMessages) => ({
  type: types.FETCH_MESSAGES,
  payload: fetchedMessages,
});

const addMessage = (newMessage) => ({
  type: types.ADD_MESSAGE,
  payload: newMessage,
});
