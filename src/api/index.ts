import axios from "axios";

export const mediumApi = axios.create({
  baseURL: "https://api.rss2json.com",
});
