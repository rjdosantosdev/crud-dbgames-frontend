import axios from "axios";

const api = axios.create({
  baseURL: "https://cruddbgames.herokuapp.com",
});

export default api;
