import { combineReducers } from "redux";
import response from "./movieReducer";
import detailsResponse from "./movieDetailReducer";

export default combineReducers({
  response,
  detailsResponse
});
