import actionCable from "actioncable";

export const cable = actionCable.createConsumer("ws://localhost:3000/cable");
