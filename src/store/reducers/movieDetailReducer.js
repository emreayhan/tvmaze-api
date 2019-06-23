import { RECEIVE_DETAIL_DATA } from "../actions/movieDetailActions";

export default (state = [], { type, detailsResponse }) => {
  switch (type) {
    case RECEIVE_DETAIL_DATA:
      return detailsResponse;
    default:
      return state;
  }
};
