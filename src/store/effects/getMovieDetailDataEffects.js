import { put, takeLatest } from "redux-saga/effects";
import {
  REQUEST_DETAIL_DATA,
  RECEIVE_DETAIL_DATA
} from "../actions/movieDetailActions";
import fetchData from "../../axios/tvmazeApi";

function* getDetailData(action) {
  try {
    const detailsResponse = fetchData.get(`shows/${action.payload}`);
    console.log(detailsResponse, "details");
    yield put({ type: RECEIVE_DETAIL_DATA, detailsResponse });
  } catch (e) {
    console.log(e);
  }
}

export default function* LoadDetailData() {
  yield takeLatest(REQUEST_DETAIL_DATA, getDetailData);
}
