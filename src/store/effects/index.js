import { all, fork } from "redux-saga/effects";

import movieSaga from "./getMovieDataEffects";
import movieDetailSaga from "./getMovieDetailDataEffects";

export default function* rootSaga() {
  yield all([fork(movieSaga), fork(movieDetailSaga)]);
}
