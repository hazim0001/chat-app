import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { fetchRooms, addRoomWs } from "./redux/actions";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/rooms/:id" element={<Room />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
// {/* <h2>Rooms</h2>
// <ul>{mapRooms()}</ul> */}
