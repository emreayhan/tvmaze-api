import axios from "axios";

const response = axios
  .create({
    baseURL: "http://api.tvmaze.com/"
  })
  .get(`search/shows/?`, {
    params: {
      q: "batman"
    }
  })
export default response