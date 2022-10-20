import axios from "axios";

const instanse = axios.create({
  baseURL: "http://localhost:8301",
});

const http = {
  instanse,
};

export default http;
