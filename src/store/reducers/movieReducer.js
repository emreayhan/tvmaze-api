import { RECEIVE_DATA } from "../actions/movieActions";

export default (state = [], { type, response }) => {
  switch (type) {
    case RECEIVE_DATA:
      return response;
    default:
      return state;
  }
};
