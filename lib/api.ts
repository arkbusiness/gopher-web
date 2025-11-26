import axios from "axios";
import { environment } from "../utils";

export const api = axios.create({
  baseURL: environment.baseUrl,
  timeout: 50000, // 50 seconds
});
