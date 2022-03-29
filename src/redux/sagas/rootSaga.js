import { all } from "redux-saga/effects";

import watchCounterSaga from "./counterSaga";

export default function* rootSaga() {
  yield all([watchCounterSaga()]);
}
