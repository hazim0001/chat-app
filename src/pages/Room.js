import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages, addMessageWs } from "../redux/actions";
import * as Cable from "../websocket";

const Room = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  // eslint-disable-next-line eqeqeq
  const room = rooms.find((room) => room.id == params.id);
  const roomMessages = useSelector((state) => state.messages);
  let channel = Cable.cable;
  let subscription = null;

  const handleReceivedRoom = (data) => {
    dispatch(addMessageWs(data));
  };
  const createSubscription = () => {
    subscription = channel.subscriptions.create(
      { channel: "ChatroomChannel", id: params.id },
      { received: (data) => handleReceivedRoom(data) }
    );
    // console.log("Room Subscription ");
    // console.log(channel.subscriptions);
  };
  const unSubscribe = () => {
    channel.subscriptions.remove(subscription);
    console.log(channel.subscriptions);
  };

  useEffect(() => {
    dispatch(fetchMessages(params.id));
    createSubscription();
    return () => {
      console.log("out from room");
      unSubscribe();
    };
  }, [channel.subscriptions, params.id, channel]);

  const mapMessages = () => {
    return roomMessages.map((message, index) => (
      <div key={index} style={messageDiv}>
        <span>{message.created_at}</span>
        <p>{message.text}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>{room?.name}</h2>
      <div>{mapMessages()}</div>
    </div>
  );
};

export default Room;
const messageDiv = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: "16px",
  paddingLeft: "16px",
};
