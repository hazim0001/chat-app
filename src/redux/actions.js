import * as types from "./types";

import { apiFetchRooms } from "./utils";

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
