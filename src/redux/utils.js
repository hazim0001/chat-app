import axios from "axios";

const ROOT = "http://localhost:3000";

axios.defaults.baseURL = `${ROOT}`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

// axios.interceptors.request.use((config) => {
//   const token = fetchItem("token");
//   config.headers.Authorization = "Bearer " + token;

//   return config;
// });
export const apiFetchRooms = () => {
  return axios.get("/rooms");
};
export const apiFetchRoomMessages = (roomId) => {
  return axios.get(`/rooms/${roomId}/messages`);
};
