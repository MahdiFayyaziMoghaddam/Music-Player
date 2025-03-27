import axios from "axios";
import { DataBaseAPI, ServerAPI } from "./api";

const serverApiRequest = axios.create({
  baseURL: ServerAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

const dbApiRequest = axios.create({
  baseURL: DataBaseAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { serverApiRequest, dbApiRequest };
