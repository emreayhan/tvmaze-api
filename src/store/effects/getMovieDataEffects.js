import { put, takeLatest } from "redux-saga/effects";
import { REQUEST_DATA, RECEIVE_DATA } from "../actions/movieActions";
import fetchData from "../../axios/tvmazeApi";

function* getData() {
  try {
    const response = fetchData.get(`search/shows/?`, {
      params: {
        q: "batman"
      }
    });
    yield put({ type: RECEIVE_DATA, response });
  } catch (e) {
    console.log(e);
  }
}

export default function* loadData() {
  yield takeLatest(REQUEST_DATA, getData);
}
