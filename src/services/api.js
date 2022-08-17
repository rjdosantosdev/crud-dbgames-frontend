import axios from "axios";
const api = axios.create({
  // baseURL: "https://cruddbgames.herokuapp.com",
  baseURL: "http://localhost:8080",
  // headers: {
  //   "Content-type": "application/json",
  // },
});

export default api;
