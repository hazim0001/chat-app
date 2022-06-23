import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then((res) => res.json())
      .then((roomsArr) => setRooms(roomsArr));

    return () => {};
  }, []);

  const handleReceivedRoom = (response) => {
    console.log(response);
    return setRooms([...rooms, response.rooms]);
  };

  return (
    <div className="App">
      <ActionCableConsumer
        channel={{ channel: "RoomsChannel" }}
        onReceived={handleReceivedRoom}
      />
    </div>
  );
};

export default App;
