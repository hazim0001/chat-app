import "./App.css";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchRooms, addRoomWs } from "./redux/actions";

const App = ({ cableApp }) => {
  const dispatch = useDispatch();
  console.log(cableApp);

  useEffect(() => {
    const handleReceivedRoom = (room) => {
      dispatch(addRoomWs(room));
    };
    const createSubscription = () => {
      cableApp.subscriptions.create(
        { channel: "RoomsChannel" },
        { received: (room) => handleReceivedRoom(room) }
      );
    };
    dispatch(fetchRooms());
    createSubscription();
    return () => {
      console.log("out");
    };
  }, [dispatch, cableApp.subscriptions]);

  const rooms = useSelector((state) => state.rooms);

  const mapRooms = () => {
    return rooms.map((room, index) => <li key={index}>{room.name}</li>);
  };

  return (
    <div className="App">
      <h2>Rooms</h2>
      <ul>{mapRooms()}</ul>
    </div>
  );
};

export default App;
