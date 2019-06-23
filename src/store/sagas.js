import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_DATA, RECEIVE_DATA } from "./actions";
import response from "../axios/tvmazeApi";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getData(action) {
  try {
    yield put({ type: RECEIVE_DATA, response });
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_DATA, getData);
}
