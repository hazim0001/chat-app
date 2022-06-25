import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms, addRoomWs } from "../redux/actions";
import { Link } from "react-router-dom";
import * as Cable from "../websocket";

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  let channel = Cable.cable;
  let subscription = null;

  const handleReceivedRoom = (room) => {
    dispatch(addRoomWs(room));
  };

  const createSubscription = () => {
    subscription = channel.subscriptions?.create(
      { channel: "RoomsChannel" },
      { received: (room) => handleReceivedRoom(room) }
    );
    console.log("Rooms Subscription ");
    console.log(channel.subscriptions);
  };
  const unSubscribe = () => {
    channel.subscriptions.remove(subscription);
    console.log(channel.subscriptions);
  };

  useEffect(() => {
    dispatch(fetchRooms());
    createSubscription();
    return () => {
      console.log("out from rooms");
      // unSubscribe();
      unSubscribe();
    };
  }, [dispatch, channel]);

  const mapRooms = () => {
    return rooms.map((room, index) => (
      <li key={index}>
        <Link key={index} to={`/rooms/${room.id}`}>
          {room.name}
        </Link>
      </li>
    ));
  };

  return (
    <div className="mx-auto">
      <h2>Rooms</h2>
      <ol>{mapRooms()}</ol>
    </div>
  );
};

export default Rooms;
