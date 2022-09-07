import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID Q8I32JYeKLQGsFXCIVihSQTgPm7VhmuQG-okO0h7H_Q",
  },
  baseURL: "https://api.unsplash.com",
});
