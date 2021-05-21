import axios from "axios";
const KEY = "AIzaSyBfWKrQ7Pr4jMl7LnME05pxzcl_kfqcTi4";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    type: "video",
    key: `${KEY}`,
  },
});
