import axios from "axios";

const KEY = "AIzaSyAvDsnt5KmFdMtQqg_00ExVqkIrMwg8DGw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
    type: "video",
  },
});
